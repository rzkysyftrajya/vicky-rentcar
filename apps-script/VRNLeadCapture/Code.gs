/**
 * VRN lead and WhatsApp click capture receiver.
 * Deploy in a separate Apps Script project as a web app (Execute as Me /
 * Anyone). Requests are accepted only when signed by the server backend.
 */
const CAPTURE_HEADERS = [
  'Lead Token (HMAC)',
  'Kota',
  'GCLID',
  'Waktu ditangkap WIB',
  'Consent dicatat',
  'Nonce',
  'Status',
];

function setupVrnCaptureReceiver() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = properties.getProperty('VRN_SPREADSHEET_ID');
  const secret = properties.getProperty('VRN_INGEST_HMAC_SECRET');
  if (!spreadsheetId || !secret || secret.length < 32) {
    throw new Error(
      'Set VRN_SPREADSHEET_ID dan VRN_INGEST_HMAC_SECRET (32+ karakter) di Script Properties terlebih dahulu.',
    );
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const leadSheet = spreadsheet.getSheetByName('Lead Web Match SBY');
  if (!leadSheet) {
    throw new Error('Tab Lead Web Match SBY tidak ditemukan; sheet tidak dibuat.');
  }
  if (
    leadSheet
      .getRange(1, 1, 1, CAPTURE_HEADERS.length)
      .getValues()[0]
      .join('|') !== CAPTURE_HEADERS.join('|')
  ) {
    throw new Error('Header Lead Web Match SBY berbeda.');
  }
}

function captureHex_(bytes) {
  return bytes
    .map((byte) => (byte + 256) % 256)
    .map((byte) => ('0' + byte.toString(16)).slice(-2))
    .join('');
}

function captureEq_(actual, expected) {
  if (actual.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < actual.length; index += 1) {
    difference |= actual.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}

function captureJson_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function validOptionalClickId_(value) {
  return (
    value === undefined ||
    (typeof value === 'string' && /^[A-Za-z0-9_.~-]{1,500}$/.test(value))
  );
}

function safeSheetText_(value, maxLength) {
  const text = String(value)
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ')
    .trim()
    .slice(0, maxLength);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function validateWhatsAppClick_(data) {
  const allowedKeys = {
    eventType: true,
    eventId: true,
    timestamp: true,
    page: true,
    car: true,
    gclid: true,
    gbraid: true,
    wbraid: true,
    utm: true,
  };
  if (
    !data ||
    typeof data !== 'object' ||
    Array.isArray(data) ||
    Object.keys(data).some((key) => !allowedKeys[key])
  ) {
    throw new Error('Data klik WhatsApp tidak valid.');
  }

  if (
    data.eventType !== 'WHATSAPP_CLICK' ||
    typeof data.eventId !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      data.eventId,
    ) ||
    typeof data.timestamp !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data.timestamp) ||
    !Number.isFinite(Date.parse(data.timestamp)) ||
    typeof data.page !== 'string' ||
    !data.page.startsWith('/') ||
    data.page.startsWith('//') ||
    data.page.length > 500 ||
    (data.car !== undefined &&
      (typeof data.car !== 'string' || data.car.length > 200)) ||
    !validOptionalClickId_(data.gclid) ||
    !validOptionalClickId_(data.gbraid) ||
    !validOptionalClickId_(data.wbraid)
  ) {
    throw new Error('Data klik WhatsApp tidak valid.');
  }

  if (data.utm !== undefined) {
    if (
      !data.utm ||
      typeof data.utm !== 'object' ||
      Array.isArray(data.utm) ||
      Object.keys(data.utm).length > 10
    ) {
      throw new Error('Parameter UTM tidak valid.');
    }
    Object.keys(data.utm).forEach((key) => {
      const value = data.utm[key];
      if (
        !/^utm_[a-z0-9_]{1,40}$/.test(key) ||
        typeof value !== 'string' ||
        value.length > 200
      ) {
        throw new Error('Parameter UTM tidak valid.');
      }
    });
  }
}

function appendWhatsAppClick_(spreadsheet, data) {
  const sheet = spreadsheet.getSheetByName('Lead Web Match SBY');
  if (!sheet) throw new Error('Tab Lead Web Match SBY tidak ditemukan.');
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) throw new Error('Sibuk, coba lagi.');
  try {
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existing = sheet
        .getRange(2, 6, lastRow - 1, 1)
        .createTextFinder(data.eventId)
        .matchEntireCell(true)
        .findNext();
      if (existing) {
        return { ok: true, duplicate: true };
      }
    }

    const timestampWib =
      Utilities.formatDate(
        new Date(data.timestamp),
        'Asia/Jakarta',
        "yyyy-MM-dd'T'HH:mm:ss",
      ) + '+07:00';
    const utm = data.utm || {};
    const row = [
      '',
      'Surabaya',
      data.gclid ? safeSheetText_(data.gclid, 500) : '',
      timestampWib,
      '',
      safeSheetText_(data.eventId, 36),
      'RECORDED',
      'WHATSAPP_CLICK',
      safeSheetText_(data.page, 500),
      data.car ? safeSheetText_(data.car, 200) : '',
      data.gbraid ? safeSheetText_(data.gbraid, 500) : '',
      data.wbraid ? safeSheetText_(data.wbraid, 500) : '',
      utm.utm_source ? safeSheetText_(utm.utm_source, 200) : '',
      utm.utm_medium ? safeSheetText_(utm.utm_medium, 200) : '',
      utm.utm_campaign ? safeSheetText_(utm.utm_campaign, 200) : '',
    ];
    const rowIndex = sheet.getLastRow() + 1;
    sheet.getRange(rowIndex, 1, 1, 15).setValues([row]);
    return { ok: true, duplicate: false };
  } finally {
    lock.releaseLock();
  }
}

function appendLegacyLead_(spreadsheet, data, nonce, cache) {
  if (
    data.city !== 'Surabaya' ||
    !/^[a-f0-9]{64}$/.test(String(data.phoneHash || '')) ||
    !/^[A-Za-z0-9_.~-]{8,500}$/.test(String(data.gclid || '')) ||
    data.consent !== true
  ) {
    throw new Error('Data tidak memenuhi syarat.');
  }

  if (cache.get('vrn:' + nonce)) {
    throw new Error('Permintaan pernah diproses.');
  }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) throw new Error('Sibuk, coba lagi.');
  try {
    if (cache.get('vrn:' + nonce)) {
      throw new Error('Permintaan pernah diproses.');
    }
    const sheet = spreadsheet.getSheetByName('Lead Web Match SBY');
    if (!sheet) throw new Error('Jalankan setupVrnCaptureReceiver terlebih dahulu.');
    const timestamp =
      Utilities.formatDate(
        new Date(),
        'Asia/Jakarta',
        "yyyy-MM-dd'T'HH:mm:ss",
      ) + '+07:00';
    const rowIndex = sheet.getLastRow() + 1;
    sheet.getRange(rowIndex, 1, 1, 7).setNumberFormat('@');
    sheet.getRange(rowIndex, 1, 1, 7).setValues([
      [data.phoneHash, 'Surabaya', data.gclid, timestamp, 'YES', nonce, 'RECORDED'],
    ]);
    cache.put('vrn:' + nonce, '1', 600);
  } finally {
    lock.releaseLock();
  }
}

function doPost(e) {
  try {
    if (
      !e ||
      !e.postData ||
      !e.postData.contents ||
      e.postData.contents.length > 5000
    ) {
      throw new Error('Payload tidak valid.');
    }

    const body = JSON.parse(e.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const secret = properties.getProperty('VRN_INGEST_HMAC_SECRET');
    const spreadsheetId = properties.getProperty('VRN_SPREADSHEET_ID');
    if (!spreadsheetId || !secret || secret.length < 32) {
      throw new Error('Endpoint belum dikonfigurasi.');
    }

    const timestamp = Number(body.ts);
    const nonce = String(body.nonce || '');
    const signature = String(body.sig || '');
    if (
      !Number.isFinite(timestamp) ||
      Math.abs(Date.now() - timestamp) > 5 * 60 * 1000 ||
      !/^[a-f0-9-]{20,80}$/i.test(nonce) ||
      !/^[a-f0-9]{64}$/.test(signature)
    ) {
      throw new Error('Permintaan kedaluwarsa atau tidak valid.');
    }

    const data = body.data || {};
    const signed = String(body.ts) + '.' + nonce + '.' + JSON.stringify(data);
    const calculatedSignature = captureHex_(
      Utilities.computeHmacSha256Signature(
        signed,
        secret,
        Utilities.Charset.UTF_8,
      ),
    );
    if (!captureEq_(calculatedSignature, signature)) {
      throw new Error('Signature tidak sah.');
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const cache = CacheService.getScriptCache();
    if (data.eventType === 'WHATSAPP_CLICK') {
      validateWhatsAppClick_(data);
      return captureJson_(appendWhatsAppClick_(spreadsheet, data));
    }

    appendLegacyLead_(spreadsheet, data, nonce, cache);
    return captureJson_({ ok: true });
  } catch (error) {
    // Do not include phone data, click identifiers, secrets, or the request body.
    const message =
      error && error.message ? String(error.message).slice(0, 120) : 'Input tidak valid.';
    return captureJson_({ ok: false, error: message });
  }
}

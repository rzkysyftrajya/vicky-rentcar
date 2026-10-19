const assert = require('node:assert/strict');
const { createHmac, randomUUID } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const code = fs.readFileSync(path.join(__dirname, 'Code.gs'), 'utf8');
const secret = 'test-secret-with-at-least-thirty-two-characters';
const legacyHeaders = [
  'Lead Token (HMAC)',
  'Kota',
  'GCLID',
  'Waktu ditangkap WIB',
  'Consent dicatat',
  'Nonce',
  'Status',
];

function createReceiver() {
  const oldRow = [
    'existing-hash',
    'Surabaya',
    'existing-gclid',
    '2026-01-01T10:00:00+07:00',
    'YES',
    'existing-nonce',
    'RECORDED',
    'existing H',
    'existing I',
    'existing J',
    'existing K',
    'existing L',
    'existing M',
    'existing N',
    'existing O',
  ];
  const sheet = {
    rows: [
      legacyHeaders.concat([
        'Event Type',
        'Page',
        'Vehicle',
        'GBRAID',
        'WBRAID',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign',
      ]),
      oldRow,
    ],
    getLastRow() {
      return this.rows.length;
    },
    getRange(row, column, rowCount, columnCount) {
      const range = {
        getValues: () => [
          this.rows[row - 1].slice(column - 1, column - 1 + columnCount),
        ],
        setValues: (values) => {
          for (let rowOffset = 0; rowOffset < rowCount; rowOffset += 1) {
            this.rows[row - 1 + rowOffset] = values[rowOffset].slice();
          }
        },
        setNumberFormat: () => {},
        createTextFinder: (needle) => ({
          matchEntireCell() {
            return this;
          },
          findNext: () => {
            for (
              let rowIndex = row - 1;
              rowIndex < row - 1 + rowCount;
              rowIndex += 1
            ) {
              if (this.rows[rowIndex][column - 1] === needle) {
                return { row: rowIndex + 1 };
              }
            }
            return null;
          },
        }),
      };
      return range;
    },
  };
  const scriptProperties = {
    VRN_SPREADSHEET_ID: 'test-spreadsheet',
    VRN_INGEST_HMAC_SECRET: secret,
  };
  let lockHeld = false;
  const context = {
    PropertiesService: {
      getScriptProperties: () => ({
        getProperty: (key) => scriptProperties[key] || null,
      }),
    },
    SpreadsheetApp: {
      openById: () => ({
        getSheetByName: (name) => name === 'Lead Web Match SBY' ? sheet : null,
      }),
    },
    CacheService: {
      getScriptCache: () => ({
        get: () => null,
        put: () => {},
      }),
    },
    LockService: {
      getScriptLock: () => ({
        tryLock: () => {
          if (lockHeld) return false;
          lockHeld = true;
          return true;
        },
        releaseLock: () => {
          lockHeld = false;
        },
      }),
    },
    Utilities: {
      Charset: { UTF_8: 'UTF-8' },
      computeHmacSha256Signature: (value, key) =>
        Array.from(createHmac('sha256', key).update(value, 'utf8').digest())
          .map((byte) => byte > 127 ? byte - 256 : byte),
      formatDate: (date) => {
        const local = new Date(date.getTime() + 7 * 60 * 60 * 1000);
        const pad = (value) => String(value).padStart(2, '0');
        return `${local.getUTCFullYear()}-${pad(local.getUTCMonth() + 1)}-${pad(local.getUTCDate())}` +
          `T${pad(local.getUTCHours())}:${pad(local.getUTCMinutes())}:${pad(local.getUTCSeconds())}`;
      },
    },
    ContentService: {
      MimeType: { JSON: 'application/json' },
      createTextOutput: (content) => ({
        content,
        setMimeType() {
          return this;
        },
      }),
    },
  };
  vm.runInNewContext(code, context, { filename: 'Code.gs' });
  return { context, sheet };
}

function postClick(context, data, nonce = randomUUID()) {
  const ts = Date.now();
  const signed = `${ts}.${nonce}.${JSON.stringify(data)}`;
  const sig = createHmac('sha256', secret).update(signed, 'utf8').digest('hex');
  const response = context.doPost({
    postData: {
      contents: JSON.stringify({ ts, nonce, data, sig }),
    },
  });
  return JSON.parse(response.content);
}

test('appends a signed click to A:O and deduplicates retries by eventId', () => {
  const { context, sheet } = createReceiver();
  const historicalRow = sheet.rows[1].slice();
  const eventId = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
  const data = {
    eventType: 'WHATSAPP_CLICK',
    eventId,
    timestamp: '2026-10-19T09:11:58.490Z',
    page: '/rental-mobil-surabaya/',
    car: 'Avanza',
    gbraid: 'GB-test-123456',
    wbraid: 'WB-test-123456',
    utm: {
      utm_source: 'manual-test',
      utm_medium: 'qa',
      utm_campaign: 'wa-capture-check',
    },
  };

  assert.deepEqual(postClick(context, data), { ok: true, duplicate: false });
  assert.deepEqual(sheet.rows[1], historicalRow);
  assert.deepEqual(Array.from(sheet.rows[2]), [
    '',
    'Surabaya',
    '',
    '2026-10-19T16:11:58+07:00',
    '',
    eventId,
    'RECORDED',
    'WHATSAPP_CLICK',
    '/rental-mobil-surabaya/',
    'Avanza',
    'GB-test-123456',
    'WB-test-123456',
    'manual-test',
    'qa',
    'wa-capture-check',
  ]);

  assert.deepEqual(postClick(context, data), { ok: true, duplicate: true });
  assert.equal(sheet.rows.length, 3);
  assert.deepEqual(sheet.rows[1], historicalRow);
});

test('setup validates the existing sheet without creating tabs or changing rows', () => {
  const { context, sheet } = createReceiver();
  const before = sheet.rows.map((row) => row.slice());

  assert.doesNotThrow(() => context.setupVrnCaptureReceiver());
  assert.deepEqual(sheet.rows, before);
});

test('rejects a tampered click without appending a row', () => {
  const { context, sheet } = createReceiver();
  const before = sheet.rows.map((row) => row.slice());
  const ts = Date.now();
  const nonce = randomUUID();
  const signedData = {
    eventType: 'WHATSAPP_CLICK',
    eventId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    timestamp: '2026-10-19T09:11:58.490Z',
    page: '/rental-mobil-surabaya/',
  };
  const sig = createHmac('sha256', secret)
    .update(`${ts}.${nonce}.${JSON.stringify(signedData)}`, 'utf8')
    .digest('hex');
  const tamperedData = { ...signedData, page: '/tampered/' };
  const response = context.doPost({
    postData: {
      contents: JSON.stringify({ ts, nonce, data: tamperedData, sig }),
    },
  });

  assert.deepEqual(JSON.parse(response.content), {
    ok: false,
    error: 'Signature tidak sah.',
  });
  assert.deepEqual(sheet.rows, before);
});

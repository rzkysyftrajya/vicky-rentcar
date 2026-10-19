/**
 * VRN Matching Surabaya — Next.js App Router
 * Server-only. Uses the signature protocol of the VRN Lead Capture Apps Script.
 * Does NOT send a Google Ads conversion, alter WhatsApp text, or install gtag.
 */
import { createHmac, randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function normalizeIndonesiaPhone(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  let phone = input.replace(/[\s()+.\-]/g, '');
  if (phone.startsWith('0')) phone = `62${phone.slice(1)}`;
  if (phone.startsWith('8')) phone = `62${phone}`;
  return /^628\d{8,11}$/.test(phone) ? phone : null;
}

function hmac(value: string, key: string): string {
  return createHmac('sha256', key).update(value, 'utf8').digest('hex');
}

function createIdempotencyNonce(value: string, key: string): string {
  const chars = hmac(`vrn-lead:${value}`, key).slice(0, 32).split('');
  chars[12] = '5';
  chars[16] = ((parseInt(chars[16], 16) & 0x3) | 0x8).toString(16);
  const hex = chars.join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

type CaptureEnvelope = {
  ts: number;
  nonce: string;
  data: object;
  sig: string;
};

type CaptureResult =
  | { ok: true }
  | { ok: false; reason: 'network' }
  | {
      ok: false;
      reason: 'invalid-json' | 'rejected';
      status: number;
      contentType: string | null;
    };

async function sendCapture(
  receiverUrl: string,
  envelope: CaptureEnvelope,
): Promise<CaptureResult> {
  let response: Response;
  try {
    response = await fetch(receiverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(envelope),
      cache: 'no-store',
      redirect: 'follow',
      signal: AbortSignal.timeout(9000),
    });
  } catch {
    return { ok: false, reason: 'network' };
  }

  const contentType = response.headers.get('content-type');
  let result: { ok?: unknown };
  try {
    result = await response.json();
  } catch {
    return {
      ok: false,
      reason: 'invalid-json',
      status: response.status,
      contentType,
    };
  }

  if (!response.ok || result.ok !== true) {
    return {
      ok: false,
      reason: 'rejected',
      status: response.status,
      contentType,
    };
  }
  return { ok: true };
}

export async function POST(request: Request) {
  if (process.env.VRN_LEAD_ENABLED !== 'true') {
    return errorResponse('Endpoint pencocokan sedang tidak aktif.', 404);
  }

  const receiverUrl = process.env.VRN_CAPTURE_WEBAPP_URL;
  const ingestKey = process.env.VRN_INGEST_HMAC_SECRET;

  if (!receiverUrl?.startsWith('https://script.google.com/macros/s/') ||
      !receiverUrl.endsWith('/exec') ||
      !ingestKey || ingestKey.length < 32) {
    return errorResponse('Konfigurasi server VRN belum lengkap.', 503);
  }

  let body: {
    eventType?: unknown;
    eventId?: unknown;
    timestamp?: unknown;
    page?: unknown;
    car?: unknown;
    gclid?: unknown;
    gbraid?: unknown;
    wbraid?: unknown;
    utm?: unknown;
    phone?: unknown;
    city?: unknown;
    consent?: unknown;
  };
  try {
    const raw = await request.text();
    if (raw.length > 3000) return errorResponse('Permintaan terlalu besar.', 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return errorResponse('Data tidak valid.', 400);
    }
  } catch {
    return errorResponse('Format data tidak valid.', 400);
  }

  if (body.eventType === 'WHATSAPP_CLICK') {
    const validIdentifier = (value: unknown) =>
      value === undefined ||
      (typeof value === 'string' && /^[A-Za-z0-9_.~-]{1,500}$/.test(value));
    const validEventId = typeof body.eventId === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.eventId);
    const validUtm = (value: unknown) =>
      value === undefined ||
      (typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        Object.keys(value).length <= 10 &&
        Object.entries(value).every(
          ([key, entry]) =>
            /^utm_[a-z0-9_]{1,40}$/.test(key) &&
            typeof entry === 'string' &&
            entry.length <= 200,
        ));

    if (!validEventId ||
        typeof body.timestamp !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(body.timestamp) ||
        Number.isNaN(Date.parse(body.timestamp)) ||
        typeof body.page !== 'string' ||
        !body.page.startsWith('/') ||
        body.page.startsWith('//') ||
        body.page.length > 500 ||
        (body.car !== undefined &&
          (typeof body.car !== 'string' || body.car.length > 200)) ||
        !validIdentifier(body.gclid) ||
        !validIdentifier(body.gbraid) ||
        !validIdentifier(body.wbraid) ||
        !validUtm(body.utm)) {
      return errorResponse('Data klik WhatsApp tidak valid.', 400);
    }

    const data = {
      eventType: 'WHATSAPP_CLICK',
      eventId: body.eventId,
      timestamp: body.timestamp,
      page: body.page,
      ...(body.car ? { car: body.car.trim() } : {}),
      ...(body.gclid ? { gclid: body.gclid } : {}),
      ...(body.gbraid ? { gbraid: body.gbraid } : {}),
      ...(body.wbraid ? { wbraid: body.wbraid } : {}),
      ...(body.utm ? { utm: body.utm } : {}),
    };
    const ts = Date.now();
    const nonce = randomUUID();
    const sig = hmac(`${ts}.${nonce}.${JSON.stringify(data)}`, ingestKey);

    const result = await sendCapture(receiverUrl, { ts, nonce, data, sig });
    if (!result.ok) {
      console.error('VRN WhatsApp click capture receiver failed.', result);
      return errorResponse('Klik WhatsApp belum tersimpan.', 502);
    }
    return NextResponse.json({ ok: true }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const phoneKey = process.env.VRN_PHONE_HMAC_KEY;
  if (!phoneKey || phoneKey.length < 32) {
    return errorResponse('Konfigurasi server VRN belum lengkap.', 503);
  }

  const phone = normalizeIndonesiaPhone(body.phone);
  const gclid = typeof body.gclid === 'string' ? body.gclid.trim() : '';
  if (body.city !== 'Surabaya' || body.consent !== true || !phone ||
      !/^[A-Za-z0-9_.~-]{8,500}$/.test(gclid)) {
    return errorResponse('Nomor, GCLID, atau persetujuan belum sesuai.', 400);
  }

  // Raw phone stays inside this function; do not log it.
  const data = {
    phoneHash: hmac(phone, phoneKey),
    city: 'Surabaya',
    gclid,
    consent: true,
  };
  const ts = Date.now();
  // Stable for the same hashed phone and click ID so receiver replay checks can deduplicate retries.
  const nonce = createIdempotencyNonce(
    `${data.city}:${data.phoneHash}:${data.gclid}`,
    ingestKey,
  );
  // Must match CaptureEndpoint.gs: ts + '.' + nonce + '.' + JSON.stringify(data)
  const sig = hmac(`${ts}.${nonce}.${JSON.stringify(data)}`, ingestKey);

  const result = await sendCapture(receiverUrl, { ts, nonce, data, sig });
  if (!result.ok) {
    console.error('VRN lead capture receiver failed.', result);
    const message = result.reason === 'network'
      ? 'Receiver tidak merespons; WhatsApp tetap bisa digunakan.'
      : 'Pencocokan belum tersimpan; WhatsApp tetap bisa digunakan.';
    return errorResponse(message, 502);
  }
  return NextResponse.json({ ok: true }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}

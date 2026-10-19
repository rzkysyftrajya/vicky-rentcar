/**
 * VRN Matching Surabaya — Next.js App Router
 * Server-only. Uses the signature protocol of the VRN Lead Capture Apps Script.
 * Does NOT send a Google Ads conversion, alter WhatsApp text, or install gtag.
 */
import { createHmac } from 'node:crypto';
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

export async function POST(request: Request) {
  if (process.env.VRN_LEAD_ENABLED !== 'true') {
    return errorResponse('Endpoint pencocokan sedang tidak aktif.', 404);
  }

  const receiverUrl = process.env.VRN_CAPTURE_WEBAPP_URL;
  const ingestKey = process.env.VRN_INGEST_HMAC_SECRET;
  const phoneKey = process.env.VRN_PHONE_HMAC_KEY;

  if (!receiverUrl?.startsWith('https://script.google.com/macros/s/') ||
      !receiverUrl.endsWith('/exec') ||
      !ingestKey || ingestKey.length < 32 ||
      !phoneKey || phoneKey.length < 32) {
    return errorResponse('Konfigurasi server VRN belum lengkap.', 503);
  }

  let body: { phone?: unknown; gclid?: unknown; city?: unknown; consent?: unknown };
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

  try {
    const response = await fetch(receiverUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ts, nonce, data, sig }),
      cache: 'no-store',
      redirect: 'follow',
      signal: AbortSignal.timeout(9000),
    });
    const result: { ok?: unknown } = await response.json().catch(() => ({}));
    if (!response.ok || result.ok !== true) {
      return errorResponse('Pencocokan belum tersimpan; WhatsApp tetap bisa digunakan.', 502);
    }
    return NextResponse.json({ ok: true }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch {
    return errorResponse('Receiver tidak merespons; WhatsApp tetap bisa digunakan.', 502);
  }
}

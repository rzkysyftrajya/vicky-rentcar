'use client';
/**
 * OPTIONAL TEST UI ONLY. Do not replace any production WA button until its
 * existing gtag_report_conversion/onclick trigger has been reviewed.
 * No GCLID or reference code appears in the WhatsApp message.
 */
import { useState, type FormEvent } from 'react';

type Props = { businessNumber: string; message?: string };

export default function VrnLeadGate({
  businessNumber,
  message = 'Halo VRN, saya ingin konsultasikan kebutuhan rental mobil Surabaya.',
}: Props) {
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const waUrl = `https://wa.me/${businessNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  const openWhatsApp = () => { window.location.assign(waUrl); };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    if (!phone.trim() || !consent) {
      setNotice('Isi nomor dan persetujuan, atau pilih langsung WhatsApp.');
      return;
    }
    // Pilot: reads a click ID only when it exists on THIS page's URL.
    // If navigation drops ?gclid=, no match is attempted.
    const gclid = new URLSearchParams(window.location.search).get('gclid');
    if (!gclid) { openWhatsApp(); return; }
    setBusy(true);
    try {
      const r = await fetch('/api/vrn-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, gclid, city: 'Surabaya', consent: true }),
      });
      if (!r.ok) setNotice('Data belum tersimpan; WhatsApp tetap bisa dipakai.');
    } catch {
      setNotice('Koneksi pencocokan belum berhasil.');
    } finally {
      setBusy(false);
      openWhatsApp();
    }
  }

  return (
    <section aria-label="Konsultasi rental Surabaya">
      <form onSubmit={submit}>
        <label htmlFor="vrn-phone">Nomor WhatsApp (opsional)</label>
        <input id="vrn-phone" type="tel" inputMode="tel" autoComplete="tel"
          value={phone} onChange={e => setPhone(e.target.value)} placeholder="08xxxxxxxxxx" />
        <label>
          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
          Saya setuju nomor saya digunakan untuk mencocokkan permintaan sewa dengan sumber iklan sesuai kebijakan privasi.
        </label>
        <button type="submit" disabled={busy}>{busy ? 'Memproses...' : 'Lanjut WhatsApp'}</button>
      </form>
      <button type="button" onClick={openWhatsApp}>Langsung WhatsApp tanpa pencocokan</button>
      <p role="status">{notice}</p>
    </section>
  );
}

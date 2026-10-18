"use client";

import { useState, type FormEvent } from "react";

type Props = {
  businessNumber: string;
  message: string;
};

export default function VrnLeadGate({ businessNumber, message }: Props) {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const waUrl = `https://wa.me/${businessNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  const openWhatsApp = () => {
    window.dispatchEvent(new Event("vrn:sby-wa-click"));
    window.location.assign(waUrl);
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    if (!phone.trim() || !consent) {
      setNotice("Isi nomor dan persetujuan, atau pilih langsung WhatsApp.");
      return;
    }

    const gclid = new URLSearchParams(window.location.search).get("gclid");
    if (!gclid) {
      openWhatsApp();
      return;
    }

    setBusy(true);
    try {
      const response = await fetch("/api/vrn-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, gclid, city: "Surabaya", consent: true }),
      });
      if (!response.ok) {
        setNotice("Data belum tersimpan; WhatsApp tetap bisa digunakan.");
      }
    } catch {
      setNotice("Koneksi pencocokan belum berhasil.");
    } finally {
      setBusy(false);
      openWhatsApp();
    }
  }

  return (
    <section aria-label="Form uji konsultasi rental Surabaya">
      <form className="space-y-3" onSubmit={submit}>
        <label className="block text-sm font-medium" htmlFor="vrn-phone">
          Nomor WhatsApp (untuk uji ini)
        </label>
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          id="vrn-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="08xxxxxxxxxx"
        />
        <label className="flex items-start gap-2 text-sm">
          <input
            className="mt-1"
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
          />
          <span>
            Saya setuju nomor saya digunakan untuk mencocokkan permintaan sewa
            dengan sumber iklan sesuai kebijakan privasi.
          </span>
        </label>
        <button
          className="w-full rounded-md bg-amber-700 px-4 py-2 font-semibold text-white disabled:opacity-60"
          type="submit"
          disabled={busy}
        >
          {busy ? "Memproses..." : "Lanjut WhatsApp"}
        </button>
      </form>
      <button
        className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2 text-sm"
        type="button"
        onClick={openWhatsApp}
      >
        Langsung WhatsApp tanpa pencocokan
      </button>
      <p className="mt-2 min-h-5 text-sm" role="status">
        {notice}
      </p>
    </section>
  );
}

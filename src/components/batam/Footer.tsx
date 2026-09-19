"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { ClientYear } from "@/components/ui/client-year";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Rent%20Car%20Batam,%20saya%20mau%20tanya%20sewa%20mobil%20dengan%20driver";

const serviceLinks = [
  { href: "/batam/layanan", label: "Antar Jemput Bandara Hang Nadim (BTH)" },
  { href: "/batam/layanan", label: "Transfer Ferry Batam Centre & Harbour Bay" },
  { href: "/batam/hiace", label: "Sewa Hiace Premio Rombongan 14-Seat" },
  { href: "/batam/layanan", label: "Corporate Chauffeur Kawasan Industri" },
  { href: "/batam/paket-tour", label: "Paket Wisata Jembatan Barelang" },
  { href: "/batam/paket-tour", label: "Tour Pulau Ranoh & Pulau Abang" },
  { href: "/batam/paket-tour", label: "Paket 3 Hari 2 Negara (Spore – Malaysia)" },
];

const armadaLinks = [
  "Toyota Alphard Gen 4",
  "Innova Zenix Hybrid",
  "Innova Reborn Diesel",
  "Toyota Fortuner GR",
  "Toyota Hiace Premio",
  "Avanza & Xpander",
];

const siteLinks = [
  { href: "/batam/armada", label: "Katalog Armada" },
  { href: "/batam/layanan", label: "Layanan Driver" },
  { href: "/batam/hiace", label: "Hiace 14-Seat" },
  { href: "/batam/paket-tour", label: "Paket Wisata" },
  { href: "/batam/destinasi", label: "Destinasi Batam" },
  { href: "/batam/galeri", label: "Galeri Foto" },
  { href: "/batam/faq", label: "Tanya Jawab (FAQ)" },
  { href: "/batam/kontak", label: "Kontak & Lokasi" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1728] text-slate-300 border-t border-slate-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Col 1: Brand (4 Cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="/batam" className="flex items-center gap-3">
              <Image
                src="/logoVRN.png"
                alt="VRN Rent Car Batam"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-white font-bold text-lg tracking-tight">VRN RENT CAR</span>
                  <span className="text-amber-400 font-bold text-lg tracking-tight">BATAM</span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 mt-1 leading-none">
                  PT. Vicky Rent Car Nusantara
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Penyedia jasa rental mobil dengan driver profesional di Batam. Melayani penjemputan Bandara Hang Nadim,
              terminal ferry internasional, dinas kantor kawasan industri, dan wisata keluarga.
            </p>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
              <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Layanan Resmi &amp; Terpercaya</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Melayani sistem All-In (BBM + Driver + Parkir) &amp; Kwitansi / Faktur Tagihan Resmi Perusahaan.
              </p>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Hubungi Customer Service WhatsApp
            </a>
          </div>

          {/* Col 2: Layanan & Tour (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Layanan Driver &amp; Tour
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-start gap-1.5 leading-snug"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 shrink-0 mt-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Armada & Sitelinks (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Armada Mobil</h4>
              <ul className="space-y-2 text-xs">
                {armadaLinks.map((name) => (
                  <li key={name}>
                    <Link
                      href="/batam/armada"
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Sitelinks</h4>
              <ul className="space-y-2 text-xs">
                {siteLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Kontak Operasional (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Kontak Operasional
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  Hotline Telepon &amp; WA:
                </div>
                <div className="text-white font-bold text-sm">+62 823-6338-9893</div>
                <div className="flex items-center gap-1 text-emerald-400 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Buka 24 Jam Non-Stop
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  Area Layanan Batam:
                </div>
                <div className="text-slate-200 text-xs leading-snug">
                  Bandara Hang Nadim, Batam Centre, Nagoya, Harbour Bay, Sekupang, Nongsa, Kabil,
                  Mukakuning &amp; Barelang.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Jam Operasional:
                </div>
                <div className="text-slate-200 text-xs">Setiap Hari • 00.00 – 24.00 WIB</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-300">Metode Pembayaran:</span>
            {["Transfer BCA", "Mandiri", "BRI", "QRIS"].map((m) => (
              <span key={m} className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300 text-[11px]">
                {m}
              </span>
            ))}
            <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-amber-300 text-[11px]">
              Faktur / Invoice PT
            </span>
          </div>

          <div>
            <span className="text-slate-400">Jaringan resmi </span>
            <a
              href="https://vickyrentcarnusantara.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1"
            >
              Vicky Rent Car Nusantara
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#070e17] border-t border-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© <ClientYear /> VRN Rent Car Batam. Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/batam/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
            <Link href="/batam/kontak" className="hover:text-slate-300 transition-colors">Kontak</Link>
            <Link href="/batam/destinasi" className="hover:text-slate-300 transition-colors">Destinasi</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Syarat &amp; Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

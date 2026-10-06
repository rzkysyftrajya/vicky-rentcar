"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const semarangLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Armada", href: "#armada" },
  { label: "Area tujuan", href: "#tujuan" },
  { label: "FAQ", href: "#faq" },
];

const semarangWhatsApp =
  "https://wa.me/6282363389893?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20antar%20jemput%20Bandara%20Ahmad%20Yani%20Semarang.";

function SemarangNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/semarang" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/semarang/logo.png"
            alt="Logo VRN Semarang"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-slate-950">
              VRN RENTCAR
            </span>
            <span className="block text-xs font-semibold text-emerald-700">
              SEMARANG
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi Semarang" className="hidden items-center gap-6 md:flex">
          {semarangLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={semarangWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 sm:inline-flex"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          Tanya ketersediaan
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-800 md:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navigasi Semarang mobile"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {semarangLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={semarangWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Tanya ketersediaan via WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function SemarangFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/semarang" className="inline-flex items-center gap-3">
            <Image
              src="/semarang/logo.png"
              alt="Logo VRN Semarang"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
            <span>
              <span className="block font-bold text-white">VRN Rentcar Semarang</span>
              <span className="text-xs text-slate-400">PT. Vicky Rentcar Nusantara</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Antar jemput Bandara Ahmad Yani dengan sopir untuk perjalanan ke
            hotel, pusat kota, dan tujuan lain di Semarang.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Informasi layanan</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {semarangLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Hubungi Semarang</h2>
          <p className="mt-4 text-sm text-slate-400">
            Konfirmasi jadwal penerbangan, jumlah penumpang, dan tujuan sebelum
            perjalanan.
          </p>
          <a
            href="tel:+6282363389893"
            className="mt-3 block text-sm font-medium text-white hover:text-emerald-300"
          >
            +62 823-6338-9893
          </a>
          <a
            href={semarangWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-emerald-600 px-4 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-950"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:px-6">
          <span>© {new Date().getFullYear()} PT. Vicky Rentcar Nusantara</span>
          <Link href="/privacy" className="hover:text-slate-300">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function RouteNavbar() {
  const pathname = usePathname();
  const isSemarangRoute = pathname === "/semarang" || pathname?.startsWith("/semarang/");

  return isSemarangRoute ? null : <Navbar />;
}

export function RouteFooter() {
  const pathname = usePathname();
  const isSemarangRoute = pathname === "/semarang" || pathname?.startsWith("/semarang/");

  return isSemarangRoute ? null : <Footer />;
}
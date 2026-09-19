"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Clock,
  ChevronRight,
} from "lucide-react";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Rent%20Car%20Batam,%20saya%20ingin%20tanya%20sewa%20mobil%20dengan%20driver";

const navItems = [
  { name: "Beranda", href: "/batam" },
  { name: "Armada", href: "/batam/armada" },
  { name: "Layanan", href: "/batam/layanan" },
  { name: "Hiace 14-Seat", href: "/batam/hiace" },
  { name: "Paket Wisata", href: "/batam/paket-tour" },
  { name: "Destinasi", href: "/batam/destinasi" },
  { name: "FAQ", href: "/batam/faq" },
  { name: "Kontak", href: "/batam/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/batam") return pathname === "/batam";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar — desktop only */}
      <div className="hidden md:block bg-[#0a1220] text-slate-400 text-xs border-b border-slate-800/60 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              Standby: Bandara Hang Nadim &amp; Pelabuhan Ferry Batam
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Layanan 24 Jam Nonstop
            </span>
          </div>
          <a
            href="tel:+6282363389893"
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            +62 823-6338-9893
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-slate-200 py-2.5"
            : "bg-white border-b border-slate-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/batam" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logoVRN.png"
                alt="VRN Rent Car Batam"
                width={38}
                height={38}
                className="object-contain"
                priority
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-[#0B1728] font-extrabold text-[17px] tracking-tight">VRN</span>
                  <span className="text-blue-800 font-extrabold text-[17px] tracking-tight">BATAM</span>
                </div>
                <span className="text-[10.5px] font-medium text-slate-500 mt-0.5">
                  Rental Mobil Plus Driver
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                    isActive(item.href)
                      ? "text-blue-800 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop WA CTA */}
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[13px] px-4 h-9 rounded-lg shadow-sm transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp CS</span>
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.26, ease: "easeOut" }}
        className="fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-[320px] bg-white shadow-2xl flex flex-col lg:hidden"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-[#0B1728]">
          <div className="flex items-center gap-2.5">
            <Image src="/logoVRN.png" alt="VRN Logo" width={32} height={32} className="object-contain" />
            <div>
              <div className="font-bold text-white text-sm leading-none">VRN RENT CAR BATAM</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Sewa Mobil Harian &amp; Driver</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-0.5">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-800 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
          <a
            href="tel:+6282363389893"
            className="flex items-center gap-2 text-slate-700 font-semibold text-sm"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            +62 823-6338-9893
          </a>
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm h-11 rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Chat WhatsApp Sekarang
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}

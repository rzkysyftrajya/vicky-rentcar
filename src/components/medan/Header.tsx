"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MedanWhatsAppButton } from "./MedanWhatsApp";

const primaryNavigation = [
  { label: "Beranda", href: "/medan" },
  { label: "Armada", href: "/medan/fleet" },
  { label: "Layanan", href: "/medan/services" },
  { label: "Wisata", href: "/medan/tourism" },
  { label: "Hubungi", href: "/medan/contact" },
];

const secondaryNavigation = [
  { label: "Tentang", href: "/medan/about-us" },
  { label: "FAQ", href: "/medan/faq" },
  { label: "Testimoni", href: "/medan/testimonials" },
];

function isActive(pathname: string, href: string) {
  return href === "/medan"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--medan-border)] bg-white">
      <div className="medan-container flex min-h-16 items-center justify-between gap-6">
        <Link href="/medan" className="flex min-h-11 items-center gap-2" aria-label="VRN Rent Car Medan">
          <Image src="/logoVRN.png" alt="" width={40} height={40} className="object-contain" priority />
          <span className="text-base font-bold text-[var(--medan-primary)] sm:text-lg">
            VRN Rent Car <span className="font-normal">Medan</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "min-h-11 rounded-[var(--medan-radius-control)] px-3 py-3 text-sm font-medium text-[var(--medan-text)] hover:bg-[#eef3f9] hover:text-[var(--medan-primary)]",
                isActive(pathname, item.href) && "font-bold text-[var(--medan-primary)]",
              )}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-5 w-px bg-[var(--medan-border)]" aria-hidden="true" />
          {secondaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="min-h-11 px-2 py-3 text-sm text-[var(--medan-muted)] hover:text-[var(--medan-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MedanWhatsAppButton label="Konsultasi" variant="outline" />
        </div>

        <MedanWhatsAppButton
          label="WhatsApp"
          className="medan-mobile-whatsapp h-11 w-11 shrink-0 justify-center px-2 [&>span]:sr-only"
        />

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--medan-radius-control)] border border-[var(--medan-border)] text-[var(--medan-primary)] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="medan-mobile-menu"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div ref={menuRef} id="medan-mobile-menu" className="border-t border-[var(--medan-border)] bg-white lg:hidden">
          <nav className="medan-container flex flex-col gap-1 py-4" aria-label="Navigasi mobile">
            {[...primaryNavigation, ...secondaryNavigation].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "min-h-11 rounded-[var(--medan-radius-control)] px-3 py-3 text-sm text-[var(--medan-text)] hover:bg-[#eef3f9]",
                  isActive(pathname, item.href) && "font-bold text-[var(--medan-primary)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <MedanWhatsAppButton label="Konsultasi via WhatsApp" className="mt-3 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

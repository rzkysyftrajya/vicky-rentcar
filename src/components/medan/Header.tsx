"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";

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

const navigation = [...primaryNavigation, ...secondaryNavigation];

function isActive(pathname: string, href: string) {
  return href === "/medan"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <Navbar className="top-0 z-50 border-b border-[var(--medan-border)] bg-white">
      <NavBody className="max-w-7xl bg-white/95 dark:bg-white/95">
        <NavbarLogo href="/medan" label="VRN Rent Car Medan" />
        <NavItems
          items={navigation.map((item) => ({
            name: item.label,
            link: item.href,
            active: isActive(pathname, item.href),
          }))}
          lightMode
          className="left-[250px] right-4 justify-end space-x-0 lg:space-x-0 [&_a]:px-2"
        />
      </NavBody>

      <MobileNav className="bg-white dark:bg-white">
        <MobileNavHeader className="medan-container min-h-14">
          <NavbarLogo href="/medan" label="VRN Rent Car Medan" />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full border border-[var(--medan-border)] text-[var(--medan-primary)]"
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="border border-[var(--medan-border)] bg-white dark:bg-white"
        >
          <nav className="flex w-full flex-col gap-1" aria-label="Navigasi mobile">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "min-h-11 rounded-full px-3 py-3 text-sm text-[var(--medan-text)] hover:bg-[#eef3f9]",
                  isActive(pathname, item.href) &&
                    "font-bold text-[var(--medan-primary)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

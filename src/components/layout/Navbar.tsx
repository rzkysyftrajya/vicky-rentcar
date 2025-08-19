"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Menu,
  Newspaper,
  Car,
  Info,
  Phone,
  HelpCircle,
  Briefcase,
  Star,
  MapPin,
  Home,
  Leaf,
  GalleryHorizontal,
  Globe,
} from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  HoveredLink,
  Menu as NavMenu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import Image from "next/image";
import { ImageZoom } from "../ui/image-zoom";
import { useAppContext, Currency, Language } from "@/app/context/AppContext";

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Terang
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Gelap
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistem
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function InternationalizationSwitchers() {
  const { currency, setCurrency, language, setLanguage } = useAppContext();
  const currencies: Currency[] = ["IDR", "USD", "SGD", "MYR"];
  const languages: Language[] = ["id", "en"];

  return (
    <div className="flex items-center gap-1">
      {/* mata uang */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-2">
            <span className="text-sm font-semibold">{currency}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Pilih Mata Uang</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={currency}
            onValueChange={(value) => setCurrency(value as Currency)}
          >
            {currencies.map((c) => (
              <DropdownMenuRadioItem key={c} value={c}>
                {c}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Language */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Ganti Bahasa">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Pilih Bahasa</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={(value) => setLanguage(value as Language)}
          >
            <DropdownMenuRadioItem value="id">
              Bahasa Indonesia
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DesktopNavbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <NavMenu
      setActive={setActive}
      className="hidden md:flex items-center gap-1"
    >
      <Button variant="ghost" asChild>
        <Link href="/">Beranda</Link>
      </Button>

      <MenuItem setActive={setActive} active={active} item="Perusahaan">
        <div className="flex flex-col space-y-4 text-sm p-2">
          <HoveredLink href="/about">Tentang Kami</HoveredLink>
          <HoveredLink href="/testimonials">Testimoni Pelanggan</HoveredLink>
          <HoveredLink href="/gallery">Galeri</HoveredLink>
          <HoveredLink href="/sustainability">Keberlanjutan</HoveredLink>
          <HoveredLink href="/faq">FAQ</HoveredLink>
        </div>
      </MenuItem>

      <MenuItem setActive={setActive} active={active} item="Armada & Layanan">
        <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[30rem]">
          <ProductItem
            title="Armada Rental Kami"
            href="/fleet"
            src="/icon/armada-rental-kami.png"
            alt="Berbagai jenis mobil untuk rental"
            description="Jelajahi berbagai pilihan mobil berkualitas kami."
          />
          <ProductItem
            title="Sewa Mobil Mewah"
            href="/luxury-cars"
            src="/icon/sewa-mobil-mewah.png"
            alt="Mobil mewah untuk disewa"
            description="Pilihan eksklusif untuk acara spesial Anda."
          />
          <ProductItem
            title="Semua Layanan Rental"
            href="/services"
            src="/icon/semua-layanan-rental.png"
            alt="Kunci mobil sebagai simbol layanan rental"
            description="Dari sewa harian hingga layanan korporat."
          />
          <ProductItem
            title="Rental Jangka Panjang"
            href="/long-term-rental"
            src="/icon/rental-jangka-panjang.png"
            alt="Kontrak sewa mobil jangka panjang"
            description="Solusi fleksibel untuk kebutuhan transportasi Anda."
          />
        </div>
      </MenuItem>

      <Button variant="ghost" asChild>
        <Link href="/tour-guide">Panduan Wisata</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/blog">Blog</Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href="/contact">Kontak</Link>
      </Button>
    </NavMenu>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Beranda", icon: <Home className="w-5 h-5" /> },
    {
      href: "/about",
      label: "Tentang Kami",
      icon: <Info className="w-5 h-5" />,
    },
    { href: "/fleet", label: "Armada", icon: <Car className="w-5 h-5" /> },
    {
      href: "/gallery",
      label: "Galeri",
      icon: <GalleryHorizontal className="w-5 h-5" />,
    },
    {
      href: "/services",
      label: "Layanan",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      href: "/testimonials",
      label: "Testimoni",
      icon: <Star className="w-5 h-5" />,
    },
    {
      href: "/tour-guide",
      label: "Panduan Wisata",
      icon: <MapPin className="w-5 h-5" />,
    },
    { href: "/blog", label: "Blog", icon: <Newspaper className="w-5 h-5" /> },
    {
      href: "/sustainability",
      label: "Keberlanjutan",
      icon: <Leaf className="w-5 h-5" />,
    },
    { href: "/faq", label: "FAQ", icon: <HelpCircle className="w-5 h-5" /> },
    { href: "/contact", label: "Kontak", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Buka Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full max-w-sm bg-secondary flex flex-col p-0"
        >
          <SheetHeader className="p-6 pb-0">
            <SheetTitle className="text-left text-gradient">PT.VRN</SheetTitle>
          </SheetHeader>

          {/* FIX: hapus overflow-y-auto biar gak double scrollbar */}
          <div className="flex-grow p-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  onNavigate={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </MobileNavLink>
              ))}
            </nav>
          </div>

          <div className="p-4 mt-auto border-t space-y-4">
            <div className="flex justify-around items-center">
              <InternationalizationSwitchers />
              <ThemeToggle />
            </div>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg hover:scale-105 transition-transform"
              size="lg"
            >
              <Link href="/contact">Pesan Sekarang</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
          aria-label="Beranda PT.VICKY RENTCAR NUSANTARA"
        >
          <ImageZoom
            src="/logoVRN.png"
            alt="Logo PT.VICKY RENTCAR NUSANTARA"
            width={28}
            height={28}
            className="text-primary"
            isZoomable={false}
          />
          <span className="font-extrabold whitespace-nowrap bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text text-sm md:text-base">
            PT.VRN
          </span>
        </Link>

        {/* Desktop Navbar */}
        <DesktopNavbar />

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <InternationalizationSwitchers />
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNavbar />
          </div>
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Link href="/contact">Pesan Sekarang</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const MobileNavLink = ({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
}) => (
  <Link
    href={href}
    onClick={onNavigate}
    className="flex items-center gap-4 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary py-3 px-4 rounded-lg"
  >
    {children}
  </Link>
);

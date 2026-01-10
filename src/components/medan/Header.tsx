"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20bertanya%20tentang%20rental%20mobil%20di%20Medan";

  const navigation = [
    { name: "Beranda", href: "/medan" },
    { name: "Armada", href: "/medan/fleet" },
    { name: "Layanan", href: "/medan/services" },
    { name: "Destinasi", href: "/medan/tourism" },
    { name: "Testimoni", href: "/medan/testimonials" },
    { name: "Kontak", href: "/medan/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div
          className="flex items-center justify-between h-16"
          suppressHydrationWarning
        >
          {/* Logo */}
          <Link href="/medan" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/logoVRN.png"
                alt="VRN Rent Car Medan"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900 dark:text-white">
                VRN Rent Car
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Medan
              </div>
            </div>
            <div className="block sm:hidden">
              <div className="font-bold text-lg text-gray-900 dark:text-white">
                VRN Rent Car Medan
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            suppressHydrationWarning
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                suppressHydrationWarning
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div
            className="hidden lg:flex items-center space-x-4"
            suppressHydrationWarning
          >
            <div
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
              suppressHydrationWarning
            >
              <MapPin className="w-4 h-4" suppressHydrationWarning />
              <span suppressHydrationWarning>Medan & Sekitanya</span>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              suppressHydrationWarning
            >
              <a href="tel:+6282363389893" suppressHydrationWarning>
                <Phone className="w-4 h-4 mr-2" suppressHydrationWarning />
                <span suppressHydrationWarning>0823-6338-9893</span>
              </a>
            </Button>
            <Button asChild size="sm" suppressHydrationWarning>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
              >
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" suppressHydrationWarning>
                <Menu className="w-5 h-5" suppressHydrationWarning />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-white dark:bg-slate-900"
              suppressHydrationWarning
            >
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col h-full" suppressHydrationWarning>
                {/* Logo */}
                <div className="flex items-center space-x-2 pb-6 border-b dark:border-slate-700">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logoVRN.png"
                      alt="VRN Rent Car Medan"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900 dark:text-white">
                      VRN Rent Car
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      Medan
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6" suppressHydrationWarning>
                  <div className="space-y-4" suppressHydrationWarning>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                        onClick={() => setIsOpen(false)}
                        suppressHydrationWarning
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Contact Info */}
                <div
                  className="pt-6 border-t dark:border-slate-700 space-y-4"
                  suppressHydrationWarning
                >
                  <div
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                    suppressHydrationWarning
                  >
                    <MapPin className="w-4 h-4" suppressHydrationWarning />
                    <span suppressHydrationWarning>Medan & Sekitanya</span>
                  </div>
                  <div className="space-y-2" suppressHydrationWarning>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full dark:border-slate-600 dark:text-gray-300"
                      suppressHydrationWarning
                    >
                      <a href="tel:+6282363389893" suppressHydrationWarning>
                        <Phone
                          className="w-4 h-4 mr-2"
                          suppressHydrationWarning
                        />
                        <span suppressHydrationWarning>0823-6338-9893</span>
                      </a>
                    </Button>
                    <Button asChild className="w-full" suppressHydrationWarning>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        suppressHydrationWarning
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

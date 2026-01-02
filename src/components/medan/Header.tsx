"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20rental%20mobil%20di%20Medan";

  const navigation = [
    { name: "Beranda", href: "/medan" },
    { name: "Armada", href: "/medan#armada" },
    { name: "Layanan", href: "/medan#layanan" },
    { name: "Destinasi", href: "/medan#destinasi" },
    { name: "Testimoni", href: "/medan#testimoni" },
    { name: "Kontak", href: "/medan#kontak" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div
          className="flex items-center justify-between h-16"
          suppressHydrationWarning
        >
          {/* Logo */}
          <Link
            href="/medan"
            className="flex items-center space-x-2"
            suppressHydrationWarning
          >
            <div
              className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              suppressHydrationWarning
            >
              <span
                className="text-white font-bold text-sm"
                suppressHydrationWarning
              >
                VRN
              </span>
            </div>
            <div className="hidden sm:block" suppressHydrationWarning>
              <div
                className="font-bold text-lg text-gray-900"
                suppressHydrationWarning
              >
                VRN Rent Car
              </div>
              <div
                className="text-xs text-blue-600 font-medium"
                suppressHydrationWarning
              >
                Medan
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
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
              className="flex items-center space-x-2 text-sm text-gray-600"
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
              <a href="tel:+6281234567890" suppressHydrationWarning>
                <Phone className="w-4 h-4 mr-2" suppressHydrationWarning />
                <span suppressHydrationWarning>0812-3456-7890</span>
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
              className="w-80"
              suppressHydrationWarning
            >
              <div className="flex flex-col h-full" suppressHydrationWarning>
                {/* Logo */}
                <div
                  className="flex items-center space-x-2 pb-6 border-b"
                  suppressHydrationWarning
                >
                  <div
                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
                    suppressHydrationWarning
                  >
                    <span
                      className="text-white font-bold text-sm"
                      suppressHydrationWarning
                    >
                      VRN
                    </span>
                  </div>
                  <div suppressHydrationWarning>
                    <div
                      className="font-bold text-lg text-gray-900"
                      suppressHydrationWarning
                    >
                      VRN Rent Car
                    </div>
                    <div
                      className="text-sm text-blue-600 font-medium"
                      suppressHydrationWarning
                    >
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
                        className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
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
                  className="pt-6 border-t space-y-4"
                  suppressHydrationWarning
                >
                  <div
                    className="flex items-center space-x-2 text-sm text-gray-600"
                    suppressHydrationWarning
                  >
                    <MapPin className="w-4 h-4" suppressHydrationWarning />
                    <span suppressHydrationWarning>Medan & Sekitanya</span>
                  </div>
                  <div className="space-y-2" suppressHydrationWarning>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      suppressHydrationWarning
                    >
                      <a href="tel:+6281234567890" suppressHydrationWarning>
                        <Phone
                          className="w-4 h-4 mr-2"
                          suppressHydrationWarning
                        />
                        <span suppressHydrationWarning>0812-3456-7890</span>
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

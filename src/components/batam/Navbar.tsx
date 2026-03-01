"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Car, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam";

  // Hanya halaman yang ada
  const navItems = [
    { name: "Beranda", href: "/batam" },
    { name: "Armada", href: "/batam/armada" },
    { name: "Layanan", href: "/batam/layanan" },
    { name: "Destinasi", href: "/batam/destinasi" },
    { name: "Galeri", href: "/batam/galeri" },
    { name: "FAQ", href: "/batam/faq" },
    { name: "Kontak", href: "/batam/kontak" },
    { name: "Tentang", href: "/batam/tentang" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Island Theme */}
          <Link href="/batam" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/logoVRN.png"
                alt="VRN Rent Car Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
            <div className="text-white font-semibold text-sm md:hidden">
              VICKY RENTCAR BATAM
            </div>
            <div className="text-white font-bold text-lg hidden md:block">
              <span className="text-yellow-400">VRN</span> Rent Car
            </div>
          </Link>

          {/* Desktop Nav - Island themed */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  href={item.href} 
                  className="text-white/90 hover:text-yellow-300 hover:bg-white/10 font-medium transition px-3 py-2 rounded-lg text-sm"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Prominent */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 shadow-lg">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu - Island Theme */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-b from-teal-700 to-cyan-800 overflow-y-auto">
              <div className="flex flex-col gap-1 mt-8">
                {/* Logo in mobile menu */}
                <div className="flex items-center gap-2 mb-4 px-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/logoVRN.png"
                      alt="VRN Rent Car Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white font-bold text-xl">
                    <span className="text-yellow-400">VRN</span> Rent Car
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4"></div>
                
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-white text-base font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                    <a href={waLink} target="_blank">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

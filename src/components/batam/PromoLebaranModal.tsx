"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Sparkles, CalendarClock, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
interface PromoLebaranModalProps {
  city: string;
  imageSrc: string;
  waText: string;
}

export default function PromoLebaranModal({ city, imageSrc, waText }: PromoLebaranModalProps) {
  const waLink = `https://wa.me/6282363389893?text=${encodeURIComponent(waText)}`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Munculkan pop-up sekali per sesi
    const hasSeenPromo = sessionStorage.getItem('hasSeenLebaranPromo2026');
    if (!hasSeenPromo) {
      // Beri jeda sedikit sebelum pop-up muncul
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenLebaranPromo2026', 'true');

        // Confetti Animation
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }, 1500); // Jeda 1.5 detik

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 max-w-md border-none bg-transparent shadow-none sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-2xl border border-yellow-500/30">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <Link href={waLink} target="_blank" className="block cursor-pointer group" onClick={() => setIsOpen(false)}>
            <div className="relative aspect-square w-full overflow-hidden">
                <Image
                src={imageSrc}
                alt={`Promo Lebaran VRN Rent Car ${city}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/20 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse z-10">
                    <Sparkles className="w-3 h-3" />
                    PROMO SPESIAL
                </div>
            </div>

            <div className="p-6 relative z-10 -mt-16 bg-gradient-to-t from-emerald-950 via-emerald-950 to-transparent pt-12">
                <div className="flex items-center gap-2 text-yellow-400 mb-2 text-sm font-medium">
                    <CalendarClock className="w-4 h-4" />
                    <span>Booking Periode Terbatas!</span>
                </div>
                
                <DialogTitle className="text-3xl font-bold text-white mb-3 leading-tight">
                    Siap Mudik & Liburan <br/>
                    <span className="text-yellow-400">Lebaran 2026?</span>
                </DialogTitle>
                
                <p className="text-emerald-100/90 mb-6 text-sm leading-relaxed">
                Amankan unit mobil pilihan Anda sekarang untuk kenyamanan perjalanan di {city}. Harga spesial untuk pemesanan awal!
                </p>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-emerald-950 font-bold text-lg h-12 rounded-xl shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all">
                    Ambil Promo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
            </Link>

            <DialogClose className="absolute top-4 right-4 rounded-full bg-black/20 p-2 text-white/70 hover:bg-black/40 hover:text-white transition-colors backdrop-blur-sm z-20">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
            </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

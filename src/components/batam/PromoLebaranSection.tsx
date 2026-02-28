"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function PromoLebaranSection({ className = "" }) {
  const targetDate = new Date("2026-03-16T00:00:00").getTime();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #065f46 0%, #047857 25%, #065f46 50%, #047857 75%, #065f46 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated Gradient Background */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-1 {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float 8s ease-in-out infinite 1s;
        }
        .animate-float-3 {
          animation: float 7s ease-in-out infinite 2s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      {/* Floating Blur Glow Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float-2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl animate-float-3"></div>

      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

        {/* Badge */}
        <span className="inline-block bg-yellow-400 text-emerald-900 text-sm font-semibold px-4 py-1 rounded-full mb-6 shadow-md">
          Promo Lebaran Batam 2026
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
          Rental Mobil Lebaran di Batam
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-10">
          Amankan kendaraan terbaik untuk mudik & perjalanan keluarga sebelum kehabisan unit.
        </p>

        {/* Urgency Line */}
        <p className="text-orange-300 font-semibold text-lg mb-4 animate-pulse">
          ⚠️ Promo berakhir dalam:
        </p>

        {/* Countdown - Improved with glass effect and bigger numbers */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto mb-12">
          {Object.entries(countdown).map(([label, value], index) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl py-6 md:py-8 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider mt-2 font-medium text-emerald-200">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Info Box (FIX KONTRAS TOTAL) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 text-left">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Semua Tipe Mobil
                </p>
                <p className="text-emerald-100">
                  Dari city car hingga premium
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Minimal 7 Hari
                </p>
                <p className="text-emerald-100">
                  Cocok untuk mudik & perjalanan keluarga
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Transparan & Profesional
                </p>
                <p className="text-emerald-100">
                  Harga mengikuti tipe & durasi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Unit Terbatas
                </p>
                <p className="text-emerald-100">
                  Booking lebih awal untuk hindari kehabisan
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Buttons with hover animations */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <Link
            href="/batam/armada"
            className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Lihat Armada Batam
          </Link>

          <a
            href="https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam%20untuk%20Lebaran%202026."
            target="_blank"
            className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Chat via WhatsApp
          </a>
        </div>

        {/* Trust Text */}
        <p className="text-emerald-200 text-sm md:text-base">
          ✅ <span className="font-semibold">500+ pelanggan Batam</span> sudah booking Lebaran 2026
        </p>

      </div>
    </section>
  );
}

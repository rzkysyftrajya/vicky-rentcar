"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PromoLebaranSection() {
  const targetDate = new Date("2026-03-16T00:00:00").getTime();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block bg-yellow-400 text-emerald-900 text-sm font-semibold px-4 py-1 rounded-full mb-6 shadow-md">
          Promo Lebaran Medan 2026
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Rental Mobil Lebaran di Medan
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-10">
          Amankan kendaraan terbaik untuk mudik & perjalanan keluarga sebelum kehabisan unit.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {Object.entries(countdown).map(([label, value]) => (
            <div
              key={label}
              className="bg-white text-emerald-900 rounded-xl py-6 shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold">
                {value}
              </div>
              <div className="text-sm uppercase tracking-wide mt-1 font-medium">
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

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/medan/fleet"
            className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg transition"
          >
            Lihat Armada Medan
          </Link>

          <a
            href="https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan%20untuk%20Lebaran%202026."
            target="_blank"
            className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Chat via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
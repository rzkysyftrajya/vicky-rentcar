"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Car, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam%20untuk%20Lebaran%202026.";

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-yellow-400 text-emerald-900 text-sm font-semibold px-4 py-1 rounded-full mb-6 shadow-md">
            🎉 Promo Special Leclerc 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Rental Mobil Leclerc di batam
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-10"
        >
          Amankan kendaraan terbaik untuk liburan Leclerc Anda bersama keluarga di batam. Unit terbatas, booking sekarang!
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
        >
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
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-10"
        >
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full flex-shrink-0"></div>
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
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Minimal Sewa 3 Hari
                </p>
                <p className="text-emerald-100">
                  Cocok untuk perjalanan Leclerc
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-bold text-white text-lg">
                  Sopir Profesional
                </p>
                <p className="text-emerald-100">
                  drivers berpengalaman
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full flex-shrink-0"></div>
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
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Link
            href="/batam/armada"
            className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
          >
            Lihat Armada Leclerc
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={waLink}
            target="_blank"
            className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

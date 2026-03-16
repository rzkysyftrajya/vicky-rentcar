"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Phone,
  Calendar,
  Users,
  Car,
  Ticket,
  Utensils,
  ChevronLeft,
} from "lucide-react";

export default function SurabayaCityTourPage() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya tertarik dengan Paket Surabaya City Tour 1 Hari. Mohon info lengkap dan harga."
  );

  const itinerary = [
    "07.00 – Meeting Point (Juanda Airport / Hotel di Surabaya)",
    "Monumen Tugu Pahlawan",
    "Monkasel (Monumen Kapal Selam)",
    "House of Sampoerna",
    "Taman Bungkul",
    "Pantai Kenjeran",
    "Jembatan Suramadu",
    "Toko Oleh-Oleh Khas Surabaya",
    "Tour selesai sekitar 18.00",
  ];

  const includes = [
    "Transportasi AC",
    "Tiket masuk objek wisata",
    "Makan 1x",
    "Air mineral",
    "Driver / Guide",
    "Tol dan parkir",
  ];

  const excludes = [
    "Pengeluaran pribadi",
    "Optional tour",
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-1-HARI.webp"
          alt="Paket Surabaya City Tour 1 Hari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-lg"
          >
            Paket Tour Surabaya
          </motion.div>
          
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl leading-tight"
          >
            Surabaya City Tour
            <span className="block text-2xl md:text-4xl lg:text-5xl text-orange-400 font-bold mt-4">1 Hari</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Paket wisata sehari menjelajahi destinasi ikonik kota Surabaya.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        
        {/* Itinerary Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/rental-mobil-surabaya/paket-tour" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-12">
            <ChevronLeft className="w-5 h-5" />
            Semua Paket Tour
          </Link>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent">
            Itinerary Tour
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-4 text-left">
                {itinerary.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 group-hover:text-orange-600 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-1-HARI.webp"
                alt="Itinerary Surabaya City Tour"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Include/Exclude Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Include */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-800">Sudah Termasuk</h3>
                <p className="text-gray-600 mt-1">Fasilitas lengkap untuk kenyamanan Anda</p>
              </div>
            </div>
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-3 bg-green-50 rounded-xl border border-green-100 text-green-800"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Exclude */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center">
                <XCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-800">Tidak Termasuk</h3>
                <p className="text-gray-600 mt-1">Biaya tambahan yang perlu dipersiapkan</p>
              </div>
            </div>
            <ul className="space-y-3">
              {excludes.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-3 bg-red-50 rounded-xl border border-red-100 text-red-800"
                >
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-4xl p-16 md:p-24 text-white text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Booking Paket Tour Sekarang
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Nikmati Surabaya City Tour 1 Hari dengan fasilitas lengkap dan pelayanan profesional dari Vicky Rentcar Nusantara
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl shadow-white/20 w-full sm:w-auto flex items-center gap-3"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-6 h-6" />
                Pesan via WhatsApp
              </a>
            </Button>
            
            <div className="text-left sm:text-center text-lg space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-orange-200">
                <Calendar className="w-5 h-5" />
                <span>Durasi: 1 Hari (07.00 - 18.00)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-orange-200">
                <Users className="w-5 h-5" />
                <span>Min 2 Orang</span>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-orange-100 text-lg"
          >
            *Harga spesial untuk booking hari ini. Hubungi sekarang!
          </motion.p>
        </motion.section>

      </div>

      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-6 pb-12"
      >
        <Link
          href="/rental-mobil-surabaya/paket-tour"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg"
        >
          ← Kembali ke Paket Tour
        </Link>
      </motion.div>
    </div>
  );
}

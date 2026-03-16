"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export default function PaketTourSurabaya() {
  const tourPackages = [
    {
      id: 1,
      title: "Surabaya City Tour 1 Hari",
      description: "Wisata sehari menjelajahi destinasi populer Surabaya seperti Tugu Pahlawan, Monkasel, Taman Bungkul, Pantai Kenjeran dan Jembatan Suramadu.",
      duration: "1 Hari",
      image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-1-HARI.webp",
      link: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-1-hari",
    },
    {
      id: 2,
      title: "Surabaya City Tour 2 Hari 1 Malam",
      description: "Nikmati perjalanan wisata Surabaya selama 2 hari 1 malam dengan mengunjungi berbagai tempat wisata ikonik kota Surabaya.",
      duration: "2H1M",
      image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-2-HARI-1-MALAM.webp",
      link: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-2h1m",
    },
    {
      id: 3,
      title: "Bromo Midnight Tour dari Surabaya",
      description: "Tour sunrise Gunung Bromo dari Surabaya menggunakan jeep dengan pengalaman melihat matahari terbit yang spektakuler.",
      duration: "1 Hari",
      image: "/halaman-surabaya/PAKET-TOUR/BROMO-MIDNIGHT_TOUR-DARI-SURABAYA.webp",
      link: "/rental-mobil-surabaya/paket-tour/bromo-midnight-tour-surabaya",
    },
    {
      id: 4,
      title: "Surabaya – Malang Batu Tour",
      description: "Perjalanan wisata ke Malang dan Batu mengunjungi Jatim Park, Museum Angkut, dan berbagai destinasi populer lainnya.",
      duration: "2H1M",
      image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MALANG-BATU-TOUR.webp",
      link: "/rental-mobil-surabaya/paket-tour/surabaya-malang-tour",
    },
    {
      id: 5,
      title: "Surabaya Religi Tour",
      description: "Wisata religi mengunjungi Masjid Al Akbar Surabaya, Makam Sunan Ampel, Kampung Arab Ampel dan Masjid Cheng Ho.",
      duration: "1 Hari",
      image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-RELIGI-TOUR.webp",
      link: "/rental-mobil-surabaya/paket-tour/surabaya-religi-tour",
    },
    {
      id: 6,
      title: "Surabaya – Madura Tour",
      description: "Tour ke Pulau Madura mengunjungi Jembatan Suramadu, Bukit Jaddih, Mercusuar Sembilangan dan wisata kuliner khas Madura.",
      duration: "1 Hari",
      image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MADURA-TOUR.webp",
      link: "/rental-mobil-surabaya/paket-tour/surabaya-madura-tour",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Link href="/rental-mobil-surabaya" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8">
            <ChevronLeft className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-gray-700 to-slate-900 bg-clip-text text-transparent">
            Paket Tour Surabaya
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai pilihan paket wisata Surabaya yang bisa dinikmati bersama keluarga, 
            pasangan, maupun rombongan dengan fasilitas lengkap dan pelayanan profesional.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {tour.duration}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {tour.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                  {tour.description}
                </p>
                
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 rounded-2xl text-lg font-bold shadow-xl mt-auto group-hover:shadow-2xl transition-all">
                  <Link href={tour.link}>
                    Lihat Detail Paket
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24 p-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-4xl text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Jelajahi Surabaya?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Pilih paket tour favorit Anda dan mulailah petualangan seru bersama Vicky Rentcar Nusantara
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-8 rounded-3xl font-bold shadow-2xl">
            <a href="https://wa.me/6282363389893?text=Halo VRN, saya mau booking paket tour Surabaya" target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

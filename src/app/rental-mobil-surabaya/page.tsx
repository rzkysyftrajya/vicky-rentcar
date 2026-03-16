"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  Phone,
  CheckCircle,
  MessageSquare,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Ticket,
  Utensils,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  heroStats,
  whyUsPoints,
  carOptions,
  popularCars,
  destinations,
  culinarySpots,
  testimonials,
  faqs,
  googleReviews,
  hotelRecommendations,
} from "@/data/surabaya-page-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PromoLebaranModal from "@/components/batam/PromoLebaranModal";
import PromoLebaranSection from "@/components/surabaya/PromoLebaranSection";

export default function SurabayaPage() {
  const whatsappNumber = "6282363389893";

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
  const whatsappMessage = encodeURIComponent(
"Halo Vicky Rentcar Surabaya, saya mau booking mobil di Surabaya"
  );

  // Gallery documentation photos - 29 foto dari dokumentasi
  const documentationPhotos = Array.from({ length: 29 }, (_, i) => ({
    src: `/halaman-surabaya/dokumentasi/dokumentasi-${i + 1}.webp`,
    alt: `Dokumentasi VRN Surabaya ${i + 1}`,
  }));

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="flex flex-col bg-slate-50 font-sans overflow-x-hidden">
      <PromoLebaranModal 
        city="Surabaya" // Pastikan props ini sesuai
        imageSrc="/halaman-surabaya/promo-lebaran.webp"
waText="Halo Vicky Rentcar Surabaya, saya tertarik dengan Promo Lebaran"
      />
      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer" // Rel attribute for security
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-16 h-16 rounded-full shadow-2xl overflow-hidden"
          >
            <Image
              src="/icon/wa.png"
              alt="Hubungi kami di WhatsApp"
              width={64}
              height={64}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 2.5,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="absolute -top-2 -left-32 bg-white text-orange-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Pesan Sekarang!
          </motion.div>
        </div>
      </Link>

      {/* HERO SECTION  */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/destinasi-wisata/surabaya.jpg"
          alt="Sewa Mobil di Surabaya dengan pemandangan kota"
          fill
          className="absolute inset-0 z-0 object-cover" // No change
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" /> 

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Badge */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-500/90 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg border border-orange-400/50" // No change
          >
            #1 Rental Mobil Terpercaya di Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Sewa Mobil Surabaya
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mt-2">
              Murah, Aman & Nyaman
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-slate-200 max-w-3xl mb-10 leading-relaxed font-light"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Layanan sewa mobil terbaik di Surabaya. Unit bersih, wangi, dan driver profesional. 
            Siap antar jemput bandara, wisata, atau perjalanan dinas.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl shadow-orange-500/30 transition-all duration-300 flex items-center gap-3 group border border-orange-400/20" // No change
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  Chat Sekarang
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-xl transition-all duration-300 group" // No change
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
"Halo Vicky Rentcar Surabaya, saya ingin bertanya tentang harga sewa di Surabaya"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Harga
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* STATS STRIP - Moved here for immediate credibility */}
      <div className="relative -mt-16 z-30 px-6 mb-16">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-100"
        >
          {heroStats.map((stat, i) => ( 
            <div key={i} className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 group-hover:scale-110 transition-transform inline-block"> 
                {stat.num}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div> 
            </div>
          ))}
        </motion.div>
      </div>

      {/* PROMO LEBARAN SECTION */}
      <PromoLebaranSection />

      {/* 🎯 KENAPA PILIH VRN - Moved UP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Keunggulan Kami</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Kenapa Memilih <span className="text-orange-500">VRN Surabaya?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi rental mobil terbaik untuk perjalanan bisnis & wisata di
              Surabaya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-50 rounded-3xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-orange-100 group"
              >
                <div
                  className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-white shadow-md group-hover:bg-orange-500 transition-colors duration-300"
                >
                  <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div> 
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {item.title}
                </h3> 
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚘 ARMADA MOBIL - Moved Up & Enhanced */}
      <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pilihan Armada 
              <span className="block text-orange-500 mt-2">Terbaik & Terawat</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari city car hingga premium, semua siap antar Anda ke destinasi
              impian
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{popularCars.map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 relative border border-slate-700 group"
              >
                {car.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10 shadow-lg flex items-center gap-1">
                    ⭐ Paling Laris
                  </div>
                )}
 
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden rounded-t-3xl"
                >
                  <Image
                    src={car.image}
                    alt={`Sewa ${car.name} di Surabaya - Vicky Rentcar Nusantara`}
                    width={400}
                    height={224}
className="w-full h-[450px] object-cover bg-gradient-to-b from-slate-700 to-slate-800 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div> 
                      <h3 className="text-2xl font-bold mb-1">{car.name}</h3>
                      <p className="text-slate-400 text-sm">{car.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-slate-400 bg-slate-900/50 w-fit px-3 py-1 rounded-full"> 
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{car.capacity}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, idx) => ( 
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-300/90"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"> 
                      <Link
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
`Halo Vicky Rentcar Surabaya, saya mau booking ${car.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pesan Sekarang
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Pengenalan Kantor */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pengenalan Kantor VRN Surabaya
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Kenali lebih dekat tim dan fasilitas kami di Surabaya
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden mx-auto max-w-3xl"
          >
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full h-[500px] object-cover"
            >
              <source src="/halaman-surabaya/pegenalan-kantor.mp4" type="video/mp4" />
              Browser Anda tidak mendukung video.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-xl rounded-full shadow-2xl">
              <Link href="https://wa.me/6282363389893?text=Halo, saya sudah tonton video pengenalan kantor. Mau booking mobil!" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.765z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Booking Setelah Kunjungan Virtual
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 🗺️ BOOKING PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Booking Mobil <span className="text-orange-500">Dalam 3 Langkah</span>
            </h2>
            <p className="text-gray-600 text-lg">Proses cepat dan mudah, mobil langsung siap.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-orange-100 border-t-2 border-dashed border-orange-300 z-0"></div>
            
            {[
              { icon: Car, title: "Pilih Mobil", desc: "Tentukan mobil yang sesuai kebutuhan Anda" },
              { icon: MessageSquare, title: "Chat WhatsApp", desc: "Konfirmasi ketersediaan dengan admin kami" },
              { icon: CheckCircle, title: "Mobil Siap", desc: "Driver kami menjemput di lokasi Anda" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-24 h-24 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center text-orange-500 shadow-xl mb-6">
                    <step.icon className="w-10 h-10" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                 <p className="text-gray-500 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-orange-500/30">
               <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">Booking Sekarang</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 🎒 PAKET TOUR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              <span className="text-orange-500">Paket Tour Surabaya</span> 
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Selain rental mobil, kami juga menyediakan berbagai paket wisata Surabaya yang bisa dinikmati bersama keluarga, pasangan, maupun rombongan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group transition-all duration-300 h-full"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500" // No change
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold"> 
                    {tour.duration}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 line-clamp-2">{tour.title}</h3> 
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{tour.description}</p> 
                  <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-xl font-bold mt-auto">
                    <Link href={tour.link}>Lihat Detail</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎬 VIDEO CINEMATIC ARMADA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Armada Mobil 
              <span className="block text-orange-500 mt-2">Dalam Video Sinematik</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Lihat langsung koleksi armada mobil premium kami dalam video
              berkualitas tinggi
            </p>
          </motion.div>

          {/* Mobile: horizontal scroll, Desktop: grid 2-3 kolom */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:overflow-visible md:mx-0 md:px-0"> 
            {[
              {
                video: "/halaman-surabaya/armada/armada.mp4",
                title: "Armada Premium Collection",
                desc: "Koleksi mobil mewah dan berkualitas tinggi untuk perjalanan special Anda",
              },
              {
                video: "/halaman-surabaya/armada/armada-2.mp4",
                title: "Armada Ekonomi & Effisien",
                desc: "Solusi ekonomis tanpa mengurangi kenyamanan perjalanan",
              },
              {
                video: "/halaman-surabaya/armada/armada-3.mp4",
                title: "Armada Special Event",
                desc: "Mobil special untuk acara pernikahan, evento, dan celebration",
              },
              {
                video: "/halaman-surabaya/armada/armada-4.mp4",
                title: "Armada Complete Fleet",
                desc: "Armada lengkap dari city car hingga luxury vehicle",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }} 
                whileHover={{ y: -10 }} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-80 md:w-auto"
              >
                <div className="relative">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    muted={false} 
                    className="w-full h-64 object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                    Browser Anda tidak mendukung video HTML5.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800"> 
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p> 
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          > 
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity },
                scale: { duration: 0.2 },
              }}
            > 
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg rounded-full shadow-xl transition-all flex items-center gap-3 mx-auto">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
"Halo Vicky Rentcar Surabaya, saya mau lihat armada mobil secara langsung"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5" />
                  Lihat Armada Premium Sekarang
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* HOW TO BOOK SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Booking Semudah <span className="text-orange-500">1-2-3</span> 
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Proses cepat, tanpa ribet, mobil langsung siap untuk Anda.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Pilih Mobil & Tanggal",
                desc: "Lihat armada kami dan tentukan mobil yang paling cocok untuk kebutuhan perjalanan Anda di Surabaya.",
              },
              {
                step: "2",
                title: "Chat via WhatsApp",
                desc: "Klik tombol WhatsApp, informasikan mobil pilihan dan tanggal sewa Anda. Tim kami akan merespon secepatnya.",
              },
              {
                step: "3",
                title: "Mobil Siap Diantar",
                desc: "Setelah konfirmasi, mobil bersih dan prima akan kami antar ke lokasi Anda, siap untuk memulai petualangan.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }} 
                className="p-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"> 
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3> 
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏞️ DESTINASI WISATA - Surabaya Specific */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jelajahi <span className="text-orange-500">Kota Pahlawan</span> 
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari Tugu Pahlawan hingga Jembatan Suramadu, kami antar Anda ke
              mana saja!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((place, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} 
                whileHover={{ y: -5 }} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={place.image}
                    alt={`Wisata ${place.name} di Surabaya`}
                    fill 
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" /> 
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="inline-block bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold mb-1"> 
                      {place.category}
                    </span>
                    <h3 className="text-xl font-bold">{place.name}</h3> 
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🍜 KULINER KHAS - Surabaya Street Food */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Kuliner Khas <span className="text-orange-500">Surabaya</span> 
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Driver kami tahu spot kuliner legendaris yang wajib dicoba!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {culinarySpots.map((food, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} 
                whileHover={{ scale: 1.05 }} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-gray-100"
              >
                <div className="text-4xl mb-2">{food.icon}</div> 
                <h4 className="font-bold text-sm mb-1">{food.name}</h4> 
                <p className="text-xs text-gray-500">{food.loc}</p> 
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONI - Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              Apa Kata Mereka tentang kami?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Ribuan pelanggan puas dari seluruh Indonesia
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden relative">
              <AnimatePresence initial={false} custom={currentTestimonial}>
                <motion.div
                  key={currentTestimonial}
                  custom={currentTestimonial}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full px-4"
                >
                  <div className="w-full">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-slate-50 p-8 rounded-2xl shadow-sm h-full border border-slate-100"
                    >
                      <div className="flex gap-1 mb-4"> 
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, j) => (
                          <motion.div
                            key={j}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              delay: j * 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="italic mb-4 text-gray-700 leading-relaxed">
                        "
                        {testimonials[currentTestimonial].text.split(" ").map((word, idx) => {
                          const isHighlight = [
                            "recommended",
                            "perfect",
                            "memuaskan",
                            "bagus",
                            "terpercaya",
                            "professional",
                          ].includes(word.toLowerCase());
                          return (
                            <span
                              key={idx}
                              className={isHighlight ? "text-orange-500 font-semibold" : ""}
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                        "
                      </p>
                      <div className="flex items-center gap-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            delay: 0.3,
                            duration: 0.3,
                          }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl"
                        >
                          {testimonials[currentTestimonial].name[0]}
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonials[currentTestimonial].city}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <Button
              variant="outline" 
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 left-0 bg-white hover:bg-orange-50 border-gray-200 text-slate-600 shadow-md"
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === 0 ? 2 : prev - 1))
              }
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline" 
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-0 bg-white hover:bg-orange-50 border-gray-200 text-slate-600 shadow-md"
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === 2 ? 0 : prev + 1))
              }
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* 📸 DOKUMENTASI VRN SURABAYA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              DOKUMENTASI VRN SURABAYA
            </h2>
            <p className="text-xl text-gray-600">
              Momen-momen dari layanan rental mobil terpercaya di Surabaya
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {documentationPhotos.map((photo, i) => { 
              const isEven = i % 2 === 0;
              const rowIndex = Math.floor(i / 4); // 4 columns per row
              const isRowEven = rowIndex % 2 === 0;
 
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: isRowEven ? -100 : 100,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }} 
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: "easeOut", 
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Dark overlay on hover */} 
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="font-semibold">VRN Surabaya</p> 
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🚗 CTA FINAL - Strong Call to Action */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10"> 
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ repeat: Infinity, duration: 15 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg shadow-orange-500/30"
          >
            Promo Spesial Hari Ini!
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"> 
            Siap Jelajahi Surabaya?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-blue-100"> 
            <span className="font-bold text-orange-400">Booking sekarang</span>{" "}
            dan dapatkan diskon spesial!
            <br />
            Cuma modal jempol, perjalanan jadi mudah!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 0.2 },
              }}
            > 
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                >
                  <Phone className="w-6 h-6" />
                  Cek Ketersediaan Hari Ini
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, delay: 1 },
                scale: { duration: 0.2 },
              }}
            > 
              <Button className="bg-white hover:bg-gray-100 text-slate-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                Tanya Harga Sekarang
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm"> 
            <div className="flex items-center gap-2"> 
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Tanpa DP</span>
            </div>
            <div className="flex items-center gap-2"> 
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cancel Gratis</span>
            </div>
            <div className="flex items-center gap-2"> 
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Layanan 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Semua yang perlu Anda tahu sebelum booking
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}> 
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-orange-600 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed"> 
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* GOOGLE MAPS REVIEWS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              Ulasan Asli dari
              <span className="block text-orange-500 mt-2">Google Maps</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Kepercayaan Anda adalah prioritas kami. Lihat apa kata mereka di
              platform terpercaya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 }} 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.avatar}
                    alt={`Foto profil ${review.name}`}
                    width={48} 
                    height={48} 
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800"> 
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star
                          key={j} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-4 flex-grow">
                  "{review.text}"
                </p>
                <div className="mt-auto">
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                  > 
                    <Link
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <Image src="/icon/google.png" alt="Google" width={16} height={16} className="mr-2" />
                    Lihat di Google Maps
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏨 HOTEL RECOMMENDATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              Rekomendasi Hotel di
              <span className="block text-orange-500 mt-2">Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pilihan akomodasi terbaik untuk perjalanan bisnis & wisata Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelRecommendations.map((hotel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 }} 
                whileHover={{ y: -10 }} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={`Rekomendasi hotel ${hotel.name} di Surabaya`}
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex gap-1 mb-3"> 
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-800"> 
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm text-slate-500"> 
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.area}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4"> 
                    {hotel.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4"> 
                    {hotel.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl">
                    <Link
                      href="https://www.traveloka.com/id-id/hotel/indonesia/region/surabaya-87731"
                      target="_blank"
                    >
                      Cek Harga Hotel
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✈️ TRAVEL TIPS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"> 
              Tips Perjalanan di Surabaya
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Panduan praktis dari driver berpengalaman kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🗺️",
                title: "Gunakan Driver Lokal",
                desc: "Driver VRN adalah arek Suroboyo asli yang paham seluk-beluk kota, tahu jalan tikus, spot foto keren, hingga warung makan enak yang jarang turis tahu.",
                color: "blue",
              },
              {
                icon: "⏰",
                title: "Hindari Rush Hour",
                desc: "Jam sibuk Surabaya: pagi (07.00-09.00) & sore (16.30-19.00). Atur itinerary wisata di jam santai untuk perjalanan lebih nyaman.",
                color: "orange",
              },
              {
                icon: "📅",
                title: "Booking Jauh-Jauh Hari",
                desc: "Terutama saat weekend, libur nasional, atau peak season (Juni-Juli, Desember). Booking 3-7 hari lebih awal agar dapat mobil pilihan.",
                color: "green",
              },
              {
                icon: "💳",
                title: "Siapkan E-Toll & Cash",
                desc: "Meski banyak tempat terima cashless, beberapa parkir, tol darurat, dan warung tradisional masih pakai cash. Siapkan keduanya untuk jaga-jaga.",
                color: "purple",
              },
              {
                icon: "🌡️",
                title: "Cuaca Surabaya Panas",
                desc: "Suhu rata-rata 28-33°C. Pakai sunscreen, bawa air minum, dan pilih pakaian adem. Mobil VRN semua ber-AC untuk kenyamanan maksimal.",
                color: "red",
              },
              {
                icon: "🍜",
                title: "Coba Kuliner Lokal",
                desc: "Jangan lupa cicipi rawon, rujak cingur, sate klopo! Minta rekomendasi driver untuk spot kuliner autentik dengan harga lokal.",
                color: "yellow",
              },
            ].map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                whileHover={{ scale: 1.03, y: -5 }} 
                className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500`}
              >
                <div className="text-5xl mb-4">{tip.icon}</div> 
                <h3 className="text-xl font-bold mb-3 text-slate-800"> 
                  {tip.title}
                </h3>
                <p className="text-slate-600 leading-relaxed"> 
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTACT INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-slate-800"> 
                  Hubungi Kami
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg"> 
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700"> 
                        WhatsApp / Telepon
                      </div>
                      <div className="text-orange-600 font-bold text-lg"> 
                        +62 823-6338-9893
                      </div>
                      <div className="text-sm text-slate-500"> 
                        Available 24/7
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg"> 
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700"> 
                        Area Layanan
                      </div>
                      <div className="text-slate-600"> 
                        Surabaya & Sekitanya
                      </div>
                      <div className="text-sm text-slate-500"> 
                        Malang, Bromo, Batu, Bali
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg"> 
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700"> 
                        Jam Operasional
                      </div>
                      <div className="text-slate-600">
                        24 Jam / 7 Hari
                      </div>
                      <div className="text-sm text-slate-500">
                        Termasuk hari libur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 flex flex-col justify-center"> 
                <h4 className="text-2xl font-bold mb-4 text-slate-800"> 
                  Siap Berangkat?
                </h4>
                <p className="text-slate-600 mb-6"> 
                  Chat langsung dengan tim kami untuk konsultasi gratis &
                  penawaran terbaik!
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity },
                    hover: { duration: 0.2 },
                  }}
                > 
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-3">
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                    >
                      <Phone className="w-5 h-5" />
                      Booking Tanpa Ribet
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, MapPin, Star, Clock, Shield, Award, Car, 
  CheckCircle, ArrowRight, MessageCircle, Users, Banknote,
  Calendar, Palmtree, Building, Plane, Utensils, ShoppingBag,
  Waves, Sun, Compass, Island, Wind, Anchor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { batamCars as cars } from "@/data/batam-fleet-data";
import Navbar from "@/components/batam/Navbar";
import FaqSection from "@/components/batam/FaqSection";
import PromoLebaranSection from "@/components/batam/PromoLebaranSection";
import { SafeMotionDiv } from "@/components/ui/safe-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VRN Rent Car batam - Rental Mobil Terbaik di Kepulauan Riau | Antar Jemput Bandara Hang Nadim",
  description: "VRN Rent Car batam - Layanan rental mobil profesional di batam dengan tema pulau tropis. Armada terawat, harga transparan, sopir berpengalaman.",
  keywords: "rental mobil batam, sewa mobil batam, rental mobil hang nadim, antar jemput bandara batam, tour batam",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarbatam.com",
  },
};

const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam";

const layanan = [
  { 
    title: "Lepas Kunci", 
    desc: "Kebebasan penuh menjelajahi Batam tanpa sopir. Fleksibel untuk urusan bisnis atau wisata pribadi.",
    image: "/batam/layanan/lepas-kunci.webp"
  },
  { 
    title: "Dengan Sopir", 
    desc: "Sopir profesional mengantar Anda ke mana saja. Ideal untuk meeting multi-lokasi tanpa lelah menyetir.",
    image: "/batam/layanan/dengan-sopir.webp"
  },
  { 
    title: "Antar Jemput Bandara", 
    desc: "Layanan antar jemput Bandara Hang Nadim & Ferry Terminal 24/7. Pastikan transit Anda lancar.",
    image: "/batam/layanan/antar-jemput-bandara.webp"
  },
  { 
    title: "Rental Bulanan", 
    desc: "Solusi ekonomis untuk kebutuhan jangka panjang. Pilihan tepat untuk operasional perusahaan di kawasan industri.",
    image: "/batam/layanan/rental-bulanan.webp"
  },
];

const armadaUnggulan = cars.slice(0, 6);

const destinasi = [
  {
    title: "Nagoya Hill",
    desc: "Pusat perbelanjaan terbesar",
    emoji: "🛍️",
    color: "bg-pink-500",
    image: "/batam/destinasi/nagoya-hill.webp"
  },
  {
    title: "Barelang Bridge",
    desc: "Ikon jembatan penghubung pulau",
    emoji: "🌉",
    color: "bg-blue-500",
    image: "/batam/destinasi/barelang-bridge.webp"
  },
  {
    title: "Tanjung Uma",
    desc: "Kuliner seafood khas laut",
    emoji: "🦞",
    color: "bg-orange-500",
    image: "/batam/destinasi/tanjung-uma.webp"
  },
  {
    title: "Mega Mall",
    desc: "Hiburan & Belanja modern",
    emoji: "🏬",
    color: "bg-red-500",
    image: "/batam/destinasi/mega-mall.webp"
  },
];

const whyChooseUs = [
  { 
    icon: Waves, 
    title: "Layanan Profesional", 
    desc: "Sopir berpengalaman mengenal setiap sudut pulau" 
  },
  { 
    icon: Sun, 
    title: "Armada Terawat", 
    desc: "Kondisi prima siap tempur perjalanan jauh" 
  },
  { 
    icon: Compass, 
    title: "Panduan Lokal", 
    desc: "Rekomendasi tempat tersembunyi terbaik" 
  },
  { 
    icon: Anchor, 
    title: "Harga Transparan", 
    desc: "Tanpa biaya tersembunyi, pasti jelas" 
  },
];

const rekomendasiDestinasi = [
  {
    title: "Nagoya Hill",
    desc: "Pusat perbelanjaan dan hiburan terbesar di batam dengan berbagai merek internasional.",
    image: "/galeri/galeri1.webp",
  },
  {
    title: "Pantai Nongsa",
    desc: "Pantai indah dengan pasir putih dan air laut jernih, cocok untuk bersantai dan berenang.",
    image: "/galeri/galeri2.webp",
  },
  {
    title: "Jembatan Barelang",
    desc: "Jembatan ikonik yang menghubungkan batam dan Bintan, pemandangan spektakuler saat matahari terbenam.",
    image: "/galeri/galeri3.webp",
  },
  {
    title: "Batam Center",
    desc: "Pusat bisnis dan perdagangan di batam, dengan gedung-gedung modern dan restoran internasional.",
    image: "/galeri/galeri4.webp",
  }
];

export default function HomePage() {
  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50 overflow-x-hidden`}>

      {/* HERO SECTION */}
 <section className="relative min-h-[90vh] flex items-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-emerald-700 to-cyan-900">
    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px]"></div>
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-300/5 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
  </div>

  {/* HAPUS pt-24 DI SINI */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-amber-400 text-black text-sm md:text-base px-4 py-1.5 mb-6 shadow-lg shadow-amber-400/20 border-0">
                Rental Mobil Terbaik di batam
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Eksplorasi Pulau 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400"> Batam</span> Bersama Kami
              </h1>
              <p className="text-lg md:text-xl text-teal-50/90 mb-8 max-w-xl leading-relaxed">
                Nikmati kebebasan mengeksplorasi keindahan kepulauan Riau dengan armada terbaik dan layanan profesional.
                Batam sebagai kota bisnis dan transit menuntut mobilitas cepat; kami hadir untuk mendukung meeting, proyek, dan perjalanan singkat Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg px-8 shadow-xl shadow-amber-500/20 transition-all hover:scale-105" asChild>
                  <a href={waLink} target="_blank">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Pesan Sekarang
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8" asChild>
                  <a href="/batam/armada">
                    <Car className="w-5 h-5 mr-2" />
                    Lihat Armada
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-teal-200 text-sm">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                  <div className="text-teal-200 text-sm">Armada</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">5★</div>
                  <div className="text-teal-200 text-sm">Rating</div>
                </div>
              </div>
            </div>

            <SafeMotionDiv className="hidden lg:block" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-pulse">
                  <div className="flex items-center gap-2 text-white">
                    <Sun className="w-6 h-6 text-yellow-400" />
                    <span className="font-semibold">Cuaca: Cerah</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Waves className="w-6 h-6 text-cyan-400" />
                    <span className="font-semibold">Island Hopping</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <Badge className="bg-teal-100 text-teal-700 mb-4">⭐ Armada Pilihan</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Toyota Alphard</h3>
                    <p className="text-gray-500 mb-6">Premium MPV untuk perjalanan nyaman</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <Car className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                        <span className="text-sm text-gray-600">7 Kursi</span>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <Shield className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                        <span className="text-sm text-gray-600">Full Insurance</span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold text-teal-600">Rp 1.500.000</span>
                      <span className="text-gray-400">/hari</span>
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                      <a href={waLink} target="_blank">
                        Booking Sekarang
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SafeMotionDiv>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#paint0_linear)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14B8A6"/>
                <stop offset="1" stopColor="#06B6D4"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* PROMO LEBARAN SECTION - Inserted below Hero */}
      <div className="-mt-20 relative z-20">
        <PromoLebaranSection />
      </div>

      {/* BUSINESS & TRANSIT SOLUTION SECTION - NEW */}
      <SafeMotionDiv className="py-20 bg-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-700 mb-4">🏢 SOLUSI BISNIS & TRANSIT</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solusi Transportasi untuk Bisnis & Transit di Batam
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Batam dikenal sebagai kota bisnis dan transit strategis menuju Singapura serta Malaysia. Banyak pelanggan kami menggunakan layanan <span className="font-semibold text-teal-700">rental mobil Batam</span> untuk kebutuhan meeting, kunjungan proyek industri, maupun perjalanan singkat 1–2 hari. Dengan mobilitas yang fleksibel, Anda dapat berpindah lokasi dengan lebih efisien tanpa bergantung pada transportasi umum.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Plane className="w-5 h-5 text-teal-600" />
                  Antar Jemput Bandara & Ferry
                </h3>
                <p className="text-gray-600 text-sm">
                  Layanan tepat waktu dari <span className="font-medium">Bandara Hang Nadim</span> maupun <span className="font-medium">Ferry Terminal Batam Center</span> untuk efisiensi waktu transit Anda.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building className="w-5 h-5 text-teal-600" />
                  Kunjungan Industri & Proyek
                </h3>
                <p className="text-gray-600 text-sm">
                  Mobilitas lancar ke kawasan industri <span className="font-medium">Batu Ampar</span>, <span className="font-medium">Muka Kuning</span>, dan lokasi proyek lainnya dengan armada prima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SafeMotionDiv>

      {/* LAYANAN SECTION - PREMIUM */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-teal-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Premium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pilihan layanan rental mobil terbaik di batam untuk kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layanan.map((item, index) => (
              <SafeMotionDiv 
                key={index} 
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              </SafeMotionDiv>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Sekarang!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ARMADA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <Badge className="bg-yellow-400 text-black mb-4">ARMADA KAMI</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Armada Mobil Terawat
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Armada kami sangat beragam dan terawat, cocok untuk kebutuhan bisnis, keluarga, dan operasional perusahaan. Kami memastikan kenyamanan dan keamanan dalam setiap perjalanan Anda di Batam.
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/batam/armada">
                Lihat Semua Armada
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {armadaUnggulan.map((car, index) => (
              <SafeMotionDiv 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col group border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{car.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
                    {car.specs.slice(0, 3).map((spec, i) => (
                      <span key={i} className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                      <a href={waLink} target="_blank">Booking</a>
                    </Button>
                  </div>
                </div>
              </SafeMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINASI SECTION */}
      <section className="py-24 bg-gradient-to-b from-teal-50/30 to-cyan-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">🗺️ DESTINASI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Tempat Menarik
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan destinasi populer di batam yang wajib dikunjungi selama perjalanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinasi.map((place, index) => (
              <SafeMotionDiv
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <h3 className="text-xl font-bold text-white mb-1">{place.title}</h3>
                  <p className="text-white/80 text-sm">{place.desc}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-black" asChild>
                    <a href={waLink} target="_blank">Tour</a>
                  </Button>
                  </div>
                </SafeMotionDiv>
              ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white" asChild>
              <Link href="/batam/destinasi">
                Lihat Semua Destinasi
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-r from-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-400 text-black mb-4">KENAPA PILIH KAMI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pengalaman Tak Terlupakan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <SafeMotionDiv 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-teal-100/80 text-sm leading-relaxed">{item.desc}</p>
              </SafeMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO LEBARAN SECTION */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <SafeMotionDiv className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
          <Badge className="bg-white text-black mb-4">PROMO LEBARAN</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Diskon Spesial Ramadan & Lebaran
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
            Rayakan momen spesial dengan penawaran terbatas! Dapatkan diskon hingga 20% untuk rental mobil selama periode Ramadan dan Lebaran. Armada premium siap mengantar Anda ke berbagai destinasi wisata di batam.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8" asChild>
            <Link href="/batam/armada">
              <Car className="w-5 h-5 mr-2" />
              Lihat Armada & Promo
            </Link>
          </Button>
        </SafeMotionDiv>
      </section>
      {/* GALERI FOTO SECTION */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-700 mb-4">GALERI FOTO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeri Foto batam
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kumpulan foto kegiatan layanan VRN Rent Car batam
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/batam/galeri/galeri-1.webp" },
              { src: "/batam/galeri/galeri-2.webp" },
              { src: "/batam/galeri/galeri-3.webp" },
              { src: "/batam/galeri/galeri-4.webp" },
              { src: "/batam/galeri/galeri-5.webp" },
              { src: "/batam/galeri/galeri-6.webp" },
            ].map((photo, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative bg-gradient-to-br from-teal-400 to-cyan-600">
                  <Image
                    src={photo.src}
                    alt={`Galeri foto ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white" asChild>
              <Link href="/batam/galeri">
                Lihat Semua Galeri
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOTEL RECOMENDATION SECTION */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-700 mb-4">🏨 HOTEL REKOMENDASI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hotel Populer untuk Business Traveler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut daftar hotel yang sering menjadi pilihan para pelaku bisnis saat berkunjung ke Batam:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "HARRIS Hotel batam Center", image: "/batam/hotel/harris-batam-center.webp" },
              { name: "Swiss-Belhotel Harbour Bay", image: "/batam/hotel/swiss-belhotel-harbour-bay.webp" },
              { name: "Radisson Golf & Convention Center", image: "/batam/hotel/radisson-golf-batam.webp" },
            ].map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTAL BANDARA HANG NADIM SECTION */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-700 mb-4">✈️ BANDARA HANG NADIM</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rental Bandara Hang Nadim
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Layanan antar jemput bandara Hang Nadim tersedia 24/7 dengan sopir profesional dan armada yang siap menjemput Anda tepat waktu. Nikmati perjalanan nyaman dari bandara langsung ke destinasi Anda di batam tanpa khawatir transportasi.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Booking Antar Jemput
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ BATAM SECTION - Client Component */}
      <FaqSection />
      {/* CTA SECTION */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Siap Menjelajahi batam?
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Hubungi kami sekarang untuk pemesanan atau konsultasi gratuita!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-lg px-8" asChild>
                <a href={waLink} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8" asChild>
                <a href="tel:+6282363389893">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl"></span>
                </div>
                <div className="font-bold text-xl">
                  <span className="text-yellow-400">VRN</span> Rent Car
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Layanan rental mobil terpercaya di Batam, Kepulauan Riau. Siap melayani kebutuhan transportasi bisnis dan transit Anda di Batam dengan armada terbaik.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/batam/layanan" className="hover:text-white transition">Rental Harian</a></li>
                <li><a href="/batam/layanan" className="hover:text-white transition">Rental Bulanan</a></li>
                <li><a href="/batam/layanan" className="hover:text-white transition">Antar Jemput Bandara</a></li>
                <li><a href="/batam/destinasi" className="hover:text-white transition">City Tour</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/batam" className="hover:text-white transition">Beranda</a></li>
                <li><a href="/batam/armada" className="hover:text-white transition">Armada</a></li>
                <li><a href="/batam/tentang" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="/batam/kontak" className="hover:text-white transition">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400" /> 
                  +62 823-6338-9893
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-teal-400" /> 
                  WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-400" /> 
                  batam, Kepulauan Riau
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} VRN Rent Car batam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

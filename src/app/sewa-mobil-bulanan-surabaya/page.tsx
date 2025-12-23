"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Users,
  Calendar,
  DollarSign,
  CheckCircle,
  Phone,
  Star,
  TrendingDown,
  TrendingUp,
  Building,
  Globe,
  Settings,
  Shield,
  ChevronLeft,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SewaMobilBulananSurabaya() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau konsultasi untuk sewa mobil bulanan di Surabaya"
  );

  const [currentTab, setCurrentTab] = useState(0);

  const testimonials = [
    {
      name: "PT Maju Jaya",
      city: "Surabaya",
      text: "Sudah 2 tahun pakai layanan bulanan untuk operasional. Driver full-time yang konsisten, armada ganti rutin, tidak perlu pusing pajak & servis.ROI-nya lebih baik dari punya mobil sendiri!",
      rating: 5,
      company: "Trading Company",
      period: "24 bulan",
    },
    {
      name: "Expat Family - Schmidt",
      city: "Gresik",
      text: "3 tahun stay di Indonesia, mobil bulanan dari VRN sangat membantu. Driver bisa bahasa Inggris, mobil selalu bersih, maintenance on schedule. Much better than buying car here!",
      rating: 5,
      company: "German Expat",
      period: "36 bulan",
    },
    {
      name: "CV Kreatif Media",
      city: "Sidoarjo",
      text: "Tim marketing butuh mobil operasional harian. Paket bulanan VRN paling fleksibel, bisa tambah unit kapan butuh, bisa kurangi kalau lagi sepi order. Cash flow jadi lebih sehat.",
      rating: 5,
      company: "Digital Agency",
      period: "18 bulan",
    },
  ];

  const targetCustomers = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Perusahaan & Kantor",
      desc: "Operasional harian tanpa ribet administrasi mobil perusahaan",
      benefits: [
        "Driver full-time tersedia",
        "Konsolidasi tagihan bulanan",
        "Armada cadangan jika perlu",
        "Reporting penggunaan online",
      ],
      color: "blue",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ekspatriat & Foreign Worker",
      desc: "Solusi transportasi praktis untuk foreigner di Surabaya",
      benefits: [
        "Driver bilingue (English/Indonesia)",
        "Armada international standard",
        "Support 24/7 dalam bahasa Inggris",
        "Fleksibel kontrak sesuai assignment",
      ],
      color: "green",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Proyek & Operasional",
      desc: "Kebutuhan kendaraan untuk proyek sementara atau seasonal",
      benefits: [
        "Kontrak 3-12 bulan",
        "Multiple unit tersedia",
        "Backup vehicle system",
        "Priority maintenance",
      ],
      color: "purple",
    },
  ];

  const comparisonData = [
    {
      aspect: "Biaya Investasi Awal",
      own: "Rp 150-300 juta (DP + Angsuran)",
      rental: "0 rupiah - langsung pakai",
      savings: "Hemat 100%",
    },
    {
      aspect: "Pajak & Admin",
      own: "PKB, STNK, Samsat, Asuransi tahunan",
      rental: "Sudah include semua",
      savings: "Hemat waktu & biaya admin",
    },
    {
      aspect: "Maintenance & Service",
      own: "Cari bengkel, jadwal service, biaya tak terduga",
      rental: "VRN handle 100% - on schedule",
      savings: "Hemat waktu & biaya service",
    },
    {
      aspect: "Driver & Operasional",
      own: "Recruitment, training, gaji, BPJS",
      rental: "Driver profesional included",
      savings: "Hemat HR cost & management",
    },
    {
      aspect: "Resale & Depresiasi",
      own: "Nilai jual turun 20-30% per tahun",
      rental: "No depresiasi - nilai tetap",
      savings: "Hemat opportunity cost",
    },
    {
      aspect: "Fleet Management",
      own: "Admin, tracking, maintenance, replacement",
      rental: "VRN manage everything",
      savings: "Fokus core business",
    },
  ];

  const contractOptions = [
    {
      title: "Basic Monthly",
      duration: "3-6 Bulan",
      desc: "Cocok untuk proyek jangka menengah",
      features: [
        "Driver 8 jam/hari",
        "Armada standard",
        "Maintenance rutin",
        "Support business hours",
      ],
      price: "Ekonomis",
    },
    {
      title: "Professional",
      duration: "6-12 Bulan",
      desc: "Paket paling populer untuk kantor",
      features: [
        "Driver 12 jam/hari",
        "Armada premium",
        "Priority maintenance",
        "24/7 support",
      ],
      price: "Popular",
      popular: true,
    },
    {
      title: "Enterprise",
      duration: "12+ Bulan",
      desc: "Solusi lengkap untuk perusahaan",
      features: [
        "Driver full-time",
        "Multiple unit available",
        "Fleet management",
        "Custom reporting",
      ],
      price: "Premium",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/rental-mobil-surabaya"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">
                  VRN Surabaya
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("perbandingan")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Perbandingan
              </button>
              <button
                onClick={() => scrollToSection("cocok-untuk")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Cocok Untuk
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Testimoni
              </button>
            </div>

            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              Chat WA
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
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
            className="absolute -top-2 -left-32 bg-white text-blue-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Konsultasi Gratis!
          </motion.div>
        </div>
      </Link>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden pt-16"
      >
        <Image
          src="/destinasi-wisata/surabaya.jpg"
          alt="Sewa mobil bulanan Surabaya untuk perusahaan"
          fill
          className="absolute inset-0 z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Rental Mobil Bulanan Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-green-400">Sewa Mobil Bulanan</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Efisien Biaya, Tanpa Ribet
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            solutions untuk perusahaan, ekspat, dan proyek jangka panjang. Tanpa
            pusing pajak, servis, atau depresiasi. Fokus bisnis, kami handle
            sisanya!
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Konsultasi via WhatsApp
              </Button>
            </Link>

            <Button
              size="lg"
              onClick={() => scrollToSection("perbandingan")}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Perbandingan
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">3-36</div>
              <div className="text-white text-sm mt-1">Bulan Kontrak</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">100+</div>
              <div className="text-white text-sm mt-1">Klien Korporat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">ROI</div>
              <div className="text-white text-sm mt-1">Lebih Baik</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERBANDINGAN PUNYA vs SEWA BULANAN */}
      <section
        id="perbandingan"
        className="py-20 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Punya Mobil vs{" "}
              <span className="text-green-600">Sewa Bulanan</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Hitung sendiri selisihnya - tanpa harga, hanya perbandingan logis
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50">
                <div className="p-6 font-bold text-gray-800">Aspek</div>
                <div className="p-6 font-bold text-red-600">
                  Punya Mobil Sendiri
                </div>
                <div className="p-6 font-bold text-green-600">
                  Sewa Bulanan VRN
                </div>
                <div className="p-6 font-bold text-blue-600">Hemat</div>
              </div>

              {comparisonData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-4 border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="p-6 font-semibold text-gray-800 bg-gray-50">
                    {item.aspect}
                  </div>
                  <div className="p-6 text-red-600">{item.own}</div>
                  <div className="p-6 text-green-600">{item.rental}</div>
                  <div className="p-6 font-semibold text-blue-600">
                    {item.savings}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              *Perbandingan berdasarkan pengalaman klien VRN Surabaya 2023-2024
            </p>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Halo VRN, saya mau diskusi perhitungan ROI sewa mobil bulanan"
              )}`}
              target="_blank"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                Diskusi Perhitungan ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COCOK UNTUK SIAPA? */}
      <section id="cocok-untuk" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cocok untuk <span className="text-green-600">Siapa?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              3 segmen utama yang paling cocok dengan layanan sewa mobil bulanan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetCustomers.map((customer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div
                  className={`w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-${customer.color}-100 to-${customer.color}-200 text-3xl`}
                >
                  {customer.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {customer.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {customer.desc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Benefit Utama:
                  </h4>
                  {customer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo VRN, saya dari ${customer.title} - mau konsultasi paket bulanan`
                    )}`}
                    target="_blank"
                  >
                    <Button
                      className={`w-full bg-${customer.color}-600 hover:bg-${customer.color}-700 text-white py-3 rounded-xl font-semibold`}
                    >
                      Konsultasi Paket
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPSI KONTRAK */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pilihan Kontrak <span className="text-green-600">Fleksibel</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari proyek 3 bulan hingga kontrak tahunan - sesuaikan dengan
              kebutuhan bisnis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contractOptions.map((contract, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  contract.popular ? "ring-2 ring-green-500 scale-105" : ""
                }`}
              >
                {contract.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🔥 Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {contract.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {contract.duration}
                  </p>
                  <p className="text-gray-600 text-sm">{contract.desc}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {contract.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      contract.price === "Ekonomis"
                        ? "bg-blue-100 text-blue-700"
                        : contract.price === "Popular"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {contract.price}
                  </span>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo VRN, saya tertarik ${contract.title} untuk kontrak ${contract.duration}`
                  )}`}
                  target="_blank"
                >
                  <Button
                    className={`w-full py-3 rounded-xl font-semibold ${
                      contract.popular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    Tanyakan Paket
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimoni" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cerita dari Klien <span className="text-green-600">Bulanan</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pengalaman nyata perusahaan dan ekspat yang sudah merasakan
              benefit jangka panjang
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.period}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.company}
                  </span>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic mb-6 text-gray-700 leading-relaxed">
                  "{testi.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    suppressHydrationWarning
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl"
                    suppressHydrationWarning
                  >
                    {testi.name[0]}
                  </div>
                  <div suppressHydrationWarning>
                    <h4
                      className="font-bold text-gray-800"
                      suppressHydrationWarning
                    >
                      {testi.name}
                    </h4>
                    <p
                      className="text-sm text-gray-500"
                      suppressHydrationWarning
                    >
                      {testi.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-green-900 via-green-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Konsultasi GRATIS + Demo Armada
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Siap Hemat Biaya Operasional?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-green-100">
            Diskusi dengan tim kami untuk hitung ROI yang optimal untuk bisnis
            Anda. Konsultasi 100% gratis tanpa komitmen!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-green-900 px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Chat WhatsApp Sekarang
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Tanpa Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Kontrak Fleksibel</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Layanan Lainnya di Surabaya
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Sewa Harian", href: "/sewa-mobil-harian-surabaya" },
              {
                title: "Dengan Sopir",
                href: "/sewa-mobil-dengan-sopir-surabaya",
              },
              {
                title: "Rental Korporat",
                href: "/rental-mobil-korporat-surabaya",
              },
              { title: "Bandara Juanda", href: "/antar-jemput-bandara-juanda" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                <span className="text-green-600 font-semibold hover:text-green-700">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Phone,
  MessageSquare,
  Star,
  Calendar,
  Coffee,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SewaMobilHarianSurabaya() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau konsultasi untuk sewa mobil harian di Surabaya"
  );

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Andi Pratama",
      city: "Surabaya",
      text: "Perlu meeting mendadak ke aeroporto, call VRN jam 7 pagi, jam 8 mobil udah standby. Driver-nya profesional, mobil bersih, harga fair. Recommended!",
      rating: 5,
      usage: "Meeting Darurat",
    },
    {
      name: "Keluarga Wijaya",
      city: "Sidoarjo",
      text: "Liburan weekend ke Kenjeran naik Innova. Driver-nya profesional, tahu spot makan enak yang hidden gem. Anak-anak happy banget!",
      rating: 5,
      usage: "Liburan Keluarga",
    },
    {
      name: "Sarah Chen",
      city: "Jakarta",
      text: "Drop off tamu ke aeropuerto, driver udah standby di lobby hotel dengan papan nama. Very professional service!",
      rating: 5,
      usage: "Drop Off Tamu",
    },
  ];

  const usageScenarios = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Meeting Bisnis Darurat",
      desc: "Klien dadakan datang? Perlu ke bandara cepat? Driver VRN standby 24/7 untuk kebutuhan mendadak Anda di Surabaya.",
      time: "Booking 1-2 jam sebelumnya",
      vehicles: ["Avanza", "Ertiga", "Brio"],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Liburan Keluarga Weekend",
      desc: "Nikmati waktu berkualitas dengan keluarga. Driver lokal tahu spot foto instagramable dan kuliner autentik Surabaya.",
      time: "Booking H-1",
      vehicles: ["Innova", "XPander", "Fortuner"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Drop Off/Pick Up Tamu",
      desc: "Tamu penting butuh transport premium? Driver berpakaian rapi dengan service meet & greet professional.",
      time: "Booking sesuai jadwal",
      vehicles: ["Alphard", "Camry", "Innova Zenix"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event & Acara",
      desc: "Dari arisan sampai seminar, armada lengkap untuk kebutuhan acara Anda dengan driver berpengalaman.",
      time: "Booking 2-3 hari sebelumnya",
      vehicles: ["Hiace", "Avanza", "Innova"],
    },
  ];

  const whyDailyRental = [
    {
      title: "Fleksibilitas Waktu Penuh",
      desc: "Dari 6 jam hingga 24 jam, sesuaikan dengan kebutuhan Anda. Bisa jam berapa saja, mulai dari subuh sampai tengah malam.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Tanpa Ribet Perizinan",
      desc: "Tidak perlu SIM, tidak perlu ribet parkir. Driver profesional bawa surat-surat lengkap, Anda tinggal duduk nyaman.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Driver Arek Suroboyo",
      desc: "Driver asli Surabaya yang hafal seluk-beluk kota. Tahu jalan tikus避开 macet, rekomendasi kuliner lokal, spot foto keren.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Armada Terawat & Bersih",
      desc: "City car irit untuk keperluan sederhana, MPV nyaman untuk keluarga. Semua mobil dicek kebersihan dan kondisi sebelum operasional.",
      icon: <Car className="w-6 h-6" />,
    },
  ];

  const fleetOptions = [
    {
      name: "City Car (Brio/Agya)",
      capacity: "4 Orang + Driver",
      desc: "Ideal untuk 1-2 orang, irit BBM, mudah parkiran di pusat Surabaya",
      price: "Termurah",
      features: ["AC Dingin", "Audio System", "Mudah Parkir"],
      bestFor: "Meeting, Kuliner, Shopping",
    },
    {
      name: "MPV (Avanza/Xpander)",
      capacity: "6-7 Orang + Driver",
      desc: "Cocok untuk keluarga atau kelompok kecil, bagasi luas untuk bawa barang",
      price: "Popular",
      features: ["Kabin Luas", "AC Powerfull", "Bagasi Besar"],
      bestFor: "Liburan, Tour, Transport Tamu",
    },
    {
      name: "Premium MPV (Innova Zenix)",
      capacity: "6-7 Orang + Driver",
      desc: "Kenyamanan maksimal dengan fitur modern untuk acara penting",
      price: "Premium",
      features: ["Sunroof", "Captain Seat", "Premium Audio"],
      bestFor: "Meeting Eksekutif, Acara Penting",
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
                onClick={() => scrollToSection("armada")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Armada
              </button>
              <button
                onClick={() => scrollToSection("kapan-pilih")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Kapan Pilih?
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
          alt="Sewa mobil harian Surabaya dengan pemandangan kota"
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
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Sewa Mobil Harian Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-blue-400">Sewa Mobil Harian</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Fleksibel Sesuai Kebutuhan
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Meeting mendadak, keluarga weekend, atau drop off tamu - kami siap
            24/7 dengan driver profesional dan armada terawat. Booking mudah,
            harga fair, layanan maksimal!
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
              onClick={() => scrollToSection("armada")}
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Armada
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">6-24h</div>
              <div className="text-white text-sm mt-1">Fleksibel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">24/7</div>
              <div className="text-white text-sm mt-1">Ready</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">Surabaya</div>
              <div className="text-white text-sm mt-1">Area Layanan</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KAPAN SEWA HARIAN JADI PILIHAN TEPAT? */}
      <section
        id="kapan-pilih"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Kapan Sewa Harian Jadi{" "}
              <span className="text-blue-600">Pilihan Tepat?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 skenario penggunaan yang paling umum untuk rental mobil harian
              di Surabaya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usageScenarios.map((scenario, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                    {scenario.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {scenario.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Booking
                        </div>
                        <div className="font-semibold text-blue-600">
                          {scenario.time}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Armada</div>
                        <div className="font-semibold text-gray-800">
                          {scenario.vehicles.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARMADA SEWA HARIAN */}
      <section id="armada" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Armada untuk{" "}
              <span className="text-blue-600">Kebutuhan Harian</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari city car irit hingga MPV premium, pilih sesuai kebutuhan dan
              budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetOptions.map((fleet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {fleet.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{fleet.capacity}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        fleet.price === "Termurah"
                          ? "bg-green-100 text-green-700"
                          : fleet.price === "Popular"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {fleet.price}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {fleet.desc}
                  </p>

                  <div className="space-y-2 mb-4">
                    {fleet.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">
                      Cocok untuk:
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      {fleet.bestFor}
                    </div>
                  </div>

                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo VRN, saya mau konsultasi ${fleet.name} untuk sewa harian`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                      Konsultasi Sekarang
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA SEWA HARIAN VRN */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Mengapa Pilih Sewa Harian{" "}
              <span className="text-blue-600">VRN Surabaya?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Keunggulan khusus untuk kebutuhan rental mobil harian Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDailyRental.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
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
              Pengalaman Pelanggan{" "}
              <span className="text-blue-600">Sewa Harian</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Cerita nyata dari mereka yang sudah merasakan layanan sewa mobil
              harian VRN
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden relative">
              <motion.div
                className="flex"
                animate={{ x: `-${currentTestimonial * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testi, i) => (
                  <div key={i} className="flex-shrink-0 w-full px-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {testi.usage}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(testi.rating)].map((_, j) => (
                            <Star
                              key={j}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="italic mb-6 text-gray-700 text-lg leading-relaxed">
                        "{testi.text}"
                      </p>
                      <div
                        className="flex items-center gap-3"
                        suppressHydrationWarning
                      >
                        <div
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl"
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
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === i ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Konsultasi Gratis 24/7
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Butuh Mobil Sekarang Juga?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Chat WhatsApp sekarang, kami bantu pilih armada dan driver terbaik
            untuk kebutuhan harian Anda di Surabaya!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Chat WhatsApp Sekarang
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Booking Same Day</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Driver Profesional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Armada Terawat</span>
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
              { title: "Sewa Bulanan", href: "/sewa-mobil-bulanan-surabaya" },
              {
                title: "Dengan Sopir",
                href: "/sewa-mobil-dengan-sopir-surabaya",
              },
              { title: "Bandara Juanda", href: "/antar-jemput-bandara-juanda" },
              {
                title: "Mobil Pernikahan",
                href: "/sewa-mobil-pernikahan-surabaya",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                <span className="text-blue-600 font-semibold hover:text-blue-700">
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

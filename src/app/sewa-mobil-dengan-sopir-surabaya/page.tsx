"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Users,
  Shield,
  CheckCircle,
  Phone,
  Star,
  UserCheck,
  MapPin,
  Clock,
  Globe,
  Award,
  Heart,
  Coffee,
  ChevronLeft,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SewaMobilDenganSopirSurabaya() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau konsultasi untuk sewa mobil dengan sopir profesional di Surabaya"
  );

  const [currentDriver, setCurrentDriver] = useState(0);

  const driverProfiles = [
    {
      name: "Pak Budi Santoso",
      experience: "12 tahun",
      speciality: "Tamu Eksekutif & Bisnis",
      languages: ["Indonesia", "English", "Jawa"],
      avatar: "BS",
      rating: 4.9,
      description:
        "Driver senior yang sudah pengalaman handle tamu international dan eksekutif. Punctual, professional, dan sangat hati-hati dalam運転.",
      achievements: [
        "Zero accident record",
        "Certified English speaking",
        "VIP service specialist",
      ],
    },
    {
      name: "Pak Eko Prasetyo",
      experience: "8 tahun",
      speciality: "Wisata & Tour Guide",
      languages: ["Indonesia", "English", "Jawa", "Madura"],
      avatar: "EP",
      rating: 4.8,
      description:
        "Suka cerita-cerita menarik tentang Surabaya dan sekitarnya. Tau semua spot foto yang instagramable dan kuliner hidden gem yang autentik.",
      achievements: [
        "Tour guide certified",
        "Local culture expert",
        "Photography spots guide",
      ],
    },
    {
      name: "Pak Ahmad Rizal",
      experience: "6 tahun",
      speciality: "Antar Jemput & Airport Transfer",
      languages: ["Indonesia", "English"],
      avatar: "AR",
      rating: 4.9,
      description:
        "Spesialis airport transfer dan antar jemput. Hafal semua jadwal penerbangan, tahu jalur tercepat ke机场, dan selalu standby tepat waktu.",
      achievements: [
        "On-time guarantee",
        "Airport specialist",
        "Flight tracking expert",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dharma & Family",
      city: "Bali → Surabaya",
      text: "Liburan keluarga dari Bali, driver VRN welcome dengan senyum dan welcome drink. Tau semua tempat bagus di Surabaya, anak-anak seneng banget! Service level international.",
      rating: 5,
      usage: "Wisata Keluarga",
    },
    {
      name: "Mr. Tanaka",
      city: "Japan → Surabaya",
      text: "Business trip to Surabaya, VRN driver picked me up at airport with name plate. English speaking, professional uniform, very punctual. Japanese company standard quality!",
      rating: 5,
      usage: "Tamu Bisnis International",
    },
    {
      name: "Event Organizer Surabaya",
      city: "Surabaya",
      text: "Pakai armada VRN untuk acara wedding 3 hari. Driver-nya rapi, sopan, dan sangat membantu koordinasi dengan WO. Tamu-tamu puas banget dengan pelayanannya.",
      rating: 5,
      usage: "Event Wedding",
    },
  ];

  const driverStandards = [
    {
      title: "Sopan & Ramah",
      desc: "Selalu menyapa dengan salam, berpakaian rapi dan rapi, serta menjaga sikap professional selama perjalanan",
      icon: <Heart className="w-6 h-6" />,
      detail: [
        "Seragam rapi & name tag",
        "Salam & sapa setiap naik turun",
        "Attitude positive & helpful",
        "Respect privacy tamu",
      ],
    },
    {
      title: "Hafal Rute & Navigasi",
      desc: "Menguasai seluk-beluk jalan Surabaya hingga luar kota, tahu jalur macet dan alternatif tercepat",
      icon: <MapPin className="w-6 h-6" />,
      detail: [
        "Expert navigation Surabaya",
        "Knowledgeable about shortcuts",
        "Real-time traffic updates",
        "Alternative routes planning",
      ],
    },
    {
      title: "Siaga Standby",
      desc: "Tersedia sesuai jadwal dan selalu siap membantu, termasuk membantu bawa barang dan koordinasi",
      icon: <Clock className="w-6 h-6" />,
      detail: [
        "Punctual & reliable",
        "Always available on schedule",
        "Proactive assistance",
        "Communication ready",
      ],
    },
    {
      title: "Aman & Berpengalaman",
      desc: "Safety first, driving technique profesional, dan pengalaman handle berbagai jenis tamu",
      icon: <Shield className="w-6 h-6" />,
      detail: [
        "Defensive driving certified",
        "Clean driving record",
        "Emergency handling trained",
        "Safety protocols compliance",
      ],
    },
  ];

  const serviceAreas = [
    {
      area: "Surabaya Kota",
      coverage: "100% Coverage",
      description:
        "Semua area di dalam kota Surabaya dengan driver yang hafal setiap gang dan jalan",
      icon: "🏙️",
    },
    {
      area: "Sekitar Surabaya",
      coverage: "Gresik, Sidoarjo",
      description:
        "Layanan ke kota-kota sekitar dengan tarif tetap dan driver familiar jalur",
      icon: "🏘️",
    },
    {
      area: "Jawa Timur",
      coverage: "Malang, Batu, Bromo",
      description:
        "Perjalanan jauh ke wisata populer Jawa Timur dengan driver berpengalaman",
      icon: "🗻",
    },
    {
      area: "Airport Transfer",
      coverage: "Juanda Airport",
      description:
        "Drop off dan pick up机场 dengan tracking jadwal penerbangan real-time",
      icon: "✈️",
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
                <ChevronLeft className="w-5 h-5 text-purple-600" />
                <span className="text-xl font-bold text-purple-600">
                  VRN Surabaya
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("driver-standar")}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Standar Driver
              </button>
              <button
                onClick={() => scrollToSection("area-layanan")}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Area Layanan
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
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
            className="absolute -top-2 -left-32 bg-white text-purple-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Driver Profesional!
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
          alt="Sewa mobil dengan sopir profesional di Surabaya"
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
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Rental Mobil + Sopir Profesional Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-purple-400">Sewa Mobil + Sopir</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Profesional & Berpengalaman
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Driver berpengalaman yang sopan, hafal rute, dan siap sedia. Dari
            tamu penting hingga wisata keluarga - kenyamanan dan keamanan
            terjamin di setiap perjalanan!
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
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Konsultasi Sopir via WhatsApp
              </Button>
            </Link>

            <Button
              size="lg"
              onClick={() => scrollToSection("driver-standar")}
              className="bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Standar Driver
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">50+</div>
              <div className="text-white text-sm mt-1">Driver Professional</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-white text-sm mt-1">Driver Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">4.9</div>
              <div className="text-white text-sm mt-1">Rating Driver</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STANDAR DRIVER PROFESIONAL */}
      <section
        id="driver-standar"
        className="py-20 bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Standar Driver{" "}
              <span className="text-purple-600">VRN Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 standar profesional yang harus dipenuhi setiap driver VRN untuk
              kenyamanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {driverStandards.map((standard, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 p-4 rounded-xl text-purple-600">
                    {standard.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {standard.desc}
                    </p>

                    <div className="space-y-2">
                      {standard.detail.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-600 text-sm">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Semua Driver VRN Sudah Diseleksi Ketat!
              </h3>
              <p className="text-lg mb-6">
                Background check, SIM & STNK valid, pelatihan customer service,
                dan assessment driving test sebelum terima tugas
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Halo VRN, saya mau tanya tentang seleksi dan training driver"
                )}`}
                target="_blank"
              >
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold">
                  Tanya Seleksi Driver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE DRIVER SPESIALIS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Kenalan dengan{" "}
              <span className="text-purple-600">Driver Specialist</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Beberapa driver senior VRN dengan spesialisasi dan pengalaman
              khusus
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentDriver * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {driverProfiles.map((driver, i) => (
                  <div key={i} className="flex-shrink-0 w-full px-4">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl max-w-4xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                              {driver.avatar}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800">
                                {driver.name}
                              </h3>
                              <p className="text-purple-600 font-semibold">
                                {driver.experience} pengalaman
                              </p>
                              <div className="flex gap-1 mt-1">
                                {[...Array(5)].map((_, j) => (
                                  <Star
                                    key={j}
                                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">
                                  {driver.rating}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {driver.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">
                              Bahasa yang dikuasai:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {driver.languages.map((lang, idx) => (
                                <span
                                  key={idx}
                                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {lang}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-800 mb-4">
                            Spesialisasi: {driver.speciality}
                          </h4>

                          <div className="space-y-3">
                            <h5 className="font-semibold text-gray-800">
                              Achievement & Certification:
                            </h5>
                            {driver.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Award className="w-5 h-5 text-purple-500 mt-0.5" />
                                <span className="text-gray-600 text-sm">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8">
                            <Link
                              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                `Halo VRN, saya mau request ${driver.name} untuk perjalanan saya`
                              )}`}
                              target="_blank"
                            >
                              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold">
                                Request Driver Ini
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {driverProfiles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentDriver(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentDriver === i ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREA LAYANAN DRIVER */}
      <section
        id="area-layanan"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Area Layanan Driver <span className="text-purple-600">VRN</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Driver VRN siap melayani di berbagai area dengan pengetahuan lokal
              yang mendalam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {area.area}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {area.coverage}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COCOK UNTUK SIAPA? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cocok untuk <span className="text-purple-600">Siapa?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Layanan sopir profesional sangat cocok untuk kebutuhan khusus dan
              tamu penting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Tamu Penting & Eksekutif
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Untuk tamu VIP, meeting penting, atau acara formal - driver
                professional dengan service level premium
              </p>

              <div className="space-y-3">
                {[
                  "Driver berpakaian rapi & professional",
                  "Service level eksekutif",
                  "Kemampuan bahasa Inggris",
                  "Pengalaman handle tamu penting",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ThumbsUp className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Wisawatan & Leisure
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Untuk vacation, city tour, atau family trip - driver yang tahu
                spot bagus dan bisa jadi local guide
              </p>

              <div className="space-y-3">
                {[
                  "Driver sekaligus tour guide",
                  "Tahu spot foto instagramable",
                  "Rekomendasi kuliner lokal",
                  "Flexible dengan itinerary",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Testimoni Pelanggan{" "}
              <span className="text-purple-600">Driver VRN</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pengalaman nyata dari mereka yang sudah merasakan pelayanan sopir
              profesional VRN
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
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
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

                <p className="italic mb-6 text-gray-700 leading-relaxed">
                  "{testi.text}"
                </p>

                <div
                  className="flex items-center gap-3"
                  suppressHydrationWarning
                >
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl"
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
      <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-700 to-blue-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Driver Professional 24/7 Available
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Butuh Driver Berpengalaman?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-purple-100">
            Chat sekarang untuk request driver sesuai kebutuhan - dari bisnis
            hingga wisata, kami punya sopir yang tepat untuk Anda!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Request Driver via WhatsApp
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-white hover:bg-gray-100 text-purple-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Driver Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Bahasa Inggris Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-300" />
              <span>Knowledgeable Routes</span>
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
              { title: "Sewa Bulanan", href: "/sewa-mobil-bulanan-surabaya" },
              { title: "Bandara Juanda", href: "/antar-jemput-bandara-juanda" },
              {
                title: "Rental Korporat",
                href: "/rental-mobil-korporat-surabaya",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                <span className="text-purple-600 font-semibold hover:text-purple-700">
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

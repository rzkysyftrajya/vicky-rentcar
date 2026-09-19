"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Clock,
  MapPin,
  CheckCircle,
  Phone,
  Star,
  Users,
  Shield,
  AlertCircle,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Navigation,
  ChevronLeft,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AntarJemputBandaraJuanda() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau pesan antar jemput bandara Juanda"
  );

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const testimonials = [
    {
      name: "Sarah Wijaya",
      city: "Jakarta → Surabaya",
      text: "Flight landing jam 6 pagi, driver VRN udah standby di arrival dengan papan nama. Mobil bersih, driver membantu bawa luggage sampai lobby. Perfect timing!",
      rating: 5,
      usage: "Pick Up Pagian",
      flight: "ID-6212",
    },
    {
      name: "Business Traveler",
      city: "Surabaya → Bali",
      text: "Meeting urgent di Bali, harus flight jam 5 pagi. Driver pick up jam 3:30, sampai airport tepat waktu. No stress, professional service.",
      rating: 5,
      usage: "Drop Off Pagi",
      flight: "GA-342",
    },
    {
      name: "Family Holiday",
      city: "Bandung → Surabaya",
      text: "Liburan akhir tahun, flight delay 2 jam. Driver tetap standby dengan welcome message. Good communication, really appreciated!",
      rating: 5,
      usage: "Pick Up Delay",
      flight: "QZ-789",
    },
  ];

  const flightSteps = [
    {
      step: 1,
      title: "Kirim Detail Penerbangan",
      desc: "Chat WA dengan nomor flight, waktu, nama passenger, jumlah barang",
      duration: "1 menit",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Konfirmasi & Tracking",
      desc: "Kami confirm availability dan mulai tracking flight real-time",
      duration: "5 menit",
      icon: <Navigation className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Driver Standby",
      desc: "Driver sampai 30 menit sebelum landing dengan papan nama",
      duration: "30 menit",
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Meet & Greet",
      desc: "Driver jemput di gate, bantu行李, antar ke mobil",
      duration: "15 menit",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Perjalanan Aman",
      desc: "Drop off sesuai lokasi dengan rute tercepat",
      duration: "Sesuai lokasi",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  const serviceFeatures = [
    {
      title: "Flight Tracking Real-time",
      desc: "Kami monitor jadwal penerbangan dan update delay/early landing",
      icon: <AlertCircle className="w-6 h-6" />,
      detail: [
        "Live flight status monitoring",
        "Auto update jika ada perubahan",
        "Driver standby berdasarkan actual time",
      ],
    },
    {
      title: "Meet & Greet Service",
      desc: "Driver menjemput langsung di gate dengan papan nama dan welcome message",
      icon: <UserCheck className="w-6 h-6" />,
      detail: [
        "Papan nama sesuai nama passenger",
        "Bantuan行李 dan escort ke mobil",
        "Professional uniform dan attitude",
      ],
    },
    {
      title: "On-Time Guarantee",
      desc: "Driver arrives 30 menit sebelum landing, dijamin tepat waktu atau refund",
      icon: <Clock className="w-6 h-6" />,
      detail: [
        "30 menit early arrival",
        "Rute alternatif jika macet",
        "Compensation untuk delay",
      ],
    },
    {
      title: "Multiple Pickup Points",
      desc: "Layanan door-to-door di seluruh area Surabaya dan sekitarnya",
      icon: <MapPin className="w-6 h-6" />,
      detail: [
        "Hotel, rumah, kantor, mall",
        "Coverage hingga 50km radius",
        "Fixed rate tanpa additional cost",
      ],
    },
  ];

  const popularRoutes = [
    {
      from: "Juanda Airport",
      to: "Surabaya City Center",
      time: "45-60 menit",
      price: "Fixed Rate",
      popular: true,
    },
    {
      from: "Juanda Airport",
      to: "Gresik/Sidoarjo",
      time: "30-45 menit",
      price: "Fixed Rate",
      popular: false,
    },
    {
      from: "Surabaya City Center",
      to: "Juanda Airport",
      time: "45-60 menit",
      price: "Fixed Rate",
      popular: true,
    },
    {
      from: "Hotel/Apartment",
      to: "Juanda Airport",
      time: "Sesuai lokasi",
      price: "Fixed Rate",
      popular: false,
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
                <ChevronLeft className="w-5 h-5 text-yellow-600" />
                <span className="text-xl font-bold text-yellow-600">
                  VRN Surabaya
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("proses")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Proses
              </button>
              <button
                onClick={() => scrollToSection("fitur")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
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
            className="absolute -top-2 -left-32 bg-white text-yellow-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Flight On Time!
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
          alt="Antar jemput bandara Juanda Surabaya"
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
            className="bg-yellow-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Airport Transfer Juanda Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-yellow-400">Antar Jemput Bandara</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Tepat Waktu, Meet & Greet
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Flight delay atau early landing? Kami tetap standby! Driver
            professional dengan flight tracking real-time, meet & greet service,
            dan guarantee tepat waktu atau refund!
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
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Pesan Airport Transfer
              </Button>
            </Link>

            <Button
              size="lg"
              onClick={() => scrollToSection("proses")}
              className="bg-white hover:bg-gray-100 text-yellow-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Proses
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">30min</div>
              <div className="text-white text-sm mt-1">Early Standby</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">100%</div>
              <div className="text-white text-sm mt-1">On Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">24/7</div>
              <div className="text-white text-sm mt-1">Flight Monitor</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALUR PENJEMPUTAN BANDARA */}
      <section
        id="proses"
        className="py-20 bg-gradient-to-b from-yellow-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Alur Penjemputan{" "}
              <span className="text-yellow-600">Bandara Juanda</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Step-by-step proses airport transfer dari booking hingga drop off
              - transparan dan terstruktur
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="h-0.5 bg-yellow-200 relative">
                <div
                  className="h-full bg-yellow-600 transition-all duration-1000"
                  style={{
                    width: `${(currentStep / (flightSteps.length - 1)) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {flightSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                      currentStep === i
                        ? "border-yellow-500 scale-105"
                        : "border-gray-100"
                    }`}
                    onClick={() => setCurrentStep(i)}
                  >
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          currentStep === i
                            ? "bg-yellow-600 text-white"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {step.icon}
                      </div>

                      <div className="text-sm text-yellow-600 font-bold mb-2">
                        STEP {step.step}
                      </div>

                      <h3 className="text-lg font-bold mb-3 text-gray-800">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="text-xs text-yellow-600 font-semibold">
                        Duration: {step.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Booking Airport Transfer Lebih Mudah!
              </h3>
              <p className="text-lg mb-6">
                Cukup chat WhatsApp dengan detail flight, sisanya kami handle -
                termasuk flight tracking dan driver coordination
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Halo VRN, saya mau pesan airport transfer dengan detail: Flight [nomor], Waktu [landing], Nama [penumpang]"
                )}`}
                target="_blank"
              >
                <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold">
                  Booking Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FITUR LAYANAN */}
      <section id="fitur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Mengapa Pilih VRN{" "}
              <span className="text-yellow-600">Airport Transfer?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 keunggulan utama yang membuat airport transfer VRN terpercaya di
              Surabaya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-yellow-100"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-100 p-4 rounded-xl text-yellow-600">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.desc}
                    </p>

                    <div className="space-y-2">
                      {feature.detail.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-yellow-500" />
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
        </div>
      </section>

      {/* RUTE POPULER */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Rute Populer{" "}
              <span className="text-yellow-600">Airport Transfer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 rute paling sering dipesan dengan fixed rate - transparan tanpa
              biaya tersembunyi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center relative ${
                  route.popular ? "ring-2 ring-yellow-500" : ""
                }`}
              >
                {route.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🔥 Favorit
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-yellow-600 mb-2">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm font-bold text-gray-800">
                    {route.from}
                  </div>
                  <div className="text-gray-400 text-xs">ke</div>
                  <div className="text-sm font-bold text-gray-800">
                    {route.to}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Estimasi:</span>
                    <span className="font-semibold text-yellow-600">
                      {route.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Tarif:</span>
                    <span className="font-semibold text-gray-800">
                      {route.price}
                    </span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo VRN, saya mau order ${route.from} ke ${route.to}`
                  )}`}
                  target="_blank"
                >
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg text-sm font-semibold">
                    Order Rute Ini
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COCOK UNTUK PENERBANGAN? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cocok untuk{" "}
              <span className="text-yellow-600">Penerbangan Apa?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari flight pagi hingga malam - layanan 24/7 yang fleksibel sesuai
              jadwal Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🌅
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Penerbangan Pagi
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Flight jam 4-8 pagi? Driver pick up sejak subuh, siap dengan
                kopi hangat dan attitude fresh untuk perjalanan yang nyaman
              </p>

              <div className="space-y-3">
                {[
                  "Driver tersedia sejak jam 3 pagi",
                  "Early pickup guarantee",
                  "Fresh morning service",
                  "Perfect untuk business flight",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🌙
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Penerbangan Malam
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Late night flight? No problem! Driver tetap standby dengan
                layanan professional dan rute terpendek agar sampai aman
              </p>

              <div className="space-y-3">
                {[
                  "24/7 driver availability",
                  "Late night route optimization",
                  "Safety-first approach",
                  "Perfect untuk holiday return",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-500" />
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
              <span className="text-yellow-600">Airport Transfer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pengalaman nyata dari traveler yang sudah merasakan layanan
              airport transfer VRN
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
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.usage}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.flight}
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

                <div
                  className="flex items-center gap-3"
                  suppressHydrationWarning
                >
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl"
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
      <section className="py-24 bg-gradient-to-r from-yellow-900 via-yellow-700 to-orange-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white text-yellow-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Flight Tracking 24/7 + Meet & Greet
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Penerbangan Mau Pagi atau Malam?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-yellow-100">
            Chat sekarang untuk booking airport transfer dengan flight tracking,
            meet & greet service, dan guarantee tepat waktu atau refund!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Booking Airport Transfer
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-white hover:bg-gray-100 text-yellow-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>On-Time Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>Meet & Greet Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>Flight Tracking Real-time</span>
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
              {
                title: "Dengan Sopir",
                href: "/sewa-mobil-dengan-sopir-surabaya",
              },
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
                <span className="text-yellow-600 font-semibold hover:text-yellow-700">
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

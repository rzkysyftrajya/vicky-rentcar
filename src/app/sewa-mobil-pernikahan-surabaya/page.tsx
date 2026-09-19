"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Crown,
  Star,
  CheckCircle,
  Phone,
  Users,
  Camera,
  Clock,
  MapPin,
  ChevronLeft,
  Sparkles,
  Flower,
  Gift,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SewaMobilPernikahanSurabaya() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau konsultasi sewa mobil untuk acara pernikahan"
  );

  const [selectedPackage, setSelectedPackage] = useState(0);

  const weddingPackages = [
    {
      name: "Classic Wedding",
      description: "Paket ekonomis untuk intimate wedding",
      duration: "1 hari",
      price: "Fixed Rate",
      popular: false,
      features: [
        "1 unit mobil pilihan",
        "Driver professional dengan seragam",
        "Dekorasi bunga sederhana",
        "Sopir berpengalaman handle acara",
        "Koordinasi dengan WO",
      ],
      carTypes: ["Toyota Camry", "Honda Accord", "Toyota Corolla Altis"],
      color: "blue",
    },
    {
      name: "Premium Wedding",
      description: "Paket menengah dengan mobil premium",
      duration: "1 hari",
      price: "Premium",
      popular: true,
      features: [
        "1 unit mobil luxury",
        "Driver senior dengan pengalaman wedding",
        "Dekorasi bunga premium",
        "Car coordination service",
        "Photo session ready",
        "Emergency backup plan",
      ],
      carTypes: ["Toyota Alphard", "Mercedes Benz", "BMW 5 Series"],
      color: "purple",
    },
    {
      name: "Luxury Wedding",
      description: "Paket luxury untuk grand wedding",
      duration: "1-2 hari",
      price: "VIP",
      popular: false,
      features: [
        "Multiple luxury cars available",
        "Dedicated wedding coordinator",
        "Premium flower decoration",
        "VIP driver service",
        "Live tracking & communication",
        "Professional photo documentation",
        "Custom itinerary planning",
      ],
      carTypes: ["Rolls Royce", "Bentley", "Mercedes S-Class", "BMW 7 Series"],
      color: "gold",
    },
  ];

  const weddingFlow = [
    {
      time: "06:00 - 08:00",
      activity: "Persiapan & Penjemputan",
      description:
        "Driver arrive di lokasi bride, cek decoration, photo session mobil",
      details: [
        "Driver arrive 1 jam sebelum jadwal",
        "Cek kondisi mobil & decoration",
        "Assist bride & family untuk photo",
        "Koordinasi dengan vendor lain",
      ],
    },
    {
      time: "08:00 - 12:00",
      activity: "Prosesi Akad & Resepsi",
      description: "Accompany bride ke lokasi akad, standby di lokasi resepsi",
      details: [
        "Transfort bride ke masjid/gedung",
        "Standby untuk emergency need",
        "Support photo session di lokasi",
        "Coordinate dengan WO untuk timing",
      ],
    },
    {
      time: "12:00 - 16:00",
      activity: "Resepsi & Photography",
      description:
        "Mobil sebagai backdrop foto, assist guest, siap untuk transfer",
      details: [
        "Mobil sebagai photo spot utama",
        "Assist family untuk foto",
        "Ready untuk transfer ke lokasi lain",
        "Coordinate dengan photographer",
      ],
    },
    {
      time: "16:00 - 18:00",
      activity: "Transfer & Penutupan",
      description: "Transfer ke lokasi lain atau pengantaran pengantin",
      details: [
        "Transfer sesuai permintaan",
        "Final photo session",
        "Clean up decoration",
        "Coordinate dengan family",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Dewi & Andre",
      location: "Surabaya",
      wedding: "Grand Wedding JW Marriott",
      text: "VRN handle mobil alphard untuk acara kami. Driver-nya sangat profesional, tau timing yang tepat, dan mobilnya Kinclong! Family dan guest pada salut.",
      rating: 5,
      car: "Toyota Alphard",
      package: "Premium Wedding",
    },
    {
      name: "Sarah & Rizky",
      location: "Surabaya",
      wedding: "Garden Wedding Villa",
      text: "Intimate wedding di villa, VRN kasih usul mobil camry dengan decoration bunga yang cantik. Perfect untuk foto Instagram dan feel elegant!",
      rating: 5,
      car: "Toyota Camry",
      package: "Classic Wedding",
    },
    {
      name: "Intan & Fachry",
      location: "Gresik",
      wedding: "Traditional Wedding",
      text: "Wedding adat Jawa, driver VRN tau betul etiket dan bisa ikutin prosesi sakral. Sopan, tenang, dan selalu standby kapan butuh. Highly recommended!",
      rating: 5,
      car: "Mercedes Benz",
      package: "Premium Wedding",
    },
  ];

  const carCategories = [
    {
      category: "Executive Cars",
      description: "Mobil elegan untuk wedding modern",
      cars: ["Toyota Camry", "Honda Accord", "Toyota Corolla Altis"],
      suitability: "Perfect untuk intimate wedding dan budget friendly",
      color: "blue",
    },
    {
      category: "Luxury MPV",
      description: "Premium comfort untuk wedding memorable",
      cars: ["Toyota Alphard", "Mercedes V-Class", "BMW X5"],
      suitability: "Ideal untuk grand wedding dengan multiple passengers",
      color: "purple",
    },
    {
      category: "Luxury Sedan",
      description: "Sophistication untuk wedding elegant",
      cars: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],
      suitability: "Perfect untuk upscale wedding dan VIP guests",
      color: "gold",
    },
    {
      category: "Ultra Luxury",
      description: "Ultimate luxury untuk dream wedding",
      cars: ["Rolls Royce", "Bentley", "Porsche Panamera"],
      suitability: "Exclusive untuk high-end wedding dan luxury budget",
      color: "red",
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
                <ChevronLeft className="w-5 h-5 text-pink-600" />
                <span className="text-xl font-bold text-pink-600">
                  VRN Surabaya
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection("paket")}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                Paket Wedding
              </button>
              <button
                onClick={() => scrollToSection("flow")}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                Flow Hari H
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
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
            className="absolute -top-2 -left-32 bg-white text-pink-600 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            Wedding Specialist!
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
          alt="Sewa mobil pernikahan premium di Surabaya"
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
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Rental Mobil Wedding Premium Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-pink-400">Sewa Mobil Pernikahan</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Premium & Elegan untuk Hari Spesial
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Mobil luxury dengan driver professional untuk hari sakral Anda. Dari
            intimate wedding hingga grand ceremony - kami pastikan hari H
            berjalan sempurna dan memorable!
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
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Heart className="w-6 h-6" />
                Konsultasi Wedding via WhatsApp
              </Button>
            </Link>

            <Button
              size="lg"
              onClick={() => scrollToSection("paket")}
              className="bg-white hover:bg-gray-100 text-pink-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Paket Wedding
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">50+</div>
              <div className="text-white text-sm mt-1">Wedding Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">5★</div>
              <div className="text-white text-sm mt-1">Rating Wedding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">100%</div>
              <div className="text-white text-sm mt-1">On Time</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JENIS MOBIL WEDDING */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jenis Mobil untuk{" "}
              <span className="text-pink-600">Wedding Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              4 kategori mobil premium sesuai style dan budget wedding Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 text-3xl`}
                  >
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {category.cars.map((car, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-3 rounded-lg text-center"
                    >
                      <span className="text-gray-800 font-medium text-sm">
                        {car}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-gray-600 text-xs mb-4">
                    {category.suitability}
                  </p>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo VRN, saya tertarik ${category.category} untuk wedding`
                    )}`}
                    target="_blank"
                  >
                    <Button
                      className={`w-full bg-${category.color}-600 hover:bg-${category.color}-700 text-white py-2 rounded-lg text-sm font-semibold`}
                    >
                      Tanya Paket
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAKET WEDDING */}
      <section id="paket" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Paket Wedding <span className="text-pink-600">VRN Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              3 pilihan paket wedding dengan layanan lengkap - dari ekonomis
              hingga luxury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  pkg.popular ? "ring-2 ring-pink-500 scale-105" : ""
                } border border-gray-100`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🔥 Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{pkg.description}</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {pkg.duration}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full ${
                        pkg.price === "Fixed Rate"
                          ? "bg-blue-100 text-blue-700"
                          : pkg.price === "Premium"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gold-100 text-gold-700"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Pilihan Mobil:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {pkg.carTypes.map((car, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-2 rounded text-center"
                      >
                        <span className="text-gray-700 text-sm font-medium">
                          {car}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Halo VRN, saya tertarik paket ${pkg.name} untuk wedding`
                  )}`}
                  target="_blank"
                >
                  <Button
                    className={`w-full py-3 rounded-xl font-semibold ${
                      pkg.popular
                        ? "bg-pink-600 hover:bg-pink-700 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    Konsultasi Paket
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW HARI H */}
      <section
        id="flow"
        className="py-20 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Flow Hari H Wedding{" "}
              <span className="text-pink-600">VRN Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Timeline detail dari penjemputan hingga pengantaran - terstruktur
              dan tepat waktu
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-200"></div>

            <div className="space-y-12">
              {weddingFlow.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                        {phase.activity}
                      </h3>
                      <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">
                        {phase.time}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Wedding Day Coordination
              </h3>
              <p className="text-lg mb-6">
                Driver VRN tidak hanya jadi supir, tapi juga coordinate dengan
                WO, photographer, dan vendor lain untuk memastikan semua
                berjalan lancar
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Halo VRN, saya mau diskusi coordination dengan vendor wedding"
                )}`}
                target="_blank"
              >
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold">
                  Tanya Coordination
                </Button>
              </Link>
            </div>
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
              Cerita Pengantin{" "}
              <span className="text-pink-600">VRN Wedding</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Testimoni nyata dari couples yang sudah merasakan layanan wedding
              VRN
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
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.car}
                  </span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {testi.package}
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-xl">
                    💕
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testi.name}</h4>
                    <p className="text-sm text-gray-500">{testi.wedding}</p>
                    <p className="text-sm text-gray-500">{testi.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-pink-900 via-pink-700 to-rose-600 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white text-pink-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Wedding Day Perfect Planning
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hari Spesial Anda Layak yang Terbaik
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-pink-100">
            Konsultasi gratis untuk menentukan paket dan mobil yang perfect
            untuk wedding Anda. Dari planning hingga execution - kami handle
            everything!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Konsultasi Wedding via WhatsApp
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/rental-mobil-surabaya">
                <Button className="bg-white hover:bg-gray-100 text-pink-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                  Lihat Layanan Lainnya
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-300" />
              <span>Wedding Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-300" />
              <span>Premium Car Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-pink-300" />
              <span>Day Coordination</span>
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
              { title: "Bandara Juanda", href: "/antar-jemput-bandara-juanda" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all text-center"
              >
                <span className="text-pink-600 font-semibold hover:text-pink-700">
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

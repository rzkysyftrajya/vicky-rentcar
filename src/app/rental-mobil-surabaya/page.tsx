"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  heroStats,
  whyUsPoints,
  carOptions,
  destinations,
  culinarySpots,
  testimonials,
  faqs,
  googleReviews,
} from "@/data/surabaya-page-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SurabayaPage() {
  const whatsappNumber = "6282363389893";
  const whatsappMessage = encodeURIComponent(
    "Halo VRN, saya mau booking mobil di Surabaya"
  );

  const photoTestimonials = [
    {
      src: "/testimoni/testimoni1.jpeg",
      alt: "Testimoni dari Budi S, pelanggan rental mobil",
    },
    {
      src: "/testimoni/testimoni3.jpeg",
      alt: "Testimoni dari Maria & Doni, pelanggan sewa mobil pengantin",
    },
    {
      src: "/testimoni/testimoni2.jpeg",
      alt: "Review dari David L, klien rental mobil korporat",
    },
    {
      src: "/testimoni/testimoni4.jpeg",
      alt: "Ulasan dari Emily R, layanan antar jemput bandara",
    },
    {
      src: "/testimoni/testimoni5.jpeg",
      alt: "Testimoni dari Keluarga Santoso, sewa mobil keluarga",
    },
    {
      src: "/testimoni/testimoni6.jpeg",
      alt: "Review dari Fadli K. tentang layanan pelanggan rental mobil",
    },
  ];

  // Ambil 4 gambar pertama untuk ditampilkan, atau sesuaikan jumlahnya
  const displayedPhotos = photoTestimonials.slice(0, 4);

  const locations = [
    {
      name: "Kantor Utama Medan",
      province: "Sumatera Utara",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.103986349345!2d98.73182637497296!3d3.56350399640819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313a3c1010b371%3A0x8046543e3b1c2f3d!2sVICKY%20RENTCAR%20MEDAN!5e0!3m2!1sen!2sid!4v1721890387733!5m2!1sen!2sid",
    },
    {
      name: "Cabang Surabaya",
      province: "Jawa Timur",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.634533633597!2d112.752085314775!3d-7.28208199474393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbbde924716f%3A0x2655b55a1311549a!2sMonumen%20Kapal%20Selam!5e0!3m2!1sen!2sid!4v1622540959722!5m2!1sen!2sid",
    },
    {
      name: "Cabang Jakarta",
      province: "DKI Jakarta",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666420521346!2d106.82496417498968!3d-6.17539239380968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1721890459810!5m2!1sen!2sid",
    },
  ];

  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl"
        >
          <MessageSquare className="w-8 h-8" />
        </motion.div>
      </Link>

      {/* HERO SECTION  */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/destinasi-wisata/surabaya.jpg"
          alt="Sewa Mobil di Surabaya dengan pemandangan kota"
          fill
          className="absolute inset-0 z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            #1 Rental Mobil Terpercaya di Surabaya
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-yellow-400">Sewa Mobil Surabaya</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl mt-2">
              Vicky Rentcar Nusantara – Teman Setia Perjalanan Anda di Surabaya
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Jelajahi Kota Pahlawan dengan nyaman! Armada lengkap, driver
            berpengalaman, harga transparan - cuma modal jempol langsung
            booking!
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
                Chat Sekarang
              </Button>
            </Link>
            <Button
              size="lg" // Ukuran default dari komponen Button
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 md:px-10 md:py-7 text-lg md:text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Lihat Harga
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-yellow-400">
                  {stat.num}
                </div>
                <div className="text-white text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 KENAPA PILIH VRN - Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Kenapa Pilih{" "}
              <span className="text-blue-600">VICKY RENTCAR NUSANTARA</span>?
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-${item.color}-500`}
              >
                <div className={`text-${item.color}-600 mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚘 ARMADA MOBIL - Enhanced Cards */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pilihan Armada Mobil{" "}
              <span className="text-blue-600">Terbaik</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Dari city car hingga premium, semua siap antar Anda ke destinasi
              impian
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carOptions.map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                {car.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    🔥 Paling Laris
                  </div>
                )}

                <Image
                  src={car.image}
                  alt={`Sewa ${car.name} di Surabaya - Vicky Rentcar Nusantara`}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-t-3xl"
                  loading="lazy"
                />

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{car.name}</h3>
                      <p className="text-gray-500 text-sm">{car.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{car.capacity}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Halo VRN, saya mau booking ${car.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                      Pesan Sekarang
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BOOK SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Booking Semudah <span className="text-blue-600">1-2-3</span>
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
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏞️ DESTINASI WISATA - Surabaya Specific */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jelajahi <span className="text-blue-600">Kota Pahlawan</span>
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Image
                  src={place.image}
                  alt={`Wisata ${place.name} di Surabaya`}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    {place.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🍜 KULINER KHAS - Surabaya Street Food */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Kuliner Khas <span className="text-blue-600">Surabaya</span>
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
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center"
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
      <section className="py-20 bg-gradient-to-b from-white to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
              Apa Kata Mereka tentang kami?
            </h2>
            <p className="text-lg md:text-xl text-black-500">
              Ribuan pelanggan puas dari seluruh Indonesia
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
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testi.rating)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="italic mb-4 text-blue-100">
                        "{testi.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                          {testi.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold">{testi.name}</h4>
                          <p className="text-sm text-blue-200">{testi.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/20 hover:bg-white/30 border-none"
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === 0 ? 2 : prev - 1))
              }
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/20 hover:bg-white/30 border-none"
              onClick={() =>
                setCurrentTestimonial((prev) => (prev === 2 ? 0 : prev + 1))
              }
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Andi Prasetyo",
                city: "Jakarta",
                text: "Driver VRN sangat profesional! Tahu jalan tikus ke Bromo jadi hemat waktu 2 jam. Recommended!",
                rating: 5,
              },
              {
                name: "Maya Sari",
                city: "Surabaya",
                text: "Booking gampang banget, mobil bersih, driver ramah. Harga juga masuk akal. Pasti pakai lagi!",
                rating: 5,
              },
              {
                name: "Kevin Tan",
                city: "Singapore",
                text: "Perfect service for tourists! Driver speaks English and very helpful. Great experience!",
                rating: 5,
              },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="italic mb-4 text-blue-100">"{testi.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {testi.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testi.name}</h4>
                    <p className="text-sm text-blue-200">{testi.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* 📹 VIDEO TESTIMONIALS */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Lihat Cerita Mereka{" "}
              <span className="block sm:inline text-blue-600">
                Secara Langsung
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Pengalaman nyata dari pelanggan setia kami.
            </p>
          </motion.div>
          <div className="flex gap-8 overflow-x-auto pb-4 -mx-6 px-6">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@ptvickyrentalnusantara/video/7464145351641976081"
              data-video-id="7464145351641976081"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@ptvickyrentalnusantara"
                  href="https://www.tiktok.com/@ptvickyrentalnusantara?refer=embed"
                >
                  @ptvickyrentalnusantara
                </a>
              </section>
            </blockquote>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@ptvickyrentalnusantara/video/7541346678385741072"
              data-video-id="7541346678385741072"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@ptvickyrentalnusantara"
                  href="https://www.tiktok.com/@ptvickyrentalnusantara?refer=embed"
                >
                  @ptvickyrentalnusantara
                </a>
              </section>
            </blockquote>
          </div>
        </div>
      </section>
      <Script async src="https://www.tiktok.com/embed.js" />

      {/* 📸 PHOTO TESTIMONIALS GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Galeri Momen Pelanggan
            </h2>
            <p className="text-xl text-gray-600">
              Senyum kepuasan dari perjalanan mereka bersama kami.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayedPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚗 CTA FINAL - Strong Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
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
            className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold mb-6"
          >
            Promo Spesial Hari Ini!
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Siap Jelajahi Surabaya?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            <span className="font-bold text-yellow-400">Booking sekarang</span>{" "}
            dan dapatkan diskon spesial!
            <br />
            Cuma modal jempol, perjalanan jadi mudah!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-7 text-xl rounded-full shadow-2xl flex items-center gap-3 font-bold">
                  <Phone className="w-6 h-6" />
                  Chat WhatsApp
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-7 text-xl rounded-full shadow-2xl font-bold">
                Lihat Promo
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Semua yang perlu Anda tahu sebelum booking
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* GOOGLE MAPS REVIEWS */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ulasan Asli dari{" "}
              <span className="text-blue-600">Google Maps</span>
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
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
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
                <p className="text-gray-600 italic mb-4 flex-grow">
                  "{review.text}"
                </p>
                <Link
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                  >
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Lihat di Google Maps
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏨 HOTEL RECOMMENDATIONS */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Rekomendasi Hotel di{" "}
              <span className="text-blue-600">Surabaya</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pilihan akomodasi terbaik untuk perjalanan bisnis & wisata Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hotel Majapahit Surabaya",
                stars: 5,
                area: "Tunjungan",
                desc: "Hotel heritage dengan arsitektur kolonial megah & layanan bintang lima.",
                features: ["Pool", "Spa", "Restaurant"],
              },
              {
                name: "JW Marriott Surabaya",
                stars: 5,
                area: "Embong Malang",
                desc: "Kemewahan modern di pusat kota dengan fasilitas business center lengkap.",
                features: ["Ballroom", "Gym", "Lounge"],
              },
              {
                name: "Shangri-La Surabaya",
                stars: 5,
                area: "Darmo",
                desc: "Resort city dengan nuansa tropis & kuliner internasional kelas dunia.",
                features: ["Garden", "Bar", "Executive Floor"],
              },
            ].map((hotel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-6xl">🏨</div>
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

                  <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.area}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{hotel.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="https://www.traveloka.com/id-id/hotel/indonesia/region/surabaya-87731"
                    target="_blank"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                      Cek Harga Hotel
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✈️ TRAVEL TIPS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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
                whileHover={{ scale: 1.03 }}
                className={`bg-gradient-to-br from-${tip.color}-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border-l-4 border-${tip.color}-500`}
              >
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTACT INFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                  Hubungi Kami
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        WhatsApp / Telepon
                      </div>
                      <div className="text-blue-600 font-bold text-lg">
                        +62 823-6338-9893
                      </div>
                      <div className="text-sm text-gray-500">
                        Available 24/7
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        Area Layanan
                      </div>
                      <div className="text-gray-600">Surabaya & Sekitarnya</div>
                      <div className="text-sm text-gray-500">
                        Malang, Bromo, Batu, Bali
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        Jam Operasional
                      </div>
                      <div className="text-gray-600">24 Jam / 7 Hari</div>
                      <div className="text-sm text-gray-500">
                        Termasuk hari libur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  Siap Berangkat?
                </h4>
                <p className="text-gray-600 mb-6">
                  Chat langsung dengan tim kami untuk konsultasi gratis &
                  penawaran terbaik!
                </p>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-xl shadow-lg flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Chat WhatsApp Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ MAPS INTEGRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Jangkauan Layanan{" "}
              <span className="text-blue-600">Nasional Kami</span>
            </h2>
            <p className="text-xl text-gray-600">
              Dari Sabang sampai Merauke, kami siap melayani Anda.
            </p>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-2xl p-4">
            <div className="flex justify-between items-center mb-4 px-2">
              <div>
                <h3 className="font-bold text-xl text-gray-800">
                  {locations[activeLocationIndex].name}
                </h3>
                <p className="text-gray-500">
                  {locations[activeLocationIndex].province}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setActiveLocationIndex(
                      (prev) => (prev - 1 + locations.length) % locations.length
                    )
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setActiveLocationIndex(
                      (prev) => (prev + 1) % locations.length
                    )
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                key={activeLocationIndex}
                src={locations[activeLocationIndex].embedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Lokasi Kantor ${locations[activeLocationIndex].name}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

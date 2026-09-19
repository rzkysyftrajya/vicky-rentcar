"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  User,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  heroStats,
  whyUsPoints,
  carOptions,
  destinations,
  culinarySpots,
  testimonials,
  faqs,
  googleReviews,
  hotelRecommendations,
  howItWorks,
} from "@/data/jakarta-page-data"; // ganti sesuai folder lo

export default function RentalMobilJakartaPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(heroStats.map(() => 0));

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) =>
        prev.map((val, i) => {
          if (val < heroStats[i].num) {
            return val + Math.ceil(heroStats[i].num / 100);
          }
          return heroStats[i].num;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const nextDestination = () => {
    setCurrentDestinationIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestinationIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-600 z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      <div className="w-full bg-white text-gray-900">
        {/* ================= HERO ================= */}
        <motion.section
          className="relative bg-gray-900 text-white py-24 px-6 lg:px-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src="/hero/hero-jakarta.webp"
              alt="Rental Mobil Jakarta"
              fill
              className="object-cover opacity-40"
            />
          </motion.div>

          <motion.div
            className="relative max-w-5xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sewa Mobil Jakarta — Premium & Siap 24 Jam
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Solusi transportasi terbaik di Jakarta: armada lengkap, driver
              profesional, dan harga transparan. Booking cepat via WhatsApp!
            </motion.p>

            <motion.div
              className="flex justify-center gap-4 mt-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="https://wa.me/628999999999"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-green-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Chat WhatsApp</span>
              </motion.a>
              <motion.a
                href="#armada"
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Armada
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {heroStats.map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.p
                    className="text-3xl font-bold"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                  >
                    {animatedStats[i]}
                    {i < 2 ? "+" : ""}
                  </motion.p>
                  <p className="text-sm opacity-80">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ================= WHY US ================= */}
        <motion.section
          className="py-16 px-6 lg:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kenapa Pilih VRN Jakarta?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsPoints.map((item, i) => (
              <motion.div
                key={i}
                className="relative p-8 border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-gray-50 to-white cursor-pointer overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -translate-y-8 translate-x-8" />
                <motion.div
                  className="mb-6 text-green-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= HOW IT WORKS ================= */}
        <motion.section
          className="py-16 px-6 lg:px-16 bg-gradient-to-r from-green-50 to-blue-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cara Sewa Mobil Jakarta — Mudah & Cepat!
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.icon}
                </motion.div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= ARMADA ================= */}
        <motion.section
          id="armada"
          className="py-16 px-6 lg:px-16 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Armada Siap Jalan
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {carOptions.map((car, i) => (
              <motion.div
                key={i}
                className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden bg-white cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div
                  className="relative overflow-hidden aspect-[4/3] w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {car.popular && (
                    <motion.div
                      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      POPULAR
                    </motion.div>
                  )}
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-500">
                    {car.type} • {car.capacity}
                  </p>

                  <p className="mt-3 font-semibold text-green-600">
                    {car.price}
                  </p>

                  <ul className="text-sm text-gray-700 mt-3 space-y-1">
                    {car.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/628999999999"
                    className="mt-4 block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pesan Sekarang
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= CUSTOM CAR CONSULTATION ================= */}
        <motion.section
          className="py-16 px-6 lg:px-16 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Tidak Menemukan Mobil yang Kamu Cari?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Jangan khawatir! Kami punya solusi untuk kebutuhan spesifik Anda.
              Konsultasikan dulu dengan tim kami untuk rekomendasi mobil yang
              tepat sesuai budget dan keperluan Anda.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Sesuai Budget</h3>
                <p className="text-sm text-gray-600">
                  Kami carikan mobil yang sesuai kantong Anda
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Kebutuhan Spesifik
                </h3>
                <p className="text-sm text-gray-600">
                  Mobil untuk event, wedding, atau keperluan khusus
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Koleksi Lengkap
                </h3>
                <p className="text-sm text-gray-600">
                  Dari city car hingga luxury van, semua tersedia
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/628999999999?text=Halo%20VRN%20Jakarta,%20saya%20ingin%20konsultasi%20mobil%20yang%20cocok%20untuk%20kebutuhan%20saya"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Konsultasi Gratis Sekarang
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>

              <p className="text-sm text-gray-500 mt-4">
                Response dalam 5 menit • Gratis tanpa biaya konsultasi
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= DESTINASI ================= */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Destinasi Populer Jakarta
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((d, i) => (
              <div
                key={i}
                className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <p className="text-sm text-gray-500">{d.category}</p>
                  <h3 className="text-xl font-bold">{d.name}</h3>
                  <p className="text-gray-700 mt-2">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= KULINER ================= */}
        <section className="py-16 px-6 lg:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">
            Kuliner Wajib Dicoba
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {culinarySpots.map((c, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm bg-white">
                <p className="text-4xl">{c.icon}</p>
                <h3 className="text-xl font-bold mt-2">{c.name}</h3>
                <p className="text-gray-600">{c.loc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Testimoni Pelanggan
          </h2>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                className="p-8 border rounded-xl shadow-lg bg-white text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 italic text-lg mb-6">
                  "{testimonials[currentTestimonialIndex].text}"
                </p>

                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map(
                    (_, idx) => (
                      <Star
                        key={idx}
                        className="w-6 h-6 text-yellow-500 fill-yellow-500"
                      />
                    )
                  )}
                </div>

                <p className="font-bold text-xl">
                  {testimonials[currentTestimonialIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonialIndex].city}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentTestimonialIndex
                      ? "bg-green-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-4 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Layanan Premium VRN Jakarta
            </motion.h2>
            <motion.p
              className="text-lg text-center text-gray-600 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Kami hadir untuk memberikan pengalaman sewa mobil terbaik di
              Jakarta
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Car className="w-12 h-12" />,
                  title: "Armada Lengkap",
                  desc: "100+ unit mobil siap pakai, dari city car hingga luxury SUV",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "Driver Profesional",
                  desc: "Driver berpengalaman, ramah, dan mengenal Jakarta dalam-dalam",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "24/7 Support",
                  desc: "Layanan booking dan support tersedia 24 jam setiap hari",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Rating 4.9/5.0",
                  desc: "Ribuan pelanggan puas dengan layanan kami",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GOOGLE REVIEWS ================= */}
        <section className="py-16 px-6 lg:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">
            Review Google
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.map((g, i) => (
              <a
                href={g.link}
                key={i}
                target="_blank"
                className="p-6 border rounded-xl shadow bg-white hover:shadow-lg transition block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={g.avatar}
                    alt={g.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{g.name}</h3>
                    <div className="flex text-yellow-500">
                      {[...Array(g.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700">{g.text}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ================= HOTEL RECOMMENDATION ================= */}
        <section className="py-16 px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Rekomendasi Hotel Jakarta
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {hotelRecommendations.map((h, i) => (
              <div
                key={i}
                className="border rounded-xl overflow-hidden shadow bg-white"
              >
                <Image
                  src={h.image}
                  alt={h.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold">{h.name}</h3>
                  <p className="text-sm text-gray-500">
                    {h.area} • ⭐ {h.stars}
                  </p>
                  <p className="mt-2 text-gray-700">{h.desc}</p>

                  <ul className="text-sm mt-3 space-y-1">
                    {h.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-16 px-6 lg:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="border p-4 rounded-lg bg-white">
                <summary className="font-semibold cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <motion.section
          className="py-16 px-6 lg:px-16 text-center bg-green-600 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Siap Jalan-Jalan di Jakarta?
          </motion.h2>
          <motion.p
            className="mb-6 text-lg"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Booking sekarang via WhatsApp — cepat, mudah, tanpa ribet!
          </motion.p>

          <motion.button
            onClick={() => setIsBookingModalOpen(true)}
            className="px-8 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Booking Sekarang</span>
          </motion.button>
        </motion.section>

        {/* ================= BOOKING MODAL ================= */}
        <Dialog.Root
          open={isBookingModalOpen}
          onOpenChange={setIsBookingModalOpen}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 max-w-md w-full mx-4 z-50">
              <Dialog.Title className="text-2xl font-bold text-center mb-6">
                Booking Mobil Jakarta
              </Dialog.Title>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="08123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Tanggal Sewa
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobil yang Dipilih
                  </label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Pilih mobil...</option>
                    {carOptions.map((car, i) => (
                      <option key={i} value={car.name}>
                        {car.name} - {car.price}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kirim Booking Request
                </motion.button>
              </form>

              <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                ✕
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}

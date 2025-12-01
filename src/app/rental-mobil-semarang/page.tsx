// app/rental-mobil-semarang/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
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
  Phone,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Award,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  PhoneCall,
  Mail,
  Clock as ClockIcon,
  Eye,
  MapPin as MapPinIcon,
  X,
  User,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  heroStats,
  whyUsPoints,
  carOptions,
  bookingSteps,
  destinations,
  culinarySpots,
  testimonials,
  promo,
  faqs,
  travelTips,
} from "../../data/semarang-page-data";

const WA_NUMBER = "6282363389893";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "PT. VICKY RENTCAR NUSANTARA - Rental Mobil Semarang",
  description:
    "Layanan sewa mobil profesional di Semarang dengan armada lengkap, sopir berpengalaman, harga transparan. Booking via WhatsApp 24/7.",
  url: "https://vickyrentcar.com/rental-mobil-semarang",
  telephone: "+62-823-6338-9893",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  priceRange: "Rp450.000 - Rp1.800.000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  areaServed: ["Semarang", "Ungaran", "Salatiga", "Ambarawa", "Demak"],
};

export default function RentalMobilSemarangPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [animatedStats, setAnimatedStats] = useState(heroStats.map(() => 0));
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const animateStats = () => {
      heroStats.forEach((stat, index) => {
        const target = parseInt(stat.num.replace(/[^\d]/g, ""));
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 20);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const openCarModal = (car) => setSelectedCar(car);
  const closeCarModal = () => setSelectedCar(null);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-600 z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      <div className="w-full bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative bg-gradient-to-b from-slate-900 to-transparent text-white py-24 px-6 lg:px-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src="/hero/semarang-hero.jpg"
              alt="Sewa Mobil Semarang"
              fill
              className="object-cover opacity-40"
            />
          </motion.div>

          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                  PT. VICKY RENTCAR NUSANTARA
                </p>
                <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                  Rental Mobil Semarang — Nyaman, Aman, Siap 24 Jam
                </h1>
                <p className="mt-4 text-lg text-slate-200 max-w-xl">
                  Armada lengkap, sopir profesional, dan harga transparan.
                  Booking cepat via WhatsApp — siap antar ke Lawang Sewu,
                  Simpang Lima, atau bandara.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-semibold shadow"
                  >
                    Chat WhatsApp
                  </a>
                  <a
                    href="#armada"
                    className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-semibold hover:bg-gray-100"
                  >
                    Lihat Armada
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  {heroStats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors"
                    >
                      <p className="text-2xl font-bold">
                        {animatedStats[i]}
                        {s.num.replace(/[^\d]/g, "")}
                      </p>
                      <p className="text-sm opacity-90">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/sample-car-hero.webp"
                    alt="Armada VRN Semarang"
                    width={840}
                    height={560}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHY US */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Kenapa Pilih VRN Semarang?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUsPoints.map((w, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
                >
                  <div className="mb-4 text-green-600">{w.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-600">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARMADA */}
        <section id="armada" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Armada Favorit
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carOptions.map((car, i) => (
                <article
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative w-full h-44">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{car.name}</h3>
                        <p className="text-sm text-gray-500">
                          {car.type} • {car.capacity}
                        </p>
                      </div>

                      {car.popular && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Paling Laris
                        </span>
                      )}
                    </div>

                    <p className="mt-3 font-semibold">{car.price}</p>

                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      {car.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex gap-3">
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=Saya%20mau%20sewa%20${encodeURIComponent(
                          car.name
                        )}%20di%20Semarang`}
                        className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
                      >
                        Pesan Sekarang
                      </a>
                      <button
                        className="px-3 py-2 border rounded-lg text-sm"
                        onClick={() =>
                          window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                          })
                        }
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM CAR CONSULTATION */}
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
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20konsultasi%20mobil%20yang%20cocok%20untuk%20kebutuhan%20saya`}
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

        {/* DESTINATIONS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Rekomendasi Destinasi Semarang
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((d, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        Lihat Lokasi
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">
                      {d.category}
                    </p>
                    <h3 className="text-lg font-semibold mt-2 text-gray-900">
                      {d.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRAVEL TIPS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Tips Wisata & Kuliner Semarang
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {travelTips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {tip.title}
                  </h3>
                  <ul className="space-y-2">
                    {tip.tips.map((t, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULINARY */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Kuliner Wajib di Semarang
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {culinarySpots.map((c, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-5 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl">{c.icon}</div>
                  <h3 className="mt-3 font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.loc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Testimoni Pelanggan
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 shadow-sm"
                >
                  <p className="text-gray-700 italic">“{t.text}”</p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.city}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS */}
        <motion.section
          className="py-16 px-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  4.9/5
                </span>
                <span className="text-sm text-gray-500">dari 500+ ulasan</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apa Kata Pelanggan Kami?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ribuan pelanggan telah mempercayai layanan kami untuk perjalanan
                mereka di Semarang
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ahmad Rahman",
                  rating: 5,
                  text: "Sopir sangat ramah dan profesional. Mobil dalam kondisi prima. Sudah 3x sewa di VRN Semarang, selalu puas!",
                  date: "2 minggu lalu",
                  avatar: "👨‍💼",
                },
                {
                  name: "Siti Nurhaliza",
                  rating: 5,
                  text: "Booking via WhatsApp sangat mudah dan cepat. Harga transparan tanpa biaya tersembunyi. Recommended!",
                  date: "1 bulan lalu",
                  avatar: "👩‍💻",
                },
                {
                  name: "Budi Santoso",
                  rating: 5,
                  text: "Untuk acara keluarga besar, mobil Alphard yang disediakan sangat nyaman. Sopir on time dan sabar.",
                  date: "3 minggu lalu",
                  avatar: "👨‍👩‍👧‍👦",
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="https://g.co/kgs/abc123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Star className="w-5 h-5" />
                Lihat Semua Ulasan di Google
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* HOTEL RECOMMENDATIONS */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Rekomendasi Hotel di Semarang
              </h2>
              <p className="text-lg text-gray-600">
                Partner hotel terbaik untuk melengkapi perjalanan Anda
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Hotel Santika Premiere Semarang",
                  rating: 4.5,
                  price: "Rp 650.000",
                  image: "/hotels/santika.jpg",
                  location: "Jl. Pandanaran No.116",
                  features: ["WiFi Gratis", "Kolam Renang", "Restoran"],
                },
                {
                  name: "Ibis Styles Semarang Simpang Lima",
                  rating: 4.3,
                  price: "Rp 450.000",
                  image: "/hotels/ibis.jpg",
                  location: "Jl. KH. Ahmad Dahlan No.1",
                  features: [
                    "Breakfast Included",
                    "Modern Design",
                    "City Center",
                  ],
                },
                {
                  name: "Grand Candi Hotel Semarang",
                  rating: 4.4,
                  price: "Rp 550.000",
                  image: "/hotels/grand-candi.jpg",
                  location: "Jl. Sisingamangaraja No.16",
                  features: ["Spa", "Fitness Center", "Business Center"],
                },
              ].map((hotel, i) => (
                <motion.div
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 w-full bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-4xl">🏨</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ {hotel.rating}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {hotel.location}
                    </p>
                    <p className="text-lg font-bold text-green-600 mb-3">
                      {hotel.price}/malam
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <motion.a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20booking%20${encodeURIComponent(
                          hotel.name
                        )}`}
                        className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Booking Hotel
                      </motion.a>
                      <motion.button
                        className="px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Detail
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">
                Diskon hingga 20% untuk pelanggan rental mobil VRN
              </p>
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20info%20paket%20hotel%20+%20mobil`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Info Paket Hotel + Mobil
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Pertanyaan yang Sering Diajukan
            </h2>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                Siap Jelajah Semarang dengan Nyaman?
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Booking sekarang via WhatsApp — cepat & tanpa ribet.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                className="bg-black px-6 py-3 rounded-lg font-semibold hover:opacity-95"
              >
                Chat Sekarang
              </a>
              <Link
                href="#armada"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
              >
                Lihat Armada
              </Link>
            </div>
          </div>
        </section>

        {/* FLOATING WHATSAPP BUTTON */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden md:inline font-semibold">
              Chat WhatsApp
            </span>
          </a>
        </div>

        {/* CAR MODAL */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeCarModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedCar.name}
                      </h3>
                      <p className="text-gray-600">
                        {selectedCar.type} • {selectedCar.capacity}
                      </p>
                    </div>
                    {selectedCar.popular && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Paling Laris
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-4">
                    {selectedCar.price}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Fitur Utama:</h4>
                      <ul className="space-y-1">
                        {selectedCar.features.map((f, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Spesifikasi Tambahan:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Transmisi: Automatic</li>
                        <li>• Bahan Bakar: Pertamax / Solar</li>
                        <li>• AC: Double Blower</li>
                        <li>• Audio: Bluetooth Compatible</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=Saya%20mau%20sewa%20${encodeURIComponent(
                        selectedCar.name
                      )}%20di%20Semarang`}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                    >
                      Pesan Sekarang
                    </a>
                    <button
                      onClick={closeCarModal}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING MODAL */}
        <Dialog.Root
          open={isBookingModalOpen}
          onOpenChange={setIsBookingModalOpen}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 max-w-md w-full mx-4 z-50">
              <Dialog.Title className="text-2xl font-bold text-center mb-6">
                Booking Mobil Semarang
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

        {/* FOOTER */}
        <footer className="py-10 px-6 bg-slate-900 text-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold">PT. VICKY RENTCAR NUSANTARA</h4>
              <p className="mt-3 text-sm text-gray-300 max-w-sm">
                Pilihan utama untuk sewa mobil di Semarang & sekitarnya. Armada
                terawat, sopir profesional, layanan 24/7.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Kontak</h5>
              <p className="mt-2 text-sm">
                WhatsApp:{" "}
                <a
                  className="text-green-400"
                  href={`https://wa.me/${WA_NUMBER}`}
                >
                  +62 {WA_NUMBER.replace(/^62/, "")}
                </a>
              </p>
              <p className="text-sm mt-1">Tel: (024) - 1234-567</p>
              <p className="text-sm mt-1">Email: info@vickyrentcar.co.id</p>
            </div>

            <div>
              <h5 className="font-semibold">Area Layanan</h5>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>Semarang</li>
                <li>Ungaran</li>
                <li>Salatiga</li>
                <li>Ambarawa</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} PT. VICKY RENTCAR NUSANTARA. Semua hak
            dilindungi.
          </div>
        </footer>
      </div>
    </>
  );
}

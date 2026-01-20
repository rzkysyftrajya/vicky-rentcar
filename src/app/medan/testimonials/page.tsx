"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Quote,
  MapPin,
  Calendar,
  Phone,
  ThumbsUp,
  MessageCircle,
  Award,
  Users,
  CheckCircle,
  Heart,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const testimonials = [
  {
    id: 1,
    name: "Iffat Resources",
    location: "Malaysia",
    service: "Rental Mobil Antar Negara",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Terbaik! I have great experience renting with Vicky Rental Nusantara. Mr Vicky is best in client care, very communicative, fast responsive. I booked car all the way from Malaysia for my Husband arriving in Indonesia. Within 30 minutes, i was given choices to choose. Driver arrived before time with personalized arrival name plate. Perfect punctuality. The car was tip top condition. Highly recommend!",
    avatar: "IR",
    verified: true,
    tripDetails: {
      duration: "1 minggu",
      destination: "Tour Medan & Sekitar",
      vehicle: "Toyota Innova Reborn",
    },
    helpful: 45,
  },
  {
    id: 2,
    name: "Dandia Agung",
    location: "Jakarta",
    service: "Rental Mobil Harian",
    rating: 5,
    date: "2024-01-20",
    comment:
      "Mobil tersedia banyak pilihan, harga cukup bersahabat. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
    avatar: "DA",
    verified: true,
    tripDetails: {
      duration: "3 hari",
      destination: "Tour Medan",
      vehicle: "Mitsubishi Xpander",
    },
    helpful: 32,
  },
  {
    id: 3,
    name: "Arbanie Vinsmoke",
    location: "Surabaya",
    service: "Tour & Liburan",
    rating: 5,
    date: "2024-01-25",
    comment:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended 👍",
    avatar: "AV",
    verified: true,
    tripDetails: {
      duration: "4 hari 3 malam",
      destination: "Danau Toba & Berastagi",
      vehicle: "Toyota Fortuner",
    },
    helpful: 28,
  },
  {
    id: 4,
    name: "Balqis Khanza",
    location: "Bandung",
    service: "Wedding Car Rental",
    rating: 5,
    date: "2024-01-30",
    comment:
      "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya,,👍👍👍",
    avatar: "BK",
    verified: true,
    tripDetails: {
      duration: "1 hari",
      destination: "Pernikahan di Medan",
      vehicle: "Toyota Alphard",
    },
    helpful: 55,
  },
  {
    id: 5,
    name: "Alif Hayza",
    location: "Yogyakarta",
    service: "Rental Mobil Harian",
    rating: 5,
    date: "2024-02-05",
    comment:
      "Mantap pelayanan nya bagus, mobil nya bagus bersih wangi mantap lah...",
    avatar: "AH",
    verified: true,
    tripDetails: {
      duration: "2 hari",
      destination: "Tour Medan Kota",
      vehicle: "Toyota Avanza",
    },
    helpful: 18,
  },
];

const ratingStats = {
  average: 4.9,
  total: 847,
  distribution: [
    { stars: 5, count: 782, percentage: 92.3 },
    { stars: 4, count: 52, percentage: 6.1 },
    { stars: 3, count: 11, percentage: 1.3 },
    { stars: 2, count: 2, percentage: 0.2 },
    { stars: 1, count: 0, percentage: 0.0 },
  ],
};

const reviewHighlights = [
  {
    icon: CheckCircle,
    title: "Professional Service",
    count: 823,
    description: "Pelayanan profesional dan responsif",
  },
  {
    icon: Star,
    title: "Quality Vehicle",
    count: 798,
    description: "Kendaraan berkualitas dan terawat",
  },
  {
    icon: Clock,
    title: "On Time",
    count: 845,
    description: "Ketepatan waktu penjemputan",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    count: 841,
    description: "Tingkat kepuasan pelanggan tinggi",
  },
];

const serviceCategories = [
  { name: "Rental Mobil Harian", rating: 4.9, reviews: 324 },
  { name: "Antar Jemput Bandara", rating: 4.9, reviews: 287 },
  { name: "Tour & Liburan", rating: 4.8, reviews: 156 },
  { name: "Rental Jangka Panjang", rating: 4.9, reviews: 89 },
  { name: "Wedding Car", rating: 5.0, reviews: 34 },
  { name: "Corporate Service", rating: 4.9, reviews: 67 },
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20layanan%20rental%20mobil%20setelah%20membaca%20testimoni%20yang%20menarik";

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((testimonial) =>
          testimonial.service
            .toLowerCase()
            .includes(selectedCategory.toLowerCase()),
        );

  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    if (sortBy === "helpful") {
      return b.helpful - a.helpful;
    }
    return 0;
  });

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/medan"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Medan
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Ulasan Pelanggan</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/medan"
              className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Testimoni Pelanggan
            </h1>
            <p className="text-xl text-green-100">
              Ulasan dari 500+ pelanggan yang puas dengan layanan VRN Rent Car
              Medan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Overall Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <div className="text-6xl font-bold text-gray-900 mb-2">
                  {ratingStats.average}
                </div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(ratingStats.average)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-gray-600">
                  {ratingStats.total} ulasan pelanggan
                </div>
              </div>

              <div className="space-y-3">
                {ratingStats.distribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm text-gray-600">
                        {dist.stars}
                      </span>
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">
                      {dist.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Ratings */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Rating Berdasarkan Layanan
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceCategories.map((service, index) => (
                    <div
                      key={service.name}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {service.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-bold text-gray-900">
                            {service.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        {service.reviews} ulasan
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pelanggan Memilih Kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {highlight.count}+
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {["all", "rental", "airport", "tour"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all"
                    ? "Semua Ulasan"
                    : category === "rental"
                      ? "Rental Mobil"
                      : category === "airport"
                        ? "Antar Jemput"
                        : "Tour"}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Urutkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="recent">Terbaru</option>
                <option value="rating">Rating Tertinggi</option>
                <option value="helpful">Paling Bantu</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ulasan Lengkap Pelanggan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Baca pengalaman nyata pelanggan dengan layanan VRN Rent Car Medan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        {testimonial.verified && (
                          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            Ulasan Jujur
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(testimonial.date).toLocaleDateString(
                            "id-ID",
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Badge */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-gray-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">
                      {testimonial.comment}
                    </p>
                  </div>

                  {/* Trip Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-gray-600">Durasi:</div>
                        <div className="font-medium">
                          {testimonial.tripDetails.duration}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600">Tujuan:</div>
                        <div className="font-medium">
                          {testimonial.tripDetails.destination}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600">Kendaraan:</div>
                        <div className="font-medium">
                          {testimonial.tripDetails.vehicle}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">
                        Bantu ({testimonial.helpful})
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan 500+ Pelanggan Puas
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Dapatkan pengalaman terbaik seperti pelanggan kami yang lain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan Layanan Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
                asChild
              >
                <a href="/medan/services">Lihat Layanan Kami</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Berikan Ulasan Jujur Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pengalaman Anda sangat berharga bagi kami. Silakan berikan
                ulasan jujur tentang layanan rental mobil kami di Google
                Reviews.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a
                  href="https://g.page/r/CeVXw4q2MI5pEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Beri Ulasan di Google
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Klik tombol di atas untuk memberikan ulasan jujur Anda
            </p>
          </motion.div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}

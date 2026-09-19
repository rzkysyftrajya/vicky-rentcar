"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Car,
  Clock,
  Star,
  Phone,
  Award,
  CheckCircle,
  MapPin,
  Heart,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const mainStats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Pelanggan Puas",
    description: "Pelanggan yang puas dengan layanan kami",
    color: "bg-blue-500",
    growth: "+15%",
    period: "vs bulan lalu",
  },
  {
    icon: Car,
    value: 50,
    suffix: "+",
    label: "Armada Tersedia",
    description: "Kendaraan siap pakai dalam kondisi prima",
    color: "bg-green-500",
    growth: "+8%",
    period: "vs tahun lalu",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Layanan",
    description: "Operasional non-stop sepanjang tahun",
    color: "bg-purple-500",
    growth: "100%",
    period: "ketersediaan",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Rating Pelanggan",
    description: "Rating kepuasan pelanggan",
    color: "bg-yellow-500",
    growth: "+0.2",
    period: "vs tahun lalu",
  },
];

const detailedStats = [
  {
    category: "Layanan",
    icon: CheckCircle,
    stats: [
      { label: "Rental Harian", value: "324", percentage: 85 },
      { label: "Antar Jemput Bandara", value: "287", percentage: 75 },
      { label: "Tour & Liburan", value: "156", percentage: 41 },
      { label: "Rental Jangka Panjang", value: "89", percentage: 23 },
      { label: "Wedding Car", value: "34", percentage: 9 },
      { label: "Corporate Service", value: "67", percentage: 18 },
    ],
  },
  {
    category: "Kendaraan",
    icon: Car,
    stats: [
      { label: "Toyota Avanza", value: "12", percentage: 24 },
      { label: "Mitsubishi Xpander", value: "8", percentage: 16 },
      { label: "Toyota Innova", value: "6", percentage: 12 },
      { label: "Toyota Fortuner", value: "4", percentage: 8 },
      { label: "Toyota Alphard", value: "2", percentage: 4 },
      { label: "Lainnya", value: "18", percentage: 36 },
    ],
  },
  {
    category: "Coverage Area",
    icon: MapPin,
    stats: [
      { label: "Medan Kota", value: "100%", percentage: 100 },
      { label: "Medan Barat", value: "95%", percentage: 95 },
      { label: "Medan Timur", value: "90%", percentage: 90 },
      { label: "Medan Utara", value: "88%", percentage: 88 },
      { label: "Medan Selatan", value: "85%", percentage: 85 },
      { label: "Kabupaten Lain", value: "75%", percentage: 75 },
    ],
  },
];

const achievements = [
  {
    year: "2024",
    title: "500+ Pelanggan",
    description: "Mencapai 500 pelanggan puas dalam satu tahun",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Sertifikasi ISO",
    description: "Memperoleh sertifikasi ISO 9001:2015 untuk kualitas layanan",
    icon: Award,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "50+ Armada",
    description: "Mencapai 50 unit armada dengan kondisi prima",
    icon: Car,
    color: "bg-purple-500",
  },
  {
    year: "2021",
    title: "24/7 Service",
    description: "Meluncurkan layanan 24 jam sehari, 7 hari seminggu",
    icon: Clock,
    color: "bg-orange-500",
  },
  {
    year: "2020",
    title: "Digital Platform",
    description: "Meluncurkan platform digital untuk kemudahan booking",
    icon: Globe,
    color: "bg-indigo-500",
  },
  {
    year: "2019",
    title: "4.8 Rating",
    description: "Mencapai rating pelanggan 4.8 dari 5",
    icon: Star,
    color: "bg-yellow-500",
  },
];

const performanceMetrics = [
  {
    metric: "On-Time Performance",
    value: "98.5%",
    description: "Ketepatan waktu penjemputan",
    icon: Clock,
    trend: "up",
  },
  {
    metric: "Customer Satisfaction",
    value: "96.2%",
    description: "Tingkat kepuasan pelanggan",
    icon: Heart,
    trend: "up",
  },
  {
    metric: "Fleet Availability",
    value: "94.8%",
    description: "Ketersediaan armada harian",
    icon: Car,
    trend: "stable",
  },
  {
    metric: "Service Response",
    value: "<5 min",
    description: "Waktu respons customer service",
    icon: Zap,
    trend: "up",
  },
];

function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function StatsPageClient() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20VRN%20Rent%20Car%20Medan";

  return (
    <>
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
            <span className="text-gray-600">Statistik</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/medan"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Statistik & Pencapaian
            </h1>
            <p className="text-xl text-indigo-100">
              Data real dan pencapaian VRN Rent Car Medan sebagai bukti komitmen
              kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Angka yang Menjelaskan Segalanya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Statistik terkini yang menunjukkan dedikasi kami dalam memberikan
              layanan terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {stat.description}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600 font-medium text-sm">
                    {stat.growth}
                  </span>
                  <span className="text-gray-500 text-xs">{stat.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Indikator kinerja yang menunjukkan kualitas layanan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      metric.trend === "up"
                        ? "bg-green-500"
                        : metric.trend === "stable"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {metric.metric}
                </h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Analisis Layanan Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Breakdown detail dari berbagai layanan dan coverage area
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {detailedStats.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.stats.map((stat, statIndex) => (
                    <div key={stat.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {stat.label}
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {stat.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          transition={{ duration: 1, delay: statIndex * 0.1 }}
                          className="bg-blue-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pencapaian & Milestone
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perjalanan kami dalam memberikan layanan rental mobil terbaik
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    {achievement.year}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bergabunglah dengan 500+ Pelanggan Puas Kami
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Rasakan pengalaman rental mobil terbaik di Medan dan Sumatera
              Utara
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi via WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/medan">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
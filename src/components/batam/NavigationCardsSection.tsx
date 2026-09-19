"use client";

import Link from "next/link";
import { 
  Car, 
  Users, 
  MapPin, 
  Clock, 
  Award, 
  Phone,
  Star,
  Shield,
  Building,
  Plane,
  Gift,
  HelpCircle,
  Camera,
  DollarSign,
  FileText
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pageLinks = [
  {
    href: "/batam/armada",
    title: "Armada Mobil",
    description: "Pilihan kendaraan terawat & terjamin",
    icon: Car,
    color: "bg-teal-500",
  },
  {
    href: "/batam/layanan",
    title: "Layanan Kami",
    description: "Rental harian, bulanan, & wisata",
    icon: Clock,
    color: "bg-cyan-500",
  },
  {
    href: "/batam/destinasi",
    title: "Destinasi",
    description: "Jelajahi tempat menarik di batam",
    icon: MapPin,
    color: "bg-green-500",
  },
  {
    href: "/batam/tentang",
    title: "Tentang Kami",
    description: "Kenali VRN Rent Car batam",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    href: "/batam/testimoni",
    title: "Testimoni",
    description: "Apa kata pelanggan kami",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    href: "/batam/promo",
    title: "Promo Spesial",
    description: "Dapatkan diskon menarik",
    icon: Gift,
    color: "bg-red-500",
  },
  {
    href: "/batam/harga",
    title: "Daftar Harga",
    description: "Harga transparan terbaik",
    icon: DollarSign,
    color: "bg-orange-500",
  },
  {
    href: "/batam/galeri",
    title: "Galeri Foto",
    description: "Kumpulan foto & video",
    icon: Camera,
    color: "bg-pink-500",
  },
  {
    href: "/batam/blog",
    title: "Blog & Artikel",
    description: "Tips & info terbaru",
    icon: FileText,
    color: "bg-indigo-500",
  },
  {
    href: "/batam/faq",
    title: "FAQ",
    description: "Pertanyaan yang sering diajukan",
    icon: HelpCircle,
    color: "bg-blue-500",
  },
  {
    href: "/batam/kontak",
    title: "Hubungi Kami",
    description: "Konsultasi gratis 24/7",
    icon: Phone,
    color: "bg-teal-600",
  },
  {
    href: "/batam",
    title: "Beranda",
    description: "Kembali ke halaman utama",
    icon: Building,
    color: "bg-gray-500",
  },
];

export default function NavigationCardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi lengkap tentang semua layanan VRN Rent Car batam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pageLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link key={link.href} href={link.href} className="block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full group border border-gray-100 hover:border-teal-200 hover:-translate-y-1">
                  <div className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {link.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

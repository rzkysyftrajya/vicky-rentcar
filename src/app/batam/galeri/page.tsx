"use client";

import { Inter } from "next/font/google";
import Navbar from "@/components/batam/Navbar";
import { Phone, MapPin, MessageCircle, Camera, Video, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import TrustBadgesSection from "@/components/batam/TrustBadgesSection";
import GoogleReviewsCTA from "@/components/batam/GoogleReviewsCTA";

const inter = Inter({ subsets: ["latin"] });

const photos = [
  { id: 1, category: "Semua", src: "/batam/galeri/galeri-1.webp" },
  { id: 2, category: "Semua", src: "/batam/galeri/galeri-2.webp" },
  { id: 3, category: "Semua", src: "/batam/galeri/galeri-3.webp" },
  { id: 4, category: "Semua", src: "/batam/galeri/galeri-4.webp" },
  { id: 5, category: "Semua", src: "/batam/galeri/galeri-5.webp" },
  { id: 6, category: "Semua", src: "/batam/galeri/galeri-6.webp" },
  { id: 7, category: "Semua", src: "/batam/galeri/galeri-7.webp" },
  { id: 8, category: "Semua", src: "/batam/galeri/galeri-8.webp" },
  { id: 9, category: "Semua", src: "/batam/galeri/galeri-9.webp" },
  { id: 10, category: "Semua", src: "/batam/galeri/galeri-10.webp" },
  { id: 11, category: "Semua", src: "/batam/galeri/galeri-11.webp" },
  { id: 12, category: "Semua", src: "/batam/galeri/galeri-12.webp" },
  { id: 13, category: "Semua", src: "/batam/galeri/galeri-13.webp" },
  { id: 14, category: "Semua", src: "/batam/galeri/galeri-14.webp" },
  { id: 15, category: "Semua", src: "/batam/galeri/galeri-15.webp" },
  { id: 16, category: "Semua", src: "/batam/galeri/galeri-16.webp" },
  { id: 17, category: "Semua", src: "/batam/galeri/galeri-17.webp" },
  { id: 18, category: "Semua", src: "/batam/galeri/galeri-18.webp" },
  { id: 19, category: "Semua", src: "/batam/galeri/galeri-19.webp" },
  { id: 20, category: "Semua", src: "/batam/galeri/galeri-20.webp" },
  { id: 21, category: "Semua", src: "/batam/galeri/galeri-21.webp" },
  { id: 22, category: "Semua", src: "/batam/galeri/galeri-22.webp" },
  { id: 23, category: "Semua", src: "/batam/galeri/galeri-23.webp" },
  { id: 24, category: "Semua", src: "/batam/galeri/galeri-24.webp" },
  { id: 25, category: "Semua", src: "/batam/galeri/galeri-25.webp" },
  { id: 26, category: "Semua", src: "/batam/galeri/galeri-26.webp" },
  { id: 27, category: "Semua", src: "/batam/galeri/galeri-27.webp" },
  { id: 28, category: "Semua", src: "/batam/galeri/galeri-28.webp" },
  { id: 29, category: "Semua", src: "/batam/galeri/galeri-29.webp" },
];

const categories = ["Semua", "Armada", "Destinasi", "Event", "Team"];

export default function GaleriPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20melihat%20galeri%20VRN%20Rent%20Car%20Batam";
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredPhotos = activeCategory === "Semua" 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-yellow-500 text-black mb-4">📸 GALERI</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Galeri Foto & Video
            </h1>
            <p className="text-teal-100 max-w-2xl mx-auto">
              Kumpulan foto dan video kegiatan layanan VRN Rent Car batam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadgesSection />

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Pengenalan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tonton video pengenalan layanan VRN Rent Car batam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-teal-500 to-cyan-700 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center">
                <Video className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-white font-medium">Video Perkenalan VRN</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center">
                <Video className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-white font-medium">Testimoni Pelanggan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="text-teal-100 mb-6">
              Dapatkan info terbaru tentang promo dan layanan kami
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600" asChild>
                <a href="https://instagram.com" target="_blank">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://facebook.com" target="_blank">
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <GoogleReviewsCTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4">🏝️ VRN Rent Car batam</h4>
              <p className="text-gray-400 text-sm">layanan rental mobil terpercaya di batam, Kepulauan Riau.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/batam/layanan" className="hover:text-white">Rental Harian</a></li>
                <li><a href="/batam/layanan" className="hover:text-white">Rental Bulanan</a></li>
                <li><a href="/batam/armada" className="hover:text-white">Armada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/batam" className="hover:text-white">Beranda</a></li>
                <li><a href="/batam/tentang" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/batam/kontak" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 823-6338-9893</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> batam</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} VRN Rent Car batam. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal for photo */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="bg-white rounded-2xl p-4 max-w-4xl w-full">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <Camera className="w-24 h-24 text-gray-400" />
            </div>
            <div className="flex justify-end mt-4">
              <Button variant="outline" onClick={() => setSelectedPhoto(null)}>
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import { Inter } from "next/font/google";
import Navbar from "@/components/batam/Navbar";
import { Phone, MapPin, MessageCircle, ChevronDown, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrustBadgesSection from "@/components/batam/TrustBadgesSection";
import GoogleReviewsCTA from "@/components/batam/GoogleReviewsCTA";

const inter = Inter({ subsets: ["latin"] });

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        q: "Apa itu VRN Rent Car batam?",
        a: "VRN Rent Car batam adalah perusahaan rental mobil terpercaya di Kepulauan Riau yang telah beroperasi sejak 2018. Kami menyediakan berbagai layanan rental mobil dengan armada terawat dan sopir profesional."
      },
      {
        q: "Apa keunggulan VRN Rent Car dibandingkan kompetitor?",
        a: "Keunggulan kami: (1) Armada terawat dengan service rutin, (2) Sopir profesional dan berpengalaman, (3) Harga transparan tanpa biaya tersembunyi, (4) Layanan 24/7, (5) Banyak pilihan tipe kendaraan, (6) Terpercaya sejak 2018 dengan 500+ pelanggan puas."
      },
      {
        q: "Apakah VRN Rent Car batam resmi?",
        a: "Ya, kami adalah perusahaan resmi dengan izin usaha lengkap termasuk NPWP, SITU, dan izin operasional yang valid."
      },
    ]
  },
  {
    title: "Pemesanan",
    questions: [
      {
        q: "Bagaimana cara memesan rental mobil di VRN Rent Car?",
        a: "Cara memesan sangat mudah: (1) Hubungi kami via WhatsApp atau telepon, (2) Pilih tipe mobil yang diinginkan, (3) Tentukan tanggal dan waktu, (4) Konfirmasi pemesanan, (5) Mobil siap dijemput atau diantar ke lokasi Anda."
      },
      {
        q: "Berapa minimal lama sewa?",
        a: "Minimal sewa adalah 12 jam untuk rental harian. Untuk rental bulanan, minimal sewa adalah 30 hari."
      },
      {
        q: "Apakah bisa booking untuk hari yang sama?",
        a: "Ya, bisa! Asalkan armada tersedia. Kami sarankan untuk booking minimal H-1 untuk memastikan ketersediaan mobil."
      },
    ]
  },
  {
    title: "Armada & Layanan",
    questions: [
      {
        q: "Tipe mobil apa saja yang tersedia?",
        a: "Kami menyediakan berbagai tipe mobil: (1) City Car: Agya, Calya, Ayla, Brio, (2) MPV: Ertiga, Avanza, Sigra, XPander, (3) SUV: Rush, Terios, Fortuner, Pajero, (4) Premium: Alphard, Camry Hybrid, Hiace, (5) Double Cabin: Hilux."
      },
      {
        q: "Apakah harga sudah termasuk sopir?",
        a: "Ya, semua harga rental harian sudah termasuk sopir profesional. Untuk opsi lepas kunci (tanpa sopir), hubungi kami untuk info lebih lanjut."
      },
      {
        q: "Apakah bisa antar jemput bandara?",
        a: "Tentu! Kami menyediakan layanan antar jemput ke bandara Hang Nadim 24/7. Harga sudah fix all-in termasuk tol dan parking."
      },
    ]
  },
  {
    title: "Pembayaran",
    questions: [
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Kami menerima pembayaran via: (1) Transfer bank (BCA, BRI, BNI, Mandiri), (2) QRIS, (3) Tunai, (4) Credit/Debit Card (via mesin EDC)."
      },
      {
        q: "Kapan waktu pembayaran?",
        a: "Pembayaran dapat dilakukan: (1) DP 50% saat booking, (2) Pelunasan saat penjemputan mobil, (3) Full payment untuk promo tertentu."
      },
    ]
  },
];

export default function FAQPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ada%20pertanyaan%20tentang%20rental%20mobil%20di%20Batam";
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
              ❓ FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pertanyaan Umum
            </h1>
            <p className="text-teal-100 max-w-2xl mx-auto text-lg">
              Temukan jawaban untuk pertanyaan Anda tentang layanan rental mobil di batam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadgesSection />

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === index
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Questions */}
          <div className="max-w-3xl mx-auto">
            {faqCategories[activeCategory].questions.map((item, index) => {
              const globalIndex = activeCategory * 10 + index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => toggleQuestion(globalIndex)}
                    className="w-full bg-gray-50 rounded-xl p-6 text-left flex items-center justify-between hover:bg-teal-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 transition-transform ${
                        openIndex === globalIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === globalIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-teal-50 rounded-b-xl p-6 -mt-2">
                          <p className="text-gray-600">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Ada pertanyaan?
            </h2>
            <p className="text-teal-100 mb-6">
              Tim kami siap membantu Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                <a href={waLink} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700" asChild>
                <a href="tel:+6282363389893">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white">🏝️</span>
                </div>
                <span className="font-bold text-xl"><span className="text-yellow-400">VRN</span> Rent Car</span>
              </div>
              <p className="text-gray-400 text-sm">Layanan rental mobil terpercaya di batam, Kepulauan Riau.</p>
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
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20ingin%20konsultasi%20layanan%20rental%20mobil%20plus%20driver";

const detailedServices = [
  {
    title: "Antar Jemput Bandara Hang Nadim (BTH)",
    tag: "Meet & Greet",
    desc: "Driver kami standby di gate kedatangan memegang nameboard nama Anda sebelum pesawat landing. Bebas antre taksi, bagasi dibantu, dan langsung diantar ke tujuan di Batam.",
    features: [
      "Bebas Penalti Flight Delay",
      "Driver Rapi & Wangi",
      "Bantu Angkut Bagasi",
      "Tepat Waktu",
    ],
    image: "/batam/layanan/antar-jemput-bandara.webp",
  },
  {
    title: "Transfer Pelabuhan Ferry Batam",
    tag: "Wisman Singapore & Malaysia",
    desc: "Penjemputan terkoordinasi di Terminal Ferry Batam Centre, Harbour Bay, Sekupang, dan Nongsapura. Cocok untuk wisatawan belanja maupun delegasi bisnis.",
    features: [
      "Harbour Bay & Batam Centre",
      "Sopir Ramah Wisman",
      "Rute Fleksibel",
      "Langsung Jalan",
    ],
    image: "/batam/paket-hiace/hiace-ferry-singapore-malaysia.webp",
  },
  {
    title: "Corporate Chauffeur & Perjalanan Dinas",
    tag: "Invoice Resmi PT",
    desc: "Armada premium (Alphard, Zenix, Fortuner, Innova) untuk direksi, tamu kementerian, dan instansi swasta di kawasan industri Mukakuning, Kabil, Batu Ampar, dan Nongsa Digital Park.",
    features: [
      "Kwitansi & Faktur Pajak",
      "Driver Berpakaian Rapi",
      "Privasi Terjaga",
      "Sistem Harian / Bulanan",
    ],
    image: "/batam/layanan/dengan-sopir.webp",
  },
  {
    title: "Wisata City Tour & Kuliner Seafood Barelang",
    tag: "Paket Favorit Keluarga",
    desc: "Jelajahi keindahan Jembatan Barelang, belanja oleh-oleh di Nagoya, dan santap seafood segar di restoran terapung Piayu Laut tanpa pusing mencari parkir dan rute jalan.",
    features: [
      "Durasi 12 Jam Full Day",
      "Sopir Paham Spot Foto",
      "Bebas Macet Nagoya",
      "Pilihan All-In BBM",
    ],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BATAM.webp",
  },
  {
    title: "Sewa Hiace & Minibus Group Rombongan",
    tag: "14 - 20 Penumpang",
    desc: "Solusi hemat dan kompak untuk rombongan keluarga besar, gathering kantor, atau rombongan study tour dengan kabin tinggi dan kursi reclining yang lega.",
    features: [
      "Hiace Premio & Commuter",
      "Elf Long 19 Seat",
      "AC Dingin Merata",
      "Bagasi Rombongan",
    ],
    image: "/batam/paket-hiace/hiace-batam-city-barelang-tour.webp",
  },
  {
    title: "VIP Wedding Car & Acara Istimewa",
    tag: "Eksklusif & Mewah",
    desc: "Hadirkan kesan megah untuk momen resepsi pernikahan atau penjemputan tamu VVIP dengan Toyota Alphard Gen 4 berdekorasi pita elegan dan supir profesional.",
    features: [
      "Alphard Gen 4 & Zenix",
      "Dekorasi Pita Elegan",
      "Chauffeur Berpengalaman",
      "Layanan Prioritas",
    ],
    image: "/batam/armada/ALPHARD-GEN-4.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-16">
      {/* Hero Section */}
      <section className="bg-[#0b1728] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/batam"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white text-xs bg-slate-800/80 px-3.5 py-1.5 rounded-md border border-slate-700 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Kembali ke Beranda
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-3"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Layanan Chauffeur &amp; Rental Mobil Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Layanan Lengkap Sesuai Kebutuhan Perjalanan Anda
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Dari penjemputan bandara hingga mobil delegasi VIP. Percayakan
              kenyamanan perjalanan Anda di Batam kepada supir berlisensi kami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.018, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h2 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {service.features.map((f, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-1.5 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <motion.a
                    href={`https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20mau%20pesan%20layanan:%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Pesan via WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-16 bg-[#0b1728] text-white border-t border-slate-800">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Punya Rencana Perjalanan Dinas atau Wisata Rombongan?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-sm max-w-xl mx-auto"
          >
            Diskusikan jadwal Anda bersama tim kami. Kami sediakan unit terawat,
            supir standby tepat waktu, dan kwitansi resmi PT.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="pt-2 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 rounded-lg h-11 text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat WhatsApp CS 24 Jam
            </motion.a>
            <Link
              href="/batam/armada"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 rounded-lg px-7 h-11 text-sm font-semibold transition-colors"
            >
              Lihat Semua Pilihan Mobil
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

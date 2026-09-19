"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronDown,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const faqCategories = [
  {
    title: "Layanan & Pemesanan",
    questions: [
      {
        q: "Bagaimana cara memesan rental mobil dengan driver di VRN Batam?",
        a: "Pemesanan sangat praktis: hubungi kami melalui WhatsApp, tentukan tanggal, tipe mobil (Innova, Alphard, Zenix, Hiace, dll.), dan lokasi penjemputan (Bandara Hang Nadim, Ferry Terminal, atau Hotel). Kami kunci jadwal unit dengan DP ringan.",
      },
      {
        q: "Apakah bisa booking mendadak pada hari yang sama (same-day booking)?",
        a: "Bisa, selama unit dan driver tersedia pada slot jam tersebut. Namun untuk kenyamanan dan kepastian ketersediaan tipe mobil favorit (seperti Zenix dan Hiace), kami sarankan reservasi minimal 1 hari sebelumnya.",
      },
      {
        q: "Berapa durasi sewa harian dan ketentuan overtime?",
        a: "Durasi sewa harian standar adalah 12 jam pemakaian. Jika ada kebutuhan lembur untuk makan malam atau meeting larut, overtime dihitung transparan per jam (Rp 50.000 - Rp 100.000/jam tergantung unit).",
      },
    ],
  },
  {
    title: "Penjemputan Bandara & Ferry",
    questions: [
      {
        q: "Bagaimana proses penjemputan di Bandara Hang Nadim (BTH)?",
        a: "Driver kami akan standby sebelum jadwal pesawat Anda mendarat memegang nameboard (papan nama Anda) di gate kedatangan. Driver juga berkoordinasi via WhatsApp agar Anda langsung dipandu ke mobil tanpa repot mengangkat koper.",
      },
      {
        q: "Bagaimana jika penerbangan saya mengalami delay (keterlambatan)?",
        a: "Kami melacak nomor penerbangan Anda. Jika terjadi flight delay, driver kami tetap setia menunggu tanpa biaya penalti mendadak.",
      },
      {
        q: "Apakah melayani penjemputan di Pelabuhan Ferry Batam?",
        a: "Ya, kami melayani penjemputan di seluruh pelabuhan ferry: Batam Centre, Harbour Bay, Sekupang, dan Nongsapura untuk wisatawan dari Singapura maupun Malaysia.",
      },
    ],
  },
  {
    title: "Tarif & Pembayaran",
    questions: [
      {
        q: "Apa perbedaan paket Mobil + Supir dengan Paket All-In?",
        a: "Paket Mobil + Supir mencakup unit dan jasa supir (BBM dan parkir dibayar terpisah sesuai rute pemakaian). Paket All-In sudah mencakup unit, jasa supir, BBM harian, dan biaya parkir standar.",
      },
      {
        q: "Metode pembayaran apa saja yang didukung?",
        a: "Kami menerima transfer bank (BCA, Mandiri, BRI), QRIS, tunai (cash) ke driver pada hari penjemputan, serta Faktur/Invoice resmi untuk instansi perusahaan/kantor.",
      },
      {
        q: "Apakah VRN Batam berbadan hukum resmi PT?",
        a: "Ya, kami bernaung resmi di bawah PT. Vicky Rent Car Nusantara dengan izin operasional lengkap dan dapat menerbitkan kwitansi resmi bermaterai serta faktur tagihan pajak.",
      },
    ],
  },
];

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20ada%20pertanyaan%20tentang%20rental%20mobil%20di%20Batam";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-16">
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
                <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                Pusat Informasi &amp; Tanya Jawab
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Frequently Asked Questions (FAQ)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Temukan jawaban lengkap seputar tarif, ketentuan sewa, mekanisme
              penjemputan bandara, dan fasilitas supir kami di Batam.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === idx
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Accordion Questions */}
          <div className="space-y-3">
            {faqCategories[activeCategory].questions.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? "border-slate-300 bg-white shadow-sm"
                      : "border-slate-200 bg-slate-50/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-semibold text-sm sm:text-base transition-colors ${
                        isOpen
                          ? "text-slate-900 font-bold"
                          : "text-slate-700 group-hover:text-slate-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-slate-900 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-5 sm:p-6 rounded-xl bg-[#0B1728] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-sm font-bold text-white">
                Masih punya pertanyaan lain seputar sewa mobil di Batam?
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Customer service kami siap membantu konsultasi 24 jam via WhatsApp.
              </p>
            </div>
            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 px-5 rounded-lg shadow-sm transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat WhatsApp CS
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

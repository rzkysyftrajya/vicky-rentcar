"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20mau%20tanya%20detail%20sewa%20mobil";

const faqData = [
  {
    category: "Layanan & Harga",
    question: "Apakah harga sewa mobil sudah termasuk sopir dan BBM di Batam?",
    answer:
      "Kami menyediakan dua pilihan paket: (1) Paket Mobil + Supir: BBM dan parkir dibayar sesuai rute pemakaian Anda. (2) Paket All-In: Sudah mencakup mobil, jasa supir, BBM harian, dan biaya parkir standar. Seluruh rincian tarif disampaikan transparan di awal tanpa ada biaya tersembunyi.",
  },
  {
    category: "Penjemputan",
    question: "Bagaimana cara penjemputan di Bandara Hang Nadim & Pelabuhan Ferry?",
    answer:
      "Driver kami akan standby di area kedatangan (Arrival Gate) sebelum jadwal landing pesawat atau docking kapal ferry Anda dengan membawa papan nama (nameboard nama Anda). Driver juga mengonfirmasi posisi via WhatsApp sehingga Anda langsung diantar ke mobil tanpa perlu antre taksi.",
  },
  {
    category: "Durasi Sewa",
    question: "Berapa jam durasi sewa mobil harian dan bagaimana jika ada overtime?",
    answer:
      "Durasi sewa harian standar adalah 12 jam pemakaian. Jika Anda membutuhkan waktu tambahan untuk santap malam seafood atau urusan bisnis larut malam, overtime dihitung transparan per jam (Rp 50.000 - Rp 100.000/jam tergantung tipe kendaraan).",
  },
  {
    category: "Kualitas Driver",
    question: "Apakah driver ramah, rapi, dan paham spot wisata & kuliner terbaik di Batam?",
    answer:
      "Ya! Seluruh driver VRN Batam adalah warga lokal berlisensi dan berpengalaman yang hafal jalan tikus menghindari macet Nagoya, rute ke Jembatan Barelang, pelabuhan ke pulau wisata, hingga kawasan industri Batamindo dan Kabil.",
  },
  {
    category: "Perusahaan / Corporate",
    question: "Apakah melayani sewa untuk instansi dinas & corporate dengan invoice resmi?",
    answer:
      "Ya, kami bernaung di bawah PT. Vicky Rent Car Nusantara. Kami menyediakan invoice resmi, kwitansi, surat jalan, dan faktur pajak yang diperlukan untuk pertanggungjawaban kantor atau dinas.",
  },
  {
    category: "Pemesanan & DP",
    question: "Bagaimana cara pemesanan dan metode pembayarannya?",
    answer:
      "Pemesanan sangat praktis melalui WhatsApp: cukup pilih mobil, tanggal sewa, dan lokasi penjemputan. Kami kunci jadwal unit dengan DP ringan, dan pelunasan dapat ditransfer atau dibayarkan tunai ke driver saat hari penjemputan.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Pertanyaan Umum
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Informasi lengkap seputar rental mobil plus driver di Batam. Transparan, aman, dan tanpa biaya tak terduga.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-2.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-slate-300 bg-white shadow-sm"
                    : "border-slate-200 bg-slate-50/70"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-[15px] leading-snug transition-colors ${
                      isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-500"
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
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          className="mt-10 p-5 sm:p-6 rounded-xl bg-[#0B1728] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div>
            <h3 className="text-sm font-bold text-white">
              Punya pertanyaan lain atau rute khusus?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Customer service kami siap membantu konsultasi rute dan ketersediaan unit 24 jam.
            </p>
          </div>
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 px-5 rounded-lg shadow-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Tanya via WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Clock,
  UserCheck,
  ShieldCheck,
  FileText,
  MapPin,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Sopir Lokal Berpengalaman",
    description:
      "Driver warga Batam asli, hafal rute bebas macet, tahu rekomendasi kuliner seafood terbaik, dan berpenampilan rapi seragam.",
  },
  {
    icon: ShieldCheck,
    title: "Kabin Bersih & Wangi Terjamin",
    description:
      "Seluruh interior dibersihkan intensif sebelum penjemputan. AC dingin maksimal, bebas bau rokok, dan bebas bau hewan.",
  },
  {
    icon: Clock,
    title: "Garansi Tepat Waktu",
    description:
      "Driver standby sebelum jadwal. Flight delay di Hang Nadim? Kami tetap menunggu tanpa biaya penalti tambahan.",
  },
  {
    icon: MapPin,
    title: "Jangkauan Area Lengkap",
    description:
      "Bandara Hang Nadim, Batam Centre, Nagoya, Harbour Bay, Kabil, Nongsa, Barelang, dan seluruh kawasan industri Batam.",
  },
  {
    icon: FileText,
    title: "Invoice & Faktur Resmi PT",
    description:
      "Bernaung di bawah PT. Vicky Rent Car Nusantara. Kwitansi, surat jalan, dan faktur pajak siap untuk kebutuhan kantor.",
  },
  {
    icon: Headphones,
    title: "Respons WhatsApp 24 Jam",
    description:
      "CS aktif setiap hari tanpa libur. Konsultasi rute, cek unit tersedia, dan konfirmasi booking langsung via WhatsApp.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function KenapaVRNSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Keunggulan Kami
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Mengapa Memilih VRN Rent Car Batam?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Kami memprioritaskan ketepatan waktu, kenyamanan kabin, dan etika sopir untuk
            setiap perjalanan Anda di Pulau Batam.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B1728] flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                <item.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

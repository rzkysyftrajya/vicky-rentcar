"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Rent%20Car%20Batam,%20saya%20ingin%20konsultasi%20sewa%20mobil%20dan%20driver";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-16">
      {/* Hero Header */}
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
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                Pusat Bantuan &amp; Reservasi
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Hubungi VRN Rent Car Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Tim kami standby 24 jam untuk melayani pertanyaan jadwal
              penjemputan, cek unit mobil, dan penawaran korporat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* WhatsApp */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto text-emerald-600">
                <MessageCircle className="w-6 h-6 fill-emerald-600" />
              </div>
              <h2 className="text-base font-bold text-slate-900">WhatsApp CS</h2>
              <p className="text-sm font-semibold text-slate-900">
                +62 823-6338-9893
              </p>
              <p className="text-xs text-slate-500">Respon cepat &lt; 2 menit</p>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-9 rounded-lg mt-2 transition-colors shadow-sm"
              >
                Chat WhatsApp
              </motion.a>
            </motion.div>

            {/* Telephone */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto text-blue-700">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Panggilan Telepon
              </h2>
              <p className="text-sm font-semibold text-slate-900">
                +62 823-6338-9893
              </p>
              <p className="text-xs text-slate-500">Aktif 24 Jam Non-Stop</p>
              <motion.a
                href="tel:+6282363389893"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center w-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs h-9 rounded-lg mt-2 transition-colors"
              >
                Panggil Langsung
              </motion.a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto text-amber-700">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Area Operasional
              </h2>
              <p className="text-xs font-semibold text-slate-900 leading-snug">
                Bandara Hang Nadim, Batam Centre, Nagoya, Harbour Bay, Nongsa,
                &amp; Barelang
              </p>
              <p className="text-xs text-slate-500">
                Pulau Batam, Kepulauan Riau
              </p>
            </motion.div>
          </motion.div>

          {/* Operational detail banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-xl bg-slate-100 border border-slate-200 text-center space-y-2"
          >
            <h3 className="text-sm font-bold text-slate-900">
              Kebutuhan Penagihan &amp; Kerja Sama Perusahaan
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Untuk kerja sama sewa mobil dinas operasional kantor, instansi
              BUMN, atau kementerian dengan invoice resmi, silakan hubungi
              customer service kami.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

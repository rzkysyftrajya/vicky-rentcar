"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Users,
  MessageCircle,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Legalitas Resmi PT",
    description:
      "Bernaung di bawah PT. Vicky Rent Car Nusantara dengan perizinan lengkap dan faktur pajak resmi.",
  },
  {
    icon: Award,
    title: "Armada Terawat Prima",
    description:
      "Perawatan berkala di bengkel resmi, unit selalu dibersihkan dan disanitasi sebelum penjemputan.",
  },
  {
    icon: Users,
    title: "Supir Berpengalaman",
    description:
      "Driver lokal beretika santun, berseragam rapi, tidak merokok dalam kabin, dan hafal seluk-beluk rute Batam.",
  },
  {
    icon: Clock,
    title: "Layanan 24 Jam Nonstop",
    description:
      "Customer service responsif dan driver standby melayani jadwal landing pesawat pagi maupun malam.",
  },
];

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20ingin%20konsultasi%20sewa%20mobil%20dan%20driver";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function TentangPage() {
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
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Profil Perusahaan
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Tentang VRN Rent Car Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Mitra transportasi terpercaya di Kepulauan Riau. Kami berdedikasi
              menghadirkan pengalaman perjalanan yang aman, nyaman, dan tepat
              waktu.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            className="space-y-4 text-sm text-slate-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Komitmen Layanan Mobilitas Prima di Pulau Batam
            </h2>
            <p>
              VRN Rent Car Batam (bagian dari{" "}
              <strong>PT. Vicky Rent Car Nusantara</strong>) hadir untuk
              menjawab kebutuhan transportasi privat berkualitas tinggi di Kota
              Batam. Kami melayani beragam kebutuhan mulai dari penjemputan
              eksekutif di Bandara Internasional Hang Nadim (BTH), transfer
              ferry internasional Harbour Bay dan Batam Centre, hingga
              perjalanan dinas di kawasan industri Mukakuning, Kabil, Batu
              Ampar, dan Nongsa Digital Park.
            </p>
            <p>
              Kami mengutamakan profesionalisme supir beretika santun dan
              armada tahun muda yang selalu dijaga kebersihannya. Kami memahami
              bahwa mobilitas Anda di Batam menuntut ketepatan waktu dan
              kenyamanan tanpa kompromi.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.018, y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#0B1728] rounded-lg flex items-center justify-center text-emerald-400 font-bold">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-[#0b1728] text-white text-center">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold">
            Konsultasikan Kebutuhan Transportasi Anda di Batam
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto"
          >
            Tim customer service kami siap melayani reservasi dan menjawab
            pertanyaan Anda 24 jam sehari.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-2">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-7 h-11 rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Hubungi Kami via WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

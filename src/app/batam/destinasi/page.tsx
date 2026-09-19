"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  ChevronLeft,
  Compass,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const destinations = [
  {
    title: "Jembatan Barelang (Barelang Bridge)",
    description:
      "Landmark megah 6 jembatan yang menghubungkan Pulau Batam, Rempang, dan Galang. Spot foto terbaik dengan pemandangan laut Selat Melaka.",
    kategori: "Ikon Wisata",
    image: "/batam/destinasi/barelang-bridge.webp",
  },
  {
    title: "Nagoya Hill Shopping Center",
    description:
      "Pusat perbelanjaan terbesar dan terpopuler di Batam. Lengkap dengan sentra belanja tas branded, parfum, elektronik, dan aneka kuliner.",
    kategori: "Pusat Belanja",
    image: "/batam/destinasi/nagoya-hill.webp",
  },
  {
    title: "Batam Centre & Mega Mall",
    description:
      "Hub pusat bisnis dan pemerintahan yang terhubung langsung dengan Terminal Ferry Internasional Batam Centre menuju Singapura.",
    kategori: "Pusat Kota & Ferry",
    image: "/batam/destinasi/batam-centre.webp",
  },
  {
    title: "Sentra Kuliner Seafood & Pesisir",
    description:
      "Kawasan kelong terapung di pesisir Barelang dan Piayu Laut menyajikan hidangan kepiting, gonggong, dan ikan bakar segar.",
    kategori: "Kuliner Khas",
    image: "/batam/destinasi/tanjung-uma.webp",
  },
  {
    title: "Mega Mall Batam Centre",
    description:
      "Mall modern strategis di depan Kantor Walikota Batam, dekat pelabuhan ferry dengan berbagai tenant restoran dan bioskop.",
    kategori: "Belanja & Hiburan",
    image: "/batam/destinasi/mega-mall.webp",
  },
  {
    title: "Golden City Bengkong",
    description:
      "Area wisata rekreasi keluarga dengan wahana go-kart, factory outlet, replika rumah adat nusantara, dan restoran seafood.",
    kategori: "Rekreasi Keluarga",
    image: "/batam/destinasi/golden-city.webp",
  },
];

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20ingin%20sewa%20mobil%20untuk%20city%20tour%20destinasi%20Batam";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function DestinasiPage() {
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
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Destinasi Wisata Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Destinasi Wisata Populer di Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Eksplorasi tempat wisata ikonik, pusat belanja bebas pajak, dan
              kuliner seafood segar di Batam bersama supir lokal berpengalaman
              kami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Destinasi */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.018, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                      {item.kategori}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h2 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <motion.a
                    href={`${waLink}&text=Halo%20VRN%20Batam,%20saya%20ingin%20sewa%20mobil%20ke%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Pesan Mobil ke Lokasi Ini
                  </motion.a>
                </div>
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
            Ingin Rute City Tour Seharian Penuh?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto"
          >
            Tersedia paket sewa mobil 12 jam all-in (mobil + supir + BBM) untuk
            keliling destinasi favorit Batam tanpa repot.
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
              Konsultasi Jadwal City Tour
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

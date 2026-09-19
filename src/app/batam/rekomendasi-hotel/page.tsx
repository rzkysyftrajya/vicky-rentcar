"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MessageCircle,
  ChevronLeft,
  Building,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20sewa%20mobil%20antar%20jemput%20hotel%20di%20Batam";

const hotels = [
  {
    name: "HARRIS Hotel Batam Center",
    category: "Bisnis",
    description:
      "Lokasi strategis di depan Terminal Ferry Internasional Batam Centre dan Mega Mall.",
    image: "/batam/hotel/harris-batam-center.webp",
    rating: 4.5,
  },
  {
    name: "Radisson Golf & Convention Center",
    category: "Staycation",
    description:
      "Pemandangan lapangan golf hijau di Sukajadi dengan fasilitas meeting dan ballroom modern.",
    image: "/batam/hotel/radisson-golf-batam.webp",
    rating: 4.8,
  },
  {
    name: "Montigo Resorts Nongsa",
    category: "Keluarga",
    description:
      "Resort villa tepi laut dengan kolam renang pribadi, pas untuk liburan privat keluarga.",
    image: "/batam/hotel/montigo-resorts.webp",
    rating: 4.7,
  },
  {
    name: "Turi Beach Resort Nongsa",
    category: "Honeymoon",
    description:
      "Suasana romantis bernuansa tropis di tepi pantai Nongsa menghadap Selat Melaka.",
    image: "/batam/hotel/turi-beach-resorts.webp",
    rating: 4.6,
  },
  {
    name: "Swiss-Belhotel Harbour Bay",
    category: "Bisnis",
    description:
      "Terhubung langsung dengan area belanja dan terminal ferry Harbour Bay ke Singapura.",
    image: "/batam/hotel/swiss-belhotel-harbour-bay.webp",
    rating: 4.5,
  },
  {
    name: "Batam Marriott Hotel Harbour Bay",
    category: "Honeymoon",
    description:
      "Layanan bintang lima prestisius dengan rooftop bar menghadap waterfront Harbour Bay.",
    image: "/batam/hotel/batam-marriot-hotel-harbour-bay.webp",
    rating: 4.9,
  },
  {
    name: "Best Western Premier Panbil",
    category: "Staycation",
    description:
      "Hotel modern dekat kawasan industri Mukakuning dengan infinity pool berlatar Danau Duriangkang.",
    image: "/batam/hotel/best-western-premier-panbil.webp",
    rating: 4.6,
  },
  {
    name: "Aston Batam Hotel & Residence",
    category: "Bisnis",
    description:
      "Hotel modern di pusat kota Nagoya dengan akses cepat ke pusat kuliner dan perbelanjaan.",
    image: "/batam/hotel/aston-batam-hotel-residence.webp",
    rating: 4.6,
  },
  {
    name: "Nongsa Point Marina & Resort",
    category: "Keluarga",
    description:
      "Resort marina berstandar internasional dengan dermaga kapal yacht dan pantai berpasir.",
    image: "/batam/hotel/nongsa-point-marina-resort.webp",
    rating: 4.4,
  },
];

const categories = ["Semua", "Bisnis", "Keluarga", "Staycation", "Honeymoon"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function RekomendasiHotelPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredHotels = hotels.filter(
    (hotel) => activeCategory === "Semua" || hotel.category === activeCategory
  );

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
                <Building className="w-3.5 h-3.5 text-emerald-400" />
                Akomodasi Pilihan Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Rekomendasi Hotel Nyaman di Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Daftar akomodasi terbaik untuk perjalanan bisnis, liburan keluarga,
              maupun staycation. Driver kami siap melayani antar jemput tepat
              waktu.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 bg-white border-b border-slate-200 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "Semua" ? "Semua Hotel" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Grid */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.018, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-slate-900/90 text-white px-2 py-0.5 rounded-md text-xs flex items-center gap-1 font-bold">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {hotel.rating}
                      </div>
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-white/95 border border-slate-200 text-slate-800 text-[10px] font-bold">
                        {hotel.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h2 className="text-base font-bold text-slate-900">
                        {hotel.name}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {hotel.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <motion.a
                      href={`${waLink}&text=Halo%20VRN%20Batam,%20saya%20butuh%20sewa%20mobil%20antar%20jemput%20ke%20${encodeURIComponent(
                        hotel.name
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      Pesan Antar-Jemput ke Hotel Ini
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
            Butuh Supir Standby di Hotel Selama di Batam?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto"
          >
            Tersedia paket sewa mobil harian include driver yang siap standby di
            lobi hotel kapan pun Anda butuhkan.
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
              Chat WhatsApp CS 24 Jam
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

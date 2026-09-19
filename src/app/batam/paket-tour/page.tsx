"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  Sparkles,
  Compass,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const tourPackages = [
  {
    id: 1,
    name: "Paket Tour 3D2N Singapore – Malaysia",
    description:
      "Nikmati perjalanan mengeksplorasi Singapura dan Malaysia dalam 3 hari 2 malam. Logistik penyeberangan ferry dan rute wisata diatur rapi.",
    duration: "3 Hari 2 Malam",
    destinations: [
      "Johor",
      "Melaka",
      "Kuala Lumpur",
      "Genting",
      "Batu Caves",
      "Singapore",
    ],
    image: "/batam/PAKET-TOUR/3D2N-SINGAPORE-MALAYSIA.webp",
    highlights: ["Genting Highland", "Batu Caves", "Melaka Historic City"],
  },
  {
    id: 2,
    name: "Paket Tour 5 Hari 3 Negara",
    description:
      "Petualangan melintasi Singapura, Malaysia, dan Thailand dalam 5 hari dengan transportasi yang terorganisir bebas ribet.",
    duration: "5 Hari 3 Negara",
    destinations: [
      "Johor",
      "Melaka",
      "Kuala Lumpur",
      "Hatyai",
      "Genting",
      "Singapore",
    ],
    image: "/batam/PAKET-TOUR/5-HARI-3-NEGARA.webp",
    highlights: ["Hatyai Thailand", "Kuala Lumpur", "Genting Highland"],
  },
  {
    id: 3,
    name: "One Day Tour Singapore",
    description:
      "Kunjungan satu hari ke Singapura dari Batam. Eksplorasi spot ikonik Merlion Park, Garden by the Bay, dan sentra belanja Sentosa.",
    duration: "1 Hari",
    destinations: [
      "Garden by the Bay",
      "Merlion Park",
      "Masjid Sultan",
      "Bugis Street",
      "Sentosa Island",
    ],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-SINGAPORE.webp",
    highlights: ["Garden by the Bay", "Sentosa Island", "Merlion Park"],
  },
  {
    id: 4,
    name: "Tour Pulau Ranoh (Snorkeling & Pantai)",
    description:
      "Antar jemput ke dermaga wisata Pulau Ranoh. Nikmati pantai pasir putih eksotis, gazebo santai, dan aneka wahana air.",
    duration: "1 Hari",
    destinations: ["Ranoh Island", "Dermaga Barelang"],
    image: "/batam/PAKET-TOUR/TOUR-RANOH-ISLAND.webp",
    highlights: ["Snorkeling", "Banana Boat", "Pantai Pasir Putih"],
  },
  {
    id: 5,
    name: "One Day Tour Bintan (Gurun Pasir & Danau)",
    description:
      "Jelajahi keindahan Pulau Bintan dalam satu hari. Dari Gurun Pasir Telaga Biru yang eksotis hingga Laguna Treasure Bay.",
    duration: "1 Hari",
    destinations: [
      "Gurun Pasir Bintan",
      "Telaga Biru",
      "Lagoi Bay",
      "Treasure Bay",
    ],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BINTAN.webp",
    highlights: ["Treasure Bay", "Telaga Biru", "Gurun Pasir"],
  },
  {
    id: 6,
    name: "Tour Pulau Abang (Underwater Snorkeling)",
    description:
      "Eksplorasi terumbu karang dan ikan nemo di perairan jernih Pulau Abang lengkap dengan dokumentasi bawah air.",
    duration: "1 Hari",
    destinations: ["Pulau Abang", "Barelang Ujung"],
    image: "/batam/PAKET-TOUR/TOUR-PULAU-ABANG.webp",
    highlights: ["Snorkeling", "Island Hopping", "Dokumentasi Bawah Air"],
  },
  {
    id: 7,
    name: "One Day City Tour Batam & Barelang",
    description:
      "Jelajahi ikon Jembatan Barelang, santap seafood segar di restoran terapung Piayu, dan belanja oleh-oleh di Nagoya Hill.",
    duration: "1 Hari",
    destinations: [
      "Jembatan Barelang",
      "Nagoya Hill",
      "Seafood Piayu",
      "Masjid Sultan Mahmud",
    ],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BATAM.webp",
    highlights: ["Jembatan Barelang", "Nagoya Hill", "Kuliner Seafood"],
  },
];

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20dengan%20Paket%20Tour%20Batam";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function PaketTourPage() {
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
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Paket Wisata &amp; Tour Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Paket Wisata &amp; Tour Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Paket perjalanan privat dengan mobil terawat dan supir lokal yang
              memandu rute wisata Anda di Batam, Bintan, hingga lintas negara
              Singapura dan Malaysia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid Packages */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Katalog Wisata
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Katalog Paket Wisata Pilihan
            </h2>
            <p className="text-slate-500 text-sm">
              Pilih paket yang sesuai dengan rencana liburan keluarga atau
              rombongan kantor Anda.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tourPackages.map((tour) => (
              <motion.div
                key={tour.id}
                variants={fadeUp}
                whileHover={{ scale: 1.018, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                      {tour.duration}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h2 className="text-base font-bold text-slate-900">
                      {tour.name}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tour.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700">
                        Highlight Destinasi:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.map((hl, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <motion.a
                    href={`https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                      tour.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Klaim Diskon Hari Ini
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Tour CTA */}
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
            Butuh Rute Custom atau Jadwal Khusus?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto"
          >
            Kami siap mengatur itinerary khusus sesuai preferensi waktu dan
            tempat wisata yang ingin Anda kunjungi di Batam.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-2">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-7 h-11 rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Konsultasikan Rute via WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Luggage,
  ChevronLeft,
  Anchor,
  ShoppingBag,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
  Wind,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

interface HiacePackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  capacity: string;
  description: string;
  highlights: string[];
  features?: string[];
  isPopular?: boolean;
}

const hiacePackages: HiacePackage[] = [
  {
    id: "hiace-batam-city",
    name: "Hiace Batam City & Barelang Tour",
    tagline: "Kota Batam & Ikonik",
    image: "/batam/paket-hiace/hiace-batam-city-barelang-tour.webp",
    capacity: "14 Penumpang",
    description:
      "Kelilingi Jembatan Barelang, wisata belanja di Nagoya Hill, dan kuliner seafood Piayu tanpa takut sempit. Ruang bagasi luas menampung seluruh koper dan belanjaan.",
    highlights: ["Jembatan Barelang", "Belanja Nagoya", "Seafood Piayu"],
    features: ["BBM Termasuk", "Supir Berpengalaman", "Durasi 12 Jam"],
    isPopular: true,
  },
  {
    id: "hiace-ferry-singapore",
    name: "Hiace Ferry Transfer (Singapore & Malaysia)",
    tagline: "Transfer Pelabuhan",
    image: "/batam/paket-hiace/hiace-ferry-singapore-malaysia.webp",
    capacity: "Harbour Bay & Batam Centre",
    description:
      "Kejar ferry pagi ke Singapura atau Malaysia dengan tenang. Driver kami standby sebelum jadwal kapal tiba, siap membantu mengangkat seluruh koper rombongan.",
    highlights: ["Tepat Waktu", "Bantu Angkut Koper", "Standby di Terminal"],
    features: ["Batam Centre", "Harbour Bay", "Sekupang"],
    isPopular: true,
  },
  {
    id: "hiace-ranoh",
    name: "Hiace Ranoh Island Group Tour",
    tagline: "Wisata Pulau",
    image: "/batam/paket-hiace/paket-hiace-ranoh-island-group-tour.webp",
    capacity: "Wisata Bahari",
    description:
      "Menyeberang ke surga tropis Pulau Ranoh tanpa pusing transportasi darat. Kami antar jemput rombongan sampai dermaga penyeberangan dengan nyaman.",
    highlights: ["Antar Dermaga", "Full Day", "Bagasi Alat Wisata"],
    features: ["Antar Jemput Dermaga", "Driver Standby", "Unit Bersih"],
  },
  {
    id: "hiace-bintan",
    name: "Hiace Bintan & Treasure Bay Tour",
    tagline: "Lintas Pulau Bintan",
    image: "/batam/paket-hiace/hiace-bintan-treasure-bay-tour.webp",
    capacity: "Rombongan Lintas Pulau",
    description:
      "Petualangan rombongan ke Gurun Pasir Telaga Biru dan Treasure Bay Bintan via pelabuhan roro/speedboat Telaga Punggur.",
    highlights: ["Gurun Pasir", "Telaga Biru", "Treasure Bay"],
    features: ["Antar Pelabuhan Punggur", "Jadwal Fleksibel", "AC Dingin"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio VIP Executive",
    tagline: "VIP & Corporate",
    image: "/batam/paket-hiace/hiace-premio-luxury-batam.webp",
    capacity: "Tamu VIP & Dinas",
    description:
      "Memberikan kenyamanan terbaik bagi delegasi kantor atau keluarga besar. Suspensi empuk, kabin tinggi, dan interior lega khas Hiace Premio.",
    highlights: ["Interior Mewah", "Kabin Senyap", "Chauffeur Rapi"],
    features: ["Driver Rapi Berjas", "Unit Tahun Muda", "Air Mineral"],
  },
  {
    id: "hiace-kuliner",
    name: "Hiace Wisata Kuliner Seafood & Durian",
    tagline: "Foodie Trip",
    image: "/batam/paket-hiace/hiace-kuliner-durian-batam.webp",
    capacity: "Max 14 Penumpang",
    description:
      "Jelajahi kelong seafood segar di pesisir Barelang hingga sentra durian di Batam bersama driver lokal yang tahu lokasi terenak dan terjangkau.",
    highlights: ["Seafood Kelong", "Durian Batam", "Oleh-Oleh Khas"],
    features: ["Rute Rekomendasi Lokal", "AC Dingin Merata", "Waktu Fleksibel"],
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

export default function BatamHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20sewa%20Hiace%20untuk%20rombongan.%20Mohon%20info%20pricelist%20dan%20ketersediaan";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-12 pt-16">
      {/* Hero Section */}
      <section className="bg-[#0b1728] text-white pt-20 pb-16 sm:pb-20 border-b border-slate-800">
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
              Kembali ke Menu Utama
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
              <span className="inline-flex items-center gap-1.5 bg-slate-800 text-slate-200 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                Spesialis Rombongan &amp; Transfer Ferry Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
            >
              Sewa Toyota Hiace Batam <br />
              <span className="text-amber-400">
                14-Seat Plus Supir Berpengalaman
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Transportasi ideal untuk rombongan wisata asal Singapura dan
              Malaysia, dinas instansi, maupun gathering keluarga besar. Kabin
              luas, AC dingin merata, dan bagasi besar.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pt-3 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-7 h-11 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Cek Ketersediaan via WhatsApp
              </motion.a>
              <Link
                href="#paket"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-sm px-6 h-11 rounded-lg transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-slate-300" />
                Lihat Pilihan Paket
              </Link>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={fadeUp}
              className="pt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-300"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Bagasi Muat Koper Rombongan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Supir Paham Rute Pelabuhan &amp; Wisata</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AC Dingin Merata Sampai Baris Belakang</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md border border-slate-200 p-5 sm:p-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Users, label: "14-15 Kursi", sub: "Lega & Reclining" },
              { icon: Wind, label: "AC Ducting Dingin", sub: "Sampai Baris Belakang" },
              { icon: Luggage, label: "Bagasi Ekstra", sub: "Muat Koper & Belanjaan" },
              { icon: Anchor, label: "Antar Jemput Pelabuhan", sub: "Batam Centre / Harbour Bay" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Hiace */}
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
              Kelebihan Hiace
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Keunggulan Sewa Hiace untuk Rombongan di Batam
            </h2>
            <p className="text-slate-500 text-sm">
              Satu kendaraan untuk seluruh anggota rombongan, lebih hemat biaya
              daripada sewa beberapa mobil kecil terpisah.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#0B1728] rounded-lg flex items-center justify-center mb-4 text-emerald-400 font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Bagasi Luas untuk Belanja
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Belanja oleh-oleh, tas, dan parfum di Nagoya Hill? Bagasi Hiace
                sangat lapang sehingga belanjaan aman dan penumpang tetap duduk
                leluasa tanpa sempit.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#0B1728] rounded-lg flex items-center justify-center mb-4 text-emerald-400 font-bold">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Tepat Waktu ke Pelabuhan Ferry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jadwal ferry ke Singapura ketat? Driver kami hafal jalur
                tercepat ke Harbour Bay atau Batam Centre sehingga Anda tiba
                tepat waktu tanpa terburu-buru.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.018, y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#0B1728] rounded-lg flex items-center justify-center mb-4 text-emerald-400 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Nyaman untuk Jarak Jauh
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Perjalanan menuju Jembatan 6 Barelang atau pelabuhan wisata
                Pulau Ranoh tetap adem dan nyaman dengan kabin peredam suara dan
                AC ducting merata.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section id="paket" className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Pilihan Paket
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Pilihan Paket Sewa Hiace di Batam
            </h2>
            <p className="text-slate-500 text-sm">
              Dari penjemputan pelabuhan ferry, city tour harian, hingga trip
              wisata pulau sekeluarga.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hiacePackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                whileHover={{ scale: 1.018, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                      {pkg.capacity}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[11px] font-semibold text-blue-800">
                        {pkg.tagline}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        {pkg.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      {pkg.features?.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <motion.a
                    href={`https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                      pkg.name
                    )}.%20Mohon%20info%20ketersediaan%20unit.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Cek Promo Hiace via WA
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Phone,
  MessageCircle,
  Star,
  Check,
  ChevronLeft,
  Tag,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { batamCars as allCars, categories } from "@/data/batam-fleet-data";
import Footer from "@/components/batam/Footer";

const waBase = "https://wa.me/6282363389893";
const defaultWaLink = `${waBase}?text=Halo%20VRN%20Batam,%20saya%20ingin%20tanya%20penawaran%20harga%20promo%20dan%20ketersediaan%20armada%20mobil%20plus%20driver`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ArmadaPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredCars =
    activeCategory === "Semua"
      ? allCars
      : allCars.filter((car) => car.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-16">
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
                <Car className="w-3.5 h-3.5 text-emerald-400" />
                Katalog Armada Lengkap VRN Batam
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Pilihan Mobil Terawat &amp; Supir Berpengalaman
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Dapatkan penawaran tarif sewa terbaik dan promo diskon khusus hari
              ini. Seluruh unit siap jalan dengan supir lokal profesional yang
              ramah dan tepat waktu.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-2">
              <motion.a
                href={defaultWaLink}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 h-11 rounded-lg shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Klaim Promo Diskon Sewa Hari Ini via WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 bg-white border-b border-slate-200 sticky top-16 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category === "Semua" ? "Semua Kategori" : category}
              </button>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-2 text-xs">
            Menampilkan {filteredCars.length} unit mobil siap jalan di Pulau Batam
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            variants={staggerGrid}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredCars.map((car, index) => {
                const carWaLink = `${waBase}?text=Halo%20VRN%20Batam,%20saya%20ingin%20tanya%20penawaran%20harga%20promo%20dan%20ketersediaan%20untuk%20mobil%20${encodeURIComponent(
                  car.name
                )}%20plus%20driver.%20Apakah%20masih%20tersedia?`;

                return (
                  <motion.div
                    key={car.name}
                    variants={fadeUp}
                    whileHover={{ scale: 1.018, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative w-full aspect-[16/10] bg-slate-100 p-3 flex items-center justify-center border-b border-slate-100">
                        <Image
                          src={car.image}
                          alt={car.name}
                          fill
                          className="object-contain p-2"
                        />
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                          {car.category}
                        </span>
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Unit Siap Jalan
                        </span>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <h2 className="text-base font-bold text-slate-900 line-clamp-1">
                            {car.name}
                          </h2>

                          {/* Promo hook badge */}
                          <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between">
                            <div className="text-[11px] font-bold flex items-center gap-1">
                              <Tag className="w-3 h-3 text-amber-700" />
                              <span>Promo Spesial Hari Ini</span>
                            </div>
                            <span className="text-[10px] font-semibold text-blue-800 bg-white px-1.5 py-0.5 rounded border border-amber-200">
                              Diskon WA
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 my-2.5">
                            {car.specs.map((spec, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-1 pt-1">
                            {car.highlights.slice(0, 3).map((hl, hIdx) => (
                              <div
                                key={hIdx}
                                className="text-[11px] text-slate-600 flex items-center gap-1.5"
                              >
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <motion.a
                        href={carWaLink}
                        target="_blank"
                        rel="noreferrer"
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-1.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        Cek Harga Promo via WA
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-sm">
                Tidak ada mobil dalam kategori ini.
              </p>
              <button
                onClick={() => setActiveCategory("Semua")}
                className="text-blue-800 font-bold mt-2 hover:underline text-xs"
              >
                Lihat semua armada
              </button>
            </div>
          )}
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
            Butuh Rekomendasi Mobil Sesuai Rencana Perjalanan?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-sm max-w-xl mx-auto"
          >
            CS kami siap membantu memberikan penawaran harga paling hemat untuk
            durasi harian, mingguan, maupun penjemputan bandara.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="pt-2 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.a
              href={defaultWaLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 rounded-lg h-11 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Minta Penawaran Harga Spesial
            </motion.a>
            <motion.a
              href="tel:+6282363389893"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 rounded-lg px-7 h-11 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Hubungi +62 823-6338-9893
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

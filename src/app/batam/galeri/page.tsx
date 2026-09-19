"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const galleryPhotos = [
  { id: 1, src: "/batam/galeri/galeri-1.webp", alt: "Penjemputan Bandara Hang Nadim" },
  { id: 2, src: "/batam/galeri/galeri-2.webp", alt: "City Tour Jembatan Barelang" },
  { id: 3, src: "/batam/galeri/galeri-3.webp", alt: "Armada Zenix Standby" },
  { id: 4, src: "/batam/galeri/galeri-4.webp", alt: "Rombongan Hiace Premio" },
  { id: 5, src: "/batam/galeri/galeri-5.webp", alt: "Dermaga Pulau Wisata" },
  { id: 6, src: "/batam/galeri/galeri-6.webp", alt: "Layanan Tamu Corporate" },
  { id: 7, src: "/batam/galeri/galeri-7.webp", alt: "Wisata Belanja Nagoya" },
  { id: 8, src: "/batam/galeri/galeri-8.webp", alt: "Unit Innova Reborn Bersih" },
  { id: 9, src: "/batam/galeri/galeri-9.webp", alt: "Antar Jemput Pelabuhan Ferry" },
  { id: 10, src: "/batam/galeri/galeri-10.webp", alt: "Tour Keluarga Barelang" },
  { id: 11, src: "/batam/galeri/galeri-11.webp", alt: "Armada Alphard VIP" },
  { id: 12, src: "/batam/galeri/galeri-12.webp", alt: "Kunjungan Kawasan Industri" },
];

const videos = [
  { id: 1, src: "/batam/bandara/bandara1.mp4", alt: "Operasional Penjemputan Bandara Hang Nadim" },
  { id: 2, src: "/batam/bandara/bandara2.mp4", alt: "Armada Mobil & Driver Siap Jalan" },
];

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20ingin%20sewa%20mobil%20plus%20driver";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function GaleriPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

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
                <Camera className="w-3.5 h-3.5 text-emerald-400" />
                Dokumentasi Operasional
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            >
              Galeri Dokumentasi VRN Batam
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Dokumentasi nyata kegiatan penjemputan bandara, transfer pelabuhan
              ferry, kunjungan dinas, dan wisata rombongan bersama armada kami di
              Pulau Batam.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Video Operasional Kami
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Kesiapan supir dan armada kami melayani penjemputan di Batam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm"
              >
                <video
                  src={vid.src}
                  controls
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Foto Real
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Foto Dokumentasi Perjalanan
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Klik foto untuk memperbesar tampilan
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={fadeUp}
                className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 aspect-square cursor-pointer group shadow-sm hover:shadow-md transition-all"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryPhotos[lightboxIndex].src}
                alt={galleryPhotos[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute right-5 top-5 z-20 text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-800/80 hover:bg-slate-700 p-3 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (prev) =>
                    (prev! - 1 + galleryPhotos.length) % galleryPhotos.length
                );
              }}
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-800/80 hover:bg-slate-700 p-3 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % galleryPhotos.length);
              }}
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
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
            Siap Menjelajahi Batam dengan Nyaman?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto"
          >
            Hubungi customer service kami sekarang untuk mendapatkan penawaran
            rental mobil plus driver terbaik.
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
              Chat WhatsApp CS
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

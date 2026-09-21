"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  MessageCircle,
  Users,
  Car,
  Plane,
  Shield,
  Clock,
  Briefcase,
  Heart,
  Anchor,
  Compass,
  Building,
  FileText,
  ChevronRight,
  ArrowUp,
  X,
  ChevronLeft,
  Check,
  Tag,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import FaqSection from "@/components/batam/FaqSection";
import Footer from "@/components/batam/Footer";

const waBase = "https://wa.me/6282363389893";
const defaultWaLink = `${waBase}?text=Halo%20VRN%20Rent%20Car%20Batam,%20saya%20ingin%20tanya%20sewa%20mobil%20dengan%20driver`;

const faqSchema = [
  {
    "@type": "Question",
    name: "Apa syarat sewa mobil di Batam?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Syarat dan dokumen menyesuaikan pilihan layanan lepas kunci atau dengan sopir. Hubungi WhatsApp kami untuk verifikasi identitas, tanggal sewa, dan unit yang dipilih.",
    },
  },
  {
    "@type": "Question",
    name: "Apakah tersedia antar-jemput Bandara Hang Nadim dan pelabuhan?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ya. Kami melayani antar-jemput Bandara Hang Nadim serta Pelabuhan Batam Centre, Harbour Bay, Sekupang, dan Nongsapura.",
    },
  },
  {
    "@type": "Question",
    name: "Apakah bisa sewa mobil lepas kunci atau dengan sopir?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Tersedia pilihan lepas kunci dan paket dengan sopir profesional. Ketersediaan mengikuti tipe mobil, tanggal, dan kebutuhan perjalanan.",
    },
  },
  {
    "@type": "Question",
    name: "Apakah tersedia paket tour Batam?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Tersedia paket tour Batam, Barelang, pulau wisata, Bintan, serta perjalanan lintas negara dengan armada dan sopir yang dapat disesuaikan.",
    },
  },
];

const servicesList = [
  { id: "airport", name: "Antar Jemput Bandara Hang Nadim (BTH)", desc: "Driver standby di Arrival Gate dengan nameboard nama Anda" },
  { id: "ferry", name: "Transfer Pelabuhan Ferry Batam", desc: "Batam Centre, Harbour Bay, Sekupang, & Nongsapura" },
  { id: "citytour", name: "City Tour & Wisata Barelang (12 Jam)", desc: "Jembatan Barelang, kuliner seafood Piayu, belanja Nagoya" },
  { id: "corporate", name: "Dinas Kantor & Kawasan Industri", desc: "Batamindo, Kabil, Batu Ampar, & Nongsa Digital Park" },
  { id: "hiace", name: "Sewa Hiace Rombongan (14-Seat)", desc: "Family trip, outing kantor, dan study tour rombongan" },
];

const vehiclesList = [
  { id: "innova-reborn", name: "Innova Reborn", type: "Keluarga & Bisnis", promo: "Best Deal", image: "/batam/armada/INNOVA-REBORN.webp", capacity: "7 Penumpang" },
  { id: "innova-zenix", name: "Innova Zenix Hybrid", type: "Executive Premium", promo: "Unit Favorit", image: "/batam/armada/INNOVA-ZENIX.webp", capacity: "7 Penumpang" },
  { id: "alphard-gen4", name: "Alphard", type: "VIP Luxury", promo: "VIP Prioritas", image: "/batam/armada/ALPHARD-GEN-4.webp", capacity: "7 Penumpang (Captain)" },
  { id: "hiace-premio", name: "Hiace Premio", type: "Rombongan", promo: "14 Kursi Lega", image: "/batam/armada/HIACE-PREMIO.webp", capacity: "14 Penumpang" },
  { id: "avanza", name: "Toyota Avanza", type: "Ekonomis", promo: "Paling Hemat", image: "/batam/armada/TOYOTA-AVANZA.webp", capacity: "7 Penumpang" },
  { id: "fortuner", name: "Fortuner GR Sport", type: "SUV Prestisius", promo: "Gagah & Nyaman", image: "/batam/armada/FORTUNER-GR-4X2.webp", capacity: "7 Penumpang" },
];

const fleetData = [
  { name: "Toyota Alphard", category: "VIP", tag: "VIP Luxury", image: "/batam/armada/ALPHARD-GEN-4.webp", promoText: "Promo Diskon Khusus Hari Ini", seats: "7 Kursi", transmission: "Matic", specs: ["Captain Seat Otomatis", "Dual Sunroof & Audio VIP", "Driver Berpakaian Rapi", "Meet & Greet Bandara"] },
  { name: "Toyota Innova Zenix Hybrid", category: "Executive", tag: "Paling Diminati", image: "/batam/armada/INNOVA-ZENIX.webp", promoText: "Tersedia Penawaran Terbaik", seats: "7 Kursi", transmission: "Matic", specs: ["Kabin Senyap & Nyaman", "AC Digital Tri-Zone", "Keluarga & Tamu Bisnis", "Unit Bersih & Wangi"] },
  { name: "Toyota Innova Reborn", category: "Executive", tag: "Favorit Keluarga", image: "/batam/armada/INNOVA-REBORN.webp", promoText: "Tarif Hemat Spesial", seats: "7 Kursi", transmission: "Matic / Manual", specs: ["Suspensi Empuk", "Muat Koper Besar", "City Tour & Dinas", "Kondisi Prima"] },
  { name: "Toyota Hiace Premio", category: "Rombongan", tag: "14 Penumpang", image: "/batam/armada/HIACE-PREMIO.webp", promoText: "Paket Rombongan Diskon", seats: "14 Kursi", transmission: "Manual", specs: ["Kabin Luas & Tinggi", "Reclining Seat Nyaman", "Audio & Mic Tour Guide", "Antar Jemput Ferry/Bandara"] },
  { name: "Toyota Fortuner GR Sport", category: "SUV", tag: "SUV Tangguh", image: "/batam/armada/FORTUNER-GR-4X2.webp", promoText: "Diskon Kunjungan Proyek", seats: "7 Kursi", transmission: "Matic", specs: ["Ground Clearance Tinggi", "Kunjungan Lapangan & Proyek", "Interior Kulit Mewah", "Driver Berpengalaman"] },
  { name: "Toyota Avanza New", category: "Hemat", tag: "Hemat & Gesit", image: "/batam/armada/TOYOTA-AVANZA.webp", promoText: "Harga Paling Bersahabat", seats: "7 Kursi", transmission: "Matic / Manual", specs: ["Hemat Bahan Bakar", "Mudah Bermanuver", "AC Double Blower", "Supir Berpengalaman"] },
  { name: "Mitsubishi Xpander", category: "Hemat", tag: "Keluarga Praktis", image: "/batam/armada/XPANDER.webp", promoText: "Promo City Tour Keluarga", seats: "7 Kursi", transmission: "Matic", specs: ["Kabin Lega & Modern", "Peredaman Baik", "Keluarga & Belanja", "Driver Ramah"] },
  { name: "Isuzu Elf Minibus", category: "Rombongan", tag: "19-20 Penumpang", image: "/batam/armada/ISUZU-ELF-MINIBUS.webp", promoText: "Kapasitas Rombongan Besar", seats: "19 Kursi", transmission: "Manual", specs: ["Kapasitas Maksimal", "Rombongan Besar & Tour", "Bagasi Rombongan Luas", "Driver Khusus Wisata"] },
];

const servicesDetail = [
  { icon: Plane, title: "Antar Jemput Bandara Hang Nadim (BTH)", desc: "Driver kami standby di gate kedatangan dengan nameboard nama Anda sebelum pesawat mendarat. Bagasi dibantu penuh sampai masuk ke mobil." },
  { icon: Anchor, title: "Transfer Pelabuhan Ferry Batam", desc: "Penjemputan terorganisir di Terminal Ferry Batam Centre, Harbour Bay, Sekupang, dan Nongsapura untuk wisatawan asal Singapura dan Malaysia." },
  { icon: Briefcase, title: "Chauffeur Bisnis & Kawasan Industri", desc: "Armada terawat dengan driver berseragam rapi untuk dinas kementerian, BUMN, dan tamu perusahaan ke Batamindo, Kabil, Batu Ampar, dan Nongsa Digital Park." },
  { icon: Compass, title: "City Tour & Wisata Barelang", desc: "Rute wisata santai mengunjungi Jembatan Barelang 1-6, wisata belanja Nagoya, dan santap seafood segar di restoran terapung Piayu Laut." },
  { icon: Users, title: "Sewa Hiace & Minibus Rombongan", desc: "Kapasitas 14 hingga 20 kursi untuk rombongan keluarga besar, gathering perusahaan, atau rombongan dinas instansi." },
  { icon: Heart, title: "Mobil Pengantin & VIP Event", desc: "Toyota Alphard Gen 4 dan Zenix Hybrid berdekorasi elegan untuk resepsi pernikahan atau penjemputan tamu kenegaraan di Batam." },
];

const tourPackages = [
  { name: "Paket Wisata Barelang & Seafood Batam", duration: "1 Hari (Full Day)", image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BATAM.webp", desc: "Eksplor Jembatan Barelang, santap seafood kepiting & gonggong di Piayu, wisata belanja Nagoya, dan ikon Kota Batam.", features: ["Mobil + Driver Berpengalaman", "BBM & Parkir", "Air Mineral", "Jemput Hotel / Bandara"] },
  { name: "Tour Pulau Ranoh (Snorkeling & Pantai)", duration: "1 Hari", image: "/batam/PAKET-TOUR/TOUR-RANOH-ISLAND.webp", desc: "Antar jemput armada privat ke dermaga penyeberangan Pulau Ranoh. Nikmati pantai pasir putih dan water sport bahari.", features: ["Antar Jemput Mobil Privat", "Driver Standby di Dermaga", "Termasuk BBM"] },
  { name: "One Day Tour Bintan (Gurun Pasir & Danau)", duration: "1 Hari", image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BINTAN.webp", desc: "Menyeberang ke Pulau Bintan via ferry Roro/Speedboat. Eksplor Gurun Pasir Telaga Biru dan destinasi wisata Bintan.", features: ["Antar Jemput Pelabuhan Telaga Punggur", "Unit Standby", "Jadwal Fleksibel"] },
  { name: "Paket Tour 3D2N Singapore – Malaysia", duration: "3 Hari 2 Malam", image: "/batam/PAKET-TOUR/3D2N-SINGAPORE-MALAYSIA.webp", desc: "Perjalanan lintas negara start dari Batam. Nikmati Jewel Changi, Merlion Park, Menara Petronas KLCC, dan Genting Highlands.", features: ["Transportasi Terorganisir", "Rute Efisien", "Handling Ferry"] },
];

const reviewsData = [
  { name: "Bambang Sudibyo", role: "Direktur Operasional, Jakarta", car: "Toyota Alphard Gen 4", comment: "Sangat puas dengan layanan VRN Batam. Driver tepat waktu di Bandara Hang Nadim dengan papan nama, pakaian rapi, dan paham rute kawasan industri Kabil. Invoice resmi PT pun langsung dikirim via email. Sangat profesional.", rating: 5 },
  { name: "David Tan", role: "Wisatawan, Singapore", car: "Innova Zenix Hybrid", comment: "Booked 2 days for family trip from Harbour Bay Ferry Terminal. The driver Mr. Rizal was very helpful, car was clean and comfortable. He brought us to the best seafood in Barelang. Recommended!", rating: 5 },
  { name: "Siti Rahmania", role: "Keluarga Liburan, Medan", car: "Toyota Hiace Premio", comment: "Rombongan 12 orang sewa Hiace Premio. Mobilnya lega banget, AC dingin, driver sabar nemenin kami belanja di Nagoya Hill dan foto di Barelang. Harga transparan tanpa biaya tambahan aneh-aneh.", rating: 5 },
];

const destinations = [
  { name: "Jembatan Barelang", category: "Ikon Kota Batam", image: "/batam/destinasi/barelang-bridge.webp", desc: "Landmark bersejarah 6 jembatan penghubung pulau." },
  { name: "Nagoya Hill & Grand Batam", category: "Pusat Perbelanjaan", image: "/batam/destinasi/nagoya-hill.webp", desc: "Pusat belanja tas, parfum, dan ragam kuliner khas." },
  { name: "Pantai Nongsa Coast", category: "Wisata Pantai & Resort", image: "/batam/destinasi/tanjung-uma.webp", desc: "Pantai pasir putih dengan pemandangan pesisir Singapura." },
  { name: "Batam Centre & Mega Mall", category: "Pusat Pemerintahan & Ferry", image: "/batam/destinasi/mega-mall.webp", desc: "Hub internasional pelabuhan ferry Singapura & Malaysia." },
];

const galleryItems = [
  { type: "image", src: "/batam/galeri/galeri-1.webp", alt: "Penjemputan Bandara Hang Nadim" },
  { type: "video", src: "/batam/bandara/bandara1.mp4", alt: "Video Layanan Bandara Batam" },
  { type: "image", src: "/batam/galeri/galeri-2.webp", alt: "Trip Wisata Barelang" },
  { type: "image", src: "/batam/galeri/galeri-3.webp", alt: "Armada Zenix & Alphard Standby" },
  { type: "image", src: "/batam/galeri/galeri-5.webp", alt: "Dermaga Wisata Pulau" },
  { type: "video", src: "/batam/bandara/bandara2.mp4", alt: "Video Unit Siap Jalan" },
  { type: "image", src: "/batam/galeri/galeri-4.webp", alt: "Rombongan Hiace Premio" },
  { type: "image", src: "/batam/galeri/galeri-6.webp", alt: "Layanan Corporate VIP" },
];

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function BatamHomePage() {
  const [selectedService, setSelectedService] = useState(servicesList[0].id);
  const [selectedVehicle, setSelectedVehicle] = useState(vehiclesList[0].id);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  const imageItems = galleryItems.filter((item) => item.type === "image");

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const activeServiceObj = servicesList.find((s) => s.id === selectedService) || servicesList[0];
  const activeVehicleObj = vehiclesList.find((v) => v.id === selectedVehicle) || vehiclesList[0];
  const customWaText = encodeURIComponent(
    `Halo VRN Rent Car Batam, saya ingin tanya penawaran harga promo dan ketersediaan untuk layanan: "${activeServiceObj.name}" dengan mobil: "${activeVehicleObj.name}". Apakah masih tersedia?`
  );
  const calculatedWaLink = `${waBase}?text=${customWaText}`;
  const filteredFleet = activeCategory === "Semua" ? fleetData : fleetData.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ======================================================= */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================= */}
      <section className="relative overflow-hidden bg-[#0b1728] text-white pt-28 pb-14 lg:pt-32 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/batam/hero-section.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Rental Mobil &amp; Supir Terpercaya di Batam
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                Rental &amp; Sewa Mobil Batam <br />
                <span className="text-amber-400">Plus Driver Profesional.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Vicky Rentcar Nusantara menyediakan sewa mobil Batam untuk perjalanan wisata,
                bisnis, dan keluarga, dengan pilihan lepas kunci atau plus sopir. Nikmati
                antar-jemput Bandara Hang Nadim serta Pelabuhan Harbour Bay dan Batam Centre.
                Armada bersih, nyaman, dan terawat didukung sopir lokal yang ramah serta tepat waktu.
              </motion.p>

              {/* 4 Trust Points */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-left">
                {[
                  { title: "Meet & Greet", desc: "Papan Nama di Bandara" },
                  { title: "Sopir Berpengalaman", desc: "Paham Rute Bebas Macet" },
                  { title: "Pilihan All-In", desc: "Mobil + Supir + BBM" },
                  { title: "Faktur Pajak PT", desc: "Resmi untuk Kantor" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <motion.a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Pesan &amp; Cek Promo via WA (24 Jam)
                </motion.a>
                <Link
                  href="/batam/armada"
                  className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
                >
                  Lihat Pilihan Mobil &amp; Promo
                </Link>
              </motion.div>

              {/* Rating */}
              <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
                <span className="font-semibold text-slate-200">Rating 4.9 / 5.0</span>
                <span>(Berdasarkan 500+ Pengguna di Batam)</span>
              </motion.div>
            </motion.div>

            {/* Right Booking Card */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-200 text-slate-900">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold text-slate-900">Cek Ketersediaan &amp; Promo via WA</h2>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                      Promo Hari Ini
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Pilih mobil dan kebutuhan Anda untuk klaim diskon khusus</p>
                </div>

                {/* Step 1 */}
                <div className="space-y-1.5 mb-4">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">1. Jenis Layanan di Batam:</label>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex items-center justify-between ${
                          selectedService === service.id
                            ? "bg-blue-50 border-blue-600 text-blue-950 font-semibold"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-[11px] text-slate-500">{service.desc}</div>
                        </div>
                        {selectedService === service.id && (
                          <Check className="w-4 h-4 text-blue-700 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-1.5 mb-5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex justify-between">
                    <span>2. Pilihan Mobil:</span>
                    <span className="text-slate-500 font-normal text-[11px]">{activeVehicleObj.capacity}</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {vehiclesList.map((car) => (
                      <button
                        key={car.id}
                        type="button"
                        onClick={() => setSelectedVehicle(car.id)}
                        className={`p-2 rounded-lg border text-center transition-colors flex flex-col items-center justify-center ${
                          selectedVehicle === car.id
                            ? "bg-blue-50 border-blue-600 font-bold shadow-sm"
                            : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <div className="relative w-12 h-8 mb-1">
                          <Image src={car.image} alt={car.name} fill className="object-contain" />
                        </div>
                        <div className="text-[11px] font-bold text-slate-900 line-clamp-1">{car.name}</div>
                        <div className="text-[10px] text-amber-700 font-semibold mt-0.5">{car.promo}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary & CTA */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Status Penawaran:</span>
                    <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Diskon Spesial WhatsApp Aktif
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Termasuk Jasa Supir Profesional &amp; Mobil Bersih</span>
                  </div>
                  <motion.a
                    href={calculatedWaLink}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-11 rounded-lg shadow-sm transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Cek Harga Promo Unit Ini via WA
                  </motion.a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2. QUICK SITELINKS BAR                                   */}
      {/* ======================================================= */}
      <div className="bg-white border-b border-slate-200 sticky top-[57px] sm:top-[88px] z-30 shadow-sm py-2.5 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 min-w-max sm:justify-center">
            {[
              { href: "/batam/armada", label: "Pilihan Mobil" },
              { href: "/batam/layanan", label: "Layanan Supir" },
              { href: "/batam/hiace", label: "Hiace Rombongan" },
              { href: "/batam/paket-tour", label: "Paket Wisata" },
              { href: "/batam/destinasi", label: "Destinasi" },
              { href: "#reviews", label: "Review Pengguna" },
              { href: "/batam/faq", label: "FAQ" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-medium shrink-0 transition-colors border border-slate-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Pilihan Armada Batam</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Rental Mobil Batam untuk Setiap Kebutuhan</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pilih unit sesuai jumlah penumpang, gaya perjalanan, dan agenda Anda. Tim kami membantu
              mencocokkan armada serta paket perjalanan dengan harga yang jelas sejak awal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <article className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-2">Sewa Mobil Alphard &amp; Luxury Batam</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rental mobil Alphard Batam dan sewa mobil Alphard Batam cocok untuk tamu VIP,
                pernikahan, dan perjalanan bisnis. Tersedia sewa mobil premium Batam serta rental
                mobil Luxury Batam dengan sopir profesional.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-2">Rental Fortuner Batam</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sewa mobil Fortuner Batam dan rental mobil Fortuner Batam memberikan kabin nyaman
                serta ground clearance untuk agenda kantor, proyek, dan city tour.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-2">Innova Reborn &amp; Zenix</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rental mobil Innova Batam dan sewa mobil Innova Batam menjadi pilihan praktis untuk
                keluarga. Untuk kenyamanan modern, tersedia rental mobil Zenix Batam dan sewa mobil
                Zenix Batam.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-2">Hiace &amp; Paket Tour Batam</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rental mobil Hiace Batam dan sewa mobil Hiace Batam siap untuk rombongan. Lengkapi
                perjalanan dengan paket tour Batam ke Barelang, pulau wisata, atau Bintan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 3. VALUE PROPOSITIONS                                    */}
      {/* ======================================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Keunggulan Layanan</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Mengapa Memilih VRN Rent Car Batam?</h2>
            <p className="text-slate-500 text-sm">Kami memprioritaskan ketepatan waktu, kenyamanan kabin, dan etika sopir untuk setiap perjalanan Anda.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Plane, title: "Garansi Flight Delay", desc: "Pesawat landing terlambat di Hang Nadim? Driver kami tetap setia menunggu tanpa biaya penalti tambahan." },
              { icon: MapPin, title: "Sopir Lokal Paham Rute", desc: "Hafal rute bebas macet seputar Batam Centre & Nagoya, serta tahu rekomendasi kuliner seafood terbaik." },
              { icon: Shield, title: "Mobil Bersih & Terawat", desc: "Seluruh kabin dibersihkan rutin sebelum penjemputan. AC dingin maksimal dan bebas dari bau rokok." },
              { icon: FileText, title: "Faktur Resmi Corporate", desc: "Melayani instansi BUMN, kementerian, dan perusahaan swasta dengan faktur tagihan dan kwitansi resmi PT." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1728] flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4. FLEET SECTION                                         */}
      {/* ======================================================= */}
      <section id="armada" className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-8 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Katalog Armada</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Katalog Armada Mobil Pilihan</h2>
            <p className="text-slate-500 text-sm">Tersedia diskon spesial dan promo sewa mobil harian plus driver. Hubungi kami untuk penawaran terbaik.</p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {["Semua", "VIP", "Executive", "Rombongan", "SUV", "Hemat"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat === "Semua" ? "Semua Mobil" : cat}
              </button>
            ))}
          </div>

          {/* Fleet Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory}
          >
            <AnimatePresence>
              {filteredFleet.map((car, index) => {
                const carWa = `${waBase}?text=Halo%20VRN%20Batam,%20saya%20mau%20tanya%20penawaran%20harga%20promo%20dan%20ketersediaan%20untuk%20mobil%20${encodeURIComponent(car.name)}%20plus%20driver`;
                return (
                  <motion.div
                    key={car.name}
                    variants={fadeUp}
                    whileHover={{ scale: 1.018, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-slate-100 border-b border-slate-100 flex items-center justify-center">
                      <Image
                        src={car.image}
                        alt={`${car.name} - rental mobil ${car.name.replace("Toyota ", "")} Batam`}
                        fill
                        className="object-contain p-3"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                        {car.tag}
                      </span>
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Unit Ready
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2">{car.name}</h3>

                      <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-between">
                        <div className="text-[11px] font-bold flex items-center gap-1">
                          <Tag className="w-3 h-3 text-amber-700" />
                          <span>{car.promoText}</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-800 bg-white px-1.5 py-0.5 rounded border border-amber-200">
                          Diskon WA
                        </span>
                      </div>

                      <div className="space-y-1 flex-1">
                        {car.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href={carWa}
                        target="_blank"
                        rel="noreferrer"
                        whileTap={{ scale: 0.97 }}
                        className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-10 rounded-lg shadow-sm transition-colors"
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

          <div className="mt-8 text-center">
            <Link
              href="/batam/armada"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-11 px-7 rounded-lg shadow-sm transition-colors"
            >
              Buka Halaman Lengkap Semua Armada
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 5. SERVICES SECTION                                      */}
      {/* ======================================================= */}
      <section id="layanan" className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Layanan Kami</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Layanan Utama VRN Batam</h2>
            <p className="text-slate-500 text-sm">Solusi transportasi yang disesuaikan untuk kebutuhan pribadi, dinas kantor, maupun rombongan wisata.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesDetail.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0B1728] flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                    <service.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href={`${waBase}?text=Halo%20VRN%20Batam,%20saya%20tertarik%20dengan%20layanan:%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-900 transition-colors"
                  >
                    <span>Konsultasikan via WA</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 6. HIACE ROMBONGAN                                       */}
      {/* ======================================================= */}
      <section id="hiace-section" className="py-14 sm:py-16 bg-[#0B1728] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              className="lg:col-span-7 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Sewa Mobil Rombongan Batam
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-white">
                Toyota Hiace Premio 14-Seat untuk Keluarga &amp; Kantor
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-300 text-sm leading-relaxed">
                Pilihan tepat untuk rombongan wisata dari Singapura/Malaysia, family gathering, atau study tour.
                Satu kendaraan untuk seluruh anggota, kabin lega, dan AC dingin merata hingga baris belakang.
              </motion.p>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-2.5 pt-2">
                {["Kapasitas 14 Kursi Reclining", "Driver Khusus Rombongan Wisata", "Bagasi Koper Luas & Aman", "Tersedia Paket All-In BBM"].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap items-center gap-3">
                <motion.a
                  href={`${waBase}?text=Halo%20VRN%20Batam,%20saya%20ingin%20sewa%20Hiace%20Premio`}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 h-11 rounded-lg transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Booking Hiace WhatsApp
                </motion.a>
                <Link
                  href="/batam/hiace"
                  className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white rounded-lg h-11 px-5 text-xs font-semibold transition-colors"
                >
                  Lihat Rincian Paket Hiace
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image src="/batam/paket-hiace/hiace-batam-city-barelang-tour.webp" alt="Hiace Premio Batam" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 7. TOUR PACKAGES                                         */}
      {/* ======================================================= */}
      <section id="tour-packages" className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Paket Wisata</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Paket Wisata Populer Batam &amp; Lintas Negara</h2>
            <p className="text-slate-500 text-sm">Nikmati perjalanan terencana lengkap dengan kendaraan privat dan driver yang memandu rute wisata Anda.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tourPackages.map((tour, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={tour.image} alt={tour.name} fill className="object-cover" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0B1728] text-white text-[10px] font-bold">
                    {tour.duration}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{tour.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{tour.desc}</p>
                  <div className="space-y-1 flex-1 mb-4 pt-2 border-t border-slate-100">
                    {tour.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a
                    href={`${waBase}?text=Halo%20VRN%20Batam,%20saya%20ingin%20tanya%20paket:%20${encodeURIComponent(tour.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs h-9 rounded-lg transition-colors"
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

      {/* ======================================================= */}
      {/* 8. DESTINATIONS                                          */}
      {/* ======================================================= */}
      <section id="destinasi" className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Destinasi Wisata</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Spot Wisata &amp; Destinasi Populer Batam</h2>
            <p className="text-slate-500 text-sm">Driver kami siap mengantar dan standby di lokasi belanja, hotel, maupun destinasi wisata pilihan Anda.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((dest, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Clean gradient overlay — no text on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                {/* Text only at bottom, minimal */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wide">{dest.category}</p>
                  <h3 className="text-sm font-bold mt-0.5">{dest.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 text-center">
            <Link href="/batam/destinasi" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-900 transition-colors">
              Lihat Semua Destinasi Batam
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 9. REVIEWS                                               */}
      {/* ======================================================= */}
      <section id="reviews" className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Ulasan Nyata</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Ulasan Pelanggan VRN Batam</h2>
            <p className="text-slate-500 text-sm">Pengalaman nyata dari pelanggan korporat dan wisatawan yang telah menggunakan jasa kami.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviewsData.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                    <div className="text-[11px] text-slate-500">{review.role}</div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 font-medium">
                    {review.car}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 10. GALLERY                                              */}
      {/* ======================================================= */}
      <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-8 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Galeri Operasional</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Dokumentasi Operasional di Batam</h2>
            <p className="text-slate-500 text-sm">Dokumentasi nyata kegiatan penjemputan bandara, perjalanan dinas, dan wisata bersama pelanggan.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 aspect-square group shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  if (item.type === "image") {
                    setLightboxIndex(imageItems.findIndex((img) => img.src === item.src));
                  }
                }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Hover overlay — clean, no text */}
                {item.type === "image" && (
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15 transition-colors duration-300" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
              className="relative h-[82vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imageItems[lightboxIndex].src}
                alt={imageItems[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            {/* Controls */}
            <button
              className="absolute right-5 top-5 z-20 text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-800/80 hover:bg-slate-700 p-3 text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + imageItems.length) % imageItems.length); }}
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-800/80 hover:bg-slate-700 p-3 text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % imageItems.length); }}
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================= */}
      {/* 11. FAQ                                                  */}
      {/* ======================================================= */}
      <FaqSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema,
          }),
        }}
      />

      {/* ======================================================= */}
      {/* 12. BOTTOM CONVERSION BANNER                             */}
      {/* ======================================================= */}
      <section className="py-14 sm:py-16 bg-[#0b1728] text-white text-center">
        <motion.div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-4xl font-extrabold text-white">
            Butuh Mobil &amp; Driver di Batam Sekarang?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-300 text-sm sm:text-base">
            Hubungi CS kami untuk konsultasi rute, cek ketersediaan armada, dan dapatkan penawaran promo harga terbaik.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href={defaultWaLink}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Hubungi Kami via WhatsApp
            </motion.a>
            <Link
              href="/batam/armada"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
            >
              Lihat Semua Armada
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ======================================================= */}
      {/* 13. FOOTER                                               */}
      {/* ======================================================= */}
      <Footer />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollTop}
            className="fixed bottom-24 right-5 sm:right-6 z-40 h-10 w-10 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 flex items-center justify-center transition-colors"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
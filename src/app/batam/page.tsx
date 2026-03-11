"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Users,
  Car,
  Plane,
  Shield,
  Clock,
  KeyRound,
  Briefcase,
  Heart,
  Map,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeMotionDiv } from "@/components/ui/safe-motion";

import FaqSection from "@/components/batam/FaqSection";
import PromoLebaranModal from "@/components/batam/PromoLebaranModal";
import PromoLebaranSection from "@/components/batam/PromoLebaranSection";
import Footer from "@/components/batam/Footer";

const inter = Inter({ subsets: ["latin"] });

const waLink =
  "https://wa.me/6282363389893?text=Halo,%20saya%20mau%20tanya%20ketersediaan%20mobil%20di%20Batam";

const popularCars = [
  {
    name: "Toyota Avanza",
    label: "Unit Favorit",
    image: "/batam/armada/TOYOTA-AVANZA.webp",
    price: "Mulai 300rb",
    specs: ["7 Seater", "Manual/Matic", "Bensin"],
  },
  {
    name: "Toyota Innova Reborn",
    label: "Paling Laris",
    image: "/batam/armada/INNOVA-REBORN.webp",
    price: "Mulai 500rb",
    specs: ["7 Seater", "Diesel/Bensin", "Nyaman"],
  },
  {
    name: "Brio",
    label: "Unit Favorit",
    image: "/batam/armada/BRIO.webp",
    price: "Mulai 250rb",
    specs: ["5 Seater", "Matic", "Irit BBM"],
  },
  {
    name: "Agya",
    label: "Paling Laris",
    image: "/batam/armada/AGYA.webp",
    price: "Mulai 250rb",
    specs: ["5 Seater", "Manual", "Compact"],
  },
  {
    name: "Toyota Innova Zenix",
    label: "Premium Choice",
    image: "/batam/armada/INNOVA-ZENIX.webp",
    price: "Mulai 800rb",
    specs: ["7 Seater", "Hybrid", "Mewah"],
  },
  {
    name: "Toyota Alphard",
    label: "Premium Choice",
    image: "/batam/armada/ALPHARD-GEN-4.webp",
    price: "Mulai 2.5jt",
    specs: ["7 Seater", "Pilot Seat", "VIP"],
  },
  {
    name: "Toyota Fortuner",
    label: "Paling Laris",
    image: "/batam/armada/FORTUNER.webp",
    price: "Mulai 1.2jt",
    specs: ["7 Seater", "Sporty", "Tangguh"],
  },
  {
    name: "Mitsubishi Pajero",
    label: "Unit Favorit",
    image: "/batam/armada/PAJERO.webp",
    price: "Mulai 1.2jt",
    specs: ["7 Seater", "Sporty", "Premium"],
  },
];

const testimonials = [
  {
    name: "Andi Hermawan",
    rating: 5,
    comment:
      "Pelayanannya cepat dan ramah. Mobilnya bersih dan wangi. Recommended banget buat yang butuh mobil di Batam!",
  },
  {
    name: "Keluarga Santoso",
    rating: 5,
    comment:
      "Bookingnya gampang lewat WhatsApp, mobil diantar tepat waktu. Liburan keluarga di Batam jadi lancar.",
  },
  {
    name: "Rina Wulandari",
    rating: 5,
    comment:
      "Butuh mobil dadakan untuk jemput klien di bandara, langsung direspon. Profesional dan sangat membantu.",
  },
];

const googleReviews = [
  {
    name: "Ahmad Z.",
    rating: 5,
    comment: "Fast response, clean car, very recommended for family trip in Batam. Will use their service again for sure!",
  },
  {
    name: "Samantha L.",
    rating: 5,
    comment: "Easy booking process from Singapore. The driver was professional and on time for airport pickup. Excellent service!",
  },
  {
    name: "Ismail H.",
    rating: 5,
    comment: "Servis terbaik di Batam. Kereta baru dan bersih. Proses sewa lepas kunci pun senang. Mantap!",
  },
];

const destinations = [
  {
    name: "Jembatan Barelang",
    image: "/batam/destinasi/barelang-bridge.webp",
    description: "Ikon kota Batam yang menghubungkan 6 pulau.",
  },
  {
    name: "Nagoya Hill Mall",
    image: "/batam/destinasi/nagoya-hill.webp",
    description: "Pusat perbelanjaan terbesar dan terpopuler.",
  },
  {
    name: "Pantai Nongsa",
    image: "/batam/destinasi/tanjung-uma.webp",
    description: "Pantai indah dengan pemandangan Singapura.",
  },
  {
    name: "Mega Mall",
    image: "/batam/destinasi/mega-mall.webp",
    description: "Pusat perbelanjaan terlengkap di pusat kota.",
  },
];

const hotels = [
  {
    name: "Montigo Resorts",
    image: "/batam/hotel/montigo-resorts.webp",
    rating: "5 Star",
    location: "Nongsa",
  },
  {
    name: "Radisson Golf",
    image: "/batam/hotel/radisson-golf-batam.webp",
    rating: "4 Star",
    location: "Sukajadi",
  },
  {
    name: "Aston Batista Hotel Residence",
    image: "/batam/hotel/aston-batam-hotel-residence.webp",
    rating: "4 Star",
    location: "Nagoya",
  },
  {
    name: "Harris Resort",
    image: "/batam/hotel/harris-batam-center.webp",
    rating: "4 Star",
    location: "Barelang",
  },
];

const services = [
  {
    icon: Users,
    title: "Dengan Sopir",
    description: "Driver profesional kami siap mengantar Anda dengan aman.",
  },
  {
    icon: KeyRound,
    title: "Lepas Kunci",
    description: "Nikmati kebebasan berkendara sendiri di Batam (syarat berlaku).",
  },
  {
    icon: Plane,
    title: "Antar Jemput Bandara",
    description: "Layanan antar jemput dari/ke Bandara Hang Nadim.",
  },
  {
    icon: Briefcase,
    title: "Rental Korporat",
    description: "Solusi transportasi untuk kebutuhan bisnis dan perusahaan.",
  },
  {
    icon: Heart,
    title: "Mobil Pengantin",
    description: "Jadikan momen spesial Anda lebih berkesan dengan mobil premium.",
  },
  {
    icon: Map,
    title: "Paket Wisata",
    description: "Jelajahi destinasi terbaik di Batam dengan paket tour kami.",
  },
];

const tourPackages = [
  {
    name: "Paket Tour 3D2N Singapore – Malaysia",
    description: "Nikmati pengalaman tak terlupakan mengeksplorasi Singapore dan Malaysia.",
    duration: "3 Hari 2 Malam",
    image: "/batam/PAKET-TOUR/3D2N-SINGAPORE-MALAYSIA.webp",
  },
  {
    name: "Paket Tour 5 Hari 3 Negara",
    description: "Petualangan luar biasa menjelajahi Singapore, Malaysia, dan Thailand.",
    duration: "5 Hari 3 Negara",
    image: "/batam/PAKET-TOUR/5-HARI-3-NEGARA.webp",
  },
  {
    name: "One Day Tour Singapore",
    description: "Nikmati keindahan Singapore dalam sehari dengan destinasi pilihan.",
    duration: "1 Hari",
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-SINGAPORE.webp",
  },
  {
    name: "Tour Ranoh Island",
    description: "Nikmati keindahan pulau Ranoh dengan berbagai aktivitas air seru.",
    duration: "1 Hari",
    image: "/batam/PAKET-TOUR/TOUR-RANOH-ISLAND.webp",
  },
  {
    name: "One Day Tour Bintan",
    description: "Jelajahi keindahan Bintan dalam sehari.",
    duration: "1 Hari",
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BINTAN.webp",
  },
  {
    name: "Tour Pulau Abang",
    description: "Eksplorasi Pulau Abang dengan snorkeling dan island hopping.",
    duration: "1 Hari",
    image: "/batam/PAKET-TOUR/TOUR-PULAU-ABANG.webp",
  },
];

const galleryItems = [
  {
    type: "image",
    src: "/batam/galeri/galeri-1.webp",
  },
  {
    type: "video",
    src: "/batam/bandara/bandara1.mp4",
  },
  {
    type: "image",
    src: "/batam/galeri/galeri-2.webp",
  },
  {
    type: "image",
    src: "/batam/galeri/galeri-3.webp",
  },
  {
    type: "image",
    src: "/batam/galeri/galeri-5.webp",
  },
  {
    type: "video",
    src: "/batam/bandara/bandara2.mp4",
  },
  {
    type: "image",
    src: "/batam/galeri/galeri-4.webp",
  },
  {
    type: "image",
    src: "/batam/galeri/galeri-6.webp",
  },
];

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScroll, setShowScroll] = useState(false);

  const imageItems = galleryItems.filter((item) => item.type === "image");

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! + 1) % imageItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (prevIndex) => (prevIndex! - 1 + imageItems.length) % imageItems.length
      );
    }
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={`${inter.className} min-h-screen bg-white overflow-x-hidden pb-20 md:pb-0`}>
      <PromoLebaranModal
        city="Batam"
        imageSrc="/batam/promo-lebaran.webp"
        waText="Halo, saya tertarik dengan Promo Lebaran VRN Rent Car Batam"
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center bg-gray-900">
        <Image
          src="/batam/hero-section.webp"
          alt="Rental Mobil Batam"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-10 text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Rental Mobil Batam
            <br />
            <span className="text-yellow-400">Lepas Kunci & Dengan Sopir</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Unit bersih, siap jalan, booking cepat via WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center border border-white/10">
              <Users className="w-6 h-6 mx-auto mb-1 text-yellow-400"/> 
              <span className="font-semibold text-sm block">Driver Profesional</span>
              <span className="text-xs text-gray-300">Ramah & Berpengalaman</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center border border-white/10">
              <Car className="w-6 h-6 mx-auto mb-1 text-yellow-400"/> 
              <span className="font-semibold text-sm block">Unit Terbaru 2023+</span>
              <span className="text-xs text-gray-300">Terawat & Wangi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center border border-white/10">
              <Clock className="w-6 h-6 mx-auto mb-1 text-yellow-400"/> 
              <span className="font-semibold text-sm block">Layanan 24 Jam</span>
              <span className="text-xs text-gray-300">Antar Jemput Tepat Waktu</span>
            </div>
          </div>

          <Button size="lg" className="bg-amber-500 text-black font-bold" asChild>
            <a href={waLink} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Tanya Mobil Tersedia
            </a>
          </Button>
        </div>
      </section>

      {/* PROMO LEBARAN SECTION */}
      <div className="-mt-10 relative z-20">
        <PromoLebaranSection />
      </div>

      {/* WHY CHOOSE US - Expanded */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kenapa Banyak Pelanggan Memilih Vicky Rent Car Batam
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: Car, text: "Unit Mobil Bersih & Terawat", desc: "Kondisi prima siap tempur perjalanan jauh" },
              { icon: Users, text: "Bisa Lepas Kunci / Sopir", desc: "Fleksibilitas penuh sesuai kebutuhan Anda" },
              { icon: Plane, text: "Antar Jemput Bandara", desc: "Layanan tepat waktu di Bandara Hang Nadim" },
              { icon: MessageCircle, text: "Respon Cepat via WA", desc: "Admin ramah siap membantu 24/7" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-teal-600">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{item.text}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Lengkap Sesuai Kebutuhan Anda
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari perjalanan bisnis hingga liburan keluarga, kami menyediakan berbagai layanan rental mobil untuk memastikan kenyamanan Anda di Batam.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{service.title}</h3>
                <p className="text-xs text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket Tour Populer
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Pilihan paket wisata terbaik dari Batam untuk liburan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tourPackages.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative w-full aspect-[1080/1350] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{tour.description}</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 font-bold" asChild>
                    <Link href="/batam/paket-tour">
                      Lihat Detail
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold" asChild>
              <Link href="/batam/paket-tour">
                LIHAT SEMUA PAKET TOUR
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* POPULAR CARS - Restored Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Armada Paling Populer di Batam
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Pilihan mobil yang paling sering dipesan oleh pelanggan kami untuk berbagai kebutuhan di Batam.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {popularCars.map((car, index) => (
              <SafeMotionDiv
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group border border-gray-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-50">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-yellow-400 text-black font-bold shadow-sm border-0 text-[10px] sm:text-xs px-2 py-0.5">{car.label}</Badge>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 line-clamp-1">{car.name}</h3>
                  <p className="text-teal-600 font-bold text-sm sm:text-base mb-3">
                    {car.price} <span className="text-gray-400 text-xs font-normal">/ hari</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {car.specs.map((spec, i) => (
                      <span key={i} className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 h-9 sm:h-10 text-xs sm:text-sm font-bold shadow-sm" asChild>
                      <a href={`${waLink}&text=Halo,%20saya%20mau%20cek%20ketersediaan%20${car.name}`} target="_blank">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Pesan Sekarang
                      </a>
                    </Button>
                  </div>
                </div>
              </SafeMotionDiv>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white" asChild>
              <Link href="/batam/armada">
                Lihat Semua Armada
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION - Moved below Armada */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Dipercaya oleh Pelanggan Lokal & Internasional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat apa kata mereka tentang kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {googleReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex-grow flex">
                    {[...Array(review.rating)].map((_, k) => (
                      <Star key={k} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="italic text-gray-600 mb-4 flex-grow">"{review.comment}"</p>
                <p className="font-bold text-gray-800 mt-auto">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING PROCESS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Booking Mobil Hanya 3 Menit
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Proses pemesanan kami sangat mudah dan cepat, langsung dari smartphone Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto relative">
             {/* Dashed line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5">
                <svg width="100%" height="2">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8"/>
                </svg>
            </div>
            {[
              { step: "1", text: "Pilih Mobil" },
              { step: "2", text: "Klik WhatsApp" },
              { step: "3", text: "Konfirmasi" },
              { step: "4", text: "Mobil Ready" }
            ].map((item, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white border-4 border-teal-500 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-3xl font-bold shadow-lg">
                  {item.step}
                </div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Destinasi Populer Batam
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Kunjungi tempat-tempat menarik ini dengan armada kami.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((item, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-sm sm:text-lg">{item.name}</h3>
                    <p className="text-[10px] sm:text-xs text-gray-200 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTELS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rekomendasi Hotel
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Penginapan nyaman untuk istirahat Anda selama di Batam.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hotels.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-32 sm:h-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-gray-900 mb-1 truncate text-sm sm:text-base">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {/* This section is now replaced by the more powerful Google Reviews section. */}

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galeri Perjalanan Bersama Kami
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Momen-momen yang diabadikan oleh pelanggan setia kami di Batam.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden aspect-square bg-slate-100 shadow-sm">
                {item.type === "image" ? (
                  <div
                    onClick={() => {
                      const imageIndex = imageItems.findIndex(
                        (img) => img.src === item.src
                      );
                      setLightboxIndex(imageIndex);
                    }}
                    className="w-full h-full cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={`Galeri VRN Rent Car Batam ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
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
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white" asChild>
              <Link href="/batam/galeri">
                Lihat Galeri Lengkap
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection />

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white z-20"
            onClick={handleCloseLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white z-20 bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white z-20 bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageItems[lightboxIndex].src}
              alt="Lightbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Mobil Siap Digunakan Hari Ini
        </h2>

        <p className="mb-6">
          Klik WhatsApp untuk cek unit yang tersedia sekarang
        </p>

        <Button size="lg" className="bg-amber-500 text-black font-bold" asChild>
          <a href={waLink} target="_blank">
            Chat WhatsApp Sekarang
          </a>
        </Button>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          onClick={scrollTop}
          className="fixed bottom-28 md:bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-opacity duration-300 animate-fade-in"
          size="icon"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </main>
  );
}
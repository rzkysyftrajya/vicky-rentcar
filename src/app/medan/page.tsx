import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "@/components/medan/Header";
import HeroSection from "@/components/medan/HeroSection";
import StatsSection from "@/components/medan/StatsSection";
import Footer from "@/components/medan/Footer";
import KenapaVRNSection from "@/components/medan/KenapaVRNSection";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Shield,
  Clock,
  MapPin,
  Users,
  Star,
  Phone,
  Award,
  Crown,
  Sparkles,
  CheckCircle,
  DollarSign,
  Briefcase,
  BadgeCheck,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cars } from "@/data/fleet-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VRN Rent Car Medan - Rental Mobil Medan VIP & Luxury | Antar Jemput Bandara Kualanamu",
  description:
    "VRN Rent Car Medan - Rental mobil Medan terpercaya dengan layanan VIP & luxury. Alphard, Mercedes, Fortuner. Antar jemput Bandara Kualanamu, sopir profesional, armada terawat. Bagian dari Vicky Rent Car Nusantara.",
  keywords:
    "rental mobil medan, sewa mobil medan, vrn rent car medan, rental mobil vip medan, sewa alphard medan, rental mercedes medan, rental mobil luxury medan, antar jemput bandara kualanamu, sewa mobil harian medan, rental mobil bulanan medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com",
  },
  openGraph: {
    title:
      "VRN Rent Car Medan - Rental Mobil VIP & Luxury | Antar Jemput Bandara",
    description:
      "VRN Rent Car Medan - Sewa mobil VIP & luxury untuk bisnis, wedding, dan perjalanan eksklusif. Layanan premium dengan armada Alphard, Mercedes, dan kendaraan mewah lainnya.",
    type: "website",
    url: "https://vrnrentcarmedan.com",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRN Rent Car Medan - Rental Mobil VIP & Luxury",
    description:
      "VRN Rent Car Medan - Sewa mobil VIP & luxury terpercaya di Medan dengan layanan premium.",
  },
};

const pageLinks = [
  {
    href: "/medan/about-us",
    title: "Tentang Kami",
    description: "Kenali VRN Rent Car Medan lebih dekat",
    icon: Users,
    color: "bg-blue-500 dark:bg-blue-600",
  },
  {
    href: "/medan/features",
    title: "Keunggulan",
    description: "5 keunggulan utama layanan kami",
    icon: Award,
    color: "bg-green-500 dark:bg-green-600",
  },
  {
    href: "/medan/services",
    title: "Layanan",
    description: "Rental harian, bulanan, dan wisata",
    icon: Car,
    color: "bg-purple-500 dark:bg-purple-600",
  },
  {
    href: "/medan/tourism",
    title: "Destinasi Wisaya",
    description: "Tour Medan dan Sumatera Utara",
    icon: MapPin,
    color: "bg-orange-500 dark:bg-orange-600",
  },
  {
    href: "/medan/airport",
    title: "Antar Jemput Bandara",
    description: "Layanan bandara Kualanamu 24/7",
    icon: Clock,
    color: "bg-red-500 dark:bg-red-600",
  },
  {
    href: "/medan/fleet",
    title: "Armada Mobil",
    description: "Pilihan kendaraan terawat",
    icon: Car,
    color: "bg-indigo-500 dark:bg-indigo-600",
  },
  {
    href: "/medan/testimonials",
    title: "Ulasan Pelanggan",
    description: "Testimoni kepuasan pelanggan",
    icon: Star,
    color: "bg-yellow-500 dark:bg-yellow-600",
  },
  {
    href: "/medan/video",
    title: "Video Pengenalan",
    description: "Profil perusahaan dan armada",
    icon: Shield,
    color: "bg-pink-500 dark:bg-pink-600",
  },
];

const quickStats = [
  { value: "500+", label: "Pelanggan Puas", icon: Users },
  { value: "24/7", label: "Layanan", icon: Clock },
  { value: "10+", label: "Tahun Pengalaman", icon: Award },
  { value: "50+", label: "Armada Tersedia", icon: Car },
];

// VIP Services for premium showcase
const vipServices = [
  {
    icon: Crown,
    title: "VIP Wedding Car",
    description:
      "Mobil mewah untuk pengantin dengan dekorasi lengkap, sopir berjas, dan layanan premium untuk hari spesial Anda.",
    features: [
      "Alphard & Camry Hybrid",
      "Dekorasi lengkap",
      "Sopir berjas rapi",
      "Photo session support",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/VIP-WEDDING-CAR.webp",
  },
  {
    icon: Briefcase,
    title: "Executive Corporate",
    description:
      "Layanan transportasi premium untuk executives, delegasi, dan kebutuhan bisnis korporat dengan kendaraan mewah.",
    features: [
      "Alphard & Mercedes",
      "Sopir English speaking",
      "Airport VIP handling",
      "Dedicated coordinator",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/EXECUTIVE-CORPORATE.webp",
  },
  {
    icon: Star,
    title: "VIP Airport Transfer",
    description:
      "Penjemputan dan pengantaran bandara dengan layanan white-glove, sopir profesional, dan kendaraan premium.",
    features: [
      "Welcome service",
      "Luggage assistance",
      "Flight tracking",
      "Meet & greet",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/vip-airport-transfer.webp",
  },
  {
    icon: Sparkles,
    title: "Luxury City Tour",
    description:
      "Jelajahi Medan dan Sumatera Utara dengan kendaraan mewah, sopir profesional, dan layanan concierge.",
    features: [
      "Mercedes & Alphard",
      "Wisata private",
      "Restaurant booking",
      "Personal guide",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/luxury-city-tour.webp",
  },
];

// Trust badges
const trustBadges = [
  {
    icon: BadgeCheck,
    title: "Terverifikasi & Terpercaya",
    description: "Bagian dari Vicky Rent Car Nusantara",
  },
  {
    icon: Shield,
    title: "Asuransi Comprehensive",
    description: "Semua kendaraan fully insured",
  },
  {
    icon: Trophy,
    title: "Award Winner",
    description: "Rental terbaik di Medan",
  },
  {
    icon: Star,
    title: "Rating 4.9/5.0",
    description: "Dari 500+ review pelanggan",
  },
];

// Testimonials preview
const testimonialsPreview = [
  {
    name: "Maria & Doni",
    role: "Pelanggan Wedding Car",
    content:
      "VRN Rent Car membuat hari pernikahan kami lebih istimewa. Alphard mewahnya seperti mimpi dan sopirnya sangat profesional.",
    rating: 5,
    image: "/testimoni/testimoni3.jpeg",
  },
  {
    name: "David L.",
    role: "Executive Director",
    content:
      "Layanan Executive Corporate dengan Mercedes-Benz sangat impressive. Sopir English-speaking dan sangat profesional.",
    rating: 5,
    image: "/testimoni/testimoni2.jpeg",
  },
  {
    name: "Emily R.",
    role: "Business Traveler",
    content:
      "Antar-jemput di Bandara Kualanamu berjalan tanpa cela. Sopir sudah menunggu tepat waktu dengan welcome drink!",
    rating: 5,
    image: "/testimoni/testimoni4.jpeg",
  },
];

export default function MedanPage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan";

  // Get VIP cars from fleet data
  const vipCars =
    cars?.filter((car) => car.serviceCategory === "VIP").slice(0, 6) || [];

  return (
    <main className={`${inter.className} min-h-screen pb-24 md:pb-0`}>
      <Header />
      <HeroSection />

      {/* Trust Badges Section */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100 dark:border-slate-700"
              >
                <badge.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP & Luxury Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Crown className="w-5 h-5" />
              LAYANAN VIP & LUXURY
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-6">
              Pengalaman Eksklusif
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Premium Class Service
              </span>
            </h2>
            <p className="text-xl text-slate-300 dark:text-slate-300 max-w-3xl mx-auto">
              Nikmati layanan transportasi premium dengan armada kendaraan
              mewah, sopir profesional, dan pelayanan white-glove untuk momen
              spesial Anda.
            </p>
          </div>

          {/* VIP Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {vipServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-lg shadow-lg">
                      <service.icon className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white dark:text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700 dark:border-slate-700">
                    <span className="text-amber-400 font-bold text-sm">
                      {service.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold"
                      asChild
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pesan
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold text-lg px-8 shadow-2xl"
              asChild
            >
              <Link href="/medan/services">
                Lihat Semua Layanan VIP
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kenapa VRN Section */}
      <KenapaVRNSection />

      {/* Premium Fleet Preview */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-5 h-5" />
              ARMADA PREMIUM
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Kendaraan Mewah
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Untuk Pengalaman Istimewa
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Pilihan kendaraan luxury dan premium yang terawat sempurna dengan
              interior mewah dan fitur terlengkap.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vipCars.map((car, index) => {
              const waText = `Halo, saya tertarik untuk menyewa ${car.name} untuk layanan VIP. Mohon informasinya.`;
              const encodedWaText = encodeURIComponent(waText);
              return (
                <div
                  key={car.slug}
                  className="w-full animate-fade-in-up overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-2xl"
                  style={{
                    animationDelay: `${Math.min(index * 0.1, 0.5)}s`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-black" />
                        VIP
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {car.highlights.slice(0, 3).map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {car.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                        >
                          <span className="text-gray-500 dark:text-gray-400 text-xs">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      Pengalaman luxury dengan {car.name}. Dilengkapi dengan
                      interior premium dan layanan chauffeur profesional untuk
                      kenyamanan maksimal Anda.
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a
                        href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Pesan via WA
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-shrink-0 border-gray-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <a href={`/fleet`}>
                        Detail
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 font-bold text-lg px-8"
              asChild
            >
              <Link href="/medan/fleet">
                Lihat Semua Armada
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Konsultasi Sekarang Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Phone className="w-5 h-5" />
              KONSULTASI SEKARANG
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Rental Mobil Medan
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
                Harga Terbaik Untuk Anda
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hubungi kami sekarang untuk mendapatkan informasi lengkap tentang
              harga dan layanan rental mobil. Tim kami siap memberikan
              konsultasi gratis untuk kebutuhan Anda.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white text-lg px-8"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Konsultasi via WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-slate-900 text-lg px-8"
              asChild
            >
              <a href="tel:+6282363389893">
                <Phone className="w-5 h-5 mr-2" />
                Telepon Kami
              </a>
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
              <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Respons Cepat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kami merespons pesan Anda dalam hitungan menit
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/30 rounded-2xl">
              <Award className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Harga Bersaing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Offer terbaik untuk setiap kebutuhan rental Anda
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Layanan Terpercaya
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bagian dari Vicky Rent Car Nusantara sejak 2018
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Jelajahi Layanan Kami
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Dapatkan informasi lengkap tentang semua layanan VRN Rent Car
                Medan
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full group border border-gray-100 dark:border-slate-700">
                  <div
                    className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {link.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Layanan Unggulan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Beberapa layanan paling populer yang kami tawarkan
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
              <Car className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Rental Mobil Harian
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sewa mobil untuk keperluan harian dengan sopir profesional
              </p>
              <Link href="/medan/services">
                <Button
                  variant="outline"
                  className="w-full dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                >
                  Lihat Detail
                </Button>
              </Link>
            </div>

            <div className="text-center p-8 bg-green-50 dark:bg-green-900/30 rounded-2xl">
              <Clock className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Antar Jemput Bandara
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Layanan antar jemput ke dan dari Bandara Kualanamu 24/7
              </p>
              <Link href="/medan/airport">
                <Button
                  variant="outline"
                  className="w-full dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                >
                  Pesan Sekarang
                </Button>
              </Link>
            </div>

            <div className="text-center p-8 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
              <MapPin className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Tour Medan & Sekelilingnya
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tour wisata ke destinasi populer di Sumatera Utara
              </p>
              <Link href="/medan/tourism">
                <Button
                  variant="outline"
                  className="w-full dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                >
                  Lihat Destinasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
              melayani kebutuhan rental mobil Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 dark:border-white/80 dark:text-white dark:hover:bg-white dark:hover:text-blue-600"
                asChild
              >
                <a href="tel:+6282363389893">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Kami
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </main>
  );
}

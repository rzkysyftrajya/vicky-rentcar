import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Header from "@/components/medan/Header";
import HeroSection from "@/components/medan/HeroSection";
import PromoLebaranSection from "@/components/medan/PromoLebaranSection";
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
  ThumbsUp,
  Key,
  Smile,
  Gauge,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cars } from "@/data/fleet-data"; // temp fix, assume merged or use correct path
import { topTourPackages } from "@/data/medan-tour-packages";
import PromoLebaranModal from "@/components/batam/PromoLebaranModal";
import Link from "next/link";
import { Calendar } from "lucide-react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VRN Rent Car Medan - Rental Mobil Premium | Mulai Rp350K/Hari",
  description: "Sewa mobil Medan terlengkap: Innova, Fortuner, Alphard. Sopir profesional atau lepas kunci. Bandara Kualanamu pickup gratis. Rating 4.9⭐ 500+ pelanggan puas. Bagian Vicky Rent Car Nusantara.",
  keywords: "rental mobil medan, sewa fortuner medan, rental innova medan, sewa alphard medan, rental mobil lepas kunci medan, antar jemput kualanamu, sewa mobil murah medan, vrn rentcar, vicky rentcar medan",

  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com",
  },
  openGraph: {
    title:
      "VRN Rent Car Medan - Sewa Mobil Murah & Terpercaya",
    description:
      "Solusi transportasi terbaik di Medan. Sewa mobil harian, bulanan, lepas kunci atau dengan sopir. Harga kompetitif dan pelayanan ramah.",
    type: "website",
    url: "https://vrnrentcarmedan.com",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRN Rent Car Medan - Rental Mobil Terpercaya",
    description:
      "VRN Rent Car Medan - Sewa mobil terpercaya di Medan dengan layanan profesional.",
  },
};

// Services showcase
const featuredServices = [
  {
    icon: Users,
    title: "Sewa Mobil Harian",
    description:
      "Layanan sewa mobil harian dengan sopir berpengalaman atau lepas kunci untuk kebebasan perjalanan Anda.",
    features: [
      "Unit bersih & wangi",
      "Sopir ramah & hafal jalan",
      "Bisa lepas kunci (S&K)",
      "Harga bersahabat",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/luxury-city-tour.webp",
  },
  {
    icon: Briefcase,
    title: "Kunjungan Dinas",
    description:
      "Solusi transportasi andalan untuk kebutuhan operasional kantor dan kunjungan bisnis di Medan.",
    features: [
      "Innova Reborn & Fortuner",
      "Invoice resmi perusahaan",
      "Layanan tepat waktu",
      "Support 24 jam",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/EXECUTIVE-CORPORATE.webp",
  },
  {
    icon: Star,
    title: "Antar Jemput Bandara",
    description:
      "Layanan antar jemput Bandara Kualanamu yang tepat waktu, aman, dan nyaman tanpa perlu antri.",
    features: [
      "Standby sebelum landing",
      "Bantu angkat bagasi",
      "Mobil nyaman ber-AC",
      "Tarif transparan",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/layanan/vip-airport-transfer.webp",
  },
  {
    icon: Sparkles,
    title: "Paket Wisata",
    description:
      "Jelajahi keindahan Danau Toba, Berastagi, dan wisata Medan lainnya bersama sopir yang merangkap guide.",
    features: [
      "Rute wisata fleksibel",
      "Rekomendasi kuliner",
      "Perjalanan santai",
      "Mobil kapasitas besar",
    ],
    price: "Hubungi untuk harga",
    image: "/medan/destinasi-wisata/danau-toba.webp",
  },
];

// Why Trust Us Section - Detailed trust building
const whyTrustUsItems = [
  {
    icon: BadgeCheck,
    title: "Legalitas Lengkap",
    description: "PT resmi dengan NPWP & izin operasional",
    detail: "Terdaftar resmi Kemenkumham",
  },
  {
    icon: Shield,
    title: "Asuransi Full",
    description: "Semua unit terasuransi komprehensif",
    detail: "Jaminan keselamatan 100%",
  },
  {
    icon: Star,
    title: "4.9⭐ Rating",
    description: "500+ ulasan positif Google",
    detail: "Pelanggan puas terbukti",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Layanan siaga nonstop",
    detail: "Respon WA <5 menit",
  },
  {
    icon: BadgeCheck,
    title: "Legalitas Terpenuhi",
    description: "Perusahaan resmi dengan izin usaha lengkap",
    detail: "NPWP, SITU, dan izin operasional valid",
  },
  {
    icon: Shield,
    title: "Armada Ter-Asuransikan",
    description: "Semua kendaraan memiliki asuransi komprehensif",
    detail: "Perlindungan penuh untuk penumpang dan kendaraan",
  },
  {
    icon: Award,
    title: "Sopir Profesional",
    description: "Sopir berpengalaman dan menguasai rute",
    detail: "Ramah, sopan, dan mengutamakan keselamatan",
  },
  {
    icon: Star,
    title: "Rating Tertinggi",
    description: "Rating 4.9 dari 500+ pelanggan",
    detail: "Testimoni positif di Google dan media sosial",
  },
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    description: "Customer support siap membantu kapan saja",
    detail: "Respon cepat via WhatsApp dan telepon",
  },
  {
    icon: Crown,
    title: "Garansi Layanan",
    description: "Jaminan layanan terbaik untuk semua pelanggan",
    detail: "Kepuasan Anda adalah prioritas utama kami",
  },
  {
    icon: DollarSign,
    title: "Harga Bersaing",
    description: "Harga transparan dan kompetitif",
    detail: "Tanpa biaya tersembunyi, garansi harga terbaik",
  },
  {
    icon: Key,
    title: "Bisa Lepas Kunci",
    description: "Sewa mobil tanpa sopir lebih leluasa",
    detail: "Proses verifikasi mudah dan cepat",
  },
];

// Testimonials preview
const testimonialsPreview = [
  {
    name: "Maria & Doni",
    role: "Wisatawan Jakarta",
    content:
      "Liburan ke Danau Toba jadi sangat menyenangkan berkat VRN. Mobil Innova-nya nyaman banget buat perjalanan jauh dan sopirnya sabar.",
    rating: 5,
    image: "/testimoni/testimoni3.jpeg",
  },
  {
    name: "David L.",
    role: "Perjalanan Dinas",
    content:
      "Selalu langganan pakai VRN kalau ada tugas di Medan. Mobil bersih, on time, dan adminnya fast response. Recommended!",
    rating: 5,
    image: "/testimoni/testimoni2.jpeg",
  },
  {
    name: "Emily R.",
    role: "Pelanggan Lepas Kunci",
    content:
      "Sewa Brio lepas kunci prosesnya gampang. Mobil enak dipakai keliling kota Medan. Harga juga bersaing banget.",
    rating: 5,
    image: "/testimoni/testimoni4.jpeg",
  },
];

export default function MedanPage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan";

  // Get Popular cars with price teasers
  const popularCarNames = [
    "Toyota Avanza",
    "Innova Reborn",
    "Innova Zenix",
    "Honda Brio",
    "Toyota Agya",
    "Alphard Gen 3",
    "Hiace Premio",
  ];
  const popularCars = cars
    ?.filter((car) => popularCarNames.includes(car.name))
    .map((car) => ({
      ...car,
      priceTeaser: car.name.includes("Innova") ? "Rp450K" : car.name.includes("Alphard") ? "Rp1.2Jt" : car.name.includes("Hiace") ? "Rp1Jt" : "Rp350K",
    })) || [];

  return (
    <main className={`${inter.className} min-h-screen pb-24 md:pb-0`}>
      <PromoLebaranModal 
        city="Medan"
        imageSrc="/medan/promo-lebaran.webp"
        waText="Halo, saya tertarik dengan Promo Lebaran VRN Rent Car Medan"
      />
      
      {/* Navbar Wrapper to prevent crash/overlap */}
      <div className="relative z-50">
        <Header />
      </div>

      <HeroSection />

      {/* Promo Lebaran Section - Banner Promosi Ramadan/Lebaran */}
      <PromoLebaranSection />

      {/* Why Trust Us Section - Detailed Trust Building */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <ThumbsUp className="w-5 h-5" />
              MENGAPA KAMI TERPERCAYA
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Bukti Kepercayaan
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                500+ Pelanggan Puas
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kami berkomitmen memberikan layanan rental mobil terbaik dengan
              transparansi, profesionalisme, dan jaminan kualitas untuk setiap
              pelanggan.
            </p>
          </div>

          {/* Trust Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyTrustUsItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                      <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                        ✓ {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
                <div className="text-sm text-blue-200">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-blue-200">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-blue-200">Armada Ready</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-sm text-blue-200">Rating Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Utama Section */}
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
              LAYANAN KAMI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-6">
              Solusi Transportasi
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Terlengkap di Medan
              </span>
            </h2>
            <p className="text-xl text-slate-300 dark:text-slate-300 max-w-3xl mx-auto">
              Kami menyediakan berbagai pilihan layanan sewa mobil yang dapat disesuaikan 
              dengan kebutuhan perjalanan Anda, mulai dari wisata hingga keperluan bisnis.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                        Cek Harga via WhatsApp
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
                Lihat Semua Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lepas Kunci Section - Green/Emerald Theme */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 dark:from-emerald-950 dark:via-emerald-900 dark:to-teal-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Key className="w-5 h-5" />
              LEPAS KUNCI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-6">
              Sewa Mobil Lepas Kunci
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                di Medan
              </span>
            </h2>
            <p className="text-xl text-emerald-100 dark:text-emerald-100 max-w-3xl mx-auto">
              Lebih bebas, lebih hemat, dan privasi terjaga. Chat WhatsApp untuk
              cek unit & harga.
            </p>
          </div>

          {/* Benefits Grid - 4 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Hemat Biaya */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hemat Biaya</h3>
              <p className="text-emerald-200 text-sm">
                Tidak perlu biaya sopir harian. Lebih ekonomis untuk penggunaan
                jangka panjang.
              </p>
            </div>

            {/* Fleksibel */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fleksibel</h3>
              <p className="text-emerald-200 text-sm">
                Bebas mengatur rute dan jadwal sendiri tanpa tergantung jadwal
                sopir.
              </p>
            </div>

            {/* Privasi Aman */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Privasi Aman</h3>
              <p className="text-emerald-200 text-sm">
                Privasi terjamin tanpa harus berbagi kendaraan dengan orang lain.
              </p>
            </div>

            {/* Proses Cepat */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proses Cepat</h3>
              <p className="text-emerald-200 text-sm">
                Proses booking mudah dan cepat. Unit siap dalam hitungan jam.
              </p>
            </div>
          </div>

          {/* Syarat Umum Box */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              📋 Syarat Umum
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100 font-medium">SIM A aktif</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100 font-medium">KTP</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100 font-medium">Deposit</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100 font-medium">
                  Verifikasi via WhatsApp
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button - Large */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg px-12 py-6 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-6 h-6 mr-3" />
                CEK UNIT READY
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Armada Pilihan */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-5 h-5" />
              ARMADA FAVORIT
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Pilihan Mobil
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Keluarga & Bisnis
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Berbagai jenis mobil MPV dan SUV yang bersih, nyaman, dan hemat bahan bakar 
              untuk menemani perjalanan Anda di Medan.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularCars.map((car, index) => {
              const waText = `Halo, saya tertarik untuk menyewa ${car.name} untuk layanan. Mohon informasinya.`;
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
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        Ready
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
                      Nikmati perjalanan nyaman dengan {car.name}. Mobil terawat, bersih, dan siap antar Anda ke tujuan.
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
                        Cek Unit Ready (WA)
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

      {/* Paket Tour Populer */}
      <section className="py-24 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold inline-flex items-center gap-2 shadow-lg">
              <Calendar className="w-5 h-5" />
              PAKET TOUR POPULER
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Wisata Sumatera Utara
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket tour terbaik ke Danau Toba, Berastagi & Bukit Lawang. Sopir guide berpengalaman.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topTourPackages.map((tour, index) => (
              <div key={tour.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border hover:border-emerald-300">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image src={tour.image} alt={tour.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 backdrop-blur text-emerald-700 font-bold">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600">
                    {tour.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tour.destinations.slice(0,3).map((dest, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {dest}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full font-semibold mt-auto" variant="outline">
                    <Link href="/medan/paket-tour">
                      Booking Sekarang
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-12">
              <Link href="/medan/paket-tour">
                Lihat Semua Paket Tour
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
                Tanya Promo Hari Ini
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  Cek Harga via WhatsApp
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

            <div className="text-center p-8 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl">
              <Key className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Rental Mobil Lepas Kunci
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sewa mobil tanpa sopir untuk kebutuhan pribadi. Proses cepat &amp; unit ready.
              </p>
              <Link href={whatsappLink}>
                <Button
                  variant="outline"
                  className="w-full dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                >
                  Cek via WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Added to use the data and provide social proof */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-5 h-5" />
              TESTIMONI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsPreview.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 relative">
                <Quote className="w-10 h-10 text-blue-100 dark:text-blue-900/50 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                    {/* Fallback if image fails or is missing */}
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{item.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{item.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp - Persistent */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 w-16 h-16 flex items-center justify-center lg:w-20 lg:h-20"
        aria-label="WhatsApp"
      >
        <Phone className="w-7 h-7 lg:w-8 lg:h-8" />
      </a>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
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
                  Tanya Promo Hari Ini
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

      {/* Kantor Kami Section - Video */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="w-5 h-5" />
              KANTOR KAMI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Kunjungi Kantor
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                VRN Rent Car Medan
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Kenali lebih dekat kami dengan menonton video profil perusahaan.
              Kami siap melayani kebutuhan rental mobil Anda dengan layanan
              terbaik.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <video
              src="/medan/video-pengenalan.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/medan/tentang.jpeg"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Office Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
              <MapPin className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Alamat Kantor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec.
                Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/30 rounded-2xl">
              <Phone className="w-10 h-10 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Hubungi Kami
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                +62 823-6338-9893
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
              <Clock className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Jam Buka
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                24 Jam / 7 Hari Minggu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Berikan Ulasan Jujur Anda
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Pengalaman Anda sangat berharga bagi kami. Silakan berikan
                ulasan jujur tentang layanan rental mobil kami di Google
                Reviews.
              </p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8"
                asChild
              >
                <a
                  href="https://g.page/r/CeVXw4q2MI5pEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Beri Ulasan di Google
                </a>
              </Button>
            </div>
            <p className="text-sm text-green-200">
              Klik tombol di atas untuk memberikan ulasan jujur Anda
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import HeroSection from "@/components/medan/HeroSection";
import StatsSection from "@/components/medan/StatsSection";
import FeaturesSection from "@/components/medan/FeaturesSection";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
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
  Mail,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VRN Rent Car Medan - Rental Mobil Medan | Antar Jemput Bandara Kualanamu",
  description:
    "VRN Rent Car Medan - Rental mobil Medan terpercaya. Sewa mobil Medan harian & bulanan, antar jemput Bandara Kualanamu, sopir berpengalaman, armada terawat. Bagian dari Vicky Rent Car Nusantara.",
  keywords:
    "rental mobil medan, sewa mobil medan, vrn rent car medan, rental mobil banda kualanamu, antar jemput banda medan, sewa mobil harian medan, rental mobil bulanan medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com",
  },
  openGraph: {
    title:
      "VRN Rent Car Medan - Rental Mobil Medan | Antar Jemput Bandara Kualanamu",
    description:
      "VRN Rent Car Medan - Sewa mobil Medan harian & bulanan untuk bisnis, wisata, dan perjalanan keluarga. Layanan antar jemput Bandara Kualanamu tepat waktu.",
    type: "website",
    url: "https://vrnrentcarmedan.com",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRN Rent Car Medan - Rental Mobil Medan",
    description:
      "VRN Rent Car Medan - Sewa mobil Medan terpercaya dengan layanan antar jemput Bandara Kualanamu.",
  },
};

const pageLinks = [
  {
    href: "/medan/about-us",
    title: "Tentang Kami",
    description: "Kenali VRN Rent Car Medan lebih dekat",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    href: "/medan/features",
    title: "Keunggulan",
    description: "5 keunggulan utama layanan kami",
    icon: Award,
    color: "bg-green-500",
  },
  {
    href: "/medan/services",
    title: "Layanan",
    description: "Rental harian, bulanan, dan wisata",
    icon: Car,
    color: "bg-purple-500",
  },
  {
    href: "/medan/tourism",
    title: "Destinasi Wifi",
    description: "Tour Medan dan Sumatera Utara",
    icon: MapPin,
    color: "bg-orange-500",
  },
  {
    href: "/medan/airport",
    title: "Antar Jemput Bandara",
    description: "Layanan bandara Kualanamu 24/7",
    icon: Clock,
    color: "bg-red-500",
  },
  {
    href: "/medan/fleet",
    title: "Armada Mobil",
    description: "Pilihan kendaraan terawat",
    icon: Car,
    color: "bg-indigo-500",
  },
  {
    href: "/medan/testimonials",
    title: "Ulasan Pelanggan",
    description: "Testimoni kepuasan pelanggan",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    href: "/medan/video",
    title: "Video Pengenalan",
    description: "Profil perusahaan dan armada",
    icon: Shield,
    color: "bg-pink-500",
  },
];

const quickStats = [
  { value: "500+", label: "Pelanggan Puas", icon: Users },
  { value: "24/7", label: "Layanan", icon: Clock },
  { value: "10+", label: "Tahun Pengalaman", icon: Award },
  { value: "50+", label: "Armada Tersedia", icon: Car },
];

export default function MedanPage() {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan";

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <HeroSection />

      {/* Navigation Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jelajahi Layanan Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dapatkan informasi lengkap tentang semua layanan VRN Rent Car
                Medan
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <div
                    className={`${link.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {link.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Layanan Unggulan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Beberapa layanan paling populer yang kami tawarkan
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-2xl">
              <Car className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Rental Mobil Harian
              </h3>
              <p className="text-gray-600 mb-4">
                Sewa mobil untuk keperluan harian dengan sopir profesional
              </p>
              <Link href="/medan/services">
                <Button variant="outline" className="w-full">
                  Lihat Detail
                </Button>
              </Link>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-2xl">
              <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Antar Jemput Bandara
              </h3>
              <p className="text-gray-600 mb-4">
                Layanan antar jemput ke dan dari Bandara Kualanamu 24/7
              </p>
              <Link href="/medan/airport">
                <Button variant="outline" className="w-full">
                  Pesan Sekarang
                </Button>
              </Link>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-2xl">
              <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tour Medan & Sekelilingnya
              </h3>
              <p className="text-gray-600 mb-4">
                Tour wisata ke destinasi populer di Sumatera Utara
              </p>
              <Link href="/medan/tourism">
                <Button variant="outline" className="w-full">
                  Lihat Destinasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan
              melayani kebutuhan rental mobil Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
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
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+6281234567890">
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
      <FloatingWhatsApp />
    </main>
  );
}

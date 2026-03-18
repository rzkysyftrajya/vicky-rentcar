import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Users,
  Car,
  Wifi,
  Music,
  Armchair,
  Luggage,
  ShieldCheck,
  Zap,
  ChevronLeft,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Hiace Surabaya Terbaik | Rental Mobil Group Juanda-Bromo | VRN",
  description: "Paket rental Toyota Hiace Premio & Commuter Surabaya untuk rombongan besar, city tour, Bromo midnight, Madura. Mulai Rp1.300rb/hari. Kapasitas 14 orang. Driver profesional.",
  keywords: "sewa hiace surabaya, rental hiace juanda, paket hiace bromo surabaya, hiace premio surabaya, sewa hiace group surabaya, hiace bandara juanda",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcar.com/rental-mobil-surabaya/hiace",
  },
};

interface HiacePackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  capacity: string;
  description: string;
  highlights: string[];
  isPopular?: boolean;
}

const hiacePackages: HiacePackage[] = [
  {
    id: "hiace-city-tour",
    name: "Hiace City Tour Surabaya 1 Hari",
    tagline: "Jelajahi Kota Pahlawan",
    image: "/armada/hiace-premio.webp",
    capacity: "Max 14 Penumpang",
    description: "Eksplorasi Tugu Pahlawan, Monkasel, Pantai Kenjeran, House of Sampoerna dengan AC dingin dan karaoke untuk rombongan.",
    highlights: ["Full AC & Karaoke", "City Tour Guide", "BBM Termasuk"],
    isPopular: true,
  },
  {
    id: "hiace-madura",
    name: "Hiace Surabaya-Madura Family Tour",
    tagline: "Wisata Pulau Madura",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MADURA-TOUR.webp",
    capacity: "Max 14 Penumpang",
    description: "Lintasi Jembatan Suramadu ke Madura, nikmati kuliner sate & kerupuk gajah. Cocok untuk gathering keluarga besar.",
    highlights: ["Tol Suramadu", "Kuliner Madura", "Driver Lokal"],
  },
  {
    id: "hiace-airport-xl",
    name: "Hiace Antar Jemput Juanda XL",
    tagline: "Airport Transfer",
    image: "/armada/hiace-commuter.webp",
    capacity: "Kapasitas Bagasi Extra",
    description: "Penjemputan VIP Bandara Juanda dengan bagasi banyak. Meet & greet dengan name board profesional.",
    highlights: ["On-Time Guarantee", "Bantuan Bagasi", "Signboard Penjemputan"],
    isPopular: true,
  },
  {
    id: "hiace-bromo",
    name: "Hiace Bromo Midnight Group Tour",
    tagline: "Sunrise Bromo",
    image: "/halaman-surabaya/PAKET-TOUR/BROMO-MIDNIGHT_TOUR-DARI-SURABAYA.webp",
    capacity: "12-14 Penumpang",
    description: "Perjalanan aman ke Bromo untuk lihat sunrise spektakuler. Suspensi empuk untuk jalan berliku.",
    highlights: ["Jeep Bromo", "Sunrise Point", "Foto Spot"],
  },
  {
    id: "hiace-malang",
    name: "Hiace Surabaya-Malang Batu",
    tagline: "Wisata Jatim",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MALANG-BATU-TOUR.webp",
    capacity: "Max 14 Penumpang",
    description: "Jatim Park, Museum Angkut, Batu Secret Zoo untuk rombongan. Layanan profesional untuk liburan berkesan.",
    highlights: ["Jatim Park", "Museum Angkut", "Batu Night Spectacular"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio Luxury Event",
    tagline: "Wedding & VIP",
    image: "/armada/hiace-premio-luxury.webp",
    capacity: "VIP Guests",
    description: "Transportasi mewah untuk wedding, corporate event atau tamu VIP dengan interior premium.",
    highlights: ["Unit Bersih Wangi", "Premium Sound", "Dekorasi Opsional"],
  },
];

export default function SurabayaHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20sewa%20Hiace%20Surabaya.%20Boleh%20info%20ketersediaan%20dan%20harga?";

  return (
    <main className={`${inter.className} min-h-screen bg-slate-50 pb-24`}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/armada/hiace-premio-luxury.webp"
            alt="Hiace Surabaya Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/90 via-orange-900/80 to-red-900/70" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/30 text-orange-200 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Car className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide">
              GROUP TRANSPORT SURABAYA
            </span>
          </div>
          <Link href="/rental-mobil-surabaya" className="inline-flex items-center gap-2 text-orange-200 hover:text-white font-semibold mb-6 absolute left-4 top-4">
            <ChevronLeft className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Rental Hiace Surabaya
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-200">
              Group &amp; Wisata
            </span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solusi transportasi rombongan 10-14 orang dari Bandara Juanda ke Bromo, Madura, Malang. 
            Unit terawat, sopir berpengalaman, harga kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-orange-50 text-orange-600 font-bold text-lg px-8 py-6 rounded-xl shadow-lg"
              asChild
            >
              <Link href="#paket">Lihat Paket Hiace</Link>
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 rounded-t-3xl shadow-sm mx-auto max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Kapasitas 14 Seat", sub: "Lega &amp; Nyaman" },
              { icon: Zap, label: "Full AC Ducting", sub: "Dingin Merata" },
              { icon: Armchair, label: "Reclining Seat", sub: "Istirahat Nyaman" },
              { icon: ShieldCheck, label: "Driver Juanda Pro", sub: "Hafal Rute Jatim" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-600 group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900">{item.label}</h3>
                <p className="text-sm text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Grid */}
      <section id="paket" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <Badge variant="outline" className="border-orange-500 text-orange-600 mb-4">
                PILIHAN PAKET
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Hiace Premio &amp; Commuter Surabaya
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl">
                Pilih sesuai kebutuhan: lepas kunci atau sopir. Kapasitas besar untuk keluarga, kantor, atau tour grup.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {hiacePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row h-full"
              >
                <div className="relative w-full md:w-2/5 min-h-[240px] md:min-h-full aspect-[4/5]">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {pkg.isPopular && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white font-bold border-none">
                        BEST CHOICE
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                        {pkg.tagline}
                      </Badge>
                      <span className="text-xs font-medium text-slate-400 flex items-center">
                        <Users className="w-3 h-3 mr-1" /> {pkg.capacity}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6 border-t border-slate-100 pt-4">
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-center text-xs font-medium text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2" />
                          {h}
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 font-medium h-12 rounded-xl shadow-lg shadow-orange-200"
                    >
                      <a
                        href={`https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20${pkg.name.replace(/ /g, '%20')}.%20Info%20harga%20dan%20jadwal?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cek Harga &amp; Ketersediaan
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Kenapa Hiace VRN Surabaya?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Unit 2021+ terawat & bersih",
                    "Sopir ramah, rapi, hafal rute Jatim",
                    "Interior bebas rokok, wangi",
                    "Harga nett tanpa hidden fee",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-white p-1 rounded-full shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-slate-500 mb-6">
                  Penawaran khusus rombongan besar atau perusahaan?
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Dapatkan Penawaran
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

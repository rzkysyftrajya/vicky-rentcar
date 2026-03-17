import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
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
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Hiace Medan Terbaik | Group Tour & City Tour | VRN Rent Car",
  description: "Paket rental Toyota Hiace Premio & Commuter untuk group keluarga, city tour Medan, antar jemput bandara XL. Mulai Rp1.200rb/hari. Kapasitas 14 orang.",
  keywords: "sewa hiace medan, rental hiace commuter medan, paket hiace tour medan, hiace premio luxury medan, sewa hiace group medan, hiace bandara kualanamu",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/hiace",
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
    name: "Hiace City Tour Medan 1 Hari",
    tagline: "Jelajahi Kota Medan",
    image: "/medan/paket-hiace/hiace-city-tour-medan-1-hari.webp",
    capacity: "Max 14 Penumpang",
    description: "Eksplorasi landmark ikonik Medan seperti Istana Maimun dan Masjid Raya dengan kenyamanan maksimal untuk rombongan Anda.",
    highlights: ["Full AC & Karaoke", "City Tour Guide", "BBM Termasuk"],
  },
  {
    id: "hiace-group-family",
    name: "Hiace Keluarga Besar Medan-Berastagi",
    tagline: "Liburan Keluarga",
    image: "/medan/paket-hiace/hiace-keluarga-besar-medan-berastagi.webp",
    capacity: "Max 14 Penumpang",
    description: "Nikmati udara sejuk Berastagi. Sangat cocok untuk gathering keluarga besar, arisan, atau reuni santai.",
    highlights: ["Rute Fleksibel", "Bagasi Luas", "Driver Sabar"],
    isPopular: true,
  },
  {
    id: "hiace-airport-xl",
    name: "Hiace Antar Jemput Bandara XL",
    tagline: "Airport Transfer",
    image: "/medan/paket-hiace/hiace-antar-jemput-bandara-xl.webp",
    capacity: "Kapasitas Bagasi Extra",
    description: "Layanan penjemputan VIP di Kualanamu. Tidak perlu pusing dengan koper banyak, armada kami siap menampung.",
    highlights: ["On-Time Guarantee", "Bantuan Bagasi", "Signboard Penjemputan"],
  },
  {
    id: "hiace-danau-toba",
    name: "Hiace Danau Toba Group Tour",
    tagline: "Wisata Danau Toba",
    image: "/medan/paket-hiace/hiace-danau-toba-group-tour.webp",
    capacity: "12-14 Penumpang",
    description: "Perjalanan nyaman melintasi jalur berliku menuju Parapat dan Samosir. Suspensi empuk, perjalanan tidak terasa melelahkan.",
    highlights: ["Wisata Samosir", "Ferry Access", "Pemandu Lokal"],
    isPopular: true,
  },
  {
    id: "hiace-corporate",
    name: "Hiace Outbound Korporat",
    tagline: "Business & Corporate",
    image: "/medan/paket-hiace/hiace-outbond-korporat.webp",
    capacity: "Max 14 Penumpang",
    description: "Solusi transportasi untuk kunjungan dinas, survey lapangan, atau team building perusahaan dengan standar profesional.",
    highlights: ["Invoice Resmi", "Driver Formal", "Tepat Waktu"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio Luxury Wedding",
    tagline: "Wedding & VIP",
    image: "/medan/paket-hiace/hiace-premio-luxury-wedding.webp",
    capacity: "VIP Guests",
    description: "Transportasi elegan untuk rombongan pengantin atau tamu VIP. Interior mewah untuk momen spesial Anda.",
    highlights: ["Unit Bersih Wangi", "Dekorasi Opsional", "Premium Sound"],
  },
];

export default function HiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20sewa%20Hiace%20Medan.%20Boleh%20info%20ketersediaan%20dan%20penawaran%20terbaik?";

  return (
    <main className={`${inter.className} min-h-screen bg-slate-50 pb-24`}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/medan/paket-hiace/hiace-premio-luxury-wedding.webp"
            alt="Hiace Medan Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-50" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Car className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide">
              SPECIALIST GROUP TRANSPORT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Rental Hiace Medan
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Premium & Nyaman
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solusi transportasi terbaik untuk rombongan 10-14 orang. Unit
            terawat, suspensi empuk, dan sopir berpengalaman siap menemani
            perjalanan Anda di Sumatera Utara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg px-8 py-6 rounded-xl"
              asChild
            >
              <Link href="#paket">Lihat Pilihan Armada</Link>
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Konsultasi WA
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
              { icon: Users, label: "Kapasitas 14 Seat", sub: "Lega & Nyaman" },
              { icon: Zap, label: "Full AC Ducting", sub: "Dingin Merata" },
              { icon: Armchair, label: "Reclining Seat", sub: "Istirahat Nyaman" },
              { icon: ShieldCheck, label: "Driver Pro", sub: "Hafal Rute Sumut" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-50 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition-colors" />
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
              <Badge variant="outline" className="border-amber-500 text-amber-600 mb-4">
                PILIHAN PAKET
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Hiace Premio & Commuter
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl">
                Pilih paket sewa sesuai kebutuhan perjalanan Anda. Tersedia
                layanan lepas kunci (syarat berlaku) atau dengan driver.
              </p>
            </div>
            <Link href="#paket">
              <Button variant="ghost" className="text-amber-600 hover:text-amber-700">
                Lihat Semua Layanan <Car className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {hiacePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row h-full"
              >
                {/* Card Image */}
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
                      <Badge className="bg-amber-500 text-slate-900 font-bold border-none">
                        BEST CHOICE
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Card Body */}
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Amenities/Highlights */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6 border-t border-slate-100 pt-4">
                      {pkg.highlights.map((h, i) => (
                        <div key={i} className="flex items-center text-xs font-medium text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2" />
                          {h}
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-900 text-white transition-all duration-300 font-medium h-12 rounded-xl shadow-lg shadow-slate-200"
                    >
                      <a
                        href={`https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20dengan%20${pkg.name}.%20Mohon%20info%20harga%20dan%20ketersediaan.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cek Ketersediaan & Harga
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Kenapa Sewa Hiace di VRN?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Unit tahun muda (2020 UP) & Terawat",
                    "Supir ramah, rapi, dan tidak ugal-ugalan",
                    "Interior bersih dan wangi (Bebas Asap Rokok)",
                    "Harga transparan tanpa biaya tersembunyi",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-white p-1 rounded-full shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-slate-500 mb-6">
                  Butuh penawaran khusus untuk perusahaan atau event organizer?
                </p>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8"
                  asChild
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubungi Kami Sekarang
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

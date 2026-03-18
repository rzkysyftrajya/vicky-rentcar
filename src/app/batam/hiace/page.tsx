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
import Footer from "@/components/batam/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Hiace Batam | Rental Group Island Hopping & Ferry Singapore | VRN",
  description: "Sewa Toyota Hiace Batam untuk rombongan ke Ranoh Island, Pulau Abang, ferry Singapore-Malaysia. Kapasitas 14 orang. Driver lokal hafal Kepri.",
  keywords: "sewa hiace batam, rental hiace kepri, paket hiace ranoh batam, hiace ferry singapore, sewa hiace group batam, hiace pulau abang",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcar.com/batam/hiace",
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
    id: "hiace-ranoh",
    name: "Hiace Ranoh Island Group Tour",
    tagline: "Pulau Eksotis",
    image: "/batam/PAKET-TOUR/TOUR-RANOH-ISLAND.webp",
    capacity: "Max 14 Penumpang",
    description: "Transportasi nyaman ke pelabuhan + wisata Ranoh Island. Snorkeling, banana boat untuk rombongan besar.",
    highlights: ["Snorkeling", "Banana Boat", "Beach Hopping"],
    isPopular: true,
  },
  {
    id: "hiace-abang",
    name: "Hiace Pulau Abang Island Hopping",
    tagline: "Underwater Paradise",
    image: "/batam/PAKET-TOUR/TOUR-PULAU-ABANG.webp",
    capacity: "Max 14 Penumpang",
    description: "Hiace premium ke Abang untuk snorkeling + dokumentasi gratis. Cocok keluarga atau kantor.",
    highlights: ["Underwater Photo", "Island Hopping", "Gear Lengkap"],
  },
  {
    id: "hiace-batam-city",
    name: "Hiace Batam City & Barelang Tour",
    tagline: "Kota Batam",
    image: "/armada/hiace-commuter.webp",
    capacity: "Kapasitas Besar",
    description: "Jelajahi Jembatan Barelang, Nagoya Hill, Masjid Sultan dengan sopir lokal berpengalaman.",
    highlights: ["Barelang Full Tour", "Shopping Nagoya", "Kuliner Batam"],
    isPopular: true,
  },
  {
    id: "hiace-ferry-singapore",
    name: "Hiace Ferry Singapore-Malaysia",
    tagline: "Cross Border",
    image: "/armada/hiace-premio.webp",
    capacity: "12-14 Penumpang",
    description: "Transportasi aman ke pelabuhan ferry Batam Centre/Sekupang untuk Singapore/Johor. Bagasi XL.",
    highlights: ["Ferry Assistance", "Border Support", "VIP Waiting"],
  },
  {
    id: "hiace-bintan",
    name: "Hiace Bintan Treasure Bay Tour",
    tagline: "Wisata Bintan",
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BINTAN.webp",
    capacity: "Max 14 Penumpang",
    description: "Ferry ke Bintan + wisata Gurun Pasir, Telaga Biru, Treasure Bay dengan armada nyaman.",
    highlights: ["Treasure Bay", "Telaga Biru", "Ferry Ticket"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio Luxury Batam",
    tagline: "VIP & Wedding",
    image: "/armada/hiace-premio-luxury.webp",
    capacity: "VIP Guests",
    description: "Unit mewah untuk event wedding, corporate gathering atau tamu VIP di Batam.",
    highlights: ["Interior Premium", "Sound System", "AC Super Dingin"],
  },
];

export default function BatamHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20mau%20sewa%20Hiace%20Batam.%20Info%20paket%20island%20hopping%20dan%20ferry?";

  return (
    <>
      <main className={`${inter.className} min-h-screen bg-slate-50 pb-12`}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-teal-600 via-teal-500 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/armada/hiace-premio-luxury.webp"
              alt="Hiace Batam Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-800/80 to-cyan-900/70" />
          </div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <div className="inline-flex items-center gap-2 bg-teal-400/20 border border-teal-400/30 text-teal-200 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Car className="w-4 h-4" />
              <span className="font-semibold text-sm tracking-wide">
                KEPRI GROUP SPECIALIST
              </span>
            </div>
            <Link href="/batam" className="inline-flex items-center gap-2 text-teal-200 hover:text-white font-semibold mb-6 absolute left-4 top-4">
              <ChevronLeft className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Rental Hiace Batam
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300">
                Island &amp; Ferry
              </span>
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Transportasi rombongan untuk island hopping Ranoh Abang, ferry Singapore, Bintan. 
              Driver lokal, unit premium, kenal seluk-beluk Kepulauan Riau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-teal-50 text-teal-700 font-bold text-lg px-8 py-6 rounded-xl shadow-lg"
                asChild
              >
                <Link href="#paket">Lihat Paket</Link>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Chat WA Sekarang
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
                { icon: Users, label: "Kapasitas 14 Seat", sub: "Group Besar OK" },
                { icon: Zap, label: "Full AC Dingin", sub: "Tropis Friendly" },
                { icon: Luggage, label: "Bagasi XL Ferry", sub: "Singapore Ready" },
                { icon: ShieldCheck, label: "Driver Lokal Kepri", sub: "Hafal Pelabuhan" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-50 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-600 group-hover:text-teal-600 transition-colors" />
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
                <Badge variant="outline" className="border-teal-500 text-teal-600 mb-4">
                  PAKET ISLAND HOPPING
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Hiace Batam Premio &amp; Commuter
                </h2>
                <p className="text-slate-600 mt-2 max-w-xl">
                  Layanan fleksibel: tour pulau, ferry cross border, city tour Batam.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {hiacePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row h-full"
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
                        <Badge className="bg-teal-500 text-white font-bold border-none">
                          POPULAR
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
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
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
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2" />
                            {h}
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 font-medium h-12 rounded-xl shadow-lg shadow-teal-200"
                      >
                        <a
                          href={`https://wa.me/6282363389893?text=Halo%20VRN,%20tertarik%20${pkg.name.replace(/ /g, '%20')}.%20Kapan%20bisa%20booking?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Booking Sekarang
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-teal-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Keunggulan Hiace VRN Batam
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Unit muda, siap laut & feri",
                      "Driver lokal, hafal jadwal speedboat",
                      "Bagasi super luas untuk diving gear",
                      "Harga spesial rombongan island hopping",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-white p-1 rounded-full shadow-sm">
                          <ShieldCheck className="w-4 h-4 text-teal-500" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-slate-500 mb-6">
                    Custom tour atau grup besar?
                  </p>
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8"
                    asChild
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Custom Paket
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

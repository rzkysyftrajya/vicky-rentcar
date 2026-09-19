import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tourPackages } from "@/data/medan-tour-packages";
import { Phone, MapPin, Calendar, Users } from "lucide-react";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp"; // assume exists

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Tour Medan Danau Toba Terbaik | VRN Rent Car",
  description: "Pilihan paket wisata Medan, Danau Toba, Berastagi, dan Bukit Lawang dengan harga terbaik. Mulai Rp700rb. Sopir guide berpengalaman.",
  keywords: "paket tour medan, wisata danau toba, tour berastagi, paket wisata sumut, honeymoon toba, bukit lawang trekking, vrn rentcar tour",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/paket-tour",
  },
};

export default function PaketTourPage() {
  const whatsappLink = "https://wa.me/6282363389893?text=Halo VRN, saya tertarik paket tour. Bisa kirim detail & harga?";

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      
      {/* Hero */}
      <section className="relative h-[60vh] bg-gradient-to-r from-teal-600 to-emerald-700 flex items-center justify-center text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5" />
            <span className="font-bold text-lg">PAKET TOUR MEDAN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl">
            Jelajahi Sumatera Utara
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-lg">
            Paket wisata Danau Toba, Berastagi, Bukit Lawang dengan sopir guide profesional
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-xl px-12 font-bold shadow-2xl" asChild>
            <Link href="#paket">
              Lihat Paket Terbaik
              <Users className="w-6 h-6 ml-3" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Paket Grid */}
      <section id="paket" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold mb-6 inline-flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              10+ PAKET TERBAIK
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Pilih Paket Wisata Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket tour yang sesuai kebutuhan liburan keluarga, honeymoon, atau petualangan. Semua paket sudah include mobil, sopir guide, dan akomodasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tourPackages.map((tour) => (
              <div key={tour.id} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden w-full aspect-[4/5] max-w-[644px] mx-auto">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold shadow-lg">
                      {tour.duration}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{tour.description}</p>
                  
                  {/* Destinations */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-teal-600" />
                      Destinasi Utama
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.slice(0, 4).map((dest, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA without price */}
                  <div className="mb-8" />

                  {/* CTA */}
                  <Button size="lg" className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-xl font-bold text-lg" asChild>
                    <a href={`https://wa.me/6282363389893?text=Halo VRN, saya tertarik ${tour.name} (${tour.duration}). Bisa kirim itinerary & harga detail?`} target="_blank" rel="noopener noreferrer">
                      Lihat Detail Paket
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="text-2xl px-16 py-8 border-4 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white shadow-2xl font-bold">
              <Phone className="w-8 h-8 mr-4" />
              Tanya Paket Custom via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}

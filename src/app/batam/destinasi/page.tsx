import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/batam/Navbar";
import { MapPin, Phone, MessageCircle, ArrowRight, Star, Clock, Building, Utensils, ShoppingBag, Camera, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Destinasi - batam | Tour VRN Rent Car & Tempat Menarik di batam",
  description: "Jelajahi destinasi menarik di batam: Nagoya Hill, Barelang Bridge, Tanjung Uma, dan lainnya. Tour dengan mobil sewa nyaman.",
};

const destinations = [
  {
    title: "Nagoya Hill Shopping Center",
    description: "Pusan terbesar di batat perbelanjaam dengan berbagai brand lokal & internasional. Fasilitas lengkap mulai dari belanja, makan, hingga hiburan.",
    icon: ShoppingBag,
    emoji: "🛍️",
    color: "bg-pink-500",
    jam: "10.00 - 22.00",
    kategori: "Belanja",
    image: "/batam/destinasi/nagoya-hill.webp"
  },
  {
    title: "Barelang Bridge",
    description: "Jembatan ikonik yang menghubungkan beberapa pulau di batam. Tempat sempurna untuk berfoto dengan pemandangan laut yang indah.",
    icon: MapPin,
    emoji: "🌉",
    color: "bg-blue-500",
    jam: "24 Jam",
    kategori: "Wisata",
    image: "/batam/destinasi/barelang-bridge.webp"
  },
  {
    title: "Batam Centre",
    description: "Pusat pemerintahan dan bisnis di kota batam. Area modern dengan berbagai fasilitas publik.",
    icon: Building,
    emoji: "🏛️",
    color: "bg-purple-500",
    jam: "24 Jam",
    kategori: "Bisnis",
    image: "/batam/destinasi/batam-centre.webp"
  },
  {
    title: "Tanjung Uma",
    description: "Kawasan kuliner tradisional dan oleh-oleh khas batam. Nikmati seafood segar dan makanan khas kepulauan.",
    icon: Utensils,
    emoji: "🦞",
    color: "bg-orange-500",
    jam: "08.00 - 23.00",
    kategori: "Kuliner",
    image: "/batam/destinasi/tanjung-uma.webp"
  },
  {
    title: "Mega Mall batam",
    description: "Mall modern dengan berbagai hiburan dan restoran. Tempat sempurna untuk menghabiskan waktu bersama keluarga.",
    icon: ShoppingBag,
    emoji: "🏬",
    color: "bg-red-500",
    jam: "10.00 - 22.00",
    kategori: "Belanja",
    image: "/batam/destinasi/mega-mall.webp"
  },
  {
    title: "Golden City",
    description: "Area rekreasi dengan berbagai wahana menarik. Cocok untuk keluarga dan anak-anak.",
    icon: Palmtree,
    emoji: "🎡",
    color: "bg-yellow-500",
    jam: "09.00 - 18.00",
    kategori: "Rekreasi",
    image: "/batam/destinasi/golden-city.webp"
  },
  {
    title: "Botanical Garden",
    description: "Taman hijau dengan berbagai tanaman eksotis. Tempat rileks dan edukatif.",
    icon: Palmtree,
    emoji: "🌿",
    color: "bg-green-500",
    jam: "07.00 - 17.00",
    kategori: "Wisata",
    image: "/batam/destinasi/botanical-garden.webp"
  },
  {
    title: "Kei Market",
    description: "Pasar tradisional yang menjual oleh-oleh khas batam dan kepulauan Riau.",
    icon: ShoppingBag,
    emoji: "🛒",
    color: "bg-teal-500",
    jam: "06.00 - 18.00",
    kategori: "Belanja",
    image: "/batam/destinasi/kei-market.webp"
  },
];

export default function DestinasiPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20booking%20tour%20di%20Batam";

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
            🗺️ Destinasi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jelajahi batam
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Destinasi populer yang bisa Anda посещ dengan rental mobil kami
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((place, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-teal-200 hover:-translate-y-2 group"
              >
                <div className="h-40 relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs">
                    {place.kategori}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{place.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{place.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    {place.jam}
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                    <a href={waLink} target="_blank">
                      Book Tour
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ingin ke destinasi lain?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk memesan tour ke destinasi pilihan Anda. Sopir profesional akan mengantar ke tujuan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700" asChild>
              <a href="tel:+6282363389893">
                <Phone className="w-5 h-5 mr-2" />
                Telepon
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white">🏝️</span>
                </div>
                <span className="font-bold text-xl"><span className="text-yellow-400">VRN</span> Rent Car</span>
              </div>
              <p className="text-gray-400 text-sm">Layanan rental mobil terpercaya di batam, Kepulauan Riau.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/batam/layanan" className="hover:text-white">Rental Harian</a></li>
                <li><a href="/batam/layanan" className="hover:text-white">Rental Bulanan</a></li>
                <li><a href="/batam/armada" className="hover:text-white">Armada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/batam" className="hover:text-white">Beranda</a></li>
                <li><a href="/batam/tentang" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/batam/kontak" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 823-6338-9893</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> batam</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} VRN Rent Car batam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

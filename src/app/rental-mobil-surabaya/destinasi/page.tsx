import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, ArrowRight, Star, Clock, Building, Utensils, ShoppingBag, Camera, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Destinasi - Surabaya | Tour VRN Rent Car & Tempat Menarik di Surabaya",
  description: "Jelajahi destinasi menarik di Surabaya: Tugu Pahlawan, House of Sampoerna, Jembatan Suramadu, dan lainnya. Tour dengan mobil sewa nyaman.",
};

const destinations = [
  {
    title: "Tugu Pahlawan & Museum",
    description: "Ikon Surabaya yang wajib dikunjungi, simbol perjuangan arek-arek Suroboyo. Nikmati sejarah perjuangan bangsa.",
    icon: MapPin,
    emoji: "🏛️",
    color: "bg-red-500",
    jam: "08.00 - 17.00",
    kategori: "Sejarah",
    image: "/halaman-surabaya/tugu-pahlawan.jpeg"
  },
  {
    title: "House of Sampoerna",
    description: "Museum heritage dengan arsitektur kolonial yang instagramable. Tempat mempelajari sejarah rokok Indonesia.",
    icon: Building,
    emoji: "🏭",
    color: "bg-orange-500",
    jam: "09.00 - 18.00",
    kategori: "Budaya",
    image: "/halaman-surabaya/house-of-sampoerna.jpeg"
  },
  {
    title: "Jembatan Suramadu",
    description: "Jembatan terpanjang di Indonesia, spot foto sunset terbaik dengan pemandangan laut yang indah.",
    icon: MapPin,
    emoji: "🌉",
    color: "bg-blue-500",
    jam: "24 Jam",
    kategori: "Landmark",
    image: "/halaman-surabaya/jembatan-suramadu.jpg"
  },
  {
    title: "Kebun Binatang Surabaya",
    description: "Salah satu kebun binatang tertua di Asia Tenggara. Cocok untuk outings keluarga.",
    icon: Palmtree,
    emoji: "🦁",
    color: "bg-green-500",
    jam: "08.00 - 16.00",
    kategori: "Wisata Keluarga",
    image: "/halaman-surabaya/kebun-binatang-surabaya.jpg"
  },
  {
    title: "Pantai Kenjeran & Pagoda",
    description: "Sunrise spektakuler & kuliner seafood segar. Nikmati keindahan pantai timur Surabaya.",
    icon: Palmtree,
    emoji: "🏖️",
    color: "bg-cyan-500",
    jam: "24 Jam",
    kategori: "Pantai",
    image: "/halaman-surabaya/Pantai-Kenjeran-Pagoda.jpg"
  },
  {
    title: "Ciputra Waterpark",
    description: "Waterpark terbesar di Surabaya dengan berbagai wahana seru untuk keluarga.",
    icon: Palmtree,
    emoji: "🎢",
    color: "bg-purple-500",
    jam: "10.00 - 18.00",
    kategori: "Hiburan",
    image: "/halaman-surabaya/Ciputra-Waterpark.webp"
  },
  {
    title: "Taman Bungkul",
    description: "Taman kota moderna dengan fasilitas lengkap. Tempat jogging dan bersantai favorite warga Surabaya.",
    icon: Palmtree,
    emoji: "🌳",
    color: "bg-green-500",
    jam: "24 Jam",
    kategori: "Rekreasi",
    image: "/batam/destinasi/botanical-garden.webp"
  },
  {
    title: "Kenjeran Beach",
    description: "Pantai buatan dengan nuansa oriental. Terdapat pagoda dan berbagai spot foto menarik.",
    icon: Palmtree,
    emoji: "🗿",
    color: "bg-yellow-500",
    jam: "24 Jam",
    kategori: "Wisata",
    image: "/halaman-surabaya/Pantai-Kenjeran-Pagoda.jpg"
  },
];

export default function DestinasiPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20booking%20tour%20di%20Surabaya";

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-blue-50 to-white`}>
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 text-center relative z-10">
          <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
            🗺️ Destinasi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jelajahi Surabaya
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Destinasi populer yang bisa Anda kunjungi dengan rental mobil kami
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-2 group"
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

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ingin ke destinasi lain?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk memesan tour ke destinasi pilihan Anda. Sopir profesional akan mengantar ke tujuan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700" asChild>
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
                  <span className="text-white">🚗</span>
                </div>
                <span className="font-bold text-xl"><span className="text-yellow-400">VRN</span> Rent Car</span>
              </div>
              <p className="text-gray-400 text-sm">Layanan rental mobil terpercaya di Surabaya, Jawa Timur.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/rental-mobil-surabaya/layanan" className="hover:text-white">Rental Harian</a></li>
                <li><a href="/rental-mobil-surabaya/layanan" className="hover:text-white">Rental Bulanan</a></li>
                <li><a href="/rental-mobil-surabaya/armada" className="hover:text-white">Armada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/rental-mobil-surabaya" className="hover:text-white">Beranda</a></li>
                <li><a href="/rental-mobil-surabaya/tentang" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="/rental-mobil-surabaya/kontak" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 823-6338-9893</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Surabaya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} VRN Rent Car Surabaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}


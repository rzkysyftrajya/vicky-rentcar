"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, MapPin, Star, BedDouble, Users, Briefcase, Heart,
  Car, MessageCircle, ArrowRight, Building, Hotel, Sparkles, ArrowUpDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeMotionDiv } from "@/components/ui/safe-motion";

const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20tertarik%20dengan%20paket%20hotel%20dan%20mobil%20di%20Batam";

const hotels = [
  {
    name: "HARRIS Hotel Batam Center",
    category: "Bisnis",
    description: "Lokasi strategis dekat terminal ferry dan mall, ideal untuk pebisnis.",
    image: "/batam/hotel/harris-batam-center.webp",
    rating: 4.5,
  },
  {
    name: "Radisson Golf & Convention Center",
    category: "Staycation",
    description: "Nikmati pemandangan lapangan golf yang hijau dan fasilitas mewah.",
    image: "/batam/hotel/radisson-golf-batam.webp",
    rating: 4.8,
  },
  {
    name: "Montigo Resorts, Nongsa",
    category: "Keluarga",
    description: "Villa pribadi dengan kolam renang, cocok untuk liburan keluarga.",
    image: "/batam/hotel/montigo-resorts.webp",
    rating: 4.7,
  },
  {
    name: "Turi Beach Resort",
    category: "Honeymoon",
    description: "Suasana romantis di tepi pantai dengan pemandangan laut yang indah.",
    image: "/batam/hotel/turi-beach-resorts.webp",
    rating: 4.6,
  },
  {
    name: "Swiss-Belhotel Harbour Bay",
    category: "Bisnis",
    description: "Akses mudah ke pusat bisnis dan hiburan di Harbour Bay.",
    image: "/batam/hotel/swiss-belhotel-harbour-bay.webp",
    rating: 4.5,
  },
  {
    name: "Batam Marriott Hotel Harbour Bay",
    category: "Honeymoon",
    description: "Kemewahan dan layanan bintang lima untuk momen tak terlupakan.",
    image: "/batam/hotel/batam-marriot-hotel-harbour-bay.webp",
    rating: 4.9,
  },
  {
    name: "Best Western Premier Panbil",
    category: "Staycation",
    description: "Hotel modern dengan infinity pool yang menakjubkan.",
    image: "/batam/hotel/best-western-premier-panbil.webp",
    rating: 4.6,
  },
  {
    name: "Nongsa Point Marina & Resort",
    category: "Keluarga",
    description: "Resort dengan marina pribadi dan berbagai aktivitas air.",
    image: "/batam/hotel/nongsa-point-marina-resort.webp",
    rating: 4.4,
  },
  {
    name: "Aston Batam Hotel & Residence",
    category: "Bisnis",
    description: "Hotel modern di pusat kota dengan fasilitas lengkap untuk pebisnis dan keluarga.",
    image: "/batam/hotel/aston-batam-hotel-residence.webp",
    rating: 4.6,
  },
  {
    name: "Planet Holiday Hotel",
    category: "Bisnis",
    description: "Hotel ikonik di Jodoh dengan akses mudah ke pusat perbelanjaan.",
    image: "/batam/hotel/planet-holiday-hotel.webp",
    rating: 4.3,
  },
  {
    name: "Batam View Beach Resort",
    category: "Keluarga",
    description: "Resort pantai di Nongsa dengan berbagai aktivitas watersport.",
    image: "/batam/hotel/batam-view-beach-resort.webp",
    rating: 4.4,
  },
  {
    name: "Eska Hotel",
    category: "Staycation",
    description: "Hotel butik dengan spa mewah dan rooftop bar yang nyaman.",
    image: "/batam/hotel/eska-hotel-batam.webp",
    rating: 4.5,
  },
];

const categories = [
  { name: "Semua", icon: Hotel },
  { name: "Staycation", icon: BedDouble },
  { name: "Keluarga", icon: Users },
  { name: "Bisnis", icon: Briefcase },
  { name: "Honeymoon", icon: Heart },
];

type Category = "Semua" | "Staycation" | "Keluarga" | "Bisnis" | "Honeymoon";

export default function RekomendasiHotelPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  const filteredHotels = hotels
    .filter(hotel => activeCategory === "Semua" ? true : hotel.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/batam/hotel/radisson-golf-batam.webp')" }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge className="bg-amber-400 text-black mb-4">🏨 REKOMENDASI</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hotel Terbaik di Batam
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Temukan akomodasi ideal di Batam, dari liburan keluarga, perjalanan bisnis, hingga honeymoon romantis.
          </p>
        </div>
      </section>

      {/* KATEGORI HOTEL SECTION */}
      <section className="py-16 bg-white sticky top-16 z-30 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name as Category)}
                className={`transition-all ${activeCategory === category.name ? 'bg-teal-600 text-white' : 'text-gray-700 border-gray-300 hover:bg-teal-50 hover:border-teal-400'}`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID HOTEL SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel, index) => (
              <SafeMotionDiv
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {hotel.rating}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <Badge variant="secondary" className="mb-2 self-start bg-teal-100 text-teal-700">{hotel.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{hotel.description}</p>
                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <Button className="w-full sm:w-auto flex-1 bg-teal-600 hover:bg-teal-700" asChild>
                      <a href={waLink} target="_blank">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tanya Hotel
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto flex-1" asChild>
                      <a href={waLink} target="_blank">
                        <Car className="w-4 h-4 mr-2" />
                        + Mobil
                      </a>
                    </Button>
                  </div>
                </div>
              </SafeMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* PAKET BUNDLING SECTION */}
      <section className="py-20 bg-gradient-to-r from-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-yellow-400 text-black mb-4">PAKET HEMAT</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bundling Hotel + Rental Mobil
              </h2>
              <p className="text-teal-100/90 mb-8 max-w-lg">
                Dapatkan harga lebih hemat dengan memesan paket hotel dan rental mobil sekaligus. Nikmati kemudahan transportasi dari bandara, ke hotel, hingga berkeliling Batam tanpa repot.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold" asChild>
                <a href={waLink} target="_blank">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Dapatkan Penawaran Spesial
                </a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <Image
                  src="/batam/destinasi/barelang-bridge.webp"
                  alt="Paket Bundling"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-center gap-2">
                  <Car className="w-6 h-6 text-teal-300" />
                  <span className="font-semibold">Innova Reborn Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA AKHIR SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Butuh Rekomendasi Lain?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menemukan hotel dan paket perjalanan terbaik yang sesuai dengan budget dan kebutuhan Anda di Batam.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
            <a href={waLink} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl"></span>
                </div>
                <div className="font-bold text-xl">
                  <span className="text-yellow-400">VRN</span> Rent Car
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Layanan rental mobil terpercaya di Batam, Kepulauan Riau. Siap melayani kebutuhan transportasi bisnis dan transit Anda di Batam dengan armada terbaik.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/batam/layanan" className="hover:text-white transition">Rental Harian</Link></li>
                <li><Link href="/batam/layanan" className="hover:text-white transition">Rental Bulanan</Link></li>
                <li><Link href="/batam/layanan" className="hover:text-white transition">Antar Jemput Bandara</Link></li>
                <li><Link href="/batam/destinasi" className="hover:text-white transition">City Tour</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/batam" className="hover:text-white transition">Beranda</Link></li>
                <li><Link href="/batam/armada" className="hover:text-white transition">Armada</Link></li>
                <li><Link href="/batam/rekomendasi-hotel" className="hover:text-white transition">Rekomendasi Hotel</Link></li>
                <li><Link href="/batam/kontak" className="hover:text-white transition">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400" /> 
                  +62 823-6338-9893
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-teal-400" /> 
                  WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-400" /> 
                  Batam, Kepulauan Riau
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} VRN Rent Car Batam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

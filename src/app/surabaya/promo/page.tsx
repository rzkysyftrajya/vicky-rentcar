import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/surabaya/Navbar";
import { MapPin, Phone, MessageCircle, Gift, Tag, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promo - VRN Rent Car Surabaya | Diskon & Offer Terbaik",
  description: "Dapatkan promo menarik dari VRN Rent Car Surabaya. Diskon rental mobil, bonus kilometers, dan oferta eksklusif.",
};

const promos = [
  {
    title: "Promo Musim Liburan",
    description: "Diskon hingga 20% untuk rental mobil selama musim liburan",
    discount: "20%",
    code: "LIBURAN20",
    validUntil: "31 Desember 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Promo Booking Awal",
    description: "Diskon 15% untuk pemesanan 7 hari sebelum berangkat",
    discount: "15%",
    code: "EARLY15",
    validUntil: "30 Juni 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Promo Loyalitas",
    description: "Diskon 10% untuk pelanggan kedua kali dan seterusnya",
    discount: "10%",
    code: "LOYAL10",
    validUntil: "31 Desember 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Promo Paket Wedding",
    description: "Paket lengkap mobil pengantin dengan harga special",
    discount: "25%",
    code: "WEDDING25",
    validUntil: "31 Maret 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Promo Corporate",
    description: "Harga special untuk kontrak rental bulanan perusahaan",
    discount: "30%",
    code: "CORP30",
    validUntil: "31 Desember 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Promo Airport Transfer",
    description: "Gratis waiting charge untuk antar jemput bandara",
    discount: "FREE",
    code: "AIRPORT",
    validUntil: "30 April 2026",
    image: "/surabaya/promo-lebaran.webp",
    color: "from-yellow-500 to-amber-500"
  },
];

export default function PromoPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20menggunakan%20promo%20VRN%20Surabaya";

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
            🎁 Promo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Promo Special VRN Surabaya
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Dapatkan oferta menarik dan diskon eksklusif untuk perjalanan Anda
          </p>
        </div>
      </section>

      {/* Promos Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promos.map((promo, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-2 group"
              >
                <div className={`h-40 bg-gradient-to-r ${promo.color} relative`}>
                  <div className="absolute top-4 right-4 bg-white text-gray-900 font-bold px-4 py-2 rounded-full text-xl shadow-lg">
                    {promo.discount}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gift className="w-16 h-16 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{promo.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-500 mb-1">Kode Promo:</div>
                    <div className="font-mono font-bold text-blue-600">{promo.code}</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    Berlaku hingga {promo.validUntil}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={waLink} target="_blank">
                      Gunakan Promo
                      <Tag className="w-4 h-4 ml-2" />
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
            Tidak menemukan promo yang cocok?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk mendapatkan oferta khusus sesuai kebutuhan Anda
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
                <li><a href="/surabaya/armada" className="hover:text-white">Armada</a></li>
                <li><a href="/surabaya/layanan" className="hover:text-white">Layanan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/surabaya" className="hover:text-white">Beranda</a></li>
                <li><a href="/surabaya/tentang" className="hover:text-white">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 823-6338-9893</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</li>
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


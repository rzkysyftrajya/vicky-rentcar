import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, ArrowRight, Star, Wifi, Coffee, Car, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekomendasi Hotel - VRN Rent Car Surabaya | Akomodasi Terbaik",
  description: "Rekomendasi hotel terbaik di Surabaya dari mulai hotel bintang 5 hingga hotel budget. Lengkap dengan fasilitas dan harga.",
};

const hotels = [
  {
    name: "Hotel Majapahit Surabaya",
    stars: 5,
    area: "Tunjungan",
    desc: "Hotel heritage dengan arsitektur kolonial megah & layanan bintang lima. Tempat sejarah yang menawarkan kemewahan klasik.",
    features: ["Pool", "Spa", "Restaurant", "Gym", "Meeting Room"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
    price: "IDR 1.500.000+"
  },
  {
    name: "JW Marriott Surabaya",
    stars: 5,
    area: "Embong Malang",
    desc: "Kemewahan modern di pusat kota dengan fasilitas business center lengkap. Cocok untuk perjalanan bisnis.",
    features: ["Pool", "Spa", "Restaurant", "Business Center", "Lounge"],
    image: "/halaman-surabaya/JW-Marriott-Surabaya.jpg",
    price: "IDR 2.000.000+"
  },
  {
    name: "Shangri-La Surabaya",
    stars: 5,
    area: "Darmo",
    desc: "Resort city dengan nuansa tropis & kuliner internasional kelas dunia. Pemandangan taman yang asri.",
    features: ["Pool", "Garden", "Restaurant", "Bar", "Executive Floor"],
    image: "/halaman-surabaya/Shangri-La-Surabaya.png",
    price: "IDR 1.800.000+"
  },
  {
    name: "The Westin Surabaya",
    stars: 5,
    area: "Pakuwon City",
    desc: "Hotel modern dengan fasilitas wellness terbaik. Terletak di area strategis dengan akses mudah.",
    features: ["Pool", "Spa", "Gym", "Restaurant", "Kids Club"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
    price: "IDR 1.700.000+"
  },
  {
    name: "Hotel Neosurabaya",
    stars: 3,
    area: "Pertokoan BUB",
    desc: "Hotel modern dengan harga terjangkau di pusat kota. Cocok untuk backpacker dan traveler budget.",
    features: ["WiFi", "AC", "Breakfast", "Parking"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
    price: "IDR 300.000+"
  },
  {
    name: "Capsule Hotel Surabaya",
    stars: 1,
    area: "Genteng",
    desc: "Penginapan capsule modern yang bersih dan nyaman. Cocok untuk traveler solo dengan budget ketat.",
    features: ["WiFi", "AC", "Locker", "Shared Bathroom"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
    price: "IDR 80.000+"
  },
];

export default function RekomendasiHotelPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo%20Vicky%20Rentcar%20Surabaya,%20saya%20mau%20booking%20hotel";

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
            🏨 Rekomendasi Hotel
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Akomodasi Terbaik di Surabaya
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Rekomendasi hotel dari mulai bintang 5 hingga budget, disesuaikan dengan kebutuhan dan budget Anda
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 hover:-translate-y-2 group"
              >
                <div className="h-56 relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                    {hotel.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {hotel.area}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{hotel.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={waLink} target="_blank">
                      Booking Hotel
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
            Butuh bantuan booking hotel?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Tim kami siap membantu Anda booking hotel dengan harga terbaik. Hubungi sekarang!
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
                <li><a href="/rental-mobil-surabaya/armada" className="hover:text-white">Armada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/rental-mobil-surabaya" className="hover:text-white">Beranda</a></li>
                <li><a href="/rental-mobil-surabaya/tentang" className="hover:text-white">Tentang Kami</a></li>
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

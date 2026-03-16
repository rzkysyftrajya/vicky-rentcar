import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Car, Briefcase, MapPin, Plane, Crown, Clock, Phone, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layanan - VRN Rent Car Surabaya | Rental Mobil Harian, Bulanan, Airport",
  description: "Layanan rental mobil di Surabaya: harian, bulanan, antar jemput bandara Juanda, city tour, wedding car.",
};

const services = [
  {
    title: "Lepas Kunci",
    description: "Kebebasan penuh menjelajahi Surabaya tanpa sopir",
    image: "/batam/layanan/lepas-kunci.webp"
  },
  {
    title: "Dengan Sopir",
    description: "Sopir profesional mengantar Anda ke mana saja",
    image: "/batam/layanan/dengan-sopir.webp"
  },
  {
    title: "Antar Jemput Bandara",
    description: "Layanan antar jemput bandara Juanda 24/7",
    image: "/batam/layanan/antar-jemput-bandara.webp"
  },
  {
    title: "Rental Bulanan",
    description: "Solusi ekonomis untuk kebutuhan jangka panjang",
    image: "/batam/layanan/rental-bulanan.webp"
  },
];

export default function LayananPage() {
?text=Halo%20Vicky%20Rentcar%20Surabaya,%20saya%20ingin%20memesan%20layanan%20rental%20mobil

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-blue-50 to-white`}>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center relative z-10">
          <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
            🚗 Layanan Kami
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Layanan Rental Mobil
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Berbagai layanan rental mobil yang disesuaikan dengan kebutuhan perjalanan Anda di Surabaya
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Premium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Pilihan layanan rental mobil terbaik di Surabaya untuk kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Pesan Sekarang via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh bantuan memilih layanan?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Tim kami siap membantu Anda memilih layanan yang paling sesuai dengan kebutuhan
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <li><a href="/rental-mobil-surabaya/armada" className="hover:text-white">Armada</a></li>
                <li><a href="/rental-mobil-surabaya/destinasi" className="hover:text-white">Destinasi</a></li>
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


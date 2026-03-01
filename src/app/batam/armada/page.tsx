import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/batam/Navbar";
import { Car, CheckCircle, Phone, ArrowRight, MapPin, MessageCircle, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { batamCars as cars } from "@/data/batam-fleet-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armada - VRN Rent Car batam | Sewa Mobil Terbaik di Kepulauan Riau",
  description: "Daftar armada mobil rental di batam: Alphard, Fortuner, Innova, Hiace dan lainnya. Armada terawat dengan harga terbaik.",
};

export default function ArmadaPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam";

  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50 overflow-x-hidden`}>
      
      {/* Hero Section - Island Theme */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center relative z-10">
          <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
             Armada Kami
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Armada Mobil Terbaik
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Pilih mobil sesuai kebutuhan Anda. Semua armada terawat dan siap pakai dengan sopir profesional
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition border border-gray-100 hover:border-teal-200 flex flex-col group">
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-1">{car.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3 min-h-[2.5rem]">
                    {car.specs.map((spec, i) => (
                      <span key={i} className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                      <a href={waLink} target="_blank">
                        <Calendar className="w-4 h-4 mr-2" />
                        Booking Sekarang
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tidak menemukan mobil yang cocok?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk konsultasi dan rekomendasi mobil yang sesuai dengan kebutuhan perjalanan Anda
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <li><a href="/batam/layanan" className="hover:text-white">Antar Jemput</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
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

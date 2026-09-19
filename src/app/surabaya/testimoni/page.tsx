import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/surabaya/Navbar";
import { MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/surabaya-page-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testimoni - VRN Rent Car Surabaya | Apa Kata Pelanggan",
  description: "Baca apa kata pelanggan kami tentang layanan rental mobil VRN di Surabaya. Testimoni asli dari pelanggan puas.",
};

export default function TestimoniPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20booking%20rental%20mobil%20di%20Surabaya";

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
            ⭐ Testimoni
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apa Kata Pelanggan
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Testimoni asli dari pelanggan yang puas dengan layanan rental mobil kami
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 mb-6 italic">"{testi.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testi.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {testi.city}
                    </div>
                  </div>
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
            Ingin mencoba layanan kami?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Booking sekarang dan rasakan sendiri pengalaman rental mobil yang memuaskan!
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


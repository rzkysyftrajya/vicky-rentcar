import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/batam/Navbar";
import { MapPin, Clock, Phone, Award, Users, CheckCircle, MessageCircle, Star, Building, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tentang Kami - VRN Rent Car batam | Perusahaan Rental Mobil Terpercaya",
  description: "Kenali VRN Rent Car batam lebih dekat. Perusahaan rental mobil terpercaya di Kepulauan Riau sejak 2018.",
};

const milestones = [
  { year: "2018", title: "Didirikan", description: "VRN Rent Car batam mulai beroperasi", emoji: "🏝️" },
  { year: "2019", title: "Armada", description: "Menambah 20+ kendaraan baru", emoji: "🚗" },
  { year: "2020", title: "Sertifikasi", description: "Memperoleh sertifikasi resmi", emoji: "📜" },
  { year: "2022", title: "Digital", description: "Platform online diluncurkan", emoji: "📱" },
  { year: "2024", title: "Pelanggan", description: "500+ pelanggan percaya", emoji: "⭐" },
];

const whyChooseUs = [
  { icon: Award, title: "Pengalaman", description: "10+ tahun beroperasi di bidang rental mobil" },
  { icon: Shield, title: "Kualitas", description: "Armada terawat dengan service rutin" },
  { icon: Users, title: "Profesional", description: "Sopir berpengalaman dan ramah" },
  { icon: Heart, title: "Pelayanan", description: "Siap membantu 24 jam penuh" },
];

export default function TentangPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20mengetahui%20lebih%20tentang%20rental%20mobil%20di%20Batam";

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
            👥 Tentang Kami
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VRN Rent Car batam
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Rental mobil terpercaya di Kepulauan Riau sejak 2018
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-teal-100 text-teal-700 mb-4">🏝️ Siapa Kami?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mitra Perjalanan Anda di batam
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  <strong>VRN Rent Car batam</strong> adalah perusahaan rental mobil terpercaya yang berlokasi di Kepulauan Riau. Kami telah beroperasi sejak tahun 2018 dengan komitmen memberikan layanan terbaik kepada setiap pelanggan.
                </p>
                <p>
                  Kami memahami bahwa perjalanan yang nyaman adalah kunci pengalaman yang menyenangkan. Dengan armada yang terawat dan sopir profesional, kami siap mengantar Anda mengeksplorasi keindahan pulau batam.
                </p>
                <p>
                  Kepuasan pelanggan adalah prioritas utama kami. Itulah mengapa banyak pelanggan yang kembali menggunakan layanan kami dan merekomendasikan kepada keluarga dan teman-teman mereka.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">🏝️</div>
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">🚗</div>
                <div className="text-3xl font-bold text-cyan-600">50+</div>
                <div className="text-gray-600">Armada Mobil</div>
              </div>
              <div className="bg-yellow-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-bold text-yellow-600">5.0</div>
                <div className="text-gray-600">Rating</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">🕐</div>
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-gray-600">Layanan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-400 text-black mb-4">📅 PERJALANAN KAMI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Perjalanan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {milestones.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="text-2xl font-bold text-teal-600 mb-1">{item.year}</div>
                <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-700 mb-4">💎 KENAPA PILIH KAMI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Keunggulan VRN Rent Car
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-teal-50 transition"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siaptraveling? Ayo jalan bareng!
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk pemesanan atau konsultasi gratuita
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

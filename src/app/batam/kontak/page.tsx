import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/batam/Navbar";
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kontak Kami - VRN Rent Car batam | Hubungi Kami 24/7",
  description: "Hubungi VRN Rent Car batam untuk pemesanan rental mobil. WhatsApp, Telepon, atau isi form. Kami siap membantu 24/7.",
};

export default function KontakPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20menghubungi%20VRN%20Rent%20Car%20Batam";

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
            📞 Hubungi Kami
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kami Siap Membantu
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg">
            Hubungi kami kapan saja untuk pemesanan atau konsultasi. Tim kami siap membantu 24 jam penuh!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl border border-teal-100 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Telepon</h3>
              <p className="text-gray-600 mb-2">+62 823-6338-9893</p>
              <p className="text-teal-600 text-sm">24 Jam / 7 Hari</p>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-100 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 mb-2">+62 823-6338-9893</p>
              <p className="text-green-600 text-sm">Respons cepat</p>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border border-yellow-100 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lokasi</h3>
              <p className="text-gray-600 mb-2">batam, Kepulauan Riau</p>
              <p className="text-yellow-600 text-sm">Indonesia</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8" asChild>
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white text-lg px-8" asChild>
              <a href="tel:+6282363389893">
                <Phone className="w-5 h-5 mr-2" />
                Telepon
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-400 text-black mb-4">🛜 KENAPA HUBUNGI KAMI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Manfaat Berkomunikasi dengan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Respons Cepat</h3>
              <p className="text-gray-600 text-sm">Tim kami siap merespon dalam hitungan menit</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Informasi Akurat</h3>
              <p className="text-gray-600 text-sm">Dapatkan informasi lengkap dan jelas</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Konsultasi Gratis</h3>
              <p className="text-gray-600 text-sm">Diskusikan kebutuhan Anda tanpa biaya</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pemrosesan Cepat</h3>
              <p className="text-gray-600 text-sm">Pemesanan diproses dengan cepat</p>
            </div>
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Phone, MapPin, MessageCircle, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kontak - VRN Rent Car Surabaya | Hubungi Kami",
  description: "Hubungi VRN Rent Car Surabaya untuk pemesanan rental mobil. WhatsApp, Telepon, atau Email.",
};

export default function KontakPage() {
  const waLink = "https://wa.me/6282363389893?text=Halo%20Vicky%20Rentcar%20Surabaya%2C%20saya%20ingin%20menghubungi%20untuk%20pemesanan";

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
            📞 Kontak
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami kapan saja!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-green-600 font-semibold mb-4">+62 823-6338-9893</p>
              <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                <a href={waLink} target="_blank">Chat Sekarang</a>
              </Button>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Telepon</h3>
              <p className="text-blue-600 font-semibold mb-4">+62 823-6338-9893</p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                <a href="tel:+6282363389893">Telepon</a>
              </Button>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-purple-600 font-semibold mb-4">vrn@email.com</p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600" asChild>
                <a href="mailto:vrn@email.com">Kirim Email</a>
              </Button>
            </div>

            {/* Office */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Kantor</h3>
              <p className="text-orange-600 font-semibold mb-4">Surabaya, Jawa Timur</p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                <a href="https://maps.google.com" target="_blank">Lihat Peta</a>
              </Button>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="mt-16 bg-blue-50 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold">Jam Operasional</h3>
            </div>
            <p className="text-center text-gray-600">Kami melayani Anda <span className="font-bold text-blue-600">24 Jam / 7 Hari</span> termasuk hari libur nasional</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siap untuk memesan?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Klik tombol di bawah untuk langsung menghubungi kami via WhatsApp
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black" asChild>
            <a href={waLink} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} VRN Rent Car Surabaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

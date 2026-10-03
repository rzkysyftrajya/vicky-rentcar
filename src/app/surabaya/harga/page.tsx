import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/surabaya/Navbar";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cara Mendapatkan Penawaran Harga | VRN Rent Car Surabaya",
  description:
    "Ketahui faktor yang memengaruhi penawaran sewa mobil di Surabaya dan konsultasikan kebutuhan Anda melalui WhatsApp.",
};

export default function HargaPage() {
  const waLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20mendapatkan%20penawaran%20sewa%20mobil%20di%20Surabaya";

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
            💬 Penawaran
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cara Mendapatkan Penawaran Harga
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Setiap perjalanan memiliki kebutuhan berbeda. Ceritakan rencana
            Anda kepada tim kami untuk mendapatkan penawaran yang sesuai.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Faktor yang Memengaruhi Penawaran
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Tim kami akan menyesuaikan rekomendasi berdasarkan detail
            perjalanan Anda.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Durasi Sewa",
                description:
                  "Lama pemakaian dan kebutuhan perjalanan membantu menentukan paket yang tepat.",
              },
              {
                title: "Jenis Kendaraan",
                description:
                  "Pilih kendaraan berdasarkan jumlah penumpang, kenyamanan, dan kebutuhan bagasi.",
              },
              {
                title: "Dengan atau Tanpa Sopir",
                description:
                  "Sampaikan apakah Anda membutuhkan sopir profesional atau ingin berkendara sendiri.",
              },
              {
                title: "Area Layanan",
                description:
                  "Lokasi penjemputan, tujuan, dan cakupan perjalanan menjadi pertimbangan penawaran.",
              },
            ].map((factor) => (
              <article
                key={factor.title}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6"
              >
                <CheckCircle className="mb-4 h-7 w-7 text-green-600" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {factor.title}
                </h3>
                <p className="text-gray-600">{factor.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Minta Penawaran melalui WhatsApp
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Sampaikan durasi, jenis kendaraan, pilihan sopir, dan area layanan.
            Tim kami siap membantu menjawab pertanyaan harga dan perjalanan Anda.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black"
              asChild
            >
              <a href={waLink} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp untuk Penawaran
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

"use client";

import { Phone, Clock, Award, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KonsultasiSection() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20rental%20mobil%20di%20Batam";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Phone className="w-5 h-5" />
            KONSULTASI SEKARANG
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Rental Mobil batam
            <br />
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Harga Terbaik Untuk Anda
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan informasi lengkap tentang 
            harga dan layanan rental mobil. Tim kami siap memberikan 
            konsultasi gratis untuk kebutuhan Anda.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8"
            asChild
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Tanya Promo Hari Ini
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8"
            asChild
          >
            <a href="tel:+6282363389893">
              <Phone className="w-5 h-5 mr-2" />
              Telepon Kami
            </a>
          </Button>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-teal-50 rounded-2xl border border-teal-100">
            <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Respons Cepat
            </h3>
            <p className="text-gray-600 text-sm">
              Kami merespons pesan Anda dalam hitungan menit
            </p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Harga Bersaing
            </h3>
            <p className="text-gray-600 text-sm">
              Offer terbaik untuk setiap kebutuhan rental Anda
            </p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Layanan Terpercaya
            </h3>
            <p className="text-gray-600 text-sm">
              Bagian dari Vicky Rent Car Nusantara sejak 2018
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

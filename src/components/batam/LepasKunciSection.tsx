"use client";

import { Key, DollarSign, Gauge, Shield, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LepasKunciSection() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20menyewa%20mobil%20lepas%20kunci%20di%20Batam";

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Key className="w-5 h-5" />
            LEPAS KUNCI
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Sewa Mobil Lepas Kunci
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              di Batam
            </span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Lebih bebas, lebih hemat, dan privasi terjaga. 
            Chat WhatsApp untuk cek unit & harga.
          </p>
        </div>

        {/* Benefits Grid - 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Hemat Biaya */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Hemat Biaya</h3>
            <p className="text-emerald-200 text-sm">
              Tidak perlu biaya sopir harian. Lebih ekonomis untuk penggunaan jangka panjang.
            </p>
          </div>

          {/* Fleksibel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Gauge className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fleksibel</h3>
            <p className="text-emerald-200 text-sm">
              Bebas mengatur rute dan jadwal sendiri tanpa tergantung jadwal sopir.
            </p>
          </div>

          {/* Privasi Aman */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Privasi Aman</h3>
            <p className="text-emerald-200 text-sm">
              Privasi terjamin tanpa harus berbagi kendaraan dengan orang lain.
            </p>
          </div>

          {/* Proses Cepat */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Proses Cepat</h3>
            <p className="text-emerald-200 text-sm">
              Proses booking mudah dan cepat. Unit siap dalam hitungan jam.
            </p>
          </div>
        </div>

        {/* Syarat Umum Box */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📋 Syarat Umum
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-100 font-medium">SIM A aktif</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-100 font-medium">KTP</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-100 font-medium">Deposit</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-100 font-medium">Verifikasi via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* CTA Button - Large */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-lg px-12 py-6 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300"
            asChild
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Phone className="w-6 h-6 mr-3" />
              CEK UNIT READY & HARGA LEPAS KUNCI (WA)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  ChevronDown,
  Shield,
  Clock,
  Users,
  Star,
  Car,
} from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/medan/hero-section.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-blue-900/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">
              Bagian dari Vicky Rent Car Nusantara
            </span>
          </div>

          {/* Headline - Improved */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Rental Mobil Medan Terpercaya
            <br className="hidden sm:block" />
            <span className="text-blue-200">
              Antar Jemput Bandara Kualanamu
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Sewa mobil Medan untuk wisata, bisnis & keluarga. Sopir
            berpengalaman, armada terawat, layanan 24 jam.
          </p>

          {/* CTA Buttons - WhatsApp Primary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 shadow-lg w-full sm:w-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Pesan via WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-blue-700 text-lg px-8 w-full sm:w-auto"
              asChild
            >
              <a href="#armada">Lihat Armada</a>
            </Button>
          </div>

          {/* Trust Micro Points */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Rating 4.9/500+ Pelanggan
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Car className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium">Armada VIP & Luxury</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">
                Sopir Profesional & Asuransi
              </span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-blue-300" />
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="text-xs text-blue-200">Pelanggan Puas</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-blue-300" />
              <div>
                <div className="text-xl font-bold">24/7</div>
                <div className="text-xs text-blue-200">Layanan</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-blue-300" />
              <div>
                <div className="text-xl font-bold">10+</div>
                <div className="text-xs text-blue-200">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/50 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">
              Medan • Berastagi • Parapat • Danau Toba & Sekitar
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#why-choose"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Pelajari Lebih Lanjut</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

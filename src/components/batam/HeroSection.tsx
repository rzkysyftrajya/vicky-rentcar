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
  Award,
  CheckCircle,
  Crown,
  ThumbsUp,
  Anchor,
  Waves,
  ShoppingBag,
  Building2,
  Palmtree,
} from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Batam";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Tropical Island Theme for BATAM */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/medan/hero-section.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-cyan-900/80 to-blue-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Trust Badge - Island Theme */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Anchor className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">
              Kota Pelabuhan & Perdagangan Bebas
            </span>
          </div>

          {/* Headline - BATAM Specific */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Rental Mobil <span className="text-cyan-400">Batam</span> Terpercaya
            <br className="hidden sm:block" />
            <span className="text-yellow-400">Tour & Lepas Kunci</span>
          </h1>

          {/* Subheadline - BATAM Specific */}
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
            Jelajahi keindahan kota perbatasan Singapura ini dengan nyaman. 
            Mulai dari tour Nagoya Hill, Barelang Bridge, hingga pantai eksotis. 
            Armada terawat dengan harga kompetitif!
          </p>

          {/* Trust Badges - BATAM Themed */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Palmtree className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Tour Pantai & Island</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <ShoppingBag className="w-5 h-5 text-pink-400" />
              <span className="text-sm font-medium">Tour Belanja (Duty Free)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Building2 className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">Kawasan Berikat</span>
            </div>
          </div>

          {/* CTA Buttons */}
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
              className="border-2 border-white/40 hover:bg-white hover:text-teal-700 text-white dark:text-white dark:hover:bg-white dark:hover:text-teal-700 text-lg px-8 w-full sm:w-auto bg-white/10 dark:bg-white/10"
              asChild
            >
              <a href="/batam/fleet">Lihat Armada</a>
            </Button>
          </div>

          {/* Key Locations in BATAM */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Nagoya Hill</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Building2 className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium">Barelang Bridge</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Waves className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium">Pantai Nongsa</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Palmtree className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Batam Center</span>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-cyan-300" />
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="text-xs text-cyan-200">Pelanggan Puas</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-cyan-300" />
              <div>
                <div className="text-xl font-bold">24/7</div>
                <div className="text-xs text-cyan-200">Layanan Nonstop</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-cyan-300" />
              <div>
                <div className="text-xl font-bold">10+</div>
                <div className="text-xs text-cyan-200">Tahun Pengalaman</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-cyan-300" />
              <div>
                <div className="text-xl font-bold">100%</div>
                <div className="text-xs text-cyan-200">Terjamin</div>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-600/50 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">
              Nagoya • Barelang • Nongsa • Sekupang • Tanjung Pinang
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

"use client";

import { Crown, Briefcase, Plane, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const vipServices = [
  {
    icon: Crown,
    title: "Wedding Car",
    description: "Mobil mewah untuk hari bahagia Anda dengan dekorasi lengkap dan sopir profesional.",
    features: [
      "Alphard & Camry Hybrid",
      "Dekorasi lengkap",
      "Sopir berjas rapi",
      "Photo session support",
    ],
    color: "from-pink-500 to-rose-500",
    emoji: "💒",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "Layanan transportasi premium untuk kebutuhan bisnis dan executives.",
    features: [
      "Alphard & Premium",
      "Sopir English speaking",
      "Airport handling",
      "Dedicated coordinator",
    ],
    color: "from-purple-500 to-indigo-500",
    emoji: "🏢",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Penjemputan dan pengantaran bandara dengan layanan premium.",
    features: [
      "Welcome service",
      "Luggage assistance",
      "Flight tracking",
      "Meet & greet",
    ],
    color: "from-blue-500 to-cyan-500",
    emoji: "✈️",
  },
  {
    icon: Sparkles,
    title: "City Tour",
    description: "Jelajahi batam dan sekitarnya dengan kendaraan mewah.",
    features: [
      "Alphard & Premium",
      "Wisata private",
      "Destinasi pilihan",
      "Personal guide",
    ],
    color: "from-green-500 to-teal-500",
    emoji: "🏝️",
  },
];

export default function VIPServicesSection() {
  const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20layanan%20VIP%20di%20Batam";

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Crown className="w-5 h-5" />
            LAYANAN VIP
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Pengalaman Eksklusif
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Layanan Terbaik
            </span>
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Nikmati layanan transportasi premium dengan armada kendaraan mewah, 
            sopir profesional, dan pelayanan terbaik untuk momen spesial Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vipServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${service.color} p-6`}>
                <div className="text-4xl mb-2">{service.emoji}</div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-teal-100 text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-teal-100">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold"
                  asChild
                >
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    Pesan Sekarang
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-bold text-lg px-8 shadow-2xl"
            asChild
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Lihat Semua Layanan VIP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

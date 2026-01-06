"use client";

import { Star, Quote, Crown, Heart, Building, Briefcase } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pengusaha",
    content:
      "Pelayanan sangat memuaskan! Sopir ramah dan tepat waktu. Mobil bersih dan nyaman untuk perjalanan bisnis saya ke berbagai kota di Sumatera Utara.",
    rating: 5,
    avatar: "BS",
  },
  {
    name: "Siti Rahmawati",
    role: "Wisatawan",
    content:
      "Liburan keluarga ke Danau Toba jadi sangat menyenangkan. Driver berpengalaman dan tahu spot-spot foto terbaik. Recommended banget!",
    rating: 5,
    avatar: "SR",
  },
  {
    name: "Ahmad Hidayat",
    role: "Karyawan Swasta",
    content:
      "Sudah 3 kali pakai jasa VRN untuk antar jemput bandara. Selalu on-time dan profesional. Harga juga sangat bersaing.",
    rating: 5,
    avatar: "AH",
  },
  {
    name: "Linda Wijaya",
    role: "Event Organizer",
    content:
      "Sewa mobil bulanan untuk keperluan event sangat membantu operasional kami. Unit selalu dalam kondisi prima dan support 24 jam.",
    rating: 5,
    avatar: "LW",
  },
];

// VIP Testimonials - For premium services
const vipTestimonials = [
  {
    name: "Maria & Doni",
    role: "Pelanggan Wedding Car",
    content:
      "PT.VICKY RENTCAR NUSANTARA membuat hari pernikahan kami lebih istimewa. Alphard mewahnya seperti mimpi dan sopirnya sangat profesional. Dekorasi mobil pengantinnya indah sekali!",
    rating: 5,
    avatar: "MD",
    type: "wedding",
    image: "/testimoni/testimoni3.jpeg",
  },
  {
    name: "David L.",
    role: "Executive Director",
    content:
      "Saya menggunakan layanan Executive Corporate untuk delegasi visiting director dari Singapore. Layanan VIP dengan Mercedes-Benz sangat impressive. Sopir English-speaking dan sangat profesional.",
    rating: 5,
    avatar: "DL",
    type: "corporate",
    image: "/testimoni/testimoni2.jpeg",
  },
  {
    name: "Emily R.",
    role: "Business Traveler",
    content:
      "Pemesanan sangat mudah dan antar-jemput di Bandara Kualanamu Medan berjalan tanpa cela. Sopir sudah menunggu saya tepat waktu dengan welcome drink. bintang lima!",
    rating: 5,
    avatar: "ER",
    type: "vip",
    image: "/testimoni/testimoni4.jpeg",
  },
  {
    name: "Robert Tan",
    role: "CEO Perusahaan",
    content:
      "Layanan VIP untuk perjalanan bisnis ke Medan. Dari penjemputan bandara dengan Alphard hingga city tour dengan Mercedes. Service excellent dan profesional. Akan menggunakan lagi.",
    rating: 5,
    avatar: "RT",
    type: "vip",
    image: "/testimoni/testimoni1.jpeg",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimoni" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* VIP Testimonials Section - Premium Style */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Crown className="w-4 h-4" />
              Testimoni VIP
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Apa Kata Pelanggan VIP Kami
            </h2>
            <p className="text-slate-600">
              Pengalaman eksklusif dari pelanggan yang telah menggunakan layanan
              premium kami untuk pernikahan, bisnis, dan acara khusus.
            </p>
          </div>

          {/* VIP Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {vipTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl border border-amber-500/20 relative overflow-hidden"
              >
                {/* Premium Background Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  {testimonial.type === "wedding" && (
                    <div className="flex items-center gap-1 bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                      <Heart className="w-3 h-3" />
                      Wedding
                    </div>
                  )}
                  {testimonial.type === "corporate" && (
                    <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                      <Briefcase className="w-3 h-3" />
                      Corporate
                    </div>
                  )}
                  {testimonial.type === "vip" && (
                    <div className="flex items-center gap-1 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-medium">
                      <Crown className="w-3 h-3" />
                      VIP
                    </div>
                  )}
                </div>

                {/* Quote Icon */}
                <Quote className="absolute top-6 right-8 w-10 h-10 text-amber-500/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-black font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-amber-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Testimonials Section */}
        <div className="pt-16 border-t border-gray-200">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman
              mereka bersama VRN Rent Car.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-600/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-600/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                ←
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                →
              </Button>
            </div>
          </div>

          {/* View All Testimonials */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <a href="/medan/testimonials">
                <Quote className="w-5 h-5 mr-2" />
                Lihat Semua Testimoni
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

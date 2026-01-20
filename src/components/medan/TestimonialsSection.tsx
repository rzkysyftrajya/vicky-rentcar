"use client";

import {
  Star,
  Quote,
  Crown,
  Heart,
  Building,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Iffat Resources",
    role: "Pelanggan dari Malaysia",
    content:
      "Terbaik! I have great experience renting with Vicky Rental Nusantara. Mr Vicky is best in client care, very communicative, fast responsive. I booked car all the way from Malaysia for my Husband arriving in Indonesia. Within 30 minutes, i was given choices to choose. Driver arrived before time with personalized arrival name plate. Perfect punctuality. The car was tip top condition. Highly recommend!",
    rating: 5,
    avatar: "IR",
    verified: true,
  },
  {
    name: "Dandia Agung",
    role: "Pelanggan Tetap",
    content:
      "Mobil tersedia banyak pilihan, harga cukup bersahabat. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
    rating: 5,
    avatar: "DA",
    verified: true,
  },
  {
    name: "Arbanie Vinsmoke",
    role: "Wisatawan",
    content:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended 👍",
    rating: 5,
    avatar: "AV",
    verified: true,
  },
  {
    name: "Balqis Khanza",
    role: "Pelanggan Puas",
    content:
      "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya,,👍👍👍",
    rating: 5,
    avatar: "BK",
    verified: true,
  },
  {
    name: "Alif Hayza",
    role: "Pelanggan",
    content:
      "Mantap pelayanan nya bagus, mobil nya bagus bersih wangi mantap lah...",
    rating: 5,
    avatar: "AH",
    verified: true,
  },
];

// VIP Testimonials - For premium services
const vipTestimonials = [
  {
    name: "Iffat Resources",
    role: "Pelanggan VIP dari Malaysia",
    content:
      "Terbaik! Great experience dengan Vicky Rental Nusantara. Mr Vicky sangat communicative dan fast responsive. Dari Malaysia saya booking untuk suami yang tiba di Indonesia. Dalam 30 menit sudah dapat pilihan mobil. Driver datang sebelum waktu dengan name plate personalizado. Mobil dalam kondisi tip top. Highly recommend!",
    rating: 5,
    avatar: "IR",
    type: "vip",
    verified: true,
  },
  {
    name: "Dandia Agung",
    role: "Pelanggan Corporate",
    content:
      "Mobil banyak pilihan, harga bersahabat. Proses ambil & pengembalian cepat tanpa ribet. Overall puas!",
    rating: 5,
    avatar: "DA",
    type: "corporate",
    verified: true,
  },
  {
    name: "Arbanie Vinsmoke",
    role: "Tour Leader",
    content:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa gampang, admin fast respon. Sangat Cocok untuk wisatawan!",
    rating: 5,
    avatar: "AV",
    type: "vip",
    verified: true,
  },
  {
    name: "Balqis Khanza",
    role: "Pelanggan Wedding Car",
    content:
      "Mobil bersih wangi, pelayanan bagus untuk wedding car. Dekorasi mobil pengantin sangat memukau!",
    rating: 5,
    avatar: "BK",
    type: "wedding",
    verified: true,
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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
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

                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Ulasan Jujur
                  </div>
                )}

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
                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Ulasan Jujur
                  </div>
                )}

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
              {/* Verified Badge */}
              {testimonials[currentIndex].verified && (
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Ulasan Jujur
                </div>
              )}

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

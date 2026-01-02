"use client";

import { Star, Quote } from "lucide-react";
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
      </div>
    </section>
  );
};

export default TestimonialsSection;

"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    quote:
      "Pemesanan sangat mudah dan antar-jemput di Bandara Kualanamu Medan berjalan tanpa cela. Sopir sudah menunggu saya tepat waktu. Bintang lima!",
  },
  {
    name: "Julinur Julinur",
    quote:
      "Waktu saya di Medan menggunakan rental ini dan untuk pertama kalinya pelayanan sangat ramah sekali. Unit bagus, baru, dan terawat. Next mau coba lagi.",
  },
  {
    name: "Steven Dwi Putrawan",
    quote:
      "Excellent service! The pick-up and drop-off process was seamless and quick. The staff was professional and helpful. Highly recommended for anyone looking for a hassle-free rental experience.",
  },
  {
    name: "Dandia Agung",
    quote:
      "Mobil tersedia banyak pilihan, harga cukup bersahabat. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
  },
  {
    name: "Arbanie Vinsmoke",
    quote:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended.",
  },
];

const reviewUrl = "https://g.page/r/CeVXw4q2MI5pEAE/review";

export default function MedanTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];
  const goToPrevious = () => {
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  };
  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="medan-container max-w-4xl text-center">
        <Quote className="mx-auto mb-8 h-12 w-12 text-gray-300" aria-hidden="true" />
        <div
          key={testimonial.name}
          className="min-h-[16rem] animate-[fade-in_400ms_ease-out]"
          aria-live="polite"
        >
          <div className="mb-6 flex justify-center gap-1" aria-label="5 dari 5 bintang">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-[var(--medan-accent)] text-[var(--medan-accent)]"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mb-10 text-2xl font-medium leading-relaxed text-gray-800 md:text-3xl">
            “{testimonial.quote}”
          </p>
          <p className="text-lg font-semibold text-[var(--medan-primary-dark)]">
            {testimonial.name}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--medan-border)] text-[var(--medan-primary)] transition-colors hover:bg-white"
            aria-label="Testimoni sebelumnya"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2" aria-label="Pilih testimoni">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-7 bg-[var(--medan-primary)]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Tampilkan testimoni dari ${item.name}`}
                aria-current={index === currentIndex ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goToNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--medan-border)] text-[var(--medan-primary)] transition-colors hover:bg-white"
            aria-label="Testimoni berikutnya"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <p className="text-lg font-semibold text-[var(--medan-primary-dark)]">
            Ingin memberi ulasan?
          </p>
          <p className="mt-2 text-sm text-[var(--medan-muted)]">
            Ceritakan pengalaman Anda bersama VRN Rent Car Medan.
          </p>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="medan-button medan-button-primary mt-5 inline-flex"
          >
            Beri ulasan di Google
          </a>
        </div>
      </div>
    </section>
  );
}

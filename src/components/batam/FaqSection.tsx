"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const faqData = [
  {
    question: "Apa syarat untuk menyewa mobil di batam?",
    answer: "Syarat menyewa mobil meliputi KTP asli, SIM A/B, dan deposit sesuai ketentuan. Untuk penyewa luar kota, mungkin diperlukan jaminan tambahan."
  },
  {
    question: "Berapa harga sewa mobil per hari?",
    answer: "Harga mulai dari Rp 250.000 per hari untuk mobil ekonomis, tergantung tipe mobil dan durasi sewa. Harga termasuk sopir dan bahan bakar."
  },
  {
    question: "Apakah tersedia layanan antar jemput bandara?",
    answer: "Ya, kami menyediakan layanan antar jemput dari/ke Bandara Hang Nadim dengan tarif terjangkau dan sopir profesional."
  },
  {
    question: "Bagaimana cara booking mobil di batam?",
    answer: "Booking dapat dilakukan melalui WhatsApp atau telepon. Kami akan konfirmasi ketersediaan dan persyaratan dalam waktu 1 jam."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-teal-100 text-teal-700 mb-4">❓ FAQ BATAM</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum Rental Mobil batam
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan-pertanyaan umum seputar layanan rental mobil kami di batam.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

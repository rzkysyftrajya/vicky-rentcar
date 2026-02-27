"use client";

import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoogleReviewsCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Berikan Ulasan Jujur Anda
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Pengalaman Anda sangat berharga bagi kami. Silakan berikan ulasan jujur tentang layanan rental mobil kami di Google Reviews.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-100 font-bold text-lg px-8"
            asChild
          >
            <a
              href="https://g.page/r/CeVXw4q2MI5pEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="w-5 h-5 mr-2" />
              Beri Ulasan di Google
            </a>
          </Button>
          <p className="text-sm text-teal-200 mt-4">
            Klik tombol di atas untuk memberikan ulasan jujur Anda
          </p>
        </div>
      </div>
    </section>
  );
}

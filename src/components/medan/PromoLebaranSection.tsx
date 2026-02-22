"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Gift,
  Calendar,
  Car,
  Clock,
  Phone,
  ArrowRight,
  Star,
  Sparkles,
  Tag,
  CheckCircle,
} from "lucide-react";

const PromoLebaranSection = () => {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20info%20promo%20Lebaran%20dari%20VRN%20Rent%20Car%20Medan";

  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="bg-white text-amber-700 px-4 py-1 text-sm font-bold mb-4 shadow-lg">
              <Sparkles className="w-4 h-4 mr-1" />
              SPECIAL OFFER
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              PROMO LEBARAN 2026
            </h2>
            <p className="text-amber-100 text-lg md:text-xl font-medium">
              Ajukan sekarang sebelum kehabisan!-unit terbatas!
            </p>
          </div>

          {/* Promo Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            {/* Period */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">18 FEBRUARI - 1 MARET 2026</span>
              </div>
            </div>

            {/* Main Offer */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">Sewa mobil Medan</p>
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-2">
                SPECIAL PRICE
              </div>
              <p className="text-gray-500 text-sm">
                Untuk penyewaan minimal 1 bulan
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                <Car className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-bold text-gray-800">Semua Jenis Mobil</p>
                <p className="text-xs text-gray-500">Dari Avanza hingga Alphard</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-bold text-gray-800">Minimal 1 Bulan</p>
                <p className="text-xs text-gray-500">semakin lama semakin hemat</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                <Gift className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-bold text-gray-800">Bonus Menarik</p>
                <p className="text-xs text-gray-500">gratis antar jemput</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 shadow-lg w-full md:w-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Tanya Promo Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <p className="text-xs text-gray-400 mt-4">
                <Star className="w-3 h-3 inline text-yellow-500" /> Syarat dan Ketentuan Berlaku
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Armada terawat</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Sopir profesional</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Asuransi lengkap</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 layanan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoLebaranSection;

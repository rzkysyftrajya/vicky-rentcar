"use client";

import { 
  BadgeCheck, 
  Shield, 
  Award, 
  Star, 
  Clock, 
  Crown, 
  DollarSign, 
  Key,
  Users,
  MapPin
} from "lucide-react";

const whyTrustUsItems = [
  {
    icon: BadgeCheck,
    title: "Legalitas Terpenuhi",
    description: "Perusahaan resmi dengan izin usaha lengkap",
    detail: "NPWP, SITU, dan izin operasional valid",
  },
  {
    icon: Shield,
    title: "Armada Ter-Asuransikan",
    description: "Semua kendaraan memiliki asuransi komprehensif",
    detail: "Perlindungan penuh untuk penumpang dan kendaraan",
  },
  {
    icon: Award,
    title: "Sopir Profesional",
    description: "Sopir berpengalaman dengan training intensif",
    detail: "SIM A profesional, ramah, service excellent",
  },
  {
    icon: Star,
    title: "Rating Tertinggi",
    description: "Rating 4.9 dari 500+ pelanggan",
    detail: "Testimoni positif di Google dan media sosial",
  },
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    description: "Customer support siap membantu kapan saja",
    detail: "Respon cepat via WhatsApp dan telepon",
  },
  {
    icon: Crown,
    title: "Garansi Layanan",
    description: "Jaminan layanan terbaik untuk semua pelanggan",
    detail: "Kepuasan Anda adalah prioritas utama kami",
  },
  {
    icon: DollarSign,
    title: "Harga Bersaing",
    description: "Harga transparan dan kompetitif",
    detail: "Tanpa biaya tersembunyi, garansi harga terbaik",
  },
  {
    icon: Key,
    title: "Bisa Lepas Kunci",
    description: "Opsi sewa tanpa sopir tersedia",
    detail: "Siapapun bisa menyewa dengan SIM A valid",
  },
];

export default function WhyTrustUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-6 py-2 rounded-full text-sm font-bold mb-6">
            <Users className="w-5 h-5" />
            MENGAPA KAMI TERPERCAYA
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Bukti Kepercayaan
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              500+ Pelanggan Puas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan layanan rental mobil terbaik dengan 
            transparansi, profesionalisme, dan jaminan kualitas untuk setiap pelanggan.
          </p>
        </div>

        {/* Trust Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyTrustUsItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-xs text-teal-700 font-medium">
                      ✓ {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-sm text-teal-200">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-teal-200">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-teal-200">Armada Ready</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-sm text-teal-200">Rating Pelanggan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

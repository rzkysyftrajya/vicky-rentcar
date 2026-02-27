"use client";

import { 
  Shield, 
  Award, 
  Star, 
  Crown, 
  ThumbsUp, 
  Wallet, 
  FileCheck, 
  BadgeCheck 
} from "lucide-react";

const trustBadges = [
  {
    icon: BadgeCheck,
    title: "Terverifikasi",
    description: "Perusahaan resmi dengan izin lengkap",
  },
  {
    icon: Shield,
    title: "Asuransi Lengkap",
    description: "Semua kendaraan fully insured",
  },
  {
    icon: Award,
    title: "Best Service",
    description: "Award winner di Kepulauan Riau",
  },
  {
    icon: Star,
    title: "Rating 4.9/5",
    description: "Dari 500+ pelanggan puas",
  },
  {
    icon: Crown,
    title: "Layanan Premium",
    description: "Sopir profesional & armada terawat",
  },
  {
    icon: ThumbsUp,
    title: "Garansi Kepuasan",
    description: "Layanan berkualitas atau uang kembali",
  },
  {
    icon: Wallet,
    title: "Harga Transparan",
    description: "Tanpa biaya tersembunyi",
  },
  {
    icon: FileCheck,
    title: "Proses Cepat",
    description: "Booking mudah & praktis",
  },
];

export default function TrustBadgesSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <badge.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xs mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

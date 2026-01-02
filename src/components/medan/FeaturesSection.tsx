"use client";

import {
  Plane,
  Car,
  UserCheck,
  Clock,
  MapPin,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "10+ Tahun Pengalaman",
    description:
      "Melayani rental mobil di Medan sejak 2013. Ribuan pelanggan puas dengan layanan kami.",
  },
  {
    icon: Shield,
    title: "Armada Terawat & Terpercaya",
    description:
      "Semua unit mobil dalam kondisi prima, rutin diservis, dan selalu bersih sebelum diserahkaan.",
  },
  {
    icon: UserCheck,
    title: "Sopir Profesional",
    description:
      "Tim sopir berpengalaman, berlisensi, sopan, dan menguasai rute di seluruh Sumatera Utara.",
  },
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    description:
      "Siap melayani kapan saja - hari kerja, akhir pekan, maupun hari libur nasional.",
  },
  {
    icon: Plane,
    title: "Antar Jemput Bandara Kualanamu",
    description:
      "Layanan penjemputan & pengantaran tepat waktu dari dan ke Bandara Internasional Kualanamu.",
  },
  {
    icon: MapPin,
    title: "Jangkauanluas di Sumatera Utara",
    description:
      "Melayani Medan, Berastagi, Parapat, Danau Toba, dan sekitarnya dengan harga kompetitif.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" />
            Mengapa Pilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            VRN Rent Car Medan — Pilihan Tepat untuk Rental Mobil Anda
          </h2>
          <p className="text-gray-600 text-lg">
            Kami berkomitmen memberikan pengalaman rental mobil terbaik di Medan
            dengan layanan profesional, armada terawat, dan harga transparan.
          </p>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "10+", label: "Tahun Pengalaman", icon: Award },
            { value: "500+", label: "Pelanggan Puas", icon: Shield },
            { value: "50+", label: "Unit Armada", icon: Car },
            { value: "24/7", label: "Layanan", icon: Clock },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200"
            >
              <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-blue-700">
                {stat.value}
              </div>
              <div className="text-sm text-blue-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-[100px] rounded-tr-2xl -z-10 group-hover:bg-blue-200 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

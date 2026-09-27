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
    title: "Pahami kebutuhan perjalanan",
    description:
      "Tim kami membantu menyesuaikan kendaraan dengan jadwal, jumlah penumpang, dan tujuan perjalanan dari Medan.",
  },
  {
    icon: Shield,
    title: "Kendaraan yang rapi dan siap dipakai",
    description:
      "Setiap unit yang ditawarkan disiapkan dengan tampilan bersih dan kondisi yang sesuai untuk perjalanan harian atau grup.",
  },
  {
    icon: UserCheck,
    title: "Driver familiar dengan rute umum",
    description:
      "Untuk perjalanan bandara, wisata, atau keluar kota, driver kami membantu mengurangi kebingungan rute dan waktu.",
  },
  {
    icon: Clock,
    title: "Koordinasi lebih praktis",
    description:
      "Anda bisa konsultasi melalui WhatsApp untuk menyesuaikan jenis mobil, jadwal, dan kebutuhan penjemputan.",
  },
  {
    icon: Plane,
    title: "Layanan bandara Kualanamu",
    description:
      "Banyak pelanggan mencari mobil untuk pickup dan drop-off dari bandara, terutama saat jadwal kedatangan atau keberangkatan padat.",
  },
  {
    icon: MapPin,
    title: "Perjalanan ke Medan dan sekitarnya",
    description:
      "Kami membantu kebutuhan transportasi untuk kota Medan, Berastagi, Parapat, dan destinasi wisata di Sumatera Utara.",
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
            Fasilitas yang membantu perjalanan Anda di Medan lebih lancar.
          </h2>
          <p className="text-gray-600 text-lg">
            Dari kebutuhan keluarga, perjalanan bisnis, hingga transfer bandara,
            layanan kami dirancang untuk mempermudah koordinasi dan memilih unit
            yang sesuai dengan rute serta jumlah penumpang.
          </p>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "Rute umum", label: "Familiar di Medan", icon: Award },
            { value: "WhatsApp", label: "Koordinasi cepat", icon: Shield },
            { value: "Beragam", label: "Pilihan unit", icon: Car },
            { value: "Bandara", label: "Transfer & perjalanan", icon: Clock },
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

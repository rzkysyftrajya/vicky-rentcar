"use client";

import { Shield, Award, Users, HeartHandshake } from "lucide-react";

const values = [
  { icon: Shield, label: "Terpercaya" },
  { icon: Award, label: "Profesional" },
  { icon: Users, label: "Ramah" },
  { icon: HeartHandshake, label: "Komitmen" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/medan/tentang.jpeg"
                alt="VRN Rent Car Office"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Tahun Melayani</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Kenali VRN Rent Car Medan
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">VRN Rent Car Medan</strong>{" "}
                adalah penyedia layanan rental mobil terpercaya yang telah
                melayani kebutuhan transportasi di Medan dan Sumatera Utara
                selama lebih dari 10 tahun.
              </p>
              <p>
                Kami berkomitmen memberikan pelayanan terbaik dengan armada yang
                terawat, sopir profesional, dan harga yang kompetitif. Kepuasan
                pelanggan adalah prioritas utama kami.
              </p>
              <p>
                Berlokasi strategis di pusat kota Medan, kami siap melayani
                kebutuhan transportasi Anda kapan saja – baik untuk keperluan
                bisnis, wisata keluarga, maupun antar jemput bandara.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex flex-col items-center text-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <value.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-900">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

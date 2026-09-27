"use client";

import { Shield, Award, Users, HeartHandshake } from "lucide-react";

const values = [
  { icon: Shield, label: "Koordinasi" },
  { icon: Award, label: "Rute umum" },
  { icon: Users, label: "Perjalanan keluarga" },
  { icon: HeartHandshake, label: "Kebutuhan bisnis" },
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
              VRN Rent Car Medan membantu perjalanan yang lebih terarah.
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Perusahaan ini beroperasi di Medan dan fokus pada kebutuhan
                transportasi harian, keluarga, bisnis, serta antar jemput bandara.
                Tim kami membantu menyesuaikan kendaraan dengan jadwal, rute, dan
                jumlah penumpang yang Anda miliki.
              </p>
              <p>
                Informasi perusahaan ini biasanya dicari orang yang ingin tahu
                apakah layanan rental mobil di Medan cocok untuk kebutuhan umum,
                perjalanan keluar kota, atau kebutuhan kantor. Jadi, fokus kami
                adalah koordinasi yang jelas dan unit yang sesuai dengan aktivitas
                Anda.
              </p>
              <p>
                Jika Anda merencanakan perjalanan dari Medan ke Bandara Kualanamu,
                ke daerah wisata, atau kebutuhan keluarga, kami siap membantu Anda
                menentukan pilihan mobil yang lebih tepat.
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

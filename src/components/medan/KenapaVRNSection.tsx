"use client";

import { Car, UserCheck, DollarSign, Clock, CheckCircle } from "lucide-react";

const whyChooseItems = [
  {
    icon: Car,
    title: "Armada Bersih & Terawat",
    description: "Kendaraan selalu dalam kondisi prima dan kebersihan terjamin",
  },
  {
    icon: UserCheck,
    title: "Sopir Profesional & Berpengalaman",
    description: "Sopir berpengalaman dengan service excellent",
  },
  {
    icon: DollarSign,
    title: "Harga Transparan & Kompetitif",
    description: "Tanpa biaya tersembunyi, harga terbaik di Medan",
  },
  {
    icon: Clock,
    title: "Respon Cepat 24/7",
    description: "Tim support siap membantu kapan saja Anda butuh",
  },
];

const KenapaVRNSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kenapa Memilih VRN Rent Car Medan?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan rental mobil terbaik dengan
            standar kualitas tinggi
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KenapaVRNSection;

"use client";

import { Car, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Car, value: "Beragam", label: "Pilihan mobil" },
  { icon: Users, value: "Keluarga", label: "Kebutuhan utama" },
  { icon: Clock, value: "Jadwal", label: "Dapat disesuaikan" },
  { icon: Award, value: "Rute", label: "Familiar Medan" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

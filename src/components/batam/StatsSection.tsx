"use client";

import { Users, Clock, Award, Car } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Pelanggan Puas", icon: Users },
    { value: "24/7", label: "Layanan", icon: Clock },
    { value: "10+", label: "Tahun Pengalaman", icon: Award },
    { value: "50+", label: "Armada Tersedia", icon: Car },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#0d6efd] to-[#0056b3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

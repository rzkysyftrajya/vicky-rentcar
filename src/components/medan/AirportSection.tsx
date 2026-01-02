"use client";

import { Button } from "@/components/ui/button";
import { Plane, Clock, Shield, Phone, Check, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Driver standby 1 jam sebelum jadwal penerbangan Anda",
  },
  {
    icon: Shield,
    title: "Aman & Nyaman",
    description: "Kendaraan terawat dan sopir profesional berlisensi",
  },
  {
    icon: MapPin,
    title: "Door to Door",
    description: "Jemput dari lokasi Anda & antar ke terminal desired",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Hubungi Kami",
    description: "WhatsApp untuk booking antar jemput bandara",
  },
  {
    step: "2",
    title: "Konfirmasi",
    description: "Konfirmasi tanggal, waktu, & lokasi penjemputan",
  },
  {
    step: "3",
    title: "Penjemputan",
    description: "Driver menjemput Anda di lokasi dengan name board",
  },
  {
    step: "4",
    title: "Perjalanan",
    description: "Perjalanan nyaman ke Bandara Kualanamu",
  },
];

const AirportSection = () => {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20booking%20antar%20jemput%20Bandara%20Kualanamu";

  return (
    <section id="bandara" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
                <Plane className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Layanan Bandara
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Antar Jemput Bandara Kualanamu Tepat Waktu
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tidak perlu repot mencari transportasi dari dan ke Bandara
                Internasional Kualanamu. Kami menyediakan layanan antar jemput
                yang nyaman, tepat waktu, dan profesional dengan sopir
                berpengalaman.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Booking via WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#armada">Lihat Armada</a>
              </Button>
            </div>
          </div>

          {/* Image/Visual & Process */}
          <div className="space-y-6">
            {/* Airport Image */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
                alt="Bandara Kualanamu Medan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">
                        Bandara Internasional
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        Kualanamu
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        39 km
                      </div>
                      <div className="text-xs text-gray-600">
                        dari Pusat Kota Medan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                Cara Pemesanan
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportSection;

"use client";

import {
  Calendar,
  CalendarDays,
  MapPinned,
  Compass,
  Phone,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Calendar,
    title: "Rental Mobil Harian Medan",
    description:
      "Sewa mobil per hari dengan tarif kompetitif. Cocok untuk keperluan bisnis, meeting, atau jalan-jalan di sekitar Medan.",
    features: ["Minimal 12 jam", "Termasuk BBM", "Sopir berpengalaman"],
    whatsappText: "Halo,%20saya%20ingin%20rental%20mobil%20harian%20di%20Medan",
  },
  {
    icon: CalendarDays,
    title: "Rental Mobil Bulanan Medan",
    description:
      "Solusi hemat untuk kebutuhan mobilitas jangka panjang. Harga spesial untuk kontrak bulanan.",
    features: ["Harga lebih hemat", "Maintenance gratis", "Fleksibel unit"],
    whatsappText:
      "Halo,%20saya%20ingin%20rental%20mobil%20bulanan%20di%20Medan",
  },
  {
    icon: MapPinned,
    title: "Drop Off Dalam & Luar Kota",
    description:
      "Layanan antar mobil ke lokasi tujuan Anda, baik dalam kota Medan maupun ke kota lain di Sumatera Utara.",
    features: ["Medan sekitarnya", "Berastagi", "Parapat & Toba"],
    whatsappText: "Halo,%20saya%20ingin%20drop%20off%20mobil%20di%20Medan",
  },
  {
    icon: Compass,
    title: "Rental Mobil Tour Medan",
    description:
      "Paket wisata lengkap dengan sopir yang hafal destinasi wisata populer di Sumatera Utara.",
    features: [
      "Itinerary fleksibel",
      "Rekomendasi tempat",
      "Sopir guide lokal",
    ],
    whatsappText:
      "Halo,%20saya%20ingin%20tour%20Medan%20dengan%20rental%20mobil",
  },
];

const ServicesSection = () => {
  const whatsappLinkBase = "https://wa.me/6281234567890?text=";

  const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
      <div className="flex flex-col h-full">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
            <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 pt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
            >
              <Check className="w-3 h-3" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA - Primary WhatsApp Button */}
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-600/20 group/btn"
          asChild
        >
          <a
            href={`${whatsappLinkBase}${service.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4 mr-2" />
            Pesan via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <Check className="w-4 h-4" />
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Layanan Rental Mobil Medan Terlengkap
          </h2>
          <p className="text-gray-600 text-lg">
            Berbagai pilihan layanan rental mobil sesuai kebutuhan Anda, dari
            harian, bulanan, drop off, hingga tour wisata.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.title}>
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

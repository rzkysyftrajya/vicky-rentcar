"use client";

import {
  Calendar,
  CalendarDays,
  MapPinned,
  Compass,
  Phone,
  Check,
  Crown,
  Star,
  Heart,
  Briefcase,
  Sparkles,
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

// VIP Services - Premium tier for luxury vehicles
const vipServices = [
  {
    icon: Crown,
    title: "VIP Wedding Car",
    description:
      "Mobil mewah untuk pengantin dengan dekorasi lengkap, sopir berjas, dan layanan premium untuk hari spesial Anda.",
    features: [
      "Alphard & Camry Hybrid",
      "Dekorasi lengkap",
      "Sopir berjas rapi",
      "Photo session support",
    ],
    price: "Mulai Rp 1.500.000",
    whatsappText:
      "Halo,%20saya%20ingin%20sewa%20VIP%20Wedding%20Car%20di%20Medan",
  },
  {
    icon: Briefcase,
    title: "Executive Corporate",
    description:
      "Layanan transportasi premium untuk executives, delegasi, dan kebutuhan bisnis korporat dengan kendaraan mewah.",
    features: [
      "Alphard & Mercedes",
      "Sopir English speaking",
      "Airport VIP handling",
      "Dedicated coordinator",
    ],
    price: "Hubungi untuk harga",
    whatsappText:
      "Halo,%20saya%20ingin%20layanan%20Executive%20Corporate%20VIP",
  },
  {
    icon: Star,
    title: "VIP Airport Transfer",
    description:
      "Penjemputan dan pengantaran bandara dengan layanan white-glove, sopir profesional, dan kendaraan premium.",
    features: [
      "Welcome service",
      "Luggage assistance",
      "Flight tracking",
      "Meet & greet",
    ],
    price: "Mulai Rp 400.000",
    whatsappText:
      "Halo,%20saya%20ingin%20VIP%20Airport%20Transfer%20di%20Medan",
  },
  {
    icon: Sparkles,
    title: "Luxury City Tour",
    description:
      "Jelajahi Medan dan Sumatera Utara dengan kendaraan mewah, sopir profesional, dan layanan concierge.",
    features: [
      "Mercedes & Alphard",
      "Wisata private",
      "Restaurant booking",
      "Personal guide",
    ],
    price: "Mulai Rp 800.000/hari",
    whatsappText:
      "Halo,%20saya%20ingin%20Luxury%20City%20Tour%20dengan%20mobil%20mewah",
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

  const VIPServiceCard = ({
    service,
  }: {
    service: (typeof vipServices)[0];
  }) => (
    <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-500/30 h-full relative overflow-hidden">
      {/* Premium Background Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Crown Icon */}
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
          <Crown className="w-5 h-5 text-black" />
        </div>
      </div>

      <div className="flex flex-col h-full relative z-10">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center shrink-0 border border-amber-500/30">
            <service.icon className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white pt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Price Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-yellow-500 text-black">
            <Star className="w-3 h-3 fill-black" />
            {service.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20"
            >
              <Check className="w-3 h-3 text-amber-400" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA - Premium Gold Button */}
        <Button
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-semibold shadow-lg shadow-amber-500/25"
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
        {/* VIP Services Section */}
        <div className="mb-20">
          {/* Section Header - Premium Style */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Crown className="w-4 h-4" />
              Premium Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Layanan VIP & Mobil Mewah
            </h2>
            <p className="text-lg text-slate-600">
              Nikmati pengalaman transportasi premium dengan armada kendaraan
              mewah terbaik dan layanan chauffeur profesional.
            </p>
          </div>

          {/* Desktop Grid - VIP Services */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {vipServices.map((service) => (
              <VIPServiceCard key={service.title} service={service} />
            ))}
          </div>

          {/* Mobile Carousel - VIP Services */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {vipServices.map((service) => (
                  <CarouselItem key={service.title}>
                    <VIPServiceCard service={service} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* VIP CTA */}
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white"
              asChild
            >
              <a href="/layanan/vip">
                <Crown className="w-5 h-5 mr-2" />
                Lihat Semua Layanan VIP
              </a>
            </Button>
          </div>
        </div>

        {/* Regular Services Section */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              <Check className="w-4 h-4" />
              Layanan Reguler
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
      </div>
    </section>
  );
};

export default ServicesSection;

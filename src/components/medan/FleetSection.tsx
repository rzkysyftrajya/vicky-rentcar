"use client";

import { Users, Briefcase, Star, Filter, Crown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fleet = [
  {
    name: "Toyota Avanza",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["AC Dingin", "Audio System", "Full Insurance"],
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    popular: false,
    price: "Rp 350rb",
  },
  {
    name: "Daihatsu Xenia",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["AC Dingin", "Audio System", "Hemat BBM"],
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    popular: false,
    price: "Rp 350rb",
  },
  {
    name: "Toyota Innova Reborn",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["AC Dual Zone", "Captain Seat", "Premium Audio"],
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop",
    popular: true,
    price: "Rp 500rb",
  },
  {
    name: "Mitsubishi Xpander",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["Desain Modern", "AC Dingin", "Bagasi Luas"],
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop",
    popular: false,
    price: "Rp 450rb",
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    capacity: "7 Penumpang",
    features: ["4WD", "Leather Seat", "Premium Interior"],
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    popular: true,
    price: "Rp 750rb",
  },
  {
    name: "Toyota Alphard",
    category: "Premium",
    capacity: "7 Penumpang",
    features: ["VIP Seat", "Full Entertainment", "Executive Class"],
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    popular: true,
    price: "Rp 1.500rb",
  },
];

// VIP Cars - Luxury vehicles
const vipCars = [
  {
    name: "Alphard New Gen 4",
    category: "VIP Luxury",
    capacity: "7 Penumpang",
    features: ["Luxury Interior", "Captain Seat", "Premium Audio", "Chauffeur"],
    image: "/armada/alphard-new.webp",
    popular: true,
    price: "Rp 1.500.000",
    serviceCategory: "VIP",
  },
  {
    name: "Mercedes-Benz",
    category: "VIP Luxury",
    capacity: "5 Penumpang",
    features: [
      "German Engineering",
      "Premium Leather",
      "Executive Class",
      "Chauffeur",
    ],
    image: "/armada/mercedes-benz.webp",
    popular: true,
    price: "Rp 2.500.000",
    serviceCategory: "VIP",
  },
  {
    name: "Land Cruiser",
    category: "VIP SUV",
    capacity: "7 Penumpang",
    features: ["Premium SUV", "4x4 Capability", "Luxury Cabin", "Chauffeur"],
    image: "/armada/land-cruiser.webp",
    popular: true,
    price: "Rp 1.800.000",
    serviceCategory: "VIP",
  },
  {
    name: "Hiace Premio Luxury",
    category: "VIP Van",
    capacity: "9 Penumpang",
    features: [
      "Executive Lounge Seat",
      "Premium Interior",
      "VIP Configuration",
      "Chauffeur",
    ],
    image: "/armada/hiace-premio-luxury.webp",
    popular: true,
    price: "Rp 1.200.000",
    serviceCategory: "VIP",
  },
  {
    name: "Fortuner GR 4x4",
    category: "VIP SUV",
    capacity: "7 Penumpang",
    features: [
      "GR Sport Design",
      "4x4 Capability",
      "Premium Interior",
      "Chauffeur",
    ],
    image: "/armada/fortuner.webp",
    popular: false,
    price: "Rp 1.000.000",
    serviceCategory: "VIP",
  },
  {
    name: "Pajero Sport",
    category: "VIP SUV",
    capacity: "7 Penumpang",
    features: ["Premium SUV", "4x4 Capability", "Luxury Interior", "Chauffeur"],
    image: "/armada/pajero.webp",
    popular: false,
    price: "Rp 950.000",
    serviceCategory: "VIP",
  },
];

const categories = ["Semua", "MPV", "SUV", "Premium"];

const FleetSection = () => {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tanya%20harga%20rental%20mobil";
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredFleet =
    activeCategory === "Semua"
      ? fleet
      : fleet.filter((car) => car.category === activeCategory);

  const CarCard = ({ car }: { car: (typeof fleet)[0] }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {car.popular && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Populer
          </div>
        )}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {car.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            {car.capacity}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">{car.name}</h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {car.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center text-xs text-gray-600"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA - Green WhatsApp Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
          <a
            href={`${whatsappLink}%20${car.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Cek Harga via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );

  const VIPCarCard = ({ car }: { car: (typeof vipCars)[0] }) => (
    <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-500/30 h-full relative overflow-hidden">
      {/* Premium Background Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Crown Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 rounded-full">
          <Crown className="w-4 h-4 text-black" />
          <span className="text-xs font-bold text-black">VIP</span>
        </div>
      </div>

      {/* Popular Badge */}
      {car.popular && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Populer
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-900/90 to-transparent" />

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
            <span className="text-lg font-bold text-black">{car.price}</span>
            <span className="text-xs text-black/70 ml-1">/hari</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/30">
            {car.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <Users className="w-4 h-4" />
            <span className="text-slate-300">{car.capacity}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {car.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center text-xs text-slate-300"
            >
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA - Gold Premium Button */}
        <Button
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-semibold"
          asChild
        >
          <a
            href={`${whatsappLink}%20${encodeURIComponent("VIP " + car.name)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-4 h-4 mr-2" />
            Pesan VIP via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section id="armada" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* VIP Cars Section */}
        <div className="mb-20">
          {/* Section Header - Premium Style */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Crown className="w-4 h-4" />
              Armada Premium
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Armada VIP & Mobil Mewah
            </h2>
            <p className="text-slate-600">
              Pilihan kendaraan premium terbaik untuk pengalaman perjalanan yang
              eksklusif dan berkelas. Dilengkapi dengan layanan chauffeur
              profesional.
            </p>
          </div>

          {/* Desktop Grid - VIP Cars */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {vipCars.map((car) => (
              <VIPCarCard key={car.name} car={car} />
            ))}
          </div>

          {/* Mobile/Tablet Carousel - VIP Cars */}
          <div className="lg:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {vipCars.map((car) => (
                  <CarouselItem key={car.name} className="pl-4 sm:basis-1/2">
                    <VIPCarCard car={car} />
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
              <a href="/luxury-cars">
                <Crown className="w-5 h-5 mr-2" />
                Lihat Semua Mobil Mewah
              </a>
            </Button>
          </div>
        </div>

        {/* Regular Fleet Section */}
        <div className="pt-16 border-t border-gray-200">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Armada Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pilihan Mobil Terbaik
            </h2>
            <p className="text-gray-600">
              Armada lengkap dari ekonomis hingga premium untuk berbagai
              kebutuhan perjalanan Anda.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category === "Semua" && <Filter className="w-4 h-4 mr-1" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {filteredFleet.map((car) => (
              <CarCard key={car.name} car={car} />
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {filteredFleet.map((car) => (
                  <CarouselItem key={car.name} className="pl-4 sm:basis-1/2">
                    <CarCard car={car} />
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

export default FleetSection;

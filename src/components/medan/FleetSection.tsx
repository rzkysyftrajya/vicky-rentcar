"use client";

import { Users, Briefcase, Star, Filter } from "lucide-react";
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
  },
  {
    name: "Daihatsu Xenia",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["AC Dingin", "Audio System", "Hemat BBM"],
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    name: "Toyota Innova Reborn",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["AC Dual Zone", "Captain Seat", "Premium Audio"],
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Mitsubishi Xpander",
    category: "MPV",
    capacity: "7 Penumpang",
    features: ["Desain Modern", "AC Dingin", "Bagasi Luas"],
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    capacity: "7 Penumpang",
    features: ["4WD", "Leather Seat", "Premium Interior"],
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    name: "Toyota Alphard",
    category: "Premium",
    capacity: "7 Penumpang",
    features: ["VIP Seat", "Full Entertainment", "Executive Class"],
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    popular: true,
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

  return (
    <section id="armada" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Armada Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Pilihan Mobil Terbaik
          </h2>
          <p className="text-gray-600">
            Armada lengkap dari ekonomis hingga premium untuk berbagai kebutuhan
            perjalanan Anda.
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
    </section>
  );
};

export default FleetSection;

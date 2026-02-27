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
import { cars, Car, ServiceCategory } from "@/data/fleet-data";

// Service category display names
const serviceCategoryNames: Record<ServiceCategory, string> = {
  VIP: "VIP & Luxury",
  Executive: "Executive & Corporate",
  Group: "Group & Travel",
  Special: "Special Purpose",
};

// Get unique categories for filter
const allCategories = ["Semua", "VIP", "Executive", "Group", "Special"];

const FleetSection = () => {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20tanya%20harga%20rental%20mobil%20di%20Batam";
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Filter cars by service category
  const getFilteredCars = (category: string) => {
    if (category === "Semua") return cars;
    return cars.filter((car) => car.serviceCategory === category);
  };

  const filteredCars = getFilteredCars(activeCategory);

  // Get cars by category for section display
  const vipCars = cars.filter((car) => car.serviceCategory === "VIP");
  const executiveCars = cars.filter(
    (car) => car.serviceCategory === "Executive"
  );
  const groupCars = cars.filter((car) => car.serviceCategory === "Group");
  const specialCars = cars.filter((car) => car.serviceCategory === "Special");

  const CarCard = ({ car }: { car: Car }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {car.category === "Luxury" && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Crown className="w-3 h-3 fill-current" />
            Luxury
          </div>
        )}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {car.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            {car.specs[0]}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">{car.name}</h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {car.specs.map((spec, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {car.highlights.slice(0, 4).map((highlight) => (
            <span
              key={highlight}
              className="inline-flex items-center text-xs text-gray-600"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
              {highlight}
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
            Cek Ketersediaan
          </a>
        </Button>
      </div>
    </div>
  );

  const VIPCarCard = ({ car }: { car: Car }) => (
    <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-500/30 h-full flex flex-col relative overflow-hidden">
      {/* Premium Background Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Crown Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 rounded-full">
          <Crown className="w-4 h-4 text-black" />
          <span className="text-xs font-bold text-black">VIP</span>
        </div>
      </div>

      {/* Luxury Badge */}
      {car.category === "Luxury" && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Luxury
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-slate-900">
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/30">
            {car.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <Users className="w-4 h-4" />
            <span className="text-slate-300">{car.specs[0]}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {car.specs.map((spec, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs text-slate-300 bg-slate-800/50 px-2 py-1 rounded"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {car.highlights.slice(0, 4).map((highlight) => (
            <span
              key={highlight}
              className="inline-flex items-center text-xs text-slate-300"
            >
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
              {highlight}
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

  const renderCarSection = (
    title: string,
    sectionCars: Car[],
    CardComponent: typeof CarCard,
    description: string,
    isVip: boolean = false
  ) => {
    if (sectionCars.length === 0) return null;

    return (
      <div className={isVip ? "" : "pt-16 border-t border-gray-200"}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {isVip ? (
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <Crown className="w-4 h-4" />
              Armada Premium
            </span>
          ) : (
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Armada Kami
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            {title}
          </h2>
          <p className="text-slate-600">{description}</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {sectionCars.map((car) => (
            <CardComponent key={car.slug} car={car} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {sectionCars.map((car) => (
                <CarouselItem key={car.slug} className="pl-4 sm:basis-1/2">
                  <CardComponent car={car} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* CTA for VIP */}
        {isVip && (
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white"
              asChild
            >
              <a href="/batam/armada">
                <Crown className="w-5 h-5 mr-2" />
                Lihat Semua Mobil Mewah
              </a>
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="armada" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category === "Semua" && <Filter className="w-4 h-4 mr-1" />}
              {category === "VIP" && <Crown className="w-4 h-4 mr-1" />}
              {category === "Executive" && (
                <Briefcase className="w-4 h-4 mr-1" />
              )}
              {category === "Group" && <Users className="w-4 h-4 mr-1" />}
              {category === "Special" && <Star className="w-4 h-4 mr-1" />}
              {category === "Semua"
                ? "Semua Armada"
                : serviceCategoryNames[category as ServiceCategory] || category}
            </Button>
          ))}
        </div>

        {/* Filtered Results View */}
        {activeCategory !== "Semua" ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {serviceCategoryNames[activeCategory as ServiceCategory] ||
                  activeCategory}
              </h2>
              <p className="text-gray-600 mt-2">
                Menampilkan {filteredCars.length} mobil
              </p>
            </div>
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {filteredCars.map((car) =>
                activeCategory === "VIP" ? (
                  <VIPCarCard key={car.slug} car={car} />
                ) : (
                  <CarCard key={car.slug} car={car} />
                )
              )}
            </div>
            <div className="lg:hidden">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {filteredCars.map((car) => (
                    <CarouselItem key={car.slug} className="pl-4 sm:basis-1/2">
                      {activeCategory === "VIP" ? (
                        <VIPCarCard car={car} />
                      ) : (
                        <CarCard car={car} />
                      )}
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
        ) : (
          <>
            {/* VIP Section */}
            {renderCarSection(
              "Armada VIP & Mobil Mewah",
              vipCars,
              VIPCarCard,
              "Pilihan kendaraan premium terbaik untuk pengalaman perjalanan yang eksklusif dan berkelas. Dilengkapi dengan layanan chauffeur profesional.",
              true
            )}

            {/* Executive Section */}
            {renderCarSection(
              "Armada Executive & Corporate",
              executiveCars,
              CarCard,
              "Kendaraan nyaman dan profesional untuk perjalanan bisnis dan kebutuhan korporasi Anda.",
              false
            )}

            {/* Group Section */}
            {renderCarSection(
              "Armada Group & Travel",
              groupCars,
              CarCard,
              "Solusi transportasi nyaman untuk keluarga besar, tur grup, dan perjalanan bersama.",
              false
            )}

            {/* Special Section */}
            {renderCarSection(
              "Armada Special Purpose",
              specialCars,
              CarCard,
              "Kendaraan khusus untuk kebutuhan khusus seperti offroad dan petualangan.",
              false
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default FleetSection;

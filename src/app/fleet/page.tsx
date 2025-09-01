"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Users, Fuel, MessageCircle, Search } from "lucide-react";
import React, { useState, useMemo, Suspense } from "react";
import { ImageZoom } from "@/components/ui/image-zoom";
import { useAppContext } from "../context/AppContext";
import { useSearchParams } from "next/navigation";

const fullFleet = [
  {
    slug: "honda-brio",
    name: "Honda Brio",
    image: "/armada/honda-brio.webp",
    hint: "honda brio",
    category: "City Car",
    alt: "Sewa mobil Honda Brio di seluruh Indonesia",
    rating: 4.7,
    capacity: 5,
    fuel: "Bensin",
    prices: { manual: 300000, matic: 350000, driver: 600000 },
  },
  {
    slug: "toyota-all-new-avanza",
    name: "Toyota All New Avanza",
    image: "/armada/toyota-all-new-avanza.webp",
    hint: "toyota avanza",
    category: "MPV",
    alt: "Sewa mobil Toyota All New Avanza di seluruh Indonesia",
    rating: 4.8,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    image: "/armada/xpander.webp",
    hint: "mitsubishi xpander",
    category: "MPV",
    alt: "Sewa mobil Mitsubishi Xpander di seluruh Indonesia",
    rating: 4.8,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "toyota-rush",
    name: "Toyota Rush",
    image: "/armada/toyota-rush.webp",
    hint: "toyota rush",
    category: "SUV",
    alt: "Sewa mobil Toyota Rush di seluruh Indonesia",
    rating: 4.7,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "toyota-innova-reborn",
    name: "Toyota Innova Reborn",
    image: "/armada/innova-reborn.webp",
    hint: "toyota innova reborn",
    category: "MPV",
    alt: "Sewa mobil Toyota Innova Reborn di seluruh Indonesia",
    rating: 4.9,
    capacity: 7,
    fuel: "Solar",
    prices: { manual: 550000, matic: 600000, driver: 900000 },
  },
  {
    slug: "toyota-hiace-premio",
    name: "Toyota Hiace Premio",
    image: "/armada/hiace-premio.webp",
    hint: "toyota hiace premio",
    category: "Van",
    alt: "Sewa mobil Toyota Hiace Premio di seluruh Indonesia",
    rating: 4.9,
    capacity: 11,
    fuel: "Diesel",
    prices: { driver: 1500000 },
  },
  {
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    image: "/armada/fortuner.webp",
    hint: "toyota fortuner",
    category: "SUV",
    alt: "Sewa mobil Toyota Fortuner di seluruh Indonesia",
    rating: 4.9,
    capacity: 7,
    fuel: "Solar",
    prices: { driver: 1300000 },
  },
  {
    slug: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    image: "/armada/pajero.webp",
    hint: "mitsubishi pajero",
    category: "SUV",
    alt: "Sewa mobil Mitsubishi Pajero di seluruh Indonesia",
    rating: 4.8,
    capacity: 7,
    fuel: "Diesel",
    prices: { driver: 1500000 },
  },
  {
    slug: "daihatsu-ayla",
    name: "Daihatsu Ayla",
    image: "/armada/daihatsu-ayla.webp",
    hint: "daihatsu ayla",
    category: "City Car",
    alt: "Sewa mobil Daihatsu Ayla di seluruh Indonesia",
    rating: 4.5,
    capacity: 5,
    fuel: "Bensin",
    prices: { manual: 300000, matic: 350000, driver: 600000 },
  },
  {
    slug: "toyota-agya",
    name: "Toyota Agya",
    image: "/armada/toyota-agya.webp",
    hint: "toyota agya",
    category: "City Car",
    alt: "Sewa mobil Toyota Agya di seluruh Indonesia",
    rating: 4.6,
    capacity: 5,
    fuel: "Bensin",
    prices: { manual: 300000, matic: 350000, driver: 600000 },
  },
  {
    slug: "toyota-calya",
    name: "Toyota Calya",
    image: "/armada/toyota-calya.webp",
    hint: "toyota calya",
    category: "MPV",
    alt: "Sewa mobil Toyota Calya di seluruh Indonesia",
    rating: 4.6,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 300000, matic: 350000, driver: 600000 },
  },
  {
    slug: "daihatsu-sigra",
    name: "Daihatsu Sigra",
    image: "/armada/daihatsu-sigra.webp",
    hint: "daihatsu sigra",
    category: "MPV",
    alt: "Sewa mobil Daihatsu Sigra di seluruh Indonesia",
    rating: 4.5,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 300000, matic: 350000, driver: 600000 },
  },
  {
    slug: "suzuki-xl7",
    name: "Suzuki XL7",
    image: "/armada/suzuki-xl7.webp",
    hint: "suzuki xl7",
    category: "SUV",
    alt: "Sewa mobil Suzuki XL7 di seluruh Indonesia",
    rating: 4.7,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "daihatsu-terios",
    name: "Daihatsu Terios",
    image: "/armada/daihatsu-terios.webp",
    hint: "daihatsu terios",
    category: "SUV",
    alt: "Sewa mobil Daihatsu Terios di seluruh Indonesia",
    rating: 4.7,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "suzuki-ertiga-hybrid",
    name: "Suzuki Ertiga Hybrid",
    image: "/armada/ertiga-hybrid.webp",
    hint: "suzuki ertiga hybrid",
    category: "MPV",
    alt: "Sewa mobil Suzuki Ertiga Hybrid di seluruh Indonesia",
    rating: 4.8,
    capacity: 7,
    fuel: "Bensin",
    prices: { manual: 400000, matic: 450000, driver: 700000 },
  },
  {
    slug: "isuzu-elf-minibus",
    name: "Isuzu Elf Minibus",
    image: "/armada/isuzu-elf-minibus.webp",
    hint: "isuzu elf minibus",
    category: "Van",
    alt: "Sewa mobil Isuzu Elf Minibus di seluruh Indonesia",
    rating: 4.8,
    capacity: 12,
    fuel: "Diesel",
    prices: { driver: 1400000 },
  },
  {
    slug: "toyota-hiace-commuter",
    name: "Toyota Hiace Commuter",
    image: "/armada/hiace-commuter.webp",
    hint: "toyota hiace commuter",
    category: "Van",
    alt: "Sewa mobil Toyota Hiace Commuter di seluruh Indonesia",
    rating: 4.9,
    capacity: 15,
    fuel: "Diesel",
    prices: { driver: 1300000 },
  },
  {
    slug: "hiace-premio-luxury",
    name: "Hiace Premio Luxury",
    image: "/armada/hiace-premio-luxury.webp",
    hint: "hiace premio luxury",
    category: "Luxury",
    alt: "Sewa mobil Hiace Premio Luxury di seluruh Indonesia",
    rating: 5.0,
    capacity: 8,
    fuel: "Diesel",
    prices: { driver: 2500000 },
  },
  {
    slug: "toyota-hilux-double-cabin",
    name: "Toyota Hilux Double Cabin",
    image: "/armada/hilux-double-cabin.webp",
    hint: "toyota hilux double cabin",
    category: "Utility",
    alt: "Sewa mobil Toyota Hilux Double Cabin di seluruh Indonesia",
    rating: 4.7,
    capacity: 5,
    fuel: "Diesel",
    prices: { driver: 1600000 },
  },
  {
    slug: "toyota-alphard-new",
    name: "Toyota Alphard New",
    image: "/armada/alphard-new.webp",
    hint: "toyota alphard",
    category: "Luxury",
    alt: "Sewa mobil Toyota Alphard New di seluruh Indonesia",
    rating: 5.0,
    capacity: 6,
    fuel: "Bensin",
    prices: { driver: 3000000 },
  },
  {
    slug: "Toyota-innova-zenix",
    name: "Toyota Innova Zenix",
    image: "/armada/innova-zenix .webp",
    hint: "innova zenix",
    category: "Luxury",
    alt: "Sewa mobil Toyota zenix di seluruh Indonesia",
    rating: 5.0,
    capacity: 6,
    fuel: "Bensin",
    prices: { matic: 750000 },
  },
];

function FleetPageContent() {
  const searchParams = useSearchParams();
  const { getFormattedPrice } = useAppContext();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [sortOrder, setSortOrder] = useState("rating-desc");
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("tipe") || "all"
  );

  const categories = ["all", ...new Set(fullFleet.map((car) => car.category))];

  const filteredAndSortedFleet = useMemo(() => {
    let filtered = fullFleet.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (car) =>
          car.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter
      );
    }

    const [sortBy, direction] = sortOrder.split("-");

    return filtered.sort((a, b) => {
      let valA, valB;

      if (sortBy === "price") {
        const priceA =
          a.prices.driver || a.prices.matic || a.prices.manual || 0;
        const priceB =
          b.prices.driver || b.prices.matic || b.prices.manual || 0;
        valA = priceA;
        valB = priceB;
      } else {
        // rating
        valA = a.rating;
        valB = b.rating;
      }

      if (direction === "asc") {
        return valA - valB;
      } else {
        return valB - valA;
      }
    });
  }, [searchTerm, sortOrder, categoryFilter]);

  return (
    <div className="bg-background">
      <section className="relative bg-secondary py-20 md:py-32">
        <div className="absolute inset-0">
          <ImageZoom
            src="/hero-section.webp"
            alt="Banner rental mobil dengan berbagai pilihan armada di seluruh Indonesia"
            data-ai-hint="car lineup showroom"
            fill
            className="object-cover opacity-10"
            isZoomable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Pilihan Lengkap Armada Kami di Seluruh Nusantara
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Temukan mobil yang sempurna untuk setiap kebutuhan perjalanan Anda
            di seluruh Indonesia. Kualitas, kebersihan, dan performa terjamin.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-card p-6 rounded-2xl shadow-lg mb-12 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Cari mobil impian Anda..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cari mobil"
              />
            </div>
            <div className="md:col-span-1">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger aria-label="Pilih Kategori">
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {cat === "all" ? "Semua Kategori" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-1">
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger aria-label="Urutkan Berdasarkan">
                  <SelectValue placeholder="Urutkan Berdasarkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating-desc">Rating Tertinggi</SelectItem>
                  <SelectItem value="price-asc">Harga Terendah</SelectItem>
                  <SelectItem value="price-desc">Harga Tertinggi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedFleet.map((car) => {
            const waText = `Halo, saya tertarik untuk menyewa ${car.name}. Mohon informasinya.`;
            const encodedWaText = encodeURIComponent(waText);

            return (
              <Card
                key={car.slug}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-card text-left group transform hover:-translate-y-2 group-hover:animate-shimmer"
              >
                <CardHeader className="p-0 relative">
                  {/* Responsive Image */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64">
                    <Image
                      src={car.image}
                      alt={car.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-background/80 text-foreground text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                    {car.category}
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">
                    {car.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-muted-foreground font-semibold">
                      {car.rating}
                    </span>
                  </div>

                  <div className="mt-4 flex-grow space-y-3">
                    {car.prices.manual || car.prices.matic ? (
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="font-semibold text-primary text-sm mb-2">
                          Harga Sewa Lepas Kunci
                        </p>
                        {car.prices.manual && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">
                              Manual
                            </span>
                            <span className="font-bold text-foreground">
                              {getFormattedPrice(car.prices.manual)}
                            </span>
                          </div>
                        )}
                        {car.prices.matic && (
                          <div className="flex justify-between items-center text-sm mt-1">
                            <span className="text-muted-foreground">Matic</span>
                            <span className="font-bold text-foreground">
                              {getFormattedPrice(car.prices.matic)}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : null}
                    {car.prices.driver && (
                      <div className="p-3 rounded-lg bg-secondary/50">
                        <p className="font-semibold text-primary text-sm mb-2">
                          {car.prices.manual || car.prices.matic
                            ? "Mobil + Supir Include BBM"
                            : "Harga Sewa ALL IN"}
                        </p>
                        <div className="flex justify-end items-center">
                          <span className="font-bold text-lg text-foreground">
                            {getFormattedPrice(car.prices.driver)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 border-t mt-4">
                  <div className="w-full pt-4">
                    <div className="flex justify-between items-center w-full text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{car.capacity} Penumpang</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a
                        href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Pesan via WA
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// This is the Server Component that will handle searchParams
export default function FleetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FleetPageContent />
    </Suspense>
  );
}

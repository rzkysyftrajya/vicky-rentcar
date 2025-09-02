"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const cars = [
  {
    name: "Alphard New",
    image: "/armada/alphard-new.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "Luxury",
  },
  {
    name: "Fortuner",
    image: "/armada/fortuner.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
  },
  {
    name: "Innova Reborn",
    image: "/armada/innova-reborn.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
  },
  {
    name: "Innova Zenix",
    image: "/armada/innova-zenix .webp",
    specs: ["7 Penumpang", "Matic", "Hybrid"],
    category: "MPV",
  },
  {
    name: "Pajero",
    image: "/armada/pajero.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
  },
  {
    name: "Hiace Premio",
    image: "/armada/hiace-premio.webp",
    specs: ["14 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
  },
  {
    name: "Hiace Premio Luxury",
    image: "/armada/hiace-premio-luxury.webp",
    specs: ["9 Penumpang", "Luxury Seat", "Diesel"],
    category: "Luxury",
  },
  {
    name: "Hiace Commuter",
    image: "/armada/hiace-commuter.webp",
    specs: ["14 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
  },
  {
    name: "Isuzu Elf Minibus",
    image: "/armada/isuzu-elf-minibus.webp",
    specs: ["20 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
  },
  {
    name: "Hilux Double Cabin",
    image: "/armada/hilux-double-cabin.webp",
    specs: ["5 Penumpang", "4x4", "Diesel"],
    category: "SUV",
  },
  {
    name: "Ertiga Hybrid",
    image: "/armada/ertiga-hybrid.webp",
    specs: ["7 Penumpang", "Matic", "Hybrid"],
    category: "MPV",
  },
  {
    name: "Suzuki XL7",
    image: "/armada/suzuki-xl7.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
  },
  {
    name: "Xpander",
    image: "/armada/xpander.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
  },
  {
    name: "Toyota Rush",
    image: "/armada/toyota-rush.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "SUV",
  },
  {
    name: "Toyota Calya",
    image: "/armada/toyota-calya.webp",
    specs: ["7 Penumpang", "Matic", "Irit BBM"],
    category: "MPV",
  },
  {
    name: "Toyota Agya",
    image: "/armada/toyota-agya.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
  },
  {
    name: "Honda Brio",
    image: "/armada/honda-brio.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
  },
  {
    name: "Daihatsu Ayla",
    image: "/armada/daihatsu-ayla.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
  },
  {
    name: "Daihatsu Sigra",
    image: "/armada/daihatsu-sigra.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
  },
  {
    name: "Daihatsu Terios",
    image: "/armada/daihatsu-terios.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "SUV",
  },
];

const categories = ["Semua", "City Car", "MPV", "SUV", "Luxury", "Minibus"];

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredCars =
    selectedCategory === "Semua"
      ? cars
      : cars.filter((car) => car.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Armada Premium Kami
      </h1>

      {/* Filter Kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid Armada */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCars.map((car, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
              <CardContent className="p-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover rounded-t-2xl"
                />
                <div className="p-5 text-center">
                  <h2 className="font-bold text-xl mb-3">{car.name}</h2>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {car.specs.map((spec, i) => (
                      <li key={i}>• {spec}</li>
                    ))}
                  </ul>
                  <p className="inline-block bg-blue-300 text-blue-700 font-semibold px-3 py-1 rounded-lg">
                    💥 Harga Spesial, Hubungi Langsung!
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <a
                    href={`https://wa.me/628123456789?text=Halo%20saya%20ingin%20sewa%20${encodeURIComponent(
                      car.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 animate-pulse" /> Pesan via WA
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

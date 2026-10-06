export type VehicleBrand =
  | "Toyota"
  | "Mitsubishi"
  | "Suzuki"
  | "Honda"
  | "Daihatsu"
  | "Isuzu"
  | "All";

export interface Vehicle {
  id: string;
  name: string;
  brand: VehicleBrand;
  type: "Sedan" | "SUV" | "MPV" | "Hatchback" | "Luxury" | "Van" | "Pick-up";
  transmission: "Automatic" | "Manual" | "Automatic & Manual";
  seats: number;
  image: string;
  badge?: "Premium" | "Luxury" | "Best Seller" | "Unit Favorit";
}

export const vehicleBrands: VehicleBrand[] = ["All", "Toyota", "Mitsubishi", "Suzuki", "Honda", "Daihatsu", "Isuzu"];

export const vehicles: Vehicle[] = [
  // Luxury / Premium
  {
    id: "toyota-alphard-new",
    name: "Toyota Alphard New",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Automatic",
    seats: 6,
    image: "/semarang/armada/toyota-alphard-new.webp",
    badge: "Luxury",
  },
  {
    id: "hiace-premio-luxury",
    name: "Hiace Premio Luxury",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Manual",
    seats: 10,
    image: "/semarang/armada/hiace-premio.webp",
    badge: "Luxury",
  },

  // ===== BEST SELLER MPV & FAMILY CARS =====
  {
    id: "toyota-innova-reborn",
    name: "Toyota Innova Reborn",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/toyota-innova-reborn.webp",
    badge: "Unit Favorit",
  },
  {
    id: "toyota-all-new-avanza",
    name: "Toyota All New Avanza",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/toyota-all-new-avanza.webp",
    badge: "Best Seller",
  },
  {
    id: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    brand: "Mitsubishi",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/mitsubishi-xpander.webp",
    badge: "Best Seller",
  },
  {
    id: "suzuki-ertiga-hybrid",
    name: "Suzuki Ertiga Hybrid",
    brand: "Suzuki",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/suzuki-ertiga-hybrid.webp",
  },
  {
    id: "toyota-calya",
    name: "Toyota Calya",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/toyota-calya.webp",
  },
  {
    id: "daihatsu-sigra",
    name: "Daihatsu Sigra",
    brand: "Daihatsu",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/daihatsu-sigra.webp",
  },

  // ===== SUV =====
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    image: "/semarang/armada/toyota-fortuner.webp",
    badge: "Premium",
  },
  {
    id: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    brand: "Mitsubishi",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    image: "/semarang/armada/mitsubishi-pajero.webp",
    badge: "Premium",
  },
  {
    id: "toyota-rush",
    name: "Toyota Rush",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/toyota-rush.webp",
  },
  {
    id: "suzuki-xl7",
    name: "Suzuki XL7",
    brand: "Suzuki",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/suzuki-xl7.webp",
  },
  {
    id: "daihatsu-terios",
    name: "Daihatsu Terios",
    brand: "Daihatsu",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    image: "/semarang/armada/daihatsu-terios.webp",
  },

  // ===== CITY CARS / HATCHBACK =====
  {
    id: "toyota-agya",
    name: "Toyota Agya",
    brand: "Toyota",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    image: "/semarang/armada/toyota-agya.webp",
  },
  {
    id: "honda-brio",
    name: "Honda Brio",
    brand: "Honda",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    image: "/semarang/armada/honda-brio.webp",
  },
  {
    id: "daihatsu-ayla",
    name: "Daihatsu Ayla",
    brand: "Daihatsu",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    image: "/semarang/armada/daihatsu-ayla.webp",
  },

  // ===== VAN / PICKUP / MINIBUS =====
  {
    id: "toyota-hiace-premio",
    name: "Toyota Hiace Premio",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 12,
    image: "/semarang/armada/hiace-premio.webp",
    badge: "Premium",
  },
  {
    id: "toyota-hiace-commuter",
    name: "Toyota Hiace Commuter",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 15,
    image: "/semarang/armada/toyota-hiace-commuter.webp",
  },
  {
    id: "toyota-hilux-double-cabin",
    name: "Toyota Hilux Double Cabin",
    brand: "Toyota",
    type: "Pick-up",
    transmission: "Manual",
    seats: 5,
    image: "/semarang/armada/toyota-hilux-double-cabin.webp",
    badge: "Premium",
  },
  {
    id: "isuzu-elf-minibus",
    name: "Isuzu Elf Minibus",
    brand: "Isuzu",
    type: "Van",
    transmission: "Manual",
    seats: 18,
    image: "/semarang/armada/isuzu-elf-minibus.webp",
  },
];

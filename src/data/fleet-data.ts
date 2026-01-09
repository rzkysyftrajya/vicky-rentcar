// Vehicle types for service categorization
export type ServiceCategory = "VIP" | "Executive" | "Group" | "Special";

export interface Car {
  name: string;
  image: string;
  specs: string[];
  category: string;
  serviceCategory: ServiceCategory;
  highlights: string[];
  slug: string;
}

export const cars: Car[] = [
  // === VIP & LUXURY SERVICES ===
  {
    name: "Alphard New Gen 4",
    image: "/medan/armada/ALPHARD-GEN-4.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "Luxury",
    serviceCategory: "VIP",
    highlights: [
      "Luxury Interior",
      "Captain Seat",
      "Premium Audio",
      "Chauffeur",
    ],
    slug: "alphard-new-gen-4",
  },
  {
    name: "Alphard Gen 3",
    image: "/medan/armada/ALPHARD-GEN-3.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "Luxury",
    serviceCategory: "VIP",
    highlights: [
      "Luxury Interior",
      "Captain Seat",
      "Premium Audio",
      "Chauffeur",
    ],
    slug: "alphard-gen-3",
  },
  {
    name: "Land Cruiser",
    image: "/medan/armada/LAND-CRUISER.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
    serviceCategory: "VIP",
    highlights: ["Premium SUV", "4x4 Capability", "Luxury Cabin", "Chauffeur"],
    slug: "land-cruiser",
  },
  {
    name: "Mercedes-Benz (Mercy)",
    image: "/medan/armada/MERCY-E-300.webp",
    specs: ["5 Penumpang", "Matic", "Bensin"],
    category: "Luxury",
    serviceCategory: "VIP",
    highlights: [
      "German Engineering",
      "Premium Leather",
      "Executive Class",
      "Chauffeur",
    ],
    slug: "mercedes-benz",
  },
  {
    name: "Fortuner GR 4x2",
    image: "/medan/armada/FORTUNER-GR-4X2.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
    serviceCategory: "VIP",
    highlights: [
      "GR Sport Design",
      "Premium Interior",
      "Terra Torque",
      "Chauffeur",
    ],
    slug: "fortuner-gr-4x2",
  },
  {
    name: "Fortuner GR 4x4",
    image: "/medan/armada/FORTUNER-GR-4X4.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
    serviceCategory: "VIP",
    highlights: [
      "GR Sport Design",
      "4x4 Capability",
      "Premium Interior",
      "Chauffeur",
    ],
    slug: "fortuner-gr-4x4",
  },
  {
    name: "Pajero",
    image: "/medan/armada/PAJERO.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
    serviceCategory: "VIP",
    highlights: [
      "Premium SUV",
      "4x4 Capability",
      "Luxury Interior",
      "Chauffeur",
    ],
    slug: "pajero",
  },
  {
    name: "Hiace Premio Luxury",
    image: "/medan/armada/HIACE-PREMIO-LUXURY.webp",
    specs: ["9 Penumpang", "Luxury Seat", "Diesel"],
    category: "Luxury",
    serviceCategory: "VIP",
    highlights: [
      "Executive Lounge Seat",
      "Premium Interior",
      "VIP Configuration",
      "Chauffeur",
    ],
    slug: "hiace-premio-luxury",
  },
  // === EXECUTIVE & CORPORATE SERVICES ===
  {
    name: "Innova Zenix",
    image: "/medan/armada/INNOVA-ZENIX.webp",
    specs: ["7 Penumpang", "Matic", "Hybrid"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: [
      "Hybrid Technology",
      "Spacious Interior",
      "Fuel Efficient",
      "Professional Driver",
    ],
    slug: "innova-zenix",
  },
  {
    name: "Innova Reborn",
    image: "/medan/armada/INNOVA-REBORN.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: [
      "Reliable Performance",
      "Comfortable Ride",
      "Spacious",
      "Professional Driver",
    ],
    slug: "innova-reborn",
  },
  {
    name: "Fortuner",
    image: "/medan/armada/FORTUNER.webp",
    specs: ["7 Penumpang", "Matic", "Diesel"],
    category: "SUV",
    serviceCategory: "Executive",
    highlights: [
      "Strong Performance",
      "Premium Feel",
      "7-Seater",
      "Professional Driver",
    ],
    slug: "toyota-fortuner",
  },
  // === GROUP & TRAVEL SERVICES ===
  {
    name: "Hiace Premio",
    image: "/medan/armada/HIACE-PREMIO.webp",
    specs: ["14 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
    serviceCategory: "Group",
    highlights: ["14-Seater", "Spacious Cabin", "Luggage Space", "Group Tours"],
    slug: "hiace-premio",
  },
  {
    name: "Hiace Commuter",
    image: "/medan/armada/HIACE-COMMUTER.webp",
    specs: ["14 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
    serviceCategory: "Group",
    highlights: ["14-Seater", "Economical", "Reliable", "Corporate Groups"],
    slug: "hiace-commuter",
  },
  {
    name: "Isuzu Elf Minibus",
    image: "/medan/armada/ISUZU-ELF-MINIBUS.webp",
    specs: ["20 Penumpang", "Manual", "Diesel"],
    category: "Minibus",
    serviceCategory: "Group",
    highlights: ["20-Seater", "Large Groups", "Tour Bus", "School Events"],
    slug: "isuzu-elf-minibus",
  },
  // === SPECIAL PURPOSE VEHICLES ===
  {
    name: "Hilux Double Cabin 4x4",
    image: "/medan/armada/HILUX-DOUBLE-CABIN.webp",
    specs: ["5 Penumpang", "4x4", "Diesel"],
    category: "SUV",
    serviceCategory: "Special",
    highlights: [
      "4x4 Offroad",
      "Pickup Truck",
      "Adventure Ready",
      "Rugged Design",
    ],
    slug: "hilux-double-cabin",
  },
  // === STANDARD FLEET (City Car, MPV, SUV) ===
  {
    name: "Toyota Rush",
    image: "/medan/armada/TOYOTA-RUSH.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "SUV",
    serviceCategory: "Executive",
    highlights: ["Compact SUV", "Spacious", "Fuel Efficient", "Family Safe"],
    slug: "toyota-rush",
  },
  {
    name: "Toyota Calya",
    image: "/medan/armada/CALYA.webp",
    specs: ["7 Penumpang", "Matic", "Irit BBM"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: ["Economical", "7-Seater", "City Friendly", "Budget Smart"],
    slug: "toyota-calya",
  },
  {
    name: "Toyota Agya",
    image: "/medan/armada/TOYOTA-AGYA.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
    serviceCategory: "Executive",
    highlights: ["Compact", "Fuel Efficient", "City Driving", "Easy Parking"],
    slug: "toyota-agya",
  },
  {
    name: "Honda Brio",
    image: "/medan/armada/HONDA-BRIO.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
    serviceCategory: "Executive",
    highlights: ["Compact", "Modern Design", "Fuel Efficient", "City Smart"],
    slug: "honda-brio",
  },
  {
    name: "Daihatsu Ayla",
    image: "/medan/armada/DAIHATSU-AYLA.webp",
    specs: ["4 Penumpang", "Matic", "Irit BBM"],
    category: "City Car",
    serviceCategory: "Executive",
    highlights: ["Economical", "Reliable", "Compact", "Budget Friendly"],
    slug: "daihatsu-ayla",
  },
  {
    name: "Daihatsu Sigra",
    image: "/medan/armada/DAIHATSU-SIGRA.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: ["7-Seater", "Compact", "Economical", "Family Practical"],
    slug: "daihatsu-sigra",
  },
  {
    name: "Daihatsu Terios",
    image: "/medan/armada/DAIHATSU-TERIOS-DOUBLE-CABIN.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "SUV",
    serviceCategory: "Special",
    highlights: ["Compact SUV", "7-Seater", "City Capable", "Adventure Ready"],
    slug: "daihatsu-terios",
  },
  {
    name: "Suzuki XL7",
    image: "/medan/armada/SUZUKI-XL7.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: ["7-Seater", "Modern Design", "Spacious", "Family Comfort"],
    slug: "suzuki-xl7",
  },
  {
    name: "Xpander",
    image: "/medan/armada/XPANDER.webp",
    specs: ["7 Penumpang", "Matic", "Bensin"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: [
      "7-Seater",
      "Stylish Design",
      "Spacious Cabin",
      "Family Favorite",
    ],
    slug: "mitsubishi-xpander",
  },
  {
    name: "Ertiga Hybrid",
    image: "/medan/armada/ERTIGA-HYBRID.webp",
    specs: ["7 Penumpang", "Matic", "Hybrid"],
    category: "MPV",
    serviceCategory: "Executive",
    highlights: [
      "Hybrid Technology",
      "7-Seater",
      "Fuel Efficient",
      "Eco Friendly",
    ],
    slug: "suzuki-ertiga-hybrid",
  },
];

// Display categories (for fleet page filtering)
export const categories = [
  "Semua",
  "City Car",
  "MPV",
  "SUV",
  "Luxury",
  "Minibus",
];

// Service categories (for layanan page)
export const serviceCategories = [
  { id: "VIP", name: "VIP & Luxury", icon: "👑" },
  { id: "Executive", name: "Executive & Corporate", icon: "💼" },
  { id: "Group", name: "Group & Travel", icon: "🚌" },
  { id: "Special", name: "Special Purpose", icon: "🚙" },
];

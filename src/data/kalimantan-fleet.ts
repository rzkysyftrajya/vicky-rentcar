export type KalimantanVehicle = {
  name: string;
  category: string;
  image?: string;
  featured?: boolean;
};

export const kalimantanFleet: KalimantanVehicle[] = [
  {
    name: "Toyota Alphard",
    category: "Premium",
    image: "/kalimantan/armada/Alphard.webp",
    featured: true,
  },
  {
    name: "Honda BR-V",
    category: "SUV",
    image: "/kalimantan/armada/BRV.webp",
  },
  {
    name: "Honda Brio",
    category: "City car",
    image: "/kalimantan/armada/Brio.webp",
  },
  {
    name: "Honda CR-V",
    category: "SUV",
    image: "/kalimantan/armada/CRV.webp",
  },
  {
    name: "Toyota Calya",
    category: "Keluarga",
    image: "/kalimantan/armada/Calya.webp",
  },
  {
    name: "Suzuki Ertiga",
    category: "MPV",
    image: "/kalimantan/armada/Ertiga.webp",
  },
  {
    name: "Toyota Fortuner GR",
    category: "SUV premium",
    image: "/kalimantan/armada/Fortuner%20GR.webp",
  },
  {
    name: "Honda HR-V",
    category: "SUV",
    image: "/kalimantan/armada/HRV.webp",
  },
  {
    name: "Toyota Innova Zenix",
    category: "MPV",
    image: "/kalimantan/armada/Innova%20Zenix.webp",
    featured: true,
  },
  {
    name: "Toyota Innova Reborn",
    category: "MPV",
    image: "/kalimantan/armada/Innova-Reborn.webp",
    featured: true,
  },
  {
    name: "Toyota Innova Venturer",
    category: "MPV premium",
    image: "/kalimantan/armada/Innova-Venturer.webp",
  },
  {
    name: "Toyota Land Cruiser 2020",
    category: "SUV premium",
    image: "/kalimantan/armada/Land-Cruiser-2020.png",
    featured: true,
  },
  {
    name: "Lexus",
    category: "Premium",
    image: "/kalimantan/armada/Lexus.webp",
    featured: true,
  },
  {
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    image: "/kalimantan/armada/Pajero-Sport.webp",
  },
  {
    name: "Hyundai Palisade",
    category: "SUV premium",
    image: "/kalimantan/armada/Palisade.webp",
  },
  {
    name: "Toyota Veloz",
    category: "MPV",
    image: "/kalimantan/armada/Veloz.webp",
  },
  {
    name: "Mitsubishi Xpander",
    category: "MPV",
    image: "/kalimantan/armada/Xpander.webp",
  },
  {
    name: "Mercedes-Benz E200",
    category: "Premium",
    image: "/kalimantan/armada/mercedes-benz-e200.webp",
  },
];

export const hiaceOptions = ["Toyota Hiace Commuter", "Toyota Hiace Premio"];

const homepageVehicleNames = [
  "Toyota Alphard",
  "Toyota Hiace",
  "Lexus",
  "Toyota Land Cruiser 2020",
  "Toyota Innova Zenix",
  "Toyota Innova Reborn",
];

export const featuredKalimantanFleet: KalimantanVehicle[] =
  homepageVehicleNames.flatMap((name) => {
    if (name === "Toyota Hiace") {
      return [
        {
          name: "Toyota Hiace Premio",
          category: "Rombongan",
          image: "/kalimantan/armada/hiace-premio.webp",
          featured: true,
        },
      ];
    }

    const vehicle = kalimantanFleet.find((item) => item.name === name);
    return vehicle ? [vehicle] : [];
  });

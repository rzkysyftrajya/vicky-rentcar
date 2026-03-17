export interface TourPackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  image: string;
  destinations: string[];
  highlights: string[];
  priceRange: string;
}

export const tourPackages: TourPackage[] = [
  // Top 3 for home
  {
    id: "danau-toba-3d2m",
    name: "Paket Wisata Danau Toba 3 Hari 2 Malam",
    slug: "danau-toba-3d2m",
    description: "Jelajahi keindahan Danau Toba, Pulau Samosir, dan panorama alam Sumatera Utara dengan akomodasi nyaman.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-3-day-2-night.webp",
    destinations: ["Parapat", "Pulau Samosir", "Bukit Simarjarunjung", "Air Terjun Sipiso-Piso"],
    highlights: ["Hotel Danau View", "Ferry Samosir", "Sopir Guide", "Makan 6x"],
    priceRange: "",
  },
  {
    id: "berastagi-2d1m",
    name: "Paket Wisata Medan Berastagi 2 Hari 1 Malam",
    slug: "berastagi-2d1m",
    description: "Nikmati udara sejuk Berastagi, wisata alam, dan kuliner khas dengan perjalanan santai dari Medan.",
    duration: "2H/1M",
    image: "/medan/paket-tour/PAKET-WISATA-MEDAN-BERASTAGI-2-DAY-1-NIGHT.webp",
    destinations: ["Berastagi", "Pasar Buah Berastagi", "Gundaling", "Air Terjun Sikulikap"],
    highlights: ["Udara Sejuk", "Buah Segar", "Wisata Peternakan", "Homestay Nyaman"],
    priceRange: "",
  },
  {
    id: "bukit-lawang-3d",
    name: "Paket Adventure Bukit Lawang 3 Hari",
    slug: "bukit-lawang-3d",
    description: "Petualangan seru jungle trekking, river tubing, dan bertemu orangutan di habitat aslinya.",
    duration: "3 Hari",
    image: "/medan/paket-tour/paket-adventure-bukit-lawang-3-day.webp",
    destinations: ["Bukit Lawang", "Jungle Trekking", "Sungai Bohorok", "Orangutan Feeding"],
    highlights: ["Trekking Ahli", "Tube Sungai", "Foto Orangutan", "Eco Lodge"],
    priceRange: "Rp1.800.000 - Rp3.200.000",
  },
  // Additional packages for full list
  {
    id: "medan-1h",
    name: "Paket Wisata Medan 1 Hari",
    slug: "medan-1h",
    description: "City tour lengkap Istana Maimun, Masjid Raya, dan kuliner Medan.",
    duration: "1 Hari",
    image: "/medan/paket-tour/paket-wisata-medan-1-day.webp",
    destinations: ["Istana Maimun", "Masjid Raya", "Tjong A Fie", "Merdeka Walk"],
    highlights: ["City Tour", "Kuliner Legendaris", "Sopir Guide", "AC Mobil"],
    priceRange: "Rp800.000",
  },
  {
    id: "berastagi-1h",
    name: "Paket Wisata Berastagi 1 Hari",
    slug: "berastagi-1h",
    description: "Hari penuh kesegaran di Berastagi dengan wisata alam dan buah segar.",
    duration: "1 Hari",
    image: "/medan/paket-tour/paket-wisata-berastagi-1-day.webp",
    destinations: ["Puncak Tangke Tabu", "Rumah Bolon", "Pasar Buah", "Gundaling"],
    highlights: ["Buah Segar", "Pemandangan Indah", "Peternakan", "Wisata Budaya"],
    priceRange: "Rp700.000",
  },
  {
    id: "medan-2h",
    name: "Paket Wisata Medan 2 Hari",
    slug: "medan-2h",
    description: "Wisata kota Medan dan sekitarnya dengan 1 malam menginap.",
    duration: "2H/1M",
    image: "/medan/paket-tour/paket-wisata-medan-2-day.webp",
    destinations: ["Medan City", "Berastagi", "Tongging", "Sipiso-piso"],
    highlights: ["Hotel Bintang 3", "Kuliner 5x", "Free WiFi", "Sopir Guide"],
    priceRange: "Rp1.500.000",
  },
  {
    id: "danau-toba-2d1m",
    name: "Paket Wisata Danau Toba 2 Hari 1 Malam",
    slug: "danau-toba-2d1m",
    description: "Pendek tapi lengkap ke Danau Toba dan Pulau Samosir.",
    duration: "2H/1M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-2-day-1-night.webp",
    destinations: ["Parapat", "Tomok", "Ambarita", "Samosir"],
    highlights: ["Ferry", "Hotel View Danau", "Makan 4x", "Sopir Local"],
    priceRange: "Rp1.800.000",
  },
  {
    id: "medan-3h",
    name: "Paket Wisata Medan 3 Hari",
    slug: "medan-3h",
    description: "Wisata lengkap Medan, Berastagi, dan Danau Toba.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-wisata-medan-3-day.webp",
    destinations: ["Medan City", "Berastagi", "Tongging", "Danau Toba"],
    highlights: ["3 Hotel", "Makan 8x", "Full AC", "Guide Profesional"],
    priceRange: "Rp2.800.000",
  },
  {
    id: "honeymoon-toba",
    name: "Paket Honeymoon Danau Toba 3 Hari",
    slug: "honeymoon-toba",
    description: "Romantis honeymoon di Danau Toba dengan fasilitas spesial pasangan.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-honeymoon-danau-toba-3-day.webp",
    destinations: ["Parapat", "Samosir", "Dinner Romantis", "Spa"],
    highlights: ["Room Couple", "Dinner Lake View", "Flower Bath", "Private Car"],
    priceRange: "Rp4.200.000/pasangan",
  },
  {
    id: "toba-4h",
    name: "Paket Wisata Danau Toba 4 Hari",
    slug: "toba-4h",
    description: "Eksplorasi lengkap Danau Toba dan sekitarnya.",
    duration: "4H/3M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-4-day.webp",
    destinations: ["Parapat", "Samosir", "Simanindo", "Tongging"],
    highlights: ["3 Hotel", "Ferry 2x", "Makan 10x", "Private Guide"],
    priceRange: "Rp3.500.000",
  },
];

export const topTourPackages = tourPackages.slice(0, 3);


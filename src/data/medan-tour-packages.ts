export interface TourPackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  image: string;
  destinations: string[];
  highlights: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "danau-toba-3d2m",
    name: "Paket Wisata Danau Toba 3 Hari 2 Malam",
    slug: "danau-toba-3d2m",
    description: "Jelajahi keindahan Danau Toba, Pulau Samosir, dan panorama alam Sumatera Utara dengan jadwal yang nyaman dan mudah diatur.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-3-day-2-night.webp",
    destinations: ["Parapat", "Pulau Samosir", "Bukit Simarjarunjung", "Air Terjun Sipiso-Piso"],
    highlights: ["Hotel Danau View", "Ferry Samosir", "Sopir Guide", "Makan 6x"],
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
  },
  {
    id: "bukit-lawang-3d",
    name: "Paket Adventure Bukit Lawang 3 Hari",
    slug: "bukit-lawang-3d",
    description: "Petualangan seru dengan jungle trekking, river tubing, dan pengalaman alam di sekitar Bukit Lawang.",
    duration: "3 Hari",
    image: "/medan/paket-tour/paket-adventure-bukit-lawang-3-day.webp",
    destinations: ["Bukit Lawang", "Jungle Trekking", "Sungai Bohorok", "Orangutan Feeding"],
    highlights: ["Trekking Ahli", "Tube Sungai", "Foto Orangutan", "Eco Lodge"],
  },
  {
    id: "medan-1h",
    name: "Paket Wisata Medan 1 Hari",
    slug: "medan-1h",
    description: "City tour singkat dengan destinasi budaya, sejarah, dan kuliner di kota Medan.",
    duration: "1 Hari",
    image: "/medan/paket-tour/paket-wisata-medan-1-day.webp",
    destinations: ["Istana Maimun", "Masjid Raya", "Tjong A Fie", "Merdeka Walk"],
    highlights: ["City Tour", "Kuliner Legendaris", "Sopir Guide", "AC Mobil"],
  },
  {
    id: "berastagi-1h",
    name: "Paket Wisata Berastagi 1 Hari",
    slug: "berastagi-1h",
    description: "Hari yang ringan untuk menjelajah pemandangan pegunungan dan jajanan lokal di Berastagi.",
    duration: "1 Hari",
    image: "/medan/paket-tour/paket-wisata-berastagi-1-day.webp",
    destinations: ["Puncak Tangke Tabu", "Rumah Bolon", "Pasar Buah", "Gundaling"],
    highlights: ["Buah Segar", "Pemandangan Indah", "Peternakan", "Wisata Budaya"],
  },
  {
    id: "medan-2h",
    name: "Paket Wisata Medan 2 Hari",
    slug: "medan-2h",
    description: "Jelajah kota Medan dan sekitarnya dengan istirahat satu malam untuk perjalanan yang lebih santai.",
    duration: "2H/1M",
    image: "/medan/paket-tour/paket-wisata-medan-2-day.webp",
    destinations: ["Medan City", "Berastagi", "Tongging", "Sipiso-piso"],
    highlights: ["Hotel Bintang 3", "Kuliner 5x", "WiFi Tersedia", "Sopir Guide"],
  },
  {
    id: "danau-toba-2d1m",
    name: "Paket Wisata Danau Toba 2 Hari 1 Malam",
    slug: "danau-toba-2d1m",
    description: "Perjalanan singkat yang tetap fokus pada pemandangan Danau Toba dan Pulau Samosir.",
    duration: "2H/1M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-2-day-1-night.webp",
    destinations: ["Parapat", "Tomok", "Ambarita", "Samosir"],
    highlights: ["Ferry", "Hotel View Danau", "Makan 4x", "Sopir Local"],
  },
  {
    id: "medan-3h",
    name: "Paket Wisata Medan 3 Hari",
    slug: "medan-3h",
    description: "Rencana perjalanan yang lebih lengkap untuk menikmati Medan, Berastagi, dan Danau Toba.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-wisata-medan-3-day.webp",
    destinations: ["Medan City", "Berastagi", "Tongging", "Danau Toba"],
    highlights: ["3 Hotel", "Makan 8x", "Full AC", "Guide Profesional"],
  },
  {
    id: "honeymoon-toba",
    name: "Paket Honeymoon Danau Toba 3 Hari",
    slug: "honeymoon-toba",
    description: "Paket santai untuk pasangan yang ingin menikmati pemandangan Danau Toba dengan waktu yang lebih tenang.",
    duration: "3H/2M",
    image: "/medan/paket-tour/paket-honeymoon-danau-toba-3-day.webp",
    destinations: ["Parapat", "Samosir", "Dinner Romantis", "Spa"],
    highlights: ["Room Couple", "Dinner Lake View", "Flower Bath", "Private Car"],
  },
  {
    id: "toba-4h",
    name: "Paket Wisata Danau Toba 4 Hari",
    slug: "toba-4h",
    description: "Eksplorasi lebih lanjut ke Danau Toba dan sekitarnya dengan jadwal yang tidak terlalu terburu-buru.",
    duration: "4H/3M",
    image: "/medan/paket-tour/paket-wisata-danau-toba-4-day.webp",
    destinations: ["Parapat", "Samosir", "Simanindo", "Tongging"],
    highlights: ["3 Hotel", "Ferry 2x", "Makan 10x", "Private Guide"],
  },
];

export const topTourPackages = tourPackages.slice(0, 3);

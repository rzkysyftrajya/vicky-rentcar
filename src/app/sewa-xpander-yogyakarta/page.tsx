import FleetPage from "../fleet/page";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewa Mobil Xpander Yogyakarta - Rental MPV Nyaman Keliling Jogja",
  description:
    "Jasa rental mobil Mitsubishi Xpander di Yogyakarta dengan harga terbaik. MPV nyaman dan stylish untuk keliling Jogja, Candi Borobudur, dan Prambanan. Lepas kunci atau dengan sopir.",
  keywords: [
    "sewa xpander yogyakarta",
    "rental xpander jogja",
    "sewa mobil di yogyakarta",
    "rental mobil jogja",
    "sewa mobil murah yogyakarta",
    "sewa mobil keluarga jogja",
  ],
  openGraph: {
    title: "Sewa Mobil Xpander Yogyakarta - Rental MPV Nyaman Keliling Jogja",
    description:
      "Jasa rental mobil Mitsubishi Xpander di Yogyakarta dengan harga terbaik. Nyaman dan stylish untuk keliling Jogja dan sekitarnya.",
  },
};

export default function Page() {
  return <FleetPage />;
}

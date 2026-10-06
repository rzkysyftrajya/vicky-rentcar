import type { Metadata } from "next";
import { RentalMobilSemarangPage } from "@/data/semarang-page-data";

export const metadata: Metadata = {
  title: { absolute: "Rental Mobil Semarang dengan Sopir | PT VRN" },
  description:
    "Sewa mobil Semarang dengan sopir untuk perjalanan ke Lawang Sewu, Simpang Lima, dan Bandara Ahmad Yani. Tanyakan ketersediaan unit via WhatsApp; lepas kunci tersedia pada unit tertentu.",
  keywords: [
    "rental mobil Semarang dengan sopir",
    "sewa mobil Semarang driver",
    "antar jemput Bandara Ahmad Yani",
    "sewa mobil Lawang Sewu",
    "sewa mobil Simpang Lima",
    "rental mobil Hiace dengan sopir",
  ],
  openGraph: {
    title: "Rental Mobil Semarang dengan Sopir | PT VRN",
    description:
      "Sewa mobil Semarang dengan sopir untuk perjalanan ke Lawang Sewu, Simpang Lima, dan Bandara Ahmad Yani. Tanyakan ketersediaan unit via WhatsApp.",
    type: "website",
    url: "https://www.vickyrentcarnusantara.com/rental-mobil-semarang",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Semarang dengan Sopir | PT VRN",
    description:
      "Sewa mobil Semarang dengan sopir untuk perjalanan ke Lawang Sewu, Simpang Lima, dan Bandara Ahmad Yani.",
  },
};

export default function RentalMobilSemarangRoute() {
  return <RentalMobilSemarangPage />;
}
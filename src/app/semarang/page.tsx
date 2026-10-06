import type { Metadata } from "next";
import HomePage from "./home-client";

export const metadata: Metadata = {
  title: "Rental Mobil Semarang & Antar Jemput Bandara Ahmad Yani",
  description:
    "Cari rental mobil di Semarang untuk perjalanan harian, wisata, atau antar jemput Bandara Ahmad Yani. Lihat pilihan armada dan tanyakan ketersediaan via WhatsApp.",
  alternates: { canonical: "/semarang" },
  openGraph: {
    title: "Rental Mobil Semarang | PT.VRN Semarang",
    description:
      "Pilihan armada untuk kebutuhan perjalanan di Semarang, termasuk antar jemput Bandara Ahmad Yani.",
    url: "/semarang",
    images: ["/semarang/hero-section.webp"],
  },
};

export default function SemarangHomePage() {
  return <HomePage />;
}

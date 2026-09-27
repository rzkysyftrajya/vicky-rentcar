import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AirportSection from "@/components/medan/AirportSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Mobil Bandara Medan | Antar Jemput Kualanamu 24/7",
  description:
    "Layanan rental mobil bandara Medan untuk pickup dan drop-off dari Kualanamu, dengan jadwal sesuai penerbangan dan kebutuhan bagasi.",
  keywords:
    "rental mobil bandara medan, sewa mobil bandara kualanamu, antar jemput bandara medan, transportasi bandara kualanamu",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/airport",
  },
  openGraph: {
    title: "Rental Mobil Bandara Medan | VRN Rent Car",
    description:
      "Antar jemput Kualanamu tanpa bingung jadwal atau titik penjemputan.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/airport",
    locale: "id_ID",
  },
};

export default function AirportPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <AirportSection />
      <FloatingWhatsApp />
    </main>
  );
}

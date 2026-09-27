import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FleetSection from "@/components/medan/FleetSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armada Rental Mobil Medan | Pilihan Mobil Avanza, Innova, Hiace & Fortuner",
  description:
    "Lihat armada rental mobil Medan dari Avanza, Innova, Xpander, Fortuner, Hiace, hingga kendaraan keluarga dan bisnis. Pilih sesuai kapasitas dan kebutuhan perjalanan.",
  keywords:
    "armada rental mobil medan, mobil rental medan, sewa mobil avanza medan, rental innova medan, hiace medan, fortuner medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/fleet",
  },
  openGraph: {
    title: "Armada Rental Mobil Medan | VRN Rent Car",
    description:
      "Pilihan mobil rental Medan mulai dari keluarga, bisnis, hingga rombongan besar.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/fleet",
    locale: "id_ID",
  },
};

export default function FleetPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <FleetSection />
      <FloatingWhatsApp />
    </main>
  );
}

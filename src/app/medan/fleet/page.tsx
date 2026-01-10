import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import FleetSection from "@/components/medan/FleetSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armada Mobil VRN Rent Car Medan | 50+ Kendaraan Terawat",
  description:
    "VRN Rent Car Medan memiliki 50+ armada mobil terawat: Avanza, Xenia, Innova, Xpander, Fortuner, Alphard. Sewa mobil dengan sopir profesional.",
  keywords:
    "armada mobil medan, rental mobil avanza medan, sewa innova medan, vrn rent car fleet, armada terawat medan, rental mobil mewah medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/fleet",
  },
  openGraph: {
    title: "Armada Mobil VRN Rent Car Medan | Fleet Kendaraan",
    description:
      "VRN Rent Car Medan - Armada lengkap 50+ kendaraan terawat dengan berbagai pilihan dari ekonomi hingga luxury.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/fleet",
    locale: "id_ID",
  },
};

export default function FleetPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <FleetSection />
      <FloatingWhatsApp />
    </main>
  );
}

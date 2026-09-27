import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StatsSection from "@/components/medan/StatsSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import StatsPageClient from "@/components/medan/StatsPageClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Statistik & Informasi VRN Rent Car Medan | Data & Layanan",
  description:
    "Lihat informasi layanan mobil rental di Medan, termasuk jenis kendaraan, area layanan, dan kebutuhan perjalanan yang sering dipesan.",
  keywords:
    "statistik vrn rent car medan, informasi layanan rental mobil medan, jenis mobil medan, area layanan rental mobil medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/stats",
  },
  openGraph: {
    title: "Statistik & Informasi VRN Rent Car Medan | Data & Layanan",
    description:
      "VRN Rent Car Medan - Informasi layanan rental mobil di Medan untuk perjalanan keluarga, bisnis, dan wisata.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/stats",
    locale: "id_ID",
  },
};

export default function StatsPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <StatsPageClient />
      <StatsSection />
      <FloatingWhatsApp />
    </main>
  );
}

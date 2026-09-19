import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import StatsSection from "@/components/medan/StatsSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import StatsPageClient from "@/components/medan/StatsPageClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Statistik & Pencapaian VRN Rent Car Medan | Data & Fakta",
  description:
    "Lihat statistik dan pencapaian VRN Rent Car Medan: 500+ pelanggan, 50+ armada, 24/7 layanan, rating 4.9. Data real tentang performa perusahaan rental mobil.",
  keywords:
    "statistik vrn rent car medan, data perusahaan rental mobil, pencapaian vrn rent car, rating pelanggan, jumlah armada",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/stats",
  },
  openGraph: {
    title: "Statistik & Pencapaian VRN Rent Car Medan | Data & Fakta",
    description:
      "VRN Rent Car Medan - Statistik lengkap tentang performa dan pencapaian perusahaan rental mobil terpercaya.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/stats",
    locale: "id_ID",
  },
};

export default function StatsPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <StatsPageClient />
      <StatsSection />
      <FloatingWhatsApp />
    </main>
  );
}

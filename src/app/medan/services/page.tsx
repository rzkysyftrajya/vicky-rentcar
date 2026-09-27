import type { Metadata } from "next";
import ServicesSection from "@/components/medan/ServicesSection";

export const metadata: Metadata = {
  title:
    "Layanan Rental Mobil Medan | Antar Jemput Bandara, Keluarga & Perjalanan Bisnis",
  description:
    "Layanan rental mobil Medan untuk bandara, perjalanan keluarga, dinas, dan kebutuhan perjalanan dalam kota maupun luar kota.",
  keywords:
    "layanan rental mobil medan, jasa sewa mobil medan, antar jemput bandara medan, rental mobil keluarga medan, travel bisnis medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/services",
  },
  openGraph: {
    title: "Layanan Rental Mobil Medan | VRN Rent Car",
    description:
      "Bandara, perjalanan keluarga, dinas, dan kebutuhan mobilitas harian di Medan.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/services",
    locale: "id_ID",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex-grow text-[var(--medan-text)]">
      <ServicesSection />
    </main>
  );
}

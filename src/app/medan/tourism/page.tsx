import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DestinationsSection from "@/components/medan/DestinationsSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Mobil Wisata Medan | Tour ke Danau Toba, Berastagi & Sumut",
  description:
    "Rental mobil untuk wisata Medan dan Sumatera Utara. Pergi ke Danau Toba, Berastagi, Bukit Lawang, dan destinasi lain dengan jadwal yang lebih fleksibel.",
  keywords:
    "rental mobil untuk wisata medan, sewa mobil wisata medan, wisata danau toba dari medan, tour berastagi medan, mobil liburan medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/tourism",
  },
  openGraph: {
    title: "Rental Mobil Wisata Medan | VRN Rent Car",
    description:
      "Rencanakan perjalanan wisata Medan dengan mobil yang sesuai kebutuhan keluarga atau rombongan.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/tourism",
    locale: "id_ID",
  },
};

export default function TourismPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <DestinationsSection />
      <FloatingWhatsApp />
    </main>
  );
}

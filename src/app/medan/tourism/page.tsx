import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import DestinationsSection from "@/components/medan/DestinationsSection";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Destinasi Wisata Medan & Sumatera Utara | Tour Guide - VRN Rent Car",
  description:
    "Jelajahi destinasi wisata terbaik Medan dan Sumatera Utara dengan VRN Rent Car. Tour ke Danau Toba, Berastagi, Istana Maimun, dan destinasi lainnya.",
  keywords:
    "destinasi wisata medan, tour danau toba, wisata berastagi, istana maimun medan, tour guide medan, objek wisata sumatera utara",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/tourism",
  },
  openGraph: {
    title: "Destinasi Wisata Medan & Sumatera Utara | VRN Rent Car",
    description:
      "VRN Rent Car Medan - Tour guide dan transportasi untuk jelajahi destinasi wisata terbaik Sumatera Utara.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/tourism",
    locale: "id_ID",
  },
};

export default function TourismPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <DestinationsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
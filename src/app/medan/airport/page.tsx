import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import AirportSection from "@/components/medan/AirportSection";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antar Jemput Bandara Kualanamu Medan | Layanan 24/7 - VRN Rent Car",
  description:
    "VRN Rent Car Medan menyediakan layanan antar jemput Bandara Kualanamu 24/7. Sopir profesional, kendaraan terawat, harga transparan.",
  keywords:
    "antar jemput banda kualanamu, airport pickup medan, jasa antar jemput banda, transportation airport medan, vrn rent car airport",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/airport",
  },
  openGraph: {
    title: "Antar Jemput Bandara Kualanamu Medan | VRN Rent Car",
    description:
      "VRN Rent Car Medan - Layanan antar jemput bandara terpercaya dengan sopir profesional dan kendaraan terawat.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/airport",
    locale: "id_ID",
  },
};

export default function AirportPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <AirportSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
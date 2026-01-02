import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import VideoSection from "@/components/medan/VideoSection";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Pengenalan VRN Rent Car Medan | Profil Perusahaan & Armada",
  description:
    "Tonton video profil VRN Rent Car Medan. Video company profile, tour armada mobil, dan testimoni pelanggan. Kenali lebih dekat perusahaan rental mobil terpercaya.",
  keywords:
    "video vrn rent car medan, company profile video, tour armada mobil, testimoni pelanggan video, profil perusahaan rental mobil",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/video",
  },
  openGraph: {
    title: "Video Pengenalan VRN Rent Car Medan | Company Profile",
    description:
      "VRN Rent Car Medan - Video company profile dan tour armada mobil terpercaya di Medan.",
    type: "video.other",
    url: "https://vrnrentcarmedan.com/medan/video",
    locale: "id_ID",
  },
};

export default function VideoPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />
      <VideoSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
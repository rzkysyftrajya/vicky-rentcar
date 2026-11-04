import type { Metadata } from "next";
import BatamHome from "./BatamHome";

const title = "Rental Mobil Batam | Sopir & Lepas Kunci";
const description =
  "Sewa mobil Batam dengan sopir atau lepas kunci untuk keluarga, bisnis, dan wisata. Tersedia antar jemput Bandara Hang Nadim. Tanya ketersediaan via WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/batam/",
  },
  openGraph: {
    title,
    description,
    url: "https://www.vickyrentcarnusantara.com/batam/",
    type: "website",
    siteName: "VRN Rent Car Batam",
    images: [
      {
        url: "https://www.vickyrentcarnusantara.com/batam/armada/INNOVA-ZENIX.webp",
        width: 1200,
        height: 630,
        alt: "Sewa Mobil Batam - Innova Zenix Plus Driver VRN",
      },
    ],
  },
};

export default function Page() {
  return <BatamHome />;
}

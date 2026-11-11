import type { Metadata } from "next";
import BatamHome from "./BatamHome";

const title = "Rental Mobil Batam | Innova, Zenix, Hiace & Alphard";
const description =
  "Rental mobil Batam untuk wisatawan, perjalanan bisnis, keluarga, dan rombongan. Pilihan Innova, Zenix, Alphard, dan Hiace; tersedia dengan sopir atau lepas kunci. Cek ketersediaan via WhatsApp.";

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

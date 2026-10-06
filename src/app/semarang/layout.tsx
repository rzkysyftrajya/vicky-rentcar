import type { Metadata } from "next";
import { Footer } from "@/components/semarang-site/layout/footer";
import { Header } from "@/components/semarang-site/layout/header";
import { LightboxProvider } from "@/components/semarang-site/lightbox-provider";
import { WhatsAppFAB } from "@/components/semarang-site/whatsapp-fab";
import { Toaster } from "@/components/semarang-site/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Rental Mobil Semarang",
    template: "%s | PT.VRN Semarang",
  },
  description:
    "Sewa mobil di Semarang untuk kebutuhan harian, wisata, bisnis, dan antar jemput Bandara Ahmad Yani. Pilih mobil dengan sopir atau lepas kunci.",
  alternates: { canonical: "/semarang" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT.VRN Semarang",
    images: [
      {
        url: "/semarang/hero-section.webp",
        width: 1640,
        height: 944,
        alt: "Armada PT.VRN Semarang",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CarRental",
  name: "PT.VRN Semarang",
  url: "https://www.vickyrentcarnusantara.com/semarang",
  image: "https://www.vickyrentcarnusantara.com/semarang/hero-section.webp",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Tandang, Kecamatan Tembalang",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  areaServed: { "@type": "City", name: "Semarang" },
  serviceType: [
    "Rental mobil harian",
    "Sewa mobil dengan sopir",
    "Sewa mobil lepas kunci",
    "Antar jemput Bandara Ahmad Yani",
  ],
};

export default function SemarangLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LightboxProvider>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <Toaster />
      </LightboxProvider>
    </>
  );
}
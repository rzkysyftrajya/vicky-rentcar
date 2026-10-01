import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/batam/Navbar";
import FloatingWhatsApp from "@/components/batam/FloatingWhatsApp";
import BatamConversionTracking from "@/components/batam/BatamConversionTracking";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Rental Mobil Batam: Alphard, Innova Zenix, Fortuner & Hiace | VRN",
  description:
    "Sewa mobil Batam dengan sopir berpengalaman. Alphard, Zenix, Fortuner, Innova, Hiace. Antar-jemput Bandara Hang Nadim & Pelabuhan Harbour Bay/Batam Centre. Cek promo via WA.",
  keywords: [
    "rental mobil batam",
    "sewa mobil batam",
    "rental mobil alphard batam",
    "sewa mobil alphard batam",
    "sewa mobil premium batam",
    "rental mobil innova batam",
    "sewa mobil innova batam",
    "rental mobil zenix batam",
    "sewa mobil zenix batam",
    "sewa mobil fortuner batam",
    "rental mobil fortuner batam",
    "sewa mobil luxury batam",
    "rental mobil luxury batam",
    "rental mobil hiace batam",
    "sewa mobil hiace batam",
    "paket tour batam",
    "antar jemput bandara hang nadim",
    "sewa mobil dengan driver batam",
  ],
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/batam",
  },
  openGraph: {
    title: "Rental Mobil Batam: Alphard, Innova Zenix, Fortuner & Hiace | VRN",
    description:
      "Sewa mobil Batam dengan sopir berpengalaman. Alphard, Zenix, Fortuner, Innova, Hiace. Antar-jemput Bandara Hang Nadim & Pelabuhan. Cek promo via WA.",
    url: "https://www.vickyrentcarnusantara.com/batam",
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
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Batam: Alphard, Innova Zenix, Fortuner & Hiace | VRN",
    description:
      "Sewa mobil Batam dengan sopir berpengalaman. Alphard, Zenix, Fortuner, Innova, Hiace. Antar-jemput Bandara & Pelabuhan.",
  },
};

const batamLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VRN Rent Car Batam – PT. Vicky Rent Car Nusantara",
  url: "https://www.vickyrentcarnusantara.com/batam",
  logo: "https://www.vickyrentcarnusantara.com/logoVRN.png",
  image: "https://www.vickyrentcarnusantara.com/batam/armada/ALPHARD-GEN-4.webp",
  description:
    "Rental dan sewa mobil Batam terpercaya dengan armada lengkap: Alphard, Innova Zenix, Fortuner, Hiace, dan Innova Reborn. Layanan antar-jemput Bandara Hang Nadim (BTH) dan Pelabuhan Ferry Harbour Bay/Batam Centre. Tersedia sopir berpengalaman 24 jam.",
  telephone: "+6282363389893",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam",
    addressRegion: "Kepulauan Riau",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.1301,
    longitude: 104.0529,
  },
  hasMap: "https://maps.app.goo.gl/bXqcSpsHzM4TH6iHA",
  areaServed: [
    { "@type": "City", name: "Batam" },
    { "@type": "Place", name: "Bandara Hang Nadim" },
    { "@type": "Place", name: "Harbour Bay" },
    { "@type": "Place", name: "Batam Centre" },
    { "@type": "Place", name: "Nagoya" },
    { "@type": "Place", name: "Nongsa" },
    { "@type": "Place", name: "Barelang" },
  ],
  serviceType: [
    "Rental Mobil Batam",
    "Sewa Mobil Batam",
    "Antar Jemput Bandara Hang Nadim",
    "Transfer Pelabuhan Ferry Batam",
    "Sewa Mobil Alphard Batam",
    "Sewa Mobil Zenix Batam",
    "Sewa Mobil Fortuner Batam",
    "Sewa Mobil Hiace Batam",
    "Paket Tour Batam",
    "Corporate Chauffeur Batam",
  ],
  sameAs: [
    "https://www.vickyrentcarnusantara.com",
  ],
};

const batamFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bagaimana cara sewa mobil di Batam dengan sopir dari VRN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pemesanan rental mobil Batam sangat mudah: hubungi customer service VRN via WhatsApp, pilih unit (Alphard, Zenix, Innova, Fortuner, atau Hiace), tentukan tanggal sewa, dan lokasi penjemputan (Bandara Hang Nadim, Pelabuhan Harbour Bay/Batam Centre, atau hotel Anda). Kami kunci jadwal dengan DP ringan.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah layanan antar-jemput Bandara Hang Nadim tersedia 24 jam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, layanan antar-jemput Bandara Hang Nadim (BTH) VRN Batam aktif 24 jam sehari, 7 hari seminggu. Driver standby di gate kedatangan (Arrival Hall) dengan nameboard nama Anda sebelum pesawat landing. Jika terjadi flight delay, driver tetap menunggu tanpa biaya penalti.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan paket sewa mobil lepas kunci dan paket dengan sopir di Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paket lepas kunci: Anda menyewa unit saja tanpa driver (khusus untuk WNI dengan SIM valid). Paket dengan sopir (plus driver): termasuk jasa sopir profesional, dan tersedia dalam dua opsi tarif—paket Non-All-In (BBM & parkir dibayar terpisah) atau paket All-In (BBM harian dan parkir sudah termasuk dalam harga).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah VRN Batam melayani sewa Hiace untuk rombongan dan pelabuhan ferry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya! VRN Batam menyediakan sewa Hiace Premio 14-seat khusus untuk rombongan wisata, transfer Pelabuhan Ferry Harbour Bay dan Batam Centre, serta dinas kantor. Driver hafal rute pelabuhan dan waktu keberangkatan ferry ke Singapura/Malaysia.",
      },
    },
    {
      "@type": "Question",
      name: "Mobil apa saja yang tersedia untuk sewa mobil luxury dan premium di Batam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk kategori sewa mobil luxury dan premium Batam, VRN menyediakan: Toyota Alphard Gen 4 (VIP/Captain Seat), Toyota Innova Zenix Hybrid (executive modern), Toyota Fortuner GR Sport (SUV prestige), dan Toyota Land Cruiser. Semua unit terawat, kabin bersih, dan dilayani sopir berpenampilan rapi.",
      },
    },
  ],
};

export default function BatamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data: LocalBusiness */}
      <Script
        id="batam-local-business-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(batamLocalBusiness) }}
      />

      {/* JSON-LD Structured Data: FAQPage */}
      <Script
        id="batam-faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(batamFAQSchema) }}
      />

      {/* Google Ads dasar Batam */}
      <Script
        id="google-tag-batam"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17357105664"
        strategy="afterInteractive"
      />

      <Script id="google-tag-config-batam" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          window.gtag = window.gtag || gtag;

          gtag("js", new Date());
          gtag("config", "AW-17357105664");
        `}
      </Script>

      {/* Konversi seluruh tombol WhatsApp Batam */}
      <BatamConversionTracking />

      <AppContextProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className={`${inter.variable} batam-route-layout`}>
            <style>{`
              body:has(.batam-route-layout) #global-route-chrome-footer,
              body:has(.batam-route-layout) #global-route-contact-dock {
                display: none !important;
              }
            `}</style>
            <Navbar />

            <main>{children}</main>

            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}

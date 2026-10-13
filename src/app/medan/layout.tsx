import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../globals.css";
import "@/components/medan/medan.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/medan/Header";
import Footer from "@/components/medan/Footer";
import { MedanWhatsAppButton } from "@/components/medan/MedanWhatsApp";
import { AppContextProvider } from "../context/AppContext";
import MedanScripts from "@/components/medan/MedanScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Get the canonical hostname for Medan domain.
 */
function getMedanCanonicalHost(hostname: string): string {
  if (hostname.startsWith("www.")) {
    return hostname.replace("www.", "");
  }

  return hostname;
}

/**
 * Get the base URL for the current request.
 */
function getBaseUrl(hostname: string): string {
  const canonicalHost = getMedanCanonicalHost(hostname);
  return `https://${canonicalHost}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hostname?: string }>;
}): Promise<Metadata> {
  const { hostname: requestedHostname } = await params;
  const hostname = requestedHostname || "pt.vrnrentcarmedan.com";
  const baseUrl = getBaseUrl(hostname);

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default:
        "VRN Rent Car Medan | Rental Mobil di Medan dan Sumatera Utara",
      template: "%s | VRN Rent Car Medan",
    },

    description:
      "VRN Rent Car Medan menyediakan layanan rental mobil di Medan untuk kebutuhan harian, perjalanan keluarga, bisnis, dan antar jemput bandara.",

    keywords: [
      "rental mobil medan",
      "sewa mobil medan",
      "vrn rent car medan",
      "rental mobil vip medan",
      "sewa alphard medan",
      "rental mercedes medan",
      "rental mobil luxury medan",
      "antar jemput bandara kualanamu",
      "sewa mobil harian medan",
      "rental mobil bulanan medan",
    ],

    verification: {
      google: "0e7tdpsZeFHt20H7FDiaoWypuVlVHKnJ7PGYqalg-6c",
    },

    alternates: {
      canonical: `${baseUrl}/medan`,
    },

    openGraph: {
      title: "VRN Rent Car Medan | Rental Mobil di Medan dan Sumatera Utara",
      description:
        "VRN Rent Car Medan membantu kebutuhan transportasi harian, bandara, keluarga, dan perjalanan antar kota di Medan.",
      type: "website",
      url: `${baseUrl}/medan`,
      locale: "id_ID",
      siteName: "VRN Rent Car Medan",
      images: [
        {
          url: `${baseUrl}/medan/hero-section.webp`,
          width: 1200,
          height: 630,
          alt: "VRN Rent Car Medan",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "VRN Rent Car Medan | Rental Mobil di Medan",
      description:
        "Layanan rental mobil di Medan untuk kebutuhan harian, keluarga, bisnis, dan perjalanan antar kota.",
      images: [`${baseUrl}/medan/hero-section.webp`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VRN Rent Car Medan",
  url: "https://pt.vrnrentcarmedan.com/medan",
  logo: "https://pt.vrnrentcarmedan.com/logoVRN.png",
  image: "https://pt.vrnrentcarmedan.com/medan/hero-section.webp",
  description:
    "Layanan rental mobil dan antar jemput di Medan untuk kebutuhan harian, keluarga, bisnis, dan perjalanan antar kota.",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sempurna Gg. Mawar No.12 dusun II",
    addressLocality: "Medan Tembung",
    addressRegion: "Sumatera Utara",
    postalCode: "20371",
    addressCountry: "ID",
  },
  priceRange: "$$",
  hasMap: "https://maps.app.goo.gl/bXqcSpsHzM4TH6iHA",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  acceptsReservations: "True",
  serviceType: [
    "Car Rental",
    "Airport Transfer",
    "Wedding Car Service",
  ],
  areaServed: {
    "@type": "City",
    name: "Medan",
  },
};

interface MedanLayoutProps {
  children: React.ReactNode;
}

export default function MedanLayout({
  children,
}: MedanLayoutProps) {
  return (
    <AppContextProvider>
      {/* Google Ads Global Site Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11495200677"
        strategy="afterInteractive"
      />

      {/* Initialize Google Ads */}
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', 'AW-11495200677');
        `}
      </Script>

      {/* Structured Data */}
      <Script
        id="medan-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={`medan-theme ${inter.variable} flex min-h-screen w-full flex-col`}>
          {/* Medan Header */}
          <Header />

          {/* Main content */}
          <div className="flex-grow">{children}</div>

          {/* Medan Footer */}
          <Footer />

          {/* Floating WhatsApp */}
          <MedanWhatsAppButton
            label="Chat via WhatsApp"
            className="medan-floating-whatsapp [&>span]:sr-only"
          />
        </div>
      </ThemeProvider>

      {/* Medan-specific scripts */}
      <MedanScripts />
    </AppContextProvider>
  );
}

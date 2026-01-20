import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/medan/Header";
import Footer from "@/components/medan/Footer";
import { AppContextProvider } from "../context/AppContext";
import MedanScripts from "@/components/medan/MedanScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Get the canonical hostname for Medan domain
 * This ensures proper SEO canonical URLs regardless of how users access the site
 */
function getMedanCanonicalHost(hostname: string): string {
  // Normalize hostname: remove www. prefix for consistency
  if (hostname.startsWith("www.")) {
    return hostname.replace("www.", "");
  }
  return hostname;
}

/**
 * Get the base URL for the current request
 */
function getBaseUrl(hostname: string): string {
  const canonicalHost = getMedanCanonicalHost(hostname);
  return `https://${canonicalHost}`;
}

interface MetadataProps {
  children: React.ReactNode;
  params: {
    hostname?: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { hostname?: string };
}): Promise<Metadata> {
  // Get hostname from params or use default
  const hostname = params?.hostname || "pt.vrnrentcarmedan.com";
  const baseUrl = getBaseUrl(hostname);

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        "VRN Rent Car Medan - Rental Mobil VIP & Luxury | Antar Jemput Bandara Kualanamu",
      template: "%s | VRN Rent Car Medan",
    },
    description:
      "VRN Rent Car Medan - Rental mobil terpercaya dengan layanan VIP & luxury. Alphard, Mercedes, Fortuner. Antar jemput Bandara Kualanamu, sopir profesional, armada terawat. Bagian dari Vicky Rent Car Nusantara.",
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
      canonical: baseUrl,
    },
    openGraph: {
      title:
        "VRN Rent Car Medan - Rental Mobil VIP & Luxury | Antar Jemput Bandara",
      description:
        "VRN Rent Car Medan - Sewa mobil VIP & luxury untuk bisnis, wedding, dan perjalanan eksklusif. Layanan premium dengan armada Alphard, Mercedes, dan kendaraan mewah lainnya.",
      type: "website",
      url: baseUrl,
      locale: "id_ID",
      siteName: "VRN Rent Car Medan",
      images: [
        {
          url: `${baseUrl}/medan/hero-section.webp`,
          width: 1200,
          height: 630,
          alt: "VRN Rent Car Medan - Rental Mobil VIP & Luxury",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "VRN Rent Car Medan - Rental Mobil VIP & Luxury",
      description:
        "VRN Rent Car Medan - Sewa mobil VIP & luxury terpercaya di Medan dengan layanan premium.",
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
  url: "https://pt.vrnrentcarmedan.com",
  logo: "https://pt.vrnrentcarmedan.com/logoVRN.png",
  image: "https://pt.vrnrentcarmedan.com/medan/hero-section.webp",
  description:
    "Layanan rental mobil VIP & luxury di Medan. Menyediakan Alphard, Mercedes, Fortuner untuk wedding, korporat, dan perjalanan istimewa.",
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
    "Luxury Car Rental",
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

export default function MedanLayout({ children }: MedanLayoutProps) {
  return (
    <AppContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col w-full">
          {/* Medan-specific Header (replaces global Navbar) */}
          <Header />

          {/* Main content */}
          <main className="flex-grow">{children}</main>

          {/* Medan-specific Footer (replaces global Footer) */}
          <Footer />
        </div>
      </ThemeProvider>
      {/* Medan-specific scripts for Google Ads & Analytics */}
      <MedanScripts />
    </AppContextProvider>
  );
}

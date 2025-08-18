import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandWhatsapp, IconMapPin, IconPhone } from "@tabler/icons-react";
import { AppContextProvider } from "./context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vickyrentcarnusantara.com"),
  title: {
    default:
      "Rental Mobil & Sewa Mobil Medan, Jakarta, Bali | PT.VICKY RENTCAR NUSANTARA",
    template: "%s | PT.VICKY RENTCAR NUSANTARA",
  },
  description:
    "Rental & sewa mobil terpercaya di seluruh Nusantara (Medan, Jakarta, Bali, dll). Layanan lepas kunci atau dengan sopir 24 jam. Armada lengkap untuk wisata, bisnis, dan antar jemput bandara di seluruh Indonesia.",
  keywords: [
    "sewa mobil nusantara",
    "rental mobil indonesia",
    "sewa mobil medan",
    "rental mobil jakarta",
    "sewa mobil bali",
    "sewa mobil murah",
    "rental mobil lepas kunci",
    "sewa mobil dengan sopir",
    "sewa mobil di indonesia",
  ],
  openGraph: {
    title: "Rental Mobil Profesional se-Nusantara | PT.VICKY RENTCAR NUSANTARA",
    description:
      "Layanan rental mobil profesional di seluruh Nusantara untuk kebutuhan wisata, bisnis, atau acara spesial. Armada terawat, harga kompetitif, dan pelayanan 24 jam.",
    url: "https://vickyrentcarnusantara.com",
    siteName: "PT.VICKY RENTCAR NUSANTARA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Layanan Rental Mobil Profesional di seluruh Nusantara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Profesional se-Nusantara | PT.VICKY RENTCAR NUSANTARA",
    description:
      "Sewa mobil mudah dan aman di seluruh Indonesia. Pilihan lengkap mulai dari Avanza, Innova, hingga Alphard untuk segala kebutuhan Anda.",
    images: ["/twitter-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const waText =
    "Halo, saya tertarik untuk menyewa mobil. Bisa berikan saya informasi lebih lanjut?";
  const encodedWaText = encodeURIComponent(waText);

  const dockItems = [
    {
      title: "WhatsApp",
      href: `https://wa.me/6282363389893?text=${encodedWaText}`,
      icon: (
        <IconBrandWhatsapp
          className="h-full w-full text-neutral-500 dark:text-neutral-400"
          aria-label="WhatsApp"
        />
      ),
    },
    {
      title: "Peta Lokasi",
      href: "https://maps.app.goo.gl/5ojJEaQqXfN691pP7",
      icon: (
        <IconMapPin
          className="h-full w-full text-neutral-500 dark:text-neutral-400"
          aria-label="Lokasi di Google Maps"
        />
      ),
    },
    {
      title: "Telepon",
      href: "tel:082363389893",
      icon: (
        <IconPhone
          className="h-full w-full text-neutral-500 dark:text-neutral-400"
          aria-label="Telepon"
        />
      ),
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "PT.VICKY RENTCAR NUSANTARA",
    image: "https://vickyrentcarnusantara.com/logo.png",
    "@id": "https://vickyrentcarnusantara.com",
    url: "https://vickyrentcarnusantara.com",
    telephone: "+6282363389893",
    priceRange: "IDR",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jalan Sempurna Dusun II Mawar, Desa Sambirejo Timur, Kec, Percut Sei Tuan",
      addressLocality: "Deli Serdang",
      addressRegion: "Sumatera Utara",
      postalCode: "20371",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.5891399,
      longitude: 98.7619553,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
    openingHoursSpecification: {
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
    description:
      "PT.VICKY RENTCAR NUSANTARA adalah penyedia jasa sewa dan rental mobil terpercaya di seluruh Nusantara. Kami menyediakan berbagai jenis mobil untuk kebutuhan wisata, bisnis, acara pernikahan, hingga antar jemput bandara dengan layanan 24 jam, lepas kunci, atau dengan sopir profesional.",
  };

  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          inter.variable
        )}
      >
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative w-full">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <div className="fixed bottom-4 left-4 z-50">
                <FloatingDock items={dockItems} />
              </div>
            </div>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}

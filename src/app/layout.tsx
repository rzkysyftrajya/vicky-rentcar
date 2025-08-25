// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
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
import Script from "next/script";

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
    "rental mobil bali",
    "rental mobil murah",
    "sewa mobil matic",
    "sewa mobil lepas kunci",
    "sewa mobil dengan sopir",
    "antar jemput bandara",
  ],
  verification: {
    google: "0e7tdpsZeFHt20H7FDiaoWypuVlVHKnJ7PGYqalg-6c",
  },
  // Perbaikan SEO: Tambahkan Schema Markup untuk Bisnis Lokal
  openGraph: {
    title: "Sewa Mobil Terpercaya di Medan, Jakarta, & Bali",
    description:
      "Layanan sewa mobil lepas kunci dan dengan sopir 24 jam. Pilihan armada lengkap untuk perjalanan bisnis dan wisata.",
    type: "website",
    url: "https://vickyrentcarnusantara.com",
    siteName: "PT. VICKY RENTCAR NUSANTARA",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT. VICKY RENTCAR NUSANTARA",
  url: "https://vickyrentcarnusantara.com",
  logo: "https://vickyrentcarnusantara.com/logo.png",
  image: "https://vickyrentcarnusantara.com/armada/innova-reborn.webp",
  description:
    "Pusat sewa dan rental mobil terpercaya di Indonesia. Melayani kebutuhan sewa mobil di Medan, Jakarta, dan Bali.",
  telephone: "+6282363389893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Melati Raya No.5B",
    addressLocality: "Medan",
    addressRegion: "North Sumatra",
    postalCode: "20122",
    addressCountry: "ID",
  },
  priceRange: "$$",
  hasMap: "https://maps.app.goo.gl/xxxxxx", // Ganti dengan link Google Maps bisnis Anda
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
    "Chauffeur Service",
    "Self-drive Car Rental",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Medan",
    },
    {
      "@type": "City",
      name: "Jakarta",
    },
    {
      "@type": "City",
      name: "Bali",
    },
  ],
};

const dockItems = [
  {
    icon: <IconBrandWhatsapp className="w-5 h-5 text-green-500" />,
    href: "https://wa.me/6282363389893",
    title: "WhatsApp",
  },
  {
    icon: <IconPhone className="w-5 h-5 text-primary" />,
    href: "tel:+6282363389893",
    title: "Telepon",
  },
  {
    icon: <IconMapPin className="w-5 h-5 text-red-500" />,
    href: "https://maps.app.goo.gl/eSAPvoBukHM2iYCb7",
    title: "Lokasi",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
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
            <div className="flex flex-col w-full">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <div className="fixed bottom-4 left-4 z-50">
                <FloatingDock items={dockItems} />
              </div>
            </div>
          </ThemeProvider>
        </AppContextProvider>

        {/* Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(reg) {
                      console.log('Service Worker registered with scope:', reg.scope);
                    })
                    .catch(function(err) {
                      console.log('Service Worker registration failed:', err);
                    });
                });
              }
            `,
          }}
        />

        {/* Kode Google Analytics dan Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            gtag('config', 'AW-17496627513');
          `}
        </Script>

        {/* Schema Markup (JSON-LD) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Analytics />
      </body>
    </html>
  );
}

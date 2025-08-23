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
    "sewa mobil surabaya",
    "sewa mobil bandung",
    "rental mobil murah",
    "sewa mobil matic",
    "sewa mobil lepas kunci",
    "sewa mobil dengan sopir",
    "antar jemput bandara",
    "rental innova",
    "rental avanza",
    "rental fortuner",
    "rental alphard",
    "vicky rentcar nusantara",
    "vrn",
    "sewa mobil lepas kunci medan",
    "sewa mobil lepas kunci jakarta",
    "sewa mobil lepas kunci bali",
    "sewa mobil lepas kunci surabaya",
    "sewa mobil lepas kunci bandung",
    "sewa mobil lepas kunci jogja",
    "sewa mobil lepas kunci yogyakarta",
    "sewa mobil lepas kunci malang",
    "sewa mobil bandara kualanamu",
    "sewa mobil terdekat bandara kualanamu",
    "sewa mobil terdekat medan",
    "vicky rental mobil nusantara",
  ],
};

const dockItems = [
  {
    icon: <IconBrandWhatsapp className="w-5 h-5 text-green-500" />,
    href: "https://wa.me/6282363389893",
    title: "WhatsApp", // <-- DI SINI PERBAIKANNYA
  },
  {
    icon: <IconPhone className="w-5 h-5 text-primary" />,
    href: "tel:+6282363389893",
    title: "Telepon", // <-- DI SINI PERBAIKANNYA
  },
  {
    icon: <IconMapPin className="w-5 h-5 text-red-500" />,
    href: "https://maps.app.goo.gl/eSAPvoBukHM2iYCb7",
    title: "Lokasi", // <-- DI SINI PERBAIKANNYA
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
        <Analytics />
      </body>
    </html>
  );
}

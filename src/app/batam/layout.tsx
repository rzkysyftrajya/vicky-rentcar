import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/batam/Navbar";
import FloatingWhatsApp from "@/components/batam/FloatingWhatsApp";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rental Mobil Batam: Alphard, Innova, Zenix & Hiace",
  description:
    "Rental mobil Batam lepas kunci atau dengan sopir. Antar-jemput Bandara Hang Nadim dan pelabuhan Batam Centre/Harbour Bay. Cek unit via WhatsApp.",
  alternates: {
    canonical: "https://vickyrentcarnusantara.com/batam",
  },
  openGraph: {
    title: "Rental Mobil Batam: Alphard, Innova, Zenix & Hiace",
    description:
      "Sewa mobil Batam dengan armada bersih, sopir berpengalaman, dan layanan antar-jemput bandara serta pelabuhan.",
    url: "https://vickyrentcarnusantara.com/batam",
    type: "website",
  },
};

export default function BatamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17357105664"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-batam" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17357105664');
        `}
      </Script>
      <AppContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <FloatingWhatsApp />
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}
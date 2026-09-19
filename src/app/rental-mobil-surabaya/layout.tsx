import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/surabaya/Navbar";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rental Mobil Surabaya - Sewa Mobil Harian & Bulanan | VRN",
  description:
    "Sewa mobil Surabaya terpercaya. Armada terawat, driver profesional, harga transparan.",
};

export default function RentalMobilSurabayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 1. Master Google Tag Baru (AW-17510183879) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17510183879"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-surabaya" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17510183879');
        `}
      </Script>

      {/* 2. Event Snippet Fungsi tracking konversi Kontak dari Google Ads */}
      <Script id="google-ads-conversion-contact" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17510183879/ywTVCJjzp44bEMfnwJ1B',
                'event_callback': callback
              });
            } else {
              callback();
            }
            return false;
          }
          window.gtag_report_conversion = gtag_report_conversion;
        `}
      </Script>

      <AppContextProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Menerapkan class font Inter agar sinkron dengan globals.css */}
          <div className={`${inter.variable} font-sans`}>
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
}

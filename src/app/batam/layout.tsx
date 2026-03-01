import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/batam/Navbar";
import { AppContextProvider } from "../context/AppContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rental Mobil batam - Sewa Mobil Harian & Bulanan | VRN",
  description:
    "Sewa mobil batam terpercaya. Armada terawat, driver profesional, harga transparan.",
};

export default function BatamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} m-0 p-0`}>
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
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
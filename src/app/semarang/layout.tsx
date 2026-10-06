import type { Metadata } from "next";
import { Footer } from "@/components/semarang-site/layout/footer";
import { Header } from "@/components/semarang-site/layout/header";
import { LightboxProvider } from "@/components/semarang-site/lightbox-provider";
import { WhatsAppFAB } from "@/components/semarang-site/whatsapp-fab";
import { Toaster } from "@/components/semarang-site/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Rental Mobil Semarang | PT.VRN Semarang",
    template: "%s | PT.VRN Semarang",
  },
  description:
    "Rental mobil Semarang untuk perjalanan harian, wisata, bisnis, dan antar jemput Bandara Ahmad Yani. Hubungi PT.VRN Semarang untuk mengecek ketersediaan armada.",
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

export default function SemarangLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LightboxProvider>
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
      <Toaster />
    </LightboxProvider>
  );
}

"use client";
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Sewa Mobil Bali - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
//   description: 'Pusat sewa mobil di Bali dengan harga murah. Menyediakan rental mobil lepas kunci 24 jam atau dengan sopir di area Kuta, Seminyak, Ubud. Armada lengkap, Avanza, Innova, matic.',
//   keywords: ['sewa mobil bali', 'rental mobil bali', 'sewa mobil murah bali', 'rental mobil lepas kunci bali', 'sewa mobil dengan sopir bali', 'sewa mobil di bali', 'sewa mobil matic bali', 'rental innova bali', 'sewa mobil bandara gusti ngurah rai'],
//    openGraph: {
//     title: 'Sewa Mobil Bali - Rental Murah Lepas Kunci & Dengan Sopir',
//     description: 'Pusat sewa mobil di Bali dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
//   },
// }

export default function Page() {
  // This page is an entry point for Bali SEO.
  // It reuses the main fleet page component which shows all national fleets.
  // Further enhancements can be made to show Bali-specific content.
  return <FleetPage />;
}


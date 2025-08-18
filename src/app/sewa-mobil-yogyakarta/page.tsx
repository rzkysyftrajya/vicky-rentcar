
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Yogyakarta - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
  description: 'Pusat sewa mobil di Yogyakarta (Jogja) dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap untuk wisata dan bisnis.',
  keywords: ['sewa mobil yogyakarta', 'rental mobil yogyakarta', 'sewa mobil murah jogja', 'rental mobil lepas kunci yogyakarta', 'sewa mobil dengan sopir yogyakarta', 'sewa mobil di yogyakarta', 'rental mobil jogja', 'sewa xpander yogyakarta', 'sewa mobil bandara yogyakarta'],
   openGraph: {
    title: 'Sewa Mobil Yogyakarta - Rental Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil di Yogyakarta dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
  },
}

export default function Page() {
  return <FleetPage />;
}


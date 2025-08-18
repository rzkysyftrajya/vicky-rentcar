
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Innova Bali - Rental MPV Terbaik untuk Liburan Keluarga',
  description: 'Rental mobil Toyota Innova Reborn di Bali dengan harga terjangkau. Pilihan ideal untuk liburan keluarga, tersedia lepas kunci atau dengan sopir. Jelajahi Bali dengan nyaman.',
  keywords: ['sewa innova bali', 'rental innova bali', 'sewa mobil keluarga bali', 'rental mobil di bali', 'sewa mobil innova reborn bali', 'rental mobil innova zenix bali'],
   openGraph: {
    title: 'Sewa Mobil Innova Bali - Rental MPV Terbaik untuk Liburan Keluarga',
    description: 'Rental mobil Toyota Innova Reborn di Bali dengan harga terjangkau. Pilihan ideal untuk liburan keluarga, tersedia lepas kunci atau dengan sopir.',
  },
}

export default function Page() {
  return <FleetPage />;
}


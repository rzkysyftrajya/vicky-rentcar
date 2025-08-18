
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil dari Medan ke Danau Toba - Paket Wisata & Carter',
  description: 'Rental mobil dari Medan ke Danau Toba dengan harga terbaik. Tersedia paket wisata, carter mobil, atau sewa lepas kunci untuk perjalanan Anda ke Parapat dan Samosir.',
  keywords: ['sewa mobil ke danau toba', 'rental mobil medan danau toba', 'paket wisata danau toba', 'carter mobil ke parapat', 'sewa mobil dari kualanamu ke danau toba', 'rental mobil tour wisata medan'],
  openGraph: {
    title: 'Sewa Mobil dari Medan ke Danau Toba - Paket Wisata & Carter',
    description: 'Rental mobil dari Medan ke Danau Toba dengan harga terbaik. Tersedia paket wisata, carter mobil, atau sewa lepas kunci.',
  },
}


export default function Page() {
  return <FleetPage />;
}


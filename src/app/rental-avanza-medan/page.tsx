
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Avanza Medan - Harga Murah Lepas Kunci & Dengan Sopir',
  description: 'Pusat sewa mobil Toyota Avanza di Medan dengan harga murah. Menyediakan layanan rental mobil Avanza lepas kunci 24 jam atau dengan sopir. Armada terawat untuk wisata dan bisnis.',
  keywords: ['sewa avanza medan', 'rental avanza medan', 'sewa mobil murah medan', 'rental mobil lepas kunci medan', 'sewa mobil medan avanza', 'sewa mobil avanza medan lepas kunci'],
   openGraph: {
    title: 'Sewa Mobil Avanza Medan - Harga Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil Toyota Avanza di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
  },
}

export default function Page() {
  return <FleetPage />;
}


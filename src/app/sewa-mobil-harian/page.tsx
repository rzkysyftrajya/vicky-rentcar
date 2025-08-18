
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Harian - Lepas Kunci 24 Jam & Dengan Sopir se-Indonesia',
  description: 'Jasa sewa mobil harian di seluruh Indonesia (Medan, Jakarta, Bali, dll), tersedia lepas kunci 24 jam atau dengan sopir. Pilihan mobil lengkap dengan harga terbaik. Pesan online sekarang!',
  keywords: ['sewa mobil harian', 'rental mobil harian', 'sewa mobil 24 jam', 'rental mobil lepas kunci harian', 'sewa mobil harian medan', 'sewa mobil harian jakarta', 'sewa mobil harian bali'],
  openGraph: {
    title: 'Sewa Mobil Harian - Lepas Kunci 24 Jam & Dengan Sopir se-Indonesia',
    description: 'Jasa sewa mobil harian di seluruh Indonesia, tersedia lepas kunci 24 jam atau dengan sopir. Pilihan mobil lengkap.',
  },
}


export default function Page() {
  return <FleetPage />;
}


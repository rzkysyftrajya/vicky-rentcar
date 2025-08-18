
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Medan - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
  description: 'Pusat sewa mobil di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap dan terawat untuk wisata, bisnis, atau perjalanan dinas.',
  keywords: ['sewa mobil medan', 'rental mobil medan', 'sewa mobil murah medan', 'rental mobil lepas kunci medan', 'sewa mobil medan dengan supir', 'sewa mobil harian medan', 'sewa mobil bulanan medan', 'rentcar medan', 'sewa kereta medan', 'sewa mobil perjalanan dinas medan', 'sewa mobil medan 24 jam'],
   openGraph: {
    title: 'Sewa Mobil Medan - Rental Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil di Medan dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir.',
  },
}

export default function Page() {
  return <FleetPage />;
}


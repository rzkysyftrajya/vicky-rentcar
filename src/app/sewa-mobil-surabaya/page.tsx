
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Surabaya - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
  description: 'Pusat sewa mobil di Surabaya dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap, terawat untuk wisata dan bisnis di Surabaya.',
  keywords: ['sewa mobil surabaya', 'rental mobil surabaya', 'sewa mobil murah surabaya', 'rental mobil lepas kunci surabaya', 'sewa mobil dengan sopir surabaya', 'sewa mobil di surabaya', 'sewa fortuner surabaya', 'sewa mobil bandara juanda'],
   openGraph: {
    title: 'Sewa Mobil Surabaya - Rental Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil di Surabaya dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
  },
}

export default function Page() {
  return <FleetPage />;
}


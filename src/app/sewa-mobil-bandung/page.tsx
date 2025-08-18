
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Bandung - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
  description: 'Pusat sewa mobil di Bandung dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir. Armada lengkap dan terawat untuk wisata dan bisnis di Bandung.',
  keywords: ['sewa mobil bandung', 'rental mobil bandung', 'sewa mobil murah bandung', 'rental mobil lepas kunci bandung', 'sewa mobil dengan sopir bandung', 'sewa mobil di bandung', 'sewa pajero bandung', 'sewa mobil bandara husein sastranegara'],
   openGraph: {
    title: 'Sewa Mobil Bandung - Rental Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil di Bandung dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
  },
}

export default function Page() {
  return <FleetPage />;
}


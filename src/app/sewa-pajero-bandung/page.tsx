
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Pajero Bandung - Rental SUV Tangguh untuk Petualangan',
  description: 'Rental mobil Mitsubishi Pajero Sport di Bandung. SUV tangguh untuk menjelajahi Lembang, Ciwidey, dan destinasi petualangan lainnya. Tersedia dengan sopir berpengalaman.',
  keywords: ['sewa pajero bandung', 'rental pajero bandung', 'sewa suv bandung', 'rental mobil petualangan bandung', 'sewa mobil di bandung', 'rental mobil 4x4 bandung'],
   openGraph: {
    title: 'Sewa Mobil Pajero Bandung - Rental SUV Tangguh untuk Petualangan',
    description: 'Rental mobil Mitsubishi Pajero Sport di Bandung. SUV tangguh untuk menjelajahi Lembang, Ciwidey, dan destinasi petualangan lainnya.',
  },
}

export default function Page() {
  return <FleetPage />;
}


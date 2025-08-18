
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Jakarta - Rental Murah Lepas Kunci & Dengan Sopir | PT.VRN',
  description: 'Pusat sewa mobil di Jakarta harga murah. Menyediakan rental mobil lepas kunci 24 jam atau dengan sopir di Jakarta Pusat, Selatan, Utara, Timur, Barat. Armada lengkap, Avanza, Innova, Alphard.',
  keywords: ['sewa mobil jakarta', 'rental mobil jakarta', 'sewa mobil murah jakarta', 'rental mobil lepas kunci jakarta', 'sewa mobil dengan sopir jakarta', 'sewa mobil di jakarta', 'sewa mobil bandara soekarno hatta', 'rental alphard jakarta', 'sewa hiace jakarta'],
   openGraph: {
    title: 'Sewa Mobil Jakarta - Rental Murah Lepas Kunci & Dengan Sopir',
    description: 'Pusat sewa mobil di Jakarta dengan harga murah. Menyediakan layanan rental mobil lepas kunci 24 jam atau dengan sopir profesional.',
  },
}

export default function Page() {
  return <FleetPage />;
}


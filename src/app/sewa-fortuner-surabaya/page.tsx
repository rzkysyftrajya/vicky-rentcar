
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Fortuner Surabaya - Rental SUV Gagah untuk Bisnis & Wisata',
  description: 'Jasa rental mobil Toyota Fortuner di Surabaya. Pilihan SUV premium untuk perjalanan bisnis yang representatif atau wisata dengan keluarga. Layanan profesional dengan sopir.',
  keywords: ['sewa fortuner surabaya', 'rental fortuner surabaya', 'sewa suv surabaya', 'rental mobil mewah surabaya', 'sewa mobil di surabaya', 'rental mobil 4x4 surabaya'],
   openGraph: {
    title: 'Sewa Mobil Fortuner Surabaya - Rental SUV Gagah untuk Bisnis & Wisata',
    description: 'Jasa rental mobil Toyota Fortuner di Surabaya. Pilihan SUV premium untuk perjalanan bisnis atau wisata dengan keluarga.',
  },
}

export default function Page() {
  return <FleetPage />;
}


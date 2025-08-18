
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Hiace Jakarta - Rental Mini Bus untuk Rombongan & Wisata',
  description: 'Sewa mobil Toyota Hiace di Jakarta untuk rombongan wisata, perjalanan bisnis, atau acara keluarga. Kapasitas hingga 15 orang, nyaman, dengan sopir berpengalaman. Harga rental Hiace terbaik.',
  keywords: ['sewa hiace jakarta', 'rental hiace jakarta', 'sewa mobil rombongan jakarta', 'rental minibus jakarta', 'sewa hiace premio jakarta', 'sewa elf jakarta'],
   openGraph: {
    title: 'Sewa Mobil Hiace Jakarta - Rental Mini Bus untuk Rombongan & Wisata',
    description: 'Sewa mobil Toyota Hiace di Jakarta untuk rombongan wisata, bisnis, atau keluarga. Kapasitas hingga 15 orang.',
  },
}

export default function Page() {
  return <FleetPage />;
}


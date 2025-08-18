
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Bandara Kualanamu (KNO) - Rental Lepas Kunci & Dengan Sopir',
  description: 'Jasa rental & sewa mobil di Bandara Kualanamu Medan (KNO) harga murah. Layanan antar jemput, lepas kunci 24 jam, atau dengan sopir. Pesan sekarang untuk penjemputan tepat waktu.',
  keywords: ['sewa mobil bandara kualanamu', 'rental mobil kualanamu', 'sewa mobil dekat bandara kualanamu', 'sewa mobil di bandara kualanamu', 'sewa mobil lepas kunci bandara kualanamu', 'sewa mobil kualanamu ke danau toba', 'rental mobil kualanamu ke brastagi'],
  openGraph: {
    title: 'Sewa Mobil Bandara Kualanamu (KNO) - Rental & Antar Jemput 24 Jam',
    description: 'Rental mobil di Bandara Kualanamu (KNO) dengan sopir atau lepas kunci. Pilihan Avanza, Innova, Hiace. Harga kompetitif.',
  },
}


export default function Page() {
  return <FleetPage />;
}


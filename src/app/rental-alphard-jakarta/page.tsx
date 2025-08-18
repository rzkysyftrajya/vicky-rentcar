
import FleetPage from "../fleet/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Alphard Jakarta - Rental Mewah dengan Sopir VIP',
  description: 'Rental mobil Toyota Alphard di Jakarta untuk kebutuhan VIP, bisnis, atau pernikahan. Layanan premium dengan sopir profesional. Harga sewa Alphard terbaik di Jakarta.',
  keywords: ['sewa alphard jakarta', 'rental alphard jakarta', 'sewa mobil mewah jakarta', 'rental mobil vip jakarta', 'sewa mobil pengantin jakarta', 'sewa mobil premium jakarta'],
   openGraph: {
    title: 'Sewa Mobil Alphard Jakarta - Rental Mewah dengan Sopir VIP',
    description: 'Rental mobil Toyota Alphard di Jakarta untuk kebutuhan VIP, bisnis, atau pernikahan dengan layanan premium.',
  },
}

export default function Page() {
  return <FleetPage />;
}


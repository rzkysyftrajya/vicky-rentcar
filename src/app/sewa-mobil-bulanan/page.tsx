
import LongTermRentalPage from "../long-term-rental/page";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sewa Mobil Bulanan se-Indonesia - Harga Murah untuk Korporat & Pribadi',
  description: 'Sewa mobil bulanan di seluruh Indonesia (Medan, Jakarta, Surabaya, dll) dengan harga hemat. Solusi transportasi jangka panjang untuk kebutuhan perusahaan atau pribadi. Perawatan inklusif.',
  keywords: ['sewa mobil bulanan', 'rental mobil bulanan', 'sewa mobil perusahaan', 'sewa mobil jangka panjang indonesia', 'sewa mobil korporat', 'sewa mobil kontrak'],
  openGraph: {
    title: 'Sewa Mobil Bulanan se-Indonesia - Harga Murah untuk Korporat & Pribadi',
    description: 'Sewa mobil bulanan di seluruh Indonesia dengan harga hemat. Solusi transportasi jangka panjang untuk kebutuhan perusahaan atau pribadi.',
  },
}

export default function Page() {
  return <LongTermRentalPage />;
}


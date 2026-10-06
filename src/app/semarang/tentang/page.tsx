import type { Metadata } from 'next';
import { createSemarangMetadata } from '@/lib/semarang-site/seo';
import { TentangPageClient } from './tentang-client';

export const metadata = createSemarangMetadata({
  title: 'Profil dan Tentang Kami',
  description:
    'Profil PT.VRN Semarang: rental mobil harian, wisata, bisnis, dan antar jemput Bandara Ahmad Yani. Tersedia dengan sopir atau lepas kunci.',
  path: '/semarang/tentang',
});

export default function TentangPage() {
  return <TentangPageClient />;
}

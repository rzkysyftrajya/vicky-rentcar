import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import GaleriPage from "./page-client";

export const metadata = createSemarangMetadata({
  title: "Galeri Armada Rental Mobil Semarang",
  description:
    "Lihat foto armada dan dokumentasi layanan rental mobil PT.VRN Semarang untuk perjalanan keluarga, wisata, bisnis, dan antar jemput bandara.",
  path: "/semarang/galeri",
});

export default function SemarangGaleriPage() {
  return <GaleriPage />;
}
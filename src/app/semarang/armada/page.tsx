import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import ArmadaPage from "./page-client";

export const metadata = createSemarangMetadata({
  title: "Pilihan Armada Rental Mobil Semarang",
  description:
    "Bandingkan pilihan mobil sewa di Semarang, dari city car dan MPV hingga Hiace. Cek tipe transmisi, kapasitas, harga, lalu tanyakan ketersediaan.",
  path: "/semarang/armada",
});

export default function SemarangArmadaPage() {
  return <ArmadaPage />;
}

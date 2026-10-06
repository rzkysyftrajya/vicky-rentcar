import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import ArmadaPage from "./page-client";

export const metadata = createSemarangMetadata({
  title: "Pilihan Armada Rental Mobil Semarang",
  description:
    "Pilih mobil sewa Semarang dari city car dan MPV hingga Hiace. Cek kapasitas dan transmisi, lalu tanyakan penawaran serta ketersediaan via WhatsApp.",
  path: "/semarang/armada",
});

export default function SemarangArmadaPage() {
  return <ArmadaPage />;
}

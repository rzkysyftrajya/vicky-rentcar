import type { Metadata } from "next";
import ArmadaPage from "./page-client";

export const metadata: Metadata = {
  title: "Pilihan Armada Rental Mobil Semarang",
  description:
    "Lihat pilihan mobil untuk sewa di Semarang, dari kendaraan keluarga hingga minibus. Tanyakan ketersediaan dan harga sesuai tanggal perjalanan.",
  alternates: { canonical: "/semarang/armada" },
};

export default function SemarangArmadaPage() {
  return <ArmadaPage />;
}

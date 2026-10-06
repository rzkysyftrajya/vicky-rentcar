import type { Metadata } from "next";
import GaleriPage from "./page-client";

export const metadata: Metadata = {
  title: "Galeri Armada dan Layanan Semarang",
  description:
    "Lihat dokumentasi armada dan layanan PT.VRN Semarang sebelum merencanakan perjalanan Anda.",
  alternates: { canonical: "/semarang/galeri" },
};

export default function SemarangGaleriPage() {
  return <GaleriPage />;
}
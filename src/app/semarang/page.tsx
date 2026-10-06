import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import HomePage from "./home-client";

export const metadata = {
  ...createSemarangMetadata({
    title: "Sewa Mobil Semarang dengan Sopir atau Lepas Kunci",
  description:
    "Rental mobil Semarang untuk sewa harian, lepas kunci, atau dengan sopir. Lihat pilihan armada dan tanyakan antar jemput Bandara Ahmad Yani via WhatsApp.",
  path: "/semarang",
  }),
  title: { absolute: "Rental Mobil Semarang | Sopir & Lepas Kunci" },
};

export default function SemarangHomePage() {
  return <HomePage />;
}

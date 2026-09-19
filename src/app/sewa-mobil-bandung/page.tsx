import { type Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Sewa Mobil Bandung - Rental Murah Lepas Kunci & Sopir | PT.VRN",
  description:
    "Pusat sewa mobil di Bandung dengan armada lengkap. Layanan rental mobil murah lepas kunci atau dengan sopir profesional. Cocok untuk wisata, bisnis, atau perjalanan dinas.",
  keywords: [
    "sewa mobil bandung",
    "rental mobil bandung",
    "sewa mobil murah bandung",
    "sewa mobil lepas kunci bandung",
    "rental mobil bandung dengan sopir",
  ],
  openGraph: {
    title: "Sewa Mobil Bandung - Rental Murah Lepas Kunci & Sopir",
    description:
      "Sewa mobil murah di Bandung. Armada lengkap, layanan lepas kunci & sopir profesional. Booking mudah, harga transparan.",
  },
};

export default function Page() {
  return (
    <CityPage
      city="Bandung"
      province="Jawa Barat"
      description="Selamat datang di layanan sewa mobil Bandung. Kami menyediakan armada terbaik dengan harga bersaing, pilihan lepas kunci maupun dengan sopir berpengalaman. Nikmati perjalanan nyaman ke Lembang, Ciwidey, atau pusat kota."
      highlights={[
        "Lepas Kunci",
        "Dengan Sopir",
        "Antar Jemput Bandara Husein Sastranegara",
      ]}
      cars={[
        {
          name: "Toyota Avanza",
          image: "/armada/toyota-all-new-avanza.webp",
          alt: "Sewa Toyota Avanza Bandung",
          type: "MPV, 7 Penumpang",
        },
        {
          name: "Toyota Innova",
          image: "/armada/innova-reborn.webp",
          alt: "Sewa Toyota Innova Bandung",
          type: "MPV, 7 Penumpang",
        },
        {
          name: "Mitsubishi Xpander",
          image: "/armada/xpander.webp",
          alt: "Sewa Mitsubishi Xpander Bandung",
          type: "MPV, 7 Penumpang",
        },
        {
          name: "Toyota Hiace",
          image: "/armada/hiace-premio.webp",
          alt: "Sewa Toyota Hiace Bandung",
          type: "Van, 14-16 Penumpang",
        },
      ]}
    />
  );
}

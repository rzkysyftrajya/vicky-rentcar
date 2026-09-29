import type { Metadata } from "next";
import ServiceLandingPage from "@/components/marketing/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Sewa Mobil Alphard Kalimantan dengan Layanan Premium",
  description:
    "Sewa Toyota Alphard untuk perjalanan bisnis, keluarga, dan acara khusus di Kalimantan. Tanyakan ketersediaan armada dan layanan sopir melalui WhatsApp.",
  keywords: [
    "sewa mobil Alphard",
    "rental Alphard",
    "sewa Alphard dengan sopir",
    "rental mobil premium",
  ],
  alternates: {
    canonical:
      "https://www.vickyrentcarnusantara.com/kalimantan/sewa-mobil-alphard",
  },
};

export default function SewaAlphardPage() {
  return (
    <ServiceLandingPage
      eyebrow="Layanan premium"
      title="Sewa Mobil Alphard"
      description="Nikmati perjalanan yang lebih nyaman dengan Toyota Alphard di Kalimantan untuk kebutuhan pribadi maupun profesional. Hubungi kami untuk mengecek ketersediaan armada, kota layanan, dan pilihan perjalanan dengan sopir."
      benefits={[
        "Kabin lega dan nyaman untuk perjalanan bersama keluarga atau tamu penting.",
        "Pilihan layanan dengan sopir profesional sesuai kebutuhan perjalanan.",
        "Rencana perjalanan dan penjemputan dapat dibicarakan saat pemesanan.",
        "Informasi tarif diberikan berdasarkan kota, durasi, dan rute perjalanan.",
      ]}
      occasions={[
        "Perjalanan bisnis dan penjemputan tamu.",
        "Acara keluarga, pernikahan, atau perjalanan khusus.",
        "Antar jemput bandara dan perjalanan dalam kota.",
        "Perjalanan wisata privat bersama keluarga.",
      ]}
      whatsappMessage="Halo, saya ingin menanyakan ketersediaan sewa mobil Alphard."
      image="/kalimantan/armada/Alphard.webp"
      imageAlt="Armada Toyota Alphard untuk perjalanan premium di Kalimantan"
    />
  );
}

import type { Metadata } from "next";
import ServiceLandingPage from "@/components/marketing/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Sewa Mobil Hiace Kalimantan untuk Rombongan",
  description:
    "Sewa Toyota Hiace untuk wisata, perjalanan keluarga, acara, dan kebutuhan rombongan di Kalimantan. Tanyakan pilihan armada, kota layanan, dan ketersediaan.",
  keywords: [
    "sewa mobil Hiace",
    "rental Toyota Hiace",
    "sewa Hiace rombongan",
    "sewa Hiace untuk wisata",
  ],
  alternates: {
    canonical:
      "https://www.vickyrentcarnusantara.com/kalimantan/sewa-mobil-hiace",
  },
};

export default function SewaHiacePage() {
  return (
    <ServiceLandingPage
      eyebrow="Perjalanan bersama"
      title="Sewa Mobil Hiace"
      description="Bepergian bersama rombongan di Kalimantan dengan lebih praktis menggunakan Toyota Hiace. Sampaikan jumlah penumpang, tujuan, tanggal, dan kota penjemputan agar kami dapat membantu memilih armada serta layanan yang tersedia."
      benefits={[
        "Kabin luas untuk perjalanan kelompok dan keluarga.",
        "Praktis untuk mengatur perjalanan dalam satu kendaraan.",
        "Pilihan layanan dengan sopir dapat ditanyakan saat pemesanan.",
        "Jenis armada dan kapasitas aktual dikonfirmasi sesuai ketersediaan.",
      ]}
      occasions={[
        "Wisata keluarga dan perjalanan rombongan.",
        "Kunjungan kerja, outing, dan acara perusahaan.",
        "Antar jemput tamu atau peserta acara.",
        "Perjalanan antarkota dengan rute yang disepakati.",
      ]}
      whatsappMessage="Halo, saya ingin menanyakan ketersediaan sewa mobil Hiace."
    />
  );
}

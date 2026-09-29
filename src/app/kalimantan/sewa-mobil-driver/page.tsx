import type { Metadata } from "next";
import ServiceLandingPage from "@/components/marketing/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Sewa Mobil dengan Driver di Kalimantan",
  description:
    "Sewa mobil dengan driver untuk perjalanan bisnis, wisata, antar jemput, dan kebutuhan keluarga di Kalimantan. Hubungi Vicky Rentcar untuk info layanan dan ketersediaan.",
  keywords: [
    "sewa mobil dengan driver",
    "rental mobil plus sopir",
    "sewa mobil sopir profesional",
    "rental mobil wisata",
  ],
  alternates: {
    canonical:
      "https://www.vickyrentcarnusantara.com/kalimantan/sewa-mobil-driver",
  },
};

export default function SewaMobilDriverPage() {
  return (
    <ServiceLandingPage
      eyebrow="Perjalanan tanpa repot"
      title="Sewa Mobil dengan Driver"
      description="Fokus menikmati perjalanan di Kalimantan, sementara pengemudi membantu mengantar Anda ke tujuan. Pilih jenis kendaraan, kota penjemputan, durasi, dan rute agar tim kami dapat menyiapkan penawaran yang sesuai."
      benefits={[
        "Pengemudi berpengalaman dan memahami perjalanan yang dipesan.",
        "Tidak perlu mengatur navigasi atau mencari tempat parkir sendiri.",
        "Pilihan kendaraan dapat disesuaikan dengan jumlah penumpang dan kebutuhan.",
        "Rute, durasi, serta detail biaya dikonfirmasi sebelum pemesanan.",
      ]}
      occasions={[
        "Perjalanan dinas dan aktivitas perusahaan.",
        "Wisata dalam kota maupun perjalanan antarkota.",
        "Antar jemput bandara, hotel, dan lokasi acara.",
        "Kebutuhan mobilitas keluarga atau tamu.",
      ]}
      whatsappMessage="Halo, saya ingin menanyakan layanan sewa mobil dengan driver."
      image="/kalimantan/kalimantan-driver.jpg"
      imageAlt="Pemandangan perjalanan dari dalam mobil dengan driver"
    />
  );
}

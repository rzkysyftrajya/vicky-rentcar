import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import KalimantanShell from "@/components/marketing/KalimantanShell";
import styles from "@/app/kalimantan/kalimantan.module.css";

export const metadata: Metadata = {
  title: "FAQ Sewa Mobil Kalimantan",
  description:
    "Jawaban pertanyaan umum tentang sewa mobil di Kalimantan: cara menanyakan layanan, pilihan armada, rute antarkota, biaya, dan ketersediaan.",
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/kalimantan/faq",
  },
};

const faqs = [
  {
    question: "Apakah melayani sewa mobil dengan driver di Kalimantan?",
    answer:
      "Anda dapat berkonsultasi untuk perjalanan dengan driver. Sebutkan kota atau titik jemput, tujuan, tanggal, dan lama pemakaian agar tim kami dapat mengecek ketersediaannya.",
  },
  {
    question: "Apakah bisa untuk perjalanan antarkota?",
    answer:
      "Perjalanan antarkota dapat dibicarakan terlebih dahulu. Rute, durasi, dan ketersediaan kendaraan maupun driver perlu dikonfirmasi sebelum pemesanan.",
  },
  {
    question: "Mobil apa saja yang bisa ditanyakan?",
    answer:
      "Pilihan yang dapat ditanyakan mencakup kendaraan keluarga, Alphard, Fortuner, Pajero, Lexus, dan Hiace. Pilihan aktual dapat berbeda menurut kota serta tanggal perjalanan.",
  },
  {
    question: "Bagaimana memilih kendaraan yang sesuai?",
    answer:
      "Sampaikan jumlah penumpang, barang bawaan, tujuan, dan lama perjalanan. Tim kami akan membantu mengecek pilihan yang sesuai dengan kebutuhan dan ketersediaan.",
  },
  {
    question: "Bagaimana cara mengetahui harga sewa?",
    answer:
      "Tarif bergantung pada kota, jenis kendaraan, rute, durasi, dan kebutuhan perjalanan. Hubungi tim dengan detail tersebut untuk meminta rincian penawaran sebelum memesan.",
  },
  {
    question: "Apakah layanan tersedia di semua kota di Kalimantan?",
    answer:
      "Cakupan layanan dan ketersediaan driver perlu dikonfirmasi berdasarkan kota, rute, serta tanggal yang Anda ajukan. Wilayah yang disebutkan di halaman ini bukan jaminan armada tersedia di setiap kota.",
  },
  {
    question: "Informasi apa yang perlu disiapkan saat menghubungi tim?",
    answer:
      "Siapkan kota penjemputan, tujuan, tanggal, durasi, jumlah penumpang, dan jenis kendaraan yang diinginkan. Untuk penjemputan bandara, sertakan jadwal penerbangan.",
  },
];

export default function FaqKalimantanPage() {
  return (
    <KalimantanShell>
      <main className={styles.subpage}>
        <section className={styles.catalogHero}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Kalimantan <span>/</span> FAQ
          </p>
          <h1>Jawaban sebelum perjalanan dimulai.</h1>
          <p>
            Informasi dasar tentang layanan dan pemesanan. Untuk memastikan
            harga dan ketersediaan, sampaikan detail rencana perjalanan kepada
            tim kami.
          </p>
        </section>

        <section className={styles.faqPage}>
          <div className={styles.faqPageIntro}>
            <p className={styles.eyebrow}>Pertanyaan umum</p>
            <h2>Yang sering ditanyakan.</h2>
            <p>
              Belum menemukan jawaban yang dicari? Kirimkan kota, rute, dan
              tanggal perjalanan Anda.
            </p>
            <a
              className={styles.inlineLink}
              href={`https://wa.me/6282363389893?text=${encodeURIComponent("Halo Vicky Rentcar, saya ingin bertanya tentang layanan sewa mobil di Kalimantan.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tanya melalui WhatsApp
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.faqList}>
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.catalogRelated}>
          <p className={styles.eyebrow}>Jelajahi informasi</p>
          <h2>Temukan layanan dan kendaraan.</h2>
          <div>
            <Link href="/kalimantan/layanan">
              Detail layanan <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/kalimantan/armada">
              Lihat pilihan armada <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </KalimantanShell>
  );
}

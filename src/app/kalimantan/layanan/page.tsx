import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPinned,
  Plane,
  Users,
} from "lucide-react";
import KalimantanShell from "@/components/marketing/KalimantanShell";
import styles from "@/app/kalimantan/kalimantan.module.css";

export const metadata: Metadata = {
  title: "Layanan Sewa Mobil Kalimantan",
  description:
    "Lihat detail layanan sewa mobil dengan driver di Kalimantan untuk agenda bisnis, penjemputan bandara, keluarga, rombongan, dan rute antarkota.",
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/kalimantan/layanan",
  },
};

const serviceItems = [
  {
    number: "01",
    title: "Agenda bisnis",
    description:
      "Atur perjalanan meeting, kunjungan lokasi, dan beberapa titik kerja dalam satu jadwal. Sampaikan susunan agenda agar waktu dan rute dapat dibicarakan lebih awal.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Jemput bandara",
    description:
      "Perjalanan dari bandara ke hotel, kantor, atau tujuan lainnya. Siapkan jadwal penerbangan dan titik penjemputan saat menghubungi tim.",
    icon: Plane,
  },
  {
    number: "03",
    title: "Keluarga & rombongan",
    description:
      "Tentukan kendaraan berdasarkan jumlah penumpang, barang bawaan, dan lama perjalanan. Hiace dapat ditanyakan untuk kebutuhan rombongan.",
    icon: Users,
  },
  {
    number: "04",
    title: "Rute antarkota",
    description:
      "Untuk perjalanan luar kota atau beberapa hari, konsultasikan rute, tanggal, dan titik singgah agar ketersediaan kendaraan dapat diperiksa.",
    icon: MapPinned,
  },
];

export default function LayananKalimantanPage() {
  return (
    <KalimantanShell>
      <main className={styles.subpage}>
        <section className={styles.catalogHero}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Kalimantan <span>/</span> Layanan
          </p>
          <h1>Layanan untuk tiap tujuan perjalanan.</h1>
          <p>
            Dari penjemputan bandara hingga rute antarkota, ceritakan kebutuhan
            dan jadwal Anda. Tim kami akan membantu memeriksa pilihan perjalanan
            yang tersedia.
          </p>
        </section>

        <section className={styles.catalogList} aria-label="Detail layanan">
          {serviceItems.map(({ number, title, description, icon: Icon }) => (
            <article className={styles.catalogRow} key={number}>
              <span className={styles.catalogNumber}>{number}</span>
              <Icon
                className={styles.catalogIcon}
                size={23}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <a
                href={`https://wa.me/6282363389893?text=${encodeURIComponent(`Halo Vicky Rentcar, saya ingin menanyakan layanan ${title.toLowerCase()} di Kalimantan.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tanyakan layanan ${title}`}
              >
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </section>

        <section className={styles.catalogRelated}>
          <p className={styles.eyebrow}>Pilihan kendaraan</p>
          <h2>Sudah tahu kendaraan yang dicari?</h2>
          <p>
            Lihat detail sewa Alphard untuk perjalanan premium, Hiace untuk
            rombongan, atau layanan sewa mobil dengan driver.
          </p>
          <div>
            <Link href="/kalimantan/sewa-mobil-alphard">
              Sewa Alphard <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/kalimantan/sewa-mobil-hiace">
              Sewa Hiace <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/kalimantan/sewa-mobil-driver">
              Dengan driver <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </KalimantanShell>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";
import KalimantanShell from "@/components/marketing/KalimantanShell";
import KalimantanImageLightbox from "@/components/marketing/KalimantanImageLightbox";
import styles from "@/app/kalimantan/kalimantan.module.css";

export const metadata: Metadata = {
  title: "Paket Wisata Kalimantan | Vicky Rentcar Nusantara",
  description:
    "Jelajahi inspirasi paket wisata Balikpapan, IKN, Samarinda, Samboja, dan Berau bersama Vicky Rentcar.",
  keywords: [
    "paket wisata Kalimantan",
    "sewa mobil untuk wisata",
  ],
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/kalimantan/paket-wisata",
  },
};

const whatsappUrl =
  "https://wa.me/6282363389893?text=" +
  encodeURIComponent(
    "Halo Vicky Rentcar Kalimantan, saya ingin konsultasi paket wisata. Tujuan dan tanggal perjalanan saya:"
  );

const tourPackages = [
  {
    number: "01",
    region: "Balikpapan · IKN",
    title: "Kota Balikpapan & IKN",
    description:
      "Susun perjalanan dari pusat kota Balikpapan menuju kawasan IKN. Titik kunjungan dan akses perjalanan disesuaikan dengan aturan yang berlaku.",
    fit: "Wisata kota · perjalanan keluarga",
    image: "/kalimantan/paket-wisata/balikpapan-ikn.webp",
  },
  {
    number: "02",
    region: "Samarinda",
    title: "Jelajah Samarinda",
    description:
      "Rencanakan kunjungan ke ikon kota, kawasan tepian Mahakam, dan tujuan sekitar Samarinda dalam satu rute yang lebih tertata.",
    fit: "Wisata kota · rombongan",
    image: "/kalimantan/paket-wisata/jelajah-samarinda.webp",
  },
  {
    number: "03",
    region: "Samboja · Kutai Kartanegara",
    title: "Alam Samboja & sekitarnya",
    description:
      "Pilihan perjalanan bernuansa alam untuk mengunjungi kawasan Samboja dan destinasi sekitar sesuai waktu serta titik keberangkatan.",
    fit: "Wisata alam · perjalanan fleksibel",
    image: "/kalimantan/paket-wisata/Alam-samboja.webp",
  },
  {
    number: "04",
    region: "Berau",
    title: "Berau & Kepulauan Derawan",
    description:
      "Rencanakan perjalanan darat menuju Berau dan koordinasikan lanjutan perjalanan ke pulau tujuan. Transportasi laut dan akomodasi dikonfirmasi terpisah.",
    fit: "Perjalanan antarkota · wisata bahari",
    image: "/kalimantan/paket-wisata/berau.webp",
  },
];

function createTourWhatsAppUrl(title: string) {
  return (
    "https://wa.me/6282363389893?text=" +
    encodeURIComponent(
      `Halo Vicky Rentcar Kalimantan, saya ingin konsultasi paket wisata ${title}. Mohon info rute, jadwal, dan ketersediaan kendaraan.`
    )
  );
}

const planningItems = [
  {
    number: "01 / Rute",
    title: "Mulai dari tujuan",
    description:
      "Sampaikan kota asal, titik yang ingin dikunjungi, serta apakah perjalanan dalam kota atau antarkota.",
  },
  {
    number: "02 / Waktu",
    title: "Tentukan jadwal",
    description:
      "Bagikan tanggal keberangkatan, lama perjalanan, dan waktu penjemputan yang Anda rencanakan.",
  },
  {
    number: "03 / Kendaraan",
    title: "Sesuaikan kendaraan",
    description:
      "Jumlah penumpang dan barang bawaan membantu kami mencocokkan pilihan kendaraan yang tersedia.",
  },
];

export default function PaketWisataPage() {
  return (
    <KalimantanShell>
      <main className={styles.subpage}>
        <section className={styles.subpageHero}>
          <div className={styles.subpageHeroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Kalimantan <span>/</span> Perjalanan wisata
            </p>
            <h1>
              Tujuan jauh.
              <br />
              Cerita yang
              <br />
              dibawa pulang.
            </h1>
            <p className={styles.subpageLead}>
              Rencanakan perjalanan wisata bersama Vicky Rentcar. Ceritakan
              tujuan dan jadwalnya; kami bantu cek kendaraan serta rute yang
              sesuai.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bicarakan rencana wisata
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <Link className={styles.textLink} href="/kalimantan">
                Kembali ke Kalimantan
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <p className={styles.heroNote}>
              Rute, jadwal, dan ketersediaan dikonfirmasi sebelum pemesanan.
            </p>
          </div>
          <div className={`${styles.subpageVisual} ${styles.tourHeroVisual}`}>
            <Image
              src="/kalimantan/hero-section.webp"
              alt="Ilustrasi paket wisata Kalimantan dengan lanskap, destinasi, dan perjalanan"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className={styles.tourIntro}>
          <div className={styles.tourIntroGrid}>
            <div>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Perjalanan dirancang bersama
              </p>
              <h2>
                Tidak harus
                <br />
                berangkat tanpa rencana.
              </h2>
            </div>
            <p>
              Perjalanan wisata akan lebih nyaman jika kota jemput, tujuan,
              jumlah penumpang, dan waktu tempuh dibicarakan sejak awal. Tim kami
              membantu memeriksa pilihan transportasi yang sesuai kebutuhan.
            </p>
          </div>
        </section>

        <section
          className={styles.tourPackages}
          aria-labelledby="tour-packages-title"
        >
          <div className={styles.tourPackagesHeading}>
            <div>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Pilihan perjalanan
              </p>
              <h2 id="tour-packages-title">
                Temukan rute
                <br />
                yang ingin dijelajahi.
              </h2>
            </div>
            <p>
              Ini adalah inspirasi rute, bukan itinerary atau harga tetap.
              Ceritakan titik jemput, tanggal, dan jumlah penumpang untuk
              menyesuaikan perjalanan serta memastikan layanan yang tersedia.
            </p>
          </div>
          <div className={styles.tourPackageGrid}>
            {tourPackages.map((tour) => (
              <article className={styles.tourPackageCard} key={tour.number}>
                <div className={styles.tourPackageImage}>
                  <KalimantanImageLightbox
                    src={tour.image}
                    alt={`Ilustrasi paket wisata ${tour.title}`}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 760px) 100vw, (max-width: 1120px) 42vw, 36vw"
                  />
                </div>
                <div className={styles.tourPackageTopline}>
                  <span>{tour.number} / RUTE WISATA</span>
                  <MapPinned size={17} aria-hidden="true" />
                </div>
                <p className={styles.tourPackageRegion}>{tour.region}</p>
                <h3>{tour.title}</h3>
                <p className={styles.tourPackageDescription}>
                  {tour.description}
                </p>
                <div className={styles.tourPackageFooter}>
                  <span>{tour.fit}</span>
                  <a
                    href={createTourWhatsAppUrl(tour.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Konsultasi paket ${tour.title} melalui WhatsApp`}
                  >
                    Konsultasi
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.tourPlanning}>
          <div className={styles.tourPlanningHeading}>
            <p className={styles.eyebrow}>
              <MapPinned size={15} aria-hidden="true" />
              Persiapan sederhana
            </p>
            <h2>Bagikan detail perjalanan.</h2>
            <p>
              Informasi berikut membantu tim kami memahami rencana Anda dan
              menyiapkan pengecekan layanan yang lebih akurat.
            </p>
          </div>
          <div className={styles.tourPlanningGrid}>
            {planningItems.map((item) => (
              <article className={styles.tourPlanningCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.tourReturn}>
          <Link href="/kalimantan">
            Kembali ke halaman Kalimantan
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </KalimantanShell>
  );
}

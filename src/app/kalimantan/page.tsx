import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  CircleCheck,
  MapPinned,
  Plane,
  Users,
} from "lucide-react";
import styles from "./kalimantan.module.css";
import KalimantanNavigation from "@/components/marketing/KalimantanNavigation";
import MandalikaEventFeature from "@/components/marketing/MandalikaEventFeature";
import Link from "next/link";
import KalimantanVehicleCard from "@/components/marketing/KalimantanVehicleCard";
import {
  featuredKalimantanFleet,
} from "@/data/kalimantan-fleet";

const whatsappNumber = "6282363389893";
const bookingMessage =
  "Halo Vicky Rentcar, saya ingin konsultasi sewa mobil dengan driver untuk perjalanan di Kalimantan. Rencana perjalanan saya:";
const bookingUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;

const services = [
  {
    number: "01",
    title: "Agenda bisnis",
    description:
      "Meeting, kunjungan lokasi, atau beberapa titik kerja dalam satu hari. Sampaikan jadwalnya agar perjalanan bisa direncanakan lebih rapi.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Jemput bandara",
    description:
      "Perjalanan dari bandara ke hotel, kantor, atau titik tujuan lain. Bagikan jadwal penerbangan dan lokasi jemput saat menghubungi tim.",
    icon: Plane,
  },
  {
    number: "03",
    title: "Keluarga & rombongan",
    description:
      "Pilih kendaraan berdasarkan jumlah penumpang, bagasi, dan lama perjalanan—bukan sekadar jenis mobil.",
    icon: Users,
  },
  {
    number: "04",
    title: "Rute antarkota",
    description:
      "Untuk perjalanan di luar kota atau beberapa hari, konsultasikan rute dan jadwal lebih dulu agar ketersediaan bisa dipastikan.",
    icon: MapPinned,
  },
];

const faqs = [
  {
    question: "Apakah melayani sewa mobil dengan driver di Kalimantan?",
    answer:
      "Ya, Anda dapat berkonsultasi untuk perjalanan dengan driver. Sebutkan kota atau titik jemput, tujuan, tanggal, dan lama pemakaian agar tim kami dapat mengecek ketersediaannya.",
  },
  {
    question: "Apakah bisa untuk perjalanan antarkota?",
    answer:
      "Perjalanan antarkota dapat dibicarakan terlebih dahulu. Rute, durasi, dan ketersediaan kendaraan maupun driver perlu dikonfirmasi sebelum pemesanan.",
  },
  {
    question: "Mobil apa yang tersedia dan berapa kapasitasnya?",
    answer:
      "Pilihan kendaraan mengikuti kebutuhan perjalanan dan ketersediaan pada tanggal yang diminta. Informasikan jumlah penumpang serta bagasi untuk mendapatkan rekomendasi yang sesuai.",
  },
  {
    question: "Bagaimana cara menanyakan layanan di kota saya?",
    answer:
      "Hubungi kami melalui WhatsApp dengan menyertakan kota, rute, tanggal, jumlah penumpang, dan jenis perjalanan. Tim kami akan membantu mengecek opsi yang tersedia.",
  },
];

const regions = [
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Timur",
  "Kalimantan Utara",
];

export const metadata: Metadata = {
  title: "Sewa Mobil Kalimantan dengan Driver | Vicky Rentcar Nusantara",
  description:
    "Konsultasikan sewa mobil dengan driver untuk perjalanan bisnis, jemput bandara, keluarga, dan rute antarkota di Kalimantan. Tanyakan kota dan ketersediaan melalui WhatsApp.",
  keywords: [
    "sewa mobil Kalimantan",
    "rental mobil Kalimantan",
    "sewa mobil Kalimantan dengan driver",
    "rental mobil antar kota Kalimantan",
    "sewa mobil jemput bandara Kalimantan",
  ],
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/kalimantan",
  },
  openGraph: {
    title: "Sewa Mobil Kalimantan dengan Driver | Vicky Rentcar",
    description:
      "Untuk agenda bisnis, jemput bandara, perjalanan keluarga, dan rute antarkota. Tanyakan cakupan layanan dan ketersediaan kendaraan di kota tujuan Anda.",
    url: "https://www.vickyrentcarnusantara.com/kalimantan",
    type: "website",
    images: [
      {
        url: "/kalimantan/kalimantan-hero.webp",
        width: 1110,
        height: 640,
        alt: "MPV dalam perjalanan di tengah lanskap hijau Kalimantan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Mobil Kalimantan dengan Driver | Vicky Rentcar",
    description:
      "Konsultasikan kebutuhan sewa mobil dengan driver untuk perjalanan di Kalimantan.",
    images: ["/kalimantan/kalimantan-hero.webp"],
  },
};

export default function KalimantanPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sewa Mobil dengan Driver di Kalimantan",
    serviceType: "Sewa mobil dengan driver",
    areaServed: regions.map((name) => ({ "@type": "AdministrativeArea", name })),
    provider: {
      "@type": "LocalBusiness",
      name: "PT. VICKY RENTCAR NUSANTARA",
      url: "https://www.vickyrentcarnusantara.com",
      telephone: `+${whatsappNumber}`,
    },
    url: "https://www.vickyrentcarnusantara.com/kalimantan",
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <KalimantanNavigation bookingUrl={bookingUrl} />

      <div className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Vicky Rentcar Nusantara <span>/</span> Kalimantan
            </p>
            <h1>
              Jalan jauh.
              <br />
              <span>Biar kami yang</span>
              <br />
              pegang kemudi.
            </h1>
            <p className={styles.heroDescription}>
              Sewa mobil dengan driver untuk agenda kerja, jemput bandara, dan
              perjalanan antarkota. Ceritakan rutenya—kami bantu cek opsi
              kendaraannya.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bicarakan rute Anda <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className={styles.textLink} href="/kalimantan/layanan">
                Lihat detail layanan <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>
              Kota, jadwal, dan ketersediaan dikonfirmasi sebelum pemesanan.
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.imageCaption}>
              <span className={styles.captionRule} />
              Rencana perjalanan dimulai dari obrolan yang jelas.
            </div>
            <span className={styles.imageIndex}>01 / 04</span>
          </div>
          <a className={styles.scrollHint} href="#perjalanan">
            <span>GULIR UNTUK MELIHAT</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </section>

        <section className={styles.intro} id="perjalanan">
          <p className={styles.eyebrow}>Dibuat untuk perjalanan Anda</p>
          <div className={styles.introGrid}>
            <h2>
              Bukan cuma soal
              <br />
              sampai tujuan.
            </h2>
            <div className={styles.introBody}>
              <p>
                Di Kalimantan, satu perjalanan bisa berarti jemput tamu di
                bandara, mampir ke beberapa lokasi kerja, lalu lanjut ke kota
                berikutnya. Punya driver membuat Anda bisa fokus pada agenda,
                bukan sibuk berganti kendaraan di tengah jalan.
              </p>
              <a className={styles.inlineLink} href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Ceritakan kebutuhan perjalanan <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles.photoBand}>
            <Image
              src="/kalimantan/bukan-cuma-soal-sampai-tujuan.webp"
              alt="Perjalanan Kalimantan dengan driver, kendaraan, dan lanskap saat senja"
              width={1347}
              height={1168}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 90vw"
            />
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Bisa untuk berbagai agenda</p>
              <h2>
                Perjalanannya
                <br />
                punya cerita sendiri.
              </h2>
            </div>
            <p>
              Tidak perlu memilih layanan dari daftar panjang. Mulai saja dari
              tujuan, jadwal, dan siapa saja yang ikut.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(({ number, title, description, icon: Icon }) => (
              <article className={styles.serviceCard} key={number}>
                <div className={styles.serviceMeta}>
                  <span>{number}</span>
                  <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <Link className={styles.inlineLink} href="/kalimantan/layanan">
            Lihat detail layanan <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <MandalikaEventFeature />

        <section className={styles.driver}>
          <div className={styles.driverImageWrap}>
            <Image
              src="/kalimantan/buka-laptop.webp"
              alt="Pengemudi dan penumpang menggunakan laptop dalam perjalanan"
              width={1152}
              height={768}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.driverCopy}>
            <p className={styles.eyebrow}>Lebih leluasa di perjalanan</p>
            <h2>
              Buka laptop.
              <br />
              Istirahat.
              <br />
              Nikmati jalan.
            </h2>
            <p>
              Ada yang perlu disiapkan sebelum meeting? Perjalanan cukup panjang
 untuk beristirahat? Dengan driver, waktu di mobil tetap bisa jadi waktu
 Anda.
            </p>
            <ul className={styles.driverList}>
              <li>
                <CircleCheck size={17} aria-hidden="true" /> Anda tidak perlu
                menyetir sendiri
              </li>
              <li>
                <CircleCheck size={17} aria-hidden="true" /> Rute dan titik
                tujuan dibicarakan lebih dulu
              </li>
              <li>
                <CircleCheck size={17} aria-hidden="true" /> Kendaraan
                disesuaikan dengan orang dan bagasi
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.fleet}>
          <div className={styles.fleetCopy}>
            <p className={styles.eyebrow}>Pilih sesuai rute</p>
            <h2>
              Kendaraan yang
              <br />
              pas, bukan asal ada.
            </h2>
            <p>
              Beberapa pilihan untuk keluarga, agenda bisnis, atau perjalanan
              premium. Tanyakan tipe yang sesuai dengan jumlah penumpang dan
              rute Anda.
            </p>
          </div>
          <div className={styles.vehicleCardGrid}>
            {featuredKalimantanFleet.map((vehicle) => (
              <KalimantanVehicleCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
          <p className={styles.fleetNote}>
            Pilihan dan ketersediaan kendaraan dapat berbeda menurut kota dan
            tanggal perjalanan. Konfirmasi terlebih dahulu sebelum memesan.
          </p>
          <Link className={styles.inlineLink} href="/kalimantan/armada">
            Lihat semua pilihan armada{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <section className={styles.regions}>
          <div className={styles.regionsBackdrop} />
          <div className={styles.regionsContent}>
            <p className={styles.eyebrow}>Jangkauan perlu dikonfirmasi</p>
            <h2>
              Satu pulau.
              <br />
              Banyak kemungkinan rute.
            </h2>
            <p className={styles.regionsDescription}>
              Sebutkan kota asal dan tujuan Anda. Cakupan layanan, jadwal, serta
              ketersediaan driver akan kami cek terlebih dahulu.
            </p>
            <div className={styles.regionList}>
              {regions.map((region) => (
                <span key={region}>{region}</span>
              ))}
            </div>
            <a className={styles.lightButton} href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Cek rute dan ketersediaan <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <span className={styles.regionsFootnote}>
            Wilayah yang tercantum bukan konfirmasi ketersediaan untuk setiap kota.
          </span>
        </section>

        <section className={styles.steps}>
          <div className={styles.stepsHeading}>
            <p className={styles.eyebrow}>Tidak perlu ribet</p>
            <h2>Mulai dari rencana.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <CalendarDays size={20} aria-hidden="true" />
              <h3>Bagikan jadwal</h3>
              <p>Tanggal, kota jemput, tujuan, dan berapa lama perjalanan.</p>
            </li>
            <li>
              <span>02</span>
              <Users size={20} aria-hidden="true" />
              <h3>Cocokkan kebutuhan</h3>
              <p>Jumlah penumpang, bagasi, dan jenis agenda Anda.</p>
            </li>
            <li>
              <span>03</span>
              <CarFront size={20} aria-hidden="true" />
              <h3>Pastikan ketersediaan</h3>
              <p>Tim kami mengonfirmasi opsi sebelum Anda memesan.</p>
            </li>
          </ol>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqHeading}>
            <p className={styles.eyebrow}>Sebelum berangkat</p>
            <h2>
              Yang sering
              <br />
              ditanyakan.
            </h2>
            <a className={styles.inlineLink} href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Belum menemukan jawabannya? <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.faqList}>
            {faqs.slice(0, 3).map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
            <Link className={styles.inlineLink} href="/kalimantan/faq">
              Baca semua pertanyaan umum
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.ctaIcon}>
            <CarFront size={25} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <p className={styles.eyebrow}>Sudah ada tanggalnya?</p>
          <h2>
            Mulai dengan
            <br />
            satu pesan.
          </h2>
          <p className={styles.ctaDescription}>
            Kirim kota jemput, tujuan, tanggal, dan jumlah penumpang. Kami bantu
            cek opsi perjalanan yang tersedia.
          </p>
          <a className={styles.primaryButton} href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Konsultasi via WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <span className={styles.ctaFootnote}>
            Harga dan ketersediaan dikonfirmasi sesuai detail perjalanan.
          </span>
        </section>
      </div>

      <footer className={styles.siteFooter}>
        <a className={`${styles.siteBrand} ${styles.footerBrand}`} href="/kalimantan/">
          <Image
            className={styles.brandLogo}
            src="/kalimantan/logo.webp"
            alt=""
            width={1280}
            height={1280}
          />
          <span className={styles.brandText}>
            <span>VICKY</span>
            <span>RENTCAR NUSANTARA</span>
          </span>
        </a>
        <p>
          Sewa mobil untuk perjalanan di Kalimantan.
          <br />
          Kota dan ketersediaan dikonfirmasi sebelum pemesanan.
        </p>
        <nav aria-label="Navigasi footer Kalimantan">
          <a href="/kalimantan/sewa-mobil-alphard">Sewa Alphard</a>
          <a href="/kalimantan/sewa-mobil-driver">Sewa dengan driver</a>
          <a href="/kalimantan/sewa-mobil-hiace">Sewa Hiace</a>
          <a href="/kalimantan/paket-wisata">Paket Wisata</a>
          <a href="/kalimantan/layanan">Layanan</a>
          <a href="/kalimantan/armada">Armada</a>
          <a href="/kalimantan/faq">Pertanyaan umum</a>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
        <span className={styles.footerCopyright}>
          © {new Date().getFullYear()} Vicky Rentcar Nusantara
        </span>
      </footer>

      <a
        className={styles.floatingWhatsApp}
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Vicky Rentcar melalui WhatsApp"
      >
        <Image src="/icon/wa.png" alt="" width={54} height={54} />
      </a>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";

export const metadata: Metadata = {
  title: "Tentang VRN Rent Car Medan | Profil Perusahaan Rental Mobil",
  description:
    "Kenali VRN Rent Car Medan, layanan rental mobil untuk kebutuhan perjalanan dalam kota, bandara, bisnis, dan wisata Sumatera Utara.",
  keywords:
    "tentang vrn rent car medan, profil rental mobil medan, perusahaan rental mobil medan, transportasi medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/about-us",
  },
  openGraph: {
    title: "Tentang VRN Rent Car Medan | Profil Perusahaan",
    description:
      "Profil VRN Rent Car Medan dan pilihan layanan perjalanan dari Medan.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/about-us",
    locale: "id_ID",
  },
};

const services = [
  {
    title: "Bandara Kualanamu",
    description: "Antar-jemput dari Medan ke Bandara Kualanamu, dan sebaliknya.",
    href: "/medan/airport",
  },
  {
    title: "Dalam kota",
    description: "Untuk urusan kerja, agenda keluarga, atau berpindah lokasi.",
    href: "/medan/services",
  },
  {
    title: "Perjalanan Sumatera Utara",
    description: "Rencanakan perjalanan dari Medan menuju Berastagi, Parapat, atau Danau Toba.",
    href: "/medan/tourism",
  },
];

const officeAddress =
  "Jl. Sempurna Gg. Mawar No. 12, Dusun II, Sambirejo Timur, Medan Tembung, Sumatera Utara 20371";

export default function AboutUsPage() {
  return (
    <main className="bg-[var(--medan-background)] text-[var(--medan-text)]">
      <section className="overflow-hidden bg-[#f0ede6]">
        <div className="medan-container grid gap-8 py-8 sm:py-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14 lg:py-16">
          <div className="py-3 lg:py-8">
            <nav className="text-sm text-[var(--medan-muted)]" aria-label="Breadcrumb">
              <Link href="/medan" className="hover:text-[var(--medan-primary)]">
                VRN Rent Car Medan
              </Link>
              <span className="px-2">/</span>
              Tentang
            </nav>
            <p className="medan-eyebrow mt-10">Berbasis di Medan</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--medan-primary-dark)] sm:text-5xl lg:text-[3.75rem]">
              Kenal Medan. Siap mengantar lebih jauh.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#4f5965] sm:text-lg sm:leading-8">
              Kami membantu menyiapkan perjalanan dari Medan—mulai dari
              penjemputan di Kualanamu, keperluan di dalam kota, hingga rute
              menuju berbagai daerah di Sumatera Utara.
            </p>
            <a
              href={createMedanWhatsAppUrl({ type: "general" })}
              target="_blank"
              rel="noopener noreferrer"
              className="medan-button medan-button-primary mt-7"
            >
              Ceritakan rencana perjalanan
            </a>
          </div>

          <figure className="relative">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#d8d4cc] sm:aspect-[4/3]">
              <Image
                src="/medan/tentang.jpeg"
                alt="Kantor VRN Rent Car Medan di Sambirejo Timur"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover object-[center_58%]"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.12em] text-[var(--medan-muted)]">
              <span>Tempat kami berangkat setiap hari</span>
              <span className="shrink-0">Medan Tembung</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="medan-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="max-w-md">
            <p className="medan-eyebrow">Dari Medan, untuk perjalanan Anda</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[var(--medan-primary-dark)] sm:text-4xl">
              Perjalanan terasa lebih mudah saat detailnya jelas.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--medan-muted)]">
              Sampaikan tanggal, jumlah penumpang, titik jemput, dan tujuan
              kepada kami. Dari situ, kita bisa membahas kendaraan dan layanan
              yang paling sesuai dengan rencana Anda.
            </p>
          </div>
          <div className="border-t border-[var(--medan-border)]">
            {services.map(({ title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group grid gap-2 border-b border-[var(--medan-border)] py-5 sm:grid-cols-[minmax(10rem,0.7fr)_1.3fr_auto] sm:items-center sm:gap-6 sm:py-6"
              >
                <span className="text-lg font-semibold text-[var(--medan-primary-dark)]">
                  {title}
                </span>
                <span className="text-sm leading-6 text-[var(--medan-muted)]">
                  {description}
                </span>
                <span className="text-sm font-semibold text-[var(--medan-primary)] transition-transform group-hover:translate-x-1">
                  Lihat
                  <span className="sr-only"> layanan {title}</span>
                  <span aria-hidden="true"> &rarr;</span>
                </span>
              </Link>
            ))}
            <Link
              href="/medan/fleet"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--medan-primary)] hover:underline"
            >
              Kenali pilihan kendaraan kami
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--medan-primary-dark)] py-10 text-white sm:py-12">
        <div className="medan-container grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f2c14e]">
              Kunjungi kami
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
              Medan Tembung
            </h2>
            <address className="mt-2 max-w-2xl text-sm not-italic leading-6 text-white/75">
              {officeAddress}
            </address>
          </div>
          <a
            href="https://maps.app.goo.gl/bXqcSpsHzM4TH6iHA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center border-b border-white/60 text-sm font-semibold text-white hover:border-white"
          >
            Buka lokasi di peta
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}

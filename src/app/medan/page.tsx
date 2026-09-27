import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheckBig,
  PhoneCall,
} from "lucide-react";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";
import { cars } from "@/data/fleet-data";

export const metadata: Metadata = {
  title: "Rental Mobil Medan | Sewa Mobil di Medan untuk Harian, Wisata & Bandara",
  description:
    "Rental mobil Medan untuk perjalanan harian, bandara, keluarga, bisnis, dan wisata. Pilih kendaraan sesuai kebutuhan perjalanan Anda.",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan",
  },
};

const serviceOptions = [
  {
    title: "Transfer bandara",
    description:
      "Antar jemput Bandara Kualanamu dan perjalanan kota dengan jadwal yang jelas dan driver yang siap di titik penjemputan.",
    href: createMedanWhatsAppUrl({ type: "airport" }),
    label: "Tanya transfer",
  },
  {
    title: "Perjalanan keluarga",
    description:
      "Pilih kendaraan yang nyaman untuk liburan, keluarga, dan perjalanan antar kota dengan bagasi yang aman dan ruang yang cukup.",
    href: createMedanWhatsAppUrl({ type: "service", service: "keluarga" }),
    label: "Lihat pilihan",
  },
  {
    title: "Dinas & acara",
    description:
      "Mobilitas profesional untuk meeting, acara kantor, tamu penting, dan jadwal yang perlu presisi sejak awal.",
    href: createMedanWhatsAppUrl({ type: "service", service: "dinas" }),
    label: "Konsultasikan",
  },
  {
    title: "Wisata Medan",
    description:
      "Rute mudah untuk tujuan seperti Danau Toba, Berastagi, Bukit Lawang, dan perjalanan santai di sekitar kota.",
    href: createMedanWhatsAppUrl({ type: "destination", destination: "wisata Medan" }),
    label: "Cek rekomendasi",
  },
];

const fleetShowcase = cars
  .filter((car) =>
    [
      "Toyota Avanza",
      "Innova Reborn",
      "Innova Zenix",
      "Fortuner",
      "Alphard Gen 3",
      "Hiace Premio",
      "Toyota Rush",
    ].includes(car.name),
  )
  .slice(0, 3);

const planningIdeas = [
  {
    title: "Transfer bandara dan pulang pergi",
    description:
      "Anda tiba, langsung dijemput, perjalanan dimulai tanpa antre dan tanpa kebingungan rute.",
  },
  {
    title: "Keluarga & wisata akhir pekan",
    description:
      "Pilih mobil dengan bagasi cukup, kursi nyaman, dan driver yang tahu rute perjalanan keluarga Anda.",
  },
  {
    title: "Dinas, tamu, atau acara khusus",
    description:
      "Mobil yang rapi, penampilan profesional, dan jadwal yang bisa disesuaikan dengan kebutuhan Anda.",
  },
];

const contextLinks = [
  {
    label: "Armada",
    description: "Lihat model dan kategori kendaraan yang tersedia.",
    href: "/medan/fleet",
  },
  {
    label: "Testimoni",
    description: "Baca ulasan pelanggan pada halaman testimoni.",
    href: "/medan/testimonials",
  },
  {
    label: "Tentang VRN Medan",
    description: "Kenali informasi perusahaan dan layanan di Medan.",
    href: "/medan/about-us",
  },
];

const faqItems = [
  {
    question: "Apakah bisa pilih mobil sesuai kebutuhan?",
    answer:
      "Bisa. Kami membantu menyesuaikan jenis kendaraan dengan kebutuhan perjalanan, jumlah penumpang, dan rute yang akan ditempuh.",
  },
  {
    question: "Apakah tersedia sopir?",
    answer:
      "Ya. Di VRN Medan, Anda bisa memilih layanan dengan sopir maupun kebutuhan lain sesuai kebutuhan perjalanan Anda.",
  },
  {
    question: "Apakah melayani bandara Kualanamu?",
    answer:
      "Ya. Layanan antar jemput bandara adalah salah satu kebutuhan yang sering kami bantu, terutama untuk perjalanan yang harus tepat waktu.",
  },
  {
    question: "Apakah bisa untuk keluarga atau rombongan?",
    answer:
      "Bisa. Kami punya pilihan kendaraan untuk keluarga, rombongan, dan kebutuhan perjalanan panjang yang lebih nyaman.",
  },
  {
    question: "Bagaimana cara konsultasi?",
    answer:
      "Kirim kebutuhan Anda via WhatsApp, lalu kami akan rekomendasikan opsi kendaraan dan layanan yang paling cocok untuk jadwal Anda.",
  },
];

export default function MedanPage() {
  return (
    <main className="bg-[var(--medan-background)] text-[var(--medan-text)]">
      <section className="pt-7 pb-12 md:pt-16 md:pb-20">
        <div className="medan-container grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--medan-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-primary)] shadow-[var(--medan-shadow-subtle)] md:mb-6">
            PT.VICKY RENTCAR MEDAN
            </div>

            <h1 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-[var(--medan-text)] md:text-5xl md:leading-tight lg:text-6xl">
              Rental mobil di Medan untuk kebutuhan perjalanan yang jelas.
              <span className="text-[var(--medan-primary)] md:mt-2 md:block">
                Pilih kendaraan yang cocok untuk jadwal Anda.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-6 text-[var(--medan-muted)] md:mt-5 md:text-lg md:leading-7">
              Dari perjalanan bandara, keluarga, bisnis, hingga wisata, kami bantu pilih unit yang sesuai dengan jumlah penumpang, rute, dan jadwal keberangkatan.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={createMedanWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noreferrer"
                className="medan-button medan-button-primary inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                Konsultasikan kebutuhan via WhatsApp
              </a>

              <a
                href="#vehicle-discovery"
                className="medan-button medan-button-secondary inline-flex items-center justify-center gap-2"
              >
                Jelajahi kendaraan
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[var(--medan-muted)] md:mt-8 md:gap-3">
              {[
                "Bandara & transfer",
                "Perjalanan keluarga",
                "Bisnis & acara",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--medan-border)] bg-white px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--medan-border)] bg-white p-2 shadow-[var(--medan-shadow-floating)] md:rounded-[28px] md:p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 md:aspect-[4/3] md:rounded-[20px]">
                <Image
                  src="/medan/hero-section.webp"
                  alt="Mobil keluarga dan armada rental di Medan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="service-router" className="bg-[var(--medan-background)] py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Pilih layanan</p>
            <h2 className="medan-heading-2 mt-3">Mulai dari rencana perjalanan Anda.</h2>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {serviceOptions.map(({ title, description, href, label }, index) => (
              <article
                key={title}
                className="grid grid-cols-[2rem_1fr] gap-4 border-t border-[var(--medan-border)] py-5"
              >
                <span className="pt-1 text-sm font-semibold tabular-nums text-[var(--medan-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--medan-text)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">{description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicle-discovery" className="scroll-mt-20 py-16 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Pilih kendaraan</p>
            <h2 className="medan-heading-2 mt-3">Jelajahi kendaraan yang paling cocok untuk Anda.</h2>
          </div>

          <div className="divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {fleetShowcase.map((car) => (
              <article
                key={car.slug}
                className="grid gap-4 py-5 sm:grid-cols-[minmax(0,0.9fr)_1.1fr] sm:items-center sm:gap-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 45vw, 35vw"
                    className="object-cover object-[center_60%]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 sm:py-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--medan-muted)]">
                      {car.category}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--medan-text)]">{car.name}</h3>
                    <p className="mt-2 text-sm text-[var(--medan-muted)]">{car.specs.slice(0, 2).join(" · ")}</p>
                  </div>
                  <a
                    href={createMedanWhatsAppUrl({ type: "vehicle", vehicle: car.name })}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Tanya ketersediaan ${car.name}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--medan-border)] text-[var(--medan-primary)] hover:bg-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/medan/fleet"
              className="medan-button medan-button-secondary inline-flex items-center gap-2"
            >
              Lihat seluruh armada
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="travel-planning" className="bg-[#eef2f7] py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Perencanaan perjalanan</p>
            <h2 className="medan-heading-2 mt-3">Pilih jalur perjalanan yang paling tepat untuk Anda.</h2>
          </div>

          <div className="divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {planningIdeas.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 py-5 md:grid-cols-[minmax(15rem,0.9fr)_1.1fr] md:items-start md:gap-8 md:py-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-semibold leading-none tabular-nums text-[var(--medan-primary)]">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--medan-text)]">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-[var(--medan-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-[var(--medan-primary-dark)] py-12 text-white md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">Informasi lebih lanjut</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] md:text-4xl">
              Lihat detail sebelum memilih.
            </h2>
          </div>

          <div className="divide-y divide-white/20 border-y border-white/20 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {contextLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-4 py-5 md:px-5 md:first:pl-0 md:last:pr-0"
              >
                <span>
                  <span className="block text-lg font-semibold">{item.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-blue-100">{item.description}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-blue-200 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-20">
        <div className="medan-container max-w-4xl">
          <div className="mb-10 text-left md:text-center">
            <p className="medan-eyebrow">FAQ</p>
            <h2 className="medan-heading-2 mt-3">Pertanyaan yang sering muncul sebelum booking.</h2>
          </div>

          <div className="space-y-3">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="group rounded-[20px] border border-[var(--medan-border)] bg-[var(--medan-background)] p-4 md:p-5" open={question === "Apakah bisa pilih mobil sesuai kebutuhan?"}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[var(--medan-text)]">
                  {question}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--medan-primary)] group-open:rotate-45">
                    <CircleCheckBig className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-[var(--medan-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="final-contact" className="py-12 md:py-20">
        <div className="medan-container">
          <div className="rounded-2xl border border-[var(--medan-border)] bg-[var(--medan-primary)] px-6 py-8 text-white md:px-10 md:py-12">
            <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  Siap mulai perjalanan?
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                  Kirim kebutuhan Anda dan kami bantu pilih kendaraan yang tepat.
                </h2>
                <p className="mt-4 max-w-xl text-base text-blue-100">
                  Untuk perjalanan hari ini, liburan, keluarga, atau agenda bisnis, tim kami siap membantu menyesuaikan opsi yang paling cocok.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={createMedanWhatsAppUrl({ type: "general" })}
                  target="_blank"
                  rel="noreferrer"
                  className="medan-button medan-button-primary flex w-full items-center justify-center gap-2 bg-white text-[var(--medan-primary)] hover:bg-slate-100 sm:w-auto sm:justify-self-start"
                >
                  <PhoneCall className="h-4 w-4" />
                  Konsultasikan via WhatsApp
                </a>

                <a
                  href="tel:+6282363389893"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/85 hover:text-white hover:underline"
                >
                  <PhoneCall className="h-4 w-4" />
                  Hubungi admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link href="#top" className="sr-only">Kembali ke atas</Link>
    </main>
  );
}

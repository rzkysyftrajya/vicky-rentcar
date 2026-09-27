import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheckBig,
  Compass,
  MapPinned,
  PhoneCall,
  PlaneTakeoff,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";
import { cars } from "@/data/fleet-data";
import { topTourPackages } from "@/data/medan-tour-packages";

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
    title: "Antar jemput Bandara Kualanamu",
    description:
      "Layanan pickup dan drop-off yang membantu perjalanan datang dan berangkat lebih teratur, terutama untuk jadwal yang perlu tepat waktu.",
    href: createMedanWhatsAppUrl({ type: "airport" }),
    label: "Tanya transfer",
    icon: PlaneTakeoff,
  },
  {
    title: "Rental mobil untuk keluarga",
    description:
      "Pilih kendaraan yang nyaman untuk liburan keluarga, perjalanan antar kota, serta kebutuhan bagasi yang lebih banyak tanpa repot.",
    href: createMedanWhatsAppUrl({ type: "service", service: "keluarga" }),
    label: "Lihat pilihan",
    icon: Users,
  },
  {
    title: "Bisnis & acara dinas",
    description:
      "Mobilitas profesional untuk meeting, agenda kantor, tamu penting, dan perjalanan yang membutuhkan jadwal yang tepat sejak awal.",
    href: createMedanWhatsAppUrl({ type: "service", service: "dinas" }),
    label: "Konsultasikan",
    icon: ShieldCheck,
  },
  {
    title: "Wisata Medan & Sumatera Utara",
    description:
      "Rute mudah ke Danau Toba, Berastagi, Bukit Lawang, dan destinasi wisata favorit di sekitar Medan dengan perjalanan yang lebih nyaman.",
    href: createMedanWhatsAppUrl({ type: "destination", destination: "wisata Medan" }),
    label: "Cek rekomendasi",
    icon: Compass,
  },
];

const fleetShowcase = cars
  .filter((car) =>
    [
      "Toyota Avanza",
      "Innova Reborn",
      "Innova Zenix",
      "Fortuner",
      "Toyota Rush",
      "Hiace Premio",
    ].includes(car.name),
  )
  .slice(0, 6);

const planningIdeas = [
  {
    title: "Perjalanan keluarga dan liburan",
    description:
      "Pilih kendaraan dengan ruang bagasi yang cukup, kursi nyaman, dan rute yang lebih santai untuk perjalanan bersama keluarga.",
    tag: "Keluarga",
  },
  {
    title: "Tamu kantor atau kebutuhan bisnis",
    description:
      "Untuk mobilitas profesional, pilih armada yang rapi, bersih, dan dapat mengikuti jadwal kerja Anda dengan lebih presisi.",
    tag: "Bisnis",
  },
  {
    title: "Rombongan dan perjalanan wisata",
    description:
      "Unit seperti Hiace dan MPV membantu perjalanan lebih lancar untuk rombongan, keluarga besar, atau liburan bersama teman.",
    tag: "Rombongan",
  },
  {
    title: "Bandara & transfer antar kota",
    description:
      "Untuk tiba dan berangkat tepat waktu, Anda bisa pilih kendaraan sesuai jumlah penumpang dan kebutuhan bagasi di Bandara Kualanamu.",
    tag: "Airport",
  },
];

const contextLinks = [
  {
    label: "Armada",
    description: "Lihat model dan kategori kendaraan yang tersedia.",
    href: "/medan/fleet",
  },
  {
    label: "Layanan bandara",
    description: "Cek kebutuhan antar jemput Kualanamu di halaman khusus kami.",
    href: "/medan/airport",
  },
  {
    label: "Paket tour",
    description: "Temukan rekomendasi perjalanan ke Danau Toba dan Berastagi.",
    href: "/medan/paket-tour",
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
      "Ya. Di VRN Medan, Anda bisa memilih layanan dengan sopir untuk kebutuhan keluarga, bandara, maupun perjalanan bisnis.",
  },
  {
    question: "Apakah melayani antar jemput Bandara Kualanamu?",
    answer:
      "Ya. Layanan antar jemput bandara adalah salah satu kebutuhan yang sering kami bantu, terutama untuk perjalanan yang harus tepat waktu.",
  },
  {
    question: "Apakah bisa untuk rombongan atau wisata?",
    answer:
      "Bisa. Kami punya pilihan kendaraan untuk keluarga, rombongan, dan perjalanan wisata seperti Danau Toba, Berastagi, dan sekitarnya.",
  },
];

const needOptions = [
  {
    title: "Perjalanan keluarga",
    subtitle: "Nyaman untuk liburan dan mobilitas harian",
    vehicleNames: ["Toyota Avanza", "Innova Reborn", "Innova Zenix", "Toyota Rush"],
  },
  {
    title: "Tamu perusahaan",
    subtitle: "Rapi dan cocok untuk tuntutan jadwal kerja",
    vehicleNames: ["Fortuner", "Toyota Avanza", "Innova Zenix"],
  },
  {
    title: "Rombongan",
    subtitle: "Cocok untuk perjalanan bersama teman atau keluarga besar",
    vehicleNames: ["Hiace Premio", "Innova Reborn", "Toyota Rush"],
  },
  {
    title: "Wisata Medan",
    subtitle: "Untuk menuju kota wisata dan perjalanan santai",
    vehicleNames: ["Toyota Avanza", "Fortuner", "Innova Zenix", "Toyota Rush"],
  },
];

const processSteps = [
  "Tentukan kebutuhan perjalanan Anda",
  "Pilih kendaraan atau layanan yang sesuai",
  "Konsultasikan melalui WhatsApp",
  "Konfirmasi jadwal dan rute perjalanan",
];

export default function MedanPage() {
  return (
    <main className="bg-[var(--medan-background)] text-[var(--medan-text)]">
      <section className="pb-12 pt-7 md:pb-20 md:pt-16">
        <div className="medan-container grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--medan-border)] bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--medan-primary)] shadow-[var(--medan-shadow-subtle)] md:mb-6">
              PT. Vicky Rentcar Medan
            </div>

            <h1 className="max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--medan-text)] md:text-5xl md:leading-tight lg:text-6xl">
              Rental mobil Medan yang siap mendukung perjalanan Anda.
              <span className="mt-2 block text-[var(--medan-primary)]">
                Nyaman, praktis, dan sesuai kebutuhan.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-6 text-[var(--medan-muted)] md:mt-5 md:text-lg md:leading-7">
              Dari perjalanan bandara, keluarga, bisnis, hingga wisata ke Danau Toba dan Berastagi, kami bantu pilih kendaraan yang tepat untuk jadwal, jumlah penumpang, dan rute Anda.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href={createMedanWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noreferrer"
                className="medan-button medan-button-primary inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                Konsultasikan kebutuhan
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
              {["Bandara & transfer", "Keluarga", "Bisnis & dinas", "Wisata"].map((item) => (
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
                  alt="Layanan rental mobil Medan dan armada yang siap untuk keluarga dan wisata"
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

      <section id="service-router" className="py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Pilih layanan</p>
            <h2 className="medan-heading-2 mt-3">Pilih berdasarkan kebutuhan perjalanan Anda.</h2>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {serviceOptions.map(({ title, description, href, label, icon: Icon }, index) => (
              <article
                key={title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[var(--medan-border)] py-5"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3ff] text-[var(--medan-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-muted)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--medan-text)]">{title}</h3>
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

      <section id="vehicle-discovery" className="scroll-mt-20 bg-white py-16 md:py-20">
        <div className="medan-container">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="medan-eyebrow">Armada pilihan</p>
              <h2 className="medan-heading-2 mt-3">Pilih kendaraan yang paling cocok untuk rute Anda.</h2>
            </div>
            <Link href="/medan/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]">
              Lihat seluruh armada
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fleetShowcase.map((car) => (
              <article key={car.slug} className="overflow-hidden rounded-[22px] border border-[var(--medan-border)] bg-[var(--medan-background)] shadow-[var(--medan-shadow-subtle)]">
                <div className="relative aspect-[5/7] overflow-hidden bg-slate-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--medan-muted)]">
                    {car.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--medan-text)]">{car.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">
                    {car.specs.slice(0, 2).join(" · ")}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--medan-border)] pt-4">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--medan-primary)]">Ready</span>
                    <a
                      href={createMedanWhatsAppUrl({ type: "vehicle", vehicle: car.name })}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]"
                    >
                      Tanya ketersediaan
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="travel-planning" className="bg-[#eef2f7] py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Pilih berdasarkan kebutuhan</p>
            <h2 className="medan-heading-2 mt-3">Mobil seperti apa yang paling cocok untuk perjalanan Anda?</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {needOptions.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[var(--medan-border)] bg-white p-5 shadow-[var(--medan-shadow-subtle)]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-primary)]">{item.title}</p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--medan-text)]">{item.subtitle}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--medan-muted)]">
                  {item.vehicleNames.map((vehicle) => (
                    <li key={vehicle} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--medan-primary)]" aria-hidden="true" />
                      {vehicle}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-order" className="py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Cara pemesanan</p>
            <h2 className="medan-heading-2 mt-3">Prosesnya tetap simpel dan jelas.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-[22px] border border-[var(--medan-border)] bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold leading-none text-[var(--medan-primary)]">0{index + 1}</span>
                  <Route className="h-5 w-5 text-[var(--medan-primary)]" />
                </div>
                <p className="mt-4 text-base font-semibold text-[var(--medan-text)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="airport-transfer" className="bg-[var(--medan-primary-dark)] py-12 text-white md:py-20">
        <div className="medan-container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="medan-eyebrow text-blue-200">Antar jemput bandara</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Antar Jemput Bandara Kualanamu
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">
              Jika Anda butuh mobil saat kedatangan atau keberangkatan, kami siap membantu menyesuaikan jadwal, titik penjemputan, dan kendaraan yang cocok untuk jumlah penumpang serta bagasi Anda.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/medan/airport" className="medan-button medan-button-primary inline-flex items-center justify-center gap-2 bg-white text-[var(--medan-primary)] hover:bg-slate-100">
                Lihat layanan bandara
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={createMedanWhatsAppUrl({ type: "airport" })}
                target="_blank"
                rel="noreferrer"
                className="medan-button medan-button-secondary inline-flex items-center justify-center gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Konsultasi kebutuhan
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                  <MapPinned className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200">Kedatangan</p>
                  <p className="mt-2 text-base text-white/90">Driver menyesuaikan jadwal kedatangan dan titik pickup agar perjalanan dimulai tanpa hambatan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                  <PlaneTakeoff className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200">Keberangkatan</p>
                  <p className="mt-2 text-base text-white/90">Cocok untuk jadwal penerbangan, perjalanan keluarga, maupun kebutuhan perjalanan ke kota tujuan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200">Kebutuhan kendaraan</p>
                  <p className="mt-2 text-base text-white/90">Kami membantu memilih unit berdasarkan jumlah penumpang, bagasi, dan jenis perjalanan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tourism" className="py-12 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl">
            <p className="medan-eyebrow">Wisata & destinasi</p>
            <h2 className="medan-heading-2 mt-3">Jelajahi destinasi favorit dari Medan.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topTourPackages.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[22px] border border-[var(--medan-border)] bg-white shadow-[var(--medan-shadow-subtle)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-primary)]">{item.duration}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--medan-text)]">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.destinations.slice(0, 3).map((destination) => (
                      <span key={destination} className="rounded-full border border-[var(--medan-border)] bg-[var(--medan-background)] px-2.5 py-1 text-[11px] text-[var(--medan-muted)]">
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
          <div className="rounded-[28px] border border-[var(--medan-border)] bg-[var(--medan-primary)] px-6 py-8 text-white md:px-10 md:py-12">
            <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  Siap mulai perjalanan?
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                  Kirim kebutuhan Anda dan kami bantu pilih kendaraan yang tepat.
                </h2>
                <p className="mt-4 max-w-xl text-base text-blue-100">
                  Untuk perjalanan hari ini, liburan keluarga, kebutuhan bisnis, atau wisata ke sekitar Medan, tim kami siap membantu menyesuaikan opsi yang paling cocok.
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
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  MapPin,
  Plane,
  Route,
  Sparkles,
} from "lucide-react";
import { MedanWhatsAppButton, createMedanWhatsAppUrl } from "./MedanWhatsApp";

const services = [
  {
    number: "01",
    label: "BANDARA KUALANAMU",
    title: "Antar jemput bandara",
    description:
      "Atur penjemputan dari Kualanamu ke hotel, rumah, atau kantor di Medan. Kirim jadwal penerbangan dan titik tujuan saat menghubungi kami.",
    image: "/medan/layanan/vip-airport-transfer.webp",
    imageAlt: "Kendaraan untuk layanan antar jemput bandara",
    icon: Plane,
    context: { type: "airport" } as const,
  },
  {
    number: "02",
    label: "DALAM KOTA",
    title: "Mobilitas harian",
    description:
      "Untuk agenda kerja, urusan keluarga, atau beberapa tujuan dalam satu hari. Pilih kendaraan dan sampaikan rute serta durasi yang Anda perlukan.",
    image: "/medan/hero-section.webp",
    imageAlt: "Pilihan kendaraan rental untuk perjalanan di Medan",
    icon: CarFront,
    context: { type: "service", service: "perjalanan harian di Medan" } as const,
  },
  {
    number: "03",
    label: "PERJALANAN LUAR KOTA",
    title: "Medan dan Sumatera Utara",
    description:
      "Berangkat dari Medan menuju Berastagi, Parapat, atau kawasan Danau Toba. Ceritakan rute dan rencana singgah agar perjalanan dapat disiapkan.",
    image: "/medan/layanan/luxury-city-tour.webp",
    imageAlt: "Kendaraan untuk perjalanan wisata dari Medan",
    icon: Route,
    context: { type: "service", service: "perjalanan luar kota dari Medan" } as const,
  },
  {
    number: "04",
    label: "KEBUTUHAN KANTOR",
    title: "Kendaraan untuk perusahaan",
    description:
      "Dari penjemputan tamu hingga kendaraan untuk agenda kantor. Sampaikan jadwal, jumlah penumpang, dan pola penggunaan untuk dibicarakan.",
    image: "/medan/layanan/EXECUTIVE-CORPORATE.webp",
    imageAlt: "Kendaraan untuk kebutuhan perusahaan dan tamu bisnis",
    icon: BriefcaseBusiness,
    context: { type: "service", service: "kendaraan untuk kebutuhan perusahaan" } as const,
  },
];

const specialServices = [
  {
    title: "Mobil pengantin",
    description:
      "Pilih kendaraan untuk hari pernikahan dan bicarakan kebutuhan dekorasi serta susunan waktunya.",
    image: "/medan/layanan/VIP-WEDDING-CAR.webp",
    imageAlt: "Mobil untuk layanan perjalanan pernikahan",
    context: { type: "service", service: "mobil pengantin" } as const,
  },
  {
    title: "Perjalanan VIP",
    description:
      "Untuk tamu penting atau agenda khusus, sampaikan preferensi kendaraan dan detail penjemputan.",
    image: "/medan/layanan/EXECUTIVE-CORPORATE.webp",
    imageAlt: "Kendaraan untuk perjalanan VIP",
    context: { type: "service", service: "perjalanan VIP" } as const,
  },
  {
    title: "Sewa jangka panjang",
    description:
      "Butuh kendaraan untuk beberapa minggu atau bulan? Diskusikan durasi dan penggunaan sebelum menentukan unit.",
    image: "/medan/armada/INNOVA-ZENIX.webp",
    imageAlt: "Mobil untuk kebutuhan sewa jangka panjang",
    context: { type: "service", service: "sewa kendaraan jangka panjang" } as const,
  },
];

const bookingSteps = [
  {
    number: "1",
    title: "Ceritakan rencana",
    description: "Tanggal, waktu, titik jemput, tujuan, dan jumlah penumpang.",
  },
  {
    number: "2",
    title: "Tentukan kendaraan",
    description: "Sampaikan kebutuhan perjalanan agar pilihan unit bisa dibahas.",
  },
  {
    number: "3",
    title: "Konfirmasi detail",
    description: "Pastikan ketersediaan, rute, dan pengaturan penjemputan.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <section className="border-b border-[var(--medan-border)] bg-white">
        <div className="medan-container py-4 text-sm text-[var(--medan-muted)]">
          <Link className="hover:text-[var(--medan-primary)]" href="/medan/">
            Beranda Medan
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page" className="font-medium text-[var(--medan-text)]">
            Layanan
          </span>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3f6fa]">
        <div className="medan-container grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-20">
          <div>
            <p className="medan-eyebrow">VRN Rent Car · Medan</p>
            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-[var(--medan-text)] sm:text-4xl lg:text-5xl">
              Perjalanan Anda di Medan,{" "}
              <span className="text-[var(--medan-primary)]">dimulai dengan rencana yang jelas.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--medan-muted)]">
              Antar jemput Kualanamu, keperluan dalam kota, perjalanan ke
              Berastagi atau Danau Toba, hingga kendaraan untuk agenda kantor.
              Ceritakan rute dan jadwal Anda; kami bantu membahas pilihan
              kendaraan yang sesuai.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <MedanWhatsAppButton
                label="Tanyakan layanan"
                className="medan-button-primary w-full sm:w-auto"
              />
              <a
                href="#pilih-layanan"
                className="medan-button medan-button-secondary w-full sm:w-auto"
              >
                Lihat pilihan layanan
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--medan-muted)]">
              Berangkat dari Medan · Dalam kota dan luar kota
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--medan-border)] bg-white p-2 shadow-[var(--medan-shadow-floating)]">
              <Image
                src="/medan/hero-section.webp"
                alt="Armada kendaraan untuk perjalanan di Medan"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-lg border border-[var(--medan-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--medan-text)] shadow-[var(--medan-shadow-floating)] sm:bottom-4 sm:left-0">
              <MapPin className="h-4 w-4 text-[var(--medan-primary)]" aria-hidden="true" />
              Medan · Kualanamu · Sumatera Utara
            </div>
          </div>
        </div>
      </section>

      <section id="pilih-layanan" className="scroll-mt-20 py-14 sm:py-16 lg:py-20">
        <div className="medan-container">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="medan-eyebrow">Pilih sesuai rencana</p>
              <h2 className="medan-heading-2 mt-3">Layanan perjalanan dari Medan</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--medan-muted)]">
              Belum yakin memilih layanan? Kirim rute dan jadwal perjalanan,
              lalu tanyakan ketersediaan kendaraan.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="overflow-hidden rounded-xl border border-[var(--medan-border)] bg-white shadow-[var(--medan-shadow-subtle)]"
                >
                  <div className="relative aspect-[16/10] bg-[#e9eef4]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 580px"
                      className="object-contain"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[var(--medan-primary)]">
                      {service.label}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eef3f9] text-[var(--medan-primary)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tabular-nums text-[var(--medan-muted)]">
                          LAYANAN {service.number}
                        </p>
                        <h3 className="mt-1 text-xl font-bold tracking-tight text-[var(--medan-text)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-[var(--medan-muted)]">
                      {service.description}
                    </p>
                    <a
                      href={createMedanWhatsAppUrl(service.context)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-[var(--medan-border)] pt-4 text-sm font-semibold text-[var(--medan-primary)] hover:text-[var(--medan-primary-hover)]"
                    >
                      Tanyakan layanan ini
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--medan-border)] bg-white py-14 sm:py-16 lg:py-20">
        <div className="medan-container">
          <div className="max-w-2xl">
            <p className="medan-eyebrow">Untuk agenda tertentu</p>
            <h2 className="medan-heading-2 mt-3">Ada kebutuhan yang lebih spesifik?</h2>
            <p className="medan-body-muted mt-3">
              Sampaikan detail acara atau durasi sewa agar pilihan kendaraan
              dan pengaturannya dapat dibicarakan sejak awal.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {specialServices.map((service) => (
              <article
                key={service.title}
                className="grid gap-4 py-5 sm:grid-cols-[112px_1fr_auto] sm:items-center sm:gap-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#eef2f6] sm:aspect-square">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, 112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--medan-text)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--medan-muted)]">
                    {service.description}
                  </p>
                </div>
                <a
                  href={createMedanWhatsAppUrl(service.context)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--medan-primary)] hover:text-[var(--medan-primary-hover)]"
                >
                  Tanyakan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="medan-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="medan-eyebrow">Sebelum berangkat</p>
            <h2 className="medan-heading-2 mt-3">Cara mengatur perjalanan</h2>
            <p className="medan-body-muted mt-4">
              Informasi rute dan jadwal membantu kami mengecek kebutuhan
              kendaraan dengan lebih tepat.
            </p>
            <MedanWhatsAppButton
              label="Diskusikan perjalanan"
              className="mt-6 w-full sm:w-auto"
            />
          </div>

          <ol className="divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {bookingSteps.map((step) => (
              <li key={step.number} className="flex gap-5 py-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--medan-primary)] text-sm font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--medan-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--medan-muted)]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--medan-primary-dark)] py-12 text-white sm:py-14">
        <div className="medan-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-semibold text-white/75">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Sudah punya rencana?
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Tanyakan kendaraan untuk perjalanan Anda.
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Sertakan tanggal, rute, dan jumlah penumpang saat menghubungi kami.
            </p>
          </div>
          <MedanWhatsAppButton
            label="Hubungi via WhatsApp"
            className="shrink-0"
          />
        </div>
      </section>
    </>
  );
}

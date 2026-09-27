import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CarFront,
  CircleCheckBig,
  Compass,
  Luggage,
  MapPin,
  MapPinned,
  PhoneCall,
  PlaneTakeoff,
  Quote,
  Users,
} from "lucide-react";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";
import { cars } from "@/data/fleet-data";
import { topTourPackages } from "@/data/medan-tour-packages";
import { allTestimonials } from "@/data/testimonials-data";

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
    title: "Rental mobil",
    description:
      "Bandingkan kategori dan spesifikasi kendaraan, lalu pilih unit yang sesuai dengan jumlah penumpang serta rencana perjalanan.",
    href: "/medan/fleet",
    label: "Jelajahi armada",
    icon: CarFront,
  },
  {
    title: "Antar jemput Bandara Kualanamu",
    description:
      "Sampaikan waktu kedatangan atau keberangkatan, titik jemput, tujuan, dan kebutuhan bagasi untuk membahas pengaturan transfer.",
    href: "/medan/airport",
    label: "Lihat layanan bandara",
    icon: PlaneTakeoff,
  },
  {
    title: "Perjalanan bisnis & dinas",
    description:
      "Rencanakan kendaraan untuk agenda kantor, meeting, atau perjalanan kerja dengan jadwal dan tujuan yang dibahas sejak awal.",
    href: createMedanWhatsAppUrl({ type: "service", service: "bisnis dan dinas" }),
    label: "Konsultasikan agenda",
    icon: BriefcaseBusiness,
  },
  {
    title: "Wisata & perjalanan keluarga",
    description:
      "Tentukan kendaraan berdasarkan penumpang, bagasi, dan rute wisata—dari perjalanan di Medan hingga tujuan di Sumatera Utara.",
    href: "/medan/tourism",
    label: "Lihat pilihan wisata",
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

const needOptions = [
  {
    title: "Keluarga",
    description: "Sesuaikan ruang penumpang dan bagasi dengan rencana liburan atau mobilitas keluarga.",
    service: "perjalanan keluarga",
    vehicleNames: ["Toyota Avanza", "Innova Reborn", "Innova Zenix", "Toyota Rush"],
    icon: Users,
  },
  {
    title: "Rombongan",
    description: "Pertimbangkan kapasitas kendaraan untuk perjalanan bersama teman atau keluarga besar.",
    service: "perjalanan rombongan",
    vehicleNames: ["Hiace Premio", "Innova Reborn", "Toyota Rush"],
    icon: Luggage,
  },
  {
    title: "Bisnis & dinas",
    description: "Pilih kendaraan sesuai agenda kerja, titik tujuan, dan waktu perjalanan.",
    service: "perjalanan bisnis dan dinas",
    vehicleNames: ["Fortuner", "Toyota Avanza", "Innova Zenix"],
    icon: Building2,
  },
  {
    title: "Wisata",
    description: "Cocokkan kendaraan dengan jumlah peserta dan rute yang ingin dijelajahi.",
    service: "perjalanan wisata",
    vehicleNames: ["Toyota Avanza", "Fortuner", "Innova Zenix", "Toyota Rush"],
    icon: MapPinned,
  },
];

const processSteps = [
  {
    title: "Pilih kendaraan",
    description: "Mulai dari model, kategori, dan spesifikasi yang cocok untuk penumpang serta bagasi.",
    icon: CarFront,
  },
  {
    title: "Konsultasikan kebutuhan",
    description: "Sampaikan tujuan, jenis layanan, dan hal khusus yang perlu diperhatikan.",
    icon: PhoneCall,
  },
  {
    title: "Tentukan jadwal",
    description: "Bahas tanggal, waktu, titik jemput, rute, dan lama pemakaian.",
    icon: CalendarDays,
  },
  {
    title: "Konfirmasi perjalanan",
    description: "Pastikan kembali kendaraan dan pengaturan perjalanan sebelum berangkat.",
    icon: CircleCheckBig,
  },
];

const faqItems = [
  {
    question: "Apakah bisa pilih mobil sesuai kebutuhan?",
    answer:
      "Bisa. Jenis kendaraan dapat dibahas berdasarkan kebutuhan perjalanan, jumlah penumpang, dan rute yang akan ditempuh.",
  },
  {
    question: "Apakah tersedia sopir?",
    answer:
      "Anda bisa menanyakan pilihan layanan dengan sopir untuk kebutuhan keluarga, bandara, maupun perjalanan bisnis.",
  },
  {
    question: "Apakah melayani antar jemput Bandara Kualanamu?",
    answer:
      "Ya. Sampaikan waktu kedatangan atau keberangkatan, titik jemput, jumlah penumpang, dan tujuan saat menghubungi kami.",
  },
  {
    question: "Apakah bisa untuk rombongan atau wisata?",
    answer:
      "Bisa. Pilihan kendaraan dan rute dapat dibahas untuk perjalanan rombongan maupun wisata di Medan dan Sumatera Utara.",
  },
  {
    question: "Bagaimana cara mulai memesan?",
    answer:
      "Kirim rencana perjalanan melalui WhatsApp. Kami akan membahas pilihan kendaraan dan pengaturannya sebelum pemesanan dikonfirmasi.",
  },
  {
    question: "Informasi apa yang perlu disiapkan?",
    answer:
      "Siapkan tanggal, perkiraan waktu, lokasi jemput dan tujuan, jumlah penumpang, serta lama pemakaian. Sampaikan juga kendaraan yang dicari atau kebutuhan sopir jika sudah ditentukan.",
  },
];

const benefits = [
  {
    title: "Pilihan kendaraan lebih terarah",
    description:
      "Kategori dan spesifikasi armada membantu Anda membandingkan kendaraan menurut kebutuhan penumpang dan bagasi.",
  },
  {
    title: "Rencana perjalanan dibahas sejak awal",
    description:
      "Jadwal, titik jemput, tujuan, dan kebutuhan khusus bisa disampaikan sebelum pengaturan perjalanan dikonfirmasi.",
  },
  {
    title: "Kebutuhan dalam dan luar kota",
    description:
      "Halaman layanan mencakup perjalanan bandara, agenda kerja, keluarga, serta tujuan wisata di Sumatera Utara.",
  },
];

const medanTestimonial = (() => {
  const testimonial = allTestimonials.find(({ location }) => location === "Medan");

  if (!testimonial) {
    throw new Error("Medan testimonial data is missing.");
  }

  return testimonial;
})();

export default function MedanPage() {
  return (
    <main className="bg-[var(--medan-background)] text-[var(--medan-text)]">
      <section className="relative isolate overflow-hidden bg-[var(--medan-primary-dark)] text-white">
        <Image
          src="/medan/hero-section.webp"
          alt="Armada untuk perjalanan rental mobil di Medan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102a4c]/95 via-[#102a4c]/80 to-[#102a4c]/30" />
        <div className="medan-container relative grid min-h-[560px] items-center gap-10 py-16 md:min-h-[640px] md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              PT. Vicky Rentcar Medan
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] md:text-6xl">
              Rental mobil Medan untuk rute yang sudah Anda rencanakan.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 md:mt-6 md:text-lg">
              Pilih kendaraan untuk jemputan Kualanamu, agenda kerja, perjalanan keluarga, atau wisata ke berbagai tujuan di Sumatera Utara.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={createMedanWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noreferrer"
                className="medan-button medan-button-primary inline-flex items-center justify-center gap-2 bg-white text-[var(--medan-primary)] hover:bg-blue-50"
              >
                <PhoneCall className="h-4 w-4" />
                Konsultasikan kebutuhan via WhatsApp
              </a>
              <a
                href="#vehicle-discovery"
                className="medan-button inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 text-white hover:bg-white/10"
              >
                Lihat armada
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-50">
              {["Bandara Kualanamu", "Bisnis & dinas", "Keluarga", "Wisata"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--medan-accent)]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden justify-self-end lg:block">
            <div className="max-w-sm border-l border-white/40 pl-6">
              <p className="text-sm leading-7 text-blue-50">
                Ceritakan jumlah penumpang, jadwal, dan tujuan Anda. Dari sana, kendaraan dan pengaturan perjalanan bisa dibahas dengan lebih jelas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-router" className="py-16 md:py-24">
        <div className="medan-container">
          <div className="mb-9 max-w-2xl md:mb-12">
            <p className="medan-eyebrow">Pilihan layanan</p>
            <h2 className="medan-heading-2 mt-3">Mulai dari jenis perjalanan yang sedang Anda rencanakan.</h2>
          </div>
          <div className="grid gap-x-12 md:grid-cols-2">
            {serviceOptions.map(({ title, description, href, label, icon: Icon }, index) => (
              <article key={title} className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-[var(--medan-border)] py-6">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--medan-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--medan-muted)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[var(--medan-muted)]">{description}</p>
                  {href.startsWith("https://") ? (
                    <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]">
                      {label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]">
                      {label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicle-discovery" className="scroll-mt-20 bg-white py-16 md:py-24">
        <div className="medan-container">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
            <div className="max-w-2xl">
              <p className="medan-eyebrow">Armada pilihan</p>
              <h2 className="medan-heading-2 mt-3">Lihat model dan spesifikasi sebelum memilih.</h2>
            </div>
            <Link href="/medan/fleet" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]">
              Lihat seluruh armada
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {fleetShowcase.map((car) => (
              <article
                key={car.slug}
                id={`vehicle-${car.slug}`}
                className="scroll-mt-24 overflow-hidden border border-[var(--medan-border)] bg-[var(--medan-background)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-white">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--medan-muted)]">
                    {car.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{car.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">
                    {car.specs.slice(0, 2).join(" · ")}
                  </p>
                  <a
                    href={createMedanWhatsAppUrl({ type: "vehicle", vehicle: car.name })}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-[var(--medan-border)] pt-4 text-sm font-semibold text-[var(--medan-primary)]"
                  >
                    Tanyakan pilihan unit ini
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center md:mt-10">
            <Link href="/medan/fleet" className="medan-button medan-button-secondary inline-flex items-center gap-2">
              Lihat seluruh armada
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="travel-planning" className="overflow-hidden bg-[#eef2f7] py-16 md:py-24">
        <div className="medan-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-lg">
            <p className="medan-eyebrow">Pilih berdasarkan kebutuhan</p>
            <h2 className="medan-heading-2 mt-3">Kebutuhan perjalanan menentukan kendaraan yang tepat.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--medan-muted)]">
              Mulai dengan jumlah orang, tujuan, dan rencana bagasi. Lalu tanyakan unit yang sesuai dengan keperluan tersebut.
            </p>
          </div>
          <div className="divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {needOptions.map(({ title, description, service, vehicleNames, icon: Icon }, index) => (
              <article key={title} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 md:py-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--medan-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-primary)]">0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">{description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {vehicleNames.map((vehicleName) => {
                      const vehicle = fleetShowcase.find((car) => car.name === vehicleName);

                      return vehicle ? (
                        <a
                          key={vehicle.slug}
                          href={`#vehicle-${vehicle.slug}`}
                          className="text-sm font-medium text-[var(--medan-primary)] underline-offset-4 hover:underline"
                        >
                          {vehicle.name}
                        </a>
                      ) : null;
                    })}
                  </div>
                  <a
                    href={createMedanWhatsAppUrl({ type: "service", service })}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]"
                  >
                    Konsultasikan kebutuhan {title.toLowerCase()}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-order" className="py-16 md:py-24">
        <div className="medan-container">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="medan-eyebrow">Cara rental mobil di Medan</p>
            <h2 className="medan-heading-2 mt-3">Empat langkah untuk merapikan rencana perjalanan.</h2>
          </div>
          <ol className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className="relative border-t-2 border-[var(--medan-primary)] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold leading-none tracking-[-0.05em] text-[var(--medan-primary)]">
                    0{index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-[var(--medan-primary)]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="airport-transfer" className="overflow-hidden bg-[var(--medan-primary-dark)] text-white">
        <div className="grid lg:min-h-[520px] lg:grid-cols-2">
          <div className="medan-container flex flex-col justify-center py-16 md:py-20 lg:ml-auto lg:mr-0 lg:max-w-[600px] lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Antar jemput bandara</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-4xl">
              Transfer Bandara Kualanamu, direncanakan dari awal.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">
              Untuk perjalanan dari atau menuju bandara, sampaikan jadwal penerbangan, titik jemput, jumlah penumpang, dan alamat tujuan agar kebutuhan kendaraan bisa dibahas.
            </p>
            <Link
              href="/medan/airport"
              className="medan-button mt-7 inline-flex w-full items-center justify-center gap-2 bg-white text-[var(--medan-primary)] hover:bg-blue-50 sm:w-fit"
            >
              Tanyakan transfer bandara
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[300px] overflow-hidden bg-[#1a4777] lg:min-h-full">
            <Image
              src="/medan/layanan/layanan-antar-jemput-bandara.webp"
              alt="Kendaraan untuk perjalanan menuju atau dari Bandara Kualanamu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102a4c]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#102a4c]/20 lg:to-transparent" />
            <div className="absolute inset-x-5 bottom-5 space-y-3 sm:inset-x-8 sm:bottom-8">
              {[
                "Waktu dan titik penjemputan",
                "Jumlah penumpang dan kebutuhan bagasi",
                "Tujuan setelah tiba di Medan",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-medium text-white">
                  <MapPin className="h-4 w-4 shrink-0 text-blue-200" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tour-packages" className="bg-white py-16 md:py-24">
        <div className="medan-container">
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
            <div className="max-w-2xl">
              <p className="medan-eyebrow">Paket tour Medan</p>
              <h2 className="medan-heading-2 mt-3">Beberapa rute yang bisa menjadi awal rencana Anda.</h2>
            </div>
            <Link href="/medan/paket-tour" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--medan-primary)]">
              Lihat paket tour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {topTourPackages.map((item) => (
              <article key={item.id} className="flex flex-col border border-[var(--medan-border)] bg-[var(--medan-background)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-primary)]">{item.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.destinations.slice(0, 3).map((destination) => (
                      <span key={destination} className="border border-[var(--medan-border)] bg-white px-2.5 py-1 text-xs text-[var(--medan-muted)]">
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link href="/medan/paket-tour" className="medan-button medan-button-secondary inline-flex items-center gap-2">
              Lihat paket tour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why-vrn" className="py-16 md:py-24">
        <div className="medan-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="max-w-lg">
            <p className="medan-eyebrow">Pertimbangan yang jelas</p>
            <h2 className="medan-heading-2 mt-3">Kenali kendaraan dan rencana sebelum perjalanan dimulai.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--medan-muted)]">
              Untuk sewa mobil Medan, siapkan jumlah penumpang, jadwal, rute, dan kebutuhan bagasi. Detail ini membantu mengarahkan pilihan kendaraan.
            </p>
          </div>
          <div className="space-y-0 border-t border-[var(--medan-border)]">
            {benefits.map(({ title, description }, index) => (
              <article key={title} className="grid gap-3 border-b border-[var(--medan-border)] py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="text-sm font-semibold text-[var(--medan-primary)]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--medan-muted)]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#eef2f7] py-16 md:py-24">
        <div className="medan-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
          <div>
            <p className="medan-eyebrow">Pengalaman pelanggan</p>
            <h2 className="medan-heading-2 mt-3">Cerita perjalanan dari pelanggan Medan.</h2>
          </div>
          <figure className="relative border-l-2 border-[var(--medan-accent)] pl-6 md:pl-9">
            <Quote className="absolute -left-3 -top-4 h-7 w-7 bg-[#eef2f7] text-[var(--medan-primary)]" aria-hidden="true" />
            <blockquote className="text-xl leading-8 tracking-[-0.01em] text-[var(--medan-text)] md:text-2xl md:leading-9">
              “{medanTestimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <Image
                src={medanTestimonial.avatar}
                alt={medanTestimonial.alt}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{medanTestimonial.name}</p>
                <p className="mt-0.5 text-sm text-[var(--medan-muted)]">Pelanggan Medan</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-24">
        <div className="medan-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="max-w-md">
            <p className="medan-eyebrow">FAQ rental mobil Medan</p>
            <h2 className="medan-heading-2 mt-3">Hal yang sering ditanyakan sebelum perjalanan.</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--medan-muted)]">
              Belum menemukan jawaban yang Anda perlukan? Sampaikan rencana dan tujuan perjalanan saat berkonsultasi.
            </p>
          </div>
          <div className="divide-y divide-[var(--medan-border)] border-y border-[var(--medan-border)]">
            {faqItems.map(({ question, answer }, index) => (
              <details key={question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold">
                  {question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--medan-border)] text-[var(--medan-primary)] transition-transform group-open:rotate-45">
                    <CircleCheckBig className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pr-10 text-sm leading-6 text-[var(--medan-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="final-contact" className="px-4 py-12 md:px-6 md:py-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden bg-[var(--medan-primary)] px-6 py-9 text-white md:px-12 md:py-14">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">Rencanakan perjalanan Anda</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.03em] md:text-4xl">
                Sudah tahu tujuan dan jadwalnya? Mari tentukan kendaraan yang sesuai.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
                Kirim rute, jumlah penumpang, dan waktu perjalanan untuk mulai membahas pilihan rental mobil di Medan.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-start lg:pl-6">
              <a
                href={createMedanWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noreferrer"
                className="medan-button medan-button-primary flex w-full items-center justify-center gap-2 bg-white text-[var(--medan-primary)] hover:bg-blue-50 sm:w-auto"
              >
                <PhoneCall className="h-4 w-4" />
                Konsultasikan kebutuhan via WhatsApp
              </a>
              <Link
                href="/medan/fleet"
                className="medan-button inline-flex min-h-11 items-center justify-center gap-2 border border-white/40 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                Lihat seluruh armada
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

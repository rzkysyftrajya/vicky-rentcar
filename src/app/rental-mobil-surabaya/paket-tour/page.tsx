import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, CheckCircle2, ChevronRight, Clock3, Compass, MessageCircle, Route, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Paket Tour Surabaya | Pilihan Wisata dari Surabaya | VRN",
  description:
    "Paket tour Surabaya meliputi city tour, Bromo, Malang & Batu, perjalanan religi, dan Madura dengan pilihan yang bisa disesuaikan untuk kebutuhan perjalanan Anda.",
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/rental-mobil-surabaya/paket-tour/",
  },
  openGraph: {
    title: "Paket Tour Surabaya | Pilihan Wisata dari Surabaya | VRN",
    description:
      "Lihat pilihan paket tour Surabaya dari city tour hingga Bromo, Malang & Batu, religi, dan Madura. Konsultasikan jadwal perjalanan Anda.",
    url: "https://www.vickyrentcarnusantara.com/rental-mobil-surabaya/paket-tour/",
  },
};

const whatsappLink =
  "https://wa.me/6282363389893?text=" +
  encodeURIComponent("Halo VRN, saya ingin konsultasikan paket tour Surabaya.");

const tourCategories = [
  { name: "City Tour", href: "#city-tour", icon: Compass },
  { name: "Bromo", href: "#bromo", icon: Route },
  { name: "Malang & Batu", href: "#malang-batu", icon: CalendarDays },
  { name: "Religi", href: "#religi", icon: CheckCircle2 },
  { name: "Madura", href: "#madura", icon: ArrowRight },
];

const tourPackages = [
  {
    id: "city-tour-1",
    title: "City Tour Surabaya 1 Hari",
    duration: "1 Hari",
    summary: "Rangkaian perjalanan santai untuk menjelajahi ikon kota Surabaya dalam satu hari.",
    destinations: ["Tugu Pahlawan", "Monkasel", "Taman Bungkul", "Pantai Kenjeran"],
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-1-HARI.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-1-hari",
  },
  {
    id: "city-tour-2",
    title: "City Tour Surabaya 2 Hari 1 Malam",
    duration: "2 Hari 1 Malam",
    summary: "Pilihan perjalanan yang lebih santai untuk menikmati Surabaya dengan ritme yang lebih longgar.",
    destinations: ["Surabaya", "wilayah kota", "destinasi pilihan"],
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-2-HARI-1-MALAM.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-2h1m",
  },
  {
    id: "bromo",
    title: "Bromo Midnight",
    duration: "1 Hari",
    summary: "Perjalanan malam menuju Bromo dengan fokus pada sunrise dan pengalaman di kawasan pegunungan.",
    destinations: ["Bromo", "Penanjakan", "Lautan Pasir"],
    image: "/halaman-surabaya/PAKET-TOUR/BROMO-MIDNIGHT_TOUR-DARI-SURABAYA.webp",
    href: "/rental-mobil-surabaya/paket-tour/bromo-midnight-tour-surabaya",
  },
  {
    id: "malang-batu",
    title: "Surabaya – Malang – Batu",
    duration: "2 Hari 1 Malam",
    summary: "Perjalanan ke Malang dan Batu untuk menjelajahi destinasi populer di Jawa Timur.",
    destinations: ["Malang", "Batu", "Jatim Park", "Museum Angkut"],
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MALANG-BATU-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-malang-tour",
  },
  {
    id: "religi",
    title: "Surabaya Religi",
    duration: "1 Hari",
    summary: "Pilihan perjalanan religi yang mengunjungi beberapa lokasi ziarah dan ikonik di Surabaya.",
    destinations: ["Masjid Al Akbar", "Makam Sunan Ampel", "Kampung Arab Ampel"],
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-RELIGI-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-religi-tour",
  },
  {
    id: "madura",
    title: "Surabaya – Madura",
    duration: "1 Hari",
    summary: "Perjalanan dari Surabaya menuju Madura untuk menjelajahi destinasi pesisir dan budaya khas.",
    destinations: ["Jembatan Suramadu", "Bukit Jaddih", "Madura"],
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MADURA-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-madura-tour",
  },
];

const decisionGuides = [
  {
    title: "Ingin menjelajahi Surabaya",
    description: "Pilih City Tour Surabaya 1 Hari untuk jadwal singkat atau City Tour Surabaya 2 Hari 1 Malam untuk durasi yang lebih santai.",
    link: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-1-hari",
  },
  {
    title: "Ingin perjalanan malam ke Bromo",
    description: "Bromo Midnight sesuai untuk rencana perjalanan yang fokus pada sunrise dan pengalaman malam ke kawasan Bromo.",
    link: "/rental-mobil-surabaya/paket-tour/bromo-midnight-tour-surabaya",
  },
  {
    title: "Ingin mengunjungi Malang & Batu",
    description: "Surabaya – Malang – Batu cocok untuk perjalanan antarkota yang ingin menyesuaikan jadwal liburan dengan beberapa destinasi utama.",
    link: "/rental-mobil-surabaya/paket-tour/surabaya-malang-tour",
  },
  {
    title: "Kebutuhan perjalanan religi",
    description: "Surabaya Religi menempatkan fokus pada tempat ibadah dan lokasi spiritual yang relevan dengan itinerary kota Surabaya.",
    link: "/rental-mobil-surabaya/paket-tour/surabaya-religi-tour",
  },
  {
    title: "Ingin perjalanan ke Madura",
    description: "Surabaya – Madura dapat menjadi pilihan untuk agenda yang menargetkan perjalanan lintas pulau dengan fokus destinasi Madura.",
    link: "/rental-mobil-surabaya/paket-tour/surabaya-madura-tour",
  },
];

const serviceHighlights = [
  "Layanan perjalanan tour dari Surabaya untuk agenda keluarga, grup, dan kebutuhan wisata harian.",
  "Tim dapat membantu menyesuaikan rencana perjalanan dengan durasi, tujuan, serta kebutuhan kendaraan sesuai paket yang dipilih.",
  "Pilihan rental dengan driver tersedia untuk perjalanan yang lebih nyaman dan mudah diatur sesuai jadwal perjalanan.",
];

const fleetHighlights = [
  { name: "Toyota Avanza", note: "Pilihan untuk perjalanan keluarga dan mobilitas ringan." },
  { name: "Toyota Innova Reborn", note: "Cocok untuk perjalanan yang membutuhkan ruang lebih luas." },
  { name: "Toyota Innova Zenix", note: "Pilihan yang nyaman untuk keluarga atau rombongan menengah." },
  { name: "Toyota Hiace", note: "Relevan untuk kebutuhan rombongan. Lihat pilihan Hiace di halaman Armada." },
];

const bookingSteps = [
  "Tentukan paket tour yang sesuai dengan tujuan dan durasi perjalanan Anda.",
  "Sampaikan tanggal perjalanan dan lokasi penjemputan yang diinginkan.",
  "Beritahukan jumlah peserta serta kebutuhan kendaraan atau perjalanan tambahan.",
  "Lanjutkan konfirmasi melalui WhatsApp untuk koordinasi lanjutan.",
];

const faqs = [
  {
    question: "Paket tour apa saja yang tersedia dari Surabaya?",
    answer:
      "Paket yang tersedia saat ini mencakup City Tour Surabaya 1 Hari, City Tour Surabaya 2 Hari 1 Malam, Bromo Midnight, Surabaya – Malang – Batu, Surabaya Religi, dan Surabaya – Madura.",
  },
  {
    question: "Apakah tersedia perjalanan Bromo dari Surabaya?",
    answer:
      "Ya, paket Bromo Midnight tersedia untuk perjalanan dari Surabaya dengan fokus pada pengalaman sunrise di kawasan Bromo.",
  },
  {
    question: "Apakah ada pilihan perjalanan ke Malang dan Batu?",
    answer:
      "Ya. Paket Surabaya – Malang – Batu mencakup perjalanan ke Malang dan Batu untuk agenda wisata antar kota.",
  },
  {
    question: "Apakah tersedia perjalanan ke Madura?",
    answer: "Ya. Paket Surabaya – Madura tersedia untuk perjalanan dari Surabaya menuju destinasi di Madura.",
  },
  {
    question: "Bagaimana cara konsultasi paket tour?",
    answer:
      "Anda bisa menghubungi tim melalui WhatsApp dan menyampaikan tujuan perjalanan, tanggal, jumlah peserta, serta kebutuhan kendaraan atau itinerary yang ingin disesuaikan.",
  },
  {
    question: "Bagaimana menentukan kendaraan untuk rombongan?",
    answer:
      "Untuk kebutuhan rombongan, pilihan seperti Toyota Hiace relevan. Anda bisa melihat opsi yang tersedia di halaman Hiace untuk penyesuaian yang lebih spesifik.",
  },
];

export default function PaketTourSurabayaPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 lg:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100 backdrop-blur-sm">
            <Compass className="h-4 w-4" />
            Paket wisata dari Surabaya
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Paket Tour Surabaya
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                Pilihan perjalanan dari Surabaya untuk city tour, Bromo, Malang & Batu, religi, hingga Madura dengan durasi dan fokus yang bisa disesuaikan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  Konsultasi Paket Tour
                </a>
                <Link
                  href="#semua-paket"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Lihat Paket Tour
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/halaman-surabaya/PAKET-TOUR/hero-section.png"
                  alt="Paket wisata Surabaya"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16" aria-label="Pilih kategori paket tour">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Quick tour router</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Pilih jenis perjalanan yang paling sesuai</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tourCategories.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="group flex min-h-28 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
            >
              <Icon className="h-5 w-5 text-orange-600" />
              <span className="mt-4 text-base font-semibold text-slate-800">{name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="semua-paket" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Semua paket tour</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Pilih paket yang paling sesuai dengan rencana Anda</h2>
          </div>
          <Link href="/rental-mobil-surabaya" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">
            Kembali ke Surabaya
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tourPackages.map((tour) => (
            <article key={tour.id} id={tour.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  {tour.duration}
                </span>
              </div>

              <div className="flex h-full flex-col p-6">
                <h3 className="text-2xl font-bold text-slate-900">{tour.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tour.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tour.destinations.map((destination) => (
                    <span key={destination} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                      {destination}
                    </span>
                  ))}
                </div>

                <Link
                  href={tour.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
                >
                  Lihat detail paket
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Detail / pilih berdasarkan kebutuhan</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Pilih paket yang sesuai dengan tujuan perjalanan Anda</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {decisionGuides.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Route className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                <Link href={item.link} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800">
                  Lihat paket
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Layanan perjalanan</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Perjalanan yang mudah disesuaikan dengan kebutuhan Anda</h2>
          </div>

          <div className="space-y-4">
            {serviceHighlights.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Armada / pilih kendaraan</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Pilih kendaraan yang sesuai dengan jumlah penumpang dan kebutuhan perjalanan</h2>
            </div>
            <Link href="/rental-mobil-surabaya/hiace/" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">
              Lihat Hiace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {fleetHighlights.map((vehicle) => (
              <div key={vehicle.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
                  <CarFront className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{vehicle.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Proses konsultasi / booking</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Langkah mudah untuk menyesuaikan paket wisata Anda</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {bookingSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                {index + 1}
              </div>
              <p className="text-base leading-7 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Pertanyaan yang sering diajukan</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white shadow-2xl md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">Diskusi perjalanan</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Diskusikan Rencana Perjalanan Anda</h2>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <Link href="/rental-mobil-surabaya" className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:text-orange-800">
            <ChevronRight className="h-4 w-4" />
            Kembali ke halaman Surabaya
          </Link>
          <Link href="/rental-mobil-surabaya/hiace/" className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:text-orange-800">
            Lihat pilihan Hiace
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

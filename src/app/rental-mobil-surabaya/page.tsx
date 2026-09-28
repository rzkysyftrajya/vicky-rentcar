"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChevronRight,
  MapPin,
  MessageCircle,
  Plane,
  Route,
  Users,
} from "lucide-react";
import {
  carOptions,
  destinations,
  faqs as existingFaqs,
  popularCars,
  serviceAreas,
  testimonials,
} from "@/data/surabaya-page-data";

const whatsappNumber = "6282363389893";

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const tourPackages = [
  {
    title: "Surabaya City Tour 1 Hari",
    description:
      "Rangkaian kunjungan ke sejumlah tempat ikonik di Surabaya dalam satu perjalanan.",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-1-HARI.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-1-hari",
    duration: "1 hari",
  },
  {
    title: "Surabaya City Tour 2H1M",
    description:
      "Pilihan perjalanan beberapa hari untuk mengunjungi destinasi kota dengan tempo lebih santai.",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-CITY-TOUR-2-HARI-1-MALAM.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-city-tour-2h1m",
    duration: "2 hari 1 malam",
  },
  {
    title: "Bromo Midnight Tour",
    description:
      "Perjalanan dari Surabaya menuju kawasan Bromo untuk agenda wisata dini hari.",
    image: "/halaman-surabaya/PAKET-TOUR/BROMO-MIDNIGHT_TOUR-DARI-SURABAYA.webp",
    href: "/rental-mobil-surabaya/paket-tour/bromo-midnight-tour-surabaya",
    duration: "1 hari",
  },
  {
    title: "Surabaya–Malang–Batu",
    description:
      "Rencana perjalanan dari Surabaya untuk mengunjungi destinasi di Malang dan Batu.",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MALANG-BATU-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-malang-tour",
    duration: "2 hari 1 malam",
  },
  {
    title: "Surabaya Religi Tour",
    description:
      "Kunjungan ke beberapa tujuan religi yang tercantum pada pilihan tour Surabaya.",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-RELIGI-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-religi-tour",
    duration: "1 hari",
  },
  {
    title: "Surabaya–Madura Tour",
    description:
      "Perjalanan dari Surabaya untuk mengeksplorasi sejumlah tujuan wisata di Madura.",
    image: "/halaman-surabaya/PAKET-TOUR/SURABAYA-MADURA-TOUR.webp",
    href: "/rental-mobil-surabaya/paket-tour/surabaya-madura-tour",
    duration: "1 hari",
  },
];

const familyCarNames = [
  "Toyota Avanza",
  "Suzuki Ertiga",
  "Toyota Innova Reborn",
  "Toyota Innova Zenix",
];

const groupCarNames = [
  "Toyota Hiace Commuter",
  "Toyota Hiace Premio",
  "Isuzu Elf Minibus",
];

const recommendations = [
  {
    title: "Mobilitas ringkas di kota",
    copy: "Untuk agenda dalam kota dengan jumlah penumpang terbatas, pertimbangkan Honda Brio atau Toyota Avanza.",
    cars: ["Honda Brio", "Toyota Avanza"],
  },
  {
    title: "Perjalanan keluarga",
    copy: "Toyota Innova Reborn dan Toyota Innova Zenix tercantum sebagai pilihan MPV berkapasitas 7–8 orang.",
    cars: ["Toyota Innova Reborn", "Toyota Innova Zenix"],
  },
  {
    title: "Perjalanan dengan kebutuhan premium",
    copy: "Toyota Alphard Gen 3 tercantum dalam pilihan armada untuk perjalanan yang membutuhkan MPV premium.",
    cars: ["Toyota Alphard Gen 3"],
  },
  {
    title: "Rombongan",
    copy: "Toyota Hiace Commuter, Toyota Hiace Premio, dan Isuzu Elf Minibus tersedia untuk kebutuhan kapasitas lebih besar.",
    cars: ["Toyota Hiace Commuter", "Toyota Hiace Premio", "Isuzu Elf Minibus"],
  },
];

const selectedFaqs = [
  {
    question: "Bagaimana cara memesan rental mobil di Surabaya?",
    answer:
      "Hubungi tim melalui WhatsApp, sampaikan kendaraan, tanggal, lokasi penjemputan, dan rencana perjalanan. Tim akan membantu mengonfirmasi kebutuhan Anda.",
  },
  {
    question: "Apakah bisa menyewa mobil dengan sopir?",
    answer:
      "Ya. Tersedia pilihan sewa mobil dengan sopir untuk perjalanan di Surabaya dan tujuan di sekitarnya.",
  },
  {
    question: "Apakah melayani antar-jemput Bandara Juanda?",
    answer:
      "Layanan antar-jemput Bandara Juanda tercantum sebagai salah satu layanan Surabaya. Sampaikan jadwal penerbangan serta titik penjemputan atau pengantaran saat menghubungi tim.",
  },
  {
    question: "Apakah tersedia kendaraan untuk keluarga dan rombongan?",
    answer:
      "Pilihan armada yang tercantum mencakup MPV, Toyota Hiace Commuter, Toyota Hiace Premio, dan Isuzu Elf Minibus. Sesuaikan pilihan dengan jumlah penumpang dan barang bawaan.",
  },
  {
    question: "Apakah perjalanan dapat mencakup tujuan luar kota?",
    answer:
      "Data layanan mencakup perjalanan ke Malang, Batu, dan Bromo. Sampaikan tujuan dan rencana perjalanan agar tim dapat membantu memeriksa pilihan yang sesuai.",
  },
  {
    question: "Apakah ada pilihan paket wisata?",
    answer:
      "Ada beberapa paket yang tercantum, termasuk city tour Surabaya, Bromo, Malang–Batu, wisata religi, dan Madura. Lihat halaman paket untuk detail tiap perjalanan.",
  },
  {
    question: "Apakah tersedia kendaraan untuk kebutuhan bisnis atau dinas?",
    answer:
      "Layanan Surabaya mencantumkan perjalanan untuk meeting, kebutuhan bisnis, dan mobil operasional perusahaan. Sampaikan agenda serta titik tujuan saat berkonsultasi.",
  },
  {
    question: "Berapa lama durasi sewa harian?",
    answer: existingFaqs[1].a
      .replace(/minimal sewa/i, "Durasi yang tercantum untuk sewa harian adalah")
      .split(". Tersedia juga")[0]
      .replace(/[!]/g, "."),
  },
];

const documentationPhotos = [
  {
    src: "/halaman-surabaya/dokumentasi/dokumentasi-2.webp",
    alt: "Dokumentasi perjalanan Vicky Rentcar Surabaya",
  },
  {
    src: "/halaman-surabaya/dokumentasi/dokumentasi-8.webp",
    alt: "Dokumentasi armada dan layanan Surabaya",
  },
  {
    src: "/halaman-surabaya/dokumentasi/dokumentasi-16.webp",
    alt: "Dokumentasi perjalanan bersama Vicky Rentcar",
  },
  {
    src: "/halaman-surabaya/dokumentasi/dokumentasi-24.webp",
    alt: "Dokumentasi layanan rental mobil Surabaya",
  },
];

function getCarsByName(names: string[]) {
  return carOptions.filter((car) => names.includes(car.name));
}

function VehicleChips({ names }: { names: string[] }) {
  const cars = getCarsByName(names);

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {cars.map((car) => (
        <span
          key={car.name}
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
        >
          {car.name}
        </span>
      ))}
    </div>
  );
}

export default function SurabayaPage() {
  const customerStories = testimonials.filter((story) =>
    ["Budi Santoso", "Emily Chen", "Keluarga Wijaya"].includes(story.name),
  );

  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate min-h-[680px] overflow-hidden bg-slate-950">
        <Image
          src="/destinasi-wisata/surabaya.jpg"
          alt="Pemandangan Kota Surabaya"
          fill
          priority
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />
        <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 border border-orange-300/40 bg-orange-500/15 text-orange-100">
              Sewa mobil di Surabaya
            </Badge>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Rental Mobil Surabaya
              <span className="mt-3 block text-orange-300">
                untuk perjalanan Anda
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Pilih kendaraan untuk agenda harian, perjalanan bisnis, antar-jemput Bandara Juanda, liburan keluarga, atau wisata ke sejumlah tujuan di Jawa Timur.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <a
                  href={whatsappLink(
                    "Halo VRN Surabaya, saya ingin konsultasikan kebutuhan sewa mobil.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Konsultasikan kebutuhan
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/rental-mobil-surabaya/armada">
                  Lihat Armada
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Pilih layanan" className="relative z-10 -mt-10 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Rental mobil", href: "#armada", icon: CarFront },
            { label: "Dengan driver", href: "#dengan-driver", icon: Users },
            { label: "Bandara Juanda", href: "#bandara-juanda", icon: Plane },
            { label: "Wisata", href: "#wisata", icon: MapPin },
            { label: "Bisnis / dinas", href: "#bisnis-dinas", icon: BriefcaseBusiness },
            { label: "Rombongan", href: "#hiace", icon: Building2 },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex min-h-24 flex-col justify-center rounded-2xl px-3 py-4 text-center transition hover:bg-orange-50"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-orange-600 transition group-hover:-translate-y-0.5" />
              <span className="text-sm font-semibold text-slate-800">{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="armada" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Pilihan kendaraan
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Armada rental mobil Surabaya
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Kenali model kendaraan yang tercantum di armada Surabaya. Kapasitas dan fitur mengikuti informasi pada daftar armada.
              </p>
            </div>
            <Link
              href="/rental-mobil-surabaya/armada"
              className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:text-orange-800"
            >
              Lihat seluruh armada <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularCars.map((car, index) => (
              <article
                key={car.name}
                className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white ${
                  index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
                }`}
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-slate-100 ${index === 0 ? "lg:aspect-auto lg:min-h-72" : ""}`}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 33vw"}
                    className="object-contain transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-orange-700">{car.type}</p>
                  <h3 className="mt-1 text-2xl font-bold">{car.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Kapasitas tercantum: {car.capacity}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"
                    href={whatsappLink(
                      `Halo VRN Surabaya, saya ingin bertanya tentang ${car.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tanya tentang kendaraan <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Memilih kendaraan
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Kendaraan mana yang cocok untuk kebutuhan Anda?
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Kapasitas penumpang, agenda, dan barang bawaan dapat membantu menentukan pilihan. Berikut beberapa model armada sebagai titik awal.
              </p>
              <Button asChild className="mt-7 bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/rental-mobil-surabaya/armada">
                  Bandingkan pilihan armada
                </Link>
              </Button>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {recommendations.map((item, index) => (
                <article key={item.title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
                  <span className="text-2xl font-light text-orange-500">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                      {item.copy}
                    </p>
                    <VehicleChips names={item.cars} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dengan-driver" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[300px] overflow-hidden rounded-[2rem] bg-slate-100 sm:h-[360px] lg:h-[420px]">
            <Image
              src="/halaman-surabaya/home/perjalanan-dengan-driver.jpg"
              alt="Dokumentasi layanan rental mobil Surabaya dengan driver"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="py-4 lg:pl-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
              Perjalanan dengan driver
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Rental mobil dengan driver untuk agenda yang berbeda
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Pilihan sewa mobil Surabaya dengan sopir dapat dipertimbangkan untuk perjalanan dalam kota maupun tujuan di sekitar Surabaya. Sampaikan rencana, titik perjalanan, serta waktu yang Anda perlukan saat menghubungi tim.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["Bisnis", "Meeting dan kunjungan kerja."],
                ["Keluarga", "Agenda bersama keluarga."],
                ["Wisata", "Kunjungan ke destinasi kota."],
                ["Antar kota", "Perjalanan menuju Malang, Batu, atau Bromo."],
              ].map(([title, copy]) => (
                <div key={title} className="border-l-2 border-orange-400 pl-4">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink(
                "Halo VRN Surabaya, saya ingin bertanya tentang rental mobil dengan driver.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-700"
            >
              Konsultasikan perjalanan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="bandara-juanda" className="scroll-mt-24 overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl lg:min-h-[550px] lg:grid-cols-2">
          <div className="relative h-[260px] overflow-hidden rounded-[2rem] bg-slate-100 sm:h-[300px] lg:order-2 lg:h-[420px] lg:min-h-0">
            <Image
              src="/halaman-surabaya/home/antar-jemput-bandara.jpg"
              alt="Kendaraan untuk antar-jemput Bandara Juanda"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent lg:bg-gradient-to-l lg:from-slate-950/20 lg:to-transparent" />
          </div>
          <div className="flex items-center px-6 py-16 sm:px-10 lg:order-1 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
                Antar-jemput bandara
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Airport transfer Bandara Juanda
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Atur perjalanan menuju atau dari Bandara Juanda dengan menyampaikan jadwal penerbangan dan lokasi tujuan. Layanan ini mencakup kebutuhan kedatangan maupun keberangkatan.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Plane, title: "Kedatangan", copy: "Penjemputan dari bandara menuju alamat atau hotel." },
                  { icon: Route, title: "Keberangkatan", copy: "Pengantaran dari Surabaya menuju bandara." },
                ].map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                    <Icon className="mb-4 h-5 w-5 text-orange-300" />
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                ))}
              </div>
              <a
                href={whatsappLink(
                  "Halo VRN Surabaya, saya ingin konsultasikan antar-jemput Bandara Juanda.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200"
              >
                Tanya layanan Bandara Juanda <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="bisnis-dinas" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Mobilitas kerja
              </p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Rental mobil untuk bisnis dan dinas di Surabaya
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                Untuk meeting, kunjungan kerja, agenda kantor, dan perjalanan antar lokasi, sampaikan urutan tujuan dan rentang waktu perjalanan. Pilihan kendaraan dapat disesuaikan dengan jumlah penumpang dan agenda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Meeting", "Kunjungan kerja", "Agenda kantor", "Antar lokasi"].map((label) => (
                  <span key={label} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                    {label}
                  </span>
                ))}
              </div>
              <Button asChild className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                <a
                  href={whatsappLink(
                    "Halo VRN Surabaya, saya ingin konsultasikan kendaraan untuk agenda bisnis atau dinas.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasikan agenda
                </a>
              </Button>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-slate-100 sm:h-[320px] lg:h-[420px]">
              <Image
                src="/halaman-surabaya/home/rencana-perjalanan-kerja.png"
                alt="Dokumentasi perjalanan bisnis di Surabaya"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                <Building2 className="mb-3 h-5 w-5 text-orange-600" />
                <p className="font-semibold">Rencana perjalanan kerja</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Susun titik jemput, agenda, dan lokasi tujuan sebelum berkonsultasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/halaman-surabaya/home/toyota-innova-zenix.png"
              alt="Toyota Innova Zenix untuk perjalanan keluarga"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg">
              <p className="font-bold">Toyota Innova Zenix</p>
              <p className="mt-1 text-sm text-slate-600">Kapasitas armada tercantum: 7 orang</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-700">
              Perjalanan bersama keluarga
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Rental mobil untuk perjalanan keluarga
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              Pertimbangkan jumlah anggota keluarga dan barang bawaan saat menentukan kendaraan. Daftar armada Surabaya mencantumkan beberapa MPV dengan kapasitas untuk perjalanan bersama.
            </p>
            <div className="mt-7 divide-y divide-orange-200 border-y border-orange-200">
              {getCarsByName(familyCarNames).map((car) => (
                <div key={car.name} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <h3 className="font-bold">{car.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{car.type}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-sm text-slate-700">
                    {car.capacity}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Untuk wisata kota atau perjalanan ke tujuan sekitar Surabaya, sampaikan rute dan kebutuhan penumpang saat berkonsultasi.
            </p>
          </div>
        </div>
      </section>

      <section id="hiace" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge className="mb-5 bg-orange-100 text-orange-800 hover:bg-orange-100">
                Hiace & kendaraan rombongan
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Satu rencana perjalanan untuk keluarga besar atau tim
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Toyota Hiace Commuter, Toyota Hiace Premio, dan Isuzu Elf Minibus ada dalam daftar armada Surabaya. Pilihan ini dapat dipertimbangkan untuk rombongan, outing, atau perjalanan kantor.
              </p>
              <div className="mt-7 space-y-3">
                {getCarsByName(groupCarNames).map((car) => (
                  <div key={car.name} className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                    <span className="font-semibold">{car.name}</span>
                    <span className="text-sm text-slate-600">{car.capacity}</span>
                  </div>
                ))}
              </div>
              <a
                href={whatsappLink(
                  "Halo VRN Surabaya, saya ingin bertanya tentang kendaraan untuk rombongan.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-700"
              >
                Tanya kendaraan rombongan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-3">
              <div className="relative col-span-3 row-span-2 min-h-[370px] overflow-hidden rounded-[2rem] bg-slate-100">
                <Image
                  src="/halaman-surabaya/home/hiace.webp"
                  alt="Toyota Hiace Commuter"
                  fill
                  sizes="(max-width: 1024px) 60vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="/halaman-surabaya/home/interior-hiace-2.webp"
                  alt="Toyota Hiace Premio"
                  fill
                  sizes="(max-width: 1024px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center rounded-[1.5rem] bg-slate-900 p-5 text-white">
                <Users className="mb-3 h-6 w-6 text-orange-300" />
                <p className="text-lg font-bold">Perjalanan bersama</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Sesuaikan kendaraan dengan jumlah anggota dan barang bawaan rombongan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wisata" className="scroll-mt-24 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-11 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
              Jelajahi kota
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Wisata Surabaya dan tujuan di sekitarnya
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Rencanakan perjalanan dari satu tempat ke tempat lain. Berikut destinasi Surabaya yang tercantum pada data wisata.
            </p>
          </div>
          <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((place, index) => (
              <article
                key={place.name}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 || index === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute bottom-0 p-5 sm:p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-orange-200">
                    {place.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{place.name}</h3>
                  <p className="mt-1 max-w-md text-sm leading-6 text-slate-200">
                    {place.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Rencana perjalanan
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Paket tour dari Surabaya
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Pilih tema perjalanan yang sesuai, dari wisata kota hingga tujuan sekitar Jawa Timur.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-300">
              <Link href="/rental-mobil-surabaya/paket-tour">
                Lihat semua paket tour <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map((tour, index) => (
              <article
                key={tour.href}
                className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white ${
                  index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
                }`}
              >
                <Link
                  href={tour.href}
                  className={`relative block aspect-[16/10] overflow-hidden bg-slate-100 ${index === 0 ? "lg:aspect-auto lg:min-h-64" : ""}`}
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 33vw"}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800">
                    {tour.duration}
                  </span>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{tour.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tour.description}
                  </p>
                  <Link
                    href={tour.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"
                  >
                    Lihat detail <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-700">
              Jangkauan layanan
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Area layanan Surabaya dan sekitarnya
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Area berikut tercantum pada informasi layanan. Untuk perjalanan dengan beberapa titik, sampaikan rencana rute saat menghubungi tim.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-orange-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Mengapa memilih VRN
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Pilihan perjalanan yang tersusun sesuai kebutuhan
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Informasi layanan Surabaya mencakup rental harian, kendaraan dengan sopir, antar-jemput Bandara Juanda, perjalanan luar kota, mobil operasional, dan wisata keluarga. Pilih jenis perjalanan lalu sampaikan rencana Anda kepada tim.
              </p>
              <Link
                href="/rental-mobil-surabaya/layanan"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-700"
              >
                Lihat pilihan layanan <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {[
                {
                  icon: CarFront,
                  title: "Pilihan armada",
                  copy: "Daftar model kendaraan tersedia untuk kebutuhan perjalanan yang berbeda.",
                },
                {
                  icon: Users,
                  title: "Layanan dengan sopir",
                  copy: "Pilihan perjalanan untuk agenda dalam kota, keluarga, wisata, atau luar kota.",
                },
                {
                  icon: Plane,
                  title: "Transfer Juanda",
                  copy: "Antar-jemput bandara untuk kedatangan maupun keberangkatan.",
                },
                {
                  icon: Route,
                  title: "Rute perjalanan",
                  copy: "Area Surabaya dan beberapa tujuan sekitarnya tercantum dalam layanan.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="border-t border-slate-200 py-6">
                  <Icon className="mb-4 h-5 w-5 text-orange-600" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
              Cerita pelanggan
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pengalaman perjalanan bersama VRN
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Kutipan berikut diambil dari testimonial yang telah tercantum pada data Surabaya.
            </p>
          </div>
          <div className="space-y-5">
            {customerStories.map((story, index) => (
              <figure
                key={story.name}
                className={`rounded-3xl border border-white/10 p-6 sm:p-8 ${
                  index === 1 ? "bg-white text-slate-900" : "bg-white/5"
                }`}
              >
                <blockquote className="text-lg leading-8">
                  “{story.text}”
                </blockquote>
                <figcaption className={`mt-5 flex items-center gap-3 text-sm ${index === 1 ? "text-slate-600" : "text-slate-300"}`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>
                    <span className={`block font-semibold ${index === 1 ? "text-slate-900" : "text-white"}`}>
                      {story.name}
                    </span>
                    {story.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Dokumentasi
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Sekilas perjalanan di Surabaya
              </h2>
            </div>
            <Link
              href="/rental-mobil-surabaya/galeri"
              className="inline-flex items-center gap-2 font-semibold text-orange-700"
            >
              Buka galeri <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[220px_170px]">
            {documentationPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${
                  index === 0 ? "col-span-2 row-span-2 min-h-[300px]" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pertanyaan tentang sewa mobil Surabaya
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {selectedFaqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-orange-600 py-20 text-white">
        <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[60px] border-white/10" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-100">
              Rencanakan perjalanan
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ceritakan kebutuhan rental mobil Anda
            </h2>
            <p className="mt-4 leading-7 text-orange-50">
              Sampaikan tanggal, tujuan, jumlah penumpang, dan titik penjemputan untuk memulai konsultasi.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
              <a
                href={whatsappLink(
                  "Halo VRN Surabaya, saya ingin konsultasikan kebutuhan rental mobil.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/rental-mobil-surabaya/armada">Lihat Armada</Link>
            </Button>
          </div>
        </div>
      </section>

      <a
        href={whatsappLink(
          "Halo VRN, saya ingin konsultasikan kebutuhan rental mobil Surabaya.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi rental mobil Surabaya melalui WhatsApp"
        title="WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <Image
          src="/icon/wa.png"
          alt=""
          width={32}
          height={32}
          className="object-contain"
        />
      </a>
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronLeft,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sewa Hiace Surabaya untuk Rombongan & Wisata | VRN",
  description:
    "Rental Hiace Surabaya untuk rombongan, wisata, airport transfer, dan event. Pilih Hiace Commuter 14 penumpang atau Hiace Premio 12 penumpang sesuai kebutuhan Anda.",
  keywords:
    "sewa hiace surabaya, rental hiace surabaya, rental toyota hiace surabaya, hiace dengan driver surabaya, sewa hiace untuk rombongan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcar.com/rental-mobil-surabaya/hiace",
  },
};

const hiaceModels = [
  {
    name: "Hiace Commuter",
    capacity: "14 penumpang",
    image: "/halaman-surabaya/paket-hiace/hiace-commuter.png",
    fit: "Cocok untuk rombongan, keluarga besar, dan perjalanan grup yang membutuhkan ruang lebih.",
    note: "Pilihan yang tepat untuk kebutuhan group tour dan perjalanan bersama dalam jumlah banyak.",
  },
  {
    name: "Hiace Premio",
    capacity: "12 penumpang",
    image: "/halaman-surabaya/paket-hiace/hiace-premio.png",
    fit: "Cocok untuk wisata, acara, dan perjalanan dengan kelompok yang lebih fokus pada kenyamanan.",
    note: "Tersedia untuk kebutuhan perjalanan menyeluruh dengan kapasitas yang sesuai untuk rombongan menengah.",
  },
];

const useCases = [
  {
    title: "Wisata",
    description: "Hiace membantu perjalanan antar destinasi wisata dengan kapasitas yang cukup untuk keluarga atau rombongan.",
  },
  {
    title: "Rombongan",
    description: "Untuk trip kantor, keluarga besar, atau teman-teman yang bepergian bersama dengan kebutuhan ruang yang nyaman.",
  },
  {
    title: "Airport Transfer",
    description: "Berguna untuk antar-jemput Bandara Juanda, terutama saat rombongan datang bersama atau membawa bagasi lebih banyak.",
  },
  {
    title: "Perjalanan Keluarga",
    description: "Memberikan ruang yang lebih nyaman dibanding mobil kecil untuk perjalanan santai bersama anggota keluarga.",
  },
  {
    title: "Event / Acara",
    description: "Relevan untuk acara keluarga, wedding, atau kebutuhan transportasi tamu yang bergerak dalam satu grup.",
  },
];

const packageOptions = [
  {
    name: "City Tour Surabaya",
    image: "/halaman-surabaya/paket-hiace/hiace-city-tour-surabaya-1-hari.webp",
    description: "Kegiatan wisata perkotaan dengan jadwal yang mudah diatur untuk rombongan.",
  },
  {
    name: "Tour Madura",
    image: "/halaman-surabaya/paket-hiace/hiace-tour-madura-1-hari.webp",
    description: "Pilihan perjalanan antar kota dan wisata yang cocok untuk group kecil maupun besar.",
  },
  {
    name: "Antar-jemput Bandara Juanda",
    image: "/halaman-surabaya/paket-hiace/hiace-antar-jemput-bandara-xl.webp",
    description: "Layanan transfer bandara yang cocok untuk perjalanan kelompok dan bagasi lebih banyak.",
  },
  {
    name: "Bromo Midnight",
    image: "/halaman-surabaya/paket-hiace/hiace-bromo-midnight.webp",
    description: "Tersedia untuk perjalanan malam dan agenda wisata yang memerlukan mobil berkapasitas besar.",
  },
  {
    name: "Malang-Batu",
    image: "/halaman-surabaya/paket-hiace/hiace-tour-malang-batu.webp",
    description: "Transit antar kota dengan kapasitas untuk rombongan dan aktivitas wisata satu hari.",
  },
  {
    name: "Event / Wedding",
    image: "/halaman-surabaya/paket-hiace/hiace-premio-luxury-event.webp",
    description: "Kendaraan yang cocok untuk kebutuhan event, wedding, dan mobilisasi tamu dalam satu grup.",
  },
];

export default function SurabayaHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN%2C%20saya%20ingin%20konsultasikan%20rental%20Hiace%20Surabaya.";

  return (
    <main className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-28 text-white lg:pb-28 lg:pt-36">
        <div className="absolute inset-0">
          <Image
            src="/halaman-surabaya/paket-hiace/hiace-commuter.png"
            alt="Hiace Commuter Surabaya"
            fill
            className="object-contain opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Link
            href="/rental-mobil-surabaya"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Badge className="mb-5 border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                Hiace Surabaya
              </Badge>

              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                Sewa Hiace Surabaya untuk Rombongan & Wisata
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Pilih Toyota Hiace yang sesuai kebutuhan perjalanan Anda di Surabaya, mulai dari wisata keluarga, angkutan rombongan, perjalanan kantor, hingga transfer Bandara Juanda.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-orange-500 px-7 py-6 text-base font-semibold text-white hover:bg-orange-600"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Konsultasikan Kebutuhan Hiace
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 px-7 py-6 text-base font-semibold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="#model-hiace">
                    <Car className="mr-2 h-5 w-5" />
                    Lihat Model Hiace
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                <Image
                  src="/halaman-surabaya/paket-hiace/hiace-commuter.png"
                  alt="Hiace Commuter Surabaya"
                  width={800}
                  height={520}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-5 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                <div className="rounded-2xl border border-orange-400/20 bg-orange-500/10 p-3">
                  <div className="font-bold text-white">Hiace Commuter</div>
                  <div className="mt-1 text-orange-100">14 penumpang</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-bold text-white">Hiace Premio</div>
                  <div className="mt-1 text-slate-300">12 penumpang</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-bold text-white">Untuk</div>
                  <div className="mt-1 text-slate-300">Wisata & grup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4">
        <div className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
          {[
            { icon: Users, label: "Kapasitas sesuai model", value: "14 & 12 penumpang" },
            { icon: Car, label: "Pilihan model", value: "Commuter & Premio" },
            { icon: ShieldCheck, label: "Layanan yang cocok", value: "Rombongan & wisata" },
            { icon: MapPin, label: "Area layanan", value: "Surabaya & sekitarnya" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
              <item.icon className="h-8 w-8 text-orange-500" />
              <p className="mt-3 text-sm text-slate-500">{item.label}</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="model-hiace" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-700">Model Hiace</Badge>
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Pilih kapasitas sesuai kebutuhan perjalanan Anda</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {hiaceModels.map((model) => (
            <div key={model.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
              <div className="relative aspect-[3/2] w-full bg-slate-100">
                <Image src={model.image} alt={model.name} fill className="object-contain" />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">{model.name}</h3>
                  <Badge className="bg-slate-100 text-slate-700">{model.capacity}</Badge>
                </div>

                <p className="mt-4 text-base leading-relaxed text-slate-600">{model.fit}</p>
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-orange-50 p-4 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                  <span>{model.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-slate-900 text-white">Perbandingan Model</Badge>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Pilih Hiace yang sesuai kebutuhan grup Anda</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Model</th>
                  <th className="px-6 py-4 font-semibold">Kapasitas</th>
                  <th className="px-6 py-4 font-semibold">Cocok untuk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-6 py-5 font-semibold text-slate-900">Hiace Commuter</td>
                  <td className="px-6 py-5 text-slate-700">14 penumpang</td>
                  <td className="px-6 py-5 text-slate-700">Rombongan, wisata, dan perjalanan grup yang membutuhkan ruang lebih</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-slate-900">Hiace Premio</td>
                  <td className="px-6 py-5 text-slate-700">12 penumpang</td>
                  <td className="px-6 py-5 text-slate-700">Wisata, perjalanan keluarga, dan kebutuhan grup dengan fokus pada kenyamanan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-700">Kegunaan Hiace</Badge>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Hiace untuk kebutuhan perjalanan yang beragam</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {useCases.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="paket" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-white/10 text-slate-200">Hiace untuk Wisata</Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Pilihan paket yang sesuai kebutuhan tour dan perjalanan</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packageOptions.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-800/80 shadow-lg">
                <div className="relative h-52 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-orange-300">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Pilihan paket</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-10 text-white shadow-2xl md:px-10 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <Badge className="bg-orange-500/20 text-orange-200">Booking & Konsultasi</Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Butuh Hiace Surabaya untuk rombongan atau wisata?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Konsultasikan kebutuhan tanggal, kapasitas, dan rute Anda. Kami akan membantu memilih model Hiace yang paling sesuai.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Button
                size="lg"
                className="bg-orange-500 px-8 py-6 text-base font-semibold text-white hover:bg-orange-600"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Konsultasikan Kebutuhan Hiace
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
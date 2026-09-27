import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tourPackages } from "@/data/medan-tour-packages";
import { Phone, MapPin, Calendar, Users } from "lucide-react";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Tour Medan | Wisata Danau Toba, Berastagi & Bukit Lawang",
  description: "Pilih paket tour Medan untuk destinasi seperti Danau Toba, Berastagi, Bukit Lawang, dan city tour dengan jadwal yang bisa disesuaikan.",
  keywords: "paket tour medan, paket wisata medan, tour danau toba dari medan, paket berastagi medan, wisatakuliah",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/paket-tour",
  },
};

export default function PaketTourPage() {
  const whatsappLink = "https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20ingin%20membahas%20pilihan%20paket%20tour%20di%20Medan.";

  return (
    <main className={`${inter.className} min-h-screen bg-slate-50`}>
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 via-emerald-700 to-emerald-600 text-white">
        <div className="medan-container relative grid gap-8 py-14 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
              <Calendar className="h-4 w-4" />
              Paket Tour Medan
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Rencanakan perjalanan Anda dari Medan.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50 md:text-lg">
              Pilih destinasi favorit Anda untuk Berastagi, Danau Toba, Bukit Lawang, atau city tour Medan yang lebih santai dan mudah disesuaikan dengan jadwal.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-emerald-50" asChild>
                <Link href="#paket">
                  Lihat pilihan paket
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Bahas itinerary
                </a>
              </Button>
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/medan/paket-tour/paket-wisata-danau-toba-3-day-2-night.webp"
                alt="Paket wisata Danau Toba dari Medan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="paket" className="py-16 md:py-20">
        <div className="medan-container">
          <div className="mb-10 max-w-3xl">
            <p className="medan-eyebrow">Pilihan perjalanan</p>
            <h2 className="medan-heading-2 mt-3">Paket wisata yang bisa disesuaikan dengan kebutuhan Anda.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tourPackages.map((tour) => (
              <article key={tour.id} className="group overflow-hidden rounded-2xl border border-[var(--medan-border)] bg-white shadow-[var(--medan-shadow-subtle)] transition hover:-translate-y-1 hover:shadow-[var(--medan-shadow-floating)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-800 shadow-sm">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--medan-text)]">{tour.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--medan-muted)]">{tour.description}</p>

                  <div className="mt-5">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--medan-text)]">
                      <MapPin className="h-4 w-4 text-[var(--medan-primary)]" />
                      Destinasi utama
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.slice(0, 4).map((dest, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-[var(--medan-muted)]">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="mt-6 w-full bg-[var(--medan-primary)] hover:bg-[var(--medan-primary-dark)]" asChild>
                    <a href={`${whatsappLink}&text=${encodeURIComponent(`Halo VRN, saya tertarik ${tour.name} (${tour.duration}). Bisa kirim detail itinerarynya.`)}`} target="_blank" rel="noopener noreferrer">
                      Bahas itinerary
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--medan-border)] bg-white p-6 text-center shadow-[var(--medan-shadow-subtle)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--medan-primary)]">Butuh rencana yang lebih spesifik?</p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--medan-text)]">Bicarakan paket custom untuk keluarga, grup, atau perjalanan bisnis.</h3>
            <Button className="mt-6 bg-[var(--medan-primary)] hover:bg-[var(--medan-primary-dark)]" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Tanya paket custom
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}

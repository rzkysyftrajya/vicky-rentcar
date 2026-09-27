import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlaneTakeoff,
} from "lucide-react";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";

export const metadata: Metadata = {
  title: "Kontak Rental Mobil Medan | WhatsApp, Telepon & Kantor VRN Rent Car",
  description:
    "Hubungi VRN Rent Car Medan untuk kebutuhan sewa mobil, bandara, perjalanan keluarga, dan kebutuhan bisnis di Medan.",
  keywords:
    "kontak rental mobil medan, nomor whatsapp rental mobil medan, alamat vrn rent car medan, customer service rental mobil medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://pt.vrnrentcarmedan.com/medan/contact",
  },
  openGraph: {
    title: "Kontak Rental Mobil Medan | VRN Rent Car",
    description:
      "Hubungi VRN Rent Car Medan untuk kebutuhan transportasi dan reservasi.",
    type: "website",
    url: "https://pt.vrnrentcarmedan.com/medan/contact",
    locale: "id_ID",
  },
};

const quickLinks = [
  { title: "Antar jemput bandara", href: "/medan/airport", icon: PlaneTakeoff },
  { title: "Lihat armada", href: "/medan/fleet", icon: ArrowRight },
  { title: "Paket perjalanan", href: "/medan/tourism", icon: MapPin },
];

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722727809753!2d98.77453057416143!3d3.593831696380299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1768311197443!5m2!1sid!2sid";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--medan-background)] text-[var(--medan-text)]">
      <section className="border-b border-[var(--medan-border)] bg-white">
        <div className="medan-container grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="medan-eyebrow">VRN Rent Car · Medan</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[var(--medan-primary-dark)] md:text-6xl">
              Mari bicarakan perjalanan Anda.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--medan-muted)] md:text-lg">
              Perlu kendaraan untuk agenda di Medan, perjalanan keluarga, atau
              antar jemput bandara? Hubungi kami untuk membahas rute, jadwal,
              dan pilihan kendaraan.
            </p>
          </div>

          <a
            href={createMedanWhatsAppUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-32 items-center justify-between gap-5 rounded-2xl bg-[var(--medan-primary-dark)] p-6 text-white transition-colors hover:bg-[var(--medan-primary)] md:p-8"
          >
            <span>
              <span className="flex items-center gap-2 text-sm font-semibold text-blue-200">
                <MessageCircle className="h-4 w-4" />
                Hubungi langsung
              </span>
              <span className="mt-3 block text-xl font-semibold md:text-2xl">
                Chat melalui WhatsApp
              </span>
              <span className="mt-1 block text-sm text-white/70">
                +62 823-6338-9893
              </span>
            </span>
            <ArrowDownRight className="h-7 w-7 shrink-0 text-blue-200 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="medan-container grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-[var(--medan-border)] pb-5">
              <div>
                <p className="medan-eyebrow">Saluran kontak</p>
                <h2 className="medan-heading-2 mt-2">Pilih cara yang nyaman.</h2>
              </div>
            </div>

            <div className="divide-y divide-[var(--medan-border)]">
              <a
                href="tel:+6282363389893"
                className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3ff] text-[var(--medan-primary)]">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-[var(--medan-muted)]">
                    Telepon
                  </span>
                  <span className="mt-1 block font-semibold text-[var(--medan-text)]">
                    +62 823-6338-9893
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-[var(--medan-muted)] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:info@vrnrentcarmedan.com"
                className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3ff] text-[var(--medan-primary)]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-[var(--medan-muted)]">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-semibold text-[var(--medan-text)]">
                    info@vrnrentcarmedan.com
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 text-[var(--medan-muted)] transition-transform group-hover:translate-x-1" />
              </a>

              <div className="grid min-h-24 grid-cols-[2.5rem_1fr] items-center gap-4 py-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3ff] text-[var(--medan-primary)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-[var(--medan-muted)]">
                    Area layanan
                  </span>
                  <span className="mt-1 block font-semibold text-[var(--medan-text)]">
                    Medan, Sumatera Utara
                  </span>
                </span>
              </div>
            </div>
          </div>

          <aside className="h-fit border-t-2 border-[var(--medan-accent)] bg-white p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[var(--medan-primary)]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-muted)]">
                  Jam operasional
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[var(--medan-primary-dark)]">
                  24 jam
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--medan-muted)]">
                  Senin hingga Minggu, termasuk hari libur.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[var(--medan-border)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--medan-muted)]">
                Mungkin Anda mencari
              </p>
              <nav className="mt-3 divide-y divide-[var(--medan-border)]">
                {quickLinks.map(({ title, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-medium text-[var(--medan-text)] hover:text-[var(--medan-primary)]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[var(--medan-primary)]" />
                      {title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[var(--medan-muted)] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      <section id="map" className="pb-12 md:pb-20">
        <div className="medan-container">
          <div className="mb-6 flex flex-col gap-3 border-t border-[var(--medan-border)] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="medan-eyebrow">Temukan kami</p>
              <h2 className="medan-heading-2 mt-2">Medan, Sumatera Utara.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--medan-muted)]">
              Kami melayani area Medan dan sekitarnya. Hubungi kami untuk
              membahas titik jemput dan tujuan perjalanan.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--medan-border)] bg-[#e8edf2]">
            <iframe
              src={mapEmbedUrl}
              className="h-[320px] w-full border-0 md:h-[440px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta lokasi VRN Rent Car Medan"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

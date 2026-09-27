import Link from "next/link";
import { ClientYear } from "@/components/ui/client-year";
import { createMedanWhatsAppUrl } from "./MedanWhatsApp";

const exploreLinks = [
  { label: "Armada", href: "/medan/fleet" },
  { label: "Layanan", href: "/medan/services" },
  { label: "Wisata", href: "/medan/tourism" },
  { label: "Paket Tour", href: "/medan/paket-tour" },
];

const companyLinks = [
  { label: "Tentang Kami", href: "/medan/about-us" },
  { label: "FAQ", href: "/medan/faq" },
  { label: "Testimoni", href: "/medan/testimonials" },
  { label: "Hubungi Kami", href: "/medan/contact" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-[var(--medan-border)] bg-[var(--medan-primary-dark)] pb-20 text-white">
      <div className="medan-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold">VRN Rent Car Medan</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            Layanan rental mobil untuk kebutuhan bisnis, wisata, dan perjalanan di Medan dan sekitarnya.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Jelajahi</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white hover:underline" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Bantuan & Perusahaan</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white hover:underline" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Kontak</h3>
          <p className="mt-4 text-sm leading-6 text-white/75">
            Medan, Sumatera Utara, Indonesia
          </p>
          <a className="mt-2 block text-sm text-white/75 hover:text-white hover:underline" href="tel:+6282363389893">
            +62 823-6338-9893
          </a>
          <a
            className="mt-3 inline-flex min-h-11 items-center text-sm text-white/75 hover:text-white hover:underline"
            href={createMedanWhatsAppUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="medan-container flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© <ClientYear /> VRN Rent Car Medan.</p>
          <Link href="/medan/contact" className="hover:text-white hover:underline">Hubungi Kami</Link>
        </div>
      </div>
    </footer>
  );
}

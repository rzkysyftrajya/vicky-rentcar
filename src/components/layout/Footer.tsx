import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageZoom } from "../ui/image-zoom";
import { ClientYear } from "@/components/ui/client-year";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold"
            >
              <div className="bg-white rounded-md p-1">
                <ImageZoom
                  src="/logoVRN.png"
                  alt="Logo PT.VICKY RENTCAR NUSANTARA"
                  data-ai-hint="vrn letters"
                  width={32}
                  height={32}
                  isZoomable={false}
                />
              </div>
              <span className="font-extrabold text-lg">
                PT.VICKY RENTCAR NUSANTARA
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 max-w-sm">
              Pilihan utama Anda untuk sewa mobil di seluruh penjuru Nusantara
              dengan pelayanan premium dan armada terawat.
            </p>
            <div className="flex mt-6 space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link
                  href="https://www.instagram.com/rentcarmedanvicky/?igsh=M2o3N2liZW10Mm9p"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link
                  href="https://www.tiktok.com/@ptvickyrentalnusantara"
                  aria-label="TikTok"
                >
                  <Image
                    src="/socmedicon/tiktok.png"
                    alt="Logo TikTok"
                    data-ai-hint="tiktok logo"
                    width={20}
                    height={20}
                    className="filter-brightness-0 filter-invert"
                  />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground">
              Perusahaan
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Keberlanjutan
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground">
              Layanan
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/fleet"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Armada Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/sewa-mobil-pengantin-medan"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Sewa Mobil Pengantin
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/rental-mobil-untuk-event-medan"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Rental Untuk Event
                </Link>
              </li>
              <li>
                <Link
                  href="/long-term-rental"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Sewa Korporat
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/city-tour-medan"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  City Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Semua Layanan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground">
              Legal & Info
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/30 text-center text-primary-foreground/80">
          <p>
            &copy; <ClientYear /> PT.VICKY RENTCAR NUSANTARA. Semua hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

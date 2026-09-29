import Image from "next/image";
import { ArrowDown, ArrowUpRight, Menu } from "lucide-react";
import styles from "@/app/kalimantan/kalimantan.module.css";

type KalimantanNavigationProps = {
  bookingUrl: string;
};

const vehicleLinks = [
  { href: "/kalimantan/sewa-mobil-alphard", label: "Toyota Alphard" },
  { href: "/kalimantan/sewa-mobil-hiace", label: "Toyota Hiace" },
  { href: "/kalimantan/sewa-mobil-driver", label: "Mobil dengan driver" },
];

export default function KalimantanNavigation({
  bookingUrl,
}: KalimantanNavigationProps) {
  return (
    <header className={styles.siteHeader}>
      <a className={styles.siteBrand} href="/kalimantan/">
        <Image
          className={styles.brandLogo}
          src="/kalimantan/logo.webp"
          alt=""
          width={1280}
          height={1280}
        />
        <span className={styles.brandText}>
          <span>VICKY</span>
          <span>RENTCAR NUSANTARA</span>
        </span>
      </a>

      <nav className={styles.siteNav} aria-label="Navigasi Kalimantan">
        <details className={styles.navDropdown}>
          <summary>
            Sewa mobil <ArrowDown size={13} aria-hidden="true" />
          </summary>
          <div className={styles.navDropdownContent}>
            {vehicleLinks.map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </details>
        <a href="/kalimantan/paket-wisata">Paket Wisata</a>
        <a href="/kalimantan/layanan">Layanan</a>
        <a href="/kalimantan/armada">Armada</a>
        <a href="/kalimantan/faq">FAQ</a>
      </nav>

      <details className={styles.mobileNav}>
        <summary aria-label="Buka menu navigasi Kalimantan">
          <Menu size={20} aria-hidden="true" />
          <span>Menu</span>
          <ArrowDown size={13} aria-hidden="true" />
        </summary>
        <nav className={styles.mobileNavContent} aria-label="Menu Kalimantan">
          <details>
            <summary>
              Sewa mobil <ArrowDown size={13} aria-hidden="true" />
            </summary>
            <div className={styles.mobileSubmenu}>
              {vehicleLinks.map(({ href, label }) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </details>
          <a href="/kalimantan/paket-wisata">Paket Wisata</a>
          <a href="/kalimantan/layanan">Layanan</a>
          <a href="/kalimantan/armada">Armada</a>
          <a href="/kalimantan/faq">FAQ</a>
        </nav>
      </details>

      <a
        className={styles.headerCta}
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Hubungi kami <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  );
}

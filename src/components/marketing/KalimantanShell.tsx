import type { ReactNode } from "react";
import Image from "next/image";
import styles from "@/app/kalimantan/kalimantan.module.css";
import KalimantanNavigation from "@/components/marketing/KalimantanNavigation";

type KalimantanShellProps = {
  children: ReactNode;
};

export default function KalimantanShell({ children }: KalimantanShellProps) {
  return (
    <div className={styles.page}>
      <KalimantanNavigation
        bookingUrl={`https://wa.me/6282363389893?text=${encodeURIComponent("Halo Vicky Rentcar Kalimantan, saya ingin konsultasi sewa mobil.")}`}
      />
      {children}
      <footer className={styles.siteFooter}>
        <a className={`${styles.siteBrand} ${styles.footerBrand}`} href="/kalimantan/">
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
        <p>
          Sewa mobil untuk perjalanan di Kalimantan.
          <br />
          Kota dan ketersediaan dikonfirmasi sebelum pemesanan.
        </p>
        <nav aria-label="Navigasi footer Kalimantan">
          <a href="/kalimantan/sewa-mobil-alphard">Sewa Alphard</a>
          <a href="/kalimantan/sewa-mobil-driver">Sewa dengan driver</a>
          <a href="/kalimantan/sewa-mobil-hiace">Sewa Hiace</a>
          <a href="/kalimantan/paket-wisata">Paket Wisata</a>
          <a href="/kalimantan/layanan">Layanan</a>
          <a href="/kalimantan/armada">Armada</a>
          <a href="/kalimantan/faq">FAQ</a>
        </nav>
        <span className={styles.footerCopyright}>
          © {new Date().getFullYear()} Vicky Rentcar Nusantara
        </span>
      </footer>
    </div>
  );
}

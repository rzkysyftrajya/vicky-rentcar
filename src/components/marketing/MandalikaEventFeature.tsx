import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPinned,
  UsersRound,
} from "lucide-react";
import styles from "@/app/kalimantan/kalimantan.module.css";

const eventWhatsAppUrl =
  "https://wa.me/6282363389893?text=" +
  encodeURIComponent(
    "Halo Vicky Rentcar, saya ingin bertanya tentang paket wisata Mandalika MotoGP tanggal 9 Oktober 2026."
  );

export default function MandalikaEventFeature() {
  return (
    <section className={styles.eventFeature} aria-labelledby="mandalika-title">
      <div className={styles.eventFeatureCopy}>
        <p className={styles.eventLabel}>
          <span className={styles.eventFeatureBadge}>Perjalanan spesial</span>
          <CalendarDays size={15} aria-hidden="true" />
          Rencana tanggal · 9 Oktober 2026
        </p>
        <h2 id="mandalika-title">
          Rasakan serunya
          <br />
          MotoGP Mandalika.
        </h2>
        <p>
          Bukan sekadar perjalanan biasa. Rencanakan keberangkatan ke Lombok,
          transportasi selama di area tujuan, dan waktu perjalanan bersama tim
          kami.
        </p>
        <div className={styles.eventFeatureDetails}>
          <span>
            <MapPinned size={15} aria-hidden="true" />
            Rute dan titik jemput dibicarakan bersama
          </span>
          <span>
            <UsersRound size={15} aria-hidden="true" />
            Pilihan kendaraan menyesuaikan rombongan
          </span>
        </div>
        <div className={styles.eventFeatureActions}>
          <Link href="/kalimantan/paket-wisata">
            Jelajahi paket wisata
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <a href={eventWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            Konsultasi perjalanan MotoGP
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={styles.eventFeatureVisual} aria-label="Jadwal perjalanan">
        <span>MANDALIKA · LOMBOK</span>
        <strong>09</strong>
        <span>OKTOBER <b>2026</b></span>
        <i>Rencanakan perjalanan Anda</i>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import KalimantanShell from "@/components/marketing/KalimantanShell";
import KalimantanVehicleCard from "@/components/marketing/KalimantanVehicleCard";
import styles from "@/app/kalimantan/kalimantan.module.css";
import {
  hiaceOptions,
  kalimantanFleet,
} from "@/data/kalimantan-fleet";

export const metadata: Metadata = {
  title: "Pilihan Armada Sewa Mobil Kalimantan",
  description:
    "Jelajahi pilihan armada untuk perjalanan di Kalimantan. Tanyakan tipe kendaraan dan ketersediaannya sesuai kota, jumlah penumpang, dan tanggal.",
  alternates: {
    canonical: "https://www.vickyrentcarnusantara.com/kalimantan/armada",
  },
};

export default function ArmadaKalimantanPage() {
  return (
    <KalimantanShell>
      <main className={styles.subpage}>
        <section className={styles.subpageHero}>
          <div className={styles.subpageHeroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Kalimantan <span>/</span> Armada
            </p>
            <h1>Kendaraan yang pas, bukan asal ada.</h1>
            <p className={styles.subpageLead}>
              Pilihan kendaraan untuk perjalanan keluarga, agenda bisnis, dan
              kebutuhan premium. Tipe serta ketersediaan mengikuti kota dan
              tanggal perjalanan Anda.
            </p>
          </div>
          <div className={`${styles.subpageVisual} ${styles.fleetHeroVisual}`}>
            <Image
              src="/kalimantan/hero-section-armada.webp"
              alt="Pilihan armada Vicky Rentcar untuk perjalanan keluarga, bisnis, dan kebutuhan premium"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
        </section>

        <section className={styles.vehicleCatalog}>
          <div className={styles.vehicleCatalogHeading}>
            <div>
              <p className={styles.eyebrow}>Pilihan armada</p>
              <h2>Kenali kendaraannya.</h2>
            </div>
            <p>
              Gambar mengikuti pilihan yang tersedia di katalog armada. Tanyakan
              kota layanan dan ketersediaan tipe pilihan Anda.
            </p>
          </div>
          <div className={styles.vehicleCatalogGrid}>
            {kalimantanFleet.map((vehicle) => (
              <KalimantanVehicleCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        </section>

        <section className={styles.hiaceCatalog}>
          <div>
            <p className={styles.eyebrow}>Pilihan rombongan</p>
            <h2>Hiace</h2>
            <p>
              Hiace tetap tersedia untuk ditanyakan. Gambar kendaraan belum
              tersedia di folder armada dan dapat ditambahkan kemudian.
            </p>
          </div>
          <div className={styles.hiaceCatalogOptions}>
            {hiaceOptions.map((name) => (
              <div key={name}>
                <span>{name}</span>
                <a
                  href={`https://wa.me/6282363389893?text=${encodeURIComponent(`Halo Vicky Rentcar, saya ingin menanyakan ketersediaan ${name} di Kalimantan.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tanyakan ketersediaan ${name}`}
                >
                  Tanyakan <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <p className={styles.fleetCatalogNote}>
          Gambar dan daftar model merupakan referensi pilihan armada.
          Ketersediaan, kota layanan, kapasitas, dan tipe kendaraan harus
          dikonfirmasi sebelum pemesanan.
        </p>
      </main>
    </KalimantanShell>
  );
}

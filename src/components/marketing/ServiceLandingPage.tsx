import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CarFront, CircleCheck, MapPinned } from "lucide-react";
import KalimantanShell from "@/components/marketing/KalimantanShell";
import styles from "@/app/kalimantan/kalimantan.module.css";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  occasions: string[];
  whatsappMessage: string;
  image?: string;
  imageAlt?: string;
};

export default function ServiceLandingPage({
  eyebrow,
  title,
  description,
  benefits,
  occasions,
  whatsappMessage,
  image,
  imageAlt,
}: ServiceLandingPageProps) {
  const whatsappUrl = `https://wa.me/6282363389893?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <KalimantanShell>
      <main className={styles.subpage}>
        <section className={styles.subpageHero}>
          <div className={styles.subpageHeroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Kalimantan <span>/</span> {eyebrow}
            </p>
            <h1>
              {title}
            </h1>
            <p className={styles.subpageLead}>
              {description}
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanyakan ketersediaan
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <Link className={styles.textLink} href="/kalimantan/paket-wisata">
                Lihat paket wisata
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <p className={styles.heroNote}>
              Kota layanan, jadwal, dan ketersediaan dikonfirmasi sebelum
              pemesanan.
            </p>
          </div>
          <div className={styles.subpageVisual}>
            {image ? (
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            ) : (
              <div className={styles.vehicleImagePlaceholder}>
                <CarFront size={42} strokeWidth={1.2} aria-hidden="true" />
                <span>Foto Hiace akan ditambahkan</span>
              </div>
            )}
            <div className={styles.imageCaption}>
              <span className={styles.captionRule} />
              Kendaraan dan rute disesuaikan dengan perjalanan Anda.
            </div>
            <span className={styles.imageIndex}>KAL / VRN</span>
          </div>
        </section>

        <section className={styles.subpageDetails}>
          <div className={styles.subpageSectionHeading}>
            <div>
              <p className={styles.eyebrow}>Direncanakan sesuai kebutuhan</p>
              <h2>
                Perjalanan yang
                <br />
                terasa lebih mudah.
              </h2>
            </div>
            <p>
              Ceritakan tujuan, jadwal, dan siapa saja yang ikut. Tim kami akan
              membantu mencocokkan kendaraan dengan kebutuhan perjalanan Anda.
            </p>
          </div>
          <div className={styles.subpageDetailGrid}>
            <article className={styles.subpageDetailCard}>
              <div className={styles.subpageDetailMark}>
                <CircleCheck size={19} strokeWidth={1.5} aria-hidden="true" />
                <span>01 / Kenyamanan perjalanan</span>
              </div>
              <h3>Yang bisa Anda pertimbangkan</h3>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <CircleCheck size={16} aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.subpageDetailCard}>
              <div className={styles.subpageDetailMark}>
                <MapPinned size={19} strokeWidth={1.5} aria-hidden="true" />
                <span>02 / Perjalanan Anda</span>
              </div>
              <h3>Sesuai agenda dan rute</h3>
              <ul>
                {occasions.map((occasion) => (
                  <li key={occasion}>
                    <CircleCheck size={16} aria-hidden="true" />
                    <span>{occasion}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.subpageCta}>
          <div>
            <p className={styles.eyebrow}>Mulai dari rencana</p>
            <h2>Sudah tahu tanggal dan tujuan?</h2>
            <p>
              Kirimkan kota penjemputan, rute, tanggal, dan jumlah penumpang.
              Kami bantu cek pilihan yang tersedia.
            </p>
          </div>
          <a
            className={styles.lightButton}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi via WhatsApp
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>
      </main>
    </KalimantanShell>
  );
}

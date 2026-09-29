import Image from "next/image";
import { ArrowUpRight, CarFront } from "lucide-react";
import type { KalimantanVehicle } from "@/data/kalimantan-fleet";
import styles from "@/app/kalimantan/kalimantan.module.css";

type KalimantanVehicleCardProps = {
  vehicle: KalimantanVehicle;
};

export default function KalimantanVehicleCard({
  vehicle,
}: KalimantanVehicleCardProps) {
  const inquiryUrl =
    "https://wa.me/6282363389893?text=" +
    encodeURIComponent(
      `Halo Vicky Rentcar Kalimantan, saya ingin menanyakan ketersediaan ${vehicle.name}.`
    );

  return (
    <article className={styles.vehicleCard}>
      <div className={styles.vehicleCardImage}>
        {vehicle.image ? (
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} untuk disewa di Kalimantan`}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw"
          />
        ) : (
          <div className={styles.vehicleImagePlaceholder}>
            <CarFront size={38} strokeWidth={1.2} aria-hidden="true" />
            <span>Foto armada akan ditambahkan</span>
          </div>
        )}
      </div>
      <div className={styles.vehicleCardInfo}>
        <div>
          <p>{vehicle.category}</p>
          <h3>{vehicle.name}</h3>
        </div>
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Tanyakan ketersediaan ${vehicle.name}`}
        >
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

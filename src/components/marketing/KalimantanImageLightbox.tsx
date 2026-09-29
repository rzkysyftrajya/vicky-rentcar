"use client";

import { useRef } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import styles from "@/app/kalimantan/kalimantan.module.css";

type KalimantanImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
};

export default function KalimantanImageLightbox({
  src,
  alt,
  width,
  height,
  sizes,
}: KalimantanImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={styles.tourImageTrigger}
        aria-label={`Lihat gambar lebih detail: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <Image src={src} alt="" fill sizes={sizes} />
        <span className={styles.tourImageZoomHint}>
          <ZoomIn size={15} aria-hidden="true" />
          Lihat lebih detail
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className={styles.tourImageDialog}
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        <button
          type="button"
          className={styles.tourImageClose}
          aria-label="Tutup gambar"
          onClick={() => dialogRef.current?.close()}
        >
          <X size={22} aria-hidden="true" />
        </button>
        <Image
          className={styles.tourImageDialogImage}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="94vw"
        />
        <p>{alt}</p>
      </dialog>
    </>
  );
}

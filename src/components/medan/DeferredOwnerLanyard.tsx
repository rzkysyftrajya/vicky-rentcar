"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

export default function DeferredOwnerLanyard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto h-[360px] w-full max-w-[420px] lg:h-[440px]"
      role="img"
      aria-label="Kartu identitas Vicky, pemilik VRN Rent Car Nusantara"
    >
      {isNearViewport && (
        <Lanyard
          frontImage="/owner-vicky-rentcar-nusantara.webp"
          backImage="/owner-vicky-rentcar-nusantara.webp"
          imageFit="cover"
          strapColor="#173b6c"
          size={0.62}
          intro
        />
      )}
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

interface DeferredOwnerLanyardProps {
  strapColor?: string;
}

export default function DeferredOwnerLanyard({
  strapColor = "#173b6c",
}: DeferredOwnerLanyardProps) {
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
      className="mx-auto h-[320px] w-full max-w-[350px] sm:h-[360px] sm:max-w-[370px] lg:h-[380px]"
      role="img"
      aria-label="Kartu identitas Vicky, pemilik VRN Rent Car Nusantara"
    >
      {isNearViewport && (
        <Lanyard
          frontImage="/owner-vicky-rentcar-nusantara.webp"
          backImage="/logoVRN.png"
          imageFit="cover"
          backImageFit="contain"
          strapColor={strapColor}
          size={0.58}
          intro
        />
      )}
    </div>
  );
}

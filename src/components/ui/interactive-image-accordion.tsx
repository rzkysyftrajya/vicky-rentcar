"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CarFront, MapPin, Plane, PhoneCall } from "lucide-react";
import { createMedanWhatsAppUrl } from "@/components/medan/MedanWhatsApp";

const accordionItems = [
  {
    id: "innova-zenix",
    title: "Innova Zenix",
    imageUrl: "/medan/armada/INNOVA-ZENIX.webp",
  },
  {
    id: "innova-reborn",
    title: "Innova Reborn",
    imageUrl: "/medan/armada/INNOVA-REBORN.webp",
  },
  {
    id: "alphard",
    title: "Toyota Alphard",
    imageUrl: "/medan/armada/ALPHARD-GEN-4.webp",
  },
  {
    id: "hiace-premio",
    title: "Hiace Premio",
    imageUrl: "/medan/armada/HIACE-PREMIO-LUXURY.webp",
  },
];

export function LandingAccordionItem() {
  const [activeId, setActiveId] = useState(accordionItems[0].id);

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-gradient-to-br from-white via-[#f7f8fa] to-[#eef3f8] py-16 sm:py-20 md:py-24"
    >
      <div className="medan-container grid w-full items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:gap-14">
        <div className="text-center md:text-left">
          <p className="medan-eyebrow inline-flex items-center gap-2 rounded-full border border-[#f2c14e]/50 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#f2c14e]" />
            Rental mobil Medan & Sumatera Utara
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#102a4c] sm:text-5xl xl:text-6xl">
            Rental Mobil Medan,{" "}
            <span className="text-[#173b6c]">Nyaman ke Mana Saja.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:mx-0">
            Pilih kendaraan untuk perjalanan keluarga, agenda bisnis, antar
            jemput Bandara Kualanamu, hingga wisata Sumatera Utara.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href={createMedanWhatsAppUrl({ type: "general" })}
              target="_blank"
              rel="noopener noreferrer"
              className="medan-button min-h-14 rounded-xl bg-[#f2c14e] px-6 text-[#102a4c] shadow-lg shadow-[#102a4c]/10 transition-colors hover:bg-[#ffd66c]"
            >
              <PhoneCall className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
            <Link
              href="#fleet"
              className="medan-button min-h-14 rounded-xl border border-[#173b6c]/20 bg-white px-6 text-[#173b6c] transition-colors hover:bg-[#eef3f9]"
            >
              Jelajahi armada <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <nav
            aria-label="Layanan rental mobil Medan"
            className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600 md:justify-start"
          >
            <Link className="inline-flex items-center gap-1.5 hover:text-[#173b6c]" href="/medan/airport">
              <Plane className="h-4 w-4 text-[#173b6c]" />
              Bandara Kualanamu
            </Link>
            <Link className="inline-flex items-center gap-1.5 hover:text-[#173b6c]" href="/medan/fleet">
              <CarFront className="h-4 w-4 text-[#173b6c]" />
              Mobilitas di kota
            </Link>
            <Link className="inline-flex items-center gap-1.5 hover:text-[#173b6c]" href="/medan/tourism">
              <MapPin className="h-4 w-4 text-[#173b6c]" />
              Wisata Sumatera Utara
            </Link>
          </nav>
        </div>

        <div
          aria-label="Pilihan armada"
          className="flex h-[340px] min-w-0 items-stretch justify-start gap-2 overflow-x-auto overscroll-x-contain px-1 pb-2 sm:h-[420px] sm:justify-center sm:gap-3 lg:h-[480px]"
        >
          {accordionItems.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Pilih ${item.title}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`group relative h-full min-w-12 shrink-0 overflow-hidden rounded-2xl bg-[#102a4c] text-left shadow-lg transition-[width,flex-grow] duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2c14e] motion-reduce:transition-none sm:min-w-14 ${
                  isActive
                    ? "w-[min(62vw,360px)] md:w-[min(44vw,420px)] md:flex-[4]"
                      : "w-12 md:w-14 md:flex-[0.65]"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 62vw, (max-width: 1023px) 44vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={item.id === "innova-zenix"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-[#071a31]/15 to-transparent" />
                <span
                  className={`absolute font-semibold text-white transition-all duration-300 ${
                    isActive
                      ? "bottom-5 left-5 right-4 text-left text-lg sm:bottom-7 sm:left-7 sm:text-2xl"
                      : "bottom-4 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] text-sm tracking-wide sm:bottom-6 sm:text-base"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LandingAccordionItem;

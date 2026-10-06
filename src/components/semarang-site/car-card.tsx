"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Cog, UserCheck, MessageCircle } from "lucide-react";

import { Button } from "@/components/semarang-site/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/semarang-site/ui/card";
import type { Vehicle } from "@/lib/semarang-site/vehicles";
import { Badge } from "./ui/badge";
import { useLightbox } from "@/hooks/semarang-site/use-lightbox";

interface CarCardProps {
  vehicle: Vehicle;
}

export function CarCard({ vehicle }: CarCardProps) {
  const { openLightbox } = useLightbox();

  const phoneNumber = "6282363389893";
  const message = `Halo, saya tertarik untuk menyewa mobil ${vehicle.name}. Apakah unit ini tersedia?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Card className="group w-full h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col bg-card">
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-muted/10">
        {vehicle.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-none">
              {vehicle.badge}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-contain cursor-pointer p-0 transition-transform duration-700 scale-110 group-hover:scale-125"
            onClick={() => openLightbox(vehicle.image)}
          />
        </div>
        <div className="absolute bottom-0 left-1/2 z-20 flex h-7 w-[44%] min-w-[130px] max-w-[250px] -translate-x-1/2 items-center justify-center gap-1 bg-white px-1 text-[9px] font-bold text-slate-900 sm:text-[10px]">
          <MessageCircle aria-hidden="true" className="h-3 w-3 shrink-0 text-emerald-600" />
          <span>+62 823-6338-9893</span>
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{vehicle.brand}</p>
          <CardTitle className="text-xl md:text-2xl font-bold line-clamp-1">{vehicle.name}</CardTitle>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground/80 mb-6 pb-4 border-b">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{vehicle.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-1">
              <Cog className="w-4 h-4" />
              <span>{vehicle.transmission}</span>
            </div>
            {/hiace/i.test(vehicle.name) ? (
              <div className="flex items-center gap-1">
                <UserCheck className="w-4 h-4" />
                <span>Khusus dengan sopir</span>
              </div>
            ) : null}
        </div>
        <div className="mt-auto rounded-lg bg-secondary/50 p-4 text-center">
          <p className="font-semibold text-foreground">
            Tanyakan penawaran untuk perjalanan Anda
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Cek ketersediaan unit, tanggal, dan kebutuhan layanan via WhatsApp.
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild size="lg" className="w-full rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Cek Penawaran via WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

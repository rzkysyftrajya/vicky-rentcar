"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, ArrowRight } from "lucide-react";
import { Car } from "@/data/fleet-data";

interface VIPVehicleCardProps {
  car: Car;
  index: number;
}

export function VIPVehicleCard({ car, index }: VIPVehicleCardProps) {
  const waText = `Halo, saya tertarik untuk menyewa ${car.name} untuk layanan VIP. Mohon informasinya.`;
  const encodedWaText = encodeURIComponent(waText);

  return (
    <div
      className="w-full animate-fade-in-up"
      style={{
        animationDelay: `${Math.min(index * 0.1, 0.5)}s`,
        animationFillMode: "both",
      }}
    >
      <Card className="overflow-hidden group bg-gradient-to-br from-background to-secondary/30 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-black" />
                VIP
              </Badge>
            </div>

            {/* Vehicle Name Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {car.name}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {car.highlights.slice(0, 3).map((highlight) => (
                <Badge
                  key={highlight}
                  variant="outline"
                  className="text-xs border-primary/30 text-foreground/80"
                >
                  {highlight}
                </Badge>
              ))}
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-2 text-sm">
              {car.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="text-center p-2 bg-secondary/50 rounded-lg"
                >
                  <span className="text-muted-foreground text-xs">{spec}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              Pengalaman luxury dengan {car.name}. Dilengkapi dengan interior
              premium dan layanan chauffeur profesional untuk kenyamanan
              maksimal Anda.
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href={`https://wa.me/6282363389893?text=${encodedWaText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4 mr-2" />
              Pesan via WA
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex-shrink-0 border-primary/50 hover:bg-primary/10"
          >
            <a href={`/fleet`}>
              Detail
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

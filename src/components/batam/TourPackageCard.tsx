"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { StaggerItem } from "./Animations";

interface TourPackage {
  id: number;
  name: string;
  description: string;
  duration: string;
  destinations: string[];
  image: string;
  highlights: string[];
}

interface TourPackageCardProps {
  tour: TourPackage;
  waLink: string;
}

export default function TourPackageCard({ tour, waLink }: TourPackageCardProps) {
  return (
    <StaggerItem>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {tour.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
            {tour.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {tour.description}
          </p>

          {/* Destinations */}
          <div className="mb-4">
            <div className="flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-gray-900">Destinasi:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {tour.destinations.slice(0, 4).map((dest, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-gray-600 px-2 py-1 rounded-md">
                  {dest}
                </span>
              ))}
              {tour.destinations.length > 4 && (
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md">
                  +{tour.destinations.length - 4} lagi
                </span>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <span className="text-sm font-semibold text-gray-900">Highlight:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {tour.highlights.map((highlight, idx) => (
                <span key={idx} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 font-bold mt-auto"
            asChild
          >
            <a
              href={`${waLink}&text=Halo,%20saya%20tertarik%20dengan%20Paket%20Tour:%20${encodeURIComponent(tour.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Pesan Sekarang
            </a>
          </Button>
        </div>
      </div>
    </StaggerItem>
  );
}
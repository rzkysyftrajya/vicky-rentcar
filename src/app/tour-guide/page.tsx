"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageZoom } from "@/components/ui/image-zoom";
import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import SocialMediaCard from "@/components/layout/SocialMediaCard";

const allDestinations = [
  {
    name: "Danau Toba, Sumatera Utara",
    description:
      "Jelajahi danau vulkanik terbesar di dunia, kunjungi Pulau Samosir, dan selami kekayaan budaya Batak.",
    image: "/tour-guide/danau-toba.webp",
    hint: "lake toba",
    tags: ["Alam", "Budaya", "Danau"],
    alt: "Pemandangan Danau Toba, paket sewa mobil ke Parapat",
  },
  {
    name: "Ubud, Bali",
    description:
      "Pusat seni dan budaya Bali. Jelajahi sawah terasering Tegalalang, Monkey Forest, dan pasar seni yang ikonik.",
    image: "/tour-guide/ubud-bali.webp",
    hint: "ubud rice terrace",
    tags: ["Budaya", "Alam", "Seni"],
    alt: "Rental mobil ke sawah terasering Tegalalang di Ubud, Bali",
  },
  {
    name: "Candi Borobudur, Jawa Tengah",
    description:
      "Saksikan kemegahan candi Buddha terbesar di dunia, sebuah warisan dunia yang tak ternilai.",
    image: "/tour-guide/candi-borobudur.webp",
    hint: "borobudur temple",
    tags: ["Sejarah", "Budaya", "Religi"],
    alt: "Candi Borobudur saat matahari terbit",
  },
  {
    name: "Gunung Bromo, Jawa Timur",
    description:
      "Daki gunung berapi aktif ini untuk menyaksikan matahari terbit yang spektakuler dari puncaknya. Pengalaman sekali seumur hidup.",
    image: "/tour-guide/gunung-bromo.webp",
    hint: "mount bromo sunrise",
    tags: ["Alam", "Petualangan", "Pendakian"],
    alt: "Sewa mobil dan paket trekking sunrise Gunung Bromo",
  },
  {
    name: "Kepulauan Raja Ampat, Papua",
    description:
      "Temukan surga bawah laut di salah satu lokasi selam terbaik dunia dengan pulau-pulau karst yang dramatis.",
    image: "/tour-guide/raja-ampat.webp",
    hint: "raja ampat islands",
    tags: ["Bahari", "Alam", "Petualangan"],
    alt: "Pemandangan Kepulauan Raja Ampat dari atas",
  },
  {
    name: "Taman Nasional Komodo, NTT",
    description:
      "Bertemu langsung dengan Komodo, kadal raksasa purba, di habitat aslinya yang menakjubkan.",
    image: "/tour-guide/taman-komodo.webp",
    hint: "komodo dragon island",
    tags: ["Fauna", "Alam", "Petualangan"],
    alt: "Komodo di Taman Nasional Komodo",
  },
  {
    name: "Lombok & Gili Islands",
    description:
      "Nikmati pantai pasir putih, air laut yang jernih, dan suasana santai di pulau-pulau eksotis ini.",
    image: "/tour-guide/gili-islands.webp",
    hint: "gili trawangan beach swing",
    tags: ["Pantai", "Pulau", "Santai"],
    alt: "Ayunan di pantai Gili Trawangan, Lombok",
  },
  {
    name: "Tana Toraja, Sulawesi Selatan",
    description:
      "Jelajahi lanskap budaya yang unik dengan rumah adat Tongkonan dan upacara pemakaman yang khas.",
    image: "/tour-guide/tana-toraja.webp",
    hint: "tana toraja traditional houses",
    tags: ["Budaya", "Sejarah", "Arsitektur"],
    alt: "Rumah adat Tongkonan di Tana Toraja",
  },
];

const allTags = [...new Set(allDestinations.flatMap((d) => d.tags))];

export default function TourGuidePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => dest.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchTerm, activeTags]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient">
            Panduan Wisata Lengkap Nusantara
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Dari Sabang sampai Merauke, Indonesia menawarkan petualangan tak
            terlupakan. Biarkan layanan sewa mobil wisata kami menjadi mitra
            terpercaya dalam setiap perjalanan Anda.
          </p>
        </div>

        {/* --- Search and Filter Controls --- */}
        <div className="bg-card p-6 rounded-2xl shadow-lg mb-12 border max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Cari destinasi atau aktivitas (e.g., 'Pantai', 'Bromo')"
              className="pl-10 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Cari Destinasi"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground">
              Filter Kategori:
            </span>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={activeTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className={cn("transition-all duration-200", {
                  "bg-primary text-primary-foreground":
                    activeTags.includes(tag),
                })}
              >
                {tag}
              </Button>
            ))}
            {activeTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTags([])}
                className="text-primary hover:text-primary/80"
              >
                Hapus Filter
              </Button>
            )}
          </div>
        </div>

        <section id="destinations" className="mb-24">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDestinations.map((dest) => (
                <Card
                  key={dest.name}
                  className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 group bg-card group-hover:animate-shimmer"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-64 w-full overflow-hidden">
                      <ImageZoom
                        src={dest.image}
                        alt={dest.alt}
                        data-ai-hint={dest.hint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        isZoomable={false}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <CardTitle className="mb-2 text-xl text-primary group-hover:text-blue-400 transition-colors">
                      {dest.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.tags.map((tag) => (
                        <div
                          key={tag}
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <CardDescription className="text-base text-muted-foreground flex-grow">
                      {dest.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground">
                Destinasi Tidak Ditemukan
              </h3>
              <p className="text-muted-foreground mt-2">
                Coba ganti kata kunci pencarian atau filter Anda.
              </p>
            </div>
          )}
        </section>

        <div className="text-center mt-20 bg-secondary p-12 rounded-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gradient">
            Rencanakan Petualangan Impian Anda
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Siap menjelajahi keindahan Nusantara? Hubungi kami untuk mendapatkan
            penawaran paket wisata dan sewa mobil terbaik untuk destinasi
            pilihan Anda.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg hover:scale-105 transition-transform"
          >
            <Link href="/contact">Hubungi Kami Sekarang</Link>
          </Button>
        </div>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <SocialMediaCard />
          </div>
        </section>
      </div>
    </div>
  );
}

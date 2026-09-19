import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MapPin, MessageCircle } from "lucide-react";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Paket City Tour di Seluruh Indonesia - Rental Mobil Keliling Kota & Wisata Kuliner",
  description:
    "Jelajahi ikon kota-kota besar di Indonesia dengan paket City Tour dari kami. Kunjungi destinasi terbaik di Jakarta, Bali, Medan, dan lainnya. Sewa mobil dengan sopir sebagai pemandu.",
  keywords: [
    "city tour indonesia",
    "paket wisata kota",
    "wisata kuliner nusantara",
    "tour dalam kota",
    "rental mobil city tour",
  ],
  openGraph: {
    title:
      "Paket City Tour di Seluruh Indonesia - Keliling Kota & Wisata Kuliner",
    description:
      "Jelajahi tempat terbaik di kota-kota Indonesia dengan layanan city tour kami yang fleksibel dan nyaman.",
  },
};

export default function CityTourPage() {
  const destinations = [
    {
      name: "Istana Maimun, Medan",
      image: "/sewa-pengantin-medan/destinasi-wisata/istana-maimun.webp",
      hint: "maimun palace medan",
      alt: "Istana Maimun, destinasi city tour Medan",
    },
    {
      name: "Kawasan Kota Tua, Jakarta",
      image: "/sewa-pengantin-medan/destinasi-wisata/kawasan-kota-tua.webp",
      hint: "jakarta old town",
      alt: "Kawasan Kota Tua, wisata sejarah di Jakarta",
    },
    {
      name: "Pura Uluwatu, Bali",
      image: "/sewa-pengantin-medan/destinasi-wisata/pura-uluwatu.webp",
      hint: "uluwatu temple bali",
      alt: "Pura Uluwatu, ikon wisata budaya Bali",
    },
    {
      name: "Kawasan Kuliner, Bandung",
      image:
        "/sewa-pengantin-medan/destinasi-wisata/kawasan-kuliner-bandung.webp",
      hint: "bandung street food",
      alt: "Wisata kuliner di Bandung",
    },
  ];

  const waText = `Halo, saya tertarik dengan paket City Tour. Mohon informasi pilihan rute dan harganya di berbagai kota.`;
  const encodedWaText = encodeURIComponent(waText);

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Paket City Tour di Seluruh Indonesia
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Tidak punya banyak waktu? Biarkan kami membawa Anda berkeliling
            untuk melihat dan merasakan esensi kota-kota di Indonesia dalam satu
            hari. Dari situs bersejarah hingga surga kuliner tersembunyi.
          </p>
        </div>

        <Card className="p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Rencanakan Tur Impian Anda
              </h2>
              <p className="text-muted-foreground">
                Layanan sewa mobil dengan sopir kami untuk city tour memberikan
                Anda fleksibilitas penuh di kota mana pun. Sopir kami tidak
                hanya mengantar, tapi juga bisa menjadi pemandu Anda,
                merekomendasikan tempat terbaik untuk dikunjungi dan dicicipi.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                  <span>
                    Rute fleksibel sesuai minat Anda (sejarah, kuliner,
                    belanja).
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                  <span>
                    Durasi paket mulai dari 6 jam, 12 jam, hingga fullday.
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                  <span>
                    Rekomendasi tempat makan otentik khas lokal di setiap kota.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
              >
                <a
                  href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Buat Itinerary City Tour Anda
                </a>
              </Button>
            </div>
            <div>
              <ImageZoom
                src="/sewa-pengantin-medan/destinasi-wisata/liburan.webp"
                alt="Kolase destinasi wisata ikonik dari berbagai kota di Indonesia"
                data-ai-hint="indonesia city landmark collage"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </Card>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Contoh Destinasi Populer di Berbagai Kota
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <Card
                key={dest.name}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 group group-hover:animate-shimmer"
              >
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
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
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="mb-2 text-xl text-primary group-hover:text-blue-400 transition-colors">
                    {dest.name}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/tour-guide">Lihat Semua Inspirasi Destinasi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

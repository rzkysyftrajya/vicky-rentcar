import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Sewa Mobil Pengantin di Seluruh Indonesia - Rental Mobil Mewah Pernikahan",
  description:
    "Wujudkan pernikahan impian Anda dengan layanan sewa mobil pengantin mewah di seluruh Indonesia. Pilihan Alphard, Camry, Fortuner dengan dekorasi dan sopir profesional.",
  keywords: [
    "sewa mobil pengantin",
    "rental mobil mewah pernikahan",
    "sewa alphard pengantin",
    "mobil pengantin indonesia",
    "harga sewa mobil pengantin",
  ],
  openGraph: {
    title: "Sewa Mobil Pengantin Mewah di Seluruh Indonesia",
    description:
      "Layanan sewa mobil pengantin mewah dengan dekorasi eksklusif, tersedia di kota-kota besar di Indonesia.",
  },
};

export default function WeddingCarRentalPage() {
  const weddingCars = [
    {
      name: "Toyota Alphard",
      slug: "toyota-alphard-new",
      image: "/sewa-pengantin-medan/alphard.webp",
      hint: "toyota alphard white",
      alt: "Sewa Toyota Alphard putih untuk mobil pengantin",
    },
    {
      name: "Toyota Camry Hybrid",
      slug: "toyota-camry-hybrid",
      image: "/sewa-pengantin-medan/toyota-camry-hybrid.webp",
      hint: "toyota camry black",
      alt: "Rental Toyota Camry hitam untuk acara pernikahan",
    },
    {
      name: "Toyota Fortuner",
      slug: "toyota-fortuner",
      image: "/sewa-pengantin-medan/fortuner.webp",
      hint: "toyota fortuner dark grey",
      alt: "Sewa Toyota Fortuner gagah sebagai mobil pengantin",
    },
    {
      name: "Mitsubishi Pajero",
      slug: "mitsubishi-pajero",
      image: "/sewa-pengantin-medan/pajero.webp",
      hint: "mitsubishi pajero white",
      alt: "Rental Mitsubishi Pajero putih untuk pernikahan",
    },
  ];

  const benefits = [
    "Armada Mewah & Terawat",
    "Sopir Profesional & Berpengalaman",
    "Dekorasi Bunga Eksklusif (Opsional)",
    "Tiba Tepat Waktu & Penuh Gaya",
    "Paket Fleksibel Sesuai Kebutuhan",
    "Kebersihan Interior Terjamin",
  ];

  const waText = `Halo, saya tertarik dengan paket sewa mobil pengantin. Mohon informasinya.`;
  const encodedWaText = encodeURIComponent(waText);

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Sewa Mobil Pengantin Mewah se-Nusantara
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Momen sekali seumur hidup Anda layak mendapatkan yang terbaik. Hadir
            dengan penuh gaya dan kemewahan di hari pernikahan Anda dengan
            layanan sewa mobil pengantin premium dari PT.VICKY RENTCAR
            NUSANTARA, di mana pun Anda merayakannya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageZoom
              src="/sewa-pengantin-medan/sewa-mobil-pengantin-medan.webp"
              alt="sewa mobil pernikahan"
              data-ai-hint="wedding couple luxury car"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">
              Kesempurnaan di Hari Spesial Anda
            </h2>
            <p className="text-muted-foreground">
              Kami memahami betapa pentingnya setiap detail di hari pernikahan
              Anda. Oleh karena itu, kami menyediakan layanan rental mobil
              pengantin yang tidak hanya mewah, tetapi juga andal dan didukung
              oleh tim yang profesional untuk memastikan semuanya berjalan
              lancar di seluruh Indonesia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-secondary rounded-lg shadow-sm group-hover:animate-shimmer"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-base font-semibold text-secondary-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Pilihan Mobil Pengantin Elegan
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Pilih kendaraan yang paling sesuai dengan tema dan gaya pernikahan
              Anda, tersedia di kota-kota besar di Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingCars.map((car) => (
              <Card
                key={car.name}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 group group-hover:animate-shimmer"
              >
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <ImageZoom
                      src={car.image}
                      alt={car.alt}
                      data-ai-hint={car.hint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      isZoomable={false}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="mb-2 text-xl text-primary group-hover:text-blue-400 transition-colors">
                    {car.name}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <a
                href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Diskusikan Kebutuhan Pernikahan Anda
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

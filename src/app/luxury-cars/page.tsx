import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";

export const metadata: Metadata = {
  title: "Rental Mobil Mewah Medan - Sewa Alphard, Fortuner, pajero",
  description:
    "Sewa mobil mewah di Medan untuk pernikahan, event, atau acara spesial. Tersedia Rolls-Royce, Ferrari, Lamborghini, dan Bentley dengan layanan profesional.",
  keywords: [
    "sewa mobil mewah medan",
    "rental mobil pengantin medan",
    "sewa alphard medan",
    "rental fortuner medan",
    "mobil mewah pernikahan",
  ],
  openGraph: {
    title: "Rental Mobil Mewah Medan - Sewa Alphard, Ferrari, Rolls-Royce",
    description:
      "Sewa mobil mewah di Medan untuk pernikahan, event, atau acara spesial.",
  },
};

export default function LuxuryCarsPage() {
  const luxuryFleet = [
    {
      name: "HIACE PREMIO LUXURY",
      price: "170",
      image: "/armada/hiace-premio-luxury.webp",
      hint: "hiace premio luxury",
      description: "Puncak kemewahan dan kenyamanan otomotif.",
      alt: "Sewa mobil hiace di Medan",
    },
    {
      name: "Toyota Alphard New",
      price: "200",
      image: "/armada/alphard-new.webp",
      hint: "Alphard NEW",
      description: "Performa luar biasa bertemu inovasi hibrida.",
      alt: "Rental mobil alphard new di Medan",
    },
    {
      name: "Toyota Fortuner",
      price: "90",
      image: "/armada/fortuner.webp",
      hint: "Toyta Fortuner",
      description: "Sebuah pernyataan kekuatan dan desain yang agresif.",
      alt: "Sewa fortuner untuk acara di Medan",
    },
    {
      name: "Mitsubishi Pajero",
      price: "100",
      image: "/armada/pajero.webp",
      hint: "Mitsubishi Pajero",
      description: "Grand tourer klasik untuk gaya tertinggi.",
      alt: "Rental mobil mewah di Medan",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        Pameran & Rental Mobil Mewah
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-12">
        Untuk momen paling berkesan dalam hidup. Koleksi eksklusif mobil mewah
        dan supercar kami tersedia untuk sewa mobil pernikahan, acara
        perusahaan, dan acara-acara khusus lainnya di Medan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {luxuryFleet.map((car) => (
          <Card
            key={car.name}
            className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <CardHeader className="p-0">
              <ImageZoom
                src={car.image}
                alt={car.alt}
                data-ai-hint={car.hint}
                width={600}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl font-semibold">
                {car.name}
              </CardTitle>
              <p className="text-gray-600 mt-2">{car.description}</p>
              <p className="text-2xl font-bold text-primary mt-4">
                Rp
                {new Intl.NumberFormat("id-ID").format(
                  parseInt(car.price) * 15000
                )}
                /hari
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
              <Button className="w-full">Tanyakan Ketersediaan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

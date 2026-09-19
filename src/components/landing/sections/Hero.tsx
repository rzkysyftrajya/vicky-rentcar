
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  city: string;
  title: string;
  subtitle: string;
}

export default function Hero({ city, title, subtitle }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32">
      <Image
        src="/halaman-surabaya/jembatan-suramadu.jpg"
        alt={`Sewa Mobil di ${city}`}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-20"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://wa.me/6281378641157" target="_blank" rel="noopener noreferrer">
              Chat WhatsApp Sekarang
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
            Lihat Harga Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
}

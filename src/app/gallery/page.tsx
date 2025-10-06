import { ImageZoom } from "@/components/ui/image-zoom";
import { type Metadata } from "next";
import { fleetImages, destinationImages } from "@/data/gallery-data";

export const metadata: Metadata = {
  title: "Galeri - Foto Rental Mobil & Destinasi Wisata di Nusantara",
  description:
    "Jelajahi galeri foto kami. Lihat koleksi mobil rental kami yang terawat dan pemandangan destinasi wisata terbaik di seluruh penjuru Nusantara.",
  keywords: [
    "galeri rental mobil",
    "foto mobil sewaan",
    "gambar wisata indonesia",
    "foto wisata nusantara",
    "koleksi mobil rental",
  ],
  openGraph: {
    title: "Galeri Foto - Armada & Destinasi PT.VICKY RENTCAR NUSANTARA",
    description:
      "Lihat koleksi gambar mobil-mobil kami dan keindahan destinasi Nusantara yang bisa Anda jelajahi bersama kami.",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Galeri Visual Nusantara
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Inspirasi perjalanan Anda dimulai di sini. Lihat lebih dekat armada
            berkualitas kami dan keindahan destinasi Nusantara yang menanti
            Anda.
          </p>
        </div>

        {/* Fleet Gallery */}
        <section id="fleet-gallery" className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Armada Unggulan Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {fleetImages.map((image, index) => (
              <div
                key={`fleet-${index}`}
                className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <ImageZoom
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  data-ai-hint={image.hint}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Destination Gallery */}
        <section id="destination-gallery">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Jelajahi Destinasi Populer Nusantara
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {destinationImages.map((image, index) => (
              <div
                key={`dest-${index}`}
                className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              >
                <ImageZoom
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  data-ai-hint={image.hint}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

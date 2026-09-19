import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Briefcase, Film, Users } from "lucide-react";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Rental Mobil untuk Event di Seluruh Indonesia - Transportasi Acara & MICE",
  description:
    "Solusi transportasi untuk event, MICE, konferensi, dan acara perusahaan di seluruh Indonesia. Sediakan layanan rental mobil dengan sopir untuk tamu VIP, panitia, dan peserta.",
  keywords: [
    "rental mobil event indonesia",
    "sewa mobil untuk acara",
    "transportasi mice jakarta",
    "rental mobil konferensi bali",
    "sewa mobil pameran surabaya",
  ],
  openGraph: {
    title:
      "Rental Mobil untuk Event di Seluruh Indonesia - Transportasi Acara & MICE",
    description:
      "Solusi transportasi andal untuk semua jenis event di kota-kota besar Indonesia.",
  },
};

export default function EventCarRentalPage() {
  const eventTypes = [
    {
      title: "Konferensi & Seminar",
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      description:
        "Transportasi profesional untuk pembicara, peserta, dan tamu VIP di kota mana pun.",
    },
    {
      title: "Pameran & Expo",
      icon: <Users className="w-10 h-10 text-primary" />,
      description:
        "Mobilisasi tim dan logistik ringan untuk kelancaran pameran Anda di seluruh Indonesia.",
    },
    {
      title: "Syuting Film & Produksi",
      icon: <Film className="w-10 h-10 text-primary" />,
      description:
        "Menyediakan kendaraan untuk kebutuhan properti syuting atau transportasi kru di berbagai lokasi.",
    },
    {
      title: "Acara Perusahaan & Gathering",
      icon: <Users className="w-10 h-10 text-primary" />,
      description:
        "Armada van dan bus untuk memastikan semua peserta tiba bersamaan, di mana pun acaranya.",
    },
  ];

  const waText = `Halo, saya membutuhkan layanan rental mobil untuk event. Mohon informasinya.`;
  const encodedWaText = encodeURIComponent(waText);

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Rental Mobil Profesional untuk Event di Seluruh Indonesia
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Sukseskan acara Anda dengan solusi transportasi yang andal dan
            terkoordinasi. Kami siap mendukung semua kebutuhan mobilitas untuk
            event, MICE, konferensi, dan acara spesial Anda di seluruh kota
            besar di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">
              Mitra Transportasi Terpercaya Anda
            </h2>
            <p className="text-muted-foreground">
              Kami berpengalaman dalam menangani logistik transportasi untuk
              berbagai skala acara secara nasional. Dari penjemputan tamu VIP di
              bandara hingga mobilisasi peserta, tim kami memastikan kelancaran
              dan ketepatan waktu.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />{" "}
                <span>Koordinasi jadwal yang presisi di berbagai kota.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />{" "}
                <span>Sopir yang mengerti etika pelayanan event.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />{" "}
                <span>
                  Armada beragam (VIP, Van, Bus) di seluruh Indonesia.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />{" "}
                <span>
                  Fleksibilitas penyesuaian layanan sesuai skala acara.
                </span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/contact">Diskusikan Kebutuhan Event Anda</Link>
            </Button>
          </div>
          <div>
            <ImageZoom
              src="/sewa-pengantin-medan/sewa-mobil-untuk-event.webp"
              alt="Deretan mobil Toyota Hiace dan Innova siap untuk layanan event di seluruh Indonesia"
              data-ai-hint="fleet of vans event"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Mendukung Berbagai Jenis Acara Nasional
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event) => (
              <Card
                key={event.title}
                className="text-center p-8 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group bg-background group-hover:animate-shimmer"
              >
                <div className="flex justify-center mb-6">{event.icon}</div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2 text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

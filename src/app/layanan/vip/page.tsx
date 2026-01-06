import { cars } from "@/data/fleet-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  Shield,
  Star,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan VIP & Mobil Mewah - PT.VICKY RENTCAR NUSANTARA",
  description:
    "Nikmati pengalaman luxury dengan layanan rental mobil VIP kami. Alphard, Land Cruiser, Mercedes-Benz, dan kendaraan premium lainnya dengan sopir profesional.",
  keywords: [
    "rental mobil vip",
    "sewa mobil mewah",
    "sewa alphard",
    "rental land cruiser",
    "sewa mercedes",
    "luxury car rental indonesia",
    "mobil premium dengan sopir",
  ],
  openGraph: {
    title: "Layanan VIP & Mobil Mewah - Rental Mobil Premium Indonesia",
    description:
      "Nikmati pengalaman luxury dengan layanan rental mobil VIP kami.",
  },
};

const vipCars = cars.filter((car) => car.serviceCategory === "VIP");

const vipFeatures = [
  {
    icon: <Crown className="w-8 h-8 text-amber-500" />,
    title: "Premium Experience",
    description:
      "Interior mewah dan kenyamanan tingkat tinggi untuk perjalanan eksklusif Anda",
  },
  {
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    title: "Professional Chauffeur",
    description:
      "Sopir berpengalaman dan terlatih dengan pengetahuan lokal yang mendalam",
  },
  {
    icon: <Star className="w-8 h-8 text-amber-500" />,
    title: "Exclusive Service",
    description:
      "Layanan personal 24/7 untuk memenuhi setiap kebutuhan perjalanan VIP Anda",
  },
];

const vipServices = [
  {
    title: "Pernikahan & Acara Spesial",
    description:
      "Jadikan hari istimewa Anda lebih berkesan dengan mobil mewah untuk pengantin dan tamu VIP.",
  },
  {
    title: "Executive Corporate",
    description:
      "Layanan transportasi premium untuk executives, delegasi, dan kebutuhan bisnis korporat.",
  },
  {
    title: "Airport Transfer VIP",
    description:
      "Penjemputan dan pengantaran bandara dengan layanan white-glove dan kenyamanan maksimal.",
  },
  {
    title: "City Tour Eksklusif",
    description:
      "Jelajahi kota dengan panduan pribadi dan kendaraan mewah sesuai jadwal Anda.",
  },
];

export default function VIPServicesPage() {
  const waText = encodeURIComponent(
    "Halo, saya tertarik dengan layanan VIP. Mohon informasinya tentang rental mobil mewah."
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-5 bg-[url('/pattern-premium.svg')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 mb-6 px-4 py-2 text-sm">
              <Crown className="w-4 h-4 mr-2" />
              Premium Luxury Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Layanan VIP & Mobil Mewah
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Nikmati pengalaman transportasi premium dengan armada kendaraan
              mewah terbaik dan layanan chauffeur profesional untuk perjalanan
              yang tak terlupakan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/25"
              >
                <a
                  href={`https://wa.me/6282363389893?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Konsultasi Sekarang
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                <Link href="/fleet">
                  Lihat Armada Lengkap
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Features */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {vipFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Vehicles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Armada VIP & Premium Kami
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Pilihan kendaraan mewah terbaik untuk pengalaman perjalanan yang
              eksklusif dan berkelas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipCars.map((car) => (
              <Card
                key={car.slug}
                className="overflow-hidden bg-gradient-to-br from-background to-secondary/30 border-primary/20"
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold">
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
                          <span className="text-muted-foreground text-xs block">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      Pengalaman luxury dengan {car.name}. Dilengkapi dengan
                      interior premium dan layanan chauffeur profesional untuk
                      kenyamanan maksimal Anda.
                    </p>
                  </div>
                </CardContent>

                <div className="p-6 pt-0 flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-primary to-blue-500 text-white"
                  >
                    <a
                      href={`https://wa.me/6282363389893?text=${encodeURIComponent(
                        `Halo, saya tertarik untuk menyewa ${car.name} untuk layanan VIP. Mohon informasinya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan via WA
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-shrink-0">
                    <Link href="/fleet">
                      Detail
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Services */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Layanan VIP Kami
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Solusi transportasi premium untuk berbagai kebutuhan khusus Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipServices.map((service, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Siap Mengalami Kemewahan?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik untuk
              layanan rental mobil VIP Anda. Tim kami siap memberikan pelayanan
              terbaik 24 jam.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/25"
            >
              <a
                href={`https://wa.me/6282363389893?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

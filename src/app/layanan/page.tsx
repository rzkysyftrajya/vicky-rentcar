import { cars, serviceCategories } from "@/data/fleet-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Users,
  Briefcase,
  Crown,
  Shield,
  Clock,
  Star,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rental Mobil - PT.VICKY RENTCAR NUSANTARA",
  description:
    "Layanan rental mobil lengkap di seluruh Indonesia. VIP & Luxury, Executive & Corporate, Group & Travel, dan Special Purpose Vehicles dengan armada terawat dan sopir profesional.",
  keywords: [
    "layanan rental mobil",
    "sewa mobil",
    "rental mobil indonesia",
    "sewa mobil dengan sopir",
    "rental mobil korporat",
    "sewa mobil wisata",
    "layanan antar jemput bandara",
  ],
  openGraph: {
    title: "Layanan Rental Mobil - PT.VICKY RENTCAR NUSANTARA",
    description:
      "Layanan rental mobil lengkap dengan berbagai kategori untuk kebutuhan Anda.",
  },
};

const allServices = [
  {
    id: "VIP",
    title: "VIP & Luxury Services",
    subtitle: "Pengalaman Kemewahan Tertinggi",
    icon: <Crown className="w-10 h-10" />,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description:
      "Nikmati pengalaman transportasi premium dengan armada kendaraan mewah terbaik dan layanan chauffeur profesional untuk perjalanan yang tak terlupakan.",
    vehicles: cars.filter((car) => car.serviceCategory === "VIP"),
    features: [
      "Interior Premium & Luxury",
      "Professional Chauffeur",
      "24/7 Exclusive Service",
      "Airport Transfer VIP",
    ],
  },
  {
    id: "Executive",
    title: "Executive & Corporate",
    subtitle: "Solusi Bisnis Profesional",
    icon: <Briefcase className="w-10 h-10" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description:
      "Layanan transportasi andal untuk kebutuhan bisnis dan korporat. Armada nyaman dengan sopir profesional untuk executives dan delegasi.",
    vehicles: cars.filter((car) => car.serviceCategory === "Executive"),
    features: [
      "Armada Terpercaya",
      "Sopir Professional",
      "Fleksibilitas Waktu",
      "Corporate Partner Program",
    ],
  },
  {
    id: "Group",
    title: "Group & Travel Services",
    subtitle: "Perjalanan Bersama yang Nyaman",
    icon: <Users className="w-10 h-10" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description:
      "Solusi transportasi kelompok dengan armada berkapasitas besar. Cocok untuk tour keluarga, acara perusahaan, dan perjalanan grup.",
    vehicles: cars.filter((car) => car.serviceCategory === "Group"),
    features: [
      "Kapasitas 14-20 Penumpang",
      "Armada Nyaman & Aman",
      "Tour Guide Tersedia",
      "Paket Tour Lengkap",
    ],
  },
  {
    id: "Special",
    title: "Special Purpose Vehicles",
    subtitle: "Kendaraan Khusus untuk Kebutuhan Khusus",
    icon: <Car className="w-10 h-10" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description:
      "Kendaraan khusus untuk kebutuhan adventure, off-road, dan penggunaan khusus lainnya dengan performa tangguh.",
    vehicles: cars.filter((car) => car.serviceCategory === "Special"),
    features: [
      "Kemampuan Off-Road",
      "Performa Tangguh",
      "Desain Rugged",
      "Armada Spesialis",
    ],
  },
];

const whyChooseUs = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Armada Terawat",
    description:
      "Semua kendaraan kami dicek secara rutin untuk menjamin performa optimal",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Layanan 24/7",
    description: "Tim kami siap membantu Anda kapan saja di seluruh Indonesia",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Rating Tertinggi",
    description:
      "Testimoni positif dari ribuan pelanggan puas di berbagai kota",
  },
];

export default function LayananPage() {
  const waText = encodeURIComponent(
    "Halo, saya tertarik dengan layanan rental mobil. Mohon informasinya."
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-6 px-4 py-2">
              Layanan Rental Mobil Terlengkap
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Solusi Transportasi Terbaik untuk
              <span className="text-primary"> Setiap Kebutuhan</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Dari perjalanan bisnis hingga vacation keluarga, dari acara
              spesial hingga tour kelompok — kami memiliki solusi transportasi
              yang tepat untuk Anda di seluruh Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg"
              >
                <a
                  href={`https://wa.me/6282363389893?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                <Link href="/fleet">
                  Lihat Armada
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Kategori Layanan Kami
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Pilih kategori layanan yang sesuai dengan kebutuhan perjalanan
              Anda
            </p>
          </div>

          <div className="space-y-12">
            {allServices.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.borderColor} border mb-6`}
                  >
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-400 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`bg-gradient-to-r ${service.color} text-white`}
                  >
                    <Link href={`/layanan/${service.id.toLowerCase()}`}>
                      Lihat Detail Layanan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Vehicle Preview Cards */}
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 gap-4">
                    {service.vehicles.slice(0, 4).map((car, idx) => (
                      <Card
                        key={car.slug}
                        className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="relative h-32 w-full">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <Badge
                            className={`absolute top-2 right-2 ${
                              service.id === "VIP"
                                ? "bg-amber-500"
                                : service.id === "Executive"
                                ? "bg-blue-500"
                                : service.id === "Group"
                                ? "bg-green-500"
                                : "bg-purple-500"
                            } text-white text-xs`}
                          >
                            {car.category}
                          </Badge>
                          <p className="absolute bottom-2 left-2 text-white text-sm font-bold">
                            {car.name}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <p className="text-center text-slate-500 text-sm mt-4">
                    +{service.vehicles.length} kendaraan tersedia
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Komitmen kami untuk memberikan layanan terbaik di setiap
              perjalanan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 text-center"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Jangkauan Layanan di Seluruh Indonesia
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Kami hadir di kota-kota besar di seluruh Indonesia untuk memenuhi
              kebutuhan transportasi Anda
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "Jakarta & Sekitar",
                "Surabaya",
                "Medan",
                "Bali",
                "Bandung",
                "Yogyakarta",
                "Semarang",
                "Makassar",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center justify-center gap-2 p-4 bg-slate-800/50 rounded-lg text-slate-300"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{city}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Lihat Semua Lokasi
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Siapkan Perjalanan Anda Sekarang
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Hubungi kami untuk mendapatkan penawaran terbaik dan mulai
              merencanakan perjalanan Anda bersama PT.VICKY RENTCAR NUSANTARA.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg"
            >
              <a
                href={`https://wa.me/6282363389893?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Pesan via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

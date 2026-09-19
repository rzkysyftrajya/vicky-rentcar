import { cars, categories } from "@/data/fleet-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Star, Users, Fuel } from "lucide-react";

export const metadata: Metadata = {
  title: "Armada Rental Mobil - PT.VICKY RENTCAR NUSANTARA",
  description:
    "Lihat lengkap armada rental mobil kami. Dari mobil mewah hingga kendaraan keluarga, tersedia untuk sewa di seluruh Indonesia dengan harga kompetitif.",
  keywords: [
    "armada rental mobil",
    "sewa mobil",
    " armada mobil sewaan",
    "fleet rental mobil indonesia",
    " armada rental mobil meda",
    " armada rental mobil surabaya",
  ],
  openGraph: {
    title: "Armada Rental Mobil - PT.VICKY RENTCAR NUSANTARA",
    description:
      "Lihat lengkap armada rental mobil kami untuk berbagai kebutuhan perjalanan.",
  },
};

const serviceCategoryColors = {
  VIP: "bg-amber-500",
  Executive: "bg-blue-500",
  Group: "bg-green-500",
  Special: "bg-purple-500",
};

const serviceCategoryLabels = {
  VIP: "VIP & Luxury",
  Executive: "Executive",
  Group: "Group & Travel",
  Special: "Special",
};

export default function FleetPage() {
  // Group cars by service category for display
  const vipCars = cars.filter((car) => car.serviceCategory === "VIP");
  const executiveCars = cars.filter(
    (car) => car.serviceCategory === "Executive"
  );
  const groupCars = cars.filter((car) => car.serviceCategory === "Group");
  const specialCars = cars.filter((car) => car.serviceCategory === "Special");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary/20 text-primary border-primary/50 mb-6">
            Armada Terlengkap di Indonesia
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Armada Premium Kami
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Pilihan kendaraan lengkap dari mobil mewah hingga kendaraan
            keluarga, semuanya dalam kondisi terawat dan siap menemani
            perjalanan Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a
                href="https://wa.me/6282363389893?text=Halo%20saya%20ingin%20menyewa%20mobil.%20Bisa%20dijelaskan%20lebih%20 lanjut%20mengenai%20 armada%20dan%20harganya?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Pesan via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white border-slate-600"
            >
              <Link href="/layanan">
                Lihat Layanan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-full"
            >
              <a href="#vip">VIP & Luxury</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <a href="#executive">Executive</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <a href="#group">Group & Travel</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <a href="#special">Special Purpose</a>
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Badge className="bg-amber-500 text-black">VIP & Luxury</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Armada VIP & Premium
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {vipCars.map((car, index) => (
              <Card
                key={car.slug}
                className="overflow-hidden group bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500/20 hover:border-amber-500/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-amber-500 text-black text-xs">
                        VIP
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-bold">{car.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1">
                      {car.highlights.slice(0, 2).map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs border-amber-500/30 text-amber-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    {/* Specs */}
                    <div className="flex justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {car.specs[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Fuel className="w-3 h-3" />
                        {car.specs[2]}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={`https://wa.me/6282363389893?text=Halo%20saya%20ingin%20sewa%20${encodeURIComponent(
                        car.name
                      )}%20melalui%20Vicky%20Rental%20Nusantara`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan via WA
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Section */}
      <section id="executive" className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Badge className="bg-blue-500">Executive</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Armada Executive & Corporate
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {executiveCars.map((car) => (
              <Card
                key={car.slug}
                className="overflow-hidden group bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-blue-500 text-white text-xs">
                        {serviceCategoryLabels[car.serviceCategory]}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-bold">{car.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {car.highlights.slice(0, 2).map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs border-blue-500/30 text-blue-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {car.specs[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Fuel className="w-3 h-3" />
                        {car.specs[2]}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={`https://wa.me/6282363389893?text=Halo%20saya%20ingin%20sewa%20${encodeURIComponent(
                        car.name
                      )}%20melalui%20Vicky%20Rental%20Nusantara`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan via WA
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Group Section */}
      <section id="group" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Badge className="bg-green-500">Group & Travel</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Armada Group & Travel
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {groupCars.map((car) => (
              <Card
                key={car.slug}
                className="overflow-hidden group bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500 text-white text-xs">
                        Group
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-bold">{car.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {car.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs border-green-500/30 text-green-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {car.specs[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Fuel className="w-3 h-3" />
                        {car.specs[2]}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={`https://wa.me/6282363389893?text=Halo%20saya%20ingin%20sewa%20${encodeURIComponent(
                        car.name
                      )}%20melalui%20Vicky%20Rental%20Nusantara`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan via WA
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Section */}
      <section id="special" className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Badge className="bg-purple-500">Special Purpose</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Armada Special Purpose
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {specialCars.map((car) => (
              <Card
                key={car.slug}
                className="overflow-hidden group bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-purple-500 text-white text-xs">
                        Special
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-white font-bold">{car.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {car.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="text-xs border-purple-500/30 text-purple-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {car.specs[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Fuel className="w-3 h-3" />
                        {car.specs[2]}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={`https://wa.me/6282363389893?text=Halo%20saya%20ingin%20sewa%20${encodeURIComponent(
                        car.name
                      )}%20melalui%20Vicky%20Rental%20Nusantara`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan via WA
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Tidak Menemukan Kendaraan yang Sesuai?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk permintaan khusus atau fleet yang tidak tercantum
            di atas. Tim kami siap membantu Anda menemukan kendaraan yang tepat.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <a
              href="https://wa.me/6282363389893?text=Halo%20saya%20ingin%20menyewa%20mobil%20dengan%20permintaan%20khusus.%20Bisa%20dibantu?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

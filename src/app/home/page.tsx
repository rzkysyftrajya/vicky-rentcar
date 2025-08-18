
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Car, MapPin, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageZoom } from "@/components/ui/image-zoom";

export default function Home() {
    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

  const services = [
    {
      title: "Mobil Unggulan & Sopir Profesional",
      description: "Pilihan mobil terbaik dengan sopir berpengalaman.",
      icon: <Car className="w-12 h-12 text-primary" />
    },
    {
      title: "Penjemputan Tepat Waktu",
      description: "Layanan antar jemput bandara dan stasiun.",
      icon: <User className="w-12 h-12 text-primary" />
    },
    {
      title: "Wisata Populer di Medan",
      description: "Jelajahi destinasi terbaik di Medan.",
      icon: <MapPin className="w-12 h-12 text-primary" />
    }
  ];

  const fleet = [
    { name: "Toyota Avanza", image: "https://placehold.co/600x400.png", hint: "toyota avanza" },
    { name: "Mitsubishi Xpander", image: "https://placehold.co/600x400.png", hint: "mitsubishi xpander" },
    { name: "Toyota Innova Reborn", image: "https://placehold.co/600x400.png", hint: "toyota innova" },
    { name: "Toyota Alphard", image: "https://placehold.co/600x400.png", hint: "toyota alphard" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-background text-foreground">
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <ImageZoom
            src="https://placehold.co/1920x1080.png"
            alt="Pemandangan indah Danau Toba"
            data-ai-hint="scenic road lake toba"
            fill
            className="object-cover"
            priority
            isZoomable={false}
          />
          <div className="relative z-20 container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
              {...animationProps}
            >
              VICKY RENTCAR
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto"
              {...animationProps}
              transition={{ delay: 0.2 }}
            >
              Jelajahi keindahan Medan dan sekitarnya dengan nyaman dan aman bersama layanan sewa mobil terbaik.
            </motion.p>
            <motion.div
              {...animationProps}
              transition={{ delay: 0.4 }}
            >
                <Button size="lg" asChild className="mt-8">
                    <Link href="#booking">Pesan Sekarang <ArrowRight className="w-5 h-5 ml-2"/></Link>
                </Button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Layanan Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Kami menyediakan berbagai layanan untuk memenuhi semua kebutuhan perjalanan Anda di Medan.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet" className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Armada Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Pilihan mobil yang terawat dan siap menemani perjalanan Anda.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {fleet.map((car) => (
                <Card key={car.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <ImageZoom
                      src={car.image}
                      alt={car.name}
                      data-ai-hint={car.hint}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl">{car.name}</CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
             <Button asChild variant="outline" className="mt-8">
                <Link href="/fleet">Lihat Semua Armada</Link>
            </Button>
          </div>
        </section>

        <section id="booking" className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Sewa Mobil Sekarang</h2>
                <Card className="p-8 shadow-lg">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="pickup-date">Tanggal Mulai</label>
                                <input className="w-full rounded-md border border-input bg-background px-3 py-2" id="pickup-date" type="date" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="return-date">Tanggal Selesai</label>
                                <input className="w-full rounded-md border border-input bg-background px-3 py-2" id="return-date" type="date" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="car-type">Tipe Mobil</label>
                            <select className="w-full rounded-md border border-input bg-background px-3 py-2" id="car-type">
                                <option>Pilih tipe mobil</option>
                                <option value="avanza">Toyota Avanza</option>
                                <option value="xpander">Mitsubishi Xpander</option>
                                <option value="innova">Toyota Innova Reborn</option>
                                <option value="alphard">Toyota Alphard</option>
                            </select>
                        </div>
                         <div className="space-y-2">
                            <label htmlFor="service-type">Jenis Layanan</label>
                            <select className="w-full rounded-md border border-input bg-background px-3 py-2" id="service-type">
                                <option>Pilih jenis layanan</option>
                                <option value="with-driver">Dengan Sopir</option>
                                <option value="without-driver">Lepas Kunci</option>
                            </select>
                        </div>
                        <Button type="submit" className="w-full" size="lg">Kirim Permintaan</Button>
                    </form>
                </Card>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

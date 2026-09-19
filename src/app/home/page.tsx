"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  MapPin,
  User,
  Star,
  Quote,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageZoom } from "@/components/ui/image-zoom";

const testimonials = [
  {
    name: "Iffat Resources",
    role: "Pelanggan dari Malaysia",
    content:
      "Terbaik! I have great experience renting with Vicky Rental Nusantara. Mr Vicky is best in client care, very communicative, fast responsive. I booked car all the way from Malaysia for my Husband arriving in Indonesia. Within 30 minutes, i was given choices to choose. Driver arrived before time with personalized arrival name plate. Perfect punctuality. The car was tip top condition. Highly recommend!",
    rating: 5,
    avatar: "IR",
    verified: true,
  },
  {
    name: "Dandia Agung",
    role: "Pelanggan Tetap",
    content:
      "Mobil tersedia banyak pilihan, harga cukup bersahabat. Proses ambil & pengembalian juga cepat, tanpa ribet. Overall puas, bakal repeat order kalau keperluan lagi.",
    rating: 5,
    avatar: "DA",
    verified: true,
  },
  {
    name: "Arbanie Vinsmoke",
    role: "Wisatawan",
    content:
      "Pelayanan ramah, unit mobil bersih dan terawat. Proses sewa juga gampang, admin fast respon. Cocok buat yang butuh kendaraan harian maupun perjalanan keluar kota. Recommended 👍",
    rating: 5,
    avatar: "AV",
    verified: true,
  },
  {
    name: "Balqis Khanza",
    role: "Pelanggan Puas",
    content:
      "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya,,👍👍👍",
    rating: 5,
    avatar: "BK",
    verified: true,
  },
  {
    name: "Alif Hayza",
    role: "Pelanggan",
    content:
      "Mantap pelayanan nya bagus, mobil nya bagus bersih wangi mantap lah...",
    rating: 5,
    avatar: "AH",
    verified: true,
  },
];

export default function Home() {
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const services = [
    {
      title: "Mobil Unggulan & Sopir Profesional",
      description: "Pilihan mobil terbaik dengan sopir berpengalaman.",
      icon: <Car className="w-12 h-12 text-primary" />,
    },
    {
      title: "Penjemputan Tepat Waktu",
      description: "Layanan antar jemput bandara dan stasiun.",
      icon: <User className="w-12 h-12 text-primary" />,
    },
    {
      title: "Wisata Populer di Medan",
      description: "Jelajahi destinasi terbaik di Medan.",
      icon: <MapPin className="w-12 h-12 text-primary" />,
    },
  ];

  const fleet = [
    {
      name: "Toyota Avanza",
      image: "/armada/toyota-all-new-avanza.webp",
      hint: "toyota avanza",
    },
    {
      name: "Mitsubishi Xpander",
      image: "/armada/xpander.webp",
      hint: "mitsubishi xpander",
    },
    {
      name: "Toyota Innova Reborn",
      image: "/armada/innova-reborn.webp",
      hint: "toyota innova",
    },
    {
      name: "Toyota Alphard",
      image: "/armada/alphard-new.webp",
      hint: "toyota alphard",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-background text-foreground">
        <section
          id="home"
          className="relative h-screen flex items-center justify-center text-center text-white"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <ImageZoom
            src="/destinasi-wisata/danau-toba.jpg"
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
              Jelajahi keindahan Medan dan sekitarnya dengan nyaman dan aman
              bersama layanan sewa mobil terbaik.
            </motion.p>
            <motion.div {...animationProps} transition={{ delay: 0.4 }}>
              <Button size="lg" asChild className="mt-8">
                <Link href="#booking">
                  Pesan Sekarang <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Layanan Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Kami menyediakan berbagai layanan untuk memenuhi semua kebutuhan
              perjalanan Anda di Medan.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
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
                <Card
                  key={car.name}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative w-full aspect-[2/3] overflow-hidden">
                      <ImageZoom
                        src={car.image}
                        alt={car.name}
                        data-ai-hint={car.hint}
                        fill
                        className="object-contain"
                      />
                    </div>
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground mb-12">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut pengalaman
              mereka bersama VRN Rent Car.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 relative text-left"
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-600/10" />

                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Ulasan Jujur
                    </div>
                  )}

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-3 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm relative z-10 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-12">
              <Link href="/medan/testimonials">Lihat Semua Testimoni</Link>
            </Button>
          </div>
        </section>

        <section id="booking" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Sewa Mobil Sekarang
              </h2>
              <Card className="p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="pickup-date">Tanggal Mulai</label>
                      <input
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        id="pickup-date"
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="return-date">Tanggal Selesai</label>
                      <input
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        id="return-date"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="car-type">Tipe Mobil</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      id="car-type"
                    >
                      <option>Pilih tipe mobil</option>
                      <option value="avanza">Toyota Avanza</option>
                      <option value="xpander">Mitsubishi Xpander</option>
                      <option value="innova">Toyota Innova Reborn</option>
                      <option value="alphard">Toyota Alphard</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service-type">Jenis Layanan</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      id="service-type"
                    >
                      <option>Pilih jenis layanan</option>
                      <option value="with-driver">Dengan Sopir</option>
                      <option value="without-driver">Lepas Kunci</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Kirim Permintaan
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

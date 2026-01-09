export const revalidate = 0; // Nonaktifkan SSG / ISR

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Plane,
  KeyRound,
  User,
  MapPin,
  ShieldCheck,
  Star,
  Clock,
  Users,
  Fuel,
  MessageCircle,
  Car,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import { ImageZoom } from "@/components/ui/image-zoom";
import React, { Suspense } from "react";
import { useAppContext } from "./context/AppContext";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SocialMediaCard from "@/components/layout/SocialMediaCard";

const HomeSearchForm = React.lazy(
  () => import("@/components/layout/HomeSearchForm")
);

export default function Home() {
  const { getFormattedPrice } = useAppContext();
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeInOut" },
  };

  const services = [
    {
      title: "Antar Jemput Bandara",
      description:
        "Layanan tepat waktu dari dan ke seluruh bandara utama di Nusantara.",
      icon: <Plane className="w-10 h-10 text-primary" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Rental Mobil Lepas Kunci",
      description:
        "Kebebasan menjelajahi seluruh pelosok Nusantara dengan berbagai pilihan mobil sesuai kebutuhan Anda.",
      icon: <KeyRound className="w-10 h-10 text-primary" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Rental Mobil Plus Driver",
      description:
        "Nikmati perjalanan tanpa lelah dengan sopir profesional dan berpengalaman di seluruh Indonesia.",
      icon: <User className="w-10 h-10 text-primary" />,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Paket Wisata Nusantara",
      description:
        "Jelajahi keindahan tersembunyi di seluruh Indonesia dengan paket wisata eksklusif kami.",
      icon: <MapPin className="w-10 h-10 text-primary" />,
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  const fleet = [
    {
      slug: "honda-brio",
      name: "Honda Brio",
      image: "/armada/honda-brio.webp",
      hint: "honda brio",
      category: "City Car",
      alt: "Sewa mobil Honda Brio di seluruh Indonesia",
      rating: 4.7,
      capacity: 5,
      fuel: "Bensin",
      prices: { manual: 300000, matic: 350000, driver: 600000 },
    },
    {
      slug: "toyota-all-new-avanza",
      name: "Toyota All New Avanza",
      image: "/armada/toyota-all-new-avanza.webp",
      hint: "toyota avanza",
      category: "MPV",
      alt: "Sewa mobil Toyota All New Avanza di seluruh Indonesia",
      rating: 4.8,
      capacity: 7,
      fuel: "Bensin",
      prices: { manual: 400000, matic: 450000, driver: 700000 },
    },
    {
      slug: "mitsubishi-xpander",
      name: "Mitsubishi Xpander",
      image: "/armada/xpander.webp",
      hint: "mitsubishi xpander",
      category: "MPV",
      alt: "Sewa mobil Mitsubishi Xpander di seluruh Indonesia",
      rating: 4.8,
      capacity: 7,
      fuel: "Bensin",
      prices: { manual: 400000, matic: 450000, driver: 700000 },
    },
    {
      slug: "toyota-innova-reborn",
      name: "Toyota Innova Reborn",
      image: "/armada/innova-reborn.webp",
      hint: "toyota innova reborn",
      category: "MPV",
      alt: "Sewa mobil Toyota Innova Reborn di seluruh Indonesia",
      rating: 4.9,
      capacity: 7,
      fuel: "Bensin",
      prices: { manual: 550000, matic: 600000, driver: 900000 },
    },
    {
      slug: "toyota-fortuner",
      name: "Toyota Fortuner",
      image: "/armada/fortuner.webp",
      hint: "toyota fortuner",
      category: "SUV",
      alt: "Sewa mobil Toyota Fortuner di seluruh Indonesia",
      rating: 4.9,
      capacity: 7,
      fuel: "Bensin",
      prices: { driver: 1300000 },
    },
    {
      slug: "toyota-alphard-new",
      name: "Toyota Alphard New",
      image: "/armada/alphard-new.webp",
      hint: "toyota alphard",
      category: "Luxury",
      alt: "Sewa mobil Toyota Alphard New di seluruh Indonesia",
      rating: 5.0,
      capacity: 6,
      fuel: "Bensin",
      prices: { driver: 3000000 },
    },
  ];

  const whyUs = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Armada Terbaru & Terawat",
      description:
        "Kendaraan kami dicek rutin untuk menjamin performa dan kebersihan di seluruh cabang kami di Nusantara.",
    },
    {
      icon: <Tag className="w-8 h-8 text-primary" />,
      title: "Harga Kompetitif & Transparan",
      description:
        "Kami menawarkan tarif sewa terbaik di seluruh Indonesia tanpa biaya tersembunyi.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Asuransi & Keamanan",
      description:
        "Perjalanan Anda dilindungi asuransi untuk ketenangan pikiran di setiap kilometer.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Layanan Pelanggan 24/7",
      description:
        "Tim kami siap membantu Anda kapan saja, memastikan kebutuhan rental Anda terpenuhi di mana pun Anda berada.",
    },
  ];

  const destinations = [
    {
      name: "Danau Toba, Sumatera Utara",
      description:
        "Nikmati keindahan danau vulkanik terbesar di dunia dan budaya Batak yang kaya.",
      image: "/destinasi-wisata/danau-toba.jpg",
      hint: "lake toba",
      alt: "Pemandangan indah Danau Toba, destinasi wisata Sumatera Utara",
    },
    {
      name: "Ubud, Bali",
      description:
        "Jelajahi pusat budaya dan spiritual Bali dengan sawah terasering yang ikonik.",
      image: "/destinasi-wisata/ubud-bali.jpg",
      hint: "ubud rice terrace",
      alt: "Sawah terasering di Ubud, tujuan wisata populer di Bali",
    },
    {
      name: "Candi Borobudur, Jawa Tengah",
      description:
        "Kunjungi candi Buddha terbesar di dunia, sebuah mahakarya arsitektur yang megah.",
      image: "/destinasi-wisata/candi-borobudur.jpg",
      hint: "borobudur temple",
      alt: "Pemandangan Candi Borobudur yang megah",
    },
    {
      name: "Raja Ampat, Papua Barat",
      description:
        "Surga bagi penyelam dengan keanekaragaman hayati laut yang luar biasa dan pulau-pulau karst yang ikonik.",
      image: "/destinasi-wisata/raja-ampat.jpg",
      hint: "raja ampat islands",
      alt: "Kepulauan Wayag di Raja Ampat",
    },
  ];

  const paymentMethods = [
    {
      name: "BCA",
      image: "/pembayaran/bca.png",
      hint: "BCA logo",
      alt: "Logo Bank BCA",
    },
    {
      name: "Mandiri",
      image: "/pembayaran/mandiri.png",
      hint: "Mandiri logo",
      alt: "Logo Bank Mandiri",
    },
    {
      name: "BRI",
      image: "/pembayaran/bri.png",
      hint: "BRI logo",
      alt: "Logo Bank BRI",
    },
    {
      name: "BNI",
      image: "/pembayaran/bni.png",
      hint: "BNI logo",
      alt: "Logo Bank BNI",
    },
    {
      name: "GoPay",
      image: "/pembayaran/bca.png",
      hint: "GoPay logo",
      alt: "Logo GoPay",
    },
    {
      name: "OVO",
      image: "/pembayaran/mandiri.png",
      hint: "OVO logo",
      alt: "Logo OVO",
    },
    {
      name: "Dana",
      image: "/pembayaran/bni.png",
      hint: "Dana logo",
      alt: "Logo Dana",
    },
    {
      name: "BCA",
      image: "/pembayaran/bca.png",
      hint: "BCA logo",
      alt: "Logo Bank BCA",
    },
    {
      name: "Mandiri",
      image: "/pembayaran/mandiri.png",
      hint: "Mandiri logo",
      alt: "Logo Bank Mandiri",
    },
    {
      name: "BRI",
      image: "/pembayaran/bri.png",
      hint: "BRI logo",
      alt: "Logo Bank BRI",
    },
    {
      name: "BNI",
      image: "/pembayaran/bni.png",
      hint: "BNI logo",
      alt: "Logo Bank BNI",
    },
    {
      name: "GoPay",
      image: "/pembayaran/bca.png",
      hint: "GoPay logo",
      alt: "Logo GoPay",
    },
    {
      name: "OVO",
      image: "/pembayaran/mandiri.png",
      hint: "OVO logo",
      alt: "Logo OVO",
    },
    {
      name: "Dana",
      image: "/pembayaran/bni.png",
      hint: "Dana logo",
      alt: "Logo Dana",
    },
  ];

  const waText =
    "Halo, saya tertarik untuk menyewa mobil. Bisa berikan saya informasi lebih lanjut?";
  const encodedWaText = encodeURIComponent(waText);

  return (
    <>
      <motion.section
        id="home"
        className="relative h-[80vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <ImageZoom
            src="/hero-section.webp"
            alt="Pemandangan jalan indah di Nusantara dengan mobil rental"
            data-ai-hint="scenic road car indonesia"
            fill
            className="object-cover"
            priority
            isZoomable={false}
            fetchPriority="high"
          />
        </motion.div>
        <div className="relative z-20 container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient"
            {...animationProps}
          >
            PT.VICKY RENTCAR NUSANTARA
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.2 }}
          >
            Selamat datang di PT.VICKY RENTCAR NUSANTARA. Jelajahi keindahan
            Nusantara dengan percaya diri. Kami menyediakan armada terbaik dan
            layanan premium untuk setiap perjalanan Anda.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto mt-6"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Link href="/fleet">
                  Lihat Pilihan Mobil <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300 shadow-lg"
              >
                <a
                  href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Booking via WA
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Suspense fallback={<div className="h-64" />}>
        <HomeSearchForm />
      </Suspense>

      <motion.section
        id="services"
        className="py-24 bg-background text-foreground"
        {...animationProps}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
            Layanan Lengkap di Seluruh Nusantara
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Dari kebutuhan personal hingga korporat, kami menyediakan solusi
            transportasi yang lengkap dan andal di seluruh penjuru Indonesia.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.className} p-8 border border-border/70 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card text-card-foreground transform hover:-translate-y-2 group group-hover:animate-shimmer`}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 bg-gradient-to-br from-primary/20 to-blue-500/10 p-3 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
            <motion.div
              className={`md:col-span-3 md:row-span-1 p-8 border border-border/70 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card text-card-foreground transform hover:-translate-y-2 group group-hover:animate-shimmer`}
              custom={3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4 bg-gradient-to-br from-primary/20 to-blue-500/10 p-3 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {services[3].icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {services[3].title}
              </h3>
              <p className="text-muted-foreground">{services[3].description}</p>
            </motion.div>
          </div>
          <p className="mt-12 text-muted-foreground">
            Butuh layanan spesifik? Lihat{" "}
            <Link
              href="/services"
              className="text-primary hover:underline font-semibold"
            >
              semua layanan kami
            </Link>{" "}
            atau hubungi untuk{" "}
            <Link
              href="/long-term-rental"
              className="text-primary hover:underline font-semibold"
            >
              sewa jangka panjang
            </Link>
            .
          </p>
        </div>
      </motion.section>

      <motion.section
        id="fleet"
        className="py-24 bg-secondary"
        {...animationProps}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
            Armada Unggulan Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pilihan armada lengkap dan terawat siap menemani perjalanan Anda di
            seluruh penjuru Nusantara.
          </p>
          <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((car, index) => {
              const waTextCar = `Halo, saya tertarik untuk menyewa ${car.name}. Mohon informasinya.`;
              const encodedWaTextCar = encodeURIComponent(waTextCar);

              return (
                <div key={index} className="p-1 h-full block">
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-card text-left h-full group group-hover:animate-shimmer">
                    <CardHeader className="p-0 relative">
                      <div className="block relative h-56 w-full">
                        <ImageZoom
                          src={car.image}
                          alt={car.alt}
                          data-ai-hint={car.hint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          isZoomable={false}
                        />
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <div className="bg-background/80 text-foreground text-xs font-bold px-3 py-2 rounded-full backdrop-blur-sm shadow-md border-border/20 border">
                          Mulai{" "}
                          <span className="text-primary">
                            {getFormattedPrice(
                              car.prices.manual ||
                                car.prices.matic ||
                                car.prices.driver ||
                                0
                            )}
                          </span>
                          /hari
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="mb-2 text-xl text-primary group-hover:text-blue-400 transition-colors">
                        {car.name}
                      </CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-muted-foreground font-semibold">
                          {car.rating}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-between items-center w-full text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{car.capacity} Penumpang</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="w-4 h-4" />
                          <span>{car.fuel}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-12 group">
            <Link href="/fleet">
              Lihat Semua Armada
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        id="why-us"
        className="py-24 bg-background text-foreground"
        {...animationProps}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 md:h-auto md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
            <ImageZoom
              src="/section.webp"
              alt="Garasi mobil rental yang rapi dan terawat di salah satu cabang di Indonesia"
              data-ai-hint="car garage neat"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
              Pelayanan Terbaik, Pengalaman Tak Terlupakan di Seluruh Indonesia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami berkomitmen untuk memberikan pengalaman sewa mobil yang aman,
              nyaman, dan melebihi ekspektasi Anda di seluruh penjuru Nusantara.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6">
              {whyUs.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors duration-300"
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary/20 to-blue-500/10 p-3 rounded-xl">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="destinations"
        className="py-24 bg-secondary text-secondary-foreground"
        {...animationProps}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12 bg-card text-card-foreground p-8 rounded-2xl shadow-lg group-hover:animate-shimmer">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
              Jelajahi Pesona Nusantara
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Biarkan kami mengantar Anda ke tempat paling memukau di seluruh
              Indonesia dengan layanan sewa mobil wisata kami.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest) => (
              <Link
                href="/tour-guide"
                key={dest.name}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-card"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <ImageZoom
                    src={dest.image}
                    alt={dest.alt}
                    data-ai-hint={dest.hint}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    isZoomable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
                  <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">
                    {dest.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-12 group">
            <Link href="/tour-guide">
              Lihat Semua Destinasi
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </motion.section>

      <motion.section
        id="social"
        className="py-24 bg-background"
        {...animationProps}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
            Ikuti Petualangan Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Terhubung dengan kami di media sosial untuk mendapatkan penawaran
            terbaru, tips perjalanan, dan inspirasi destinasi di seluruh
            Nusantara.
          </p>
          <div className="mt-12 max-w-lg mx-auto">
            <SocialMediaCard />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="payment"
        className="py-24 bg-secondary"
        {...animationProps}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient text-center">
            Metode Pembayaran Mudah & Aman
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
            Kami menerima berbagai metode pembayaran untuk kemudahan transaksi
            sewa mobil Anda di seluruh Indonesia.
          </p>
          <div className="mt-12">
            <InfiniteMovingCards
              items={paymentMethods}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </motion.section>

      <motion.section className="py-24" {...animationProps}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground rounded-2xl p-12 shadow-2xl group-hover:animate-shimmer">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-extrabold">
                  Siap Memulai Petualangan Anda?
                </h2>
                <p className="mt-2 text-lg opacity-90 max-w-xl">
                  Jangan tunda lagi. Hubungi tim kami sekarang untuk mendapatkan
                  penawaran terbaik dan layanan rental mobil terpercaya di
                  seluruh Nusantara.
                </p>
              </div>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:scale-105 transition-transform flex-shrink-0"
              >
                <a
                  href={`https://wa.me/6282363389893?text=${encodedWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Pesan Sekarang via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

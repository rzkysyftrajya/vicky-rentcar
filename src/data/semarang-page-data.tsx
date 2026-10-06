"use client";
import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Award,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  PhoneCall,
  Mail,
  Clock as ClockIcon,
  Eye,
  X,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClientYear } from "@/components/ui/client-year";
import * as Dialog from "@radix-ui/react-dialog";

export const heroStats = [
  { num: "500+", label: "Pelanggan Puas" },
  { num: "50+", label: "Armada Siap" },
  { num: "24/7", label: "Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Users className="w-12 h-12 text-navy-600" />,
    title: "Perjalanan dengan Sopir sebagai Pilihan Utama",
    desc: "Nikmati perjalanan bersama sopir berpengalaman yang mengenal rute Semarang. Lepas kunci tersedia sebagai opsi sekunder untuk unit tertentu; Hiace selalu dengan sopir.",
  },
  {
    icon: <Car className="w-12 h-12 text-navy-600" />,
    title: "Armada Lengkap & Terawat",
    desc: "Pilih kendaraan sesuai kebutuhan perjalanan; tim kami mengonfirmasi unit dan layanan yang tersedia sebelum pemesanan.",
  },
  {
    icon: <Clock className="w-12 h-12 text-navy-600" />,
    title: "Layanan 24/7",
    desc: "Booking kapan pun, termasuk layanan antar-jemput Bandara Ahmad Yani dengan sopir.",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-navy-600" />,
    title: "Kendaraan Terawat",
    desc: "Armada dirawat rutin dan diasuransikan untuk mendukung perjalanan yang nyaman.",
  },
  {
    icon: <Star className="w-12 h-12 text-navy-600" />,
    title: "Antar-Jemput Bandara Ahmad Yani",
    desc: "Koordinasikan jadwal penerbangan dan tujuan Anda agar penjemputan dengan sopir dapat diatur.",
  },
];

export const carOptions = [
  {
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6-7 Orang",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    popular: false,
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    name: "Daihatsu Xenia",
    type: "MPV",
    capacity: "6-7 Orang",
    features: ["Irit BBM", "Nyaman", "Cocok Keluarga"],
    popular: false,
    image: "/armada/daihatsu-sigra.webp",
  },
  {
    name: "Innova Reborn",
    type: "Family MPV",
    capacity: "6-7 Orang",
    features: ["Extra Comfort", "Premium Audio", "Kamera Parkir"],
    popular: true,
    image: "/armada/innova-reborn.webp",
  },
  {
    name: "Innova Zenix",
    type: "Modern MPV",
    capacity: "6-7 Orang",
    features: ["Sunroof", "Hybrid Engine", "Captain Seat"],
    popular: false,
    image: "/armada/innova-zenix .webp",
  },
  {
    name: "Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Gagah & Tangguh", "Mesin Diesel", "4x4 Ready"],
    popular: false,
    image: "/armada/fortuner.webp",
  },
  {
    name: "Pajero",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Desain Sporty", "Sunroof", "Performa Handal"],
    popular: false,
    image: "/armada/pajero.webp",
  },
  {
    name: "Hiace Premio",
    type: "Minibus",
    capacity: "14 Orang",
    features: [
      "Kabin Luas",
      "AC Plafon",
      "Cocok Rombongan",
      "Khusus dengan sopir",
    ],
    popular: false,
    image: "/armada/hiace-premio.webp",
  },
  {
    name: "Alphard",
    type: "Luxury MPV",
    capacity: "6-7 Orang",
    features: ["Captain Seat", "Entertainment", "Premium Leather"],
    popular: false,
    image: "/armada/alphard-new.webp",
  },
];

export const bookingSteps = [
  {
    icon: <Phone className="w-12 h-12 text-green-600" />,
    title: "Pilih Mobil",
    desc: "Hubungi via WhatsApp, pilih mobil & tanggal yang diinginkan.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-green-600" />,
    title: "Hubungi WhatsApp",
    desc: "Tim kami konfirmasi ketersediaan & detail booking.",
  },
  {
    icon: <Check className="w-12 h-12 text-green-600" />,
    title: "Mobil Diantar",
    desc: "Driver antar mobil ke lokasi Anda, siap berangkat.",
  },
];

export const destinations = [
  {
    name: "Lawang Sewu",
    desc: "Jelajahi gedung bersejarah ikonik Semarang dengan sopir lokal.",
  },
  {
    name: "Kota Lama Semarang",
    desc: "Kunjungi kawasan heritage, bangunan tua, dan kafe di pusat kota.",
  },
  {
    name: "Brown Canyon",
    desc: "Rencanakan perjalanan ke panorama tebing di pinggiran Semarang.",
  },
  {
    name: "Klenteng Sam Poo Kong",
    desc: "Singgahi kompleks bersejarah dan religi yang menjadi landmark kota.",
  },
  {
    name: "Simpang Lima",
    desc: "Jelajahi pusat kota yang ramai dengan pilihan kuliner dan aktivitas malam.",
  },
  {
    name: "Gang Lombok",
    desc: "Temukan kuliner khas Semarang di kawasan Pecinan yang terkenal dengan lumpianya.",
  },
];

export const culinarySpots = [
  {
    name: "Lumpia Semarang",
    icon: "🥟",
    loc: "Jl. Gang Lombok / Semarang Kota",
  },
  {
    name: "Tahu Gimbal",
    icon: "🍲",
    loc: "Pasar Semawis / Semarang Lama",
  },
  {
    name: "Wingko Babat",
    icon: "🫓",
    loc: "Sekitar Simpang Lima",
  },
];

export const testimonials = [
  {
    name: "Dewi Prasetya",
    city: "Semarang",
    text: "Pelayanan cepat dan sopirnya ramah. Mobil bersih dan nyaman. Recommended!",
    rating: 5,
  },
  {
    name: "Rian H.",
    city: "Semarang",
    text: "Booking via WhatsApp gampang, mobil datang on-time. Mantap lah.",
    rating: 5,
  },
  {
    name: "Alya",
    city: "Jakarta",
    text: "We did a one-day tour to Brown Canyon & Sam Poo Kong — driver helpful and punctual.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    city: "Yogyakarta",
    text: "Armada lengkap, harga transparan. Sudah 3x pakai VRN, selalu puas.",
    rating: 5,
  },
];

export const promo = {
  title: "Promo Pengunjung Halaman Semarang",
  benefits: [
    "Tanpa DP",
    "Bisa COD",
    "Free Air Mineral",
    "Free Pickup Bandara A. Yani",
  ],
};

export const faqs = [
  {
    q: "Apakah tersedia sewa mobil Semarang dengan sopir?",
    a: "Ya. Dengan sopir adalah pilihan utama kami untuk perjalanan di Semarang. Lepas kunci dapat ditanyakan untuk unit tertentu; Hiace selalu disewakan khusus dengan sopir.",
  },
  {
    q: "Apakah tersedia sewa mobil lepas kunci?",
    a: "Lepas kunci tersedia sebagai opsi sekunder untuk unit tertentu, dengan persyaratan KTP asli, SIM A aktif, dan deposit sesuai jenis mobil. Hiace tidak tersedia lepas kunci dan hanya dapat dipesan dengan sopir. Tanyakan kelayakan unit dan persyaratannya melalui WhatsApp.",
  },
  {
    q: "Apakah bisa antar-jemput hotel atau Bandara Ahmad Yani?",
    a: "Ya, antar-jemput dengan sopir dapat diatur dari hotel, Bandara Ahmad Yani, dan lokasi lain di Semarang. Sampaikan jadwal serta tujuan perjalanan saat menghubungi kami.",
  },
  {
    q: "Metode pembayaran apa saja?",
    a: "Pembayaran dapat dilakukan melalui transfer bank (BCA, BNI, BRI, Mandiri), e-wallet, atau tunai saat pengembalian.",
  },
  {
    q: "Jam operasional?",
    a: "Layanan 24/7, booking via WhatsApp kapan saja.",
  },
  {
    q: "Service area Semarang?",
    a: "Semarang kota, Ungaran, Salatiga, Ambarawa, Demak, dan sekitarnya.",
  },
  {
    q: "Bisa drop luar kota (Jogja, Solo, Kudus)?",
    a: "Ya, tersedia dengan biaya tambahan sesuai jarak & durasi.",
  },
  {
    q: "Bagaimana jika ada komplain layanan?",
    a: "Hubungi kami langsung via WhatsApp, kami prioritaskan penyelesaian cepat & memuaskan.",
  },
];

export const travelTips = [
  {
    title: "Tips Berkendara di Semarang",
    tips: [
      "Gunakan aplikasi navigasi seperti Google Maps untuk menghindari kemacetan di jam sibuk.",
      "Perhatikan rambu lalu lintas dan patuhi batas kecepatan, terutama di area wisata.",
      "Bawa uang tunai untuk tol dan parkir, meskipun banyak tempat menerima e-money.",
      "Jika hujan, hindari genangan air di jalan-jalan utama seperti Jl. Pandanaran.",
    ],
  },
  {
    title: "Rekomendasi Waktu Terbaik Berkunjung",
    tips: [
      "Musim kemarau (April-September) cocok untuk wisata outdoor seperti Brown Canyon.",
      "Hari kerja lebih sepi di destinasi wisata, sedangkan weekend ramai pengunjung.",
      "Festival budaya seperti Imlek di Kota Lama sering diadakan pada bulan Februari.",
      "Cuaca Semarang cukup panas, bawa topi dan sunscreen saat beraktivitas di luar ruangan.",
    ],
  },
  {
    title: "Kuliner Khas yang Wajib Dicoba",
    tips: [
      "Lumpia Semarang: Coba yang asli di Gang Lombok, tekstur kulitnya renyah dan isiannya gurih.",
      "Tahu Gimbal: Paduan tahu goreng dengan sayuran segar, cocok sebagai lauk atau camilan.",
      "Wingko Babat: Kue tradisional dari kelapa parut, manis dan legit. Beli di toko-toko di sekitar Simpang Lima.",
      "Jangan lupa mencoba nasi ayam Semarang yang gurih dan pedas.",
    ],
  },
  {
    title: "Transportasi dan Aksesibilitas",
    tips: [
      "Bandara Ahmad Yani mudah diakses dari pusat kota, sekitar 20-30 menit perjalanan.",
      "Gunakan Trans Semarang untuk transportasi umum yang murah dan nyaman.",
      "Banyak hotel di Semarang menyediakan shuttle service ke bandara.",
      "Untuk perjalanan antar kota, kereta api dari Stasiun Tawang sangat recommended.",
    ],
  },
];

const WA_NUMBER = "6282363389893";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "PT. VICKY RENTCAR NUSANTARA - Rental Mobil Semarang",
  description:
    "Layanan sewa mobil Semarang dengan sopir berpengalaman, armada lengkap, dan booking via WhatsApp 24/7.",
  url: "https://www.vickyrentcarnusantara.com/rental-mobil-semarang",
  telephone: "+62-823-6338-9893",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Semarang",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  areaServed: ["Semarang", "Ungaran", "Salatiga", "Ambarawa", "Demak"],
};

export function RentalMobilSemarangPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [animatedStats, setAnimatedStats] = useState(heroStats.map(() => 0));
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingCar, setBookingCar] = useState("");
  const [bookingService, setBookingService] = useState("with-driver");
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("fullName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const date = String(formData.get("rentalDate") ?? "").trim();
    const carName = String(formData.get("carName") ?? "").trim();
    const service = /hiace/i.test(carName)
      ? "dengan sopir (wajib untuk Hiace)"
      : bookingService === "self-drive"
        ? "lepas kunci"
        : "dengan sopir (pilihan utama)";
    const message = [
      "Halo, saya ingin booking mobil di Semarang.",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone}`,
      `Tanggal sewa: ${date}`,
      `Mobil: ${carName}`,
      `Layanan: ${service}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const animateStats = () => {
      heroStats.forEach((stat, index) => {
        const target = parseInt(stat.num.replace(/[^\d]/g, ""));
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 20);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const openCarModal = (car: any) => setSelectedCar(car);
  const closeCarModal = () => setSelectedCar(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-600 z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />

      <div className="w-full bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative bg-gradient-to-b from-slate-900 to-transparent text-white py-24 px-6 lg:px-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src="/semarang/hero-section.webp"
              alt="Armada PT Vicky Rentcar Nusantara untuk perjalanan di Semarang"
              fill
              className="object-cover opacity-40"
            />
          </motion.div>

          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                  PT. VICKY RENTCAR NUSANTARA
                </p>
                <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                  Rental Mobil Semarang dengan Sopir
                </h1>
                <p className="mt-4 text-lg text-slate-200 max-w-xl">
                  Nikmati perjalanan Semarang bersama sopir berpengalaman ke
                  Lawang Sewu, Simpang Lima, atau Bandara Ahmad Yani. Lepas
                  kunci tersedia sebagai opsi sekunder untuk unit tertentu;
                  Hiace selalu khusus dengan sopir.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-semibold shadow"
                  >
                    Chat WhatsApp
                  </a>
                  <a
                    href="#armada"
                    className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-semibold hover:bg-gray-100"
                  >
                    Lihat Armada
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/20"
                  >
                    Booking Sekarang
                  </button>
                </div>
                <p className="mt-4 text-sm text-slate-200">
                  Butuh katalog armada Semarang?{" "}
                  <Link
                    href="/semarang/"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Lihat pilihan mobil lainnya
                  </Link>
                  .
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  {heroStats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors"
                    >
                      <p className="text-2xl font-bold">
                        {animatedStats[i]}
                        {s.num.replace(/[^\d]/g, "")}
                      </p>
                      <p className="text-sm opacity-90">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/semarang/hero-section.webp"
                    alt="Armada VRN Semarang"
                    width={840}
                    height={560}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHY US */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Kenapa Pilih VRN Semarang?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUsPoints.map((w, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-xl hover:shadow-lg transition bg-white"
                >
                  <div className="mb-4 text-green-600">{w.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-600">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARMADA */}
        <section id="armada" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Armada Favorit
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {carOptions.map((car, i) => (
                <article
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="relative w-full h-44 bg-gray-50">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{car.name}</h3>
                        <p className="text-sm text-gray-500">
                          {car.type} • {car.capacity}
                        </p>
                        {/hiace/i.test(car.name) && (
                          <p className="mt-1 text-sm font-semibold text-green-700">
                            Tersedia khusus dengan sopir
                          </p>
                        )}
                      </div>

                      {car.popular && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Paling Laris
                        </span>
                      )}
                    </div>

                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      {car.features.map((f, idx) => (
                        <li key={idx}>• {f}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex gap-3">
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=Saya%20mau%20sewa%20${encodeURIComponent(
                          car.name
                        )}%20di%20Semarang`}
                        className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
                      >
                        Tanya Ketersediaan & Pesan
                      </a>
                      <button
                        className="px-3 py-2 border rounded-lg text-sm"
                        onClick={() =>
                          window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: "smooth",
                          })
                        }
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOM CAR CONSULTATION */}
        <motion.section
          className="py-16 px-6 lg:px-16 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Tidak Menemukan Mobil yang Kamu Cari?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Jangan khawatir! Kami punya solusi untuk kebutuhan spesifik Anda.
              Konsultasikan dulu dengan tim kami untuk rekomendasi mobil yang
              tepat sesuai budget dan keperluan Anda.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Sesuai Budget</h3>
                <p className="text-sm text-gray-600">
                  Kami carikan mobil yang sesuai kantong Anda
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Kebutuhan Spesifik
                </h3>
                <p className="text-sm text-gray-600">
                  Mobil untuk event, wedding, atau keperluan khusus
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl mb-2">🚗</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Koleksi Lengkap
                </h3>
                <p className="text-sm text-gray-600">
                  Dari city car hingga luxury van, semua tersedia
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20konsultasi%20mobil%20yang%20cocok%20untuk%20kebutuhan%20saya`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Konsultasi Gratis Sekarang
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>

              <p className="text-sm text-gray-500 mt-4">
                Response dalam 5 menit • Gratis tanpa biaya konsultasi
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* DESTINATIONS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Rekomendasi Destinasi Semarang
            </h2>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((d, i) => (
                <li
                  key={i}
                  className="bg-white border-l-4 border-green-600 p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {d.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{d.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRAVEL TIPS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Tips Wisata & Kuliner Semarang
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {travelTips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {tip.title}
                  </h3>
                  <ul className="space-y-2">
                    {tip.tips.map((t, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULINARY */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Kuliner Wajib di Semarang
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {culinarySpots.map((c, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-5 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl">{c.icon}</div>
                  <h3 className="mt-3 font-semibold">{c.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.loc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Testimoni Pelanggan
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 shadow-sm"
                >
                  <p className="text-gray-700 italic">“{t.text}”</p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.city}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS */}
        <motion.section
          className="py-16 px-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  4.9/5
                </span>
                <span className="text-sm text-gray-500">dari 500+ ulasan</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apa Kata Pelanggan Kami?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ribuan pelanggan telah mempercayai layanan kami untuk perjalanan
                mereka di Semarang
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ahmad Rahman",
                  rating: 5,
                  text: "Sopir sangat ramah dan profesional. Mobil dalam kondisi prima. Sudah 3x sewa di VRN Semarang, selalu puas!",
                  date: "2 minggu lalu",
                  avatar: "👨‍💼",
                },
                {
                  name: "Siti Nurhaliza",
                  rating: 5,
                  text: "Booking via WhatsApp sangat mudah dan cepat. Harga transparan tanpa biaya tersembunyi. Recommended!",
                  date: "1 bulan lalu",
                  avatar: "👩‍💻",
                },
                {
                  name: "Budi Santoso",
                  rating: 5,
                  text: "Untuk acara keluarga besar, mobil Alphard yang disediakan sangat nyaman. Sopir on time dan sabar.",
                  date: "3 minggu lalu",
                  avatar: "👨‍👩‍👧‍👦",
                },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg">
                <Star className="w-5 h-5" />
                Ulasan pelanggan
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* HOTEL RECOMMENDATIONS */}
        <motion.section
          className="py-16 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Rekomendasi Hotel di Semarang
              </h2>
              <p className="text-lg text-gray-600">
                Partner hotel terbaik untuk melengkapi perjalanan Anda
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Hotel Santika Premiere Semarang",
                  rating: 4.5,
                  location: "Jl. Pandanaran No.116",
                  features: ["WiFi Gratis", "Kolam Renang", "Restoran"],
                },
                {
                  name: "Ibis Styles Semarang Simpang Lima",
                  rating: 4.3,
                  location: "Jl. KH. Ahmad Dahlan No.1",
                  features: [
                    "Breakfast Included",
                    "Modern Design",
                    "City Center",
                  ],
                },
                {
                  name: "Grand Candi Hotel Semarang",
                  rating: 4.4,
                  location: "Jl. Sisingamangaraja No.16",
                  features: ["Spa", "Fitness Center", "Business Center"],
                },
              ].map((hotel, i) => (
                <motion.div
                  key={i}
                  className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 w-full bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-4xl">🏨</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ {hotel.rating}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      📍 {hotel.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <motion.a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20booking%20${encodeURIComponent(
                          hotel.name
                        )}`}
                        className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Tanya Harga & Booking
                      </motion.a>
                      <motion.button
                        className="px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Detail
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">
                Tanyakan penawaran khusus untuk pelanggan rental mobil VRN.
              </p>
              <motion.a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20VRN%20Semarang,%20saya%20ingin%20info%20paket%20hotel%20+%20mobil`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Info Paket Hotel + Mobil
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Pertanyaan yang Sering Diajukan
            </h2>

            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white border rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                Siap Jelajah Semarang dengan Nyaman?
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Booking sekarang via WhatsApp — cepat & tanpa ribet.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                className="bg-black px-6 py-3 rounded-lg font-semibold hover:opacity-95"
              >
                Chat Sekarang
              </a>
              <Link
                href="#armada"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
              >
                Lihat Armada
              </Link>
            </div>
          </div>
        </section>

        {/* FLOATING WHATSAPP BUTTON */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden md:inline font-semibold">
              Chat WhatsApp
            </span>
          </a>
        </div>

        {/* CAR MODAL */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeCarModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedCar.name}
                      </h3>
                      <p className="text-gray-600">
                        {selectedCar.type} • {selectedCar.capacity}
                      </p>
                    </div>
                    {selectedCar.popular && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Paling Laris
                      </span>
                    )}
                  </div>
                  {/hiace/i.test(selectedCar.name) && (
                    <p className="mb-4 font-semibold text-green-700">
                      Tersedia khusus dengan sopir. Hiace tidak disewakan lepas
                      kunci.
                    </p>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Fitur Utama:</h4>
                      <ul className="space-y-1">
                        {selectedCar.features.map((f: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Spesifikasi Tambahan:
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Transmisi: Automatic</li>
                        <li>• Bahan Bakar: Pertamax / Solar</li>
                        <li>• AC: Double Blower</li>
                        <li>• Audio: Bluetooth Compatible</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=Saya%20mau%20sewa%20${encodeURIComponent(
                        selectedCar.name
                      )}%20di%20Semarang`}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                    >
                      Pesan Sekarang
                    </a>
                    <button
                      onClick={closeCarModal}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING MODAL */}
        <Dialog.Root
          open={isBookingModalOpen}
          onOpenChange={setIsBookingModalOpen}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 max-w-md w-full mx-4 z-50">
              <Dialog.Title className="text-2xl font-bold text-center mb-6">
                Booking Mobil Semarang
              </Dialog.Title>

              <form className="space-y-4" onSubmit={handleBookingSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="08123456789"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Tanggal Sewa
                  </label>
                  <input
                    type="date"
                    name="rentalDate"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mobil yang Dipilih
                  </label>
                  <select
                    name="carName"
                    value={bookingCar}
                    onChange={(event) => {
                      const nextCar = event.target.value;
                      setBookingCar(nextCar);
                      if (/hiace/i.test(nextCar)) {
                        setBookingService("with-driver");
                      }
                    }}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih mobil...</option>
                    {carOptions.map((car, i) => (
                      <option key={i} value={car.name}>
                        {car.name}
                        {/hiace/i.test(car.name)
                          ? " — khusus dengan sopir"
                          : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pilihan layanan
                  </label>
                  <select
                    name="service"
                    value={bookingService}
                    onChange={(event) => setBookingService(event.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="with-driver">Dengan sopir (direkomendasikan)</option>
                    <option
                      value="self-drive"
                      disabled={/hiace/i.test(bookingCar)}
                    >
                      Lepas kunci (unit tertentu)
                    </option>
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Hiace hanya tersedia dengan sopir.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kirim Booking Request
                </motion.button>
              </form>

              <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                ✕
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        {/* FOOTER */}
        <footer className="py-10 px-6 bg-slate-900 text-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold">PT. VICKY RENTCAR NUSANTARA</h4>
              <p className="mt-3 text-sm text-gray-300 max-w-sm">
                Pilihan utama untuk sewa mobil di Semarang & sekitarnya. Armada
                terawat, sopir profesional, layanan 24/7.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Kontak</h5>
              <p className="mt-2 text-sm">
                WhatsApp:{" "}
                <a
                  className="text-green-400"
                  href={`https://wa.me/${WA_NUMBER}`}
                >
                  +62 {WA_NUMBER.replace(/^62/, "")}
                </a>
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Area Layanan</h5>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>Semarang</li>
                <li>Ungaran</li>
                <li>Salatiga</li>
                <li>Ambarawa</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-400">
            © <ClientYear /> PT. VICKY RENTCAR NUSANTARA. Semua hak dilindungi.
          </div>
        </footer>
      </div>
    </>
  );
}

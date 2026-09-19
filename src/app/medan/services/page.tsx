import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import ServicesSection from "@/components/medan/ServicesSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import { MotionDiv } from "@/components/animations/MotionDiv";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Building,
  Plane,
  MapPin,
  Car,
  Users,
  Phone,
  Clock,
  CheckCircle,
  Star,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Layanan Rental Mobil Medan | Sewa Mobil Harian & Bulanan - VRN Rent Car",
  description:
    "VRN Rent Car Medan menyediakan layanan rental mobil harian, bulanan, antar jemput bandara, dan tour wisata. Armada lengkap dengan sopir profesional.",
  keywords:
    "layanan rental mobil medan, sewa mobil harian medan, rental mobil bulanan medan, antar jemput bandara kualanamu, tour wisata medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/services",
  },
  openGraph: {
    title: "Layanan Rental Mobil Medan | VRN Rent Car",
    description:
      "VRN Rent Car Medan - Layanan rental mobil lengkap dengan armada terawat dan sopir profesional.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/services",
    locale: "id_ID",
  },
};

const services = [
  {
    id: "daily",
    icon: Calendar,
    title: "Rental Mobil Harian",
    subtitle: "Perjalanan Sehari Penuh",
    description:
      "Sewa mobil untuk keperluan harian dengan sopir profesional. Ideal untuk meeting, shopping, atau wisata sehari.",
    features: [
      "Sopir profesional berpengalaman",
      "Bensin dan tol sudah termasuk",
      "AC dingin dan audio system",
      "Asuransi comprehensive",
      "Customer service 24/7",
    ],
    popular: true,
    color: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "monthly",
    icon: Building,
    title: "Rental Mobil Bulanan",
    subtitle: "Solusi Jangka Panjang",
    description:
      "Sewa mobil bulanan untuk kebutuhan bisnis atau personal dengan harga lebih ekonomis dan fleksibilitas tinggi.",
    features: [
      "Harga bulanan lebih ekonomis",
      "Fleksibilitas replace kendaraan",
      "Maintenance rutin included",
      "Payment bulanan",
      "Driver opsional",
    ],
    popular: false,
    color: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "airport",
    icon: Plane,
    title: "Antar Jemput Bandara",
    subtitle: "Tepat Waktu 24/7",
    description:
      "Layanan antar jemput ke dan dari Bandara Kualanamu dengan sopir yang menunggu di terminal kedatangan.",
    features: [
      "Penjemputan tepat waktu",
      "Sopir menunggu dengan placard",
      "Track real-time lokasi kendaraan",
      "Harga fix tanpa tambahan",
      "Layanan weekend & hari libur",
    ],
    popular: true,
    color: "bg-purple-500",
    image: "/medan/layanan/vip-airport-transfer.webp",
  },
  {
    id: "tour",
    icon: MapPin,
    title: "Tour Medan & Sekitanya",
    subtitle: "Jelajahi Sumatera Utara",
    description:
      "Tour ke destinasi wisata populer di Medan dan Sumatera Utara dengan paket lengkap include tour guide.",
    features: [
      "Tour guide lokal berpengalaman",
      "Paket include meals & drinks",
      "Destinasi wisata terbaik",
      "Paket fleksibel 1-7 hari",
      "Asuransi dan safety equipment",
    ],
    popular: false,
    color: "bg-orange-500",
    image: "/medan/layanan/luxury-city-tour.webp",
  },
  {
    id: "corporate",
    icon: Users,
    title: "Rental Korporat",
    subtitle: "Solusi Bisnis",
    description:
      "Layanan rental khusus untuk perusahaan dengan kontrak jangka panjang dan layanan premium.",
    features: [
      "Kontrak jangka panjang",
      "Dedicated account manager",
      "Fleet management system",
      "Priority booking",
      "Corporate billing",
    ],
    popular: false,
    color: "bg-indigo-500",
    image: "/medan/layanan/EXECUTIVE-CORPORATE.webp",
  },
  {
    id: "wedding",
    icon: Gift,
    title: "Sewa Mobil Pengantin",
    subtitle: "Momen Spesial Anda",
    description:
      "Sewa mobil mewah untuk hari pernikahan Anda dengan dekorasi special dan layanan premium.",
    features: [
      "Armada mewah premium",
      "Dekorasi mobil pengantin",
      "Sopir berjas rapi",
      "Photo session support",
      "Paket hari penuh",
    ],
    popular: false,
    color: "bg-pink-500",
    image: "/medan/layanan/VIP-WEDDING-CAR.webp",
  },
];

export default function ServicesPage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20layanan%20rental%20mobil%20di%20Medan";

  return (
    <main className={`${inter.className} min-h-screen`}>
      <Header />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/medan"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Medan
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Layanan</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/medan"
              className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Layanan Rental Mobil Medan
            </h1>
            <p className="text-xl text-green-100">
              Solusi lengkap untuk semua kebutuhan transportasi Anda di Medan
              dan sekitarnya
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detail Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan Anda
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionDiv
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  service.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${service.color}/20`} />
                  <div
                    className={`absolute top-4 left-4 ${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-gray-500">
                        +{service.features.length - 3} fitur lainnya
                      </p>
                    )}
                  </div>

                  <Button size="sm" className="w-full" asChild>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Pesan Layanan
                    </a>
                  </Button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memesan Layanan Kami?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Hubungi customer service kami untuk konsultasi dan mendapatkan
              informasi lebih lanjut
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/medan/airport">
                  <Plane className="w-5 h-5 mr-2" />
                  Pesan Airport Pickup
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}

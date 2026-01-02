import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import FeaturesSection from "@/components/medan/FeaturesSection";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import { MotionDiv } from "@/components/animations/MotionDiv";
import Link from "next/link";
import {
  ArrowLeft,
  Plane,
  Car,
  UserCheck,
  Clock,
  MapPin,
  Phone,
  Shield,
  Award,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keunggulan VRN Rent Car Medan | 5 Fitur Utama Rental Mobil",
  description:
    "Dapatkan 5 keunggulan utama VRN Rent Car Medan: antar jemput bandara, armada terawat, sopir profesional, layanan 24 jam, dan tour wisata terbaik.",
  keywords:
    "keunggulan vrn rent car medan, antar jemput bandara kualanamu, armada terawat medan, sopir profesional, layanan 24 jam, tour wisata medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/features",
  },
  openGraph: {
    title: "Keunggulan VRN Rent Car Medan | 5 Fitur Utama",
    description:
      "VRN Rent Car Medan menyediakan layanan terbaik dengan 5 keunggulan utama untuk kepuasan pelanggan.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/features",
    locale: "id_ID",
  },
};

const detailedFeatures = [
  {
    id: "airport",
    icon: Plane,
    title: "Antar Jemput Bandara Kualanamu",
    subtitle: "Layanan Tepat Waktu 24/7",
    description:
      "Nikmati layanan antar jemput ke dan dari Bandara Kualanamu yang tepat waktu dan terpercaya. Sopir kami akan menunggu Anda di terminal kedatangan dengan placard nama.",
    benefits: [
      "Penjemputan tepat waktu sesuai jadwal",
      "Sopir berpengalaman dan familiar dengan rute airport",
      "Kendaraan bersih dan terawat",
      "Harga transparan tanpa biaya tersembunyi",
      "Layanan 24/7 termasuk weekend dan hari libur",
    ],
    pricing: "Mulai dari Rp 150.000 per perjalanan",
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=800&auto=format&fit=crop",
    color: "bg-blue-500",
  },
  {
    id: "fleet",
    icon: Car,
    title: "Armada Mobil Terawat",
    subtitle: "50+ Kendaraan Siap Pakai",
    description:
      "Armada lengkap dari mobil ekonomi hingga luxury dengan kondisi prima. Semua kendaraan kami rutin diservis dan dalam kondisi siap pakai.",
    benefits: [
      "Kondisi kendaraan prima dan terawat",
      "Armada lengkap dari berbagai merk",
      "Rutin diservis dan diperbaharui",
      "AC dingin dan sistem audio lengkap",
      "Asuransi dan dokumen lengkap",
    ],
    pricing: "Mulai dari Rp 300.000 per hari",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
    color: "bg-green-500",
  },
  {
    id: "drivers",
    icon: UserCheck,
    title: "Sopir Profesional",
    subtitle: "Tim Sopir Berpengalaman",
    description:
      "Sopir-sopir kami berpengalaman, ramah, dan熟悉 jalan Medan. Mereka siap memberikan perjalanan yang aman dan nyaman.",
    benefits: [
      "Sopir berpengalaman dan familiar Medan",
      "Bahasa Indonesia yang baik dan benar",
      "Mengetahui rute terbaik dan tercepat",
      "Aman dan hati-hati dalam mengendarai",
      "Attitude ramah dan profesional",
    ],
    pricing: "Termasuk dalam paket rental",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    color: "bg-purple-500",
  },
  {
    id: "service",
    icon: Clock,
    title: "Layanan 24/7",
    subtitle: "Siap Melayani Kapan Saja",
    description:
      "Customer service dan operasional kami tersedia 24 jam sehari, 7 hari seminggu. Siap membantu kebutuhan darurat Anda.",
    benefits: [
      "Customer service 24/7",
      "Respons cepat untuk permintaan mendadak",
      "Layanan darurat tersedia",
      "Booking online dan offline",
      "Tracking kendaraan real-time",
    ],
    pricing: "Gratis konsultasi 24/7",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    color: "bg-orange-500",
  },
  {
    id: "tourism",
    icon: MapPin,
    title: "Tour Medan & Sekitarnya",
    subtitle: "Jelajahi Sumatera Utara",
    description:
      "Nikmati tour ke destinasi wisata populer di Medan dan Sumatera Utara dengan paket tour yang menarik dan harga terjangkau.",
    benefits: [
      "Tour guide lokal yang berpengalaman",
      "Paket tour fleksibel sesuai kebutuhan",
      "Destinasi wisata terbaik Sumatera Utara",
      "Paket include meals dan asuransi",
      "Harga kompetitif dan transparan",
    ],
    pricing: "Mulai dari Rp 500.000 per paket",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73ced?q=80&w=800&auto=format&fit=crop",
    color: "bg-red-500",
  },
];

const comparison = {
  us: [
    "Sopir profesional berpengalaman",
    "Layanan 24/7 tanpa weekends",
    "Armada terawat dan lengkap",
    "Harga transparan tanpa biaya tersembunyi",
    "Customer service responsif",
    "Asuransi dan dokumen lengkap",
    "Tour guide lokal berpengalaman",
    "Payment fleksibel (cash/kartu)",
  ],
  others: [
    "Sopir kadang kurang berpengalaman",
    "Layanan terbatas saat weekend",
    "Kondisi armada bervariasi",
    "Biaya tambahan yang tidak jelas",
    "Customer service lambat",
    "Asuransi terbatas",
    "Tour guide standar",
    "Payment terbatas",
  ],
};

export default function FeaturesPage() {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20keunggulan%20VRN%20Rent%20Car%20Medan";

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
            <span className="text-gray-600">Keunggulan</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/medan"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              5 Keunggulan Utama Kami
            </h1>
            <p className="text-xl text-blue-100">
              VRN Rent Car Medan menghadirkan layanan terbaik untuk memenuhi
              semua kebutuhan transportasi Anda
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Features Section */}
      <FeaturesSection />

      {/* Detailed Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detail Keunggulan Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pelajari lebih detail setiap keunggulan yang membuat VRN Rent Car
              Medan berbeda
            </p>
          </MotionDiv>

          <div className="space-y-16">
            {detailedFeatures.map((feature, index) => (
              <MotionDiv
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium text-gray-900">Harga:</span>
                      <span className="text-blue-600 font-bold">
                        {feature.pricing}
                      </span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full sm:w-auto">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Tanyakan Lebih Lanjut
                    </a>
                  </Button>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div
                      className={`absolute inset-0 ${feature.color.replace(
                        "bg-",
                        "bg-"
                      )}/20`}
                    />
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perbandingan layanan VRN Rent Car Medan dengan kompetitor lainnya
            </p>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* VRN Rent Car */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  VRN Rent Car Medan
                </h3>
              </div>
              <div className="space-y-3">
                {comparison.us.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Others */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Kompetitor Lainnya
                </h3>
              </div>
              <div className="space-y-3">
                {comparison.others.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
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
              Rasakan Keunggulan Layanan Kami
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Hubungi kami sekarang dan rasakan perbedaan layanan terbaik dari
              VRN Rent Car Medan
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
                  Hubungi Sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/medan/services">Lihat Layanan Kami</a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

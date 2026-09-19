import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import AboutSection from "@/components/medan/AboutSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import { MotionDiv } from "@/components/animations/MotionDiv";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tentang Kami - VRN Rent Car Medan | Profil Perusahaan Rental Mobil",
  description:
    "Kenali VRN Rent Car Medan lebih dekat. Perusahaan rental mobil terpercaya di Medan dengan pengalaman 10+ tahun, armada terawat, dan pelayanan profesional.",
  keywords:
    "tentang vrn rent car medan, profil perusahaan rental mobil medan, berpengalaman rental mobil medan, armada terawat medan",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/about-us",
  },
  openGraph: {
    title: "Tentang Kami - VRN Rent Car Medan | Profil Perusahaan",
    description:
      "VRN Rent Car Medan - Perusahaan rental mobil terpercaya dengan pengalaman 10+ tahun melayani kebutuhan transportasi di Medan.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/about-us",
    locale: "id_ID",
  },
};

const milestones = [
  {
    year: "2014",
    title: "Pendirian Perusahaan",
    description:
      "VRN Rent Car Medan didirikan dengan visi menjadi penyedia rental mobil terpercaya di Sumatera Utara",
    icon: Award,
  },
  {
    year: "2016",
    title: "Ekspansi Armada",
    description:
      "Menambah 20+ kendaraan baru dan mengembangkan layanan antar jemput bandara",
    icon: Users,
  },
  {
    year: "2018",
    title: "Sertifikasi Profesional",
    description:
      "Memperoleh sertifikasi sebagai penyedia transportasi yang terintegrasi dan terpercaya",
    icon: CheckCircle,
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Meluncurkan platform digital untuk memudahkan pelanggan dalam melakukan pemesanan",
    icon: Award,
  },
  {
    year: "2022",
    title: "500+ Pelanggan",
    description:
      "Melayani lebih dari 500 pelanggan dengan tingkat kepuasan 98%",
    icon: Users,
  },
  {
    year: "2024",
    title: "Ekspansi Layanan",
    description:
      "Mengembangkan layanan tour wisata dan rental jangka panjang untuk korporasi",
    icon: MapPin,
  },
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description:
      "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371",
    detail: "Mudah diakses dari berbagai lokasi di Medan dan sekitarnya",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    description: "24 Jam / 7 Hari Seminggu",
    detail: "Layanan 24/7 untuk kebutuhan darurat dan antar jemput",
  },
  {
    icon: Phone,
    title: "Kontak Langsung",
    description: "0812-3456-7890",
    detail: "Customer service siap membantu setiap saat",
  },
];

export default function AboutUsPage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20VRN%20Rent%20Car%20Medan";

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
            <span className="text-gray-600">Tentang Kami</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-blue-600">
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
              Tentang VRN Rent Car Medan
            </h1>
            <p className="text-xl text-blue-100">
              Kenali perusahaan rental mobil terpercaya yang telah melayani
              Medan selama lebih dari 10 tahun
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Company Story */}
      <AboutSection />

      {/* Company Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dari satu kendaraan hingga ratusan pelanggan, berikut perjalanan
              VRN Rent Car Medan
            </p>
          </MotionDiv>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <MotionDiv
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-4 z-10 relative">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2" />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Informasi Kantor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk berkonsultasi langsung dengan tim kami
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <MotionDiv
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-2">
                  {info.description}
                </p>
                <p className="text-gray-600 text-sm">{info.detail}</p>
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
              Ingin Tahu Lebih Lanjut?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Hubungi tim kami untuk konsultasi langsung atau kunjungan ke
              kantor
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
                <a href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Hubungi Kami
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

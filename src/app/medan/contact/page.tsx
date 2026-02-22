import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/medan/Header";
import Footer from "@/components/medan/Footer";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Instagram,
  Facebook,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kontak Kami - VRN Rent Car Medan | Hubungi Rental Mobil Medan",
  description:
    "Hubungi VRN Rent Car Medan untuk rental mobil, antar jemput bandara, dan layanan rental mobil. Tersedia 24/7. WhatsApp, telepon, atau kunjungi kantor kami di Medan.",
  keywords:
    "kontak rental mobil medan, hubungi vrn rent car, nomor rental mobil medan, alamat rental mobil medan, customer service rental mobil",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcarmedan.com/medan/contact",
  },
  openGraph: {
    title: "Kontak VRN Rent Car Medan | Customer Service 24/7",
    description:
      "Hubungi kami untuk rental mobil, informasi harga, dan reservasi. Layanan customer service 24/7 siap membantu Anda.",
    type: "website",
    url: "https://vrnrentcarmedan.com/medan/contact",
    locale: "id_ID",
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon & WhatsApp",
    details: ["+62 823-6338-9893"],
    description: "Hubungi kami kapan saja, 24 jam sehari",
    action: "Call Now",
    href: "tel:+6282363389893",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+62 823-6338-9893"],
    description: "Chat langsung untuk respon cepat",
    action: "Chat WhatsApp",
    href: "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20bertanya%20tentang%20rental%20mobil",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vrnrentcarmedan.com"],
    description: "Kirim email untuk pertanyaan detail",
    action: "Send Email",
    href: "mailto:info@vrnrentcarmedan.com",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Lokasi Kantor",
    details: ["Medan, Sumatera Utara"],
    description: "Melayani area Medan dan sekitarnya",
    action: "Get Directions",
    href: "#map",
    color: "bg-red-100 text-red-600",
  },
];

const operationalHours = [
  { day: "Senin - Jumat", hours: "24 Jam" },
  { day: "Sabtu - Minggu", hours: "24 Jam" },
  { day: "Hari Libur", hours: "24 Jam" },
];

const quickLinks = [
  { title: "Rental Mobil Harian", href: "/medan/services" },
  { title: "Antar Jemput Bandara", href: "/medan/airport" },
  { title: "Layanan Rental Mobil", href: "/medan/services" },
  { title: "Armada Kendaraan", href: "/medan/fleet" },
  { title: "Destinasi Wisata", href: "/medan/tourism" },
  { title: "Testimoni Pelanggan", href: "/medan/testimonials" },
];

export default function ContactPage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20bertanya%20tentang%20rental%20mobil%20di%20Medan";

  return (
    <main className={`${inter.className} min-h-screen bg-gray-50`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/medan"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tim kami siap membantu Anda 24/7. Hubungi kami melalui telepon,
              WhatsApp, atau email untuk informasi dan reservasi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kirim Pesan Kepada Kami
              </h2>
              <p className="text-gray-600 mb-8">
                Untuk mempercepat layanan, silakan hubungi kami langsung melalui
                WhatsApp atau telepon. Kami siap membantu Anda dengan cepat!
              </p>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 mb-8">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat via WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <a href="tel:+6282363389893">
                    <Phone className="w-5 h-5 mr-2" />
                    Telepon Sekarang
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="mailto:info@vrnrentcarmedan.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Kirim Email
                  </a>
                </Button>
              </div>

              {/* Operational Hours */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Jam Operasional
                  </h3>
                </div>
                <div className="space-y-3">
                  {operationalHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700 font-medium">
                        {item.day}
                      </span>
                      <span className="text-blue-600 font-bold">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      Layanan customer service tersedia 24 jam sehari, 7 hari
                      seminggu untuk melayani kebutuhan rental mobil Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links & FAQ */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Link Cepat
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Kenapa Hubungi Kami?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Respon Cepat
                      </p>
                      <p className="text-sm text-gray-600">
                        Kami merespon pertanyaan Anda dalam hitungan menit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Konsultasi Gratis
                      </p>
                      <p className="text-sm text-gray-600">
                        Tanyakan apapun tentang rental mobil tanpa biaya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Penawaran Terbaik
                      </p>
                      <p className="text-sm text-gray-600">
                        Dapatkan harga spesial dan promo eksklusif
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Booking Mudah
                      </p>
                      <p className="text-sm text-gray-600">
                        Proses reservasi cepat dan praktis via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow Kami
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami melayani area Medan dan sekitarnya. Hubungi kami untuk
              informasi lebih lanjut tentang layanan antar-jemput.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722727809753!2d98.77453057416143!3d3.593831696380299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1768311197443!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT VICKY RENTAL NUSANTARA"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memesan Rental Mobil?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
            menemukan kendaraan yang tepat untuk kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
              asChild
            >
              <Link href="/medan/fleet">Lihat Armada</Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}

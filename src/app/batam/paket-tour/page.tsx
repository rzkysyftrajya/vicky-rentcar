import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import Footer from "@/components/batam/Footer";

export const metadata: Metadata = {
  title: "Paket Tour Batam – Singapore Malaysia Thailand | VRN Rent Car",
  description: "Paket tour dari Batam ke Singapore, Malaysia, Thailand serta wisata populer seperti Ranoh Island, Kepri Coral, Pulau Abang dan Bintan.",
};

const tourPackages = [
  {
    id: 1,
    name: "Paket Tour 3D2N Singapore – Malaysia",
    description: "Nikmati pengalaman tak terlupakan mengeksplorasi Singapore dan Malaysia dalam 3 hari 2 malam. Kombinasi sempurna antara modernitas dan tradisi.",
    duration: "3 Hari 2 Malam",
    destinations: ["Johor", "Melaka", "Kuala Lumpur", "Genting Highland", "Batu Caves", "Singapore"],
    image: "/batam/PAKET-TOUR/3D2N-SINGAPORE-MALAYSIA.webp",
    highlights: ["Genting Highland", "Batu Caves", "Melaka Historic City"],
  },
  {
    id: 2,
    name: "Paket Tour 5 Hari 3 Negara",
    description: "Petualangan luar biasa menjelajahi Singapore, Malaysia, dan Thailand dalam 5 hari. Pengalaman budaya yang kaya dan pemandangan menakjubkan.",
    duration: "5 Hari 3 Negara",
    destinations: ["Johor", "Melaka", "Kuala Lumpur", "Hatyai Thailand", "Genting Highland", "Singapore"],
    image: "/batam/PAKET-TOUR/5-HARI-3-NEGARA.webp",
    highlights: ["Hatyai Thailand", "Kuala Lumpur", "Genting Highland"],
  },
  {
    id: 3,
    name: "One Day Tour Singapore",
    description: "Nikmati keindahan Singapore dalam sehari. Dari landmark ikonik hingga belanja modern, semua dalam satu hari yang mengesankan.",
    duration: "1 Hari",
    destinations: ["Garden by the Bay", "Merlion Park", "Masjid Sultan", "Bugis Street", "Sentosa Island", "Vivo City"],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-SINGAPORE.webp",
    highlights: ["Garden by the Bay", "Sentosa Island", "Merlion Park"],
  },
  {
    id: 4,
    name: "Tour Ranoh Island",
    description: "Nikmati keindahan pulau Ranoh dengan berbagai aktivitas air seru. Pulau eksotis dengan pasir putih dan air laut yang jernih.",
    duration: "1 Hari",
    destinations: ["Ranoh Island"],
    image: "/batam/PAKET-TOUR/TOUR-RANOH-ISLAND.webp",
    highlights: ["Snorkeling", "Banana Boat", "Beach Activities"],
  },
  {
    id: 5,
    name: "One Day Tour Bintan",
    description: "Jelajahi keindahan Bintan dalam sehari. Dari gurun pasir hingga telaga biru, pengalaman pulau tropis yang lengkap.",
    duration: "1 Hari",
    destinations: ["Gurun Pasir Bintan", "Telaga Biru", "Lagoi Bay", "Treasure Bay"],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BINTAN.webp",
    highlights: ["Treasure Bay", "Telaga Biru", "Gurun Pasir"],
  },
  {
    id: 6,
    name: "Tour Pulau Abang",
    description: "Eksplorasi Pulau Abang dengan aktivitas snorkeling dan island hopping. Dokumentasi bawah laut gratis untuk kenangan.",
    duration: "1 Hari",
    destinations: ["Pulau Abang"],
    image: "/batam/PAKET-TOUR/TOUR-PULAU-ABANG.webp",
    highlights: ["Snorkeling", "Island Hopping", "Underwater Documentation"],
  },
  {
    id: 7,
    name: "One Day Tour Batam",
    description: "Nikmati pesona Batam dalam sehari. Dari ikon jembatan monumental hingga pusat perbelanjaan dan heritage China.",
    duration: "1 Hari",
    destinations: ["Jembatan Barelang", "Masjid Sultan Mahmud Riayat Syah", "Nagoya Hill", "Masjid Cheng Ho"],
    image: "/batam/PAKET-TOUR/ONE-DAY-TOUR-BATAM.webp",
    highlights: ["Jembatan Barelang", "Nagoya Hill", "Masjid Sultan"],
  },
];

const waLink = "https://wa.me/6282363389893?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Tour%20VRN%20Rent%20Car%20Batam";

export default function PaketTourPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Paket Tour Populer dari Batam
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Kami menyediakan berbagai paket wisata dari Batam ke Singapore, Malaysia, Thailand serta destinasi wisata terbaik di Kepulauan Riau.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/batam" 
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Tour Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Semua Paket Tour
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket tour sesuai dengan keinginan Anda. Tim profesional kami siap membantu Anda selama perjalanan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full aspect-[1080/1350] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {tour.description}
                  </p>

                  {/* Destinations */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-semibold text-gray-900">Destinasi:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tour.destinations.slice(0, 4).map((dest, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-slate-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {dest}
                        </span>
                      ))}
                      {tour.destinations.length > 4 && (
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md">
                          +{tour.destinations.length - 4} lagi
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-900">Highlight:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {tour.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700 font-bold mt-auto"
                    asChild
                  >
                    <a 
                      href={`${waLink}&text=Halo,%20saya%20tertarik%20dengan%20Paket%20Tour:%20${encodeURIComponent(tour.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Pesan Sekarang
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Butuh Paket Tour Custom?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Kami juga melayani pembuatan paket tour sesuai dengan kebutuhan dan keinginan Anda. Hubungi kami untuk konsultasi gratis.
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
              asChild
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


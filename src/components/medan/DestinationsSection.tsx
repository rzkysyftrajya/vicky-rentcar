"use client";

import { MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Danau Toba",
    description:
      "Danau vulkanik terbesar di dunia dengan pemandangan spektakuler",
    fullDescription:
      "Danau Toba adalah danau vulkanik terbesar di dunia dan salah satu danau terdalam. Terletak di Sumatera Utara, danau ini dikelilingi oleh pegunungan yang indah dan Pulau Samosir di tengahnya. Tempat yang sempurna untuk menikmati keindahan alam, budaya Batak, dan kuliner khas.",
    image: "/medan/destinasi-wisata/danau-toba.webp",
    distance: "4-5 jam dari Medan",
    highlights: [
      "Pulau Samosir",
      "Desa Tomok",
      "Air Terjun Sipiso-piso",
      "Budaya Batak",
    ],
  },
  {
    name: "Berastagi",
    description: "Kota wisata pegunungan dengan udara sejuk dan pasar buah",
    fullDescription:
      "Berastagi adalah kota wisata di dataran tinggi Karo dengan udara yang sejuk dan pemandangan Gunung Sibayak serta Gunung Sinabung. Terkenal dengan pasar buah dan sayuran segar, serta berbagai objek wisata alam yang menarik.",
    image: "/medan/destinasi-wisata/berastagi.webp",
    distance: "1.5 jam dari Medan",
    highlights: [
      "Gunung Sibayak",
      "Pasar Buah",
      "Taman Mejuah-juah",
      "Kebun Stroberi",
    ],
  },
  {
    name: "Istana Maimun",
    description: "Istana bersejarah peninggalan Kesultanan Deli",
    fullDescription:
      "Istana Maimun adalah ikon kota Medan yang dibangun oleh Sultan Mahmud Al Rasyid Perkasa Alam pada tahun 1888. Istana ini memadukan unsur arsitektur Melayu, Islam, Spanyol, India, dan Italia. Pengunjung dapat melihat koleksi bersejarah dan berpakaian adat Melayu.",
    image: "/medan/destinasi-wisata/istana-maimun.webp",
    distance: "Pusat Kota Medan",
    highlights: [
      "Arsitektur Unik",
      "Koleksi Sejarah",
      "Foto Pakaian Adat",
      "Museum",
    ],
  },
  {
    name: "Merdeka Walk Medan",
    description: "Pusat kuliner dan hiburan di jantung kota Medan",
    fullDescription:
      "Merdeka Walk adalah kawasan kuliner dan hiburan yang terletak di Lapangan Merdeka, jantung kota Medan. Tempat ini menyajikan berbagai makanan khas Medan dan Indonesia dengan suasana yang nyaman dan modern.",
    image: "/medan/destinasi-wisata/merdeka-walk.webp",
    distance: "Pusat Kota Medan",
    highlights: [
      "Kuliner Khas Medan",
      "Suasana Malam",
      "Live Music",
      "Street Food",
    ],
  },
  {
    name: "Bukit Lawang",
    description: "Habitat orangutan sumatera dan wisata alam trekking",
    fullDescription:
      "Bukit Lawang adalah gerbang menuju Taman Nasional Gunung Leuser, salah satu hutan hujan tertua di dunia. Tempat ini terkenal sebagai habitat orangutan Sumatera dan menawarkan pengalaman trekking dan river tubing yang mendebarkan.",
    image: "/medan/destinasi-wisata/bukit-lawang.webp",
    distance: "3 jam dari Medan",
    highlights: [
      "Orangutan Sumatera",
      "Jungle Trekking",
      "River Tubing",
      "Eco Lodge",
    ],
  },
  {
    name: "Air Terjun Sikulikap",
    description: "Air terjun di tengah hutan dengan suasana alam yang sejuk",
    fullDescription:
      "Air Terjun Sikulikap berada di kawasan hutan di Kabupaten Karo. Jalur trekking yang dikelilingi pepohonan membawa pengunjung menuju air terjun dengan suasana sejuk dan alami.",
    image: "/medan/destinasi-wisata/air-terjun-sikulikap.webp",
    distance: "4 jam dari Medan",
    highlights: [
      "Trekking hutan",
      "Panorama alam",
      "Hiking Trail",
      "Spot Foto",
    ],
  },
  {
    name: "Gunung Sibayak",
    description: "Gunung berapi populer untuk pendakian dan menikmati matahari terbit",
    fullDescription:
      "Gunung Sibayak menawarkan pengalaman mendaki dengan pemandangan pegunungan dan kawah vulkanik. Pendakian pagi hari menjadi pilihan populer untuk menikmati matahari terbit dari kawasan Berastagi.",
    image: "/medan/destinasi-wisata/sibayak.webp",
    distance: "2 jam dari Medan",
    highlights: ["Pendakian", "Kawah vulkanik", "Matahari terbit", "Pemandangan Karo"],
  },
  {
    name: "Bukit Holbung",
    description: "Bukit savana dengan panorama Danau Toba dan Pulau Samosir",
    fullDescription:
      "Bukit Holbung di Pulau Samosir dikenal dengan hamparan bukit hijau dan pemandangan terbuka ke Danau Toba. Pengunjung dapat berjalan menyusuri punggung bukit dan menikmati panorama dari berbagai sudut.",
    image: "/medan/destinasi-wisata/Bukit-Holbung-Samosir.webp",
    distance: "5-6 jam dari Medan",
    highlights: ["Panorama Danau Toba", "Bukit savana", "Trekking ringan", "Pulau Samosir"],
  },
  {
    name: "Bukit Indah Sibeabea",
    description: "Panorama Danau Toba dengan patung Yesus di puncak bukit",
    fullDescription:
      "Bukit Sibeabea di kawasan Samosir menyuguhkan pemandangan Danau Toba dari ketinggian. Jalan berkelok menuju area patung Yesus menjadi salah satu daya tarik wisata di kawasan ini.",
    image: "/medan/destinasi-wisata/sibeabea.webp",
    distance: "5-6 jam dari Medan",
    highlights: ["Panorama Danau Toba", "Patung Yesus", "Jalan berkelok", "Pulau Samosir"],
  },
  {
    name: "Kawah Putih Tinggi Raja",
    description: "Kawasan kawah kapur dengan air danau berwarna kehijauan",
    fullDescription:
      "Kawah Putih Tinggi Raja di Kabupaten Simalungun memiliki lanskap batu kapur dan sumber air panas alami. Perpaduan warna putih, hijau, dan biru menjadikan kawasan ini tujuan wisata alam yang khas.",
    image: "/medan/destinasi-wisata/kawa-putih-tinggi-raja.webp",
    distance: "3-4 jam dari Medan",
    highlights: ["Lanskap batu kapur", "Sumber air panas", "Danau alami", "Wisata alam"],
  },
  {
    name: "Pemandian Karang Anyar",
    description: "Pemandian alam dengan aliran air jernih di kawasan Simalungun",
    fullDescription:
      "Pemandian Karang Anyar merupakan pilihan rekreasi alam di Kabupaten Simalungun. Pengunjung dapat menikmati suasana sejuk dan aliran air yang bersumber dari kawasan perbukitan.",
    image: "/medan/destinasi-wisata/pemandian-karang-anyar.webp",
    distance: "2-3 jam dari Medan",
    highlights: ["Pemandian alam", "Suasana sejuk", "Wisata keluarga", "Kawasan Simalungun"],
  },
];

const DestinationsSection = () => {
  const ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20booking%20wisata%20ke%20";

  return (
    <section id="destinasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Destinasi Wisata
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Wisata Medan & Sumatera Utara
          </h2>
          <p className="text-gray-600">
            Jelajahi keindahan Sumatera Utara dengan layanan rental mobil kami.
            Sopir berpengalaman dan hafal rute terbaik ke setiap destinasi.
          </p>
        </div>

        {/* Destinations Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                expandedIndex === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-sm mb-2 opacity-80">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.distance}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm text-white/80">
                    {destination.description}
                  </p>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="bg-white p-6">
                  <p className="text-gray-600 mb-4">
                    {destination.fullDescription}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <a
                      href={`${whatsappLink}${encodeURIComponent(
                        destination.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pesan Wisata ke {destination.name}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Expand/Collapse All */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => setExpandedIndex(null)}>
            Tutup Semua Detail
          </Button>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
          Hubungi kami untuk paket wisata custom sesuai keinginan Anda.
        </p>
      </div>
    </section>
  );
};

export default DestinationsSection;

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
    image:
      "https://images.unsplash.com/photo-1571366706805-9eba0a5f3c12?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1586325194227-7625ed95172b?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=800&auto=format&fit=crop",
    distance: "3 jam dari Medan",
    highlights: [
      "Orangutan Sumatera",
      "Jungle Trekking",
      "River Tubing",
      "Eco Lodge",
    ],
  },
  {
    name: "Air Terjun Sipiso-piso",
    description:
      "Air terjun tertinggi di Indonesia dengan pemandangan Danau Toba",
    fullDescription:
      "Air Terjun Sipiso-piso adalah salah satu air terjun tertinggi di Indonesia dengan ketinggian sekitar 120 meter. Terletak di tepi Danau Toba, air terjun ini menawarkan pemandangan yang spektakuler dengan latar belakang danau vulkanik terbesar di dunia.",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=800&auto=format&fit=crop",
    distance: "4 jam dari Medan",
    highlights: [
      "Ketinggian 120m",
      "View Danau Toba",
      "Hiking Trail",
      "Spot Foto",
    ],
  },
];

const DestinationsSection = () => {
  const ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20booking%20wisata%20ke%20";

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

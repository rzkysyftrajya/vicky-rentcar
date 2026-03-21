import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Users,
  Car,
  Wifi,
  Music,
  Armchair,
  Luggage,
  ShieldCheck,
  Zap,
  ChevronLeft,
  Anchor,
  ShoppingBag,
  Star,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import Footer from "@/components/batam/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Hiace Batam | Rental Group Island Hopping & Ferry Singapore | VRN",
  description: "Sewa Toyota Hiace Batam untuk rombongan ke Ranoh Island, Pulau Abang, ferry Singapore-Malaysia. Kapasitas 14 orang. Driver lokal hafal Kepri.",
  keywords: "sewa hiace batam, rental hiace kepri, paket hiace ranoh batam, hiace ferry singapore, sewa hiace group batam, hiace pulau abang",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcar.com/batam/hiace",
  },
};

interface HiacePackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  capacity: string;
  description: string;
  highlights: string[];
  features?: string[];
  isPopular?: boolean;
}

const hiacePackages: HiacePackage[] = [
  {
    id: "hiace-ranoh",
    name: "Hiace Ranoh Island Group Tour",
    tagline: "Pulau Eksotis",
    image: "/batam/paket-hiace/paket-hiace-ranoh-island-group-tour.webp",
    capacity: "Liburan Rame-Rame",
    description: "Menyeberang ke surga tropis Ranoh Island tanpa pusing mikirin jalan. Kami antar sampai dermaga, Anda tinggal menikmati pasir putih dan water sport sepuasnya.",
    highlights: ["Snorkeling", "Banana Boat", "Beach Hopping"],
    features: ["Antar Jemput Pelabuhan", "Tiket Kapal (Opsional)", "Full Day 12 Jam"],
    isPopular: true,
  },
  {
    id: "hiace-abang",
    name: "Hiace Pulau Abang Island Hopping",
    tagline: "Underwater Paradise",
    image: "/batam/paket-hiace/hiace-pulau-abang-island-hopping.webp",
    capacity: "Snorkeling Trip",
    description: "Eksplorasi keindahan bawah laut Pulau Abang. Biarkan kami mengurus perjalanan darat yang nyaman sebelum Anda terjun melihat 'Nemo' dan terumbu karang.",
    highlights: ["Underwater Photo", "Island Hopping", "Gear Lengkap"],
    features: ["Snorkeling Gear", "Lunch Box", "Guide Lokal"],
  },
  {
    id: "hiace-batam-city",
    name: "Hiace Batam City & Barelang Tour",
    tagline: "Kota Batam",
    image: "/batam/paket-hiace/hiace-batam-city-barelang-tour.webp",
    capacity: "Kapasitas Besar",
    description: "Kelilingi ikon Jembatan Barelang dan borong oleh-oleh tanpa takut bagasi penuh. Hiace kami punya ruang bagasi luas untuk menampung belanjaan satu kampung.",
    highlights: ["Foto di Barelang", "Belanja Sepuasnya", "Kuliner Seafood"],
    features: ["BBM Termasuk", "Parkir Wisata", "Driver Guide"],
    isPopular: true,
  },
  {
    id: "hiace-ferry-singapore",
    name: "Hiace Ferry Singapore-Malaysia",
    tagline: "Cross Border",
    image: "/batam/paket-hiace/hiace-ferry-singapore-malaysia.webp",
    capacity: "Transfer Pelabuhan",
    description: "Kejar ferry pagi ke Singapore? Tenang, driver kami sudah standby sebelum ayam berkokok. Bawa koper besar bukan masalah, bagasi Hiace muat semuanya.",
    highlights: ["Ferry Assistance", "Border Support", "VIP Waiting"],
    features: ["Tepat Waktu", "Bantu Angkat Koper", "Standby di Terminal"],
  },
  {
    id: "hiace-bintan",
    name: "Hiace Bintan Treasure Bay Tour",
    tagline: "Wisata Bintan",
    image: "/batam/paket-hiace/hiace-bintan-treasure-bay-tour.webp",
    capacity: "Adventure Group",
    description: "Petualangan lintas pulau ke Bintan lebih seru bareng-bareng. Gurun Pasir dan kolam renang raksasa Treasure Bay menanti rombongan Anda.",
    highlights: ["Treasure Bay", "Telaga Biru", "Ferry Ticket"],
    features: ["Tour Bintan", "Supir Berpengalaman", "Tiket Masuk Opsional"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio Luxury Batam",
    tagline: "VIP & Wedding",
    image: "/batam/paket-hiace/hiace-premio-luxury-batam.webp",
    capacity: "VIP Guests",
    description: "Berikan kesan terbaik untuk tamu VIP atau keluarga tercinta. Kenyamanan kursi captain seat dan interior mewah Hiace Premio tak tertandingi.",
    highlights: ["Captain Seat", "Sound System", "Kabin Senyap"],
    features: ["Driver Berjas", "Air Mineral", "Unit Tahun Muda"],
  },
  {
    id: "hiace-golf",
    name: "Hiace Golf Tour Batam",
    tagline: "Sport & Leisure",
    image: "/batam/paket-hiace/hiace-golf-tour-batam.webp",
    capacity: "Golfer Group",
    description: "Fokus pada swing terbaik Anda. Urusan antar jemput golf bag yang berat biar kami yang handle. Tiba di lapangan golf (Palm Springs/Southlinks) dengan kondisi segar.",
    highlights: ["Golf Bag Handling", "VIP Service", "Club Transfer"],
    features: ["Driver Paham Golf", "Tee-off On Time", "Cooler Box"],
  },
  {
    id: "hiace-kuliner",
    name: "Hiace Kuliner & Durian Batam",
    tagline: "Foodie Adventure",
    image: "/batam/paket-hiace/hiace-kuliner-durian-batam.webp",
    capacity: "Max 14 Penumpang",
    description: "Wisata lidah tanpa batas. Dari seafood kelong segar hingga durian Musang King legit, driver lokal kami tahu spot 'hidden gem' paling enak di Batam.",
    highlights: ["Seafood Kelong", "Wisata Durian", "Oleh-oleh Khas"],
    features: ["Rekomendasi Lokal", "Full AC Dingin", "Waktu Fleksibel"],
    isPopular: true,
  },
  {
    id: "hiace-religi",
    name: "Hiace Wisata Religi Batam",
    tagline: "Spiritual Journey",
    image: "/batam/paket-hiace/hiace-wisata-religi-batam.webp",
    capacity: "Majelis & Keluarga",
    description: "Perjalanan spiritual yang khusyuk bersama jamaah. Kunjungi Masjid Sultan yang megah atau Vihara terbesar dengan armada yang bersih, wangi, dan adem.",
    highlights: ["Masjid Sultan", "Vihara Terbesar", "Masjid Cheng Ho"],
    features: ["Jadwal Sholat", "Air Mineral", "Driver Sopan"],
  },
];

export default function BatamHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20sewa%20Hiace%20untuk%20rombongan.%20Boleh%20minta%20info%20pricelist?";

  return (
    <>
      <main className={`${inter.className} min-h-screen bg-slate-50 pb-12`}>
        {/* Hero */}
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/armada/hiace-premio-luxury.webp"
              alt="Hiace Batam Background"
              fill
              className="object-cover opacity-30 scale-105 animate-pulse-slow"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-teal-900/30" />
          </div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <Link href="/batam" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-8 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all hover:bg-white/20">
              <ChevronLeft className="w-4 h-4" />
              Kembali ke Menu Utama
            </Link>

            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 rounded-full px-4 py-1.5 backdrop-blur-md shadow-xl">
                <Star className="w-4 h-4 fill-teal-400 text-teal-400" />
                <span className="font-bold text-xs md:text-sm tracking-wide uppercase">
                  Spesialis Rombongan & Ferry Transfer
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-2xl max-w-5xl mx-auto">
              Liburan Rame-Rame 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
                Tanpa Ribet, Pasti Seru!
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Jangan biarkan transportasi membatasi keseruan rombongan Anda. 
              Dari belanja gila-gilaan di Nagoya hingga menyeberang ke pulau eksotis, 
              kami antar Anda dengan kenyamanan kelas atas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-7 rounded-2xl shadow-xl shadow-teal-900/50 transition-transform hover:scale-105"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Tanya Ketersediaan Unit
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-7 rounded-2xl backdrop-blur-md transition-all"
                asChild
              >
                <Link href="#paket">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Lihat Pilihan Paket
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-slate-400">
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>Bagasi Luas (Shopping Friendly)</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>Driver Hafal Pelabuhan</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>AC Dingin (Tropical Spec)</span>
               </div>
            </div>
          </div>
        </section>

        {/* Facilities Strip */}
        <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { icon: Users, label: "14-15 Seater", sub: "Lega & Nyaman" },
                { icon: Zap, label: "Full AC Dingin", sub: "Tropis Friendly" },
                { icon: Luggage, label: "Bagasi Extra", sub: "Muat Oleh-Oleh" },
                { icon: Anchor, label: "Antar Pelabuhan", sub: "Batam Centre/Sekupang" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                    <item.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.label}</h3>
                  <p className="text-sm text-slate-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hiace for Batam */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-4 py-1.5 text-sm mb-4">KENAPA HIACE DI BATAM?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Rahasia Perjalanan Group yang Menyenangkan
              </h2>
              <p className="text-slate-600 text-lg">
                Bukan sekadar mobil besar. Ini adalah ruang tamu berjalan Anda selama di Batam. Ngobrol, karaokean, atau tidur nyenyak sepanjang perjalanan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bagasi 'Shopping' Friendly</h3>
                <p className="text-slate-600 leading-relaxed">
                  Habis borong tas branded, parfum, atau cokelat di Nagoya Hill? Tenang, bagasi Hiace kami luas. Belanjaan aman, penumpang tetap duduk nyaman tanpa sempit-sempitan.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <Anchor className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Anti Telat ke Pelabuhan</h3>
                <p className="text-slate-600 leading-relaxed">
                  Jadwal ferry ke Singapore ketat? Driver kami hafal 'jalan tikus' tercepat ke Harbour Bay atau Batam Centre. Kami pastikan Anda tidak ketinggalan kapal.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AC Dingin Sampai Belakang</h3>
                <p className="text-slate-600 leading-relaxed">
                  Cuaca Batam yang tropis butuh AC yang prima. Hiace kami dilengkapi AC ducting di setiap baris kursi. Perjalanan jauh ke Jembatan 6 Barelang tetap adem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Paket Grid */}
        <section id="paket" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <Badge className="bg-slate-900 text-white mb-4">
                  PILIHAN PAKET
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                  Pilih Petualangan Anda
                </h2>
                <p className="text-slate-600 mt-4 max-w-xl text-lg leading-relaxed">
                  Kami sudah siapkan paket terbaik. Dari sekedar drop bandara hingga paket all-in wisata pulau seharian penuh. Fleksibel sesuai itinerary Anda.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {hiacePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-100 hover:border-teal-200 h-full relative"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    {pkg.isPopular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-black font-bold border-none shadow-lg">
                          <Star className="w-3 h-3 mr-1 fill-black" />
                          FAVORIT
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                       <div className="flex items-center gap-2 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-2">
                          <Users className="w-3 h-3" /> {pkg.capacity}
                       </div>
                       <h3 className="text-xl font-bold leading-tight group-hover:text-teal-300 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {pkg.features?.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="bg-teal-100 p-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-teal-600" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.highlights.map((h, i) => (
                          <Badge key={i} variant="secondary" className="text-xs font-normal bg-white border border-slate-200 text-slate-600">
                            {h}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 font-bold h-12 rounded-xl shadow-lg"
                      >
                        <a
                          href={`https://wa.me/6282363389893?text=Halo%20VRN%20Batam,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}.%20Mohon%20info%20harga%20dan%20ketersediaan.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Tanya Harga via WA
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Butuh Hiace Lepas Kunci?
                  </h3>
                  <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                    Kami menyediakan layanan sewa Hiace lepas kunci (self-drive) untuk korporat atau penyewa dengan syarat khusus. Nikmati kebebasan menjelajahi Batam dengan armada premium kami.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-teal-900 hover:bg-teal-50 font-bold px-8 h-14 rounded-xl shadow-lg"
                      asChild
                    >
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        Cek Syarat Lepas Kunci
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                   <Image 
                      src="/armada/hiace-commuter.webp"
                      alt="Hiace Lepas Kunci Batam"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

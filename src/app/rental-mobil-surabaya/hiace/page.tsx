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
  Star,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paket Hiace Surabaya Terbaik | Rental Mobil Group Juanda-Bromo | VRN",
  description: "Paket rental Toyota Hiace Premio & Commuter Surabaya untuk rombongan besar, city tour, Bromo midnight, Madura. Unit terbaru, bersih, dan nyaman. Driver profesional siap melayani perjalanan VIP Anda.",
  keywords: "sewa hiace surabaya, rental hiace juanda, paket hiace bromo surabaya, hiace premio surabaya, sewa hiace group surabaya, hiace bandara juanda",
  robots: "index, follow",
  alternates: {
    canonical: "https://vrnrentcar.com/rental-mobil-surabaya/hiace",
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
  isPopular?: boolean;
}

const hiacePackages: HiacePackage[] = [
  {
    id: "hiace-city-tour",
    name: "Hiace City Tour Surabaya 1 Hari",
    tagline: "Best Seller City Tour",
    image: "/halaman-surabaya/paket-hiace/hiace-city-tour-surabaya-1-hari.webp",
    capacity: "Max 14 Penumpang",
    description: "Durasi 12 Jam. Rute lengkap: Tugu Pahlawan, House of Sampoerna, Monumen Kapal Selam (Monkasel), Masjid Ampel, & Kenjeran Park.",
    highlights: ["Wisata Sejarah", "Religi Ampel", "BBM Termasuk"],
    isPopular: true,
  },
  {
    id: "hiace-madura",
    name: "Hiace Tour Madura 1 Hari",
    tagline: "Wisata Pulau Madura",
    image: "/halaman-surabaya/paket-hiace/hiace-tour-madura-1-hari.webp",
    capacity: "Max 14 Penumpang",
    description: "Durasi 12 Jam. Melintasi Jembatan Suramadu. Destinasi: Bukit Jaddih / Arosbaya, Kuliner Bebek Sinjay, & Sentra Batik Bangkalan.",
    highlights: ["Bukit Kapur", "Kuliner Bebek", "Belanja Batik"],
  },
  {
    id: "hiace-airport-xl",
    name: "Hiace Antar Jemput Juanda XL",
    tagline: "Airport Transfer",
    image: "/halaman-surabaya/paket-hiace/hiace-antar-jemput-bandara-xl.webp",
    capacity: "Kapasitas Bagasi Extra",
    description: "Penjemputan VIP Bandara Juanda dengan bagasi banyak. Meet & greet dengan name board profesional.",
    highlights: ["On-Time Guarantee", "Bantuan Bagasi", "Signboard Penjemputan"],
    isPopular: true,
  },
  {
    id: "hiace-bromo",
    name: "Hiace Bromo Midnight (12 Jam)",
    tagline: "Sunrise Bromo",
    image: "/halaman-surabaya/paket-hiace/hiace-bromo-midnight.webp",
    capacity: "12-14 Penumpang",
    description: "Start 23.30 WIB - 12.00 WIB. Rute: Sunrise Point Penanjakan, Kawah Bromo, Lautan Pasir Berbisik, & Bukit Teletubbies.",
    highlights: ["Include Jeep", "4 Spot Bromo", "Driver Mahir"],
  },
  {
    id: "hiace-malang",
    name: "Hiace Tour Malang Batu 1 Hari",
    tagline: "Wisata Jatim",
    image: "/halaman-surabaya/paket-hiace/hiace-tour-malang-batu.webp",
    capacity: "Max 14 Penumpang",
    description: "Durasi 14-16 Jam. Destinasi Favorit: Jatim Park 1/2/3, Museum Angkut, Flora Wisata San Terra, & Alun-Alun Batu.",
    highlights: ["Wisata Petik Apel", "Museum Angkut", "Oleh-oleh Khas"],
  },
  {
    id: "hiace-premium",
    name: "Hiace Premio Luxury Event",
    tagline: "Wedding & VIP",
    image: "/halaman-surabaya/paket-hiace/hiace-premio-luxury-event.webp",
    capacity: "VIP Guests",
    description: "Transportasi mewah untuk wedding, corporate event atau tamu VIP dengan interior premium.",
    highlights: ["Unit Bersih Wangi", "Premium Sound", "Dekorasi Opsional"],
  },
];

export default function SurabayaHiacePage() {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20sewa%20Hiace%20di%20Surabaya.%20Mohon%20info%20penawaran%20terbaik%20untuk%20tanggal...";

  return (
    <main className={`${inter.className} min-h-screen bg-slate-50 pb-24`}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/armada/hiace-premio-luxury.webp"
            alt="Hiace Surabaya Background"
            fill
            className="object-cover opacity-30 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 relative">
          <Link 
            href="/rental-mobil-surabaya" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-xl">
              <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span className="font-bold text-xs md:text-sm tracking-wide uppercase">
                Spesialis Rombongan & Keluarga
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Perjalanan Group
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Lebih Mewah & Nyaman
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Nikmati pengalaman perjalanan VIP bersama VRN Rent Car. 
            Unit Hiace Premio & Commuter terbaru dengan fasilitas lengkap untuk 
            kenyamanan maksimal keluarga atau rekan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-7 rounded-2xl shadow-xl shadow-orange-500/20 transition-transform hover:scale-105"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Tanya Penawaran Spesial
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-7 rounded-2xl backdrop-blur-md transition-all"
              asChild
            >
              <Link href="#paket">
                <Car className="w-5 h-5 mr-2" />
                Lihat Pilihan Unit
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Unit Tahun Muda</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Driver Ramah & Wangi</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Harga All-In (Opsional)</span>
             </div>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Users, label: "Kapasitas 14 Seat", sub: "Lega &amp; Nyaman" },
              { icon: Zap, label: "Full AC Ducting", sub: "Dingin Merata" },
              { icon: Armchair, label: "Reclining Seat", sub: "Istirahat Nyaman" },
              { icon: Music, label: "Entertainment", sub: "Karaoke & TV" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                  <item.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.label}</h3>
                <p className="text-sm text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior & Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/halaman-surabaya/paket-hiace/hero-section.webp" 
                  alt="Interior Hiace Premio" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                   <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30">
                      <h3 className="text-white font-bold text-xl mb-1">Interior Hiace Premio</h3>
                      <p className="text-white/90 text-sm">Kabin luas dengan headroom tinggi, membuat perjalanan jarak jauh tidak melelahkan.</p>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <div>
                   <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-1 text-sm">KENYAMANAN VIP</Badge>
                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                     Standar Baru Perjalanan Rombongan
                   </h2>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     Lupakan perjalanan sempit dan panas. Armada Hiace kami dirancang khusus untuk kenyamanan maksimal. 
                     Cocok untuk perjalanan dinas pejabat, liburan keluarga besar, atau tamu pernikahan VIP.
                   </p>
                </div>
                
                <div className="space-y-4">
                   {[
                     "Suspensi Empuk: Minim guncangan bahkan di jalan bergelombang",
                     "Sound System Premium: Karaoke on the road lebih seru",
                     "Charger Port: Gadget selalu on selama perjalanan",
                     "Bagasi Luas: Muat koper besar dan oleh-oleh khas Surabaya"
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-orange-200 transition-colors">
                        <div className="mt-1 bg-green-100 p-1.5 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-medium text-slate-700">{feature}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Paket Grid */}
      <section id="paket" className="py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <Badge className="bg-slate-900 text-white mb-4">
                PILIHAN PAKET
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Hiace Premio & Commuter Surabaya
              </h2>
              <p className="text-slate-600 mt-4 max-w-xl text-lg">
                Tersedia berbagai opsi paket sesuai kebutuhan acara Anda. 
                Dari drop-off bandara hingga tour keliling Jawa Timur.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {hiacePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full border border-white hover:border-orange-100"
              >
                <div className="relative w-full md:w-5/12 min-h-[260px] md:min-h-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="644px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  {pkg.isPopular && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-600 text-white font-bold border-none shadow-lg px-3 py-1">
                        <Star className="w-3 h-3 mr-1 fill-white" />
                        BEST CHOICE
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-sm p-2 rounded-lg">
                       <Users className="w-4 h-4" />
                       {pkg.capacity}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-orange-600 font-bold text-xs tracking-wider uppercase mb-2 block">
                      {pkg.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-y-2 gap-x-3 mb-6">
                      {pkg.highlights.map((h, i) => (
                        <Badge key={i} variant="secondary" className="bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-700 border border-slate-200">
                          {h}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="w-full bg-slate-900 hover:bg-orange-600 text-white transition-all duration-300 font-bold h-12 rounded-xl shadow-lg"
                    >
                      <a
                        href={`https://wa.me/6282363389893?text=Halo%20VRN,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}.%20Mohon%20info%20ketersediaan%20untuk%20tanggal...`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        Cek Ketersediaan
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Butuh Custom Trip?
                </h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Punya rencana perjalanan khusus untuk kantor atau keluarga besar? 
                  Kami siap mengatur itinerary terbaik di Jawa Timur dengan armada Hiace yang nyaman.
                  Diskusikan kebutuhan Anda sekarang!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 h-14 rounded-xl shadow-lg shadow-orange-500/30"
                    asChild
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                    src="/halaman-surabaya/PAKET-TOUR/BROMO-MIDNIGHT_TOUR-DARI-SURABAYA.webp"
                    alt="Bromo Tour"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      Wisata Bromo & Malang
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

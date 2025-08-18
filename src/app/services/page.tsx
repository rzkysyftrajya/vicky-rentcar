
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Plane, Briefcase, Film, ShieldCheck } from "lucide-react";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan Kami - Jasa Rental Mobil Profesional se-Nusantara',
  description: 'Jelajahi semua layanan rental mobil kami di seluruh Indonesia, mulai dari sewa harian, bulanan, layanan pernikahan, antar-jemput bandara, hingga sewa korporat.',
  keywords: ['layanan rental mobil indonesia', 'sewa mobil harian', 'sewa mobil pernikahan', 'antar jemput bandara', 'sewa mobil vip'],
  openGraph: {
    title: 'Layanan Kami - Jasa Rental Mobil Profesional se-Nusantara',
    description: 'Jelajahi semua layanan rental mobil kami di seluruh Indonesia, untuk segala kebutuhan Anda.',
  },
}

export default function ServicesPage() {
    const allServices = [
        { title: "Sewa Harian", icon: <Calendar className="w-12 h-12 text-primary" />, description: "Paket sewa harian yang fleksibel sesuai kebutuhan jangka pendek Anda, dengan beragam pilihan kendaraan di seluruh Indonesia." },
        { title: "Sewa Bulanan", icon: <Calendar className="w-12 h-12 text-primary" />, description: "Solusi hemat biaya untuk kebutuhan transportasi jangka panjang Anda tanpa repotnya kepemilikan, tersedia secara nasional." },
        { title: "Layanan Pernikahan", icon: <Heart className="w-12 h-12 text-primary" />, description: "Tampil penuh gaya di hari istimewa Anda. Kami menyediakan mobil mewah yang dihias dengan sopir profesional di kota Anda." },
        { title: "Antar-Jemput Bandara", icon: <Plane className="w-12 h-12 text-primary" />, description: "Layanan antar-jemput yang lancar dan nyaman ke dan dari semua bandara utama di Indonesia, dengan layanan meet-and-greet." },
        { title: "Sewa Korporat", icon: <Briefcase className="w-12 h-12 text-primary" />, description: "Kendaraan yang andal dan bergengsi untuk pertemuan bisnis, transportasi klien, dan acara perusahaan di seluruh Nusantara." },
        { title: "Syuting Film & Foto", icon: <Film className="w-12 h-12 text-primary" />, description: "Kendaraan menakjubkan kami tersedia untuk disewa untuk keperluan syuting film, televisi, dan pemotretan komersial di berbagai lokasi." },
        { title: "VIP & Keamanan", icon: <ShieldCheck className="w-12 h-12 text-primary" />, description: "Layanan rahasia dengan kendaraan lapis baja dan personel keamanan terlatih untuk keamanan maksimal di seluruh Indonesia." },
    ];
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">Layanan Rental Mobil Komprehensif Kami</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
        Kami menawarkan berbagai layanan sewa mobil profesional di seluruh Indonesia untuk memenuhi setiap kebutuhan transportasi Anda, dari perjalanan singkat hingga acara besar.
      </p>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => (
                <Card key={service.title} className="text-center p-8 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group group-hover:animate-shimmer">
                  <div className="flex justify-center mb-6 text-primary bg-gradient-to-br from-primary/20 to-blue-500/10 p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-semibold mb-2 text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
    </div>
  );
}

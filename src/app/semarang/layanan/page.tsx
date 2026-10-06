import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import { PageHeader } from "@/components/semarang-site/common/page-header";
import { Button } from "@/components/semarang-site/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/semarang-site/ui/card";
import {
  Calendar,
  Users,
  Plane,
  ShieldCheck,
  KeyRound,
  Briefcase,
  Car,
} from "lucide-react";

export const metadata = createSemarangMetadata({
  title: "Sewa Mobil Harian dan dengan Sopir di Semarang",
  description:
    "Cari sewa mobil harian atau bulanan di Semarang, rental dengan sopir, lepas kunci, dan antar jemput Bandara Ahmad Yani. Tanyakan rute serta jadwal.",
  path: "/semarang/layanan",
});

const servicesList = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Sewa Harian, Mingguan & Bulanan",
    description:
      "Fleksibilitas layanan untuk kebutuhan jangka pendek maupun panjang. Hubungi kami untuk penawaran sesuai durasi dan kebutuhan perjalanan.",
    features: [
      "Pilihan mobil beragam",
      "Termasuk biaya perawatan rutin",
      "Tersedia mobil pengganti",
      "Ideal untuk kebutuhan personal atau korporat",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Layanan Sopir Profesional",
    description:
      "Nikmati perjalanan tanpa lelah dengan sewa mobil dengan supir. Sopir kami berpengalaman, ramah, dan menguasai area.",
    features: [
      "Bebas lelah menyetir",
      "Keamanan dan kenyamanan ekstra",
      "Sopir menguasai rute terbaik",
      "Cocok untuk perjalanan bisnis atau wisata",
    ],
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Antar-Jemput Bandara Ahmad Yani",
    description:
      "Layanan rental mobil dari dan ke Bandara Ahmad Yani dengan penjemputan yang tepat waktu.",
    features: [
      "Tanpa perlu antri taksi",
      "Armada nyaman untuk istirahat setelah penerbangan",
      "Penjemputan dapat disesuaikan dengan jadwal penerbangan",
      "Penjemputan 24/7",
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Sewa Mobil Korporat",
    description:
      "Solusi transportasi untuk kebutuhan perusahaan dengan kontrak jangka panjang dan layanan pelanggan prioritas.",
    features: [
      "Penawaran disesuaikan dengan kebutuhan perusahaan",
      "Manajemen armada yang mudah",
      "Layanan pelanggan prioritas",
      "Pilihan mobil sesuai kebutuhan bisnis",
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Sewa Mobil Pengantin",
    description:
      "Sediakan transportasi terbaik untuk hari spesial Anda. Rental mobil wedding kami hadir dengan pilihan Alphard dan mobil mewah lainnya.",
    features: [
      "Pilihan mobil mewah dan elegan",
      "Termasuk dekorasi standar (opsional)",
      "Sopir profesional berbusana rapi",
      "Jadwal yang fleksibel",
    ],
  },
  {
    icon: <KeyRound className="h-8 w-8 text-primary" />,
    title: "Rental Lepas Kunci",
    description:
"Nikmati kebebasan penuh menjelajahi kota dengan sistem sewa mobil lepas kunci Semarang yang mudah dan aman.",
    features: [
      "Privasi dan kebebasan maksimal",
      "Proses verifikasi cepat dan mudah",
      "Tersedia 24 jam",
      "Pilihan mobil bervariasi",
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: "Paket Wisata & Perjalanan",
    description:
      "Perjalanan wisata di Semarang dan kota sekitar dapat dikonsultasikan sebelum pemesanan agar rute dan kebutuhan kendaraan sesuai rencana Anda.",
    features: [
      "Termasuk mobil dan supir",
      "Itinerary fleksibel",
      "Rekomendasi tempat terbaik",
      "Konsultasikan detail perjalanan via WhatsApp",
    ],
  },
];

const phoneNumber = "6282363389893";

export default function LayananPage() {
  return (
    <>
      <PageHeader
        title="Layanan Sewa Mobil Semarang"
        breadcrumb="Beranda / Layanan"
        imageUrl="/semarang/hero-section.webp"
        imageHint="customer service smiling"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Layanan Sewa Mobil Sesuai Durasi dan Rute
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Pilih sewa harian atau bulanan, mobil lepas kunci atau dengan
                sopir, serta antar jemput Bandara Ahmad Yani. Sampaikan tujuan
                dan jadwal agar layanan dapat disesuaikan dengan perjalanan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const message = `Halo, saya tertarik dengan layanan '${service.title}' dari PT.VRN SEMARANG. Bisa jelaskan lebih detail?`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              return (
                <Card key={index} className="flex flex-col bg-secondary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-background rounded-lg shadow">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                    <ul className="mt-4 space-y-2 text-sm flex-grow">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full">
                      <Link href={whatsappUrl} target="_blank">
                        Pesan Layanan Ini
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

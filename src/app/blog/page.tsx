import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";

export const metadata: Metadata = {
  title: "Blog Rental Mobil & Wawasan Wisata - Vicky Rentcar Nusantara",
  description:
    "Jelajahi blog kami untuk tips perjalanan, panduan sewa mobil di Medan, Jakarta, dan Bali, serta berita terbaru dari Vicky Rentcar Nusantara. Temukan wawasan untuk perjalanan Anda di seluruh Indonesia.",
  keywords: [
    "blog rental mobil indonesia",
    "tips sewa mobil",
    "panduan wisata nusantara",
    "berita rental mobil",
    "rental mobil medan",
    "sewa mobil jakarta",
    "tips perjalanan bali",
  ],
  openGraph: {
    title: "Blog Rental Mobil - Tips & Panduan Terbaik untuk Perjalanan",
    description:
      "Dapatkan wawasan terbaru seputar rental mobil dan pariwisata di seluruh Indonesia dari tim ahli Vicky Rentcar.",
  },
};

const blogPosts = [
  {
    slug: "10-tips-memilih-mobil-rental-untuk-keluarga",
    title:
      "10 Tips Cerdas Memilih Mobil Rental untuk Liburan Keluarga di Indonesia",
    description:
      "Liburan keluarga sebentar lagi? Jangan sampai salah pilih mobil! Simak tips dari kami untuk mendapatkan kendaraan yang paling pas untuk kenyamanan dan keamanan keluarga Anda di mana pun.",
    image: "/blog/blog1.webp",
    hint: "family car vacation",
    alt: "Keluarga bahagia di dalam mobil rental di Indonesia",
    category: "Tips & Trik",
    date: "15 Juli 2025",
  },
  {
    slug: "menjelajahi-kuliner-tersembunyi-medan-dengan-mobil-sewaan",
    title:
      "Menjelajahi Surga Kuliner Tersembunyi di Kota-Kota Indonesia dengan Mobil Sewaan",
    description:
      "Setiap kota punya permata kuliner! Kami akan memandu Anda ke tempat-tempat makan legendaris yang mungkin tidak ada di peta wisata biasa. Siapkan perut Anda!",
    image: "/blog/blog2.webp",
    hint: "indonesian street food",
    alt: "Berbagai macam makanan khas dari berbagai daerah di Indonesia",
    category: "Wisata Kuliner",
    date: "10 Juli 2025",
  },
  {
    slug: "keuntungan-sewa-mobil-dengan-sopir-untuk-perjalanan-bisnis",
    title:
      "Mengapa Sewa Mobil dengan Sopir adalah Pilihan Tepat untuk Perjalanan Bisnis di Seluruh Indonesia",
    description:
      "Fokus pada bisnis Anda, biarkan kami yang mengurus perjalanan. Temukan berbagai keuntungan menggunakan layanan sopir profesional untuk efisiensi dan kenyamanan maksimal di kota mana pun.",
    image: "/blog/blok3.webp",
    hint: "businessman car back seat",
    alt: "Pengusaha di kursi belakang mobil rental di sebuah kota besar di Indonesia",
    category: "Bisnis",
    date: "5 Juli 2025",
  },
  {
    slug: "panduan-lengkap-merawat-mobil-rental-selama-pemakaian",
    title: "Panduan Lengkap Merawat Mobil Rental Selama Masa Sewa di Mana Saja",
    description:
      "Menyewa mobil lepas kunci berarti Anda memiliki tanggung jawab lebih. Pelajari cara-cara sederhana untuk menjaga kondisi mobil tetap prima selama di tangan Anda, di mana pun Anda menyewa.",
    image: "/blog/blog4.webp",
    hint: "car maintenance check",
    alt: "Orang sedang memeriksa kondisi mobil sewaan",
    category: "Perawatan",
    date: "1 Juli 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
            Blog & Wawasan Nusantara
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Dapatkan informasi, tips, dan inspirasi terbaru seputar dunia{" "}
            <a
              href="/sewa-mobil-medan"
              className="text-primary hover:underline"
            >
              rental mobil di Medan
            </a>
            ,{" "}
            <a
              href="/sewa-mobil-jakarta"
              className="text-primary hover:underline"
            >
              Jakarta
            </a>
            ,{" "}
            <a href="/sewa-mobil-bali" className="text-primary hover:underline">
              Bali
            </a>
            , dan berbagai kota lainnya dari tim ahli kami untuk perjalanan Anda
            di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 group group-hover:animate-shimmer"
            >
              <CardHeader className="p-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative h-56 w-full"
                >
                  <ImageZoom
                    src={post.image}
                    alt={post.alt}
                    data-ai-hint={post.hint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    isZoomable={false}
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="mb-2 text-xl text-primary group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </div>
                <div className="mt-6">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

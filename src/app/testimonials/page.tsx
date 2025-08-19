import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan - Review Rental Mobil di Seluruh Indonesia",
  description:
    "Baca apa kata pelanggan kami. Kumpulan testimoni dan review asli dari klien yang puas dengan layanan sewa mobil PT.VICKY RENTCAR NUSANTARA di seluruh Indonesia.",
  keywords: [
    "testimoni rental mobil indonesia",
    "review sewa mobil",
    "pelanggan puas rental mobil",
    "ulasan rental mobil nasional",
  ],
  openGraph: {
    title: "Testimoni Pelanggan - Review Rental Mobil di Seluruh Indonesia",
    description:
      "Baca apa kata pelanggan kami tentang layanan sewa mobil PT.VICKY RENTCAR NUSANTARA di berbagai kota.",
  },
};

export default function TestimonialsPage() {
  const allTestimonials = [
    {
      quote:
        "Pengalaman sewa mobil terbaik di Bali! Mobilnya bersih dan pelayanannya sempurna. Sangat direkomendasikan!",
      name: "Budi S.",
      location: "Jakarta",
      avatar: "/testimoni/testimoni1.jpeg",
      hint: "man portrait",
      alt: "Testimoni dari Budi S, pelanggan rental mobil",
    },
    {
      quote:
        "PT.VICKY RENTCAR NUSANTARA membuat hari pernikahan kami di Bandung lebih istimewa. Mobil mewahnya seperti mimpi dan sopirnya sangat profesional.",
      name: "Maria & Doni",
      location: "Bandung",
      avatar: "/testimoni/testimoni3.jpeg",
      hint: "wedding couple portrait",
      alt: "Testimoni dari Maria & Doni, pelanggan sewa mobil pengantin",
    },
    {
      quote:
        "Saya menggunakan layanan korporat PT.VICKY RENTCAR NUSANTARA untuk operasional kantor kami di Surabaya. Sangat efisien dan andal.",
      name: "David L.",
      location: "Surabaya",
      avatar: "/testimoni/testimoni2.jpeg",
      hint: "businessman portrait",
      alt: "Review dari David L, klien rental mobil korporat",
    },
    {
      quote:
        "Pemesanan sangat mudah dan antar-jemput di Bandara Kualanamu Medan berjalan tanpa cela. Sopir sudah menunggu saya tepat waktu. Bintang lima!",
      name: "Emily R.",
      location: "Medan",
      avatar: "/testimoni/testimoni4.jpeg",
      hint: "businesswoman portrait",
      alt: "Ulasan dari Emily R, layanan antar jemput bandara",
    },
    {
      quote:
        "Menyewa Innova Reborn untuk liburan keluarga di Yogyakarta sangat menyenangkan. Tim di PT.VICKY RENTCAR NUSANTARA sangat profesional, ramah, dan benar benar baik dengan pelanggan mereka. Terima kasih!",
      name: "Keluarga Santoso",
      location: "Yogyakarta",
      avatar: "/testimoni/testimoni5.jpeg",
      hint: "family portrait",
      alt: "Testimoni dari Keluarga Santoso, sewa mobil keluarga",
    },
    {
      quote:
        "Pelayanan fantastis dari awal hingga akhir. Tim di PT.VICKY RENTCAR NUSANTARA profesional, ramah, dan benar-benar peduli dengan pelanggan mereka.",
      name: "Fadli K.",
      location: "Makassar",
      avatar: "/testimoni/testimoni6.jpeg",
      hint: "woman smiling",
      alt: "Review dari Fadli K. tentang layanan pelanggan rental mobil",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gradient mb-4">
          Apa Kata Mereka Tentang Kami
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Kepuasan pelanggan di seluruh Nusantara adalah prioritas utama kami.
          Lihat apa yang mereka katakan tentang pengalaman rental mobil bersama
          kami.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTestimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-8 text-center shadow-xl flex flex-col justify-between bg-secondary/50 border-l-4 border-primary group-hover:animate-shimmer"
          >
            <CardContent className="p-0 flex-grow">
              <p className="text-lg italic text-foreground/80">
                "{testimonial.quote}"
              </p>
            </CardContent>
            <div className="mt-6 flex flex-col justify-center items-center">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage
                  src={testimonial.avatar}
                  data-ai-hint={testimonial.hint}
                  alt={testimonial.alt}
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="mt-4 font-semibold text-lg text-primary">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { type Metadata } from "next";
import Script from "next/script";
import { allTestimonials } from "@/data/testimonials-data";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan - Review Rental Mobil di Seluruh Indonesia",
  description:
    "Baca apa kata pelanggan kami. Kumpulan testimoni dan review asli dari klien yang puas dengan layanan sewa mobil PT.VICKY RENTCAR NUSANTARA di seluruh Indonesia.",
  keywords: [
    "testimoni rental mobil indonesia",
    "review sewa mobil",
    "pelanggan puas rental mobil",
    "ulasan rental mobil nasional",
    "review rental mobil medan",
    "review rental mobil traveloka",
    "pengalaman rental mobil",
    "testimoni sewa mobil",
    "ulasan rental mobil",
    "review rental mobil lepas kunci",
  ],
  openGraph: {
    title: "Testimoni Pelanggan - Review Rental Mobil di Seluruh Indonesia",
    description:
      "Baca apa kata pelanggan kami tentang layanan sewa mobil PT.VICKY RENTCAR NUSANTARA di berbagai kota.",
    url: "https://vickyrentcarnusantara.com/testimonials",
    siteName: "Vicky Rentcar Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function TestimonialsPage() {
  // JSON-LD schema buat review
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PT.VICKY RENTCAR NUSANTARA - Jasa Rental Mobil",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: allTestimonials.length,
    },
    review: allTestimonials.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: "5",
      },
    })),
  };

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient mb-4">
            Apa Kata Mereka Tentang Kami
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Kepuasan pelanggan di seluruh Nusantara adalah prioritas utama kami.
            Lihat apa yang mereka katakan tentang pengalaman rental mobil
            bersama kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-xl flex flex-col justify-between bg-secondary/50 border-l-4 border-primary"
            >
              <CardContent className="p-0 flex-grow">
                <p className="text-lg italic text-foreground/80">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <div className="mt-6 flex flex-col justify-center items-center">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.alt} />
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
    </>
  );
}

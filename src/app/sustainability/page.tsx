import { type Metadata } from "next";
import { Leaf, Droplets } from "lucide-react";
import { ImageZoom } from "@/components/ui/image-zoom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Keberlanjutan - Komitmen Kami untuk Pariwisata Bertanggung Jawab",
  description:
    "Pelajari komitmen PT.VICKY RENTCAR NUSANTARA terhadap praktik pariwisata berkelanjutan di seluruh Nusantara, termasuk inisiatif ramah lingkungan dan dukungan komunitas lokal.",
  keywords: [
    "pariwisata berkelanjutan indonesia",
    "sewa mobil ramah lingkungan",
    "eco-tourism indonesia",
    "wisata bertanggung jawab nusantara",
  ],
  openGraph: {
    title:
      "Keberlanjutan - Komitmen Kami untuk Pariwisata Bertanggung Jawab se-Nusantara",
    description:
      "Komitmen kami terhadap pariwisata berkelanjutan di seluruh Indonesia.",
  },
};

export default function SustainabilityPage() {
  const commitments = [
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      title: "Program Cuci Mobil Hemat Air",
      description:
        "Mengadopsi teknik cuci mobil modern yang secara signifikan mengurangi konsumsi air untuk setiap kendaraan yang kami siapkan di seluruh cabang kami.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: "Dukungan Komunitas & Ekowisata Lokal",
      description:
        "Bermitra dengan operator tur lokal yang berfokus pada ekowisata dan mempromosikan destinasi yang mendukung pelestarian alam dan budaya di seluruh Indonesia.",
    },
  ];

  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2">
            <ImageZoom
              src="/keberlanjutan.jpg"
              alt="Pemandangan alam hijau yang lestari di Indonesia"
              data-ai-hint="sustainable tourism nature indonesia"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="prose lg:prose-xl dark:prose-invert max-w-none md:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
              Menuju Masa Depan yang Lebih Hijau
            </h1>
            <p className="text-lg text-muted-foreground">
              Di PT.VICKY RENTCAR NUSANTARA, kami percaya bahwa keindahan alam
              Nusantara adalah aset yang harus dijaga untuk generasi mendatang.
              Kami berkomitmen untuk menjalankan bisnis yang tidak hanya
              memberikan layanan terbaik, tetapi juga berkontribusi positif bagi
              lingkungan dan masyarakat lokal di setiap destinasi yang kami
              layani.
            </p>
            <h2 className="text-2xl font-bold mt-8 text-primary">
              Visi Keberlanjutan Kami
            </h2>
            <p>
              Menjadi pionir dalam industri rental mobil yang bertanggung jawab,
              menginspirasi pelanggan dan mitra kami untuk memilih opsi
              perjalanan yang lebih ramah lingkungan, dan mendukung pertumbuhan
              pariwisata yang berkelanjutan di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Inisiatif Hijau Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Langkah-langkah nyata yang kami ambil untuk mewujudkan visi
              keberlanjutan kami di seluruh Nusantara.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commitments.map((item) => (
              <Card
                key={item.title}
                className="text-center p-8 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group bg-card group-hover:animate-shimmer"
              >
                <div className="flex justify-center mb-6 text-primary bg-gradient-to-br from-primary/20 to-blue-500/10 p-4 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2 text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Timeline } from "@/components/ui/timeline";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";
import SocialMediaCard from "@/components/layout/SocialMediaCard";

export const metadata: Metadata = {
  title: "Tentang Kami - Sejarah & Visi Rental Mobil Nusantara",
  description:
    "Kenali lebih dekat PT.VICKY RENTCAR NUSANTARA. Sejarah perjalanan kami hingga menjadi penyedia jasa rental mobil terpercaya di seluruh Nusantara dengan visi masa depan.",
  keywords: [
    "tentang kami rental mobil",
    "sejarah rental mobil indonesia",
    "profil perusahaan sewa mobil nusantara",
    "visi misi rental mobil",
  ],
  openGraph: {
    title: "Tentang Kami - Sejarah & Visi Rental Mobil Nusantara",
    description:
      "Kenali lebih dekat PT.VICKY RENTCAR NUSANTARA, penyedia jasa rental mobil terpercaya di seluruh Nusantara.",
  },
};

export default function AboutPage() {
  const timelineData = [
    {
      title: "2010",
      content: (
        <div key="2010-content">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Awal Mula Perjalanan
          </h3>
          <p className="mb-8 text-sm font-normal text-muted-foreground md:text-base">
            Berawal dari garasi kecil dengan 2 unit mobil di Medan, PT.VICKY
            RENTCAR NUSANTARA lahir dari mimpi untuk memberikan layanan sewa
            mobil yang ramah, aman, dan terpercaya di seluruh penjuru negeri.
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div key="2018-content">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Merintis Layanan Wisata Unggulan
          </h3>
          <p className="mb-8 text-sm font-normal text-muted-foreground md:text-base">
            Menyadari pesona luar biasa Indonesia, kami meluncurkan paket wisata
            eksklusif di Sumatera Utara. Dengan sopir berpengalaman, kami mulai
            mengantar wisatawan menjelajahi keindahan Danau Toba, Berastagi, dan
            destinasi memukau lainnya sebagai cikal bakal layanan wisata
            nasional kami.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ImageZoom
              key="lake-toba"
              src="/tentang/tentang2018(1).webp"
              alt="Paket wisata rental mobil ke Danau Toba"
              data-ai-hint="lake toba view"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <ImageZoom
              key="berastagi"
              src="/tentang/tentang2018(2).webp"
              alt="Layanan sewa mobil untuk tur ke Berastagi"
              data-ai-hint="berastagi highlands landscape"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div key="2023-content">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Ekspansi ke Pulau Dewata, Bali
          </h3>
          <p className="mb-8 text-sm font-normal text-muted-foreground md:text-base">
            Melihat potensi besar pariwisata Bali, kami membuka cabang di Pulau
            Dewata. Kami membawa standar layanan profesional dan armada
            berkualitas untuk melayani wisatawan domestik dan internasional,
            memperkuat pijakan kami di destinasi wisata utama Indonesia.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ImageZoom
              key="bali-beach"
              src="/tentang/2023.webp"
              alt="Ekspansi rental mobil ke Bali"
              data-ai-hint="bali beach temple"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <ImageZoom
              key="bali-rental-office"
              src="/tentang/2023(1).webp"
              alt="Kantor cabang rental mobil di Bali"
              data-ai-hint="modern office interior"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div key="2024-content">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Transformasi Digital & Jangkauan Nasional
          </h3>
          <p className="mb-8 text-sm font-normal text-muted-foreground md:text-base">
            Kami meluncurkan website modern untuk memudahkan pemesanan sewa
            mobil online di seluruh Nusantara. Kami juga memperkuat kemitraan
            dengan perusahaan untuk menyediakan solusi transportasi jangka
            panjang di berbagai kota besar.
          </p>
        </div>
      ),
    },
    {
      title: "Masa Depan",
      content: (
        <div key="2025-content">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Menuju Jaringan Rental Terintegrasi se-Nusantara
          </h3>
          <p className="mb-8 text-sm font-normal text-muted-foreground md:text-base">
            Kami berkomitmen untuk terus memperluas jangkauan layanan ke seluruh
            destinasi wisata dan pusat bisnis utama di Indonesia. Dengan
            dukungan teknologi dan komitmen pada pariwisata berkelanjutan, kami
            bercita-cita menjadi mitra perjalanan terpercaya bagi seluruh
            masyarakat Indonesia.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <ImageZoom
              key="electric-car"
              src="/tentang/2024.webp"
              alt="Komitmen sewa mobil listrik ramah lingkungan di Indonesia"
              data-ai-hint="electric car charging"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <ImageZoom
              key="indonesia-map"
              src="/tentang/2024(2).webp"
              alt="Peta Indonesia untuk ekspansi layanan rental mobil nasional"
              data-ai-hint="map of Indonesia"
              width={500}
              height={500}
              className="h-28 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <ImageZoom
              src="/tentang/tentang.jpeg"
              alt="Tim profesional PT.VICKY RENTCAR NUSANTARA"
              data-ai-hint="diverse team portrait"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="prose lg:prose-xl dark:prose-invert max-w-none md:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gradient">
              Tentang PT.VICKY RENTCAR NUSANTARA
            </h1>
            <p className="text-lg text-muted-foreground">
              Lebih dari sekadar penyedia jasa sewa mobil, kami adalah mitra
              perjalanan Anda di seluruh penjuru Nusantara. Sejak awal, kami
              berkomitmen pada kualitas, kepercayaan, dan kepuasan pelanggan
              dalam setiap layanan rental yang kami tawarkan.
            </p>
            <h2 className="text-2xl font-bold mt-8 text-primary">Misi Kami</h2>
            <p>
              Menyediakan layanan sewa mobil yang tak tertandingi dengan armada
              terawat, staf profesional, dan fokus utama pada kenyamanan serta
              keamanan setiap pelanggan di mana pun mereka berada di Indonesia.
            </p>
            <h2 className="text-2xl font-bold text-primary">Visi Kami</h2>
            <p>
              Menjadi perusahaan rental mobil terdepan di Indonesia yang dikenal
              karena integritas, inovasi layanan, dan kontribusi positif bagi
              pariwisata berkelanjutan.
            </p>
          </div>
        </div>
      </section>
      <Timeline
        data={timelineData}
        title="Jejak Langkah Kami di Seluruh Nusantara"
        description="Setiap tahun adalah babak baru dalam cerita kami untuk memberikan yang terbaik. Berikut adalah momen penting dalam perjalanan kami untuk menjadi mitra perjalanan terpercaya di Indonesia."
      />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <SocialMediaCard />
        </div>
      </section>
    </div>
  );
}

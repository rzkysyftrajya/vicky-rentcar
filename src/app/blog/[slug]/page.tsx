import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ImageZoom } from "@/components/ui/image-zoom";
import SocialMediaCard from "@/components/layout/SocialMediaCard";

// Data blog hardcoded (nanti bisa diganti ambil dari CMS/API)
const blogPosts = {
  "10-tips-memilih-mobil-rental-untuk-keluarga": {
    title:
      "10 Tips Cerdas Memilih Mobil Rental untuk Liburan Keluarga di Indonesia",
    image: "/blog/blog1.webp",
    hint: "family road trip fun",
    alt: "Keluarga bahagia melakukan perjalanan darat dengan mobil rental di salah satu destinasi Indonesia",
    category: "Tips & Trik",
    date: "15 Juli 2025",
    content: `
      <p>Merencanakan liburan keluarga di salah satu kota indah di Indonesia? Salah satu kunci utama perjalanan yang nyaman adalah memilih mobil rental yang tepat. Berikut adalah 10 tips dari kami untuk memastikan Anda mendapatkan kendaraan terbaik untuk keluarga Anda, di mana pun tujuan Anda:</p>
      <ol>
        <li><strong>Perhatikan Kapasitas Penumpang:</strong> Pastikan mobil memiliki cukup kursi untuk semua anggota keluarga dan masih ada ruang untuk bergerak dengan nyaman.</li>
        <li><strong>Cek Ruang Bagasi:</strong> Liburan keluarga berarti banyak barang bawaan. Pilih mobil dengan bagasi yang luas untuk menampung semua koper, tas, dan oleh-oleh.</li>
        <li><strong>Fitur Keamanan adalah Prioritas:</strong> Pastikan mobil dilengkapi dengan fitur keamanan standar seperti ABS, Airbag, dan jika membawa anak kecil, pastikan ada ISOFIX untuk car seat.</li>
        <li><strong>Pilih Transmisi yang Tepat:</strong> Apakah Anda lebih nyaman dengan transmisi manual atau otomatis? Di kota-kota besar dengan lalu lintas padat, transmisi otomatis mungkin lebih nyaman.</li>
        <li><strong>Pertimbangkan Konsumsi Bahan Bakar:</strong> Untuk perjalanan jauh antar kota, mobil dengan konsumsi bahan bakar yang efisien akan sangat menghemat anggaran Anda.</li>
        <li><strong>Kenyamanan Interior:</strong> Periksa kondisi AC, kualitas sistem audio, dan kebersihan interior. Perjalanan jauh akan lebih menyenangkan dengan kabin yang nyaman.</li>
        <li><strong>Sesuaikan dengan Medan Perjalanan:</strong> Jika Anda berencana menjelajahi daerah pegunungan atau pedesaan, mobil dengan tenaga yang cukup (seperti SUV) bisa menjadi pilihan yang lebih baik.</li>
        <li><strong>Baca Ulasan dan Testimoni:</strong> Lihat apa kata pelanggan lain tentang jenis mobil dan penyedia rental yang Anda pertimbangkan di kota tujuan Anda.</li>
        <li><strong>Pesan Jauh-jauh Hari:</strong> Terutama saat musim liburan, mobil keluarga yang populer cepat habis dipesan. Lakukan pemesanan setidaknya 1-2 minggu sebelumnya.</li>
        <li><strong>Jangan Ragu Bertanya:</strong> Tanyakan kepada customer service kami tentang rekomendasi mobil yang paling sesuai dengan rencana perjalanan dan kebutuhan spesifik keluarga Anda di seluruh Indonesia.</li>
      </ol>
      <p>Dengan perencanaan yang matang, Anda dan keluarga bisa menikmati liburan di seluruh Nusantara dengan maksimal. Selamat berlibur!</p>
    `,
  },
  "menjelajahi-kuliner-tersembunyi-medan-dengan-mobil-sewaan": {
    title:
      "Menjelajahi Surga Kuliner Tersembunyi di Kota-Kota Indonesia dengan Mobil Sewaan",
    image: "/blog/blog2.webp",
    hint: "indonesian street food night",
    alt: "Aneka jajanan kuliner khas Indonesia di malam hari",
    category: "Wisata Kuliner",
    date: "10 Juli 2025",
    content: `
      <p>Setiap kota di Indonesia adalah surga bagi para pecinta kuliner. Namun, di luar hidangan utama yang sudah terkenal, setiap daerah menyimpan banyak permata kuliner tersembunyi. Dengan menyewa mobil, Anda memiliki kebebasan untuk menjelajahi setiap sudut kota dan menemukan tempat-tempat makan legendaris ini.</p>
      <h3>Contoh di Medan: Mie Aceh Titi Bobrok</h3>
      <p>Meskipun namanya sudah cukup terkenal, lokasinya yang sedikit di luar pusat kota membuatnya menjadi destinasi yang sempurna untuk dijelajahi dengan mobil. Rasakan sensasi mie aceh dengan kepiting segar yang porsinya melimpah.</p>
      <h3>Contoh di Yogyakarta: Gudeg Yu Djum</h3>
      <p>Untuk pengalaman otentik, jangan lewatkan Gudeg Yu Djum. Menyewa mobil memungkinkan Anda mengunjungi pusatnya langsung dan merasakan gudeg legendaris dengan suasana khas Jawa.</p>
      <h3>Contoh di Makassar: Wajir Seafood</h3>
      <p>Di banyak kota pesisir seperti Makassar, pusat kuliner malam adalah suatu keharusan. Menyewa mobil akan memudahkan Anda mencapai lokasi yang selalu ramai. Pilih berbagai hidangan laut segar dan nikmati suasana makan di ruang terbuka yang semarak.</p>
      <h3>Contoh di Jakarta: Kawasan Kuliner Blok M</h3>
      <p>Menjelajahi aneka jajanan di kawasan Blok M atau Kelapa Gading menjadi lebih mudah tanpa pusing memikirkan parkir atau transportasi publik. Dengan mobil sewaan plus sopir, Anda bisa fokus pada petualangan rasa.</p>
      <p>Menyewa mobil memberikan Anda fleksibilitas untuk membuat itinerary kuliner sendiri, berhenti di mana saja Anda menemukan aroma masakan yang menggoda, di kota mana pun di Indonesia. Selamat berpetualang rasa!</p>
    `,
  },
  "keuntungan-sewa-mobil-dengan-sopir-untuk-perjalanan-bisnis": {
    title:
      "Mengapa Sewa Mobil dengan Sopir adalah Pilihan Tepat untuk Perjalanan Bisnis di Seluruh Indonesia",
    image: "/blog/blog3.webp", // ✅ perbaikan nama file
    hint: "businessman car back seat professional",
    alt: "Pengusaha bekerja di kursi belakang mobil sewaan yang mewah di kota besar Indonesia",
    category: "Bisnis",
    date: "5 Juli 2025",
    content: `
      <p>Perjalanan bisnis di kota-kota besar Indonesia seringkali menuntut efisiensi, fokus, dan citra profesional. Di sinilah layanan sewa mobil dengan sopir dari PT.VICKY RENTCAR NUSANTARA menjadi solusi yang tak ternilai. Berikut adalah beberapa keuntungannya:</p>
      <ul>
        <li><strong>Fokus Penuh pada Pekerjaan:</strong> Anda tidak perlu khawatir tentang navigasi di kota yang asing, lalu lintas, atau mencari parkir. Waktu perjalanan bisa Anda manfaatkan untuk membalas email, mempersiapkan presentasi, atau melakukan panggilan telepon penting.</li>
        <li><strong>Efisiensi Waktu:</strong> Sopir kami adalah warga lokal yang sangat memahami seluk-beluk jalanan di kota masing-masing. Mereka tahu rute tercepat dan dapat menghindari titik-titik kemacetan, memastikan Anda selalu tiba di lokasi pertemuan tepat waktu.</li>
        <li><strong>Citra Profesional:</strong> Tiba di pertemuan bisnis dengan mobil premium dan sopir berseragam akan meninggalkan kesan pertama yang kuat dan positif pada klien atau mitra bisnis Anda, di mana pun Anda berada.</li>
        <li><strong>Keamanan dan Kenyamanan:</strong> Setelah hari yang panjang dan melelahkan, Anda bisa bersantai di kursi penumpang tanpa harus lelah menyetir. Ini mengurangi stres dan kelelahan, membuat Anda lebih bugar untuk agenda esok hari.</li>
        <li><strong>Fleksibilitas Nasional:</strong> Butuh mampir ke beberapa lokasi dalam satu hari? Cukup beritahu sopir Anda. Layanan kami yang tersebar di seluruh Indonesia memastikan Anda mendapatkan standar pelayanan yang sama baik di Jakarta, Surabaya, Bali, maupun Medan.</li>
      </ul>
      <p>Dengan layanan sewa mobil plus sopir, Anda tidak hanya menyewa kendaraan, tetapi berinvestasi pada produktivitas dan kenyamanan perjalanan bisnis Anda di seluruh Nusantara.</p>
    `,
  },
  "panduan-lengkap-merawat-mobil-rental-selama-pemakaian": {
    title: "Panduan Lengkap Merawat Mobil Rental Selama Masa Sewa di Mana Saja",
    image: "/blog/blog4.webp",
    hint: "car maintenance check engine",
    alt: "Tangan seseorang yang sedang memeriksa kondisi mobil sewaan",
    category: "Perawatan",
    date: "1 Juli 2025",
    content: `
      <p>Menyewa mobil, terutama lepas kunci, berarti Anda memegang tanggung jawab untuk merawat kendaraan tersebut seolah-olah milik sendiri. Merawat mobil sewaan dengan baik tidak hanya menunjukkan etika yang baik tetapi juga menghindarkan Anda dari biaya tambahan. Berikut panduan universalnya:</p>
      <h3>1. Periksa Sebelum Berangkat</h3>
      <p>Sebelum meninggalkan lokasi rental, luangkan waktu untuk memeriksa kondisi mobil bersama staf kami. Periksa adanya goresan, kondisi ban, dan fungsionalitas dasar seperti lampu dan AC. Dokumentasikan jika perlu.</p>
      <h3>2. Jaga Kebersihan Interior</h3>
      <p>Hindari makan dan minum yang berpotensi menumpahkan noda membandel. Buang sampah pada tempatnya dan jangan merokok di dalam mobil untuk menjaga kesegaran kabin.</p>
      <h3>3. Parkir di Tempat yang Aman</h3>
      <p>Selalu parkir di lokasi yang terang dan aman. Hindari parkir di bawah pohon rindang yang berisiko kejatuhan ranting atau kotoran burung, serta di area yang rawan banjir saat hujan deras.</p>
      <h3>4. Gunakan Bahan Bakar yang Sesuai</h3>
      <p>Pastikan Anda mengisi bahan bakar sesuai dengan jenis yang direkomendasikan untuk mobil tersebut (misalnya Pertalite, Pertamax, atau Solar/Diesel). Kesalahan pengisian bahan bakar dapat menyebabkan kerusakan mesin yang serius.</p>
      <h3>5. Berkendara dengan Wajar</h3>
      <p>Hindari akselerasi mendadak, pengereman keras, dan mengemudi secara agresif. Ini tidak hanya menjaga kondisi mesin dan ban, tetapi juga demi keselamatan Anda.</p>
      <p>Dengan mengikuti tips sederhana ini, Anda dapat menikmati pengalaman menyewa mobil yang lancar dan tanpa masalah, di mana pun Anda berada di Indonesia. Selamat berkendara!</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: `${post.title} | Blog PT.VICKY RENTCAR NUSANTARA`,
    description: `Baca artikel kami tentang "${post.title}". Dapatkan tips dan wawasan seputar rental mobil dan wisata di seluruh Indonesia.`,
    keywords: [
      post.title,
      `blog ${post.category}`,
      `tips ${slug.replace(/-/g, " ")}`,
    ],
    openGraph: {
      title: post.title,
      description: `Wawasan mendalam dari blog PT.VICKY RENTCAR NUSANTARA.`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.alt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-4xl mx-auto">
          {/* Tombol kembali */}
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Blog
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="mb-12 text-center">
            <div className="text-sm text-muted-foreground mb-2">
              <span>{post.category}</span> &bull; <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
              {post.title}
            </h1>
          </header>

          {/* Gambar */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <ImageZoom
              src={post.image}
              alt={post.alt}
              data-ai-hint={post.hint}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Konten */}
          <div
            className="prose lg:prose-xl dark:prose-invert max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-16 pt-12 border-t">
            <SocialMediaCard />
          </div>
        </article>
      </div>
    </div>
  );
}

import { createSemarangMetadata } from "@/lib/semarang-site/seo";
import { PageHeader } from "@/components/semarang-site/common/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/semarang-site/ui/accordion";

export const metadata = createSemarangMetadata({
  title: "FAQ Sewa Mobil Semarang",
  description:
    "Cari jawaban soal harga, syarat rental mobil lepas kunci, sewa dengan sopir, pembayaran, dan antar jemput Bandara Ahmad Yani Semarang.",
  path: "/semarang/faq",
});

const faqItems = [
  {
    question: "Apa syarat rental mobil lepas kunci di Semarang?",
    answer:
      "Untuk sewa lepas kunci, Anda perlu menyediakan dokumen berikut: e-KTP, SIM A yang masih berlaku, dan bukti domisili (tagihan listrik/PBB). Kami juga mungkin akan meminta akun media sosial aktif untuk verifikasi tambahan.",
  },
  {
    question: "Berapa harga sewa mobil di Semarang?",
    answer:
      "Tarif bergantung pada model mobil, transmisi, lama sewa, dan pilihan dengan sopir atau lepas kunci. Lihat katalog armada untuk harga yang tersedia, lalu konfirmasikan tanggal pemakaian sebelum memesan.",
  },
  {
    question: "Apakah tersedia rental mobil Semarang dengan sopir?",
    answer:
      "Ya, tersedia pilihan mobil dengan sopir untuk perjalanan di Semarang. Sampaikan tanggal, lama pemakaian, jumlah penumpang, dan rute agar tim dapat mengecek kendaraan yang sesuai.",
  },
  {
    question: "Apakah harga sewa sudah termasuk bahan bakar?",
    answer:
      "Tidak, harga sewa yang tertera belum termasuk bahan bakar. Mobil akan kami serahkan dengan kondisi bahan bakar penuh dan harus dikembalikan dalam kondisi yang sama.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan pada mobil selama masa sewa?",
    answer:
      "Segera hubungi tim kami 24/7. Kerusakan ringan akibat pemakaian normal akan kami tanggung, namun kerusakan berat akibat kelalaian penyewa akan menjadi tanggung jawab penyewa. Semua unit kami dilindungi asuransi untuk ketenangan Anda.",
  },
  {
    question: "Bisakah sewa mobil dari Semarang untuk perjalanan luar kota?",
    answer:
      "Tentu saja. Kami melayani perjalanan ke luar kota dengan atau tanpa sopir. Mohon informasikan tujuan Anda saat booking agar kami dapat memberikan penawaran terbaik dan memastikan kondisi kendaraan prima untuk perjalanan jauh.",
  },
  {
    question: "Bagaimana cara pesan antar jemput Bandara Ahmad Yani ke hotel?",
    answer:
      "Hubungi kami dengan jadwal penerbangan, jumlah penumpang, alamat hotel, dan kendaraan yang dibutuhkan. Penjemputan dari Bandara Ahmad Yani dapat dikoordinasikan sesuai tujuan dan ketersediaan armada.",
  },
  {
    question: "Bagaimana sistem pembayaran yang diterima?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri) dan pembayaran tunai. Diperlukan pembayaran DP (Down Payment) sebesar 50% saat booking untuk mengunci jadwal, dan pelunasan dilakukan saat serah terima kendaraan.",
  },
];

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHeader
        title="FAQ Sewa Mobil Semarang"
        breadcrumb="Beranda / FAQ"
        imageUrl="/semarang/hero-section.webp"
        imageHint="question mark neon"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ada Pertanyaan?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami telah merangkum beberapa pertanyaan yang paling sering
              diajukan oleh pelanggan kami. Jika jawaban Anda tidak ada di sini,
              jangan ragu untuk menghubungi kami.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/50 rounded-lg mb-4 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

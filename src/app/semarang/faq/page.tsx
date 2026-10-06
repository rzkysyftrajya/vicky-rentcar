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
    "Cari jawaban soal penawaran sewa mobil, syarat rental lepas kunci, layanan dengan sopir, pembayaran, dan antar jemput Bandara Ahmad Yani Semarang.",
  path: "/semarang/faq",
});

const faqItems = [
  {
    question: "Apakah tersedia sewa mobil dengan sopir di Semarang?",
    answer:
      "Ya, tersedia layanan mobil dengan sopir untuk perjalanan di Semarang. Sampaikan tanggal, durasi, jumlah penumpang, dan rute melalui WhatsApp agar tim kami dapat membantu memilih unit serta menyiapkan penawaran.",
  },
  {
    question: "Bagaimana cara mendapatkan penawaran sewa mobil?",
    answer:
      "Hubungi kami melalui WhatsApp dengan pilihan mobil, tanggal, durasi, rute, dan kebutuhan layanan. Tim kami akan mengonfirmasi ketersediaan unit dan memberikan penawaran untuk perjalanan Anda.",
  },
  {
    question: "Apa syarat rental mobil lepas kunci di Semarang?",
    answer:
      "Untuk sewa lepas kunci, Anda perlu menyediakan e-KTP, SIM A yang masih berlaku, dan bukti domisili (tagihan listrik/PBB). Kami juga mungkin akan meminta akun media sosial aktif untuk verifikasi tambahan.",
  },
  {
    question: "Bagaimana ketentuan bahan bakar?",
    answer:
      "Ketentuan bahan bakar akan dikonfirmasi oleh tim kami saat Anda menghubungi WhatsApp untuk menyusun rencana perjalanan.",
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
      "Metode dan jadwal pembayaran akan dikonfirmasi oleh tim kami saat pemesanan. Hubungi kami melalui WhatsApp untuk membahas detail booking Anda.",
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
          <div className="mt-10 rounded-xl bg-secondary/60 p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              Siap merencanakan perjalanan?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Kirim pilihan mobil, jadwal, dan rute melalui WhatsApp untuk
              mengecek ketersediaan serta meminta penawaran.
            </p>
            <a
              href={`https://wa.me/6282363389893?text=${encodeURIComponent(
                "Halo, saya ingin menanyakan ketersediaan mobil dan penawaran untuk perjalanan di Semarang."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Minta Penawaran via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

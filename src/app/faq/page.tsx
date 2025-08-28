import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Umum Rental Mobil di Seluruh Indonesia",
  description:
    "Temukan jawaban atas pertanyaan umum seputar sewa mobil di PT.VICKY RENTCAR NUSANTARA. Informasi tentang syarat, asuransi, dan kebijakan rental mobil kami di seluruh Indonesia.",
  keywords: [
    "faq rental mobil indonesia",
    "pertanyaan sewa mobil",
    "syarat sewa mobil nasional",
    "kebijakan rental mobil",
  ],
  openGraph: {
    title: "FAQ - Pertanyaan Umum Rental Mobil di Seluruh Indonesia",
    description:
      "Jawaban atas pertanyaan umum seputar sewa mobil di PT.VICKY RENTCAR NUSANTARA yang berlaku di seluruh cabang kami.",
    url: "https://vickyrentcarnusantara.com/faq",
    siteName: "Vicky Rentcar Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question:
        "Apa saja syarat untuk menyewa mobil di PT.VICKY RENTCAR NUSANTARA?",
      answer:
        "Untuk menyewa mobil di seluruh cabang kami di Indonesia, Anda memerlukan KTP (Kartu Tanda Penduduk), SIM A (Surat Izin Mengemudi) yang masih berlaku, dan berusia minimal 21 tahun. Untuk beberapa jenis mobil premium, mungkin ada persyaratan tambahan.",
    },
    {
      question: "Apakah harga sewa sudah termasuk asuransi?",
      answer:
        "Ya, semua harga sewa kami sudah termasuk asuransi dasar (Tanggung Jawab Pihak Ketiga). Kami juga menawarkan opsi asuransi tambahan seperti All-Risk untuk perlindungan maksimal selama perjalanan Anda di mana pun di Indonesia.",
    },
    {
      question: "Bisakah saya menyewa mobil dengan sopir di kota-kota lain?",
      answer:
        "Tentu saja. Kami menyediakan layanan sewa mobil dengan sopir profesional dan berpengalaman di semua kota besar di Indonesia. Sopir kami adalah warga lokal yang siap menjadi pemandu Anda.",
    },
    {
      question: "Bagaimana kebijakan bahan bakar untuk sewa lepas kunci?",
      answer:
        "Kami menerapkan kebijakan 'full-to-full' di seluruh cabang kami. Mobil akan kami serahkan dengan tangki bahan bakar penuh, dan Anda diharapkan mengembalikannya dalam kondisi yang sama untuk menghindari biaya tambahan.",
    },
    {
      question: "Apakah ada batasan jarak tempuh harian?",
      answer:
        "Untuk sebagian besar armada kami, kami tidak memberlakukan batasan jarak tempuh untuk penggunaan di dalam provinsi. Namun, untuk perjalanan ke luar provinsi atau penggunaan mobil mewah, mungkin ada kebijakan jarak tempuh yang berlaku. Silakan hubungi kami untuk detailnya.",
    },
    {
      question: "Bagaimana jika saya ingin membatalkan pesanan?",
      answer:
        "Anda dapat membatalkan pesanan Anda. Untuk pembatalan yang dilakukan lebih dari 24 jam sebelum waktu sewa, tidak akan dikenakan biaya. Pembatalan dalam waktu kurang dari 24 jam mungkin akan dikenakan biaya sesuai kebijakan yang berlaku.",
    },
    {
      question:
        "Apakah saya bisa menyewa mobil di satu kota dan mengembalikannya di kota lain?",
      answer:
        "Layanan sewa sekali jalan (one-way rental) tersedia untuk rute-rute tertentu di seluruh Indonesia. Layanan ini mungkin dikenakan biaya tambahan. Silakan hubungi tim kami untuk mendiskusikan kebutuhan perjalanan antar kota Anda.",
    },
  ];

  // bikin schema FAQ JSON-LD buat Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Temukan jawaban cepat untuk pertanyaan umum tentang layanan sewa
            mobil kami di seluruh Indonesia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/50 rounded-lg px-6 border-l-4 border-primary"
              >
                <AccordionTrigger>
                  <span className="text-lg font-semibold text-left hover:no-underline text-primary">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

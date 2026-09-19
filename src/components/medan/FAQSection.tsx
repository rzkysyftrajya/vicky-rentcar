"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara memesan rental mobil?",
    answer:
      "Anda cukup menghubungi kami via WhatsApp, informasikan tanggal, tujuan, dan jenis mobil yang diinginkan. Tim kami akan segera merespons dan mengatur pemesanan.",
  },
  {
    question: "Apakah tersedia layanan lepas kunci?",
    answer:
      "Ya, kami menyediakan layanan lepas kunci untuk pelanggan yang memiliki SIM valid. Syarat dan ketentuan berlaku.",
  },
  {
    question: "Berapa lama waktu minimal sewa mobil?",
    answer:
      "Minimal sewa mobil adalah 12 jam untuk rental harian. Untuk rental bulanan, minimal kontrak 1 bulan.",
  },
  {
    question: "Apakah harga sudah termasuk BBM dan sopir?",
    answer:
      "Untuk paket dengan sopir, harga sudah termasuk sopir namun BBM biasanya ditanggung pelanggan. Detail dapat dikonfirmasi saat pemesanan.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan atau kecelakaan?",
    answer:
      "Semua unit kami dilengkapi asuransi. Prosedur klaim akan dibantu oleh tim kami. Pastikan untuk segera menghubungi kami jika terjadi insiden.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Pertanyaan Umum
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

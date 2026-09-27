"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara memesan rental mobil di Medan?",
    answer:
      "Anda biasanya bisa mulai dengan memberi tahu tujuan perjalanan, tanggal, dan jumlah penumpang melalui WhatsApp atau telepon. Setelah itu, tim kami akan membahas kendaraan yang cocok untuk kebutuhan tersebut.",
  },
  {
    question: "Apakah tersedia layanan lepas kunci?",
    answer:
      "Biasanya tersedia sesuai kebutuhan dan persyaratan pelanggan. Untuk detailnya, sampaikan dulu tipe penggunaan serta durasi sewa agar kami bisa menyesuaikan opsi yang tepat.",
  },
  {
    question: "Berapa lama durasi sewa yang umum?",
    answer:
      "Rental harian dan beberapa hari adalah yang paling umum digunakan. Jika Anda butuh lebih lama, jelaskan durasi dan pola penggunaan agar kami bisa menyarankan opsi yang paling sesuai.",
  },
  {
    question: "Apa yang perlu saya sampaikan saat booking?",
    answer:
      "Sampaikan jadwal perjalanan, titik jemput, tujuan, jumlah penumpang, dan apakah Anda membutuhkan sopir. Informasi itu membantu kami memilih mobil yang lebih tepat untuk perjalanan Anda.",
  },
  {
    question: "Apakah layanan bisa untuk bandara dan wisata?",
    answer:
      "Ya. Banyak pelanggan menggunakan layanan ini untuk transfer bandara, perjalanan wisata, serta kebutuhan keluarga atau bisnis di Medan dan sekitarnya.",
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

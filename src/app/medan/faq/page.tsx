"use client";

import { Inter } from "next/font/google";
import FAQSection from "@/components/medan/FAQSection";
import FloatingWhatsApp from "@/components/medan/FloatingWhatsApp";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  HelpCircle,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle,
  Car,
  CreditCard,
  Shield,
  Users,
  Calendar,
  FileText,
  AlertTriangle,
  Star,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const faqCategories = [
  {
    name: "Booking & Reservasi",
    icon: Calendar,
    description: "Pertanyaan tentang cara memesan layanan kami",
    color: "bg-blue-500",
    faqs: [
      {
        question: "Bagaimana cara memesan mobil di VRN Rent Car Medan?",
        answer:
          "Anda dapat memesan melalui beberapa cara:\n\n1. WhatsApp: Hubungi kami di +6282363389893\n2. Telepon: Telpon langsung ke nomor yang tersedia\n3. Website: Isi form pemesanan di website kami\n4. Email: Kirim permintaan ke email resmi kami\n\nKami akan merespons dalam waktu kurang dari 5 menit untuk pemesanan via WhatsApp dan telepon.",
      },
      {
        question: "Berapa lama proses konfirmasi pemesanan?",
        answer:
          "Untuk pemesanan via WhatsApp dan telepon, konfirmasi akan diberikan dalam waktu 5-15 menit. Untuk pemesanan melalui email, kami akan merespons dalam 1x24 jam jam kerja. Pemesanan last minute (kurang dari 2 jam sebelum keberangkatan) tetap kami layani dengan konfirmasi segera.",
      },
      {
        question:
          "Apakah bisa booking untuk keberangkatan besok atau hari ini?",
        answer:
          "Ya, kami menerima pemesanan last minute. Untuk keberangkatan kurang dari 2 jam dari sekarang, silakan hubungi kami langsung via WhatsApp atau telepon untuk memastikan ketersediaan kendaraan. Kami akan melakukan yang terbaik untuk memenuhi kebutuhan Anda.",
      },
      {
        question: "Bagaimana jika saya perlu membatalkan atau mengubah jadwal?",
        answer:
          "Jika perlu membatalkan atau mengubah jadwal, hubungi kami sesegera mungkin. Tim kami akan membantu mengonfirmasi perubahan jadwal dan ketentuan yang berlaku.",
      },
    ],
  },
  {
    name: "Layanan & Pembayaran",
    icon: CreditCard,
    description: "Pertanyaan tentang layanan dan metode pembayaran",
    color: "bg-green-500",
    faqs: [
      {
        question: "Bagaimana menentukan layanan rental yang sesuai?",
        answer:
          "Sampaikan jenis kendaraan, durasi, rute, dan kebutuhan perjalanan Anda melalui WhatsApp atau telepon. Tim kami akan membantu menjelaskan pilihan layanan dan ketersediaan yang sesuai.",
      },
      {
        question: "Apa yang perlu dikonfirmasi sebelum memesan?",
        answer:
          "Konfirmasikan rincian layanan seperti penggunaan sopir, BBM, tol, parkir, dan kebutuhan perjalanan lainnya kepada tim kami sebelum reservasi. Rincian dapat berbeda sesuai layanan yang dipilih.",
      },
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer:
          "Kami menerima berbagai metode pembayaran:\n\n• Tunai (Cash)\n• Transfer Bank (BCA, Mandiri, BNI, BRI)\n• QRIS\n• Kartu Debit/Kredit\n• Payment Gateway (Midtrans)\n\nPembayaran dapat dilakukan setelah layanan selesai atau di muka sesuai kesepakatan.",
      },
      {
        question: "Bagaimana mengajukan kebutuhan rental jangka panjang?",
        answer:
          "Hubungi kami dan sampaikan durasi serta kebutuhan penggunaan kendaraan Anda. Tim kami akan membantu membahas pilihan layanan yang tersedia.",
      },
    ],
  },
  {
    name: "Persyaratan",
    icon: FileText,
    description: "Dokumen dan persyaratan yang diperlukan",
    color: "bg-purple-500",
    faqs: [
      {
        question: "Dokumen apa saja yang diperlukan untuk sewa mobil?",
        answer:
          "Untuk warga negara Indonesia (WNI):\n\n✓ KTP asli\n✓ SIM A atau SIM B1 asli\n✓ NPWP (untuk corporate)\n\nUntuk warga negara asing (WNA):\n\n✓ Paspor asli\n✓ KITAS/KITAP\n✓ Surat kuasa mengemudi dari Kedutaan (jika diperlukan)\n\nCatatan: Semua dokumen harus asli, fotokopi tidak berlaku.",
      },
      {
        question: "Apakah bisa sewa mobil tanpa KTP/SIM?",
        answer:
          "Maaf, kami tidak dapat menerima penyewa tanpa dokumen identitas dan surat izin mengemudi yang valid. Ini adalah persyaratan wajib untuk keamanan dan legalitas rental mobil. Jika SIM Anda sedang dalam proses perpanjangan, kami sarankan menunggu sampai SIM baru diterima.",
      },
      {
        question: "Berapa usia minimum untuk menyewa mobil?",
        answer:
          "Usia minimum untuk menyewa mobil adalah 21 tahun dengan catatan SIM yang berlaku minimal 1 tahun. Untuk beberapa jenis kendaraan premium seperti Toyota Alphard atau Mercedes-Benz, usia minimum adalah 25 tahun. Kebijakan ini untuk memastikan pengalaman menyewa yang aman dan bertanggung jawab.",
      },
      {
        question: "Apakah ada persyaratan tambahan saat melakukan reservasi?",
        answer:
          "Persyaratan dapat berbeda sesuai kendaraan dan layanan yang dipilih. Hubungi tim kami untuk mengonfirmasi dokumen serta ketentuan yang berlaku sebelum pemesanan.",
      },
    ],
  },
  {
    name: "Layanan Sopir",
    icon: Users,
    description: "Tentang sopir dan layanan driver",
    color: "bg-orange-500",
    faqs: [
      {
        question: "Apakah sewa mobil sudah termasuk sopir?",
        answer:
          "Ya, layanan dengan sopir tersedia. Sopir kami berpengalaman dan familiar dengan kondisi jalan di Sumatera Utara. Jika Anda ingin menyewa mobil tanpa sopir (self-drive), hubungi kami untuk memastikan persyaratan dan ketersediaannya.",
      },
      {
        question: "Apakah sopir bisa bahasa Inggris?",
        answer:
          "Ya, kami memiliki sopir yang dapat berkomunikasi dalam bahasa Inggris. Untuk kebutuhan bisnis atau turis asing, kami dapat menyediakan sopir English-speaking dengan pemberitahuan sebelumnya. Silakan informasikan kebutuhan ini saat pemesanan.",
      },
      {
        question: "Berapa jam kerja sopir per hari?",
        answer:
          "Sopir kami bekerja maksimal 12 jam per hari untuk rental harian. Untuk tour atau rental yang memerlukan waktu lebih lama, kami dapat menyediakan sopir pengganti atau mengatur jadwal istirahat yang sesuai dengan peraturan lalu lintas. Keselamatan Anda adalah prioritas utama kami.",
      },
      {
        question: "Bisa pilih sopir tertentu?",
        answer:
          "Untuk pelanggan tetap atau kebutuhan khusus, kami dapat mengakomodasi permintaan sopir tertentu berdasarkan ketersediaan. Namun, untuk pemesanan reguler, kami akan menugaskan sopir terbaik kami sesuai jadwal dan kebutuhan. Semua sopir kami telah melalui pelatihan dan verifikasi keamanan.",
      },
    ],
  },
  {
    name: "Armada & Kendaraan",
    icon: Car,
    description: "Tentang kondisi dan spesifikasi kendaraan",
    color: "bg-red-500",
    faqs: [
      {
        question: "Bagaimana kondisi armada kendaraan VRN Rent Car?",
        answer:
          "Semua kendaraan armada VRN Rent Car Medan dalam kondisi prima dan terawat. Kami melakukan maintenance rutin setiap 5.000 km dan pemeriksaan sebelum setiap penyewaan. Setiap kendaraan dilengkapi dengan AC dingin, interior bersih, dan kondisi mesin optimal. Kami bangga dengan kondisi armada yang selalu prima.",
      },
      {
        question: "Apakah kendaraan tersedia untuk trip ke luar kota?",
        answer:
          "Ya, semua armada kami tersedia untuk trip dalam dan luar kota. Untuk perjalanan ke luar kota seperti Tour Danau Toba, Berastagi, atau destinasi lain di Sumatera Utara, kendaraan kami dilengkapi dengan kondisi yang siap untuk perjalanan jauh. Untuk perjalanan ke luar Sumatera, kami sarankan koordinasi terlebih dahulu.",
      },
      {
        question: "Bagaimana jika kendaraan mengalami masalah saat digunakan?",
        answer:
          "Jika terjadi masalah teknis atau kerusakan pada kendaraan selama periode sewa, kami akan:\n\n1. Mengirim teknisi untuk membantu perbaikan di lokasi (jika memungkinkan)\n2. Mengganti dengan kendaraan setara jika masalah tidak dapat diatasi di lokasi\n3. Membantu mengoordinasikan penanganan kendala\n\n Hotline 24/7 kami siap membantu kapan saja jika terjadi keadaan darurat.",
      },
      {
        question: "Bisa upgrade kendaraan saat pickup?",
        answer:
          "Upgrade kendaraan dapat dilakukan berdasarkan ketersediaan. Hubungi customer service sebelum hari penyewaan untuk memastikan unit yang tersedia.",
      },
    ],
  },
  {
    name: "Layanan Antar Jemput",
    icon: MapPin,
    description: "Tentang layanan pickup dan delivery",
    color: "bg-teal-500",
    faqs: [
      {
        question: "Apakah ada layanan antar jemput bandara?",
        answer:
          "Ya, kami menyediakan layanan antar jemput Bandara Kualanamu 24 jam sehari, 7 hari seminggu. Layanan ini mencakup perjalanan dari bandara ke hotel/rumah atau sebaliknya. Sampaikan jadwal penerbangan dan titik jemput agar tim kami dapat membantu mengatur penjemputan.",
      },
      {
        question: "Bagaimana cara mengatur antar jemput Bandara Kualanamu?",
        answer:
          "Hubungi kami dengan menyampaikan lokasi penjemputan atau tujuan, jadwal penerbangan, serta jumlah penumpang. Tim kami akan membantu mengonfirmasi pengaturan perjalanan.",
      },
      {
        question: "Apakah ada layanan antar jemput dari hotel/rumah?",
        answer:
          "Ya, kami melayani antar jemput di Medan dan sekitarnya. Hubungi kami dengan detail lokasi agar tim dapat mengonfirmasi cakupan layanan dan pengaturan penjemputan.",
      },
      {
        question: "Sopir akan datang jam berapa untuk penjemputan?",
        answer:
          "Sopir kami akan tiba 15 menit sebelum waktu penjemputan yang disepakati. Untuk penjemputan bandara, waktu penjemputan disesuaikan dengan jadwal kedatangan flight Anda. Kami akan menginformasikan nomor kontak sopir sehingga Anda dapat menghubungi langsung jika ada perubahan jadwal.",
      },
    ],
  },
  {
    name: "Tour & Paket Liburan",
    icon: Star,
    description: "Tentang paket tour dan destinasi wisata",
    color: "bg-pink-500",
    faqs: [
      {
        question: "Paket tour apa saja yang tersedia?",
        answer:
          "Kami menyediakan berbagai paket tour di Sumatera Utara:\n\n• City Tour Medan (1 hari)\n• Tour Berastagi & Samosir (2 hari 1 malam)\n• Tour Danau Toba Full Package (3 hari 2 malam)\n• Adventure Tour Bukit Lawang (4 hari 3 malam)\n• Pilgrimage Tour (kustom)\n• Corporate Outbound (kustom)\n\nSemua paket dapat disesuaikan dengan kebutuhan Anda.",
      },
      {
        question: "Apa saja yang termasuk dalam paket tour?",
        answer:
          "Paket tour VRN Rent Car umumnya sudah termasuk:\n\n✓ Transportasi dengan mobil/MPV/SUV\n✓ Sopir/tour guide\n✓ Bensin dan toll\n✓ Tiket masuk objek wisata\n✓ Penginapan (untuk paket multi-hari)\n✓ Makan (sesuai paket)\n\nDetail include dapat berbeda per paket, silakan lihat detail masing-masing paket.",
      },
      {
        question: "Bisakah itinerary tour dikustomisasi?",
        answer:
          "Ya, kami dengan senang hati akan membantu mengkustomisasi itinerary tour sesuai preferensi dan kebutuhan Anda. Apakah Anda ingin menambahkan destinasi tertentu, mengubah durasi, atau fokus pada jenis aktivitas tertentu, tim kami akan membuatkan paket yang sesuai dengan keinginan Anda. Hubungi kami untuk membahas kebutuhan itinerary Anda.",
      },
      {
        question: "Apakah ada guide/tour guide selama tour?",
        answer:
          "Untuk paket tour multi-hari, kami menyertakan tour guide berpengalaman yang akan menemani selama perjalanan. Untuk city tour atau trip singkat, sopir kami yang berpengalaman juga akan berfungsi sebagai pemandu lokal dan memberikan informasi tentang destinasi yang dikunjungi. Tour guide dapat bahasa Inggris jika diperlukan.",
      },
    ],
  },
  {
    name: "Lainnya",
    icon: HelpCircle,
    description: "Pertanyaan umum lainnya",
    color: "bg-gray-500",
    faqs: [
      {
        question: "Apakah VRN Rent Car menyediakan child seat?",
        answer:
          "Kami menyediakan child seat untuk penumpang anak-anak. Informasikan usia dan kebutuhan anak saat pemesanan agar tim kami dapat mengonfirmasi ketersediaan dan menyiapkannya.",
      },
      {
        question: "Bagaimana jika terlambat mengembalikan kendaraan?",
        answer:
          "Jika Anda terlambat mengembalikan kendaraan, hubungi kami sesegera mungkin agar tim dapat membantu mengoordinasikan perubahan jadwal dan ketentuan yang berlaku.",
      },
      {
        question:
          "Apakah kendaraan dapat digunakan untuk pernikahan atau event?",
        answer:
          "Ya, kami menyediakan layanan wedding car dan rental kendaraan untuk event khusus. Armada luxury kami seperti Toyota Alphard, Camry Hybrid, dan Mercedes-Benz tersedia dengan dekorasi lengkap. Hubungi kami minimal 1 minggu sebelum event untuk memastikan ketersediaan dan persiapan yang optimal.",
      },
      {
        question: "Bagaimana cara memberikan kritik atau saran?",
        answer:
          "Kami sangat menghargai feedback dari pelanggan. Anda dapat memberikan kritik atau saran melalui:\n\n• WhatsApp: +6282363389893\n• Email: feedback@vrnrentcarmedan.com\n• Form di website kami\n• Langsung kepada customer service\n\nSetiap feedback akan kami tindaklanjuti untuk meningkatkan kualitas layanan kami.",
      },
    ],
  },
];

const quickInfo = [
  {
    icon: Clock,
    title: "Layanan 24/7",
    description: "Hubungi kami kapan saja",
    detail: "24 jam, 7 hari seminggu",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Hubungi kami langsung",
    detail: "+62 812 3456 7890",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat dengan kami",
    detail: "Klik untuk chat",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Kirim email kepada kami",
    detail: "info@vrnrentcarmedan.com",
  },
];

const tips = [
  {
    title: "Booking Lebih Awal",
    description:
      "Pesan minimal 1 hari sebelumnya untuk mendapat kendaraan pilihan",
    icon: Calendar,
  },
  {
    title: "Siapkan Dokumen",
    description: "Pastikan KTP dan SIM asli tersedia saat pickup",
    icon: FileText,
  },
  {
    title: "Konfirmasi Ulang",
    description: "Konfirmasi pemesanan 2 jam sebelum keberangkatan",
    icon: CheckCircle,
  },
  {
    title: "Komunikasi Terbuka",
    description: "Hubungi kami jika ada perubahan rencana",
    icon: MessageCircle,
  },
];

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchQuery, setSearchQuery] = useState("");
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ada%20pertanyaan%20tentang%20VRN%20Rent%20Car%20Medan";

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  const toggleFAQ = (faqKey: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }));
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <main className={`${inter.className} min-h-screen`}>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/medan"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Medan
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">FAQ</span>
          </nav>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link
              href="/medan"
              className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-orange-100">
              Temukan jawaban untuk pertanyaan umum tentang layanan rental mobil
              VRN Rent Car Medan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search FAQ */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{info.description}</p>
                <p className="text-sm font-medium text-orange-600">
                  {info.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tips Agar Rental Lancar
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-orange-50 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <FAQSection />

      {/* Detailed FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jawaban Lengkap untuk Pertanyaan Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan informasi detail tentang semua layanan VRN Rent Car Medan
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {category.faqs.length} pertanyaan
                    </span>
                    {expandedCategory === category.name ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedCategory === category.name && (
                  <div className="px-6 pb-6 space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const faqKey = `${category.name}-${faqIndex}`;
                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(faqKey)}
                            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900 text-left pr-4">
                              {faq.question}
                            </span>
                            {expandedFAQ[faqKey] ? (
                              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {expandedFAQ[faqKey] && (
                            <div className="px-5 pb-5 text-gray-600 whitespace-pre-line">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pertanyaan Tidak Ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Maaf, tidak ada pertanyaan yang cocok dengan pencarian Anda
              </p>
              <Button asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Tanya Lewat WhatsApp
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Tim customer service kami siap membantu menjawab pertanyaan Anda
              24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <a href="/medan/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <FloatingWhatsApp />
    </main>
  );
}

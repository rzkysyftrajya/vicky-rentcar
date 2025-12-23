import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Phone,
  Award,
  Heart,
} from "lucide-react";

export const heroStats = [
  { num: "4.9/5", label: "Rating Google" },
  { num: "2015", label: "Sejak Tahun" },
  { num: "24/7", label: "Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Armada Lengkap & Terawat",
    desc: "Koleksi mobil modern dari city car hingga premium, semua dalam kondisi prima dengan maintenance rutin",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Driver Profesional & Ramah",
    desc: "Tim driver berpengalaman dengan pengetahuan mendalam tentang Surabaya dan sekitarnya",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Kenyamanan & Keamanan",
    desc: "Setiap perjalanan dijamin aman dengan mobil bersih, nyaman, dan driver bertanggung jawab",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "On Time & Reliable",
    desc: "Kami selalu tepat waktu dengan layanan yang bisa diandalkan untuk setiap kebutuhan Anda",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Free Konsultasi Rute",
    desc: "Bimbingan gratis untuk rute terbaik di Surabaya, dari Bandara Juanda hingga destinasi wisata",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: "Customer Service Fast Response",
    desc: "Tim support kami siap membantu Anda 24/7 dengan respon cepat dan solusi tepat",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Pelayanan Ramah & Personal",
    desc: "Pendekatan personal dengan sentuhan kehangatan khas Surabaya untuk pengalaman terbaik",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Pengalaman Terpercaya",
    desc: "Lebih dari 8 tahun melayani pelanggan di Surabaya dengan komitmen tinggi pada kepuasan",
    colorClasses: {
      border: "border-t-4 border-blue-500 dark:border-blue-600",
      bgGradient: "bg-white dark:bg-slate-900",
      textColor: "text-blue-600 dark:text-blue-400",
    },
  },
];

export const carOptions = [
  {
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6-7 Orang",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    sellingPoints: ["Paling Ekonomis", "Irit BBM", "Cocok Keluarga"],
    popular: false,
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    name: "Innova Reborn",
    type: "Family MPV",
    capacity: "6-7 Orang",
    features: ["Extra Comfort", "Premium Audio", "Kamera Parkir"],
    sellingPoints: ["Nyaman Panjang", "AC Powerful", "Driver Favorite"],
    popular: true,
    image: "/armada/innova-reborn.webp",
  },
  {
    name: "Innova Zenix",
    type: "Modern MPV",
    capacity: "6-7 Orang",
    features: ["Sunroof", "Hybrid Engine", "Captain Seat"],
    sellingPoints: ["Teknologi Modern", "Ramah Lingkungan", "Luxury Feel"],
    popular: false,
    image: "/armada/innova-zenix .webp",
  },
  {
    name: "Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Gagah & Tangguh", "Mesin Diesel", "4x4 Ready"],
    sellingPoints: [
      "Off-Road Expert",
      "Ground Clearance Tinggi",
      "Mesin Powerful",
    ],
    popular: false,
    image: "/armada/fortuner.webp",
  },
  {
    name: "Pajero",
    type: "SUV",
    capacity: "7 Orang",
    features: ["Desain Sporty", "Sunroof", "Performa Handal"],
    sellingPoints: ["Icon SUV", "All Terrain", "Kabin Luas"],
    popular: false,
    image: "/armada/pajero.webp",
  },
  {
    name: "Hiace Premio",
    type: "Minibus",
    capacity: "14 Orang",
    features: ["Kabin Luas", "AC Plafon", "Cocok Rombongan"],
    sellingPoints: ["Kapasitas Besar", "AC Premium", "Tour & Travel"],
    popular: false,
    image: "/armada/hiace-premio.webp",
  },
  {
    name: "Hiace Commuter",
    type: "Minibus",
    capacity: "14 Orang",
    features: ["Ekonomis", "Handal", "Kapasitas Besar"],
    sellingPoints: ["Budget Friendly", "Reliable", "Group Travel"],
    popular: false,
    image: "/armada/hiace-commuter.webp",
  },
  {
    name: "Alphard",
    type: "Luxury MPV",
    capacity: "6-7 Orang",
    features: ["Captain Seat", "Entertainment", "Premium Leather"],
    sellingPoints: ["Executive Class", "Privacy Maximum", "VIP Experience"],
    popular: false,
    image: "/armada/alphard-new.webp",
  },
  {
    name: "Land Cruiser",
    type: "Luxury SUV",
    capacity: "7 Orang",
    features: ["Off-Road Capable", "Premium Interior", "Advanced Safety"],
    sellingPoints: ["Adventure Ready", "Ultimate Luxury", "Unmatched Safety"],
    popular: false,
    image: "/armada/land-cruiser.webp",
  },
];

export const destinations = [
  {
    name: "Tugu Pahlawan & Museum",
    category: "Sejarah",
    desc: "Ikon Surabaya yang wajib dikunjungi, simbol perjuangan arek-arek Suroboyo",
    image: "/halaman-surabaya/tugu-pahlawan.jpeg",
  },
  {
    name: "House of Sampoerna",
    category: "Budaya",
    desc: "Museum heritage dengan arsitektur kolonial yang instagramable",
    image: "/halaman-surabaya/house-of-sampoerna.jpeg",
  },
  {
    name: "Jembatan Suramadu",
    category: "Landmark",
    desc: "Jembatan terpanjang di Indonesia, spot foto sunset terbaik",
    image: "/halaman-surabaya/jembatan-suramadu.jpg",
  },
  {
    name: "Kebun Binatang Surabaya",
    category: "Wisata Keluarga",
    desc: "Salah satu kebun binatang tertua di Asia Tenggara",
    image: "/halaman-surabaya/kebun-binatang-surabaya.jpg",
  },
  {
    name: "Pantai Kenjeran & Pagoda",
    category: "Pantai",
    desc: "Sunrise spektakuler & kuliner seafood segar",
    image: "/halaman-surabaya/Pantai-Kenjeran-Pagoda.jpg",
  },
  {
    name: "Ciputra Waterpark",
    category: "Hiburan",
    desc: "Waterpark terbesar di Surabaya dengan berbagai wahana seru untuk keluarga",
    image: "/halaman-surabaya/Ciputra-Waterpark.webp",
  },
];

export const culinarySpots = [
  { name: "Rawon Setan", icon: "🍲", loc: "Jl. Embong Malang" },
  { name: "Rujak Cingur", icon: "🥗", loc: "Jl. Ahmad Jaiz" },
  { name: "Sate Klopo", icon: "🍢", loc: "Jl. Walikota Mustajab" },
  { name: "Tahu Tek", icon: "🍳", loc: "Jl. Dinoyo" },
  { name: "Lontong Balap", icon: "🍜", loc: "Jl. Kranggan" },
  { name: "Semanggi Suroboyo", icon: "☘️", loc: "Taman Bungkul" },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    city: "Surabaya",
    text: "Sudah 3 tahun pakai Vicky Rentcar untuk keperluan bisnis. Driver-nya selalu on time, mobil selalu bersih dan terawat. Customer service-nya juga sangat responsif. Recommended untuk rental mobil terpercaya Surabaya!",
    rating: 5,
  },
  {
    name: "Maria & Doni",
    city: "Malang",
    text: "Pakai Alphard untuk acara resepsi pernikahan. Semuanya sempurna! Driver-nya sopan, mobil mewah dan nyaman. Timnya juga bantu koordinasi dengan WO. Terima kasih Vicky Rentcar, jasa sewa mobil Surabaya terbaik!",
    rating: 5,
  },
  {
    name: "David Liem",
    city: "Jakarta",
    text: "Sewa mobil untuk operasional perusahaan di Surabaya. Armada lengkap dari city car sampai minibus. Driver professional dan bisa bahasa Inggris. Harga kompetitif dengan pelayanan premium. Partner bisnis yang reliable!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    city: "Singapore",
    text: "Antar jemput Bandara Juanda sangat memuaskan. Driver nunggu dengan rambu nama, mobil bersih dan nyaman. Perfect untuk turis seperti saya. Vicky Rentcar benar-benar rental mobil dengan sopir terbaik di Surabaya!",
    rating: 5,
  },
  {
    name: "Keluarga Wijaya",
    city: "Sidoarjo",
    text: "Liburan keluarga ke Batu naik Innova Zenix. Driver-nya sabar banget anter anak-anak, mobilnya luas dan nyaman. Ada entertainment system juga. Vicky Rentcar memang jasa sewa mobil Surabaya yang bisa dipercaya!",
    rating: 5,
  },
  {
    name: "Fadli Rahman",
    city: "Surabaya",
    text: "Customer service-nya fast response banget! Butuh mobil urgent untuk meeting, langsung dihandle dengan baik. Driver datang tepat waktu, mobil siap pakai. Vicky Rentcar memang rental mobil harian Surabaya yang professional!",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Apakah harga sudah termasuk supir & BBM?",
    a: "Ya! Semua paket VRN Surabaya sudah termasuk driver profesional. BBM untuk dalam kota Surabaya sudah termasuk, untuk luar kota disesuaikan dengan jarak tempuh.",
  },
  {
    q: "Berapa minimal waktu sewa?",
    a: "Minimal sewa 12 jam untuk paket harian. Tersedia juga paket half-day (6 jam) dan paket airport transfer mulai dari 3 jam.",
  },
  {
    q: "Apakah bisa sewa mobil untuk ke luar kota?",
    a: "Tentu bisa! Kami melayani perjalanan ke Malang, Bromo, Batu, Banyuwangi, hingga Bali. Driver kami berpengalaman untuk perjalanan jarak jauh.",
  },
  {
    q: "Bagaimana cara booking?",
    a: "Sangat mudah! Cukup klik tombol WhatsApp, pilih mobil & tanggal, lalu tim kami akan konfirmasi ketersediaan. Tanpa ribet, tanpa DP!",
  },
  {
    q: "Apakah ada driver yang bisa bahasa Inggris?",
    a: "Ya, kami punya driver yang fasih berbahasa Inggris, cocok untuk tamu internasional. Tinggal request saat booking.",
  },
  {
    q: "Apakah bisa cancel booking?",
    a: "Bisa! Cancel gratis hingga H-1 sebelum pemakaian. Untuk cancel mendadak, akan dikenakan biaya admin sesuai kebijakan.",
  },
  {
    q: "Apakah mobil terawat dan aman?",
    a: "Semua armada VRN dipastikan kondisi prima, service rutin, dan dilengkapi asuransi all-risk untuk keamanan perjalanan Anda.",
  },
  {
    q: "Apakah melayani antar jemput bandara?",
    a: "Ya! Kami melayani airport transfer dari/ke Bandara Juanda 24/7. Driver sudah standby sesuai jadwal penerbangan Anda.",
  },
];

export const googleReviews = [
  {
    name: "Agung",
    avatar: "/testimoni/rian-hidayat.jpg",
    rating: 5,
    text: "Pelayanannya sangat memuaskan, drivernya ramah dan sangat membantu. Mobilnya juga bersih dan nyaman. Recommended banget buat yang mau sewa mobil di Surabaya!",
    link: "https://maps.app.goo.gl/p7AAgNyAcjcg94gSA",
  },
  {
    name: "Mhd Bilal",
    avatar: "/testimoni/siti-aisyah.jpg",
    rating: 5,
    text: "Baru pengalaman saya rental mobil di vicky rental sangat senang respon cepat mobil bagus dn supir ramah, tq next order",
    link: "https://maps.app.goo.gl/JW7mWApCTiMkccc59",
  },
  {
    name: "Balqis Khanza",
    avatar: "/testimoni/budi-santoso.jpg",
    rating: 5,
    text: "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya",
    link: "https://maps.app.goo.gl/SaFbm6s5gPMX5TuN7",
  },
];

export const galleryPhotos = [
  "/galeri/galeri1.webp",
  "/galeri/galeri2.webp",
  "/galeri/galeri3.webp",
  "/galeri/galeri4.webp",
  "/galeri/galeri5.webp",
  "/galeri/galeri6.webp",
  "/galeri/galeri7.webp",
  "/galeri/galeri8.webp",
];

export const serviceAreas = [
  "Surabaya Pusat",
  "Surabaya Utara",
  "Surabaya Timur",
  "Surabaya Selatan",
  "Surabaya Barat",
  "Sidoarjo",
  "Gresik",
  "Bandara Juanda",
  "Malang",
  "Batu",
  "Probolinggo",
  "Bromo",
  "Bali (drop off)",
];

export const services = [
  {
    name: "Rental Mobil Harian Surabaya",
    desc: "Layanan sewa mobil harian dengan sopir profesional untuk kebutuhan sehari-hari, meeting bisnis, atau wisata keluarga di Surabaya",
    features: [
      "Sopir berpengalaman",
      "Mobil terawat",
      "Konsultasi rute gratis",
      "CS 24/7",
    ],
    icon: "🚗",
  },
  {
    name: "Sewa Mobil dengan Sopir",
    desc: "Paket lengkap dengan sopir berpengalaman yang familiar dengan jalur terbaik di Surabaya dan sekitarnya",
    features: [
      "Driver profesional",
      "Driver bilingue tersedia",
      "Armada premium",
      "Pelayanan personal",
    ],
    icon: "👨‍💼",
  },
  {
    name: "Rental Mobil Bandara Juanda",
    desc: "Layanan antar jemput dari dan ke Bandara Juanda dengan driver yang standby sesuai jadwal penerbangan Anda",
    features: [
      "Pickup dari hotel",
      "Drop off ke terminal",
      "Monitoring jadwal",
      "Driver standby",
    ],
    icon: "✈️",
  },
  {
    name: "Perjalanan Luar Kota",
    desc: "Trip jarak jauh ke Malang, Bromo, Batu, dan sekitarnya dengan armada yang nyaman untuk perjalanan panjang",
    features: [
      "Armada handal",
      "Driver ahli jalan",
      "Konsumsi perjalanan",
      "Trip aman",
    ],
    icon: "🗺️",
  },
  {
    name: "Mobil Operasional Perusahaan",
    desc: "Solusi transportasi untuk kebutuhan operasional bisnis dengan layanan B2B yang professional dan reliable",
    features: [
      "Konsolidasi tagihan",
      "Driver full-time",
      "Armada beragam",
      "Support bisnis",
    ],
    icon: "🏢",
  },
  {
    name: "Trip Wisata Keluarga",
    desc: "Paket wisata keluarga dengan armada nyaman untuk menjelajahi destinasi wisata terbaik di Surabaya dan sekitarnya",
    features: [
      "Itinerary custom",
      "Armada keluarga",
      "Driver tour guide",
      "Booking mudah",
    ],
    icon: "👨‍👩‍👧‍👦",
  },
];

export const hotelRecommendations = [
  {
    name: "Hotel Majapahit Surabaya",
    stars: 5,
    area: "Tunjungan",
    desc: "Hotel heritage dengan arsitektur kolonial megah & layanan bintang lima.",
    features: ["Pool", "Spa", "Restaurant"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
  },
  {
    name: "JW Marriott Surabaya",
    stars: 5,
    area: "Embong Malang",
    desc: "Kemewahan modern di pusat kota dengan fasilitas business center lengkap.",
    features: ["Ballroom", "Gym", "Lounge"],
    image: "/halaman-surabaya/JW-Marriott-Surabaya.jpg",
  },
  {
    name: "Shangri-La Surabaya",
    stars: 5,
    area: "Darmo",
    desc: "Resort city dengan nuansa tropis & kuliner internasional kelas dunia.",
    features: ["Garden", "Bar", "Executive Floor"],
    image: "/halaman-surabaya/Shangri-La-Surabaya.png",
  },
];

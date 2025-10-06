import { Car, Users, MapPin, Clock, Star, CheckCircle } from "lucide-react";

export const heroStats = [
  { num: "500+", label: "Pelanggan Puas" },
  { num: "50+", label: "Armada Siap" },
  { num: "24/7", label: "Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Car className="w-12 h-12" />,
    title: "Armada Terawat & Lengkap",
    desc: "Mobil city car hingga premium, semua terawat & asuransi all-risk",
    color: "blue",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Driver Profesional",
    desc: "Sopir ramah, berpengalaman & tahu jalan tikus Surabaya",
    color: "green",
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Harga Transparan",
    desc: "Tanpa biaya tersembunyi, sudah termasuk driver & BBM dalam kota",
    color: "yellow",
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Layanan 24/7",
    desc: "Booking kapan saja, antar jemput bandara tersedia",
    color: "purple",
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Coverage Luas",
    desc: "Surabaya, Malang, Bromo, Bali - semua bisa!",
    color: "red",
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Rating 4.9/5.0",
    desc: "Dipercaya ribuan pelanggan dari seluruh Indonesia",
    color: "orange",
  },
];

export const carOptions = [
  {
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6-7 Orang",
    price: "Mulai 400rb/hari",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    popular: false,
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    name: "Innova Reborn",
    type: "Family MPV",
    capacity: "6-7 Orang",
    price: "Mulai 600rb/hari",
    features: ["Extra Comfort", "Premium Audio", "Kamera Parkir"],
    popular: true,
    image: "/armada/innova-reborn.webp",
  },
  {
    name: "Innova Zenix",
    type: "Modern MPV",
    capacity: "6-7 Orang",
    price: "Mulai 700rb/hari",
    features: ["Sunroof", "Hybrid Engine", "Captain Seat"],
    popular: false,
    image: "/armada/innova-zenix .webp",
  },
  {
    name: "Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.2jt/hari",
    features: ["Gagah & Tangguh", "Mesin Diesel", "4x4 Ready"],
    popular: false,
    image: "/armada/fortuner.webp",
  },
  {
    name: "Pajero",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.2jt/hari",
    features: ["Desain Sporty", "Sunroof", "Performa Handal"],
    popular: false,
    image: "/armada/pajero.webp",
  },
  {
    name: "Hiace Premio",
    type: "Minibus",
    capacity: "14 Orang",
    price: "Mulai 1.1jt/hari",
    features: ["Kabin Luas", "AC Plafon", "Cocok Rombongan"],
    popular: false,
    image: "/armada/hiace-premio.webp",
  },
  {
    name: "Hiace Commuter",
    type: "Minibus",
    capacity: "14 Orang",
    price: "Mulai 900rb/hari",
    features: ["Ekonomis", "Handal", "Kapasitas Besar"],
    popular: false,
    image: "/armada/hiace-commuter.webp",
  },
  {
    name: "Alphard",
    type: "Luxury MPV",
    capacity: "6-7 Orang",
    price: "Mulai 1.5jt/hari",
    features: ["Captain Seat", "Entertainment", "Premium Leather"],
    popular: false,
    image: "/armada/alphard-new.webp",
  },
];

export const destinations = [
  {
    name: "Tugu Pahlawan & Museum",
    category: "Sejarah",
    desc: "Ikon Surabaya yang wajib dikunjungi, simbol perjuangan arek-arek Suroboyo",
    image: "/destinasi-wisata/tugu-pahlawan.jpg",
  },
  {
    name: "House of Sampoerna",
    category: "Budaya",
    desc: "Museum heritage dengan arsitektur kolonial yang instagramable",
    image: "/destinasi-wisata/house-of-sampoerna.jpg",
  },
  {
    name: "Jembatan Suramadu",
    category: "Landmark",
    desc: "Jembatan terpanjang di Indonesia, spot foto sunset terbaik",
    image: "/destinasi-wisata/jembatan-suramadu.jpg",
  },
  {
    name: "Kebun Binatang Surabaya",
    category: "Wisata Keluarga",
    desc: "Salah satu kebun binatang tertua di Asia Tenggara",
    image: "/destinasi-wisata/kebun-binatang-surabaya.jpg",
  },
  {
    name: "Pantai Kenjeran & Pagoda",
    category: "Pantai",
    desc: "Sunrise spektakuler & kuliner seafood segar",
    image: "/destinasi-wisata/pantai-kenjeran.jpg",
  },
  {
    name: "Ciputra Waterpark",
    category: "Hiburan",
    desc: "Waterpark terbesar di Surabaya dengan berbagai wahana seru untuk keluarga",
    image: "/destinasi-wisata/ciputra-waterpark.jpg",
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
    name: "Andi Prasetyo",
    city: "Jakarta",
    text: "Driver VRN sangat profesional! Tahu jalan tikus ke Bromo jadi hemat waktu 2 jam. Recommended!",
    rating: 5,
  },
  {
    name: "Maya Sari",
    city: "Surabaya",
    text: "Booking gampang banget, mobil bersih, driver ramah. Harga juga masuk akal. Pasti pakai lagi!",
    rating: 5,
  },
  {
    name: "Kevin Tan",
    city: "Singapore",
    text: "Perfect service for tourists! Driver speaks English and very helpful. Great experience!",
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

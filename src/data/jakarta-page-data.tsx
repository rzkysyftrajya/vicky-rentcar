import {
  Car,
  Users,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Building,
  Coffee,
  Camera,
  Plane,
  Phone,
} from "lucide-react";

export const heroStats = [
  { num: 1000, label: "Pelanggan Puas" },
  { num: 100, label: "Armada Siap" },
  { num: 24, label: "Jam Layanan Aktif" },
];

export const whyUsPoints = [
  {
    icon: <Car className="w-12 h-12" />,
    title: "Armada Premium & Lengkap",
    desc: "Dari city car hingga luxury SUV, semua terawat & asuransi all-risk",
    color: "blue",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Driver Profesional Jakarta",
    desc: "Sopir berpengalaman, tahu traffic Jakarta & jalan alternatif",
    color: "green",
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Harga Kompetitif",
    desc: "Tanpa biaya tersembunyi, sudah termasuk driver & tol Jakarta",
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
    title: "Coverage Jabodetabek",
    desc: "Jakarta, Bogor, Depok, Tangerang, Bekasi - semua terjangkau!",
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
    price: "Mulai 450rb/hari",
    features: ["AC Dingin", "Audio System", "Bagasi Luas"],
    popular: false,
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    name: "Innova Reborn",
    type: "Family MPV",
    capacity: "6-7 Orang",
    price: "Mulai 650rb/hari",
    features: ["Extra Comfort", "Premium Audio", "Kamera Parkir"],
    popular: true,
    image: "/armada/innova-reborn.webp",
  },
  {
    name: "Innova Zenix",
    type: "Modern MPV",
    capacity: "6-7 Orang",
    price: "Mulai 750rb/hari",
    features: ["Sunroof", "Hybrid Engine", "Captain Seat"],
    popular: false,
    image: "/armada/innova-zenix .webp",
  },
  {
    name: "Fortuner",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.3jt/hari",
    features: ["Gagah & Tangguh", "Mesin Diesel", "4x4 Ready"],
    popular: false,
    image: "/armada/fortuner.webp",
  },
  {
    name: "Pajero",
    type: "SUV",
    capacity: "7 Orang",
    price: "Mulai 1.3jt/hari",
    features: ["Desain Sporty", "Sunroof", "Performa Handal"],
    popular: false,
    image: "/armada/pajero.webp",
  },
  {
    name: "Hiace Premio",
    type: "Minibus",
    capacity: "14 Orang",
    price: "Mulai 1.2jt/hari",
    features: ["Kabin Luas", "AC Plafon", "Cocok Rombongan"],
    popular: false,
    image: "/armada/hiace-premio.webp",
  },
  {
    name: "Hiace Commuter",
    type: "Minibus",
    capacity: "14 Orang",
    price: "Mulai 950rb/hari",
    features: ["Ekonomis", "Handal", "Kapasitas Besar"],
    popular: false,
    image: "/armada/hiace-commuter.webp",
  },
  {
    name: "Alphard",
    type: "Luxury MPV",
    capacity: "6-7 Orang",
    price: "Mulai 1.8jt/hari",
    features: ["Captain Seat", "Entertainment", "Premium Leather"],
    popular: false,
    image: "/armada/alphard-new.webp",
  },
];

export const destinations = [
  {
    name: "Monas & Istiqlal",
    category: "Landmark",
    desc: "Ikon Jakarta yang megah, simbol kemerdekaan Indonesia",
    image: "/destinasi-wisata/ubud-bali.jpg",
  },
  {
    name: "Jakarta Cathedral",
    category: "Budaya",
    desc: "Gereja tua dengan arsitektur gothic yang indah",
    image: "/destinasi-wisata/candi-borobudur.jpg",
  },
  {
    name: "Taman Mini Indonesia Indah",
    category: "Wisata Budaya",
    desc: "Miniatur Indonesia dengan aneka rumah adat & budaya",
    image: "/destinasi-wisata/danau-toba.jpg",
  },
  {
    name: "Ancol Dreamland",
    category: "Hiburan",
    desc: "Taman hiburan terbesar di Jakarta dengan pantai buatan",
    image: "/destinasi-wisata/raja-ampat.jpg",
  },
  {
    name: "Museum Nasional",
    category: "Edukasi",
    desc: "Koleksi artefak sejarah Indonesia terlengkap",
    image: "/destinasi-wisata/surabaya.jpg",
  },
  {
    name: "Grand Indonesia Mall",
    category: "Shopping",
    desc: "Mal premium dengan fashion & kuliner internasional",
    image: "/destinasi-wisata/ubud-bali.jpg",
  },
];

export const culinarySpots = [
  {
    name: "Ayam Betutu",
    image: "/kuliner/ayam-betutu.jpg",
    loc: "Jl. Sudirman",
  },
  {
    name: "Sate Padang",
    image: "/kuliner/sate-padang.jpg",
    loc: "Jl. MH Thamrin",
  },
  { name: "Bakso President", image: "/kuliner/bakso.jpg", loc: "Jl. Veteran" },
  {
    name: "Nasi Uduk",
    image: "/kuliner/nasi-uduk.jpg",
    loc: "Jl. Kramat Jati",
  },
  {
    name: "Kerak Telor",
    image: "/kuliner/kerak-telor.jpg",
    loc: "Jl. I Gusti Ngurah Rai",
  },
  { name: "Martabak", image: "/kuliner/martabak.jpg", loc: "Jl. Cikini" },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    city: "Jakarta",
    text: "Driver VRN sangat profesional! Tahu jalan alternatif menghindari macet Jakarta. Recommended!",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    city: "Bogor",
    text: "Booking mudah, mobil bersih, driver ramah. Harga juga reasonable. Pasti pakai lagi!",
    rating: 5,
  },
  {
    name: "John Smith",
    city: "Singapore",
    text: "Perfect service for business trips! Driver speaks English and very punctual. Great experience!",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Apakah harga sudah termasuk supir & tol?",
    a: "Ya! Semua paket VRN Jakarta sudah termasuk driver profesional. Tol Jakarta & sekitarnya sudah termasuk, untuk luar Jabodetabek disesuaikan.",
  },
  {
    q: "Berapa minimal waktu sewa?",
    a: "Minimal sewa 12 jam untuk paket harian. Tersedia juga paket half-day (6 jam) dan paket airport transfer mulai dari 3 jam.",
  },
  {
    q: "Apakah bisa sewa mobil untuk ke luar Jakarta?",
    a: "Tentu bisa! Kami melayani perjalanan ke Bogor, Bandung, Cirebon, hingga Bali. Driver kami berpengalaman untuk perjalanan jarak jauh.",
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
    a: "Ya! Kami melayani airport transfer dari/ke Bandara Soekarno-Hatta 24/7. Driver sudah standby sesuai jadwal penerbangan Anda.",
  },
];

export const googleReviews = [
  {
    name: "Ahmad Rahman",
    avatar: "/testimoni/rian-hidayat.jpg",
    rating: 5,
    text: "Pelayanannya sangat memuaskan, drivernya ramah dan sangat membantu. Mobilnya juga bersih dan nyaman. Recommended banget buat yang mau sewa mobil di Jakarta!",
    link: "https://maps.app.goo.gl/p7AAgNyAcjcg94gSA",
  },
  {
    name: "Linda Sari",
    avatar: "/testimoni/siti-aisyah.jpg",
    rating: 5,
    text: "Baru pengalaman saya rental mobil di vicky rental sangat senang respon cepat mobil bagus dn supir ramah, tq next order",
    link: "https://maps.app.goo.gl/JW7mWApCTiMkccc59",
  },
  {
    name: "Rudi Hartono",
    avatar: "/testimoni/budi-santoso.jpg",
    rating: 5,
    text: "Rekomendasi lah pokoknya pelayanannya bagus mobil bersih wangi dan bagus mantap best lah pokoknya",
    link: "https://maps.app.goo.gl/SaFbm6s5gPMX5TuN7",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Pilih Mobil & Tanggal",
    desc: "Browse armada kami, pilih mobil favorit & tanggal sewa yang diinginkan.",
    icon: <Car className="w-16 h-16 text-green-600" />,
  },
  {
    step: 2,
    title: "Booking via WhatsApp",
    desc: "Klik tombol WhatsApp, kirim detail booking. Tim kami konfirmasi dalam 5 menit!",
    icon: <Phone className="w-16 h-16 text-green-600" />,
  },
  {
    step: 3,
    title: "Driver Antar Jemput",
    desc: "Driver profesional antar mobil ke lokasi Anda. Siap jalan tanpa ribet!",
    icon: <MapPin className="w-16 h-16 text-green-600" />,
  },
  {
    step: 4,
    title: "Nikmati Perjalanan",
    desc: "Explore Jakarta dengan nyaman. Driver tahu semua spot & jalan alternatif.",
    icon: <Star className="w-16 h-16 text-green-600" />,
  },
];

export const hotelRecommendations = [
  {
    name: "Grand Hyatt Jakarta",
    stars: 5,
    area: "SCBD",
    desc: "Hotel mewah dengan pemandangan kota & fasilitas business center lengkap.",
    features: ["Pool", "Spa", "Restaurant"],
    image: "/halaman-surabaya/Hotel-Majapahit-Surabaya.jpeg",
  },
  {
    name: "The Ritz-Carlton Jakarta",
    stars: 5,
    area: "Mega Kuningan",
    desc: "Luxury hotel dengan layanan bintang lima & ruang meeting eksekutif.",
    features: ["Ballroom", "Gym", "Lounge"],
    image: "/halaman-surabaya/JW-Marriott-Surabaya.jpg",
  },
  {
    name: "Hotel Mulia Resort",
    stars: 5,
    area: "Senayan",
    desc: "Resort di tengah kota dengan nuansa tropis & kuliner internasional.",
    features: ["Garden", "Bar", "Executive Floor"],
    image: "/halaman-surabaya/Shangri-La-Surabaya.png",
  },
];

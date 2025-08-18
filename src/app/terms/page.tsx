
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan - PT.VICKY RENTCAR NUSANTARA',
  description: 'Baca syarat dan ketentuan sewa mobil di PT.VICKY RENTCAR NUSANTARA. Pahami kebijakan kami mengenai penyewa, penggunaan kendaraan, pembayaran, dan asuransi.',
  keywords: ['syarat sewa mobil', 'ketentuan rental mobil', 'kebijakan sewa mobil medan'],
  openGraph: {
    title: 'Syarat & Ketentuan - PT.VICKY RENTCAR NUSANTARA',
    description: 'Pahami kebijakan kami mengenai penyewa, penggunaan kendaraan, pembayaran, dan asuransi.',
  },
}


export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-gradient">Syarat & Ketentuan</h1>
      <div className="prose lg:prose-xl mx-auto dark:prose-invert">
        <h2>1. Persyaratan Penyewa</h2>
        <p>
          Penyewa harus berusia minimal 21 tahun dan memiliki Surat Izin Mengemudi (SIM A) yang masih berlaku. Penyewa wajib menunjukkan KTP/Paspor asli dan dokumen identitas lain yang valid saat pengambilan kendaraan.
        </p>

        <h2>2. Penggunaan Kendaraan</h2>
        <p>
          Kendaraan hanya boleh digunakan untuk tujuan yang wajar dan sesuai dengan hukum yang berlaku di Indonesia. Kendaraan tidak diizinkan untuk digunakan dalam aktivitas balap, reli, tindak kriminal, atau untuk mengangkut barang-barang terlarang.
        </p>

        <h2>3. Pembayaran & Deposit</h2>
        <p>
          Biaya sewa penuh harus dibayarkan di muka. Deposit keamanan akan dikenakan dan akan dikembalikan sepenuhnya setelah kendaraan dikembalikan dalam kondisi baik dan tanpa kerusakan.
        </p>

        <h2>4. Asuransi & Tanggung Jawab</h2>
        <p>
          Semua kendaraan kami dilindungi oleh asuransi dasar (Tanggung Jawab Hukum Pihak Ketiga). Kerusakan akibat kelalaian penyewa (misalnya, kehilangan kunci, kerusakan interior, penggunaan bahan bakar yang salah) tidak ditanggung oleh asuransi dan menjadi tanggung jawab penuh penyewa.
        </p>

        <h2>5. Pembatalan</h2>
        <p>
          Pembatalan yang dilakukan kurang dari 48 jam sebelum waktu penjemputan akan dikenakan biaya pembatalan. Untuk informasi lebih lanjut mengenai kebijakan pembatalan, silakan hubungi layanan pelanggan kami.
        </p>

        <h2>6. Pengembalian Kendaraan</h2>
        <p>
          Kendaraan harus dikembalikan pada tanggal dan waktu yang telah disepakati. Keterlambatan pengembalian tanpa pemberitahuan sebelumnya akan dikenakan biaya tambahan per jam.
        </p>
      </div>
    </div>
  );
}


import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - PT.VICKY RENTCAR NUSANTARA',
  description: 'Pahami bagaimana kami melindungi data pribadi Anda. Kebijakan privasi ini menjelaskan cara kami mengumpulkan, menggunakan, dan menjaga informasi Anda tetap aman.',
  keywords: ['kebijakan privasi rental mobil', 'keamanan data pelanggan', 'privasi data sewa mobil'],
  openGraph: {
    title: 'Kebijakan Privasi - PT.VICKY RENTCAR NUSANTARA',
    description: 'Pahami bagaimana kami melindungi data pribadi Anda saat menggunakan layanan kami.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-center mb-12 text-gradient">Kebijakan Privasi</h1>
      <div className="prose lg:prose-xl mx-auto dark:prose-invert">
        <p>
          Di PT.VICKY RENTCAR NUSANTARA, kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan layanan kami.
        </p>
        
        <h2>Informasi yang Kami Kumpulkan</h2>
        <p>
          Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, seperti nama, alamat email, nomor telepon, dan salinan dokumen identitas (KTP/Paspor, SIM) yang diperlukan untuk proses penyewaan.
        </p>

        <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p>
          Informasi Anda digunakan untuk:
        </p>
        <ul>
            <li>Memproses pemesanan dan transaksi sewa mobil Anda.</li>
            <li>Memverifikasi identitas Anda.</li>
            <li>Menghubungi Anda terkait layanan kami, termasuk konfirmasi pemesanan dan pembaruan.</li>
            <li>Meningkatkan kualitas layanan kami.</li>
        </ul>

        <h2>Keamanan Data</h2>
        <p>
          Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
        </p>

        <h2>Pembaruan Kebijakan</h2>
        <p>
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan selalu dipublikasikan di halaman ini. Dengan terus menggunakan layanan kami, Anda menyetujui kebijakan yang diperbarui.
        </p>
      </div>
    </div>
  );
}

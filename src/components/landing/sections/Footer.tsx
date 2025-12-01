
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logoVRN.png" alt="Logo PT. Vicky Rentcar Nusantara" width={150} height={40} />
          </div>
          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link href="/about" className="hover:text-blue-300">Tentang Kami</Link>
            <Link href="/services" className="hover:text-blue-300">Layanan</Link>
            <Link href="/contact" className="hover:text-blue-300">Kontak</Link>
            <Link href="/privacy" className="hover:text-blue-300">Privasi</Link>
          </nav>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PT. Vicky Rentcar Nusantara. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Phone, Clock, MapPin, Mail, ExternalLink } from "lucide-react";
import { ClientYear } from "@/components/ui/client-year";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">VRN Rent Car Batam</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Layanan rental mobil terpercaya di Batam dan Kepulauan Riau.
              Melayani kebutuhan transportasi bisnis, wisata, dan perjalanan
              keluarga Anda.
            </p>
            <p className="text-sm text-gray-400 italic">
              Bagian dari jaringan Vicky Rent Car Nusantara
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/6282363389893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  +62 823-6338-9893
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-blue-400" />
                24 Jam, 7 Hari Seminggu
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Batam, Kepulauan Riau, Indonesia</span>
              </li>
              <li>
                <a
                  href="mailto:info@vrnrentcarbatam.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  info@vrnrentcarbatam.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#layanan"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Rental Mobil Harian
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Rental Mobil Bulanan
                </a>
              </li>
              <li>
                <a
                  href="#bandara"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Antar Jemput Bandara
                </a>
              </li>
              <li>
                <a
                  href="#armada"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Armada Mobil
                </a>
              </li>
              <li>
                <a
                  href="https://vickyrentcarnusantara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Website Utama
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © <ClientYear /> VRN Rent Car Batam. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

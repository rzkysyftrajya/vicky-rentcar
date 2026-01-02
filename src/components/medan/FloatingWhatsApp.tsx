"use client";

import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20rental%20mobil%20di%20Medan";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium pr-0 group-hover:pr-2">
        Pesan Sekarang
      </span>
    </a>
  );
};

export default FloatingWhatsApp;

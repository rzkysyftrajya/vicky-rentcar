"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileStickyCTA = () => {
  const whatsappLink =
    "https://wa.me/6282363389893?text=Halo,%20saya%20ingin%20memesan%20rental%20mobil%20di%20Medan";
  const callLink = "tel:+6282363389893";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-pb">
      {/* Backdrop blur background */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-slate-700" />

      {/* Content */}
      <div className="relative flex items-stretch h-16">
        {/* WhatsApp CTA - 70% */}
        <Button
          asChild
          className="flex-[7] rounded-none bg-green-600 hover:bg-green-700 text-white font-semibold border-r border-green-700"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>

        {/* Call CTA - 30% */}
        <Button
          asChild
          variant="outline"
          className="flex-[3] rounded-none border-l border-gray-300 dark:border-slate-600 bg-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          <a href={callLink}>
            <Phone className="w-5 h-5" />
            <span className="ml-2">Call</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;

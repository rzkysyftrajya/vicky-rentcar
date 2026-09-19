"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const waLink =
  "https://wa.me/6282363389893?text=Halo%20VRN%20Rent%20Car%20Batam,%20saya%20ingin%20tanya%20sewa%20mobil%20dengan%20driver";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-5 sm:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Hubungi via WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-shadow"
      >
        <Image
          src="/icon/wa.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="object-contain"
          priority
        />
      </motion.a>
    </motion.div>
  );
}


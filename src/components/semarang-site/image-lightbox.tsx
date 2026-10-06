
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";
import { useLightbox } from "@/hooks/semarang-site/use-lightbox";

export function ImageLightbox() {
  const { isOpen, closeLightbox, imageUrl } = useLightbox();

  return (
    <AnimatePresence>
      {isOpen && imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan gambar galeri"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative max-w-4xl max-h-[90vh] w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <div className="relative aspect-video w-full">
              <Image
                src={imageUrl}
                alt="Tampilan gambar diperbesar"
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="100vw"
              />
              {imageUrl.startsWith("/semarang/armada/") && (
                <div className="absolute bottom-0 left-1/2 z-10 flex h-9 w-[44%] min-w-[130px] max-w-[250px] -translate-x-1/2 items-center justify-center gap-2 bg-white px-2 text-xs font-semibold text-slate-900">
                  <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>+62 823-6338-9893</span>
                </div>
              )}
            </div>
          </motion.div>
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors z-50"
            aria-label="Tutup gambar"
          >
            <X className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

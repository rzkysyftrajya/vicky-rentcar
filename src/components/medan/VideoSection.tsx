"use client";

import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Video Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Lihat Lebih Dekat VRN Rent Car
          </h2>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
            alt="VRN Rent Car Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
            <button
              className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </button>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-gray-900/80 to-transparent">
            <p className="text-white text-lg font-medium text-center">
              Kenali tim profesional dan armada terbaik kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

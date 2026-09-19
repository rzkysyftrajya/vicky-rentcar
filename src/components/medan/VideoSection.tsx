"use client";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Video Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Lihat Lebih Dekat VRN Rent Car
          </h2>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <video
            src="/medan/video-pengenalan.mp4"
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="/medan/tentang.jpeg"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Kenali tim profesional dan armada terbaik kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

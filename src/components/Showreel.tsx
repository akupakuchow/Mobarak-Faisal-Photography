import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // keep your Play icon import

export default function Showreel() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="showreel" className="py-24 md:py-32 bg-mf-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full group cursor-pointer overflow-hidden"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Thumbnail */}
          <img
            src="Img/7.jpg"
            alt="Showreel Thumbnail"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Overlay + Play button */}
          <div className="absolute inset-0 bg-mf-black/40 group-hover:bg-mf-black/20 transition-colors duration-500 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-mf-white/30 flex items-center justify-center backdrop-blur-sm group-hover:border-mf-accent group-hover:scale-110 transition-all duration-500">
              <Play className="text-mf-white group-hover:text-mf-accent ml-2" size={32} />
            </div>
          </div>

          {/* Text */}
          <div className="absolute bottom-8 left-8">
            <p className="text-mf-white font-serif text-2xl md:text-3xl">Campaign Highlights</p>
            <p className="text-mf-white/70 text-sm uppercase tracking-widest mt-2">Director's Cut 2026</p>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[800px] aspect-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6UML5xTJEHY?si=92J4ujeuDxBHSILU" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl md:text-4xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Showreel() {
  return (
    <section id="showreel" className="py-24 md:py-32 bg-mf-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full group cursor-pointer overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2000&auto=format&fit=crop"
            alt="Showreel Thumbnail"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-mf-black/40 group-hover:bg-mf-black/20 transition-colors duration-500 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-mf-white/30 flex items-center justify-center backdrop-blur-sm group-hover:border-mf-accent group-hover:scale-110 transition-all duration-500">
              <Play className="text-mf-white group-hover:text-mf-accent ml-2" size={32} />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <p className="text-mf-white font-serif text-2xl md:text-3xl">Campaign Highlights</p>
            <p className="text-mf-white/70 text-sm uppercase tracking-widest mt-2">Director's Cut 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

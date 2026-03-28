import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "Mobarak has an incredible eye for detail. He doesn't just take photos; he creates art that elevates our entire brand identity.",
    name: "Elena Rostova",
    title: "Creative Director, VOGUE"
  },
  {
    quote: "Working with him was a revelation. The lighting, the mood, the direction—everything was flawless. A true visionary in fashion photography.",
    name: "Marcus Chen",
    title: "Lead Designer, Maison Chen"
  },
  {
    quote: "The campaign imagery exceeded all our expectations. He captured the essence of our luxury line with perfect cinematic grace.",
    name: "Sarah Jenkins",
    title: "CMO, Aurelia London"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-mf-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-mf-accent text-xs uppercase tracking-[0.3em] mb-16">Client Voices</h2>
        
        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-serif text-2xl md:text-4xl text-mf-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-sm uppercase tracking-widest text-mf-white">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-mf-white/50 mt-1">{testimonials[currentIndex].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-[1px] transition-all duration-300 ${
                idx === currentIndex ? 'bg-mf-accent' : 'bg-mf-white/20 hover:bg-mf-white/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

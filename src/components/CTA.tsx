import { motion } from 'motion/react';

export default function CTA() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-mf-black flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="Img\8.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mf-black via-transparent to-mf-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
        >
          Let's Create Something <br />
          <span className="italic text-mf-accent">Iconic</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => scrollTo('#contact')}
            className="px-12 py-5 bg-mf-white text-mf-black uppercase tracking-widest text-sm font-medium hover:bg-mf-accent hover:text-mf-white transition-colors duration-300"
          >
            Book Your Shoot Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

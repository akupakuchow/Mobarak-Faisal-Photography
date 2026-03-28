import { motion } from 'motion/react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
          alt="Fashion Editorial"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-mf-black/40 via-mf-black/20 to-mf-black/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.p
          className="text-mf-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Mobarak Faisal – Fashion Photographer
        </motion.p>
        
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-mf-white leading-tight mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Crafting Iconic <br className="hidden md:block" />
          <span className="italic font-light">Fashion Stories</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full md:w-auto px-10 py-4 bg-mf-accent text-mf-black uppercase tracking-widest text-sm font-medium hover:bg-mf-white transition-colors duration-300"
          >
            Book a Shoot
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="w-full md:w-auto px-10 py-4 border border-mf-white/30 text-mf-white uppercase tracking-widest text-sm hover:border-mf-accent hover:text-mf-accent transition-colors duration-300"
          >
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-mf-white/50">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-mf-white/30 relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-mf-accent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

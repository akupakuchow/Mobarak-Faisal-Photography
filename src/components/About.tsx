import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mf-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1554046920-90dcac0536d1?q=80&w=1000&auto=format&fit=crop"
                alt="Mobarak Faisal"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-mf-white/10 m-4 pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-mf-accent/30 -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The Art of <br />
              <span className="italic text-mf-accent">Visual Storytelling</span>
            </h2>
            
            <div className="space-y-6 text-mf-white/70 font-light leading-relaxed">
              <p>
                With a distinct eye for luxury and editorial aesthetics, I specialize in creating cinematic imagery that elevates fashion brands and individuals.
              </p>
              <p>
                My approach blends raw emotion with high-end production, resulting in photographs that don't just capture a moment, but tell a compelling story. Whether it's a global campaign or an intimate editorial, the goal remains the same: to create something truly iconic.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Fashion', 'Editorial', 'Commercial', 'Luxury'].map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 border border-mf-white/20 text-xs uppercase tracking-widest text-mf-white/80"
                >
                  {keyword}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Signature" className="h-12 invert opacity-50" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

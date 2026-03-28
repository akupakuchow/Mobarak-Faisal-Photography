import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Services', href: '#services' },
  ];

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-mf-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-wider text-mf-white uppercase">
            MF<span className="text-mf-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm uppercase tracking-widest text-mf-white/70 hover:text-mf-accent transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2 border border-mf-accent text-mf-accent text-sm uppercase tracking-widest hover:bg-mf-accent hover:text-mf-black transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-mf-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-mf-black flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button
              className="absolute top-6 right-6 text-mf-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="font-serif text-3xl uppercase tracking-widest text-mf-white hover:text-mf-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo('#contact')}
                className="mt-8 px-8 py-3 border border-mf-accent text-mf-accent text-lg uppercase tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

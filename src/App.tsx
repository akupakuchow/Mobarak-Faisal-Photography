/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Showreel from './components/Showreel';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [loading]);

  return (
    <>
      <div className="film-grain" />
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Showreel />
          <Testimonials />
          <Services />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

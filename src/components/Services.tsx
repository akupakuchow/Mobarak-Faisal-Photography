import { motion } from 'motion/react';

const services = [
  {
    title: "Fashion Shoot",
    desc: "High-end editorial photography for models, agencies, and independent designers looking to build a premium portfolio.",
    price: "From $1,500",
    img: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Brand Campaign",
    desc: "Comprehensive visual storytelling for fashion brands. Includes creative direction, lighting design, and full commercial usage rights.",
    price: "From $4,500",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Editorial Project",
    desc: "Magazine-style narrative shoots. Perfect for publications, lookbooks, and avant-garde fashion storytelling.",
    price: "Custom Quote",
    img: "https://images.unsplash.com/photo-1550614000-4b95d466f1d1?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Investment & Services</h2>
          <p className="text-mf-white/60 font-light max-w-2xl mx-auto">Tailored photography experiences designed to elevate your visual identity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group border border-mf-white/10 bg-mf-black hover:border-mf-accent/50 transition-colors duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                <p className="text-mf-white/60 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-mf-white/10">
                  <span className="text-mf-accent text-sm tracking-widest uppercase">{service.price}</span>
                  <button 
                    onClick={() => scrollTo('#contact')}
                    className="text-xs uppercase tracking-widest hover:text-mf-accent transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

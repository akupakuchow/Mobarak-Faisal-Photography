import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', type: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Inquiries</h2>
            <p className="text-mf-white/60 font-light mb-12 max-w-md">
              Currently accepting bookings for the upcoming season. Please provide details about your project, and my team will get back to you within 48 hours.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-mf-white/40 mb-1">Email</p>
                <a href="mailto:booking@mobarakfaisal.com" className="text-lg hover:text-mf-accent transition-colors">booking@mobarakfaisal.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-mf-white/40 mb-1">Studio</p>
                <p className="text-lg">Paris / London / Dubai</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-mf-white/20 py-3 text-mf-white focus:outline-none focus:border-mf-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-mf-white/50 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-mf-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-mf-white/20 py-3 text-mf-white focus:outline-none focus:border-mf-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-mf-white/50 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-mf-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Email
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-mf-white/20 py-3 text-mf-white focus:outline-none focus:border-mf-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-mf-white/50 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-mf-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Phone (Optional)
                  </label>
                </div>
                <div className="relative">
                  <select 
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-mf-white/20 py-3 text-mf-white focus:outline-none focus:border-mf-accent transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-mf-black">Project Type</option>
                    <option value="fashion" className="bg-mf-black">Fashion Shoot</option>
                    <option value="campaign" className="bg-mf-black">Brand Campaign</option>
                    <option value="editorial" className="bg-mf-black">Editorial</option>
                    <option value="other" className="bg-mf-black">Other</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-mf-white/20 py-3 text-mf-white focus:outline-none focus:border-mf-accent transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-mf-white/50 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-mf-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Project Details
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 border border-mf-accent text-mf-accent uppercase tracking-widest text-sm hover:bg-mf-accent hover:text-mf-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>

              {isSuccess && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-mf-accent text-center text-sm"
                >
                  Thank you. Your inquiry has been received.
                </motion.p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

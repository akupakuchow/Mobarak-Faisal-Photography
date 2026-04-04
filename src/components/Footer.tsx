import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mf-black py-12 border-t border-mf-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="font-serif text-2xl tracking-wider text-mf-white uppercase">
          MF<span className="text-mf-accent">.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/mobarakfaisal_ph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-mf-white/50 hover:text-mf-accent transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=8801744101970" className="text-mf-white/50 hover:text-mf-accent transition-colors" aria-label="WhatsApp">
            <MessageCircle size={20} />
          </a>
        </div>

        <div className="text-xs text-mf-white/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Mobarak Faisal. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

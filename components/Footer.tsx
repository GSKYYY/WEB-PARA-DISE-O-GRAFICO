import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2">Unlimited Creativity</h2>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Phone, Mail, Clock, ExternalLink, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct real mailto link to open user's email client
    const mailtoLink = `mailto:unlimitedcreativity.work@gmail.com?subject=${encodeURIComponent(subject || 'Consulta desde Web')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-brand-gray relative">
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-yellow font-display font-bold tracking-widest uppercase text-sm mb-2">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Empecemos a crear</h3>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Somos Unlimited Creativity, una agencia de diseño gráfico que ofrece servicios de calidad a precios accesibles. 👨‍💻
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfono</h4>
                  <a href="tel:+573238269040" className="text-gray-400 hover:text-brand-yellow transition-colors block">
                    +57 323 8269040
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a href="mailto:unlimitedcreativity.work@gmail.com" className="text-gray-400 hover:text-brand-yellow transition-colors block break-all">
                    unlimitedcreativity.work@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Web</h4>
                  <a href="https://unlimitedcreativity.art/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors block">
                    https://unlimitedcreativity.art/
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-white font-bold mb-1">Horario de Atención</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-400">
                    <span className="text-gray-300">Lunes - Viernes</span>
                    <span className="text-right">8:00 a. m. – 7:00 p. m.</span>
                    <span className="text-gray-300">Sábado</span>
                    <span className="text-right">9:00 a. m. – 6:00 p. m.</span>
                    <span className="text-gray-300">Domingo</span>
                    <span className="text-right text-red-400">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px]"></div>

            <h4 className="text-2xl font-bold text-white mb-6 relative z-10">Envíanos un mensaje</h4>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-yellow focus:outline-none focus:bg-white/10 transition-all w-full"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-yellow focus:outline-none focus:bg-white/10 transition-all w-full"
                />
              </div>
              <input 
                  type="text" 
                  placeholder="Asunto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-yellow focus:outline-none focus:bg-white/10 transition-all w-full"
                />
              <textarea 
                rows={4}
                placeholder="¿Cómo podemos ayudarte?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-yellow focus:outline-none focus:bg-white/10 transition-all w-full resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-brand-yellow text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                 Enviar al Correo <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
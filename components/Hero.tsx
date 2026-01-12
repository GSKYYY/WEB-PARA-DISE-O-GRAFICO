import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MousePointerClick } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow text-xs md:text-sm font-bold tracking-widest mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,0,0.1)]"
          >
            <Star className="w-4 h-4 fill-current animate-pulse" />
            AGENCIA CREATIVA DE ALTO IMPACTO
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-white mb-6">
            DISEÑO <br />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-brand-yellow/20 blur-xl filter"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow bg-300% animate-gradient">
                POTENTE
              </span>
            </span>
          </h1>
          
          <p className="font-sans text-xl text-gray-400 max-w-lg mb-8 leading-relaxed border-l-2 border-brand-yellow/50 pl-6">
            Transformamos ideas abstractas en marcas visualmente dominantes. 
            Especialistas en Branding, Web High-End y Estrategia Digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#ai-studio" className="group relative px-8 py-4 bg-brand-yellow text-black font-bold text-lg rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,0,0.3)] hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                <MousePointerClick className="w-5 h-5" /> Probar AI Studio
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-lg hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
              Ver Catálogo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block perspective-1000"
        >
          {/* Abstract graphic representation with float animation */}
          <motion.div 
             className="relative w-full aspect-square max-w-[550px] mx-auto animate-float"
          >
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full border border-white/10 border-dashed"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[40px] rounded-full border border-brand-yellow/20"
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[80%] h-[80%] rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(255,255,0,0.1)] relative overflow-hidden group border border-white/10 bg-brand-gray z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop" 
                    alt="Abstract 3D Shape" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-12 left-0 right-0 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-brand-yellow font-display font-bold text-3xl tracking-widest drop-shadow-md">FUTURE</p>
                     <p className="text-white font-sans text-xs tracking-[0.3em] opacity-70 uppercase mt-2">Design Agency</p>
                  </div>
               </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute top-10 right-0 w-20 h-20 bg-brand-yellow/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center animate-bounce duration-[3000ms]">
                <span className="text-2xl">⚡️</span>
             </div>
             <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-500/20 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center animate-bounce duration-[4000ms]">
                <span className="text-xl">🎨</span>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
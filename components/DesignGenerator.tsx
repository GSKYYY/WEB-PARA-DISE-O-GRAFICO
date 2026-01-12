import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Send, Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { generateDesignPrompt } from '../services/geminiService';

const DesignGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType) return;

    setLoading(true);
    setStatus('idle');

    try {
      // 1. Generate the perfect prompt using our AI service
      const optimizedPrompt = await generateDesignPrompt(businessName, businessType);
      
      // 2. Copy to clipboard
      await navigator.clipboard.writeText(optimizedPrompt);
      
      // 3. Show success state
      setStatus('success');
      
      // 4. Open Gemini in new tab
      setTimeout(() => {
          window.open('https://gemini.google.com/app', '_blank');
      }, 1500);

    } catch (err) {
      console.error("Error in workflow", err);
      // Fallback simple redirect if something fails
      window.open('https://gemini.google.com/app', '_blank');
    } finally {
      setLoading(false);
      // Reset form after delay
      setTimeout(() => {
          setStatus('idle');
          setBusinessName('');
          setBusinessType('');
      }, 5000);
    }
  };

  return (
    <section id="ai-studio" className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-yellow/5 via-brand-yellow/0 to-transparent pointer-events-none" />
        <div className="absolute -left-20 top-20 w-64 h-64 bg-purple-900/10 rounded-full blur-[80px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md"
            >
                <Sparkles className="w-3 h-3 text-brand-yellow" /> Powered by Gemini AI
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Generador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">Conceptos Visuales</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Describe tu negocio y nuestra IA creará el <strong>prompt perfecto</strong>, lo copiará a tu portapapeles y te llevará a Gemini para generar la imagen al instante.
            </p>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-1 md:p-2 backdrop-blur-xl shadow-2xl relative"
        >
             {/* Glowing border effect */}
             <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-yellow/30 to-purple-600/30 rounded-2xl opacity-50 blur-sm -z-10"></div>

            <div className="bg-brand-dark/80 rounded-xl p-6 md:p-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold ml-1">Nombre Comercial</label>
                            <input
                                type="text"
                                placeholder="Ej. CyberCafe"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 focus:outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold ml-1">Giro de Negocio</label>
                            <input
                                type="text"
                                placeholder="Ej. Cafetería Futurista"
                                value={businessType}
                                onChange={(e) => setBusinessType(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 focus:outline-none transition-all"
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading || !businessName || !businessType}
                        className={`
                            relative w-full font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all overflow-hidden
                            ${status === 'success' ? 'bg-green-500 text-white' : 'bg-brand-yellow text-black hover:bg-yellow-300 hover:scale-[1.01]'}
                        `}
                    >
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 className="animate-spin w-5 h-5" />
                                    <span>Optimizando Prompt...</span>
                                </motion.div>
                            ) : status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle className="w-6 h-6" />
                                    <span>¡Copiado! Redirigiendo a Gemini...</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    <span>Generar Diseño & Abrir Gemini</span>
                                    <ExternalLink className="w-4 h-4 opacity-50 ml-1" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                    
                    <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-2">
                        <Copy className="w-3 h-3" /> El prompt se copiará automáticamente para que solo tengas que pegarlo.
                    </p>
                </form>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignGenerator;
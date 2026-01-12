import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Palette, Megaphone, BookOpen, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Web High-End",
    description: "Sitios web inmersivos, rápidos y optimizados para conversión. No simples plantillas, experiencias digitales."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding Radical",
    description: "Identidad visual que rompe moldes. Logos, paletas y sistemas visuales que gritan tu esencia."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Growth Marketing",
    description: "Estrategias de ads y contenido que no solo traen likes, sino ventas reales y comunidad."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Editorial Digital",
    description: "Diseño para revistas, reportes y presentaciones que tus clientes querrán leer dos veces."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "UI/UX Mobile",
    description: "Interfaces de aplicaciones diseñadas para dedos humanos y cerebros exigentes."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Ilustración Custom",
    description: "Arte único para tu marca. Desde iconos vectoriales hasta composiciones artísticas complejas."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-gray relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-yellow font-display font-bold tracking-widest uppercase text-sm mb-4">Qué Hacemos</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Soluciones visuales para marcas que quieren <span className="text-gray-500 line-through decoration-brand-yellow">competir</span> <span className="text-brand-yellow">dominar</span>.
          </h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 bg-brand-dark/50 border border-white/5 hover:border-brand-yellow/50 rounded-2xl transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/5 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-brand-yellow mb-8 group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-brand-yellow transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed font-sans text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
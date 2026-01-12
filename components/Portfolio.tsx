import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    category: 'Branding', 
    title: 'Mañeco Barber Shop', 
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    category: 'Logo', 
    title: 'Minimalist Medical', 
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    category: 'Branding', 
    title: 'Kpuli Exports Packaging', 
    image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    category: 'Web', 
    title: 'Tech Start Dashboard', 
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    category: 'Marketing', 
    title: 'Burger King Campaign', 
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    category: 'Web', 
    title: 'Fashion Week Portal', 
    image: 'https://images.unsplash.com/photo-1509631179647-b849389266ff?q=80&w=800&auto=format&fit=crop' 
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Branding', 'Web', 'Logo', 'Marketing'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-yellow font-display font-bold tracking-widest uppercase text-sm mb-2">Nuestro Trabajo</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Portafolio Reciente</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-brand-yellow text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square group overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider mb-1">{project.category}</span>
                  <h4 className="text-white text-2xl font-display font-bold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
            <a href="https://unlimitedcreativity.art/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white border-b border-brand-yellow pb-1 hover:text-brand-yellow transition-colors">
                Ver todo en nuestra web principal
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
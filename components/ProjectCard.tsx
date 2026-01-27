
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div 
      ref={containerRef}
      className="group relative w-full mb-32 md:mb-64 last:mb-0 flex flex-col md:flex-row gap-12 items-center"
    >
      <div className={`w-full md:w-3/5 overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-100 dark:bg-slate-900 relative ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
        <motion.img 
          src={project.image} 
          alt={project.title}
          style={{ y, scale }}
          className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-navy-950/40 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-2/5"
      >
        <span className="text-zinc-500 dark:text-secondary font-mono text-sm mb-4 block uppercase tracking-widest">0{project.id} — {project.year}</span>
        <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-tight text-black dark:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 dark:text-secondary text-lg mb-8 leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="px-4 py-1.5 border border-black/10 dark:border-white/5 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-secondary">
            {project.category}
          </span>
          <motion.a 
            href="#"
            whileHover={{ x: 10 }}
            className="text-black dark:text-accent font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/link transition-colors"
          >
            Details <span className="text-xl">→</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

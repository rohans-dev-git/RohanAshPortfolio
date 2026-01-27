
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-32 bg-white dark:bg-navy-950 text-black dark:text-primary transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-zinc-400 dark:text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Have a project in mind?</span>
          <h2 className="text-5xl md:text-[8rem] lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-12">
            Let's create <br /> <span className="text-zinc-100 dark:text-slate-800 transition-colors">something</span> <br /> iconic.
          </h2>
          <motion.a
            href="mailto:"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-2xl md:text-5xl font-black border-b-4 border-black dark:border-accent pb-2 hover:text-zinc-400 dark:hover:text-white transition-colors"
          >
            rohan.engineer@outlook.com
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-zinc-100 dark:border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-secondary gap-8">
          <div className="flex gap-12">
            <a href="#" className="hover:text-black dark:hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black dark:hover:text-accent transition-colors">Dribbble</a>
            <a href="#" className="hover:text-black dark:hover:text-accent transition-colors">Github</a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Rohan. Crafted with react and vite.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

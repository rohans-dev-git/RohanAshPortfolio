
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-32 bg-zinc-50 dark:bg-navy-950 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-black dark:text-primary">
              Work <br /> History
            </h2>
            <p className="text-zinc-500 dark:text-secondary max-w-sm leading-relaxed text-sm uppercase tracking-widest">
              A timeline of engineering excellence and product leadership at industry-leading companies.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {EXPERIENCES.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-zinc-200 dark:border-white/5 pb-12 hover:border-black dark:hover:border-accent transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-2xl font-bold uppercase text-black dark:text-primary group-hover:text-green-600 dark:group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-500 dark:text-secondary font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <div className="text-lg text-zinc-700 dark:text-slate-300 font-bold mb-4">{exp.company}</div>
                <p className="text-zinc-500 dark:text-secondary leading-relaxed max-w-2xl text-base">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-32 bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black dark:text-white transition-colors duration-500">
            Latest <br /> <span className="text-zinc-200 dark:text-zinc-800 transition-colors duration-500">Portfolio</span>
          </h2>
          <p className="max-w-xs text-zinc-400 dark:text-zinc-500 text-sm uppercase tracking-widest leading-loose">
            A meticulous selection of software engineering projects focused on usability and innovation.
          </p>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

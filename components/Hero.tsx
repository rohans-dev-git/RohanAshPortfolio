import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { CLIENTS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';
import ProjectForm from './ProjectForm';
import heroImg from './assets/hero-img.png';


const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const characters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay }
    }
  };
  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } }
  };

  return (
    <motion.span variants={container} initial="hidden" animate="visible" className="inline-block">
      {characters.map((char, index) => (
        <motion.span variants={child} key={index}>{char}</motion.span>
      ))}
    </motion.span>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Parallax transformations
  const imageY = useTransform(scrollY, [0, 500], [0, -60]);
  const textY = useTransform(scrollY, [0, 500], [0, 40]);
  const archScale = useTransform(scrollY, [0, 500], [1, 1.08]);
  const blobOpacity = useTransform(scrollY, [0, 300], [0.4, 0.1]);

  return (
    <section className="relative min-h-[100vh] lg:min-h-screen w-full flex flex-col justify-center pt-16 md:pt-20 pb-4 overflow-hidden transition-colors duration-500">
      <ProjectForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] dark:opacity-[0.1] grayscale contrast-125 transition-opacity duration-1000"
        style={{
          //backgroundImage: 'url(https://www.ander.group/hs-fs/hubfs/GettyImages-1387900612.jpg?width=795&height=566&name=GettyImages-1387900612.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right bottom',
          WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 20%, transparent 80%)',
          maskImage: 'radial-gradient(circle at 100% 100%, black 20%, transparent 80%)'
        }}
      />

      {/* Background Decorative Blobs */}
      <motion.div style={{ opacity: blobOpacity }} className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-pink-200/30 dark:bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
      <motion.div style={{ opacity: blobOpacity }} className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-purple-200/30 dark:bg-navy-900/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Shapes */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-5" viewBox="0 0 1000 1000">
        <circle cx="100" cy="700" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="950" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M-50,600 Q150,550 200,800" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Social Sidebar */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center z-40">
        <motion.a
          href="https://www.linkedin.com/in/rohan-ashish/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer text-zinc-400 dark:text-secondary hover:text-black dark:hover:text-accent transition-colors"
        >
          <Linkedin size={16} />
        </motion.a>
        <motion.a
          href="https://dev.to/rohan_ashish_cc288fe22d55"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer text-zinc-400 dark:text-secondary hover:text-black dark:hover:text-accent transition-colors font-bold text-[10px]"
        >
          dev.to
        </motion.a>
        <motion.a
          href="mailto:rohan.engineer@outlook.com"
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer text-zinc-400 dark:text-secondary hover:text-black dark:hover:text-accent transition-colors"
        >
          <Mail size={16} />
        </motion.a>
      </div>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative z-10 mb-8 md:mb-12">

        {/* Left Side: Image Container */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="relative">
            {/* Background Arch */}
            <motion.div
              style={{ scale: archScale }}
              className="w-[80px] h-[100px] md:w-[180px] md:h-[220px] bg-[#e1e5e9] dark:bg-slate-800/50 rounded-t-full absolute bottom-8 left-[15%] -translate-x-1/2 -z-20"
            />

            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="Rohan Ashish"
                className="w-[180px] md:w-[320px] object-cover grayscale brightness-110 contrast-105 drop-shadow-2xl dark:brightness-90 dark:contrast-110"
              />
            </motion.div>

            {/* Badge */}
            <motion.div className="absolute -top-6 right-[2%] md:-top-16 md:right-[12%] z-30">
              <div className="relative w-10 h-10 md:w-24 md:h-24">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[7px] md:text-[9px] uppercase font-bold tracking-[0.2em] fill-zinc-500 dark:fill-secondary">
                      <textPath href="#circlePath">
                        •OPEN TO NEW PROJECTS•
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-5 h-5 md:w-12 md:h-12 bg-white dark:bg-navy-950 rounded-full border border-zinc-200 dark:border-slate-700 shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-zinc-300 dark:bg-accent rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div
          style={{ y: textY }}
          className="w-full lg:w-1/2 flex flex-col items-center text-center z-30"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[2rem] md:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-black dark:text-primary mb-3 transition-colors whitespace-nowrap">
              Rohan Ashish
            </h1>
            <div className="flex flex-col items-center gap-1 mb-24 md:mb-32 min-h-[40px]">
              <p className="text-[0.55rem] md:text-[0.8rem] lg:text-[0.9rem] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-zinc-400 dark:text-secondary hover:text-black dark:hover:text-accent hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all cursor-default whitespace-nowrap">
                <TypewriterText text="AI Software Engineer | Fullstack Developer" delay={1.2} />
              </p>
              <p className="text-[0.55rem] md:text-[0.8rem] lg:text-[0.9rem] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-zinc-400 dark:text-secondary hover:text-black dark:hover:text-accent hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all cursor-default whitespace-nowrap">
                <TypewriterText text="Cloud Ready SaaS Applications" delay={2.2} />
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Ribbon - Positioned at the content baseline, shifted to clear the image */}
        <div className="absolute bottom-[-10%] md:bottom-[-2%] lg:bottom-10 left-0 lg:left-1/3 w-full lg:w-2/3 z-10 mt-20 lg:mt-32">
          <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2">
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-zinc-500 dark:text-zinc-500 uppercase">
              I have worked at
            </p>
            <div className="flex justify-between items-center w-full max-w-[400px] md:max-w-none md:gap-16 lg:gap-24 px-4 lg:px-0">
              {CLIENTS.map((client) => (
                <div key={client.name} className="flex items-center justify-center h-12 md:h-16 w-32 md:w-48 group/logo">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full object-contain filter-none opacity-100 transition-all duration-300 group-hover/logo:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

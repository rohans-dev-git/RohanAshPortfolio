
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
];

const About: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % IMAGES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-20 md:py-40 bg-white dark:bg-navy-950 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                    <div className="w-full lg:w-1/2 relative aspect-square md:aspect-video lg:aspect-square group">
                        <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-6 scale-95 transition-transform group-hover:rotate-0 group-hover:scale-100" />
                        <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={IMAGES[index]}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-6 flex gap-2">
                            {IMAGES.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-accent' : 'w-2 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black dark:text-white leading-[0.85]">
                            Architecting <br />
                            <span className="text-zinc-200 dark:text-zinc-800">The Future.</span>
                        </h2>
                        <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
                            <p className="text-lg md:text-xl font-medium leading-relaxed">
                                I am a dedicated AI Software Engineer focused on bridging the gap between innovative artificial intelligence and scalable software solutions.
                            </p>
                            <p className="text-base leading-loose uppercase tracking-[0.1em] text-sm font-bold">
                                With a deep background in the MERN stack and Cloud orchestration, I build applications that are not just "smart" but robust, cloud-ready, and user-centric. My mission is to simplify the complex through elegant code and intuitive design.
                            </p>
                        </div>

                        <div className="pt-8 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-accent font-black text-4xl mb-1 tracking-tighter">50+</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-black text-4xl mb-1 tracking-tighter">AI Focus</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Core Expertise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

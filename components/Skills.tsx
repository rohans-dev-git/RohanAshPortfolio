
import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
    {
        category: "Programming Languages",
        items: "JavaScript (ES6+), TypeScript, Java(SpringBoot), C, Python (pandas, sci-kitLearn, FastAPI, TensorFlow)"
    },
    {
        category: "Web development (MERN)",
        items: "ReactJs, NodeJS, NextJs, NestJs, Tailwind CSS, ShadCDN, Framer Motion"
    },
    {
        category: "Cloud",
        items: "AWS (EC2, S3, CloudFront, CDN, HLS, SageMaker, Lambda), Supabase"
    },
    {
        category: "Automation & Tools",
        items: "n8n Workflow, Power Automate, 11Labs, Vapi API"
    },
    {
        category: "Database & Tools",
        items: "SQL(Postgres, MS SQL), NoSQL(MongoDB), Vector Database (PineCone, FAISS)"
    },
    {
        category: "CI-CD & Version Control",
        items: "Git, Docker, Azure DevOps, pm2"
    },
    {
        category: "AI-ML & Tools",
        items: "LangChain, LLM’s, Hugging Face Transformers, NLP, OLamma, Gemini, OpenAI, RAG, CNN, GAN, Generative AI, LangGraph, LlamaIndex, CrewAI"
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-zinc-50 dark:bg-navy-950 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-black dark:text-primary">
                            Core <br /> Skills
                        </h2>
                        <p className="text-zinc-500 dark:text-secondary max-w-sm leading-relaxed text-sm uppercase tracking-widest">
                            A comprehensive stack of modern technologies powering high-performance AI and Web applications.
                        </p>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {SKILLS_DATA.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-4 group-hover:text-accent transition-colors">
                                    {skill.category}
                                </h3>
                                <p className="text-[13px] md:text-[15px] font-medium leading-relaxed text-zinc-700 dark:text-slate-300">
                                    {skill.items}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

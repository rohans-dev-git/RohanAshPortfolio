
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ProjectForm: React.FC<Props> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        budget: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 45, translateZ: -100 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, translateZ: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: -45, translateZ: -100 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        style={{ perspective: 1000 }}
                        className="relative w-full max-w-lg bg-zinc-50 dark:bg-navy-900 rounded-3xl p-8 shadow-2xl border border-zinc-200 dark:border-slate-800"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-black mb-6 tracking-tighter dark:text-primary">Start a Project</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-zinc-100 dark:bg-slate-800 rounded-xl outline-none focus:ring-2 ring-accent/50 transition-all dark:text-white"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-zinc-100 dark:bg-slate-800 rounded-xl outline-none focus:ring-2 ring-accent/50 transition-all dark:text-white"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Project Detail</label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-zinc-100 dark:bg-slate-800 rounded-xl outline-none focus:ring-2 ring-accent/50 transition-all dark:text-white resize-none"
                                    placeholder="Tell me about your project..."
                                    value={formData.project}
                                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Expected Budget</label>
                                <select
                                    className="w-full px-4 py-3 bg-zinc-100 dark:bg-slate-800 rounded-xl outline-none focus:ring-2 ring-accent/50 transition-all dark:text-white appearance-none cursor-pointer"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="">Select Range</option>
                                    <option value="< $1k">&lt; $1k</option>
                                    <option value="$1k - $5k">$1k - $5k</option>
                                    <option value="$5k - $10k">$5k - $10k</option>
                                    <option value="$10k+">$10k+</option>
                                </select>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-black dark:bg-accent text-white dark:text-navy-950 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl"
                            >
                                Send Message <Send size={14} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectForm;

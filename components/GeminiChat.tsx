
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Message } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Rohan's AI assistant. 👋" },
    { role: 'assistant', content: "I can help you explore his work or even help you start a new project together." },
    { role: 'assistant', content: "Would you like to share your project idea or your contact details so Rohan can reach out?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Dummy conversation logic for lead generation
    setTimeout(() => {
      let response = "";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('project') || lowerInput.includes('start')) {
        response = "That sounds like a great plan! Could you please provide your email and a bit more detail about what you have in mind?";
      } else if (lowerInput.includes('@')) {
        response = "Perfect! I've noted your email. Rohan will get in touch soon. Is there anything else you'd like to mention before we finish?";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "Hello! Ready to build something amazing? Just let me know what's on your mind.";
      } else {
        response = "I've passed that along to Rohan! He'll review it and get back to you shortly. Can I help with anything else?";
      }

      const aiMsg: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* Unified Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-8 z-[70] flex flex-col items-end px-4 md:px-0">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
          initial={false}
          animate={{
            width: isHovered ? "280px" : "64px",
            height: "64px",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="bg-black/80 dark:bg-accent/80 backdrop-blur-xl text-white dark:text-navy-950 flex items-center shadow-2xl overflow-hidden rounded-full group cursor-pointer border border-white/10 dark:border-black/5"
        >
          <div className="flex items-center w-full h-full">
            {/* Icon Part */}
            <div className="min-w-[64px] h-[64px] flex items-center justify-center">
              {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </div>

            {/* Text Part */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="flex-1 h-full flex items-center gap-3 pr-8"
            >
              <span className="text-[11px] font-black uppercase tracking-widest pl-2">Start a Project with me</span>
              <div className="w-2 h-2 bg-green-400 dark:bg-navy-950 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glass Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed bottom-28 right-8 z-[70] w-[320px] max-w-[85vw] h-[480px] bg-white/70 dark:bg-navy-950/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2rem] flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex items-center justify-between bg-white/30 dark:bg-white/5">
              <div>
                <h4 className="font-black text-black dark:text-primary uppercase text-[11px] tracking-[0.2em] leading-none">Rohan's Agent</h4>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] text-zinc-500 dark:text-secondary uppercase font-black tracking-widest">Active Now</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 pt-4 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-5 py-4 rounded-[2rem] text-[13px] font-semibold leading-relaxed shadow-sm ${msg.role === 'user'
                      ? 'bg-black dark:bg-accent text-white dark:text-navy-950 rounded-tr-none'
                      : 'bg-white/90 dark:bg-slate-800/80 text-zinc-800 dark:text-primary rounded-tl-none border border-white/50 dark:border-white/5'
                      }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/40 dark:bg-slate-800/40 px-5 py-3 rounded-2xl flex items-center gap-2 border border-white/20">
                    <Loader2 size={12} className="animate-spin text-accent" />
                    <span className="text-[9px] uppercase font-black tracking-[0.2em] text-zinc-400">Processing</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anyting..."
                  className="w-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-[1.5rem] py-4 px-6 pr-14 text-sm text-black dark:text-primary placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all shadow-inner"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black dark:bg-accent text-white dark:text-navy-950 rounded-full transition-all disabled:opacity-30 shadow-xl"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-center text-[8px] uppercase font-bold tracking-[0.3em] text-zinc-400 mt-4 opacity-50">
                Secured AI Response Engine
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiChat;

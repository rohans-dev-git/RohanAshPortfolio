
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Corporate', href: '#experience' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-3 md:py-10 px-6 md:px-20 flex items-center justify-between pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 group cursor-pointer pointer-events-auto"
        >
          <span className="text-2xl md:text-4xl tracking-tight dark:text-accent text-black transition-colors" style={{ fontFamily: '"Caveat", cursive', fontWeight: 700 }}>RA</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-widest dark:text-secondary text-zinc-400 hover:text-black dark:hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6 pointer-events-auto">
          <motion.a
            href="https://1drv.ms/b/c/1b3da142f633e62e/IQBrEiWpPVaJSaT1x6HisLQ4Aa6EK4hixrJN48O5Y8uZlwU?e=8NTxXh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 md:px-7 md:py-3 bg-black dark:bg-primary text-white dark:text-navy-950 rounded-full text-[9px] md:text-[11px] font-bold uppercase tracking-widest shadow-xl transition-all"
          >
            <span className="hidden xs:inline">Download</span> CV <Download size={12} strokeWidth={3} />
          </motion.a>

          <div className="flex flex-col items-center gap-2 md:block">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-black dark:text-white"
            >
              <Menu size={24} />
            </button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              className="p-2 md:p-3 rounded-full bg-zinc-200 dark:bg-slate-800 hover:bg-zinc-300 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              {isDark ? (
                <Sun size={16} className="text-accent" />
              ) : (
                <Moon size={16} className="text-black" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-zinc-50 dark:bg-navy-950 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-black dark:text-zinc-200 dark:hover:text-white"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-widest dark:text-white text-zinc-900 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="https://1drv.ms/b/c/1b3da142f633e62e/IQAHJXHe-_etSqNFLn6DTjKBAdG7YMDIXmZuQjF6z42h9TA?e=wi31Y5"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 mt-4 bg-black dark:bg-primary text-white dark:text-navy-950 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
              >
                Download CV <Download size={14} strokeWidth={3} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

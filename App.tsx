
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="relative min-h-screen bg-[#f8f9fa] dark:bg-navy-950 transition-colors duration-500 text-black dark:text-primary">
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <GeminiChat />
    </main>
  );
};

export default App;

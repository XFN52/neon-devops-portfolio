import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Stack from './components/Stack';
import TerminalContact from './components/TerminalContact';
import RevealOnScroll from './components/RevealOnScroll';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Force scroll to top on load and disable browser scroll restoration
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen text-white relative selection:bg-neon-cyan selection:text-black">
      <Background />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-4 py-4 md:p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-[2px]">
        <span className="font-display font-bold text-xl md:text-2xl tracking-widest text-white z-50 select-none drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
          STUDENT.<span className="text-neon-cyan">DEV</span>
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
            <button onClick={() => handleNavClick('services')} className="group relative font-mono text-sm tracking-wider py-1">
                <span className="text-slate-300 group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_5px_rgba(0,243,255,0.5)] transition-all duration-300">SERVICES</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00f3ff] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavClick('stack')} className="group relative font-mono text-sm tracking-wider py-1">
                <span className="text-slate-300 group-hover:text-neon-purple group-hover:drop-shadow-[0_0_5px_rgba(188,19,254,0.5)] transition-all duration-300">SYSTEM</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple shadow-[0_0_8px_#bc13fe] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavClick('contact')} className="group relative font-mono text-sm tracking-wider py-1">
                <span className="text-slate-300 group-hover:text-neon-green group-hover:drop-shadow-[0_0_5px_rgba(10,255,0,0.5)] transition-all duration-300">CONTACT</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green shadow-[0_0_8px_#0aff00] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-cyan transition-colors z-50 p-2 focus:outline-none active:scale-95"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 h-screen w-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-12 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green animate-[shimmer_2s_infinite]"></div>
            
            <button 
              onClick={() => handleNavClick('services')}
              className="group relative text-3xl md:text-5xl font-display font-bold text-white hover:text-neon-cyan transition-colors tracking-widest"
            >
              <span className="absolute -left-8 opacity-0 group-hover:opacity-100 transition-opacity text-neon-cyan">&gt;</span>
              <span className="group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all">SERVICES</span>
              <span className="block h-1 bg-neon-cyan shadow-[0_0_15px_#00f3ff] w-0 group-hover:w-full transition-all duration-300 mt-2"></span>
            </button>
            
            <button 
              onClick={() => handleNavClick('stack')}
              className="group relative text-3xl md:text-5xl font-display font-bold text-white hover:text-neon-purple transition-colors tracking-widest"
            >
              <span className="absolute -left-8 opacity-0 group-hover:opacity-100 transition-opacity text-neon-purple">&gt;</span>
              <span className="group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] transition-all">SYSTEM</span>
              <span className="block h-1 bg-neon-purple shadow-[0_0_15px_#bc13fe] w-0 group-hover:w-full transition-all duration-300 mt-2"></span>
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')}
              className="group relative text-3xl md:text-5xl font-display font-bold text-white hover:text-neon-green transition-colors tracking-widest"
            >
              <span className="absolute -left-8 opacity-0 group-hover:opacity-100 transition-opacity text-neon-green">&gt;</span>
              <span className="group-hover:drop-shadow-[0_0_10px_rgba(10,255,0,0.8)] transition-all">CONTACT</span>
              <span className="block h-1 bg-neon-green shadow-[0_0_15px_#0aff00] w-0 group-hover:w-full transition-all duration-300 mt-2"></span>
            </button>

             <div className="absolute bottom-10 text-slate-500 font-mono text-xs">
                // SYSTEM NAVIGATION_MODULE V.1.0
             </div>
        </div>
      </nav>

      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>
      
      <RevealOnScroll delay={200}>
        <Stats />
      </RevealOnScroll>
      
      <RevealOnScroll delay={300}>
        <Services />
      </RevealOnScroll>
      
      <RevealOnScroll delay={300}>
        <Stack />
      </RevealOnScroll>
      
      <RevealOnScroll delay={300}>
        <TerminalContact />
      </RevealOnScroll>

      <footer className="py-8 border-t border-slate-800 text-center">
        <p className="font-mono text-xs text-slate-600">
            © 2024 STUDENT.DEV // ALL SYSTEMS NOMINAL
        </p>
      </footer>
    </main>
  );
};

export default App;
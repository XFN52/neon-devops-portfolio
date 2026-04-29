import React, { useEffect, useState } from 'react';
import { Terminal, ChevronRight, Cpu } from 'lucide-react';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing Student Profile... > Loading Skills... > Ready for Freelance Tasks.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Decorative circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-neon-cyan/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-neon-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

      <div className="z-10 max-w-5xl w-full space-y-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-black/50 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase">MechMat Student // Freelance Developer</span>
        </div>

        <div className="space-y-4">
          <GlitchText 
            as="h1" 
            text="SYSTEM" 
            className="block text-5xl md:text-7xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter"
            color="cyan"
          />
           <GlitchText 
            as="h1" 
            text="BUILDER" 
            className="block text-5xl md:text-7xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-neon-cyan to-blue-900 tracking-tighter"
            color="cyan"
          />
        </div>

        <div className="h-16 flex items-center justify-center">
            <p className="font-mono text-neon-purple text-sm md:text-lg">
              <span className="mr-2 text-neon-green">$</span>
              {text}
              <span className="animate-pulse inline-block w-2 h-4 bg-neon-green ml-1 align-middle"></span>
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="group relative px-8 py-4 bg-neon-cyan/10 overflow-hidden rounded-none border border-neon-cyan/50 hover:border-neon-cyan transition-all duration-300">
                <div className="absolute inset-0 w-3 bg-neon-cyan/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-neon-cyan font-display font-bold tracking-widest flex items-center gap-2">
                    <Terminal size={18} />
                    CONTACT_ME
                </span>
            </button>
            
            <button onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth'})} className="group px-8 py-4 bg-transparent rounded-none border border-slate-700 hover:border-neon-purple transition-all duration-300">
                <span className="text-slate-300 group-hover:text-neon-purple font-display font-bold tracking-widest flex items-center gap-2">
                    <Cpu size={18} />
                    VIEW_STACK
                </span>
            </button>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020204] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
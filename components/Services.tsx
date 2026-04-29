import React from 'react';
import { Network, Bot, Globe, Code, Shield, Cpu } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: 1, title: "Secure Tunneling", description: "VPN setup using Xray, VLESS, Reality, and Mihomo. Configuring personal secure servers.", icon: Network, color: 'cyan' },
  { id: 2, title: "AI & Bots", description: "Developing automated sales bots and API integrations with Python and Neural Networks.", icon: Bot, color: 'purple' },
  { id: 3, title: "Web Development", description: "Creating fast and secure websites on WordPress & PHP. Custom themes and plugins.", icon: Globe, color: 'green' },
  { id: 4, title: "Algorithmic Code", description: "Solving logic problems and backend tasks using C++ and Python. Math-driven optimization.", icon: Code, color: 'cyan' },
  { id: 5, title: "System Setup", description: "Linux server configuration, 3x-ui panel management, and traffic routing optimization.", icon: Shield, color: 'purple' },
  { id: 6, title: "Smart Tools", description: "Integrating AI models to speed up workflows and automate routine tasks.", icon: Cpu, color: 'green' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
          <span className="text-neon-purple">TECHNICAL</span> SKILLS
        </h2>
        <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full box-shadow-neon-purple" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="relative group h-full">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${s.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
            
            <div className="relative h-full bg-slate-950 border border-slate-800 p-8 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:border-slate-600">
                {/* Top line scan animation */}
                <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-${s.color === 'cyan' ? 'neon-cyan' : s.color === 'purple' ? 'neon-purple' : 'neon-green'} to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]`} />

                <div className={`w-12 h-12 rounded bg-slate-900 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-${s.color === 'cyan' ? 'neon-cyan' : s.color === 'purple' ? 'neon-purple' : 'neon-green'} transition-colors`}>
                    <s.icon className={`text-${s.color === 'cyan' ? 'neon-cyan' : s.color === 'purple' ? 'neon-purple' : 'neon-green'}`} />
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400">
                    {s.title}
                </h3>
                
                <p className="text-slate-400 font-mono text-sm leading-relaxed">
                    {s.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className={`text-xs font-mono text-${s.color === 'cyan' ? 'neon-cyan' : s.color === 'purple' ? 'neon-purple' : 'neon-green'}`}>[ EXECUTE ]</span>
                </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Services;
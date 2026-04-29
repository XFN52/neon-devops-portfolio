import React from 'react';
import { Stat } from '../types';
import { GraduationCap, ShieldCheck, Bot, Timer } from 'lucide-react';

const stats: (Stat & { icon: any })[] = [
  { label: "Foundation", value: "MECHMAT", sub: "Applied Mathematics", icon: GraduationCap },
  { label: "Privacy Protocols", value: "XRAY/VLESS", sub: "Secure Tunneling", icon: ShieldCheck },
  { label: "Neural Core", value: "AI-NATIVE", sub: "System Integration", icon: Bot },
  { label: "Experience", value: "1 YEAR", sub: "Commercial Practice", icon: Timer },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-4 relative border-y border-slate-800/50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="group relative p-6 border border-slate-800 hover:border-neon-cyan/50 bg-slate-950/50 transition-all duration-500 hover:bg-slate-900/80 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-slate-600 group-hover:text-neon-cyan transition-colors" size={32} />
                <span className="font-mono text-xs text-slate-500">SYS_VAL_0{idx + 1}</span>
            </div>
            <h3 className="text-2xl xl:text-3xl font-display font-bold text-white group-hover:neon-text-cyan transition-all duration-300 break-words">
              {stat.value}
            </h3>
            <p className="text-neon-cyan font-mono text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-1 font-mono">&gt;&gt; {stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
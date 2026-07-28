import React from 'react';

const stack = [
  "C++", "Python", "PHP", "JavaScript", "WordPress", "Docker", "CI/CD", 
  "Nginx", "PostgreSQL", "REST API", "Telegram API", "AI Integration", "Linux", 
  "CSS3", "HTML5", "SQL", "Git", "Bash", "Networking", "Payment APIs"
];

const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-20 border-y border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                    SYSTEM <span className="text-neon-cyan">MODULES</span>
                </h2>
                <p className="text-slate-500 font-mono mt-2">Loaded Skills & Frameworks</p>
            </div>
            <div className="font-mono text-neon-green text-xs mt-4 md:mt-0 animate-pulse">
                STATUS: OPTIMIZED
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stack.map((item, index) => (
                <div key={index} className="group relative p-4 border border-slate-800 bg-black/40 hover:bg-slate-900 transition-all duration-300 hover:scale-105 cursor-default">
                    <div className="absolute inset-0 border border-transparent group-hover:border-neon-cyan/30 transition-colors pointer-events-none"></div>
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-slate-300 group-hover:text-neon-cyan transition-colors">{item}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-neon-green transition-colors"></div>
                    </div>
                    <div className="w-full h-1 bg-slate-800 mt-3 overflow-hidden">
                        <div className="h-full bg-neon-cyan/50 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Stack;
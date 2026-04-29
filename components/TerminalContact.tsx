import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const TerminalContact: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Initializing communication link...",
    "Encryption key verified.",
    "Please enter message parameters below."
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of terminal only (internal div), not the window
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory(prev => [...prev, `> User: ${input}`, "Processing...", "Message encrypted and transmitted to Host."]);
    setInput('');
    // In a real app, this would trigger an API call
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
       <h2 className="text-center text-3xl md:text-5xl font-display font-bold mb-12 text-white">
          ESTABLISH <span className="text-neon-green">UPLINK</span>
       </h2>

       <div className="w-full bg-black border border-slate-700 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] overflow-hidden flex flex-col h-[500px]">
          {/* Terminal Header */}
          <div className="bg-slate-900 p-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs font-mono text-slate-400">root@devops-host:~/communications</span>
          </div>

          {/* Terminal Body */}
          <div 
            ref={containerRef}
            className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto space-y-2 scrollbar-hide"
          >
            {history.map((line, i) => (
                <div key={i} className={`${line.startsWith("> User") ? "text-neon-cyan" : "text-neon-green"}`}>
                    {line}
                </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <form onSubmit={handleSubmit} className="flex gap-4">
                <span className="text-neon-green font-mono py-2">{'>'}</span>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your transmission here..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-slate-600"
                />
                <button type="submit" className="text-slate-400 hover:text-neon-green transition-colors">
                    <Send size={20} />
                </button>
            </form>
          </div>
       </div>
    </section>
  );
};

export default TerminalContact;

import React from 'react';
import { SKILLS } from '../constants';
import { Terminal, Code, Database, Brain, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Languages': return <Terminal size={18} />;
      case 'Tools & IDEs': return <Database size={18} />;
      case 'AI/ML Libraries': return <Brain size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  const getAccent = (category: string) => {
    switch(category) {
      case 'Languages': return 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5';
      case 'AI/ML Libraries': return 'border-purple-500/20 text-purple-400 bg-purple-500/5';
      case 'Tools & IDEs': return 'border-blue-500/20 text-blue-400 bg-blue-500/5';
      default: return 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5';
    }
  };

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24 bg-[#020617]/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-orbitron text-3xl md:text-5xl font-black mb-4 tracking-tighter">TECHNICAL <span className="text-slate-600 italic">STACK</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((group) => (
            <div 
              key={group.category}
              className="glass-card p-10 rounded-[2rem] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                {getIcon(group.category)}
              </div>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 ${getAccent(group.category)} font-bold text-[10px] uppercase tracking-widest`}>
                {getIcon(group.category)}
                {group.category}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-5 py-2.5 rounded-full bg-slate-950/50 border border-white/5 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

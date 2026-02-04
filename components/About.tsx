
import React from 'react';
import { User, Target, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vision */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap size={12} /> THE VISION
              </div>
              <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Crafting Digital <br />
                <span className="text-slate-500">Intelligence.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Motivated and detail-oriented Computer Science student specializing in Artificial Intelligence, Machine Learning, and web development. 
                <span className="text-white font-medium"> I don't just write code; I architect ecosystems</span> that bridge the gap between human intuition and machine efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Core Mission</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focusing on optimizing operations through intelligent, scalable application architecture and AI-driven insights.
                </p>
              </div>
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Technical Depth</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep specialization in Python, DSA, and modern React frameworks, committed to building the next generation of AI systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Abstract" 
                className="w-full aspect-[4/5] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
              
              {/* Floating Info */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50">
                    <img src="https://picsum.photos/seed/hari/100/100" alt="Hari" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Hari Vamshi M.</h4>
                    <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">AI & ML Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

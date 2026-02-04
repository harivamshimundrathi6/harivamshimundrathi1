
import React from 'react';
import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const WHATSAPP_NUMBER = "919347216338";
  const WHATSAPP_MESSAGE = "Hello Hari! I saw your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-orbitron font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none tracking-tighter">
        INTELLIGENCE • INNOVATION
      </div>

      <div className="max-w-6xl text-center z-10 reveal-animation">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-10 mx-auto">
          <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
          Computer Science & Artificial Intelligence
        </div>
        
        <h1 className="font-orbitron text-6xl md:text-8xl lg:text-[9rem] font-black mb-6 tracking-tighter leading-[0.85] text-white">
          HARI VAMSHI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 neon-text-glow">
            MUNDRATHI
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Engineering the future through
          <span className="text-white font-medium"> AI/ML Architectures</span> and 
          <span className="text-white font-medium"> High-Performance Digital Platforms</span>. 
          Where data meets aesthetic excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-white text-black font-extrabold rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 group-hover:text-white transition-colors">EXPLORE WORK</span>
            <ArrowRight size={20} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all transform hover:bg-slate-800 hover:border-white/20 active:scale-95 w-full sm:w-auto"
          >
            <MessageSquare size={20} className="text-cyan-400" />
            <span>GET IN TOUCH</span>
          </a>
        </div>
      </div>

      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce cursor-pointer hover:text-white transition-colors"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;


import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-slate-900 bg-[#020617] px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Hari Vamshi Mundrathi. All rights reserved.
          </p>
          <div className="flex gap-8">
             <a 
               href="https://linkedin.com/in/Harivamshimundrathi" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
             >
               LinkedIn
             </a>
             <a 
               href="https://github.com/Harivamshimundrathi" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
             >
               GitHub
             </a>
             <a 
               href="#" 
               className="text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
             >
               Blog
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

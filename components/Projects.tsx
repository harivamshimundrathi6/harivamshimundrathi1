
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.5em] mb-4">PORTFOLIO</div>
            <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white tracking-tighter">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">INNOVATIONS</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-1">
            Developing high-impact solutions through a combination of engineering precision and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.title}
              className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                   <Calendar size={12} className="text-cyan-500" />
                   {project.duration}
                </div>
                
                <h3 className="font-orbitron text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

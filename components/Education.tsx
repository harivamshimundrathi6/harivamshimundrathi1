
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award, ChevronRight } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#020617] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
            < GraduationCap size={32} />
          </div>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold">Academic Path</h2>
        </div>

        <div className="space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-slate-800 pb-8 last:pb-0 group">
              {/* Point */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-purple-500 transition-colors"></div>
              
              <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{edu.institution}</h3>
                  <span className="text-xs font-bold px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-300 mb-4">
                  <ChevronRight size={16} className="text-purple-500" />
                  <p className="font-medium">{edu.degree}</p>
                </div>

                {edu.score && (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Award size={14} className="text-yellow-500" />
                    <span>Achievement: <span className="text-white font-bold">{edu.score}</span></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

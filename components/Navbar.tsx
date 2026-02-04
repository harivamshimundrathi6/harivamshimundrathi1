
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed w-full top-0 left-0 z-[100] px-6 py-8 pointer-events-none">
      <nav 
        className={`max-w-4xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto shadow-2xl
          ${scrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 scale-95 translate-y-[-10px]' 
            : 'bg-transparent border border-transparent translate-y-0'
          }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-orbitron font-bold text-xs text-white">
            HV
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-[11px] font-bold text-slate-300 hover:text-white transition-all uppercase tracking-[0.2em] rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500 pointer-events-auto
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-[-20px]'}`}
      >
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-2xl font-orbitron font-bold text-white tracking-widest hover:text-cyan-400 transition-all transform"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 text-slate-500 hover:text-white"
        >
          <X size={32} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

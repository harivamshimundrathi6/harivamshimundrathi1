
import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '919347216338';
    const messageLines = [
      `🚀 *New Inquiry: ${formData.subject.toUpperCase()}*`,
      `👤 *Name:* ${formData.name}`,
      `📧 *Email:* ${formData.email}`,
      `📝 *Message:* ${formData.message}`
    ];
    const fullMessage = messageLines.join('\n');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="font-orbitron text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                LET'S <span className="text-cyan-500">TALK.</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                Have a concept you want to bring to life? I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email", value: "harivamshimundrathi6@gmail.com", href: "mailto:harivamshimundrathi6@gmail.com", color: "text-cyan-400" },
                { icon: <Phone size={20} />, label: "Call", value: "+91 9347216338", href: "tel:+919347216338", color: "text-purple-400" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", value: "Harivamshimundrathi", href: "https://linkedin.com/in/Harivamshimundrathi", color: "text-blue-400" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target={item.href.startsWith('http') ? '_blank' : undefined} 
                  rel="noreferrer" 
                  className="flex items-center gap-6 group p-4 rounded-2xl transition-all hover:bg-white/5"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">{item.label}</p>
                    <p className="text-lg text-slate-200 font-medium group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-12 rounded-[3rem] border-white/5 relative">
            <div className="absolute top-8 right-8 text-cyan-500 opacity-20">
               <Sparkles size={40} />
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="NAME" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-cyan-500 transition-colors text-white text-xs font-bold tracking-widest uppercase placeholder:text-slate-600" 
                />
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="EMAIL" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-cyan-500 transition-colors text-white text-xs font-bold tracking-widest uppercase placeholder:text-slate-600" 
                />
              </div>
              <input 
                type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="SUBJECT" 
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-cyan-500 transition-colors text-white text-xs font-bold tracking-widest uppercase placeholder:text-slate-600" 
              />
              <textarea 
                name="message" required value={formData.message} onChange={handleChange} rows={4} placeholder="MESSAGE" 
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:outline-none focus:border-cyan-500 transition-colors text-white text-xs font-bold tracking-widest uppercase placeholder:text-slate-600 resize-none"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full mt-8 py-5 bg-white text-black font-black rounded-full flex items-center justify-center gap-3 transition-all hover:bg-cyan-400 transform active:scale-95 uppercase tracking-widest text-xs"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

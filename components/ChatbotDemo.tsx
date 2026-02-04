
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, Mic, Image as ImageIcon, Video, 
  PenTool, Utensils, Share2, Users, Moon, Plus, 
  ChevronRight, Send, X, MoreHorizontal, Layers,
  Terminal, Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatbotDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { title: "Plan a trip", desc: "to see the Northern Lights in Norway", emoji: "🗺️" },
    { title: "Write a poem", desc: "about the sound of a distant train", emoji: "📜" },
    { title: "Debug code", desc: "for a React component that isn't updating", emoji: "💻" },
    { title: "Draft an email", desc: "to a client about a project delay", emoji: "📧" },
  ];

  const sidebarItems = [
    { icon: <MessageSquare size={18} />, label: "New Chat", active: true },
    { icon: <Mic size={18} />, label: "Live Conversation" },
    { icon: <Users size={18} />, label: "Collaboration" },
    { icon: <ImageIcon size={18} />, label: "Image Generation" },
    { icon: <PenTool size={18} />, label: "Image Edit" },
    { icon: <Video size={18} />, label: "Video Generation" },
    { icon: <Utensils size={18} />, label: "Recipe Generator" },
    { icon: <Share2 size={18} />, label: "Social Post" },
  ];

  const handleSend = async (textToSelect?: string) => {
    const query = textToSelect || input;
    if (!query.trim()) return;

    const userMsg = { role: 'user' as const, text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
            systemInstruction: "You are the Cobalt Axis AI Assistant, an intelligent and helpful assistant integrated into Hari Vamshi Mundrathi's portfolio. Be professional, concise, and creative."
        }
      });
      
      const botMsg = { role: 'bot' as const, text: response.text || "I'm processing that right now..." };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to Cobalt Axis AI. Please check your connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <section id="chatbot-demo" className="py-24 px-4 md:px-6 bg-[#f8faff] text-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="font-orbitron text-3xl font-bold mb-4 text-[#020617]">Live AI Experience</h2>
        <p className="text-slate-500">Interact with the actual Cobalt-Axis AI Chatbot prototype below.</p>
      </div>

      <div className="max-w-6xl mx-auto h-[750px] bg-white rounded-3xl shadow-2xl overflow-hidden flex border border-slate-200">
        {/* Sidebar */}
        <div className="w-64 bg-[#edf2ff] border-r border-slate-200 hidden lg:flex flex-col p-4">
          <div className="flex items-center gap-2 mb-8 px-2">
             <Layers className="text-blue-600" size={24} />
             <span className="font-bold text-lg tracking-tight">Cobalt Axis</span>
          </div>

          <div className="space-y-1 flex-1">
            {sidebarItems.map((item, idx) => (
              <button 
                key={idx}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${item.active ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600 hover:bg-white/50'}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-300 space-y-1">
             <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white/50">
                <Plus size={18} />
                More from Cobalt Axis
             </button>
             <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-white/50">
                <Moon size={18} />
                Dark Mode
             </button>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-[#f8faff] relative">
          {/* Header */}
          <div className="p-4 flex justify-between items-center lg:hidden">
             <div className="flex items-center gap-2">
                <Layers className="text-blue-600" size={20} />
                <span className="font-bold">Cobalt Axis</span>
             </div>
             <button className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
                <X size={20} />
             </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-12">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                  Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cobalt Axis</span>
                </h1>
                <p className="text-slate-500 mb-12 text-lg">Your intelligent assistant for any task.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {suggestions.map((s, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleSend(`${s.title}: ${s.desc}`)}
                      className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
                    >
                      <div className="text-2xl mb-3">{s.emoji}</div>
                      <div className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{s.title}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-3xl mx-auto">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl ${
                      m.role === 'user' 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 rounded-br-none' 
                        : 'bg-white border border-slate-100 text-slate-800 shadow-sm rounded-bl-none'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-6 md:p-8 bg-gradient-to-t from-[#f8faff] to-transparent">
            <div className="max-w-3xl mx-auto relative group">
              <div className="flex items-center gap-2 bg-white rounded-2xl shadow-xl shadow-blue-100 border border-slate-100 p-2 pr-4 transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-300">
                <button className="p-3 text-slate-400 hover:text-blue-600 transition-colors">
                  <ImageIcon size={20} />
                </button>
                <button className="p-3 text-slate-400 hover:text-blue-600 transition-colors">
                  <Mic size={20} />
                </button>
                <div className="w-px h-6 bg-slate-200 mx-1"></div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter a prompt here..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700 px-2"
                />
                <button 
                  onClick={() => handleSend()}
                  className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 opacity-40 text-[10px] font-medium tracking-widest uppercase">
                 <div className="flex items-center gap-1">
                    <Layers size={10} /> Cobalt Axis
                 </div>
                 <div className="flex items-center gap-1">
                    <Sparkles size={10} /> End-to-end encrypted
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDemo;

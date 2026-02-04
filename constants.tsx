
import React from 'react';
import { Project, Education, SkillGroup } from './types';
import { Code, Brain, Globe, Database, Terminal, Layers } from 'lucide-react';

/** 
 * Path to your resume file in the public folder. 
 */
export const CV_URL = "/resume.pdf"; 
export const CV_FILENAME = "Hari_Vamshi_Mundrathi_Resume.pdf";

export const PROJECTS: Project[] = [
  {
    title: "CLNS Website",
    duration: "Dec 2025 – Present",
    description: "A premium digital presence for CLNS, focusing on high-end aesthetics, fluid animations, and performance optimization.",
    bullets: [
      "Crafted a sophisticated, minimalist UI designed for modern brand storytelling.",
      "Implemented smooth, state-driven transitions and complex layout animations.",
      "Engineered for high-performance delivery across all device types.",
      "Integrated SEO-best practices and semantic HTML for superior search visibility."
    ],
    link: "https://clns.in/",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Online Campus Event Scheduler",
    duration: "Jul 2025 – Nov 2025",
    description: "An intelligent platform for campus-wide event management using advanced data structures and RL for conflict resolution.",
    bullets: [
      "Efficient event scheduling using segment trees for fast conflict detection.",
      "Intelligent slot recommendations with reinforcement learning.",
      "Optimizes campus resources and adapts to user preferences.",
      "Resolves overlapping events automatically.",
      "Easy-to-use online interface for organizers and participants."
    ],
    tech: ["Python", "Segment Trees", "Reinforcement Learning", "Web Dev"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Cobalt-Axis Website",
    duration: "Sep 2025 – Present",
    description: "Developed and deployed a high-performance digital agency platform partnering with ambitious brands.",
    bullets: [
      "Designed a modern, futuristic UI/UX for brand representation.",
      "Deployed a dedicated website using modern web technologies.",
      "Focus on scalability and aesthetic excellence.",
      "Optimized for high-performance user interaction."
    ],
    link: "https://cobaltaxis.netlify.app/",
    tech: ["React", "Tailwind CSS", "UI/UX", "Netlify"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Cobalt-Axis AI Chatbot",
    duration: "Jul 2025 – Nov 2025",
    description: "Custom AI chatbot integrated into Cobalt-Axis to enhance user interaction and engagement.",
    bullets: [
      "Designed and implemented a custom conversational AI agent.",
      "Nearing completion with a focus on natural language understanding.",
      "Integrated directly into the Cobalt-Axis ecosystem.",
      "Aims to provide instant support and interactive user experiences."
    ],
    tech: ["AI/ML", "NLP", "Python", "API Integration"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "MMDeeds Digital Platform",
    duration: "Sep 2025 – Present",
    description: "A secure platform for managing, sharing, and tracking digital deeds and institutional documents.",
    bullets: [
      "Secure upload and storage of documents with user-friendly interface.",
      "Auto-generation of digital documents based on user details.",
      "Simplifies record keeping for personal and institutional users.",
      "Planned integrated access controls for enhanced privacy."
    ],
    link: "https://mmdeeds4.netlify.app/",
    tech: ["React", "Security", "Cloud Storage", "Automation"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Anurag University",
    degree: "B.Tech in CS (AI & ML)",
    duration: "Aug 2024 – Present"
  },
  {
    institution: "Chinmaya Junior College",
    degree: "Intermediate",
    duration: "Apr 2022 – Jun 2024",
    score: "81.6%"
  },
  {
    institution: "St. Paul’s High School",
    degree: "Secondary School",
    duration: "Mar 2022",
    score: "87.0"
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "C", "Data Structures"]
  },
  {
    category: "Tools & IDEs",
    items: ["Android Studio", "VS Code", "Google Colab", "Jupyter", "Eclipse"]
  },
  {
    category: "AI/ML Libraries",
    items: ["Pandas", "NumPy", "Matplotlib"]
  },
  {
    category: "Soft Skills",
    items: ["Teamwork", "Communication", "Critical Thinking", "Adaptability"]
  }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" }
];

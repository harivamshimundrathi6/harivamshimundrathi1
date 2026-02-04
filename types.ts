
export interface Project {
  title: string;
  duration: string;
  description: string;
  bullets: string[];
  link?: string;
  tech: string[];
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

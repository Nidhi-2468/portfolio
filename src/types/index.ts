export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'Data Science' | 'Machine Learning' | 'Analytics' | 'Operations Research';
}

export type SkillCategory =
  | "Programming"
  | "Data Analysis"
  | "Machine Learning"
  | "Optimization"
  | "Tools";

export interface Skill {
  category: SkillCategory;
  name: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

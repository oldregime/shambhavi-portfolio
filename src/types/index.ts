export type ProjectCategory = 'All' | 'Data & AI' | 'Cloud & Analytics' | 'Web Apps';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Data & AI' | 'Cloud & Analytics' | 'Web Apps';
  tags: string[];
  metrics: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
  badge?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  badge: string;
  url?: string;
  skills: string[];
}

export interface LeetCodeDay {
  day: number;
  problem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  approach: string;
  takeaways: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; icon: string }[];
}

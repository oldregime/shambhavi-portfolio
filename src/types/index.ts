export type ProjectCategory = 'All' | 'Data & AI' | 'Cloud & Analytics' | 'Web Apps';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  featured: boolean;
  description: string;
  highlights: string[];
  tags: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  badge: string;
  url?: string;
  skills?: string[];
}

export interface LeetCodeMilestone {
  day: number;
  problem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  approach: string;
  takeaways: string[];
  tags: string[];
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  education: string;
  university: string;
  graduationYear: string;
  bio: string;
}

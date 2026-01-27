import { ReactNode } from 'react';

// Project types
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  status?: 'completed' | 'in-progress';
}

// Skill category types
export interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

// Navigation item types
export interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
}

// Form data types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Props types for components
export interface ProjectsGridProps {
  limit?: number;
}

export interface ProjectCardProps {
  project: Project;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  techStack: string[];
}
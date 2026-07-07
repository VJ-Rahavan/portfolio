export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  stats: { label: string; value: string }[];
  accentColor: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'academic' | 'milestone';
  technologies?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | (() => string);
}

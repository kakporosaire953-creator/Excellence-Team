export type PageView = 'home' | 'work' | 'services' | 'about' | 'team' | 'journal' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isFounder: boolean;
  status: 'Cofondateur' | 'Membre recruté';
  department: 'Direction' | 'Technique' | 'Administration' | 'Projets & Opérations' | 'Commercial' | 'Marketing';
  competencies: string[];
  mainMission: string;
  responsibilities: string[];
  decisionScope: string;
  expectedDeliverables: string[];
  bio: string;
  reportingTo: string;
}

export type ProjectCategory = 
  | 'All'
  | 'Developer Tooling'
  | 'SaaS & Web'
  | 'AI & Data'
  | 'EdTech & Education'
  | 'Research & 3D'
  | 'Impact & Civic';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  shortDescription: string;
  problem: string;
  approach: string;
  build: string;
  technology: string[];
  result: string;
  status: 'Production' | 'Active' | 'V2' | 'Research' | 'Open Source';
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  items: string[];
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  shortSummary: string;
  description: string;
  icon: string;
  capabilities: ServiceCapability[];
  technologies: string[];
  deliverables: string[];
  businessValue: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Engineering' | 'Cybersecurity' | 'AI & Data' | 'Product' | 'Company';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
}

export interface ValueItem {
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

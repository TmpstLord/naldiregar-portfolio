export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  role: string;
  timeline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  metrics?: ProjectMetric[];
  coverImage?: string;
  gallery?: ProjectScreenshot[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: "Internship" | "Competition" | "Certification";
  description: string;
  highlights: string[];
  proofUrl?: string;
  proofLabel?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
}

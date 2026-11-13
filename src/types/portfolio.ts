// src/types/portfolio.ts

export interface Project {
  id: string;
  title: string;
  slug: string; // Digunakan untuk URL dinamis, misal: "visit-suluttenggo"
  description: string;
  techStack: string[];
  githubUrl?: string; // Opsional karena tidak semua proyek open-source
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string; // Format: YYYY-MM
  endDate?: string; // Kosongkan jika masih berlangsung
  achievements: string[];
}

// Khusus untuk bedah teknis (Technical Case Study)
export interface CaseStudy extends Project {
  architecture: string; // Penjelasan arsitektur sistem
  databaseSchema?: string; // Tautan gambar skema
  performanceMetrics?: {
    label: string;
    value: string;
  }[]; // Contoh untuk metrik Ocean Hero FPS/Memory atau hit API
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

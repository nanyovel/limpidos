export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image: string;
  keywords?: string[];
  updatedAt?: string; // 👈 nuevo, opcional — solo lo llenas si editaspost después
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  content: string;
  rating: number;
}

export interface Solution {
  id: string;
  sector: string;
  title: string;
  description: string;
  challenges: string[];
  benefits: string[];
  icon: string;
}

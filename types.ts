
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

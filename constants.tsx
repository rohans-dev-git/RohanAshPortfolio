
import { Project, Experience } from './types';
import ctekLogo from './components/assets/Ctek.png';
import qiLogo from './components/assets/QI.png';
import biocLogo from './components/assets/bioc.png';
import byjusLogo from './components/assets/byjus.png';


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "DeployD",
    category: "Software Engineering",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600",
    description: "A predictive DevOps engine that uses time-series forecasting to preemptively identify server failures and automate rollback strategies",
    year: "2025"
  },
  {
    id: 2,
    title: "Creatly",
    category: "AI powered SaaS Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    description: "A multi-modal Generative AI platform using RAG to produce brand-aligned visual and textual marketing assets",
    year: "2025"
  },
  {
    id: 3,
    title: "SmartHyre",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    description: "An automated talent acquisition suite leveraging semantic search and LLM-based ranking to match resumes with Job Descriptions",
    year: "2026"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Csharptek",
    period: "2025",
    description: "Full STack AI Engineer worked on building AI powered solutions for various clients"
  },
  {
    id: 2,
    role: "Consultant Analyst(web & Data)",
    company: "Quassarian Innovations",
    period: "2022 — 2024",
    description: "Worked on Creating Tech Architecture and built High Performance API's, IoT and Web Applications"
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "Bioclinica(now Clario)",
    period: "2021 — 2022",
    description: "Worked on Clinical Application Full stack Development and built high performance data processing pipelines"
  }
];

export const CLIENTS = [
  { name: 'Csharptek', logo: ctekLogo },
  { name: 'QI', logo: qiLogo },
  { name: 'bioc', logo: biocLogo },
  { name: 'byjus', logo: byjusLogo },
  //{ name: 'facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Facebook_logo_%282019%29.svg' }
];

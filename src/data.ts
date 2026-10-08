import { Project, TimelineItem, Skill } from './types';

export const USER_INFO = {
  name: "Vijayarahavan",
  nickname: "VJ Rahavan",
  title: "Creative Full-Stack Engineer",
  tagline: "I build high-performance web systems and fluid interactive experiences.",
  bio: "A passionate Software Engineer who crafts modular web applications, fluid interactive interfaces, and robust distributed backends. Specializing in React, TypeScript, Node.js, and Cloud Infrastructure, I bridge the gap between engineering rigor and beautiful user interfaces.",
  email: "vijayarahavan176@gmail.com",
  github: "https://github.com/vj-rahavan",
  website: "https://vj-rahavan.github.io/portfolio/"
};

export const PROJECTS: Project[] = [
  {
    id: "pdf-text-extractor",
    title: "PDF Text Extractor",
    subtitle: "React Native Library · npm",
    description: "A fully offline, on-device PDF text extraction library for React Native, built on iOS PDFKit and Android PdfBox.",
    longDescription: "react-native-pdf-text-extractor pulls embedded text out of PDFs entirely on-device: no network calls, no cloud OCR. It uses each platform's native PDF stack (PDFKit on iOS, PdfBox-Android on Android) and exposes a small promise-based API for page counts, whole-document text, and per-page text, with optional normalization that cleans up hyphenated line-wraps and invisible characters.",
    technologies: ["React Native", "TypeScript", "Swift", "Kotlin", "PDFKit", "PdfBox-Android"],
    githubUrl: "https://github.com/VJ-Rahavan/react-native-pdf-text-extractor",
    demoUrl: "https://www.npmjs.com/package/react-native-pdf-text-extractor",
    stats: [
      { label: "Network Calls", value: "Zero" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "License", value: "MIT" }
    ],
    accentColor: "from-rose-400 to-red-600"
  },
  {
    id: "generative-ui",
    title: "FitTrack Generative UI",
    subtitle: "AI Coach that Answers with UI",
    description: "An AI fitness coach that responds with interactive dashboards, charts, and forms instead of text, streamed live from the model.",
    longDescription: "FitTrack composes its answers as UI. The LLM fetches real training data through tools, then writes components from a fixed, Pydantic-validated catalog that stream to the browser over SSE as each one is generated. Button clicks and form submits go back to the agent, which acts on them and renders the result. The model never writes HTML or JavaScript, so every component is validated before it reaches the page.",
    technologies: ["React", "TypeScript", "FastAPI", "LangChain", "Groq", "Pydantic", "Recharts"],
    githubUrl: "https://github.com/VJ-Rahavan/Generative-UI",
    stats: [
      { label: "Output", value: "Live UI, not text" },
      { label: "Rendering", value: "Streams per component" },
      { label: "Safety", value: "Schema-validated" }
    ],
    accentColor: "from-emerald-400 to-teal-600"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    year: "2025 - Present",
    title: "Technology Engineer",
    organization: "Purplescape",
    description: "Building high-performance React and React Native applications, interactive product experiences, and web systems for enterprise and consumer clients.",
    type: "work",
    technologies: ["React", "React Native", "TypeScript", "Node.js"]
  },
  {
    id: "t2",
    year: "2022 - 2025",
    title: "Technology Engineer",
    organization: "PurpleSlate",
    description: "Shipped production React and React Native applications with a focus on frontend architecture, performance, and developer experience.",
    type: "work",
    technologies: ["React", "React Native", "TypeScript"]
  },
  {
    id: "t3",
    year: "2023 - 2025",
    title: "Master of Computer Applications (MCA)",
    organization: "SRM University",
    description: "Advanced coursework in distributed systems, software design, database internals, and modern application architecture.",
    type: "academic"
  },
  {
    id: "t4",
    year: "2019 - 2022",
    title: "B.Sc. in Computer Science",
    organization: "VHNSNC",
    description: "Foundations in data structures, algorithms, operating systems, databases, and software engineering.",
    type: "academic"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", color: "#38BDF8" },
  { name: "React Native", level: 92, category: "frontend", color: "#61DAFB" },
  { name: "Expo", level: 88, category: "frontend", color: "#E5E7EB" },
  { name: "TypeScript", level: 90, category: "frontend", color: "#3178C6" },
  { name: "Tailwind CSS", level: 98, category: "frontend", color: "#38BDF8" },
  { name: "Zustand & Redux", level: 88, category: "frontend", color: "#764ABC" },
  { name: "ECharts", level: 85, category: "frontend", color: "#E43961" },

  // Backend
  { name: "Node.js & Express", level: 88, category: "backend", color: "#22C55E" },
  { name: "GraphQL & REST APIs", level: 85, category: "backend", color: "#E10098" },
  { name: "PostgreSQL", level: 82, category: "backend", color: "#336791" },
  { name: "Python & FastAPI", level: 82, category: "backend", color: "#3776AB" },
  { name: "Firebase (FCM / Crashlytics)", level: 85, category: "backend", color: "#FFCA28" },

  // Tools
  { name: "Git & GitHub Workflows", level: 92, category: "tools", color: "#F05032" },
  { name: "Docker & Containers", level: 78, category: "tools", color: "#2496ED" },
  { name: "Vite & Esbuild Bundling", level: 88, category: "tools", color: "#646CFF" },
  { name: "AWS & Google Cloud Run", level: 80, category: "tools", color: "#FF9900" },
  { name: "CI/CD & GitHub Actions", level: 82, category: "tools", color: "#2088FF" },

  // Generative AI
  { name: "LLM Agents & Tool Calling", level: 85, category: "ai", color: "#A78BFA" },
  { name: "Generative UI", level: 88, category: "ai", color: "#F472B6" },
  { name: "LangChain", level: 82, category: "ai", color: "#2DD4BF" },
  { name: "RAG (Retrieval-Augmented Generation)", level: 84, category: "ai", color: "#34D399" },
  { name: "Prompt Engineering", level: 86, category: "ai", color: "#FACC15" }
];

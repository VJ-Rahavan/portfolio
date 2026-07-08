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
    id: "devsync",
    title: "DevSync Hub",
    subtitle: "Real-time Collaborative Workspace",
    description: "A secure workspace combining code editing, whiteboard sharing, and WebRTC audio chat for developers.",
    longDescription: "DevSync is a full-featured collaborative workspace designed for remote developer pairs. By integrating custom CRDT algorithms with standard WebSockets, it provides conflict-free rich text editing, shared sketch canvases, and instant latency-minimized audio calling directly in the browser.",
    technologies: ["React", "TypeScript", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/vj-rahavan/portfolio",
    stats: [
      { label: "Sync Latency", value: "<12ms" },
      { label: "Active Nodes", value: "10k+" },
      { label: "Stars", value: "412" }
    ],
    accentColor: "from-cyan-400 to-blue-600"
  },
  {
    id: "aurasynth",
    title: "Aura Synth",
    subtitle: "Creative Web Audio Engine",
    description: "An interactive, visual synthesizer utilizing Web Audio and Canvas APIs to create organic audio soundscapes.",
    longDescription: "Aura Synth explores the boundaries of human-computer music creation. It enables users to place interactive frequency emitters on a canvas, generating sound nodes that interact visually. Features custom waveform shaping, low-frequency oscillators, and high-performance visual rendering.",
    technologies: ["React", "TypeScript", "Web Audio API", "Canvas 2D", "Framer Motion"],
    githubUrl: "https://github.com/vj-rahavan/portfolio",
    stats: [
      { label: "FPS Render", value: "60fps" },
      { label: "Audio Channels", value: "16 Node" },
      { label: "Synthesizers", value: "Analog & FM" }
    ],
    accentColor: "from-violet-500 to-fuchsia-600"
  },
  {
    id: "gridcraft",
    title: "Gridcraft Canvas",
    subtitle: "Bento-style Workspace Builder",
    description: "A drag-and-drop workspace builder featuring custom widget integrations and fully responsive, saveable dashboard layouts.",
    longDescription: "Gridcraft redefines dashboard organization. Users can custom-build their work view by creating, resizing, and snapping widgets—from task lists to live stock and weather grids. Includes auto-saving capabilities, custom JSON export options, and a suite of built-in tool integrations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "LocalForage", "HTML5 Drag-Drop"],
    githubUrl: "https://github.com/vj-rahavan/portfolio",
    stats: [
      { label: "Arrangement Accuracy", value: "Sub-pixel" },
      { label: "Local Storage Space", value: "Durable" },
      { label: "Widgets Available", value: "14+" }
    ],
    accentColor: "from-emerald-400 to-teal-600"
  },
  {
    id: "helix",
    title: "Helix LLM Agent",
    subtitle: "Autonomous Code Auditor",
    description: "An intelligent automated assistant that reviews commits and scans repositories for vulnerabilities in real time.",
    longDescription: "Helix integrates seamlessly as a GitHub Action or local CLI to inspect pull requests before production deployment. Powered by deep LLM parsing, it reports code duplication, suggests algorithmic optimizations, and automatically highlights security risks like exposed API keys.",
    technologies: ["Node.js", "TypeScript", "Gemini API", "Esbuild", "GitHub Actions"],
    githubUrl: "https://github.com/vj-rahavan/portfolio",
    stats: [
      { label: "Audit Accuracy", value: "98.2%" },
      { label: "Scan Speed", value: "0.8s/file" },
      { label: "Languages Supported", value: "12+" }
    ],
    accentColor: "from-amber-400 to-orange-600"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    year: "2024 - Present",
    title: "Senior Full-Stack Developer",
    organization: "TechForge Solutions",
    description: "Spearheading development of complex single-page architectures, interactive real-time modules, and high-performance data processing tools. Restructured state management to improve frame rates and system responsiveness.",
    type: "work",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Socket.io"]
  },
  {
    id: "t2",
    year: "2022 - 2024",
    title: "Software Engineer",
    organization: "Apex Digital Systems",
    description: "Built scalable cloud-native microservices and responsive frontends. Collaborated on migrating legacy dashboards to high-speed Vite environments, decreasing build-times by 70% and asset delivery latency by 35%.",
    type: "work",
    technologies: ["React", "Redux", "Express", "PostgreSQL", "Docker"]
  },
  {
    id: "t3",
    year: "2019 - 2022",
    title: "Technology Engineer",
    organization: "PurpleScape",
    description: "Created custom interactive sites, secure content management panels, and responsive portals for local and international brands. Fine-tuned layout layouts, animation curves, and SEO search visibility.",
    type: "work",
    technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Firebase"]
  },
  {
    id: "t4",
    year: "2015 - 2019",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "University of Technology",
    description: "Graduated with honors. Developed strong fundamentals in data structures, design patterns, algorithm optimization, human-computer interfaces, and database synchronization systems.",
    type: "academic"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend", color: "#38BDF8" },
  { name: "TypeScript", level: 90, category: "frontend", color: "#3178C6" },
  { name: "Tailwind CSS", level: 98, category: "frontend", color: "#38BDF8" },
  { name: "Framer Motion", level: 88, category: "frontend", color: "#F43F5E" },
  { name: "HTML5 & CSS3 Canvas", level: 92, category: "frontend", color: "#E34F26" },

  // Backend
  { name: "Node.js & Express", level: 88, category: "backend", color: "#22C55E" },
  { name: "GraphQL & REST APIs", level: 85, category: "backend", color: "#E10098" },
  { name: "PostgreSQL & Prisma", level: 82, category: "backend", color: "#336791" },
  { name: "MongoDB & Mongoose", level: 80, category: "backend", color: "#47A248" },
  { name: "Firebase (Auth / Firestore)", level: 85, category: "backend", color: "#FFCA28" },

  // Tools
  { name: "Git & GitHub Workflows", level: 92, category: "tools", color: "#F05032" },
  { name: "Docker & Containers", level: 78, category: "tools", color: "#2496ED" },
  { name: "Vite & Esbuild Bundling", level: 88, category: "tools", color: "#646CFF" },
  { name: "AWS & Google Cloud Run", level: 80, category: "tools", color: "#FF9900" },
  { name: "CI/CD & GitHub Actions", level: 82, category: "tools", color: "#2088FF" }
];

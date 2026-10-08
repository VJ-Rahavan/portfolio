import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Code2, Database, Cpu, Layers, Zap, CheckCircle2, Sparkles, BrainCircuit } from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILLS[0]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code2 size={13} />;
      case 'backend':
        return <Database size={13} />;
      case 'tools':
        return <Cpu size={13} />;
      case 'ai':
        return <BrainCircuit size={13} />;
      default:
        return <Layers size={13} />;
    }
  };

  const getSelfAssessment = (skillName: string) => {
    const assessments: Record<string, { desc: string; usage: string; methodologies: string[] }> = {
      "React": {
        desc: "Building complex single-page architectures, responsive hook-based lifecycles, real-time sync states, and dynamic dashboards with optimized frame rates.",
        usage: "Engineered the high-performance collaborative workspace, interactive charts, and live terminal shell in this portfolio.",
        methodologies: ["Custom Hook Orchestration", "Dynamic Rendering Loops", "State Management Engines"]
      },
      "React Native": {
        desc: "Building cross-platform iOS and Android apps with shared TypeScript code, smooth native-feeling interactions, and custom native modules when JavaScript alone isn't enough.",
        usage: "Shipped production React Native apps at PurpleSlate and Purplescape, and published react-native-pdf-text-extractor, a native module built on PDFKit and PdfBox.",
        methodologies: ["Cross-Platform Architecture", "Native Module Bridging", "Mobile Performance Tuning"]
      },
      "Expo": {
        desc: "Speeding up React Native development with Expo's tooling: managed workflows, config plugins for native setup, EAS cloud builds, and over-the-air updates.",
        usage: "Used to build, ship, and update React Native apps without waiting on full app store releases for every fix.",
        methodologies: ["EAS Builds & Submit", "Over-the-Air Updates", "Config Plugins"]
      },
      "TypeScript": {
        desc: "Writing strict static type compiling routines, robust generic utility schemas, contract-first API payloads, and clean interface systems.",
        usage: "Enforces type safety and eliminates runtime interface mismatches across the server and client components.",
        methodologies: ["Strict Typing Pipelines", "Generic Utilities", "Contract-First API Payloads"]
      },
      "Tailwind CSS": {
        desc: "Designing cohesive system design tokens, highly fluid responsive grids, micro-interactions, and custom dark mode themes.",
        usage: "Applied to form the modern, eye-safe slate and stone color palettes and typography scales throughout this app.",
        methodologies: ["Fluid Design Tokens", "Dynamic Breakpoints", "Zero Runtime CSS Overhead"]
      },
      "Zustand & Redux": {
        desc: "Managing app state with the right tool for the job: small hook-based Zustand stores for lightweight global state, and Redux Toolkit slices with middleware for large, shared state.",
        usage: "Used across React and React Native apps to keep state predictable, avoid needless re-renders, and keep complex flows easy to debug.",
        methodologies: ["Zustand Hook Stores", "Redux Toolkit Slices", "Selector Subscriptions"]
      },
      "ECharts": {
        desc: "Building interactive data visualizations with Apache ECharts: line, bar, pie, and custom charts with tooltips, zooming, and responsive, theme-aware styling.",
        usage: "Used to turn dense datasets into clear, interactive dashboards and analytics views.",
        methodologies: ["Interactive Dashboards", "Custom Chart Options", "Large Dataset Rendering"]
      },
      "Node.js & Express": {
        desc: "Deploying high-throughput REST APIs, custom middleware route controllers, event-driven processes, and server proxies.",
        usage: "Architected durable web communication gates and lightweight asynchronous endpoints.",
        methodologies: ["Asynchronous Gateways", "REST Architecture", "Custom Route Middleware"]
      },
      "GraphQL & REST APIs": {
        desc: "Formulating contract-first queries, caching schemas, rate-limiting handlers, and unified API gateways.",
        usage: "Powering asynchronous external calls and third-party data synchronization pipelines.",
        methodologies: ["Unified Gateways", "Rate-Limiting Protocols", "Payload Minimization"]
      },
      "PostgreSQL": {
        desc: "Defining complex relational schemas, transaction isolations, indexing speeds, and schema migrations.",
        usage: "Engineered robust structured analytical storages and durable database systems.",
        methodologies: ["Relational Schemes", "Database Index Tuning", "Schema Migrations"]
      },
      "Python & FastAPI": {
        desc: "Building async Python APIs with FastAPI, Pydantic models for typed request and response contracts, and SQLAlchemy for async database access.",
        usage: "Wrote the FitTrack backend: the agent loop, tool registry, streaming chat endpoint, and seeded training database.",
        methodologies: ["Async FastAPI Services", "Pydantic Data Models", "Async SQLAlchemy"]
      },
      "Firebase (FCM / Crashlytics)": {
        desc: "Delivering push notifications through Firebase Cloud Messaging (FCM), including topic and targeted messaging, and tracking app stability with Crashlytics crash reporting.",
        usage: "Implemented FCM push notifications and Crashlytics crash monitoring for production apps.",
        methodologies: ["FCM Push Notifications", "Topic & Targeted Messaging", "Crashlytics Crash Monitoring"]
      },
      "Git & GitHub Workflows": {
        desc: "Conducting atomic feature branching, pull-request auditing, SemVer version tagging, and conflict resolutions.",
        usage: "Maintains code integration, branch management, and feature tracking across staging releases.",
        methodologies: ["Atomic Branching Trees", "Interactive Rebase Operations", "SemVer Version Releases"]
      },
      "Docker & Containers": {
        desc: "Authoring optimized multi-stage container files, local stack configurations, and minimizing container weights.",
        usage: "Built reproducible and lightweight virtualized workspace packages for rapid container deployment.",
        methodologies: ["Multi-Stage Packaging", "Isolated Virtual Networks", "Dependency Lockdown"]
      },
      "Vite & Esbuild Bundling": {
        desc: "Optimizing bundle structures, tree-shaking dead code, dynamic module division, and configuring custom HMR pipelines.",
        usage: "Standard bundling setup powering near-instant production compiles and hot dev server execution.",
        methodologies: ["Dead Code Tree-Shaking", "Dynamic Code Splitting", "Optimized Asset Bundles"]
      },
      "AWS & Google Cloud Run": {
        desc: "Deploying secure scale-to-zero container nodes, environment secret injections, and server resource scaling.",
        usage: "Hosted production applications with high availability and load-balanced latency.",
        methodologies: ["Scale-to-Zero Run Nodes", "VPC Networking Setup", "Secure Secret Injection"]
      },
      "CI/CD & GitHub Actions": {
        desc: "Constructing automated pipeline templates, static style validators, compile testing, and deployment webhooks.",
        usage: "Maintains high quality gates on every pushed master-branch merge request.",
        methodologies: ["Automated Linters & Tests", "Staging Quality Gates", "Auto-Deploy Triggers"]
      },
      "LLM Agents & Tool Calling": {
        desc: "Building agent loops where the model calls typed data tools, reads the results, and decides its next step, with retries and graceful error handling.",
        usage: "Powers the FitTrack coach, which reads and writes workouts, metrics, and plans through 11 agent tools before composing its answer.",
        methodologies: ["Agent Loops", "Typed Tool Schemas", "Error Recovery & Retries"]
      },
      "Generative UI": {
        desc: "Letting the model answer with interactive components (metrics, charts, tables, forms) instead of plain text, rendered from a fixed, safe component catalog.",
        usage: "Built FitTrack, where every answer is a live dashboard and button clicks or form submits flow back to the agent as events.",
        methodologies: ["Component Catalogs", "Model-Driven Layouts", "UI Event Round-Trips"]
      },
      "LangChain": {
        desc: "Wiring chat models, structured tools, and streaming into provider-agnostic pipelines that can switch LLM backends without touching the agent logic.",
        usage: "Runs the FitTrack agent on Groq through ChatGroq and StructuredTool, with any ready-made LangChain tool plugging straight in.",
        methodologies: ["Provider-Agnostic Models", "StructuredTool Registries", "Runnable Config Context"]
      },
      "RAG (Retrieval-Augmented Generation)": {
        desc: "Grounding model answers in your own data by chunking and embedding documents, retrieving the most relevant passages, and feeding them into the prompt as context.",
        usage: "Used to build assistants that answer from private documents and knowledge bases with fewer hallucinations than the model alone.",
        methodologies: ["Chunking & Embeddings", "Vector Search", "Context-Grounded Prompts"]
      },
      "Prompt Engineering": {
        desc: "Designing system prompts, personas, and output formats that keep models reliable, and compacting conversation history to save tokens.",
        usage: "Shapes the FitTrack coach persona and the streaming UI format the model follows, generated directly from the component catalog.",
        methodologies: ["System Prompt Design", "Output Format Contracts", "History Compaction"]
      }
    };
    return assessments[skillName] || {
      desc: "Engineering complex features, optimizing load-times, and architecting modular structures.",
      usage: "Leveraged to deploy resilient digital solutions.",
      methodologies: ["Modular Systems", "Performance Tuning", "Modern Architectures"]
    };
  };

  const categories = [
    { id: 'frontend', name: 'Frontend Architecture' },
    { id: 'backend', name: 'Backend & Database' },
    { id: 'tools', name: 'Operations & Tooling' },
    { id: 'ai', name: 'Generative AI & Agents' }
  ];

  return (
    <section
      id="skills-section"
      className="relative w-full py-16 sm:py-24 px-6 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 cyber-grid-dense opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-3">
            <Award size={10} className="text-stone-500" />
            <span>Technologies & Capabilities</span>
          </div>
          
          <h2 className="font-serif font-light text-2xl sm:text-4xl tracking-tight italic text-stone-100 mb-3">
            Ecosystem Directory
          </h2>
          
          <p className="text-stone-400 max-w-xl font-light text-xs sm:text-sm leading-relaxed">
            Click on any technology badge to inspect what specific systems and functionalities I deploy it for in production.
          </p>
        </div>

        {/* Dynamic Compact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stack Matrix Directory (Super Space-Efficient) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {categories.map((cat) => {
                const categorySkills = SKILLS.filter(s => s.category === cat.id);
                return (
                  <div key={cat.id} className="space-y-2">
                    <span className="font-mono text-[10px] tracking-widest text-stone-500 uppercase flex items-center space-x-2">
                      <span className="h-1 w-1 bg-stone-600 rounded-full" />
                      <span>{cat.name}</span>
                    </span>
                    
                    {/* Compact Interactive Badge Grid */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => {
                        const isSelected = activeSkill.name === skill.name;
                        return (
                          <button
                            key={skill.name}
                            onClick={() => setActiveSkill(skill)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition-all duration-300 ${
                              isSelected
                                ? 'bg-stone-100 border-stone-100 text-stone-900 font-medium shadow-md'
                                : 'bg-stone-950/40 border-white/5 text-stone-400 hover:text-stone-200 hover:border-white/10'
                            }`}
                            id={`skill-badge-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                          >
                            <span 
                              className="h-1.5 w-1.5 rounded-full shrink-0 transition-all duration-300"
                              style={{ 
                                backgroundColor: isSelected ? '#1c1917' : skill.color,
                                boxShadow: isSelected ? 'none' : `0 0 4px ${skill.color}`
                              }}
                            />
                            <span className="font-sans text-xs">{skill.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro aesthetic note */}
            <div className="hidden lg:flex items-center space-x-2 text-[10px] text-stone-600 font-mono">
              <Sparkles size={12} className="text-stone-600" />
              <span>Interactive directory updates context instantly</span>
            </div>
          </div>

          {/* Right Column: Deployed Case Panel (Interactive details display) */}
          <div className="lg:col-span-6 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-[#121212]/40 p-6 sm:p-8 rounded-2xl border border-white/10 flex-grow flex flex-col justify-between relative overflow-hidden h-full group min-h-[320px]"
              >
                {/* Decorative background visual node */}
                <div 
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[40px] opacity-10 transition-all duration-500"
                  style={{ backgroundColor: activeSkill.color }}
                />

                <div className="space-y-6">
                  {/* Header: Tech tag */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase">
                      Integration Profile
                    </span>
                    <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-stone-950 border border-white/5">
                      <div className="text-stone-400" style={{ color: activeSkill.color }}>
                        {getCategoryIcon(activeSkill.category)}
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400">
                        {activeSkill.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Classification */}
                  <div>
                    <h3 className="font-serif italic font-light text-2xl sm:text-3xl text-stone-100 leading-tight">
                      {activeSkill.name}
                    </h3>
                    <div className="h-[2px] w-8 mt-3 rounded-full" style={{ backgroundColor: activeSkill.color }} />
                  </div>

                  {/* Core details */}
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-500 block mb-1.5">
                        What I utilize this for
                      </span>
                      <p className="text-stone-300 font-light text-xs sm:text-sm leading-relaxed">
                        {getSelfAssessment(activeSkill.name).desc}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-500 block mb-1.5">
                        Practical Deployment
                      </span>
                      <p className="text-stone-400 font-light text-xs leading-relaxed">
                        {getSelfAssessment(activeSkill.name).usage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Methodologies */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-500 block mb-2.5">
                    Associated Methodologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {getSelfAssessment(activeSkill.name).methodologies.map((method, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[9px] bg-stone-950/80 border border-white/5 text-stone-300 px-2.5 py-0.5 rounded transition-colors duration-300"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

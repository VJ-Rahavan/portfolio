import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { FolderGit2, Github, ExternalLink, Activity, Sparkles, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../data';

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll to track progress of the entire section height
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  // Calculate horizontal translation for the project track
  // 4 items, we translate from 0% to -75% (so 3 cards slide away, leaving the last one)
  const xTranslation = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-75%"]);
  
  // Apply spring physics for buttery-smooth scrolling inertia
  const xSpring = useSpring(xTranslation, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001
  });

  return (
    <div
      ref={containerRef}
      id="projects-section"
      className="relative w-full h-auto md:h-[400vh] bg-[#0a0a0a]"
    >
      {/* Desktop Sticky Container */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden border-t border-white/5">
        {/* Abstract Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
        
        {/* Floating background blobs */}
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-stone-500/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-stone-500/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="h-full flex flex-col justify-between py-16">
          
          {/* Header Info (Stays fixed) */}
          <div className="px-16 flex justify-between items-end max-w-7xl w-full mx-auto relative z-20">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
                <FolderGit2 size={10} className="text-stone-500" />
                <span>Showcase</span>
              </div>
              <h2 className="font-serif font-light text-4xl lg:text-6xl tracking-tight italic text-stone-100">
                Selected Works
              </h2>
            </div>
            
            <div className="flex flex-col items-end text-right font-sans text-[10px] text-stone-500 tracking-[0.1em] uppercase">
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-stone-400 animate-pulse" />
                <span>Scroll vertically to slide</span>
              </div>
              <span className="mt-1">VJ RAHAVAN © 2026</span>
            </div>
          </div>

          {/* Horizontal Sliding Track */}
          <div className="flex-grow flex items-center relative z-10 my-6">
            <motion.div
              style={{ x: xSpring }}
              className="flex px-16 space-x-8"
            >
              {PROJECTS.map((project, index) => {
                return (
                  <div
                    key={project.id}
                    className="w-[75vw] lg:w-[65vw] max-w-[900px] flex-shrink-0 h-[50vh] min-h-[420px] max-h-[550px] flex items-stretch"
                  >
                    <div className="bg-[#121212]/40 border border-white/10 p-8 lg:p-12 rounded-3xl w-full flex flex-col md:flex-row justify-between gap-8 hover:border-stone-700 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 relative overflow-hidden group">
                      
                      {/* Elegant Minimalist Top Border Accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone-300" />
                      
                      {/* Left: Info details */}
                      <div className="flex-grow flex flex-col justify-between md:max-w-[55%] relative z-10">
                        <div>
                          <div className="flex items-center space-x-2.5 mb-4">
                            <span className="font-mono text-xs font-semibold text-stone-500">
                              0{index + 1} / 0{PROJECTS.length}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-stone-800" />
                            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone-400">
                              Production Ready
                            </span>
                          </div>

                          <h3 className="font-serif italic font-light text-2xl lg:text-4xl text-stone-100 mb-2 leading-none">
                            {project.title}
                          </h3>
                          <h4 className="font-sans font-normal text-xs lg:text-sm text-stone-400 mb-6 uppercase tracking-wider">
                            {project.subtitle}
                          </h4>

                          <p className="text-stone-300 font-light text-xs lg:text-sm leading-relaxed mb-8">
                            {project.longDescription}
                          </p>
                        </div>

                        {/* Tech Stack tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map(tech => (
                            <span
                              key={tech}
                              className="font-mono text-[9px] tracking-wide px-2.5 py-1 rounded bg-stone-950 border border-white/5 text-stone-400 group-hover:text-stone-100 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Interactive metrics and links */}
                      <div className="md:w-[40%] flex flex-col justify-between items-stretch bg-stone-950/40 border border-white/5 p-6 rounded-2xl relative z-10">
                        {/* Stats panel */}
                        <div>
                          <div className="flex items-center space-x-1.5 mb-6 text-slate-500">
                            <Activity size={12} className="text-stone-400" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">
                              Metrics Profile
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                            {project.stats.map(stat => (
                              <div key={stat.label} className="border-b border-white/5 pb-2">
                                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider block mb-0.5">
                                  {stat.label}
                                </span>
                                <span className="font-sans font-bold text-sm text-stone-200">
                                  {stat.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Direct link actions */}
                        <div className="flex space-x-3 mt-8">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-grow flex items-center justify-center space-x-1.5 py-2 px-4 rounded bg-stone-900 hover:bg-white/5 border border-white/10 text-stone-300 hover:text-stone-100 transition-all duration-300 font-mono text-[10px] uppercase tracking-widest cursor-pointer"
                            id={`project-${project.id}-github`}
                          >
                            <Github size={13} />
                            <span>Repository</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 px-3 rounded bg-stone-100 hover:bg-stone-200 text-stone-900 transition-all duration-300 flex items-center justify-center cursor-pointer"
                            id={`project-${project.id}-demo`}
                          >
                            <ExternalLink size={13} />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Indicator slider */}
          <div className="px-16 max-w-7xl w-full mx-auto relative z-20 flex justify-start items-center">
            <div className="w-56 h-[2px] bg-stone-900 overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-stone-300 origin-left"
              />
            </div>
            <span className="font-mono text-[10px] text-stone-500 ml-4">
              Story progress: {Math.min(100, Math.round(scrollYProgress.get() * 100))}%
            </span>
          </div>

        </div>
      </div>

      {/* Mobile Stack Container (Reflowed fallback for visual clarity and accessibility) */}
      <div className="block md:hidden py-24 px-6 relative z-10 border-t border-white/5">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-4">
            <FolderGit2 size={10} className="text-stone-500" />
            <span>Showcase</span>
          </div>
          <h2 className="font-serif font-light text-3xl tracking-tight italic text-stone-100 mb-2">
            Selected Works
          </h2>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            A vertical deep-dive exploration of active design patterns and full-stack software achievements.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#121212]/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone-300" />
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-stone-500">
                    0{index + 1} / 0{PROJECTS.length}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-stone-400">
                    Production
                  </span>
                </div>

                <h3 className="font-serif italic font-light text-xl text-stone-100 mb-1">
                  {project.title}
                </h3>
                <h4 className="font-sans text-xs text-stone-400 mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </h4>

                <p className="text-stone-300 font-light text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stats & Actions */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="grid grid-cols-3 gap-2">
                  {project.stats.slice(0, 3).map(stat => (
                    <div key={stat.label} className="text-center p-2 rounded bg-stone-950/60 border border-white/5">
                      <span className="font-mono text-[8px] text-stone-500 block">
                        {stat.label}
                      </span>
                      <span className="font-sans font-bold text-xs text-stone-200">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center space-x-1.5 py-2 px-3 rounded bg-stone-900 border border-white/10 text-stone-300 font-mono text-[10px] uppercase tracking-widest"
                    id={`mobile-project-${project.id}-github`}
                  >
                    <Github size={12} />
                    <span>Repo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center space-x-1.5 py-2 px-3 rounded bg-stone-100 hover:bg-stone-200 text-stone-900 font-mono text-[10px] uppercase tracking-widest font-semibold"
                    id={`mobile-project-${project.id}-demo`}
                  >
                    <ExternalLink size={12} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Terminal, Calendar, Award, FolderGit2, Mail, Compass, Sparkles } from 'lucide-react';

// Components
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TerminalSection from './components/TerminalSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Tracking page scroll progress for top narrative indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position to update floating navigation states
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero-root', name: 'hero' },
        { id: 'journey-section', name: 'journey' },
        { id: 'skills-section', name: 'skills' },
        { id: 'projects-section', name: 'projects' },
        { id: 'terminal-section', name: 'terminal' },
        { id: 'contact-section', name: 'contact' }
      ];

      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#0a0a0a] font-sans antialiased text-stone-100 min-h-screen">
      
      {/* Narrative Progress Tracker (Sticky top line) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-stone-300 origin-left z-50 shadow-sm"
      />

      {/* Floating Side Rail Indicator */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-6 items-center bg-stone-900/80 border border-white/10 p-4 rounded-full backdrop-blur-md select-none shadow-xl">
        <span className="font-mono text-[8px] text-stone-500 tracking-widest vertical-text uppercase mb-2">
          Narrative
        </span>
        {[
          { name: 'hero', id: 'hero-root', icon: <Compass size={14} />, label: 'Home' },
          { name: 'journey', id: 'journey-section', icon: <Calendar size={14} />, label: 'Journey' },
          { name: 'skills', id: 'skills-section', icon: <Award size={14} />, label: 'Skills' },
          { name: 'projects', id: 'projects-section', icon: <FolderGit2 size={14} />, label: 'Projects' },
          { name: 'terminal', id: 'terminal-section', icon: <Terminal size={14} />, label: 'Terminal' },
          { name: 'contact', id: 'contact-section', icon: <Mail size={14} />, label: 'Contact' }
        ].map((sec) => {
          const isActive = activeSection === sec.name;
          return (
            <div key={sec.name} className="relative group flex items-center justify-center">
              {/* Tooltip Label */}
              <span className="absolute right-10 px-2.5 py-1 rounded bg-[#121212] border border-white/10 text-[9px] font-mono uppercase tracking-wider text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
                {sec.label}
              </span>

              {/* Indicator bullet button */}
              <button
                onClick={() => scrollToSection(sec.id)}
                className={`p-2.5 rounded-full transition-all duration-300 relative border cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-stone-100 border-stone-100 text-stone-900 shadow-md'
                    : 'bg-stone-950/60 border-white/5 text-stone-500 hover:text-stone-300 hover:border-white/10'
                }`}
                id={`floating-nav-btn-${sec.name}`}
              >
                {sec.icon}
              </button>
            </div>
          );
        })}
      </nav>

      {/* Chapters content flow */}
      <div className="relative w-full">
        <HeroSection
          onExploreClick={() => scrollToSection('journey-section')}
          onTerminalClick={() => scrollToSection('terminal-section')}
        />

        <JourneySection />

        <SkillsSection />

        <ProjectsSection />

        <TerminalSection />

        <ContactSection />
      </div>

    </div>
  );
}

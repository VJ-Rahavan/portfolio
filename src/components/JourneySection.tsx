import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Calendar, Briefcase, GraduationCap, Star, Award } from 'lucide-react';
import { TIMELINE } from '../data';

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scrollytelling scroll linking for the vertical progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="journey-section"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 px-6 bg-[#0a0a0a] overflow-hidden border-t border-white/5"
    >
      {/* Background visual detail */}
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-stone-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-stone-900 border border-white/10 text-[9px] font-sans uppercase tracking-[0.3em] text-stone-400 font-medium mb-4"
          >
            <Calendar size={10} className="text-stone-500" />
            <span>Chronology</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-3xl sm:text-5xl tracking-tight italic text-stone-100 mb-4"
          >
            My Professional Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-400 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed"
          >
            A narrative of engineering milestones, academic research, and technical leadership across diverse environments.
          </motion.p>
        </div>

        {/* Timeline Frame */}
        <div className="relative mt-12 sm:mt-16">
          
          {/* Vertical Track (Base Dull Line) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-stone-800/60 -translate-x-1/2" />

          {/* Scrolling Vertical Line (Elegant Minimalist Fill) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1.5px] bg-stone-300 -translate-x-1/2 origin-top"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16 sm:space-y-24 relative">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const isWork = item.type === 'work';

              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row relative items-start ${
                    isEven ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  {/* Elegant timeline node dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center bg-stone-900 text-stone-300 shadow-md hover:border-stone-400 hover:text-stone-100 transition-colors"
                    >
                      {isWork ? <Briefcase size={14} /> : <GraduationCap size={15} />}
                    </motion.div>
                  </div>

                  {/* Narrative Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-10 text-left' : 'sm:pl-10 text-left'
                  }`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -40 : 40,
                        y: 15
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', damping: 25, stiffness: 80, delay: 0.1 }}
                      className="bg-[#121212]/40 border border-white/10 hover:border-stone-700 hover:shadow-2xl hover:shadow-white/5 p-6 sm:p-8 rounded-2xl transition-all duration-300 relative group"
                    >
                      {/* Elegant visual line on hover */}
                      <div className={`absolute top-0 bottom-0 w-[2px] transition-all duration-300 rounded-full scale-y-50 group-hover:scale-y-100 origin-center ${
                        isEven ? 'right-0' : 'left-0'
                      } bg-stone-400`} />

                      {/* Timeline Header Info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded bg-stone-950 border border-white/10 text-stone-300">
                          {item.year}
                        </span>
                        
                        <div className="flex items-center space-x-1.5 text-stone-500">
                          <span className="flex h-1.5 w-1.5 rounded-full bg-stone-500" />
                          <span className="font-mono text-[10px] tracking-wider uppercase font-medium">
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="font-serif italic font-light text-lg sm:text-xl text-stone-100 group-hover:text-stone-200 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h4 className="font-sans font-medium text-xs sm:text-sm text-stone-400 mb-4">
                        {item.organization}
                      </h4>

                      {/* Description Text */}
                      <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Technologies Badges */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.technologies.map(tech => (
                            <span
                              key={tech}
                              className="font-mono text-[9px] tracking-wide px-2 py-0.5 rounded-md bg-stone-950 border border-white/5 text-stone-400 hover:text-stone-100 hover:border-white/20 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

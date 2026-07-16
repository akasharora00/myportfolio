import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function EditorContent({ activeFile, setActiveFile, isProgrammaticScroll }) {
  const scrollContainerRef = useRef(null);

  // Scroll spy effect to highlight tabs as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop + 140; // trigger offset height

      const sections = [
        { id: 'about-section', file: 'About.md' },
        { id: 'projects-section', file: 'Projects.jsx' },
        { id: 'skills-section', file: 'Skills.json' },
        { id: 'experience-section', file: 'Experience.ts' },
        { id: 'resume-section', file: 'Resume.pdf' },
        { id: 'contact-section', file: 'Contact.jsx' }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            if (activeFile !== section.file) {
              setActiveFile(section.file);
            }
            break;
          }
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeFile, setActiveFile, isProgrammaticScroll]);

  // Framer Motion entry configurations for viewport scrolling
  const scrollAnimationConfig = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div 
      id="editor-scroll-container"
      ref={scrollContainerRef}
      className="flex-1 bg-vscode-editor overflow-y-auto relative w-full h-full scroll-smooth select-text"
    >
      <motion.div 
        id="about-section" 
        className="border-b border-vscode-border/30"
        {...scrollAnimationConfig}
      >
        <About activeFile={activeFile} setActiveFile={setActiveFile} startLine={1} />
      </motion.div>
      
      <motion.div 
        id="projects-section" 
        className="border-b border-vscode-border/30"
        {...scrollAnimationConfig}
      >
        <Projects startLine={25} />
      </motion.div>

      <motion.div 
        id="skills-section" 
        className="border-b border-vscode-border/30"
        {...scrollAnimationConfig}
      >
        <Skills startLine={53} />
      </motion.div>

      <motion.div 
        id="experience-section" 
        className="border-b border-vscode-border/30"
        {...scrollAnimationConfig}
      >
        <Experience startLine={93} />
      </motion.div>

      <motion.div 
        id="resume-section" 
        className="border-b border-vscode-border/30"
        {...scrollAnimationConfig}
      >
        <Resume startLine={141} />
      </motion.div>

      <motion.div 
        id="contact-section" 
        className="pb-12"
        {...scrollAnimationConfig}
      >
        <Contact startLine={171} />
      </motion.div>
    </div>
  );
}

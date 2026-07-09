import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function EditorContent({ activeFile, setActiveFile }) {
  const renderSection = () => {
    switch (activeFile) {
      case 'About.md':
        return <About setActiveFile={setActiveFile} />;
      case 'Projects.jsx':
        return <Projects />;
      case 'Skills.json':
        return <Skills />;
      case 'Resume.pdf':
        return <Resume />;
      case 'Contact.jsx':
        return <Contact />;
      default:
        return <About setActiveFile={setActiveFile} />;
    }
  };

  return (
    <div className="flex-1 bg-vscode-editor overflow-hidden relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFile}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import WindowHeader from './components/WindowHeader';
import Explorer from './components/Explorer';
import EditorTabs from './components/EditorTabs';
import EditorContent from './components/EditorContent';
import StatusBar from './components/StatusBar';
import CursorParticles from './components/CursorParticles';

export default function App() {
  const [activeFile, setActiveFile] = useState('About.md');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vscode-theme') || 'dark';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [explorerVisible, setExplorerVisible] = useState(true);

  // Programmatic scroll lock ref to prevent the scroll spy from thrashing tabs during click jumps
  const isProgrammaticScroll = useRef(false);

  // Sync theme directly with document.documentElement for global transitions
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('vscode-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Navigates smoothly by scrolling to the section element inside the Editor scroll container
  const handleNavigate = (filename) => {
    setActiveFile(filename);
    isProgrammaticScroll.current = true;
    
    const fileToIdMap = {
      'About.md': 'about-section',
      'Projects.jsx': 'projects-section',
      'Skills.json': 'skills-section',
      'Experience.ts': 'experience-section',
      'Resume.pdf': 'resume-section',
      'Contact.jsx': 'contact-section'
    };

    const sectionId = fileToIdMap[filename];
    const container = document.getElementById('editor-scroll-container');
    const target = document.getElementById(sectionId);

    if (container && target) {
      container.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
      
      // Clear programmatic scroll lock after scroll animation finishes (~800ms)
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);
    }
  };

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden relative select-none bg-vscode-editor text-vscode-textPrimary font-prose ${theme === 'light' ? 'light' : ''}`}>
      
      {/* Subtle Premium Background Glowing Grid (Absolute Z-0) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0 animate-grid"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-vscode-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8000ms] z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-vscode-secondary/5 rounded-full blur-3xl pointer-events-none animate-pulse duration-[10000ms] z-0"></div>

      {/* Code Symbols Particle Cursor Effect */}
      <CursorParticles />

      {/* Main Layout Elements (Z-10) */}
      <div className="relative flex flex-col h-full w-full z-10 bg-transparent">
        {/* Top Header Bar */}
        <WindowHeader 
          theme={theme} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar} 
          activeFile={activeFile}
        />

        {/* Main Workspace Row */}
        <div className="flex-1 flex overflow-hidden relative w-full">
          {/* Explorer sidebar (left panel) */}
          <Explorer 
            activeFile={activeFile} 
            setActiveFile={setActiveFile} 
            onNavigate={handleNavigate}
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
            explorerVisible={explorerVisible}
            setExplorerVisible={setExplorerVisible}
          />

          {/* Editor Area (right panel) */}
          <main className="flex-1 flex flex-col overflow-hidden bg-vscode-editor border-l border-vscode-border">
            {/* Scrollable ribbon file tabs */}
            <EditorTabs 
              activeFile={activeFile} 
              setActiveFile={setActiveFile} 
              onNavigate={handleNavigate}
            />

            {/* Single scrollable viewport render block containing all sections */}
            <EditorContent 
              activeFile={activeFile} 
              setActiveFile={setActiveFile}
              isProgrammaticScroll={isProgrammaticScroll}
            />
          </main>
        </div>

        {/* Bottom Status Bar */}
        <StatusBar />
      </div>
    </div>
  );
}

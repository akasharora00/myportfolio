import React, { useState, useEffect } from 'react';
import WindowHeader from './components/WindowHeader';
import Explorer from './components/Explorer';
import EditorTabs from './components/EditorTabs';
import EditorContent from './components/EditorContent';
import StatusBar from './components/StatusBar';

export default function App() {
  const [activeFile, setActiveFile] = useState('About.md');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vscode-theme') || 'dark';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [explorerVisible, setExplorerVisible] = useState(true);

  // Sync theme directly with document.documentElement for robust global style propagation
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

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden select-none bg-vscode-editor text-vscode-textPrimary font-prose">
      {/* Top Header Bar */}
      <WindowHeader 
        theme={theme} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar} 
        activeFile={activeFile}
      />

      {/* Main Panel Area */}
      <div className="flex-1 flex overflow-hidden relative w-full">
        {/* Explorer sidebar (left panel) */}
        <Explorer 
          activeFile={activeFile} 
          setActiveFile={setActiveFile} 
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          explorerVisible={explorerVisible}
          setExplorerVisible={setExplorerVisible}
        />

        {/* Editor Area (right panel) */}
        <main className="flex-1 flex flex-col overflow-hidden bg-vscode-editor border-l border-vscode-border">
          {/* File tabs */}
          <EditorTabs 
            activeFile={activeFile} 
            setActiveFile={setActiveFile} 
          />

          {/* Render content panel */}
          <EditorContent 
            activeFile={activeFile} 
            setActiveFile={setActiveFile}
          />
        </main>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscMarkdown, VscJson, VscCode } from 'react-icons/vsc';
import { FaFilePdf, FaReact } from 'react-icons/fa';

export default function EditorTabs({ activeFile, setActiveFile, onNavigate }) {
  const tabsContainerRef = useRef(null);

  const tabs = [
    { name: 'About.md', icon: <VscMarkdown className="text-[#3891d6] w-3.5 h-3.5" /> },
    { name: 'Projects.jsx', icon: <FaReact className="text-[#00d8ff] w-3.5 h-3.5" /> },
    { name: 'Skills.json', icon: <VscJson className="text-[#cbcb41] w-3.5 h-3.5" /> },
    { name: 'Experience.ts', icon: <VscCode className="text-[#3178c6] w-3.5 h-3.5" /> },
    { name: 'Resume.pdf', icon: <FaFilePdf className="text-[#e2574c] w-3.5 h-3.5" /> },
    { name: 'Contact.jsx', icon: <FaReact className="text-[#00d8ff] w-3.5 h-3.5" /> }
  ];

  // Auto-scroll active tab into view
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.querySelector('[data-active="true"]');
      if (activeTabElement) {
        activeTabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeFile]);

  const handleTabClick = (filename) => {
    if (onNavigate) {
      onNavigate(filename);
    } else {
      setActiveFile(filename);
    }
  };

  return (
    <div 
      ref={tabsContainerRef}
      className="h-10 bg-vscode-sidebar border-b border-vscode-border flex items-center overflow-x-auto select-none text-[11px] md:text-xs font-vscode shrink-0"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex h-full">
        {tabs.map((tab) => {
          const isActive = activeFile === tab.name;
          return (
            <button
              key={tab.name}
              data-active={isActive}
              onClick={() => handleTabClick(tab.name)}
              className={`h-full px-4 flex items-center border-r border-vscode-border cursor-pointer relative group transition-all duration-300 ${
                isActive 
                  ? 'bg-vscode-editor text-vscode-textPrimary font-semibold opacity-100 shadow-[inset_0_2px_0_0_#3B82F6]' 
                  : 'bg-vscode-tabInactive text-vscode-textSecondary opacity-65 hover:opacity-100 hover:bg-vscode-editor/40'
              }`}
            >
              {/* Active Tab Accent Line */}
              {isActive && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-vscode-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <span className="mr-2 flex items-center">{tab.icon}</span>
              <span className="mr-4">{tab.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

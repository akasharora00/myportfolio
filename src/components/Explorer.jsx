import React, { useState } from 'react';
import { 
  VscFiles, VscSourceControl, VscSettingsGear, VscAccount, 
  VscChevronDown, VscChevronRight, VscMarkdown, VscJson, VscCode, 
  VscSearch, VscDebugAlt, VscExtensions
} from 'react-icons/vsc';
import { FaFilePdf, FaReact } from 'react-icons/fa';

export default function Explorer({ 
  activeFile, 
  setActiveFile, 
  onNavigate,
  isOpen, 
  setIsOpen, 
  explorerVisible, 
  setExplorerVisible 
}) {
  const [folderExpanded, setFolderExpanded] = useState(true);

  const files = [
    { name: 'About.md', icon: <VscMarkdown className="text-[#3891d6] w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" /> },
    { name: 'Projects.jsx', icon: <FaReact className="text-[#00d8ff] w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" /> },
    { name: 'Skills.json', icon: <VscJson className="text-[#cbcb41] w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" /> },
    { name: 'Experience.ts', icon: <VscCode className="text-[#3178c6] w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" /> },
    { name: 'Resume.pdf', icon: <FaFilePdf className="text-[#e2574c] w-[16px] h-[16px] transition-transform duration-200 group-hover:scale-110" /> },
    { name: 'Contact.jsx', icon: <FaReact className="text-[#00d8ff] w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110" /> }
  ];

  const handleFileClick = (filename) => {
    if (onNavigate) {
      onNavigate(filename);
    } else {
      setActiveFile(filename);
    }
    if (window.innerWidth < 1024) {
      setIsOpen(false); // Close mobile drawer
    }
  };

  const SidebarContent = () => (
    <div className="flex h-full font-vscode select-none text-xs">
      {/* Activity Bar - Left Rails */}
      <div className="w-12 bg-vscode-sidebar flex flex-col justify-between items-center py-2 border-r border-vscode-border">
        {/* Top Icons */}
        <div className="flex flex-col space-y-4 w-full items-center">
          <button 
            onClick={() => setExplorerVisible(!explorerVisible)}
            aria-label="Toggle Explorer Panel"
            className={`w-full py-2.5 flex justify-center border-l-2 cursor-pointer transition-all duration-200 relative group ${
              explorerVisible 
                ? 'border-vscode-primary text-vscode-textPrimary' 
                : 'border-transparent text-vscode-textSecondary hover:text-vscode-textPrimary'
            }`}
          >
            <VscFiles className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Explorer
            </span>
          </button>
          
          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscSearch className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Search (Ctrl+Shift+F)
            </span>
          </div>

          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscSourceControl className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Source Control
            </span>
            <div className="absolute top-1.5 right-1.5 bg-vscode-primary text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center scale-90 shadow-sm shadow-vscode-primary/50">
              1
            </div>
          </div>

          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscDebugAlt className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Run and Debug
            </span>
          </div>

          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscExtensions className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Extensions
            </span>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-col space-y-4 w-full items-center">
          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscAccount className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Profile
            </span>
          </div>
          <div className="w-full py-2.5 flex justify-center text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/30 border-l-2 border-transparent transition-all duration-200 cursor-pointer group relative">
            <VscSettingsGear className="w-[22px] h-[22px] transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute left-14 bg-vscode-sidebar text-vscode-textPrimary text-[10px] px-2 py-1 rounded border border-vscode-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
              Settings
            </span>
          </div>
        </div>
      </div>

      {/* Explorer Tree Panel */}
      {explorerVisible && (
        <div className="w-40 bg-vscode-sidebar border-r border-vscode-border flex flex-col h-full transition-all duration-300 animate-slide-in">
          {/* Panel Title */}
          <div className="h-10 px-4 flex items-center justify-between text-vscode-textSecondary uppercase font-bold tracking-wider text-[10px] border-b border-vscode-border/50">
            <span>Explorer</span>
          </div>

          {/* Directory Tree */}
          <div className="flex-1 overflow-y-auto py-2">
            <div 
              onClick={() => setFolderExpanded(!folderExpanded)}
              className="flex items-center px-2.5 py-1.5 cursor-pointer text-vscode-textPrimary hover:bg-vscode-tabInactive/35 transition-colors font-bold rounded-sm mx-1"
            >
              {folderExpanded ? (
                <VscChevronDown className="w-4 h-4 mr-1.5 text-vscode-textSecondary transition-transform" />
              ) : (
                <VscChevronRight className="w-4 h-4 mr-1.5 text-vscode-textSecondary transition-transform" />
              )}
              <span className="uppercase tracking-wider text-[9px] text-vscode-textSecondary">PORTFOLIO</span>
            </div>

            {/* Folder Items */}
            {folderExpanded && (
              <ul className="pl-3.5 mt-1 space-y-0.5">
                {files.map((file) => {
                  const isActive = activeFile === file.name;
                  return (
                    <li key={file.name}>
                      <button
                        onClick={() => handleFileClick(file.name)}
                        className={`w-[95%] flex items-center px-2.5 py-1.5 cursor-pointer transition-all duration-200 text-left border-l-2 rounded-r-md group ${
                          isActive
                            ? 'bg-vscode-primary/10 text-vscode-textPrimary border-vscode-primary shadow-[inset_1px_0_12px_rgba(59,130,246,0.15)] font-semibold'
                            : 'border-transparent text-vscode-textSecondary hover:text-vscode-textPrimary hover:bg-vscode-tabInactive/25'
                        }`}
                      >
                        <span className="mr-2.5 flex items-center">{file.icon}</span>
                        <span className="truncate group-hover:translate-x-0.5 transition-transform duration-200">{file.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="hidden lg:flex h-full select-none z-20">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          {/* Overlay Background */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          ></div>
          
          {/* Slide-out Panel */}
          <div className="relative flex flex-col bg-vscode-sidebar h-full z-50 shadow-2xl animate-slide-in">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}

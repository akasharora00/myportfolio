import React, { useState, useEffect } from 'react';
import { VscGitBranch, VscSync, VscError, VscWarning, VscBell } from 'react-icons/vsc';

export default function StatusBar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="h-6 bg-gradient-to-r from-vscode-primary to-vscode-secondary text-white flex items-center justify-between px-3 select-none text-[11px] font-vscode w-full z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      {/* Left items */}
      <div className="flex items-center space-x-3.5">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:bg-white/10 px-1.5 h-6 transition-colors space-x-1 cursor-pointer"
        >
          <VscGitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </a>
        
        <div className="flex items-center hover:bg-white/10 px-1.5 h-6 transition-colors space-x-1 cursor-pointer">
          <VscSync className="w-3 h-3 animate-spin duration-3000" />
        </div>

        <div className="hidden md:flex items-center space-x-2 text-[10px]">
          <div className="flex items-center space-x-0.5 hover:bg-white/10 px-1 h-6 transition-colors cursor-pointer">
            <VscError className="w-3 h-3 text-red-100" />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-0.5 hover:bg-white/10 px-1 h-6 transition-colors cursor-pointer">
            <VscWarning className="w-3 h-3 text-yellow-100" />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Center text */}
      <div className="hidden sm:block text-white/90 select-none text-[10px]">
        Inspired by VS Code · Crafted for recruiters
      </div>

      {/* Right items */}
      <div className="flex items-center space-x-3 h-full">
        <div className="hover:bg-white/10 px-2 h-full flex items-center transition-colors cursor-pointer hidden md:block">
          UTF-8
        </div>
        <div className="hover:bg-white/10 px-2 h-full flex items-center transition-colors cursor-pointer">
          React
        </div>
        <div className="hover:bg-white/10 px-2 h-full flex items-center transition-colors cursor-pointer">
          Tailwind
        </div>
        <div className="hover:bg-white/10 px-2 h-full flex items-center transition-colors cursor-pointer hidden sm:block">
          Portfolio v2.0
        </div>
        <div className="hover:bg-white/10 px-2.5 h-full flex items-center transition-colors cursor-pointer font-mono font-bold">
          {time}
        </div>
        <div className="hover:bg-white/10 px-1.5 h-full flex items-center transition-colors cursor-pointer">
          <VscBell className="w-3.5 h-3.5" />
        </div>
      </div>
    </footer>
  );
}

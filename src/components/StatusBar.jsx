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
    <footer className="h-6 bg-gradient-to-r from-vscode-primary to-vscode-secondary text-white flex items-center justify-between select-none text-[11px] font-vscode w-full z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] shrink-0">
      
      {/* Left Side Group */}
      <div className="flex items-center h-full">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:bg-white/10 px-3 h-full transition-colors gap-1 cursor-pointer select-none font-bold"
        >
          <VscGitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </a>
        
        <div className="flex items-center justify-center hover:bg-white/10 px-2 h-full transition-colors cursor-pointer">
          <VscSync className="w-3 h-3 animate-[spin_4s_linear_infinite]" />
        </div>

        <div className="flex items-center hover:bg-white/10 px-2.5 h-full transition-colors gap-1 cursor-pointer">
          <VscError className="w-3.5 h-3.5 text-red-100" />
          <span>0</span>
        </div>
        
        <div className="flex items-center hover:bg-white/10 px-2.5 h-full transition-colors gap-1 cursor-pointer">
          <VscWarning className="w-3.5 h-3.5 text-yellow-100" />
          <span>0</span>
        </div>
      </div>

      {/* Right Side Group */}
      <div className="flex items-center h-full">
        <div className="hover:bg-white/10 px-3 h-full flex items-center transition-colors cursor-pointer hidden md:flex">
          UTF-8
        </div>
        <div className="hover:bg-white/10 px-3 h-full flex items-center transition-colors cursor-pointer">
          React
        </div>
        <div className="hover:bg-white/10 px-3 h-full flex items-center transition-colors cursor-pointer">
          Tailwind
        </div>
        <div className="hover:bg-white/10 px-3 h-full flex items-center transition-colors cursor-pointer hidden sm:flex font-medium">
          Portfolio v2.0
        </div>
        <div className="hover:bg-white/10 px-3.5 h-full flex items-center transition-colors cursor-pointer font-mono font-bold">
          {time}
        </div>
        <div className="hover:bg-white/10 px-3 h-full flex items-center justify-center transition-colors cursor-pointer">
          <VscBell className="w-3.5 h-3.5" />
        </div>
      </div>

    </footer>
  );
}

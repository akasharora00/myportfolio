import React from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { VscMenu } from 'react-icons/vsc';

export default function WindowHeader({ theme, toggleTheme, toggleSidebar, activeFile }) {
  return (
    <header className="h-10 bg-vscode-sidebar border-b border-vscode-border flex items-center justify-between px-3 select-none text-vscode-textPrimary font-prose text-xs z-50">
      {/* Left: Window Controls / Mobile Menu */}
      <div className="flex items-center space-x-2 w-1/4">
        {/* Mobile menu trigger */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar Menu"
          className="lg:hidden p-1 rounded hover:bg-vscode-tabInactive text-vscode-textSecondary hover:text-vscode-textPrimary transition-colors mr-1 cursor-pointer"
        >
          <VscMenu className="w-4 h-4" />
        </button>

        {/* Decorative Mac window buttons */}
        <div className="hidden md:flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border-[#DEA123] shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border-[#1AAB29] shadow-sm"></div>
        </div>
      </div>

      {/* Center: Workspace File Path Title */}
      <div className="flex-1 text-center font-vscode text-vscode-textSecondary truncate px-2 text-[10px] sm:text-xs">
        {activeFile ? `${activeFile} - ` : ''}portfolio - Visual Studio Code
      </div>

      {/* Right: Social Profiles & Theme Toggle */}
      <div className="flex items-center space-x-1.5 w-1/4 justify-end">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-1.5 rounded text-vscode-textSecondary hover:text-vscode-primary hover:bg-vscode-tabInactive transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] cursor-pointer"
        >
          <FaGithub className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-1.5 rounded text-vscode-textSecondary hover:text-vscode-primary hover:bg-vscode-tabInactive transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] cursor-pointer"
        >
          <FaLinkedin className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="p-1.5 rounded text-vscode-textSecondary hover:text-vscode-primary hover:bg-vscode-tabInactive transition-all duration-300 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] cursor-pointer"
        >
          {theme === 'dark' ? (
            <FaSun className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse" />
          ) : (
            <FaMoon className="w-3.5 h-3.5 text-vscode-primary" />
          )}
        </button>
      </div>
    </header>
  );
}

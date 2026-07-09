import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { VscFileCode } from 'react-icons/vsc';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ 
        y: -6, 
        boxShadow: '0 20px 30px -15px rgba(0,0,0,0.8), 0 0 20px rgba(59, 130, 246, 0.25)',
        borderColor: 'rgba(59, 130, 246, 0.4)'
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-vscode-card border border-vscode-border rounded-lg overflow-hidden flex flex-col h-full font-vscode group transition-colors duration-300"
    >
      {/* Editor Header Representation */}
      <div className="h-8 bg-vscode-tabInactive/70 border-b border-vscode-border/50 px-3 flex items-center justify-between text-vscode-textSecondary text-[10px] select-none">
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#FF5F56]/60 transition-colors"></div>
          <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#FFBD2E]/60 transition-colors"></div>
          <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#27C93F]/60 transition-colors"></div>
        </div>
        <div className="flex items-center space-x-1.5 bg-vscode-editor border-x border-t border-vscode-border/30 px-3 h-full pt-1 truncate max-w-[120px] rounded-t-md font-mono">
          <VscFileCode className="text-vscode-primary text-xs flex-shrink-0 group-hover:text-vscode-highlight transition-colors" />
          <span className="truncate text-vscode-textSecondary group-hover:text-vscode-textPrimary transition-colors">{project.name}.js</span>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Code Area / Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-vscode-primary font-bold text-sm mb-2.5 group-hover:text-vscode-highlight transition-colors">{project.name}</h3>
          
          <p className="text-vscode-textSecondary text-xs leading-relaxed font-prose mb-5 min-h-[50px] group-hover:text-vscode-textPrimary/90 transition-colors">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] font-mono bg-vscode-editor border border-vscode-border/80 text-vscode-textSecondary group-hover:text-vscode-textPrimary px-2 py-0.5 rounded-full transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-3 border-t border-vscode-border/30">
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[11px] text-vscode-textSecondary hover:text-vscode-primary transition-colors cursor-pointer group/link"
            >
              <FaGithub className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
              <span>Source Code</span>
            </a>
            
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[11px] text-vscode-highlight hover:text-vscode-primary transition-colors cursor-pointer group/link"
            >
              <FaExternalLinkAlt className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

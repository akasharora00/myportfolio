import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

export default function Projects({ startLine = 25 }) {
  const lines = Array.from({ length: 28 }, (_, i) => i + startLine);

  return (
    <div className="flex w-full font-vscode relative min-h-[calc(100vh-104px)]">
      {/* Line Numbers */}
      <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 font-mono opacity-40 overflow-hidden">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full pl-6 sm:pl-16 pr-6 py-5">
        {/* Header */}
        <div className="mb-4 font-mono text-xs text-vscode-textSecondary select-none">
          <p className="syntax-comment">
            // src/components/sections/Projects.jsx
          </p>
          <p className="syntax-comment">
            // Browse a selection of my latest software engineering projects
          </p>
        </div>

        {/* Fake import statement */}
        <h2 className="text-3xl font-bold mb-8 flex items-center flex-wrap gap-1">
          <span className="syntax-keyword">import</span>

          <span className="text-vscode-textPrimary font-mono">
            {"{"}
          </span>

          <span className="text-vscode-primary">Projects</span>

          <span className="text-vscode-textPrimary font-mono">
            {"}"}
          </span>

          <span className="syntax-keyword">from</span>

          <span className="syntax-string">"./showcase"</span>

          <span className="syntax-punctuation">;</span>
        </h2>

        {/* Project Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
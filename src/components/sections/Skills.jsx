import React from 'react';
import { skills } from '../../data/skills';

export default function Skills() {
  // Generate line numbers for the gutter based on estimate line length
  const lines = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <div className="flex h-full select-text font-vscode">
      {/* Editor Line Numbers Gutter */}
      <div className="hidden sm:flex flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 w-12 font-mono text-opacity-50">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Comment block header */}
        <div className="mb-4 font-mono text-xs text-vscode-textSecondary select-none">
          <span className="syntax-comment">// src/data/skills.json</span>
          <br />
          <span className="syntax-comment">// Syntax-highlighted technical skillset</span>
        </div>

        <pre className="font-mono text-[11px] sm:text-xs md:text-sm leading-6 whitespace-pre text-vscode-textPrimary select-text">
          <span className="syntax-punctuation">{'{'}</span>
          {"\n  "}
          <span className="syntax-key">"languages"</span>
          <span className="syntax-punctuation">:</span>
          {" "}
          <span className="syntax-punctuation">[</span>
          {skills.languages.map((skill, index) => (
            <React.Fragment key={skill}>
              {"\n    "}
              <span className="syntax-string">"{skill}"</span>
              {index < skills.languages.length - 1 ? <span className="syntax-punctuation">,</span> : ''}
            </React.Fragment>
          ))}
          {"\n  "}
          <span className="syntax-punctuation">]</span>
          <span className="syntax-punctuation">,</span>

          {"\n  "}
          <span className="syntax-key">"frontend"</span>
          <span className="syntax-punctuation">:</span>
          {" "}
          <span className="syntax-punctuation">[</span>
          {skills.frontend.map((skill, index) => (
            <React.Fragment key={skill}>
              {"\n    "}
              <span className="syntax-string">"{skill}"</span>
              {index < skills.frontend.length - 1 ? <span className="syntax-punctuation">,</span> : ''}
            </React.Fragment>
          ))}
          {"\n  "}
          <span className="syntax-punctuation">]</span>
          <span className="syntax-punctuation">,</span>

          {"\n  "}
          <span className="syntax-key">"backend"</span>
          <span className="syntax-punctuation">:</span>
          {" "}
          <span className="syntax-punctuation">[</span>
          {skills.backend.map((skill, index) => (
            <React.Fragment key={skill}>
              {"\n    "}
              <span className="syntax-string">"{skill}"</span>
              {index < skills.backend.length - 1 ? <span className="syntax-punctuation">,</span> : ''}
            </React.Fragment>
          ))}
          {"\n  "}
          <span className="syntax-punctuation">]</span>
          <span className="syntax-punctuation">,</span>

          {"\n  "}
          <span className="syntax-key">"tools"</span>
          <span className="syntax-punctuation">:</span>
          {" "}
          <span className="syntax-punctuation">[</span>
          {skills.tools.map((skill, index) => (
            <React.Fragment key={skill}>
              {"\n    "}
              <span className="syntax-string">"{skill}"</span>
              {index < skills.tools.length - 1 ? <span className="syntax-punctuation">,</span> : ''}
            </React.Fragment>
          ))}
          {"\n  "}
          <span className="syntax-punctuation">]</span>

          {"\n"}
          <span className="syntax-punctuation">{'}'}</span>
        </pre>
      </div>
    </div>
  );
}

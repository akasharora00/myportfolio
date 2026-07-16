import React from 'react';
import { skills } from '../../data/skills';

export default function Skills({ startLine = 53 }) {
  // Generate line numbers for the gutter based on estimate line length
  const lines = Array.from({ length: 40 }, (_, i) => i + startLine);

  return (
    <div className="flex select-text font-vscode relative min-h-[calc(100vh-104px)]">
      {/* Editor Line Numbers Gutter */}
      <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 font-mono text-opacity-50 overflow-hidden">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pl-6 sm:pl-16 pr-6 py-5">
        {/* Comment block header */}
        <div className="mb-4 font-mono text-xs text-vscode-textSecondary select-none">
          <span className="syntax-comment">// src/data/skills.json</span>
          <br />
          <span className="syntax-comment">// Syntax-highlighted technical skillset</span>
        </div>

        <pre className="font-mono text-[11px] sm:text-xs md:text-sm leading-6 whitespace-pre text-vscode-textPrimary select-text overflow-x-auto">
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

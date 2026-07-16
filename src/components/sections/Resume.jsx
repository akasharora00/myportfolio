import React from "react";
import {
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Resume({ startLine = 141 }) {
  const lines = Array.from({ length: 30 }, (_, i) => i + startLine);

  return (
    <div className="flex font-vscode relative min-h-[calc(100vh-104px)]">
      {/* Line Numbers */}
      <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 font-mono opacity-40 overflow-hidden">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pl-6 sm:pl-16 pr-6 py-5">

        <div className="w-full max-w-md rounded-xl border border-vscode-border bg-vscode-card shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-vscode-border bg-vscode-editor">

            <div className="flex items-center gap-3">
              <FaFilePdf className="text-red-500 text-2xl" />

              <div>
                <h2 className="text-vscode-textPrimary font-semibold">
                  Resume.pdf
                </h2>

                <p className="text-xs text-vscode-textSecondary">
                  PDF Document
                </p>
              </div>
            </div>

            <span className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-semibold">
              PDF
            </span>
          </div>

          {/* Body */}
          <div className="p-8">

            <div className="text-center mb-8">

              <div className="text-6xl mb-3">
                📄
              </div>

              <h2 className="text-2xl font-bold text-vscode-textPrimary">
                Resume.pdf
              </h2>

              <p className="text-vscode-textSecondary text-sm mt-2">
                Last Updated
              </p>

              <p className="text-vscode-primary font-semibold">
                July 2026
              </p>

            </div>

            <div className="border-t border-vscode-border pt-6 space-y-5">

              <div className="flex justify-between">
                <span className="text-vscode-textSecondary">
                  👤 Profession
                </span>

                <span className="text-vscode-textPrimary font-medium">
                  Full Stack Developer
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-vscode-textSecondary">
                  🎓 CGPA
                </span>

                <span className="text-vscode-primary font-semibold">
                  9.3
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-vscode-textSecondary">
                  🏆 Position
                </span>

                <span className="text-vscode-textPrimary">
                  NSS Technical Head
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-vscode-textSecondary">
                  💻 Specialization
                </span>

                <span className="text-vscode-textPrimary">
                  MERN • AI/ML
                </span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">

              <a
                href="/resume.pdf"
                download="Akashdeep_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-vscode-primary py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              >
                <FaDownload />
                Download
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-vscode-border bg-vscode-editor text-vscode-textPrimary font-semibold transition-all duration-300 hover:border-vscode-primary hover:text-vscode-primary"
              >
                <FaExternalLinkAlt />
                View
              </a>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { VscFilePdf } from 'react-icons/vsc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/profile';

function Typewriter() {
  const words = [
    "Full Stack Developer",
    "Java Enthusiast",
    "AI / ML Learner",
    "UI/UX Designer",
    "Canva Designer"
  ];
  
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer;
    const fullText = words[currentWordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(30);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // pause at the end of word
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
      setTypingSpeed(200); // pause before starting next word
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <span className="text-vscode-highlight font-mono font-semibold flex items-center">
      {currentText}
      <span className="border-r-2 border-vscode-highlight h-4 ml-1.5 animate-cursor"></span>
    </span>
  );
}

function AvatarImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <svg className="w-1/2 h-1/2 text-vscode-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  }

  return (
    <img 
      src="/profile/profile.jpg" 
      alt="Akashdeep Profile"
      className="w-full h-full object-cover rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
      onError={() => setHasError(true)}
    />
  );
}

function TechAvatar() {
  return (
    <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] flex items-center justify-center animate-float select-none">
      {/* Outer Rotating Dotted Circle */}
      <svg className="absolute w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#neonGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--vscode-primary)" />
            <stop offset="100%" stopColor="var(--vscode-secondary)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mid Orbit Line */}
      <div className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-vscode-border/50 animate-[spin_15s_linear_infinite_reverse]"></div>

      {/* Glowing Backdrop Ring */}
      <div className="absolute w-[68%] h-[68%] rounded-full bg-gradient-to-tr from-vscode-primary to-vscode-secondary opacity-15 blur-lg animate-pulse"></div>

      {/* Inner Avatar Ring */}
      <div className="absolute w-[70%] h-[70%] rounded-full bg-vscode-card border border-vscode-border flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.25)]">
        <AvatarImage />
      </div>

      {/* Glowing Orbiting particles */}
      <div className="absolute top-[9%] left-1/2 w-2 h-2 rounded-full bg-vscode-primary shadow-[0_0_8px_#3B82F6] animate-ping"></div>
      <div className="absolute bottom-[9%] right-1/2 w-1.5 h-1.5 rounded-full bg-vscode-secondary shadow-[0_0_8px_#8B5CF6] animate-ping delay-1000"></div>
    </div>
  );
}

export default function About({ activeFile, setActiveFile, startLine = 1 }) {
  const lines = Array.from({ length: 24 }, (_, i) => i + startLine);

  const handleResumeClick = () => {
    if (activeFile === 'Resume.pdf') return;
    const target = document.getElementById('resume-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveFile('Resume.pdf');
  };

  return (
    <div className="flex select-text font-vscode">
      {/* Editor Line Numbers Gutter */}
      <div className="hidden sm:flex flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 w-12 font-mono text-opacity-40 overflow-hidden min-h-0">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 py-5 font-prose leading-relaxed text-vscode-textPrimary max-w-none">
        {/* YAML metadata header block */}
        <div className="mb-6 font-mono text-[11px] text-vscode-textSecondary/80 select-none">
          <span className="text-vscode-secondary">---</span>
          <div><span className="text-[#3b82f6]">title</span>: "Akashdeep Portfolio"</div>
          <div><span className="text-[#3b82f6]">status</span>: "Available for Hire"</div>
          <span className="text-vscode-secondary">---</span>
        </div>

        {/* Layout: Text + Avatar */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8">
          {/* Bio text block */}
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 flex items-center justify-center md:justify-start font-prose text-vscode-textPrimary border-b border-vscode-border/30 pb-3">
              <span className="text-vscode-primary mr-2 font-mono text-lg font-normal">#</span>
              Hi, I'm {profile.name}
            </h1>

            {/* Subtitle with dynamic Typewriter */}
            <div className="h-8 mb-6 flex items-center justify-center md:justify-start font-mono text-sm sm:text-base">
              <span className="text-vscode-textSecondary mr-2 font-mono text-xs sm:text-sm font-normal">##</span>
              <span className="text-vscode-textPrimary mr-2 font-semibold">I am a</span>
              <Typewriter />
            </div>

            <div className="p-4 bg-vscode-card border-l-4 border-vscode-primary rounded-sm mb-6 font-vscode text-xs sm:text-sm text-left">
              <span className="font-semibold text-vscode-primary">⚡ Focus:</span> Building scalable, high-performance web applications and solving data structures and algorithms.
            </div>

            <p className="text-sm md:text-base text-vscode-textSecondary mb-8 text-left leading-relaxed">
              {profile.bio}
            </p>

            {/* Re-designed rounded gradient glowing buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={handleResumeClick}
                className="flex items-center space-x-2 px-5 py-2.5 bg-vscode-primary text-white font-mono text-xs font-semibold rounded-full hover:bg-gradient-to-r hover:from-vscode-primary hover:to-vscode-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer animate-none"
              >
                <VscFilePdf className="w-4 h-4" />
                <span>View Resume</span>
              </button>
              
              <a 
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 bg-vscode-card border border-vscode-border text-vscode-textPrimary font-mono text-xs font-semibold rounded-full hover:bg-gradient-to-r hover:from-vscode-card hover:to-vscode-tabInactive hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaGithub className="w-4 h-4 text-vscode-textSecondary" />
                <span>GitHub</span>
              </a>

              <a 
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-2.5 bg-vscode-card border border-vscode-border text-vscode-textPrimary font-mono text-xs font-semibold rounded-full hover:bg-gradient-to-r hover:from-vscode-card hover:to-vscode-tabInactive hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaLinkedin className="w-4 h-4 text-vscode-textSecondary" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Glowing rotating Avatar illustration */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:translate-x-[50px]">
            <TechAvatar />
          </div>
        </div>

        {/* Dynamic page map tags */}
        {/* <div className="border-t border-vscode-border/30 pt-6 select-none">
          <p className="text-[11px] font-mono text-vscode-textSecondary">
            // Navigate the workspace by selecting other files in the Explorer tree:
          </p>
          <div className="flex flex-wrap gap-2 mt-2.5 font-mono text-[10px]">
            <button onClick={() => setActiveFile('Projects.jsx')} className="bg-vscode-card border border-vscode-border/85 text-vscode-primary px-2.5 py-1 rounded-full hover:bg-vscode-primary/10 transition-colors cursor-pointer">
              Projects.jsx
            </button>
            <button onClick={() => setActiveFile('Skills.json')} className="bg-vscode-card border border-vscode-border/85 text-vscode-primary px-2.5 py-1 rounded-full hover:bg-vscode-primary/10 transition-colors cursor-pointer">
              Skills.json
            </button>
            <button onClick={() => setActiveFile('Contact.jsx')} className="bg-vscode-card border border-vscode-border/85 text-vscode-primary px-2.5 py-1 rounded-full hover:bg-vscode-primary/10 transition-colors cursor-pointer">
              Contact.jsx
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

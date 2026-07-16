import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscFileCode } from 'react-icons/vsc';
// Robust image wrapper that renders a styled code preview fallback if the asset is missing
function ExperienceImage({ src, alt, className, onError }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError || !src) {
    return (
      <div className={`${className} flex flex-col justify-center items-center bg-vscode-card border border-vscode-border/50 rounded-lg p-3 font-mono select-none text-vscode-textSecondary text-center`}>
        <div className="text-xl mb-1">🖼</div>
        <span className="text-[9px] uppercase font-bold tracking-wider truncate max-w-full px-1">{alt}</span>
        <span className="text-[8px] text-vscode-primary mt-0.5">Ready for Upload</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        setHasError(true);
        if (onError) onError(e);
      }} 
    />
  );
}

// Carousel Component implementing sliding motions
function ImageCarousel({ images, title, onImageClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 180 : -180,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 180 : -180,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full aspect-video lg:h-36 xl:h-40 bg-[#050505] rounded-lg border border-vscode-border hover:border-vscode-primary/50 overflow-hidden group shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
      
      {/* Click target for opening Lightbox */}
      <div 
        className="w-full h-full relative cursor-pointer"
        onClick={() => onImageClick(images, currentIdx, title)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "tween", duration: 0.3 }, opacity: { duration: 0.2 } }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <ExperienceImage 
              src={images[currentIdx]} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-vscode-primary border border-vscode-border/50 text-vscode-textPrimary flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-20 text-[10px] select-none font-bold"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/60 hover:bg-vscode-primary border border-vscode-border/50 text-vscode-textPrimary flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-20 text-[10px] select-none font-bold"
          >
            &gt;
          </button>
        </>
      )}

      {/* Image Counter Badge */}
      <div className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 rounded font-mono text-[9px] text-vscode-textSecondary select-none z-20">
        {currentIdx + 1} / {images.length}
      </div>

    </div>
  );
}

export default function Experience({ startLine = 93 }) {
  const lines = Array.from({ length: 48 }, (_, i) => i + startLine);

  // Experience objects mapping to timeline years and carousel image arrays
  const timelineItems = [
    {
      year: "2025",
      role: "Technical Head — NSS",
      company: "National Service Scheme",
      file: "NSS.ts",
      description: "Supervised and coordinated the technical division. Architected administrative portals, registration tools, and data dashboards for service tracking.",
      images: [
        "/experience/nss1.png",
        "/experience/nss2.png",
        "/experience/nss3.png",
        "/experience/nss4.png",
        "/experience/nss5.png",
        "/experience/nss6.png",
      ]
    },
    {
      year: "2024",
      role: "Technical Committee Member",
      company: "University Tech Society",
      file: "Committee.ts",
      description: "Developed registration websites and competitive programming setups for campus-wide hackathons and tech events.",
      images: [
        "/experience/ts1.png",
        "/experience/ts2.png",
        "/experience/ts3.png",
        "/experience/ts4.png",
        "/experience/ts5.png",
        "/experience/ts6.png",
        "/experience/ts7.png",
        "/experience/ts8.png",
      ]
    },
    {
      year: "2024",
      role: "Content & Creative Head — ISTE",
      company: "Indian Society for Technical Education",
      date: "2023 - 2024",
      file: "ISTE.ts",
      description: "Managed creative media layouts, newsletters, and tech workshop communications.",
      images: [
        "/experience/iste33.png",
        "/experience/iste5.png",
        "/experience/iste6.png",
        "/experience/iste7.png",
        "/experience/iste2.png",
        "/experience/iste4.png",
        "/experience/iste1.png",
      ]
    },
    
  ];

  // Fullscreen Lightbox state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: ""
  });

  const openLightbox = (images, index, title) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      title
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleLightboxPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleLightboxNext = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  // Keyboard navigation listener inside Lightbox (Arrow keys to slide, ESC to quit)
  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        handleLightboxNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        handleLightboxPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen, lightbox.currentIndex, lightbox.images]);

  return (
    <div className="flex select-text font-vscode relative min-h-[calc(100vh-104px)]">
      {/* Editor Line Numbers Gutter */}
      <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 flex-col text-right pr-4 pl-3 select-none text-vscode-textSecondary text-[11px] leading-6 border-r border-vscode-border/30 font-mono text-opacity-40 overflow-hidden">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pl-6 sm:pl-16 pr-6 py-5 w-full">
        {/* Comment block header */}
        <div className="mb-4 font-mono text-xs text-vscode-textSecondary select-none">
          <span className="syntax-comment">// src/components/sections/Experience.ts</span>
          <br />
          <span className="syntax-comment">// Technical work history and image galleries represented as a timeline</span>
        </div>

        <h2 className="text-xl font-bold font-vscode text-vscode-textPrimary mb-8 flex items-center select-none flex-wrap gap-1">
          <span className="syntax-keyword font-normal">import</span>
          <span className="text-vscode-textPrimary font-normal font-mono">{"{"}</span>
          <span className="text-vscode-primary font-normal">Experience</span>
          <span className="text-vscode-textPrimary font-normal font-mono">{"}"}</span>
          <span className="syntax-keyword font-normal">from</span>
          <span className="syntax-string font-normal">"work-history"</span>
          <span className="syntax-punctuation font-normal">;</span>
        </h2>

        {/* Timeline Layout */}
        <div className="relative pl-1 py-4 space-y-8">
          
          {/* Vertical line growing top to bottom on scroll */}
          <motion.div 
            className="absolute left-[78px] top-6 bottom-6 w-[2px] bg-vscode-primary/50 origin-top shadow-[0_0_8px_rgba(59,130,246,0.4)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
          >
            
            {/* Row Left section: Timeline Year + Nodes + Card */}
            <div className="order-2 lg:order-1 lg:col-span-8 flex items-start gap-4 w-full">
                
                {/* Year tag */}
                <span className="w-14 text-right font-mono text-xs text-vscode-textSecondary font-semibold select-none pt-2 shrink-0">
                  {item.year}
                </span>

                {/* Git Node (Commit dot) & Horizontal Connector */}
                <div className="relative flex items-center justify-center shrink-0 w-8 h-8 select-none mt-1">
                  {/* Glowing commit circle */}
                  <div className="w-3.5 h-3.5 rounded-full bg-vscode-primary border border-vscode-primary/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_15px_rgba(59,130,246,1)] group-hover:scale-110 transition-all duration-300 z-10" />
                  
                  {/* Horizontal rod */}
                  <div className="absolute left-6 w-4 h-[2px] bg-vscode-primary/40 group-hover:bg-vscode-primary transition-colors duration-300" />
                </div>

                {/* Info Card (matches ProjectCard exactly) */}
                <div className="flex-1 pl-2">
                  <motion.div
                    whileHover={{ 
                      y: -4, 
                      boxShadow: '0 20px 30px -15px rgba(0,0,0,0.8), 0 0 20px rgba(59, 130, 246, 0.35)',
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      scale: 1.01
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="bg-vscode-card border border-vscode-border rounded-lg overflow-hidden flex flex-col font-vscode transition-all duration-300"
                  >
                    {/* Card Header tab bar visual */}
                    <div className="h-8 bg-vscode-tabInactive/70 border-b border-vscode-border/50 px-3 flex items-center justify-between text-vscode-textSecondary text-[10px] select-none shrink-0">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#FF5F56]/60 transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#FFBD2E]/60 transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-vscode-textSecondary/20 group-hover:bg-[#27C93F]/60 transition-colors"></div>
                      </div>
                      <div className="flex items-center space-x-1.5 bg-vscode-editor border-x border-t border-vscode-border/30 px-3 h-full pt-1 truncate max-w-[120px] rounded-t-md font-mono">
                        <VscFileCode className="text-vscode-primary text-xs flex-shrink-0 group-hover:text-vscode-highlight transition-colors" />
                        <span className="truncate text-vscode-textSecondary group-hover:text-vscode-textPrimary transition-colors">{item.file}</span>
                      </div>
                      <div className="w-6"></div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <h3 className="text-vscode-primary font-bold text-sm mb-1.5 group-hover:text-[#3B82F6] transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-[10px] text-vscode-textSecondary font-mono mb-3">
                        @ {item.company}
                      </p>
                      <p className="text-vscode-textSecondary text-xs leading-relaxed font-prose group-hover:text-vscode-textPrimary/90 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

            {/* Row Right section: Image Carousel Gallery */}
            <div className="order-1 lg:order-2 pl-[78px] lg:pl-0 lg:col-span-4 w-full">
                <ImageCarousel 
                  images={item.images} 
                  title={item.role} 
                  onImageClick={openLightbox} 
                />
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Modal Inner Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center bg-vscode-editor/90 border border-vscode-border rounded-lg overflow-hidden shadow-2xl p-2 select-text"
              onClick={(e) => e.stopPropagation()} // Clicking inside does not dismiss
            >
              
              <ExperienceImage
                src={lightbox.images[lightbox.currentIndex]}
                alt={lightbox.title}
                className="max-w-full max-h-[75vh] object-contain rounded-md"
              />

              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-vscode-textSecondary hover:text-vscode-textPrimary text-base bg-black/60 w-8 h-8 rounded-full border border-vscode-border/50 flex items-center justify-center transition-colors cursor-pointer select-none"
                title="Close (Esc)"
              >
                ✕
              </button>

              {/* Navigation Slides controls */}
              {lightbox.images.length > 1 && (
                <>
                  <button 
                    onClick={handleLightboxPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-vscode-textPrimary hover:text-vscode-primary bg-black/70 hover:bg-black/90 w-10 h-10 rounded-full border border-vscode-border flex items-center justify-center transition-colors cursor-pointer select-none font-bold text-sm"
                    title="Previous"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={handleLightboxNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-vscode-textPrimary hover:text-vscode-primary bg-black/70 hover:bg-black/90 w-10 h-10 rounded-full border border-vscode-border flex items-center justify-center transition-colors cursor-pointer select-none font-bold text-sm"
                    title="Next"
                  >
                    &gt;
                  </button>
                </>
              )}

              {/* Counter label footer */}
              <div className="w-full flex justify-between items-center mt-3 px-2 text-xs font-mono text-vscode-textSecondary select-none">
                <span>{lightbox.title}</span>
                <span>{lightbox.currentIndex + 1} / {lightbox.images.length}</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SYMBOLS = ['1', '0', '{', '}', '<>', '()', '[]', ';', 'const', 'let', '=>'];

export default function CursorParticles() {
  const [particles, setParticles] = useState([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Spawns a particle when the cursor moves at least 35 pixels
      if (dist > 35) {
        lastMousePos.current = { x, y };

        const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const newParticle = {
          id: particleId.current++,
          symbol,
          x,
          y,
          driftX: (Math.random() - 0.5) * 30,  // horizontal drift
          driftY: -65 - Math.random() * 35,   // vertical drift (float up)
          rotate: (Math.random() - 0.5) * 90,  // slight rotation (degrees)
          duration: 0.8 + Math.random() * 0.3
        };

        setParticles((prev) => {
          const next = [...prev, newParticle];
          if (next.length > 12) {
            return next.slice(next.length - 12); // strict ceiling at 12 particles
          }
          return next;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.8, scale: 0.8, x: p.x - 10, y: p.y - 10, rotate: 0 }}
            animate={{ 
              opacity: 0, 
              scale: 1.1, 
              x: p.x - 10 + p.driftX, 
              y: p.y - 10 + p.driftY,
              rotate: p.rotate
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: p.duration, ease: 'easeOut' }}
            onAnimationComplete={() => removeParticle(p.id)}
            className="absolute text-[10px] font-mono text-vscode-primary font-bold drop-shadow-[0_0_4px_rgba(59,130,246,0.35)] whitespace-nowrap"
          >
            {p.symbol}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { playSketchSound } from '../utils/sketchAudio';
import confetti from 'canvas-confetti';

interface PawTrack {
  id: number;
  x: number;
  y: number;
}

export const RunningKitty: React.FC = () => {
  // Position coordinates in percentage or pixels
  const [pos, setPos] = useState({ x: 80, y: 75 }); // Bottom-right initial
  const [statusText, setStatusText] = useState('try to catch me! 🐾');
  const [fleeing, setFleeing] = useState(false);
  const [catchCount, setCatchCount] = useState(0);
  const [pawTracks, setPawTracks] = useState<PawTrack[]>([]);
  const catRef = useRef<HTMLDivElement | null>(null);

  const quotes = [
    'whoosh! too slow! 💨',
    'zoom! catch me! 🐾',
    'almost got me! 😼',
    'ninja dodge! ⚡',
    'meow! not today! 🌸',
    'faster than a SQL query! 🚀',
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      const rect = catRef.current.getBoundingClientRect();
      const catCenterX = rect.left + rect.width / 2;
      const catCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - catCenterX;
      const dy = e.clientY - catCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Distance threshold: if mouse comes within 140px, kitty runs away!
      if (dist < 140 && !fleeing) {
        setFleeing(true);
        playSketchSound('pop');

        // Add a paw track at old spot
        const newTrack: PawTrack = {
          id: Date.now() + Math.random(),
          x: catCenterX,
          y: catCenterY,
        };
        setPawTracks((prev) => [...prev.slice(-6), newTrack]);

        // Calculate new random safe position away from cursor
        const maxX = Math.max(window.innerWidth - 180, 200);
        const maxY = Math.max(window.innerHeight - 180, 200);

        let newX = Math.random() * (maxX - 80) + 80;
        let newY = Math.random() * (maxY - 120) + 80;

        // Ensure it doesn't jump directly under the mouse
        if (Math.abs(newX - e.clientX) < 120) {
          newX = (newX + 250) % maxX;
        }

        setPos({ x: (newX / window.innerWidth) * 100, y: (newY / window.innerHeight) * 100 });
        setStatusText(quotes[Math.floor(Math.random() * quotes.length)]);

        setTimeout(() => {
          setFleeing(false);
        }, 500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [fleeing]);

  const handleCatchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSketchSound('chime');
    setCatchCount((prev) => prev + 1);
    setStatusText('🎉 YOU CAUGHT ME! purr... 🌸');

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { x: pos.x / 100, y: pos.y / 100 },
      colors: ['#e8b042', '#7a9a7b', '#5d8aa8', '#f4a282'],
    });
  };

  return (
    <>
      {/* Ghostly Paw Trail */}
      {pawTracks.map((pt) => (
        <div
          key={pt.id}
          className="fixed pointer-events-none z-30 opacity-40 animate-fade-out"
          style={{ left: `${pt.x}px`, top: `${pt.y}px`, transform: 'translate(-10px, -10px)' }}
        >
          <svg width="20" height="20" viewBox="0 0 58 62" fill="#d9aa7b" opacity="0.6">
            <ellipse cx="9" cy="19" rx="5" ry="7" />
            <ellipse cx="21" cy="10" rx="5" ry="7" />
            <ellipse cx="36" cy="10" rx="5" ry="7" />
            <ellipse cx="49" cy="19" rx="5" ry="7" />
            <path d="M12 43 C12 31 20 24 29 25 C38 24 46 31 46 43 C46 54 38 59 29 55 C20 59 12 54 12 43 Z" />
          </svg>
        </div>
      ))}

      {/* Running Mascot Cat (Desktop) */}
      <div
        ref={catRef}
        onClick={handleCatchClick}
        className="fixed z-40 hidden md:block transition-all duration-500 ease-out cursor-pointer select-none"
        style={{
          left: `${pos.x}vw`,
          top: `${pos.y}vh`,
          transform: fleeing ? 'scale(1.15) rotate(12deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        {/* Animated Speech Bubble */}
        <div
          className="absolute -top-12 -left-8 px-3.5 py-1 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#1a110e] shadow-md whitespace-nowrap transform -rotate-6 pointer-events-none"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          {statusText}
        </div>

        {/* Hand-Drawn Running Cat SVG */}
        <div className="relative group hover:scale-110 transition-transform">
          <svg
            width="85"
            height="85"
            viewBox="0 0 100 100"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            {/* Body */}
            <path
              d="M 20 90 C 20 50 60 45 80 70 C 90 85 90 95 90 95 Z"
              fill="#2b1f1d"
              stroke="#3f2a1e"
              strokeWidth="2.2"
            />
            {/* Head */}
            <circle cx="60" cy="50" r="24" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2.2" />
            {/* Ears */}
            <polygon points="44,35 34,14 54,26" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2.2" />
            <polygon points="76,35 86,14 66,26" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2.2" />
            {/* Pink Inner Ears */}
            <polygon points="46,32 38,19 52,26" fill="#f4a282" opacity="0.85" />
            <polygon points="74,32 82,19 68,26" fill="#f4a282" opacity="0.85" />
            {/* Big Eyes */}
            <ellipse cx="52" cy="48" rx="5" ry="6.5" fill="#f5c542" stroke="#3f2a1e" strokeWidth="1.2" />
            <ellipse cx="68" cy="48" rx="5" ry="6.5" fill="#f5c542" stroke="#3f2a1e" strokeWidth="1.2" />
            <ellipse cx="52" cy="48" rx="2.5" ry="5" fill="#111" />
            <ellipse cx="68" cy="48" rx="2.5" ry="5" fill="#111" />
            <circle cx="53" cy="46" r="1.5" fill="#fff" />
            <circle cx="69" cy="46" r="1.5" fill="#fff" />
            {/* Nose & Whiskers */}
            <polygon points="60,56 57,59 63,59" fill="#f4a282" />
            <path d="M 57 61 Q 60 63 63 61" stroke="#fff" strokeWidth="1.2" fill="none" />
            <line x1="48" y1="56" x2="26" y2="52" stroke="#999" strokeWidth="1.2" />
            <line x1="48" y1="59" x2="24" y2="62" stroke="#999" strokeWidth="1.2" />
            <line x1="72" y1="56" x2="94" y2="52" stroke="#999" strokeWidth="1.2" />
            <line x1="72" y1="59" x2="96" y2="62" stroke="#999" strokeWidth="1.2" />
            {/* Paws */}
            <ellipse cx="36" cy="88" rx="10" ry="7" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="1.5" />
            <ellipse cx="80" cy="90" rx="10" ry="7" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="1.5" />
          </svg>

          {catchCount > 0 && (
            <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#f4a282] border-2 border-[#3f2a1e] font-hand text-xs font-bold text-white shadow-sm">
              Caught: {catchCount}x
            </span>
          )}
        </div>
      </div>
    </>
  );
};

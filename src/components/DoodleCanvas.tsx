import React, { useState } from 'react';
import { playSketchSound } from '../utils/sketchAudio';

export const DoodleCanvas: React.FC = () => {
  const [catPurrs, setCatPurrs] = useState(false);
  const [petCount, setPetCount] = useState(0);

  const handleCatPet = () => {
    playSketchSound('purr');
    setCatPurrs(true);
    setPetCount((prev) => prev + 1);
    setTimeout(() => setCatPurrs(false), 2000);
  };

  return (
    <>
      {/* Interactive Mascot Cat at Bottom-Left */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <div className="relative group cursor-pointer" onClick={handleCatPet}>
          
          {/* Pet Prompt Balloon */}
          <div className="absolute -top-12 left-12 px-3 py-1 rounded-xl bg-[#fff9ee] border-2 border-[#3f2a1e] text-xs font-hand text-[#3f2a1e] shadow-md transform -rotate-6 transition-all group-hover:scale-110 pointer-events-none">
            {catPurrs ? 'purr... meow! 🌸' : 'psst... pet me! 🐾'}
          </div>

          {/* Hand-Drawn Mascot SVG */}
          <svg width="90" height="90" viewBox="0 0 100 100" className="transition-transform hover:scale-105" style={{ filter: 'url(#sketch-wobble)' }}>
            <path d="M 20 90 C 20 50 60 45 80 70 C 90 85 90 95 90 95 Z" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2" />
            <circle cx="60" cy="50" r="24" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2" />
            <polygon points="44,35 34,15 54,27" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2" />
            <polygon points="76,35 86,15 66,27" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="2" />
            <polygon points="46,32 38,20 52,27" fill="#e89898" opacity="0.8" />
            <polygon points="74,32 82,20 68,27" fill="#e89898" opacity="0.8" />
            <ellipse cx="52" cy="48" rx="4.5" ry="6" fill="#f5c542" stroke="#3f2a1e" strokeWidth="1" />
            <ellipse cx="68" cy="48" rx="4.5" ry="6" fill="#f5c542" stroke="#3f2a1e" strokeWidth="1" />
            <ellipse cx="52" cy="48" rx="2" ry="4.5" fill="#111" />
            <ellipse cx="68" cy="48" rx="2" ry="4.5" fill="#111" />
            <circle cx="53" cy="46" r="1.2" fill="#fff" />
            <circle cx="69" cy="46" r="1.2" fill="#fff" />
            <polygon points="60,56 57,59 63,59" fill="#e89898" />
            <path d="M 57 61 Q 60 63 63 61" stroke="#e5d8c3" strokeWidth="1.2" fill="none" />
            <line x1="48" y1="56" x2="28" y2="52" stroke="#aaa" strokeWidth="1" />
            <line x1="48" y1="59" x2="26" y2="62" stroke="#aaa" strokeWidth="1" />
            <line x1="72" y1="56" x2="92" y2="52" stroke="#aaa" strokeWidth="1" />
            <line x1="72" y1="59" x2="94" y2="62" stroke="#aaa" strokeWidth="1" />
            <ellipse cx="36" cy="88" rx="10" ry="7" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="1.5" />
            <ellipse cx="80" cy="90" rx="10" ry="7" fill="#2b1f1d" stroke="#3f2a1e" strokeWidth="1.5" />
          </svg>

          {petCount > 0 && (
            <span className="absolute bottom-0 right-0 text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#f4a282] text-white border border-[#3f2a1e]">
              +{petCount}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

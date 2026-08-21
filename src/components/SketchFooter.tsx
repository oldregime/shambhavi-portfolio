import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { playSketchSound } from '../utils/sketchAudio';

export const SketchFooter: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playSketchSound('page-flip');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t-2 border-[#3f2a1e]/20 bg-[#f5ebd9]/60 py-12 px-6 sm:px-12 text-[#6a524a]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        <div>
          <p className="font-hand text-xl font-bold text-[#2b1f1d]">
            {PERSONAL_INFO.name} • The Sketchbook Portfolio
          </p>
          <p className="font-sketch text-xs text-[#6a524a]">
            Handcrafted with React, TypeScript & Tailwind CSS • VIT '26
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#ede0ca] border border-[#3f2a1e]/30 text-[#2b1f1d]">
            🕒 {time}
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#fffef9] border-2 border-[#3f2a1e] hover:bg-[#ede0ca] text-[#2b1f1d] transition-transform hover:scale-110 shadow-sm"
            style={{ filter: 'url(#sketch-wobble)' }}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

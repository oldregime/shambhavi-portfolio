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
    <footer className="h-10 border-t border-[#3f2a1e]/15 bg-[#f5ebd9]/70 px-4 sm:px-8 flex items-center justify-between text-xs text-[#6a524a] shrink-0">
      <div className="flex items-center gap-2">
        <span className="font-hand text-base font-bold text-[#1a110e]">
          {PERSONAL_INFO.name} • Sketchbook Portfolio
        </span>
        <span className="hidden sm:inline text-[#6a524a] font-sketch">
          • Handcrafted with React & Vite
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#ede0ca] border border-[#3f2a1e]/20 text-[#1a110e]">
          🕒 {time}
        </span>

        <button
          onClick={scrollToTop}
          className="p-1 rounded-full bg-[#fffef9] border border-[#3f2a1e] hover:bg-[#ede0ca] text-[#1a110e] transition shadow-xs"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

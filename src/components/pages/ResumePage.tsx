import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Download, ArrowLeft, ArrowRight, Sparkles, Award, GraduationCap, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSketchSound } from '../../utils/sketchAudio';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const ResumePage: React.FC<PageProps> = ({ onNavigate }) => {
  const handleDownload = () => {
    playSketchSound('chime');
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e8b042', '#7a9a7b', '#5d8aa8', '#d96b52']
    });
  };

  return (
    <div className="lg:h-full flex flex-col justify-between py-1 lg:py-2 space-y-3 lg:space-y-2 overflow-y-visible lg:overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-1.5 shrink-0">
        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Skills
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 07 / 07 • Official Resume & Credentials
        </span>
      </div>

      <div className="p-4 sm:p-5 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-3 relative lg:flex-1 lg:my-auto flex flex-col justify-between" style={{ filter: 'url(#sketch-wobble)' }}>
        <div className="absolute -top-3.5 left-12 w-28 h-6 tape rounded-sm" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ede0ca] pb-2.5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a110e] font-display">
              {PERSONAL_INFO.name}
            </h3>
            <p className="font-hand text-base sm:text-lg font-bold text-[#5d8aa8]">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.education}
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Shambhavi_Jha_Resume.pdf"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#e8b042] hover:bg-[#d89f33] text-[#1a110e] font-hand text-base font-bold border-2 border-[#3f2a1e] shadow-sm hover:scale-105 active:scale-95 transition-all"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <Download className="w-4 h-4" />
            <span>Download Official Resume (PDF) 📎</span>
          </a>
        </div>

        {/* 3-Column Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans">
          <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
            <h4 className="font-hand text-base font-bold text-[#5d8aa8] flex items-center gap-1">
              <GraduationCap className="w-4 h-4" /> Education
            </h4>
            <p className="text-xs font-bold text-[#1a110e]">B.Tech CSE (2022–2026)</p>
            <p className="text-[11px] text-[#6a524a]">VIT Bhopal (CGPA: 8.32)</p>
            <p className="text-[10px] text-[#7a9a7b] font-semibold">Focus: Cloud & Databases</p>
          </div>

          <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
            <h4 className="font-hand text-base font-bold text-[#d96b52] flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> Experience
            </h4>
            <p className="text-xs font-bold text-[#1a110e]">Clovertex (Data Engineering)</p>
            <p className="text-[11px] text-[#6a524a]">Ex-Intern @ Indian Space Lab</p>
            <p className="text-[10px] text-[#5d8aa8] font-semibold">AWS EC2 & Healthcare ETL</p>
          </div>

          <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
            <h4 className="font-hand text-base font-bold text-[#7a9a7b] flex items-center gap-1">
              <Award className="w-4 h-4" /> Key Badges
            </h4>
            <p className="text-xs font-bold text-[#1a110e]">✓ AWS Cloud Practitioner</p>
            <p className="text-[11px] text-[#6a524a]">✓ NPTEL Analytics (IIT KGP)</p>
            <p className="text-[10px] text-[#e8b042] font-semibold">100 Days LeetCode DSA</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#edf7ed] border border-[#7a9a7b]/40 font-hand text-sm sm:text-base text-[#2b1f1d] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#7a9a7b] shrink-0" />
          <span>Actively exploring full-time Data Engineering, Cloud Infrastructure, and AI Analytics roles starting 2026.</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-sm font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: Skills
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#d96b52] hover:bg-[#c65b43] text-white font-hand text-sm font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Contact Postbox</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

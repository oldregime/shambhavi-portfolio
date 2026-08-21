import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FileText, Download, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="space-y-10 py-6 sm:py-10">
      
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Skills
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 07 / 07 • Official Resume
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3e0] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#e8b042]" style={{ filter: 'url(#sketch-wobble)' }}>
          <FileText className="w-4 h-4 text-[#e8b042]" />
          Curriculum Vitae
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
          Resume & Career Summary
        </h2>
        <p className="font-hand text-xl text-[#6a524a] max-w-xl">
          Download Shambhavi's full PDF resume or review key credentials below.
        </p>
      </div>

      {/* Big Resume Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-xl space-y-8 relative" style={{ filter: 'url(#sketch-wobble)' }}>
        <div className="absolute -top-4 left-12 w-32 h-8 tape rounded-sm" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b-2 border-[#ede0ca] pb-6">
          <div>
            <h3 className="text-3xl font-extrabold text-[#1a110e] font-display">
              {PERSONAL_INFO.name}
            </h3>
            <p className="font-hand text-xl font-bold text-[#5d8aa8]">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.education}
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Shambhavi_Jha_Resume.pdf"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#e8b042] hover:bg-[#d89f33] text-[#1a110e] font-hand text-xl font-bold border-2 border-[#3f2a1e] shadow-md hover:scale-105 active:scale-95 transition-all"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume (PDF) 📎</span>
          </a>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="p-5 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-2">
            <h4 className="font-hand text-xl font-bold text-[#5d8aa8]">🎓 Education</h4>
            <p className="text-sm font-bold text-[#1a110e]">B.Tech in CSE (2022–2026)</p>
            <p className="text-xs text-[#6a524a]">Vellore Institute of Technology (VIT)</p>
            <p className="text-xs font-bold text-[#7a9a7b]">CGPA: 8.32 / 10</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-2">
            <h4 className="font-hand text-xl font-bold text-[#d96b52]">💼 Experience</h4>
            <p className="text-sm font-bold text-[#1a110e]">Data Engineering Intern @ Clovertex</p>
            <p className="text-xs text-[#6a524a]">AWS EC2, GenAI & Healthcare Pipelines</p>
            <p className="text-xs font-bold text-[#5d8aa8]">Ex-Intern @ Indian Space Lab (ISL)</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-2">
            <h4 className="font-hand text-xl font-bold text-[#7a9a7b]">📜 Key Certifications</h4>
            <p className="text-xs font-bold text-[#1a110e]">✓ AWS Certified Cloud Practitioner</p>
            <p className="text-xs font-bold text-[#1a110e]">✓ NPTEL Marketing Analytics (IIT KGP)</p>
            <p className="text-xs font-bold text-[#1a110e]">✓ IBM Data Science Tools</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#edf7ed] border border-[#7a9a7b]/40 font-hand text-lg text-[#2b1f1d] flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#7a9a7b] shrink-0" />
          <span>Looking for full-time Data Engineering, Cloud Infrastructure, and AI Analytics roles starting 2026.</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('skills')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: Skills
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d96b52] hover:bg-[#c65b43] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: Contact Postbox</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Cover
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 02 / 07 • About Me
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-auto">
        
        {/* Left Polaroid & Facts */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-3">
          <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 tape rounded-sm z-20" />
            
            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-3.5 pb-5 rounded-2xl shadow-lg space-y-2 w-[220px] sm:w-[250px]" style={{ filter: 'url(#sketch-wobble)' }}>
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-secondary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-center pt-0.5">
                <p className="font-hand text-lg font-bold text-[#1a110e]">
                  Curious & Driven 🚀
                </p>
                <p className="font-sketch text-xs text-[#7a9a7b]">
                  "Every dataset tells a hidden story."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[250px] p-3.5 rounded-2xl bg-[#fff9e6] border-2 border-[#3f2a1e] shadow-xs space-y-1.5" style={{ filter: 'url(#sketch-wobble)' }}>
            <p className="font-marker text-xs text-[#8b552d] font-bold border-b border-[#3f2a1e]/15 pb-0.5">
              📌 Quick Facts
            </p>
            <ul className="space-y-1 font-hand text-sm font-bold text-[#3f2a1e]">
              <li>📍 Location: India (VIT Bhopal)</li>
              <li>🎓 Degree: B.Tech CSE (8.32 CGPA)</li>
              <li>⚡ Current: Data Engineer @ Clovertex</li>
              <li>🧩 LeetCode: 100 Days Streak Conquered</li>
            </ul>
          </div>
        </div>

        {/* Right Story */}
        <div className="lg:col-span-7 space-y-3">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#edf7ed] border border-[#3f2a1e] text-xs font-hand font-bold text-[#7a9a7b]">
              <Heart className="w-3.5 h-3.5 text-[#d96b52]" />
              Engineering Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a110e] font-display">
              The Journey Behind the Data
            </h2>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-2.5 text-xs sm:text-sm text-[#2b1d19] leading-relaxed font-sans relative" style={{ filter: 'url(#sketch-wobble)' }}>
            <p>
              My passion began with a core insight: <strong className="text-[#1a110e]">raw numbers and transactions can transform into real human impact</strong> when engineered into robust cloud systems.
            </p>

            <p>
              At <strong className="text-[#1a110e]">Clovertex</strong>, I engineer AWS EC2 workflows and data pipelines for healthcare data, ensuring zero data loss and strict schema governance.
            </p>

            <p>
              During my space tech research at <strong className="text-[#1a110e]">Indian Space Lab (ISL)</strong>, I processed telemetry feeds under tight memory and computational constraints.
            </p>

            <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1.5 font-hand text-base text-[#2b1f1d]">
              <p className="font-bold text-[#5d8aa8] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Technical Strengths:
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm font-bold">
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#7a9a7b]" /> AWS Cloud Architectures</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#7a9a7b]" /> Python & SQL Analytics</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#7a9a7b]" /> Generative AI Integration</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#7a9a7b]" /> Algorithmic Optimization</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: Cover
        </button>

        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

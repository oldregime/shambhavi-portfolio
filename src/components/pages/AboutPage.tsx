import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Heart, CheckCircle2 } from 'lucide-react';


interface PageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 py-6 sm:py-10">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Cover
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Page 02 / 07 • About Me & Background
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Secondary Polaroid Photo */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-6">
          <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 tape rounded-sm z-20" />
            
            <div className="bg-[#fffef9] border-2 border-[#3f2a1e] p-5 pb-7 rounded-3xl shadow-xl space-y-3 w-[290px] sm:w-[320px]" style={{ filter: 'url(#sketch-wobble)' }}>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-[#3f2a1e] bg-[#ede0ca]">
                <img
                  src="/images/profile-secondary.jpg"
                  alt="Shambhavi Jha"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="text-center pt-2">
                <p className="font-hand text-2xl font-bold text-[#1a110e]">
                  Curious & Driven 🚀
                </p>
                <p className="font-sketch text-sm text-[#7a9a7b]">
                  "Every dataset tells a hidden story."
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sticky Note */}
          <div className="w-full max-w-[320px] p-5 rounded-2xl bg-[#fff9e6] border-2 border-[#3f2a1e] shadow-md space-y-2 transform rotate-1" style={{ filter: 'url(#sketch-wobble)' }}>
            <p className="font-marker text-sm text-[#8b552d] font-bold border-b border-[#3f2a1e]/15 pb-1">
              📌 Quick Facts
            </p>
            <ul className="space-y-1.5 font-hand text-base font-bold text-[#3f2a1e]">
              <li>📍 Based in: India (VIT Bhopal)</li>
              <li>🎓 Degree: B.Tech in CSE (8.32 CGPA)</li>
              <li>⚡ Current: Data Engineer Intern @ Clovertex</li>
              <li>🧩 LeetCode: 100 Consecutive Days Streak</li>
              <li>☕ Fuel: Filter Coffee & Clean Code</li>
            </ul>
          </div>
        </div>

        {/* Right Story Notebook */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf7ed] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#7a9a7b]" style={{ filter: 'url(#sketch-wobble)' }}>
              <Heart className="w-4 h-4 text-[#d96b52]" />
              My Engineering Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
              The Journey Behind the Data
            </h2>
          </div>

          {/* Story Paragraphs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4 text-base sm:text-lg text-[#2b1d19] leading-relaxed font-sans relative" style={{ filter: 'url(#sketch-wobble)' }}>
            <div className="absolute -top-3.5 right-10 w-24 h-6 tape rounded-sm" />

            <p>
              My passion for software engineering started with a simple fascination: <strong className="text-[#1a110e]">how raw numbers and transactions can transform into real human impact</strong> when engineered into clean, scalable architectures.
            </p>

            <p>
              At <strong className="text-[#1a110e]">Clovertex</strong>, I actively engineer AWS EC2 cloud workflows and data pipelines for healthcare applications. Working with clinical data taught me that data integrity, low latency, and zero data loss are non-negotiable standards.
            </p>

            <p>
              During my space technology research internship at the <strong className="text-[#1a110e]">Indian Space Lab (ISL)</strong>, I learned how to process mission telemetry and solve complex computational constraints under tight margins.
            </p>

            <div className="p-4 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-2 font-hand text-lg text-[#2b1f1d]">
              <p className="font-bold text-[#5d8aa8] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Core Technical Foundations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base font-bold">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#7a9a7b]" /> AWS Cloud Architectures</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#7a9a7b]" /> Python & SQL Data Pipelines</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#7a9a7b]" /> Generative AI & LLM Systems</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#7a9a7b]" /> Algorithmic Optimization (DSA)</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Prev: Cover
        </button>

        <button
          onClick={() => onNavigate('projects')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105 shadow-sm"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <span>Next Page: Projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

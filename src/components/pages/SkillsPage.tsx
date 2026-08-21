import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../../data/portfolioData';
import { 
  Cloud, 
  Database, 
  Sparkles, 
  Code, 
  Server, 
  Terminal, 
  GitBranch, 
  Globe, 
  Cpu, 
  CheckCircle, 
  Layers, 
  BarChart2, 
  Zap, 
  Boxes, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import { playSketchSound } from '../../utils/sketchAudio';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const SkillsPage: React.FC<PageProps> = ({ onNavigate }) => {
  // Map skill names to icons
  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'AWS EC2':
      case 'AWS S3':
      case 'AWS Cloud Quest':
        return <Cloud className="w-4 h-4 text-[#5d8aa8]" />;
      case 'Git & GitHub':
        return <GitBranch className="w-4 h-4 text-[#e8b042]" />;
      case 'Linux / Bash':
        return <Terminal className="w-4 h-4 text-[#1a110e]" />;
      case 'Cloudflare / CDN':
        return <Globe className="w-4 h-4 text-[#f4a282]" />;
      case 'Python':
        return <Code className="w-4 h-4 text-[#5d8aa8]" />;
      case 'SQL Analytics':
      case 'MySQL':
        return <Database className="w-4 h-4 text-[#7a9a7b]" />;
      case 'Pandas':
      case 'NumPy':
        return <Layers className="w-4 h-4 text-[#e8b042]" />;
      case 'EDA':
      case 'Data Visualization':
        return <BarChart2 className="w-4 h-4 text-[#d96b52]" />;
      case 'Generative AI':
      case 'Prompt Engineering':
        return <Sparkles className="w-4 h-4 text-[#e8b042]" />;
      case 'Ollama / Local LLMs':
      case 'Scikit-Learn':
        return <Cpu className="w-4 h-4 text-[#7a9a7b]" />;
      case 'DSA (Java/Python)':
        return <Zap className="w-4 h-4 text-[#d96b52]" />;
      case 'React.js':
      case 'Vite / Bundling':
        return <Boxes className="w-4 h-4 text-[#5d8aa8]" />;
      case 'JavaScript / TypeScript':
      case 'Tailwind CSS':
      case 'REST APIs':
      case 'HTML5 / CSS3':
      default:
        return <Server className="w-4 h-4 text-[#5d8aa8]" />;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> 100 Days DSA
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Page 06 / 07 • Skills & Toolkit
        </span>
      </div>

      {/* 2x2 Grid of Categorized Icon Badges (No percentage bars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 flex-1 my-auto overflow-hidden">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className={`p-3.5 sm:p-4 rounded-2xl ${cat.bg} border-2 border-[#3f2a1e] shadow-xs space-y-2.5 relative flex flex-col justify-between overflow-hidden`}
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <h3 className="text-sm sm:text-base font-bold text-[#1a110e] font-display border-b border-[#3f2a1e]/15 pb-1.5 flex items-center justify-between">
              <span>{cat.category}</span>
              <span className="font-hand text-xs text-[#6a524a]">{cat.skills.length} tools</span>
            </h3>

            {/* Icon Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {cat.skills.map((s) => (
                <div
                  key={s.name}
                  onMouseEnter={() => playSketchSound('scribble')}
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#fffef9] border border-[#3f2a1e]/30 shadow-2xs hover:scale-105 transition-transform cursor-pointer"
                  title={s.desc}
                >
                  <div className="p-1 rounded-lg bg-[#ede0ca]/60 shrink-0">
                    {getSkillIcon(s.name)}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-[#1a110e] truncate leading-tight">
                      {s.name}
                    </p>
                    <p className="font-sketch text-[10px] text-[#6a524a] truncate -mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Strip of Certifications */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 shrink-0">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.title}
            className="p-2 rounded-xl bg-[#fffef9] border border-[#3f2a1e] shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="font-hand text-[10px] font-bold text-[#e8b042] block">{cert.issueDate}</span>
              <p className="text-[11px] font-bold text-[#1a110e] leading-tight line-clamp-1">{cert.title}</p>
            </div>
            <p className="text-[10px] font-semibold text-[#7a9a7b] flex items-center gap-1 mt-1">
              <CheckCircle className="w-3 h-3 shrink-0" /> {cert.issuer}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('leetcode')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Prev: 100 Days
        </button>

        <button
          onClick={() => onNavigate('resume')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5d8aa8] hover:bg-[#4a728e] text-white font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105 shadow-xs"
        >
          <span>Next: Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

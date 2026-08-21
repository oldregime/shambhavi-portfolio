import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  FileText, 
  Home, 
  User, 
  Layers, 
  Briefcase, 
  Code2, 
  Cpu, 
  Mail 
} from 'lucide-react';
import { playSketchSound, toggleAudioMute, getAudioMuteState } from '../utils/sketchAudio';

interface NavProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const SketchbookNav: React.FC<NavProps> = ({ activeSection, setActiveSection }) => {
  const [isMuted, setIsMuted] = useState(getAudioMuteState());

  const handleSoundToggle = () => {
    const next = toggleAudioMute();
    setIsMuted(next);
    if (!next) playSketchSound('pop');
  };

  const tabs = [
    { id: 'home', label: 'home', icon: Home, color: '#5d8aa8' },
    { id: 'about', label: 'about', icon: User, color: '#7a9a7b' },
    { id: 'projects', label: 'projects', icon: Layers, color: '#e8b042' },
    { id: 'experience', label: 'exp', icon: Briefcase, color: '#9c8eb9' },
    { id: 'leetcode', label: '100 days', icon: Code2, color: '#d96b52' },
    { id: 'skills', label: 'skills', icon: Cpu, color: '#7a9a7b' },
    { id: 'resume', label: 'resume', icon: FileText, color: '#e8b042' },
    { id: 'contact', label: 'contact', icon: Mail, color: '#5d8aa8' },
  ];

  const handleTabClick = (id: string) => {
    playSketchSound('page-flip');
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Floating Controls Bar */}
      <header className="fixed top-3 right-3 sm:right-6 z-50 flex items-center gap-2">
        {/* Sound Toggle */}
        <button
          onClick={handleSoundToggle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fcf8f2]/95 border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#1a110e] shadow-md backdrop-blur-sm transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
          title={isMuted ? 'Turn sounds ON' : 'Turn sounds OFF'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#d96b52]" /> : <Volume2 className="w-3.5 h-3.5 text-[#7a9a7b]" />}
          <span className="hidden xs:inline">{isMuted ? 'sounds off' : 'sounds on ♪'}</span>
        </button>

        {/* Resume Button */}
        <button
          onClick={() => handleTabClick('resume')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8b042] hover:bg-[#dba134] text-xs font-hand font-bold text-[#1a110e] border-2 border-[#3f2a1e] shadow-md transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>resume 📎</span>
        </button>
      </header>

      {/* Left Spiral Binding Rings (Desktop) */}
      <div className="hidden md:flex fixed inset-y-0 left-0 w-8 z-30 flex-col justify-around items-center pointer-events-none py-6">
        {[...Array(14)].map((_, i) => (
          <svg key={i} width="28" height="32" viewBox="0 0 28 32" className="shrink-0 overflow-visible">
            <path
              d="M 14 4 C 26 4 26 16 14 16 C 2 16 2 28 14 28"
              fill="none"
              stroke="#3f2a1e"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse cx="14" cy="16" rx="4" ry="4" fill="#ede0ca" stroke="#3f2a1e" strokeWidth="1" />
          </svg>
        ))}
      </div>

      {/* Left Hand-Drawn Tabs Navigation (Desktop) */}
      <nav className="hidden md:block fixed left-9 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col gap-2.5 py-2">
          {tabs.map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="group relative flex items-center justify-center w-28 h-9 bg-transparent font-hand text-lg font-bold text-[#1a110e] focus:outline-none cursor-pointer"
              >
                <svg
                  className={`absolute inset-0 w-full h-full overflow-visible transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-105' : 'opacity-0 group-hover:opacity-65'
                  }`}
                  viewBox="0 0 120 50"
                  fill="none"
                  style={{ color: tab.color }}
                >
                  <ellipse cx="60" cy="25" rx="54" ry="18" stroke="currentColor" strokeWidth="2.2" transform="rotate(-2 60 25)" />
                  <ellipse cx="60" cy="25" rx="56" ry="20" stroke="currentColor" strokeWidth="1.2" opacity=".75" transform="rotate(2 60 25)" />
                  <path d="M12 39 Q40 43 68 40 T108 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".6" />
                </svg>
                <span className={`relative z-10 transition-transform group-hover:scale-105 ${isActive ? 'font-black scale-105' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Floating Navigation Dock */}
      <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 bg-[#fffef9]/95 backdrop-blur-md border-2 border-[#3f2a1e] rounded-3xl p-1.5 shadow-xl flex items-center justify-around overflow-x-auto" style={{ filter: 'url(#sketch-wobble)' }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all ${
                isActive
                  ? 'bg-[#e8b042] text-[#1a110e] font-black scale-105 shadow-sm'
                  : 'text-[#6a524a] hover:bg-[#ede0ca]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-hand text-[11px] font-bold leading-tight capitalize mt-0.5">
                {tab.label.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

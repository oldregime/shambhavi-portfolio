import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Briefcase, 
  Award, 
  Mail, 
  FileText, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Code2 
} from 'lucide-react';
import { playSound, toggleAudioMute, getAudioMuteState } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [isMuted, setIsMuted] = useState(getAudioMuteState());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const nextState = toggleAudioMute();
    setIsMuted(nextState);
    if (!nextState) playSound('click');
  };

  const navLinks = [
    { label: 'Projects', href: '#projects', icon: Layers },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: '100 Days DSA', href: '#leetcode', icon: Code2 },
    { label: 'Skills', href: '#skills', icon: Terminal },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-navy-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => playSound('click')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-navy-900 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-base">
              SJ
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
              Shambhavi Jha
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            </span>
            <span className="text-xs font-mono text-cyan-400 block -mt-1">
              Data & Cloud Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Actions & Resume */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all focus:outline-none"
            title={isMuted ? 'Unmute tactile audio feedback' : 'Mute tactile audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Resume Download CTA */}
          <a
            href="/resume.pdf"
            download="Shambhavi_Jha_Resume.pdf"
            onClick={() => playSound('success')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/95 border-b border-slate-800 px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    playSound('click');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-xl"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.label}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              download="Shambhavi_Jha_Resume.pdf"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 rounded-xl shadow-lg"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

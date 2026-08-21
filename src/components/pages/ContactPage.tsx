import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MapPin, Send, Copy, Check, Sparkles, ArrowLeft } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import confetti from 'canvas-confetti';
import { playSketchSound } from '../../utils/sketchAudio';

interface PageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSketchSound('chime');
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e8b042', '#7a9a7b', '#5d8aa8', '#d96b52']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    playSketchSound('chime');
    setSent(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="h-full flex flex-col justify-between py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#3f2a1e]/15 pb-2 shrink-0">
        <button
          onClick={() => onNavigate('resume')}
          className="flex items-center gap-1 font-hand text-sm font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Resume
        </button>
        <span className="font-marker text-xs text-[#6a524a]">
          📖 Back Cover • Contact & Note
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center flex-1 my-auto overflow-hidden">
        
        {/* Postbox Card */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-3" style={{ filter: 'url(#sketch-wobble)' }}>
            <h3 className="font-hand text-xl font-bold text-[#1a110e] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e8b042]" /> Contact Postbox
            </h3>

            <div className="p-3 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
              <span className="font-hand text-xs text-[#6a524a] block font-bold">Email Coordinate:</span>
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-xs text-[#1a110e] truncate font-bold">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded-lg bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e]"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#7a9a7b]" /> : <Copy className="w-3.5 h-3.5 text-[#1a110e]" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5 font-hand text-sm text-[#2b1d19]">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#ede0ca]/60">
                <MapPin className="w-3.5 h-3.5 text-[#d96b52]" />
                <span className="font-bold">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-0.5">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSketchSound('pop')}
                className="flex-1 py-2 px-2 rounded-xl bg-[#5d8aa8] text-white font-hand font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3f2a1e] hover:scale-105 transition-transform"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSketchSound('pop')}
                className="flex-1 py-2 px-2 rounded-xl bg-[#ede0ca] text-[#1a110e] font-hand font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3f2a1e] hover:scale-105 transition-transform"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-md space-y-3 relative" style={{ filter: 'url(#sketch-wobble)' }}>
            <h3 className="font-hand text-xl font-bold text-[#1a110e]">
              Write a note in the sketchbook ✉️
            </h3>

            {sent ? (
              <div className="p-6 rounded-2xl bg-[#edf7ed] border border-[#7a9a7b] text-center space-y-1">
                <p className="font-hand text-2xl font-bold text-[#7a9a7b]">Note Dispatched! 🌸</p>
                <p className="text-xs text-[#2b1d19]">Thank you {form.name}! I will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="space-y-0.5">
                    <label className="font-hand text-xs font-bold text-[#6a524a]">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3 py-1.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#1a110e] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <label className="font-hand text-xs font-bold text-[#6a524a]">Your Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-1.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#1a110e] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="font-hand text-xs font-bold text-[#6a524a]">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Discussing data engineering or cloud opportunities..."
                    className="w-full px-3 py-1.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#1a110e] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#d96b52] hover:bg-[#c65b43] text-white font-hand font-bold text-base border-2 border-[#3f2a1e] flex items-center justify-center gap-2 shadow-xs hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" /> Send Note
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <div className="flex items-center justify-start pt-2 border-t border-[#3f2a1e]/15 shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-base font-bold border border-[#3f2a1e] transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Cover
        </button>
      </div>

    </div>
  );
};

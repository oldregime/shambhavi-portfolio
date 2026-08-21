import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ArrowLeft } from 'lucide-react';
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
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-10 py-6 sm:py-10">
      
      <div className="flex items-center justify-between border-b-2 border-[#3f2a1e]/15 pb-4">
        <button
          onClick={() => onNavigate('resume')}
          className="flex items-center gap-1.5 font-hand text-base font-bold text-[#5d8aa8] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Resume
        </button>
        <span className="font-marker text-sm text-[#6a524a]">
          📖 Back Cover • Contact & Note
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0ec] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#d96b52]" style={{ filter: 'url(#sketch-wobble)' }}>
          <Mail className="w-4 h-4 text-[#d96b52]" />
          Leave a Note
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a110e] font-display">
          Let's Connect & Collaborate
        </h2>
        <p className="font-hand text-xl text-[#6a524a] max-w-xl">
          Reach out for data engineering roles, cloud projects, or just to chat about algorithms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Postbox Card */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-5" style={{ filter: 'url(#sketch-wobble)' }}>
            
            <h3 className="font-hand text-2xl font-bold text-[#1a110e] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#e8b042]" /> Contact Postbox
            </h3>

            {/* Email Coordinate */}
            <div className="p-4 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1.5">
              <span className="font-hand text-sm text-[#6a524a] block font-bold">Direct Email:</span>
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-xs sm:text-sm text-[#1a110e] truncate font-bold">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-xl bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] transition"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#7a9a7b]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <p className="font-hand text-sm text-[#7a9a7b] font-bold">✓ Email copied with confetti!</p>}
            </div>

            {/* Phone & Location */}
            <div className="space-y-2.5 font-hand text-lg text-[#2b1d19]">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#ede0ca]/60">
                <Phone className="w-5 h-5 text-[#5d8aa8]" />
                <span className="font-bold">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#ede0ca]/60">
                <MapPin className="w-5 h-5 text-[#d96b52]" />
                <span className="font-bold">{PERSONAL_INFO.location} (VIT Bhopal CSE)</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSketchSound('pop')}
                className="flex-1 py-3 px-3 rounded-2xl bg-[#5d8aa8] text-white font-hand font-bold text-base flex items-center justify-center gap-2 border-2 border-[#3f2a1e] hover:scale-105 transition-transform"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSketchSound('pop')}
                className="flex-1 py-3 px-3 rounded-2xl bg-[#ede0ca] text-[#1a110e] font-hand font-bold text-base flex items-center justify-center gap-2 border-2 border-[#3f2a1e] hover:scale-105 transition-transform"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
            </div>

          </div>
        </div>

        {/* Message Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-5 relative" style={{ filter: 'url(#sketch-wobble)' }}>
            
            <h3 className="font-hand text-2xl font-bold text-[#1a110e]">
              Write a message in the sketchbook ✉️
            </h3>

            {sent ? (
              <div className="p-8 rounded-3xl bg-[#edf7ed] border-2 border-[#7a9a7b] text-center space-y-2">
                <p className="font-hand text-3xl font-bold text-[#7a9a7b]">Note Dispatched! 🌸</p>
                <p className="text-sm text-[#2b1d19]">
                  Thank you {form.name}! You can also connect directly via LinkedIn or email at {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-hand text-base font-bold text-[#6a524a]">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-sm text-[#1a110e] font-sans font-medium focus:outline-none focus:border-[#3f2a1e]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-hand text-base font-bold text-[#6a524a]">Your Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-sm text-[#1a110e] font-sans font-medium focus:outline-none focus:border-[#3f2a1e]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-hand text-base font-bold text-[#6a524a]">Message / Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Discussing data engineering opportunities, analytics projects, or collaborations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-sm text-[#1a110e] font-sans font-medium focus:outline-none focus:border-[#3f2a1e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#d96b52] hover:bg-[#c65b43] text-white font-hand font-bold text-xl border-2 border-[#3f2a1e] flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                  style={{ filter: 'url(#sketch-wobble)' }}
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      <div className="flex items-center justify-start pt-8 border-t-2 border-[#3f2a1e]/15">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ede0ca] hover:bg-[#d9cca8] text-[#1a110e] font-hand text-lg font-bold border-2 border-[#3f2a1e] transition-transform hover:scale-105"
          style={{ filter: 'url(#sketch-wobble)' }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cover (Page 01)
        </button>
      </div>

    </div>
  );
};

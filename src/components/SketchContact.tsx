import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { playSketchSound } from '../utils/sketchAudio';

export const SketchContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSketchSound('chime');
    confetti({
      particleCount: 80,
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
    <section id="contact" className="relative py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0ec] border-2 border-[#3f2a1e] text-xs font-hand font-bold text-[#d96b52]" style={{ filter: 'url(#sketch-wobble)' }}>
            <Mail className="w-3.5 h-3.5 text-[#d96b52]" />
            Notebook Section 07
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2b1f1d] font-display">
            Leave a Note or Say Hi!
          </h2>
          <p className="font-hand text-xl text-[#6a524a] max-w-xl mx-auto">
            Looking for data engineering roles, cloud analytics discussions, and collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Postcard Coordinates */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4" style={{ filter: 'url(#sketch-wobble)' }}>
              
              <h3 className="font-hand text-xl font-bold text-[#2b1f1d] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e8b042]" /> Shambhavi's Postbox
              </h3>

              {/* Email with copy */}
              <div className="p-3.5 rounded-2xl bg-[#f5ebd9] border border-[#d9cca8] space-y-1">
                <span className="font-hand text-xs text-[#6a524a] block font-bold">Email Coordinate:</span>
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-xs text-[#2b1f1d] truncate">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#ede0ca] hover:bg-[#d9cca8] text-[#2b1f1d] transition"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#7a9a7b]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copied && <p className="font-hand text-xs text-[#7a9a7b] font-bold">✓ Copied with confetti!</p>}
              </div>

              {/* Phone & Location */}
              <div className="space-y-2 font-hand text-base text-[#40302b]">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#ede0ca]/60">
                  <Phone className="w-4 h-4 text-[#5d8aa8]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#ede0ca]/60">
                  <MapPin className="w-4 h-4 text-[#d96b52]" />
                  <span>{PERSONAL_INFO.location} (VIT Bhopal CSE)</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSketchSound('pop')}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#5d8aa8] text-white font-hand font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3f2a1e] hover:scale-105 transition-transform"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSketchSound('pop')}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#ede0ca] text-[#2b1f1d] font-hand font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3f2a1e] hover:scale-105 transition-transform"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>

            </div>
          </div>

          {/* Direct Note Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#fffef9] border-2 border-[#3f2a1e] shadow-lg space-y-4 relative" style={{ filter: 'url(#sketch-wobble)' }}>
              
              <h3 className="font-hand text-2xl font-bold text-[#2b1f1d]">
                Write a note in the sketchbook ✉️
              </h3>

              {sent ? (
                <div className="p-6 rounded-2xl bg-[#edf7ed] border-2 border-[#7a9a7b] text-center space-y-2">
                  <p className="font-hand text-2xl font-bold text-[#7a9a7b]">Note Recorded! 🌸</p>
                  <p className="text-xs text-[#40302b]">
                    Thank you {form.name}! You can also reach me directly at {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-hand text-sm font-bold text-[#6a524a]">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#2b1f1d] focus:outline-none focus:border-[#3f2a1e]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-hand text-sm font-bold text-[#6a524a]">Your Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#2b1f1d] focus:outline-none focus:border-[#3f2a1e]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-hand text-sm font-bold text-[#6a524a]">Message</label>
                    <textarea
                      rows={3}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Say hello or discuss data/cloud opportunities..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#f5ebd9] border border-[#d9cca8] text-xs text-[#2b1f1d] focus:outline-none focus:border-[#3f2a1e]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-full bg-[#d96b52] hover:bg-[#c65b43] text-white font-hand font-bold text-lg border-2 border-[#3f2a1e] flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                    style={{ filter: 'url(#sketch-wobble)' }}
                  >
                    <Send className="w-4 h-4" /> Send Note
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

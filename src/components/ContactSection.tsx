import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSound('success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#10b981', '#38bdf8', '#818cf8']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    playSound('success');
    setFormSent(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Available for full-time data engineering, cloud analytics, and innovative AI development opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 shadow-xl space-y-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Contact Info
              </h3>

              {/* Email Chip with Copy Button */}
              <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Email Address</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-300 truncate">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && <p className="text-[11px] font-mono text-emerald-400">✓ Email copied with confetti!</p>}
              </div>

              {/* Phone & Location */}
              <div className="space-y-3 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950 border border-slate-800">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="flex-1 py-3 px-4 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-xs font-semibold text-sky-300 flex items-center justify-center gap-2 transition"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound('click')}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 shadow-xl backdrop-blur-xl space-y-6">
              <h3 className="text-lg font-bold text-white">
                Send a Direct Message
              </h3>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, {formData.name}. You can also connect via LinkedIn or email directly at {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Message / Inquiries</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discussing data engineering opportunities, analytics projects, or collaborations..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" /> Send Message
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

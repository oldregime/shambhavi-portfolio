import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/audio';

export const CertificationsGrid: React.FC = () => {
  return (
    <section id="certifications" className="relative z-10 py-20 bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Verified Technical Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Certifications & Badges
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Industry-recognized credentials in AWS Cloud Architecture, Marketing Analytics, and IBM Data Science.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">
                    {cert.issuer}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800/80">
                  <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {cert.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playSound('click')}
                    className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-emerald-500/20 text-[11px] font-semibold text-emerald-300 hover:text-emerald-200 border border-slate-700 hover:border-emerald-500/30 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Verified Badge</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

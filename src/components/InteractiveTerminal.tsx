import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_GROUPS } from '../data/portfolioData';
import { playSound } from '../utils/audio';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            🚀 Shambhavi Jha — Data Engineering & Cloud Interactive Terminal v2.4
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-emerald-400 font-mono font-bold">help</span> to view available system commands.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    playSound('terminal');

    let outputContent: React.ReactNode = null;

    if (cmd === 'help') {
      outputContent = (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono py-1">
          <div><span className="text-cyan-400 font-bold">whoami</span> - Display developer profile summary</div>
          <div><span className="text-cyan-400 font-bold">skills</span> - List all verified technical competencies</div>
          <div><span className="text-cyan-400 font-bold">projects</span> - View all analytics & web projects</div>
          <div><span className="text-cyan-400 font-bold">experience</span> - View Clovertex, ISL & VIT background</div>
          <div><span className="text-cyan-400 font-bold">query --analytics</span> - Simulate clinical patient data aggregation</div>
          <div><span className="text-cyan-400 font-bold">leetcode --day 100</span> - View #100DaysOfCode Day 100 solution</div>
          <div><span className="text-cyan-400 font-bold">contact</span> - Show direct contact coordinates</div>
          <div><span className="text-cyan-400 font-bold">clear</span> - Clear terminal session output</div>
        </div>
      );
    } else if (cmd === 'whoami') {
      outputContent = (
        <div className="space-y-1.5 text-xs text-slate-300 font-mono">
          <p><span className="text-emerald-400">Name:</span> {PERSONAL_INFO.name}</p>
          <p><span className="text-emerald-400">Role:</span> {PERSONAL_INFO.title}</p>
          <p><span className="text-emerald-400">Education:</span> {PERSONAL_INFO.education}</p>
          <p><span className="text-emerald-400">Current Focus:</span> AWS Cloud Pipelines, Data Analytics, Healthcare Intelligence, Generative AI</p>
        </div>
      );
    } else if (cmd === 'skills') {
      outputContent = (
        <div className="space-y-2 text-xs font-mono">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category}>
              <span className="text-cyan-300 font-bold">{group.category}:</span>{' '}
              <span className="text-slate-300">{group.skills.map((s) => s.name).join(', ')}</span>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'projects') {
      outputContent = (
        <div className="space-y-2 text-xs font-mono">
          {PROJECTS.map((p) => (
            <div key={p.id} className="border-l-2 border-cyan-500/60 pl-2">
              <p className="text-white font-bold">{p.title} ({p.category})</p>
              <p className="text-slate-400">{p.description}</p>
              <p className="text-cyan-400 text-[11px]">Stack: {p.tags.join(' | ')}</p>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'experience') {
      outputContent = (
        <div className="space-y-2 text-xs font-mono">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="border-l-2 border-sky-500/60 pl-2">
              <p className="text-white font-bold">{exp.role} @ {exp.company} ({exp.period})</p>
              <p className="text-slate-400">{exp.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'query --analytics') {
      outputContent = (
        <div className="space-y-1.5 text-xs font-mono text-slate-300">
          <p className="text-cyan-400">&gt; EXECUTING HEALTHCARE ANALYTICS SQL PIPELINE...</p>
          <p className="text-slate-400">[INFO] Loaded 10,000 patient records into Pandas DataFrame in 0.014s</p>
          <p className="text-slate-400">[INFO] Imputing missing values with median department baseline... [OK]</p>
          <div className="bg-navy-950 p-2 rounded border border-slate-800 text-[11px]">
            <p className="text-emerald-400 font-bold">DEPARTMENT | AVG_LENGTH_OF_STAY | OCCUPANCY_RATE | SEVERITY_INDEX</p>
            <p>Cardiology   | 4.2 days           | 94.2%          | 0.82</p>
            <p>Neurology    | 6.8 days           | 88.5%          | 0.91</p>
            <p>Orthopedics  | 3.1 days           | 76.4%          | 0.64</p>
          </div>
          <p className="text-emerald-400">✓ Analytics pipeline completed with 0 errors.</p>
        </div>
      );
    } else if (cmd === 'leetcode --day 100') {
      outputContent = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <p className="text-purple-400 font-bold">&gt; LeetCode 2364: Count Number of Bad Pairs (Accepted ✅)</p>
          <p className="text-slate-400">Approach: O(n) Linear HashMap Frequency Analysis</p>
          <p className="text-slate-300">Formula: Total Pairs = n*(n-1)/2. Good Pairs = sum(freq*(freq-1)/2). Bad = Total - Good.</p>
          <p className="text-emerald-400">Milestone Completed: Day 100/100 of #100DaysOfCode!</p>
        </div>
      );
    } else if (cmd === 'contact') {
      outputContent = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <p><span className="text-cyan-400">Email:</span> {PERSONAL_INFO.email}</p>
          <p><span className="text-cyan-400">Phone:</span> {PERSONAL_INFO.phone}</p>
          <p><span className="text-cyan-400">LinkedIn:</span> {PERSONAL_INFO.linkedin}</p>
          <p><span className="text-cyan-400">GitHub:</span> {PERSONAL_INFO.github}</p>
        </div>
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      outputContent = (
        <p className="text-xs font-mono text-rose-400">
          Command not recognized: "{cmd}". Type <span className="text-cyan-400 font-bold">help</span> to view supported commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: input, output: outputContent }]);
    setInput('');
  };

  const handlePresetClick = (preset: string) => {
    setInput(preset);
    playSound('click');
  };

  return (
    <section id="terminal" className="relative z-10 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            Live Query & Command Center
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Interactive Data Engineering CLI
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Test and inspect my skills, data queries, and experience directly in an interactive live shell.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div className="rounded-2xl bg-navy-950/95 border border-slate-800 shadow-2xl shadow-cyan-950/30 overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2">shambhavi@data-pipeline:~</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playSound('click');
                  setHistory([]);
                }}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition"
              >
                <RefreshCw className="w-3 h-3" /> Clear
              </button>
            </div>
          </div>

          {/* Preset Quick Chips */}
          <div className="px-4 py-2 bg-navy-900/60 border-b border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Quick Run:
            </span>
            {['whoami', 'skills', 'projects', 'query --analytics', 'leetcode --day 100', 'contact'].map((preset) => (
              <button
                key={preset}
                onClick={() => handlePresetClick(preset)}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-slate-700 transition"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-sm space-y-4 max-h-[380px] overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-slate-400">&gt;</span>
                    <span className="font-bold">{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Input Form */}
          <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/90 border-t border-slate-800">
            <span className="text-cyan-400 font-mono font-bold mr-2">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command (e.g. whoami, query --analytics, help)..."
              className="flex-1 bg-transparent font-mono text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 transition focus:outline-none"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

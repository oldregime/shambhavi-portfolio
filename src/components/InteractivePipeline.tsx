import React, { useState } from 'react';
import { Database, Cpu, Cloud, Sparkles, CheckCircle } from 'lucide-react';
import { playSketchSound } from '../utils/sketchAudio';

export const InteractivePipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: '1. Ingest Data', icon: Database, tech: 'Clinical CSV / Streams', color: '#5d8aa8', note: 'Parsing 10k+ patient records without loss' },
    { name: '2. Pandas ETL', icon: Cpu, tech: 'NumPy & Schema Clean', color: '#7a9a7b', note: 'Outlier mitigation & correlation matrix' },
    { name: '3. AWS Cloud', icon: Cloud, tech: 'EC2 & S3 Buckets', color: '#e8b042', note: 'Low-latency encrypted storage & batch compute' },
    { name: '4. GenAI Insights', icon: Sparkles, tech: 'LLM Extraction', color: '#d96b52', note: 'Automated clinical report synthesis' },
  ];

  const handleStepClick = (idx: number) => {
    playSketchSound('pop');
    setActiveStep(idx);
  };

  return (
    <div className="p-3 rounded-2xl bg-[#f5ebd9]/80 border border-[#d9cca8] space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-marker text-xs text-[#6a524a] flex items-center gap-1">
          ⚙️ Interactive Data Pipeline Blueprint (Click steps to simulate)
        </span>
        <span className="font-hand text-xs font-bold text-[#7a9a7b] flex items-center gap-1">
          <CheckCircle className="w-3 h-3" /> P99 &lt; 50ms
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 items-center">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={s.name}
              onClick={() => handleStepClick(idx)}
              className={`p-1.5 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#fffef9] border-[#3f2a1e] shadow-sm scale-102 ring-2 ring-[#e8b042]'
                  : 'bg-[#ede0ca]/60 border-[#3f2a1e]/20 hover:bg-[#fffef9]/60'
              }`}
            >
              <div className="flex items-center gap-1">
                <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />
                <span className="font-hand text-xs font-bold text-[#1a110e] truncate">{s.name.split('.')[1]}</span>
              </div>
              <p className="text-[10px] font-mono text-[#6a524a] truncate -mt-0.5">{s.tech}</p>
            </button>
          );
        })}
      </div>

      <div className="p-1.5 rounded-lg bg-[#fffef9] border border-[#3f2a1e]/15 flex items-center justify-between">
        <span className="font-hand text-xs text-[#5d8aa8] font-bold">
          Active Stage Output:
        </span>
        <span className="font-mono text-[11px] text-[#1a110e] truncate">
          {steps[activeStep].note}
        </span>
      </div>
    </div>
  );
};

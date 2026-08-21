import React, { useRef, useState, useEffect } from 'react';
import { PenTool, Eraser, Trash2 } from 'lucide-react';
import { playSketchSound } from '../utils/sketchAudio';

export const DoodleScratchpad: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('#2b1f1d'); // Charcoal ink
  const lineWidth = 3;
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const colors = [
    { label: 'Charcoal', value: '#2b1f1d' },
    { label: 'Blue Ink', value: '#2b5c8f' },
    { label: 'Red Pen', value: '#c73e3a' },
    { label: 'Green Ink', value: '#3f7a4d' },
    { label: 'Highlighter', value: '#e8b042' },
  ];

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [isOpen]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    playSketchSound('scribble');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = isEraser ? '#fbf7ef' : color;
    ctx.lineWidth = isEraser ? 24 : lineWidth;
    ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    playSketchSound('page-flip');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          playSketchSound('pop');
          setIsOpen(!isOpen);
        }}
        className={`fixed right-4 top-28 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-[#3f2a1e] font-hand text-xs font-bold shadow-md transition-transform hover:scale-105 ${
          isOpen ? 'bg-[#e8b042] text-[#1a110e]' : 'bg-[#fffef9] text-[#2b1f1d]'
        }`}
        style={{ filter: 'url(#sketch-wobble)' }}
        title="Doodle or sketch directly on the notebook"
      >
        <PenTool className="w-3.5 h-3.5 text-[#d96b52]" />
        <span>{isOpen ? 'close pencil' : 'doodle mode ✏️'}</span>
      </button>

      {/* Doodle Canvas & Floating Tool Palette */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pointer-events-auto">
          {/* Transparent Scribble Canvas */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="absolute inset-0 cursor-crosshair"
          />

          {/* Floating Pen Palette */}
          <div
            className="fixed top-36 right-4 z-50 p-2.5 rounded-2xl bg-[#fffef9]/95 backdrop-blur-md border-2 border-[#3f2a1e] shadow-xl flex flex-col gap-2.5 items-center"
            style={{ filter: 'url(#sketch-wobble)' }}
          >
            <span className="font-hand text-[11px] font-bold text-[#6a524a]">Inks</span>
            
            {/* Color swatches */}
            <div className="flex flex-col gap-1.5">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => {
                    playSketchSound('pop');
                    setIsEraser(false);
                    setColor(c.value);
                  }}
                  className={`w-6 h-6 rounded-full border border-[#3f2a1e] transition-transform ${
                    color === c.value && !isEraser ? 'scale-125 ring-2 ring-[#e8b042]' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.label}
                />
              ))}
            </div>

            <div className="w-full h-px bg-[#3f2a1e]/20" />

            {/* Eraser */}
            <button
              onClick={() => {
                playSketchSound('pop');
                setIsEraser(true);
              }}
              className={`p-1.5 rounded-lg border border-[#3f2a1e] transition ${
                isEraser ? 'bg-[#f4a282] text-white' : 'bg-[#ede0ca] text-[#1a110e]'
              }`}
              title="Eraser"
            >
              <Eraser className="w-4 h-4" />
            </button>

            {/* Clear All */}
            <button
              onClick={clearCanvas}
              className="p-1.5 rounded-lg bg-[#ede0ca] hover:bg-[#d9cca8] text-[#d96b52] border border-[#3f2a1e] transition"
              title="Clear all doodles"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

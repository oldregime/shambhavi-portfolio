import React, { useEffect, useRef } from 'react';

export const DataStreamsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing data packets and neural cloud nodes
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 70);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const colors = ['#06b6d4', '#10b981', '#38bdf8', '#818cf8', '#a855f7'];
    const labels = ['SQL', 'AWS', 'Python', 'Pandas', 'EC2', 'EDA', 'LLM', 'DSA', 'S3'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        label: i < labels.length ? labels[i] : undefined
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with data pipeline lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Subtle pull toward mouse
        const dxMouse = mouseX - nodeA.x;
        const dyMouse = mouseY - nodeA.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          nodeA.x += (dxMouse / distMouse) * 0.3;
          nodeA.y += (dyMouse / distMouse) * 0.3;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = 1 - dist / 130;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = nodeA.color;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fill();

        if (nodeA.label) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fillText(nodeA.label, nodeA.x + 8, nodeA.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
};

import React, { useEffect, useState } from 'react';

export const KittyPawCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[99999] transition-opacity duration-150"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-12px, -12px)',
      }}
    >
      <div
        className="transition-transform duration-75"
        style={{
          transform: clicking ? 'scale(0.8) rotate(-10deg)' : 'scale(1) rotate(-15deg)',
          transformOrigin: '12px 12px',
        }}
      >
        <svg
          viewBox="0 0 58 62"
          width="32"
          height="34"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(2px 3px 2px rgba(63,42,30,0.25))' }}
        >
          {/* Main Paw Base */}
          <g fill="#9a6539" stroke="#3f2a1e" strokeWidth="2.2" strokeLinejoin="round">
            {/* Toe 1 */}
            <ellipse cx="9" cy="19" rx="6" ry="8" transform="rotate(-24 9 19)" />
            {/* Toe 2 */}
            <ellipse cx="21" cy="10" rx="6.5" ry="8.5" transform="rotate(-9 21 10)" />
            {/* Toe 3 */}
            <ellipse cx="36" cy="10" rx="6.5" ry="8.5" transform="rotate(9 36 10)" />
            {/* Toe 4 */}
            <ellipse cx="49" cy="19" rx="6" ry="8" transform="rotate(24 49 19)" />
            {/* Main Pad */}
            <path d="M12 43 C12 31 20 24 29 25 C38 24 46 31 46 43 C46 54 38 59 29 55 C20 59 12 54 12 43 Z" />
          </g>

          {/* Inner Pink Pads */}
          <g fill="#f4a282" opacity="0.85">
            <ellipse cx="9" cy="17" rx="3" ry="3.8" />
            <ellipse cx="21" cy="8" rx="3.2" ry="4" />
            <ellipse cx="36" cy="8" rx="3.2" ry="4" />
            <ellipse cx="49" cy="17" rx="3" ry="3.8" />
            <path d="M21 43 C21 36 25 32 29 32 C33 32 37 36 37 43 C34 41 32 42 29 46 C26 42 24 41 21 43 Z" />
          </g>

          {/* Tiny Highlight */}
          <circle cx="28" cy="36" r="1.5" fill="#fff" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
};

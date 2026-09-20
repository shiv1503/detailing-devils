import React, { useEffect, useState } from 'react';

export const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices and if prefers-reduced-motion is false
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('.cursor-pointer'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Red Spotlight following cursor */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          left: -150,
          top: -150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.08) 0%, rgba(229, 9, 20, 0.02) 45%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* Precision Dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-all duration-75 ease-out hidden md:block ${
          isHovered
            ? 'w-8 h-8 -ml-4 -mt-4 bg-devil-red/20 border border-devil-red scale-125'
            : 'w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-devil-red shadow-[0_0_10px_#e50914]'
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

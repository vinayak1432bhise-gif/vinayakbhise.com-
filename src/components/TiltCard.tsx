import React, { useState, useRef, MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'teal' | 'gold' | 'none';
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'teal',
  maxTilt = 8,
  scale = 1.02,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowBorder =
    glowColor === 'teal'
      ? 'border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_10px_35px_-10px_rgba(0,229,255,0.25)]'
      : glowColor === 'gold'
      ? 'border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_10px_35px_-10px_rgba(212,175,55,0.25)]'
      : 'border-white/10 hover:border-white/20';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
        transformStyle: 'preserve-3d'
      }}
      className={`relative overflow-hidden rounded-2xl glass-panel border ${glowBorder} transition-all duration-200 ${className}`}
    >
      {/* Glare Reflection Layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-20"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`,
          opacity: glarePosition.opacity
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

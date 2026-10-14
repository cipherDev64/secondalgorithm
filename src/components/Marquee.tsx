import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "CRAFT OVER TEMPLATES",
    "100% INDEPENDENT",
    "SUB-SECOND LATENCY",
    "HUMAN ART DIRECTION",
    "INTELLIGENT WORKFLOWS",
    "BESPOKE CODE",
    "TACTILE INTERFACES",
    "NO GENERIC FRAMEWORKS"
  ];

  return (
    <div className="relative py-4 bg-[#0D0F14] text-white border-y border-white/10 overflow-hidden select-none">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {/* Render 2 sets for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] font-medium text-gray-300 uppercase">
              {text}
            </span>
            <span className="text-[#1648E8] text-base leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../../data/content';

export const BeforeAfterSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_DATA[activeCategoryIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="relative py-24 bg-[#060608] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSFORMATION SHOWCASE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            SEE THE DIFFERENCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Drag the interactive slider below to inspect the surgical difference between neglected paint and our flawless atelier finish.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {BEFORE_AFTER_DATA.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategoryIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategoryIndex === idx
                  ? 'bg-devil-red text-white shadow-devil-glow'
                  : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Viewer Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            className="relative h-[360px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden border border-white/15 select-none shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-ew-resize group"
          >
            {/* AFTER Image (Background Base) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={currentItem.afterImage}
                alt={currentItem.afterLabel}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              {/* After Tag */}
              <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest shadow-lg">
                {currentItem.afterLabel}
              </div>
            </div>

            {/* BEFORE Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden will-change-[clip-path]"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src={currentItem.beforeImage}
                alt={currentItem.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
              />
              {/* Before Tag */}
              <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-widest shadow-lg">
                {currentItem.beforeLabel}
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Glowing Line */}
              <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-gradient-to-b from-white via-devil-red to-white shadow-[0_0_15px_#e50914]" />

              {/* Center Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0B0B0F] border-2 border-devil-red flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.8)] text-white">
                <ArrowLeftRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Range Slider for Accessibility & Direct Scrubbing */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              aria-label="Comparison slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Details & Metric bar below slider */}
          <div className="mt-6 p-5 sm:p-6 rounded-xl glass-card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display text-lg font-bold text-white uppercase">
                {currentItem.title}
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl">
                {currentItem.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3.5 py-2 rounded-lg bg-devil-red/10 border border-devil-red/30 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-devil-red" />
                <span className="text-xs font-bold text-white font-mono">
                  {currentItem.stats}
                </span>
              </div>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                {Math.round(sliderPosition)}% Split
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

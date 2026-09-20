import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-[#060608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-devil-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>OWNER TESTIMONIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            WHAT OUR CLIENTS SAY.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            From vintage collector exotics to high-powered daily performance flagships, hear from clients who trust the Devils.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl transition-all duration-300">
            {/* Background Red Accents */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-devil-red" />
            </div>

            <div className="relative z-10 flex flex-col justify-between">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-devil-red text-devil-red" />
                ))}
                <span className="ml-2 text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                  5.0 / 5.0
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="text-lg sm:text-2xl font-normal text-neutral-100 leading-relaxed tracking-wide italic mb-8">
                “{current.quote}”
              </blockquote>

              {/* Author & Vehicle Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold uppercase text-white tracking-wide">
                    {current.clientName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                    <span className="text-devil-red font-semibold">{current.vehicle}</span>
                    <span>•</span>
                    <span>{current.service}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{current.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx ? 'w-8 bg-devil-red' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Next / Previous Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/15 text-white flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-devil-red hover:bg-devil-red-light text-white flex items-center justify-center shadow-devil-glow transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

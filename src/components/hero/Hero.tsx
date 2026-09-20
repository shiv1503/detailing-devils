import { ArrowRight, Sparkles, ChevronDown, Award, ShieldCheck, Flame } from 'lucide-react';
import { BRAND } from '../../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero = ({ onOpenBooking }: HeroProps) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
    >
      {/* Background Image Container with Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out transform scale-105 hover:scale-110 animate-float-slow"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85')`,
            backgroundPosition: 'center 45%',
          }}
        />

        {/* Cinematic Vignette, Dark Gradients & Glass Reflections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/90 via-transparent to-[#060608]/80" />
        
        {/* Ambient Red Glow Spotlights */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-devil-red/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-devil-red/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Fine Noise / Texture */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

        {/* Subtle Light Reflection Streaks */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(229,9,20,0.2)] mb-6 animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-devil-red animate-ping" />
          <span className="w-2 h-2 -ml-3 rounded-full bg-devil-red" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white">
            PREMIUM AUTOMOTIVE DETAILING
          </span>
          <Sparkles className="w-3.5 h-3.5 text-devil-red" />
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.02] uppercase drop-shadow-2xl">
          YOUR CAR.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-devil-red text-red-glow">
            OUR OBSESSION.
          </span>
        </h1>

        {/* Tagline & Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed tracking-wide">
          {BRAND.subheadline}
        </p>

        {/* Tagline Highlight */}
        <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-devil-red uppercase">
          <span>“{BRAND.tagline}”</span>
        </div>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-devil-red hover:bg-devil-red-light text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-lg shadow-devil-glow hover:shadow-devil-glow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>BOOK A DETAIL</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-lg border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <span>EXPLORE SERVICES</span>
            <ChevronDown className="w-4 h-4 text-devil-silver group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Quick Credibility Trust Badges */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-devil-red" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">9H Nano Ceramic</p>
              <p className="text-[11px] text-neutral-400">Certified Laboratory Hardness</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-devil-red" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Flawless Handover</p>
              <p className="text-[11px] text-neutral-400">99.8% Client Satisfaction</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 text-devil-red" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Paint-Safe Tech</p>
              <p className="text-[11px] text-neutral-400">Digital Micron Leveling</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group" onClick={scrollToServices}>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-devil-red transition-colors">
          <div className="w-1 h-2 bg-devil-red rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

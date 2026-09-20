import React from 'react';
import { Eye, Award, ShieldAlert, Target, CheckCircle2, Flame, Shield } from 'lucide-react';
import { WHY_US_PILLARS, STATS } from '../../data/content';

export const WhyUsSection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Eye className="w-5 h-5 text-devil-red" />;
      case 1:
        return <Award className="w-5 h-5 text-devil-red" />;
      case 2:
        return <ShieldAlert className="w-5 h-5 text-devil-red" />;
      case 3:
        return <Target className="w-5 h-5 text-devil-red" />;
      default:
        return <Flame className="w-5 h-5 text-devil-red" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#08080C] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>STANDARDS WITHOUT EQUAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            WHY TRUST THE DEVILS?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            In an industry filled with hasty washes and cosmetic fillers, our atelier exists to deliver genuine scientific paint restoration and permanent protection.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="glass-card rounded-2xl p-6 border border-white/10 glass-card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-2.5 py-1 rounded">
                    PILLAR {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-devil-red/60 group-hover:bg-devil-red/10 transition-all duration-300">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide group-hover:text-devil-red-light transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-neutral-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-devil-red shrink-0" />
                <span>Strict Studio Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-black via-[#0F0F16] to-black border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {STATS.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="space-y-1 relative sm:border-r last:border-r-0 border-white/10 pb-4 sm:pb-0"
              >
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-devil-red drop-shadow-sm">
                  {stat.value}
                </p>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-neutral-400">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

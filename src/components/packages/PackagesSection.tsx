import { Check, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { PACKAGES } from '../../data/content';
import { VehicleEstimator } from './VehicleEstimator';

interface PackagesSectionProps {
  onOpenBooking: (packageName?: string) => void;
}

export const PackagesSection = ({ onOpenBooking }: PackagesSectionProps) => {
  return (
    <section id="packages" className="relative py-24 bg-[#060608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-devil-red/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED STUDIO PACKAGES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            PRECISION PACKAGES.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Tailored detailing regimens engineered for daily preservation, deep aesthetic revival, or impenetrable ceramic protection.
          </p>
        </div>

        {/* 3 Tiered Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.highlighted;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#181822] via-[#0E0E14] to-[#0B0B0F] border-2 border-devil-red shadow-[0_0_35px_rgba(229,9,20,0.3)] lg:-translate-y-2'
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular / Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-devil-red text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-[0_0_15px_#e50914] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="p-6 sm:p-8 border-b border-white/[0.08]">
                  {!isFeatured && (
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest bg-white/[0.03] px-2.5 py-1 rounded border border-white/10 inline-block mb-3">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-devil-red uppercase tracking-wider mt-1">
                    {pkg.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                    <span>Est. Turnaround:</span>
                    <span className="text-white font-bold font-mono">{pkg.timeEstimate}</span>
                  </div>
                </div>

                {/* Card Features List */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                      INCLUDED IN PROTOCOL:
                    </p>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-devil-red/20 border border-devil-red/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-devil-red" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For + CTA */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                    <div className="text-[11px] text-neutral-400">
                      <span className="font-bold text-neutral-300">Recommended For: </span>
                      {pkg.idealFor}
                    </div>

                    <button
                      onClick={() => onOpenBooking(pkg.name)}
                      className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                        isFeatured
                          ? 'bg-devil-red hover:bg-devil-red-light text-white shadow-devil-glow hover:shadow-devil-glow-lg'
                          : 'bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 hover:border-white/25'
                      }`}
                    >
                      <span>GET A QUOTE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Pricing Disclaimer Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 max-w-2xl mx-auto flex items-center gap-3 text-center sm:text-left justify-center">
          <AlertCircle className="w-4 h-4 text-devil-red shrink-0" />
          <p className="text-xs text-neutral-300 font-medium">
            Pricing varies depending on vehicle size, condition and selected treatment.
          </p>
        </div>

        {/* Embedded Interactive Vehicle Estimator */}
        <VehicleEstimator onSelectEstimate={(details) => onOpenBooking(details)} />
      </div>
    </section>
  );
};

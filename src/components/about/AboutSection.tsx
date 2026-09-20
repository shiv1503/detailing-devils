import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Award, Sparkles, X } from 'lucide-react';

export const AboutSection = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="relative py-24 bg-[#08080C] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Large Cinematic Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                alt="Detailing Devils master artisan machine polishing a supercar"
                loading="lazy"
                className="w-full h-[420px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-mono text-devil-red font-bold">
                    ATELIER PHILOSOPHY
                  </p>
                  <p className="text-xs font-bold text-white uppercase mt-0.5">
                    Zero Fillers. Pure Mechanical Correction.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-devil-red/20 border border-devil-red/50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-devil-red" />
                </div>
              </div>
            </div>

            {/* Subtle decorative geometric border */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-devil-red/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-devil-red/40 rounded-br-xl pointer-events-none" />
          </div>

          {/* Right: Brand Story Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              <span>THE DEVIL IN THE DETAIL</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[1.08]">
              DETAILING ISN'T A WASH.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-devil-red">
                IT'S A CRAFT.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              At Detailing Devils, we believe every vehicle deserves more than a basic wash. Our approach combines meticulous preparation, professional detailing techniques and premium protection to bring out the character of every vehicle we work on.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Where generic centers rely on silicone glazes that wash away after three rains, our team invests dozens of hours leveling clear coats down to uniform micro-flatness. The result is pure specular gloss, mirror reflection, and durable protection engineered to endure the harshest elements.
            </p>

            {/* Studio Pillars Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Filtered Cleanroom Environment: </strong>
                  Positive pressure ventilation prevents dust contamination during ceramic application.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Multi-Angle High-CRI Lighting: </strong>
                  Simulates intense direct sunlight to expose micro-marring invisible under normal fluorescent lamps.
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Certified Master Technicians: </strong>
                  Trained on ultra-soft Japanese clears, hard German ceramics, and fragile exotic finishes.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => setShowStoryModal(true)}
                className="px-6 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2.5 transition-all duration-200 group"
              >
                <span>MEET DETAILING DEVILS</span>
                <ArrowRight className="w-4 h-4 text-devil-red group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-2xl w-full bg-[#0B0B0F] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-devil-red text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-devil-red">
              <Award className="w-4 h-4" />
              <span>THE DETAILING DEVILS MANIFESTO</span>
            </div>

            <h3 className="font-display text-2xl font-black uppercase text-white">
              UNLEASH THE DEVIL IN YOUR DETAIL.
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                Founded out of a deep reverence for high-performance automotive engineering, Detailing Devils was built to challenge the status quo of rapid, abrasive car washes.
              </p>
              <p>
                To us, paint is not merely colored metal; it is a canvas of reflections. We treat every vehicle — whether a vintage air-cooled Porsche, a menacing AMG, or a brand new electric flagship — with the respect of a bespoke work of art.
              </p>
              <p>
                Our laboratory-tested ceramic coatings, surgical multi-stage polishing compounds, and dust-filtered cleanrooms represent our relentless pursuit of vehicular perfection.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Precision • Protection • Perfection</span>
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-4 py-2 bg-devil-red text-white text-xs font-bold uppercase tracking-wider rounded-lg"
              >
                Close Manifesto
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

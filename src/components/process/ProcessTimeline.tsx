import React, { useState } from 'react';
import { Scan, Sparkles, Flame, ShieldCheck, CheckCircle, ChevronRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/content';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Scan className="w-5 h-5" />;
      case 1:
        return <Sparkles className="w-5 h-5" />;
      case 2:
        return <Flame className="w-5 h-5" />;
      case 3:
        return <ShieldCheck className="w-5 h-5" />;
      case 4:
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  const currentStepData = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="relative py-24 bg-[#08080C] border-y border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-devil-red/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <span>METHODICAL MASTERY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            THE 5-STAGE DETAILING PROTOCOL.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            No shortcuts. Every vehicle undergoes a rigorous five-stage precision protocol engineered to achieve concours-level results.
          </p>
        </div>

        {/* Interactive Step Switcher Navigation */}
        <div className="relative mb-12">
          {/* Progress connecting bar for desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-white/10 -z-0">
            <div
              className="h-full bg-gradient-to-r from-devil-red via-devil-red to-devil-red-light transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#111117] border-2 border-devil-red shadow-[0_0_25px_rgba(229,9,20,0.3)] transform -translate-y-1'
                      : isPassed
                      ? 'bg-black/50 border border-white/20 hover:border-white/40'
                      : 'bg-black/30 border border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-devil-red text-white'
                          : 'bg-white/10 text-neutral-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'text-devil-red bg-devil-red/20'
                          : isPassed
                          ? 'text-white bg-white/10'
                          : 'text-neutral-500'
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`font-display text-sm sm:text-base font-bold uppercase tracking-wider ${
                        isActive ? 'text-white' : 'text-neutral-400'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                      {step.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-devil-red/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Step Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-3 py-1 rounded">
                  STAGE {currentStepData.step} OF 05
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  {currentStepData.tagline}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {currentStepData.step} — {currentStepData.title}
              </h3>

              <p className="text-base text-neutral-200 font-normal leading-relaxed">
                {currentStepData.description}
              </p>

              {/* Inspection points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  STANDARD OPERATING ACTIONS:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStepData.inspectionDetails.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-300"
                    >
                      <Check className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-white uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-lg bg-devil-red hover:bg-devil-red-light text-xs font-bold text-white uppercase tracking-wider shadow-devil-glow flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Step Right Visual Highlight */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src={
                    activeStep === 0
                      ? 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
                      : activeStep === 1
                      ? 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80'
                      : activeStep === 2
                      ? 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
                      : activeStep === 3
                      ? 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
                  }
                  alt={currentStepData.title}
                  className="w-full h-64 sm:h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-devil-red animate-pulse" />
                    <span className="text-white font-medium">Certified Studio Protocol</span>
                  </div>
                  <span className="text-neutral-400 font-mono">100% Quality Audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

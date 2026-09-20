import { useState } from 'react';
import { Car, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { VEHICLE_SIZES } from '../../data/content';

interface VehicleEstimatorProps {
  onSelectEstimate: (details: string) => void;
}

export const VehicleEstimator = ({ onSelectEstimate }: VehicleEstimatorProps) => {
  const [selectedSize, setSelectedSize] = useState('sedan');
  const [selectedTreatment, setSelectedTreatment] = useState('gloss');

  const treatments = [
    {
      id: 'refresh',
      name: "Devil's Refresh",
      subtitle: 'Regular Maintenance & Quick Gloss',
      duration: '4 – 6 Hours',
      protection: 'Synthetic Spray Sealant (Up to 2 Months)',
      highlight: 'Speed & Deep Clean',
    },
    {
      id: 'gloss',
      name: "Devil's Gloss",
      subtitle: 'Paint Correction & Visual Transformation',
      duration: '1 – 2 Days',
      protection: 'Hydrophobic Polymer Shield (Up to 12 Months)',
      highlight: 'Swirl Eradication & High Reflection',
    },
    {
      id: 'shield',
      name: "Devil's Shield",
      subtitle: 'Ceramic Coating & Multi-Year Defense',
      duration: '2 – 3 Days',
      protection: 'Certified 9H Nano-Glass Armor (3 to 5 Years)',
      highlight: 'Extreme Hydrophobic & Scratch Defense',
    },
  ];

  const currentSizeObj = VEHICLE_SIZES.find((v) => v.id === selectedSize) || VEHICLE_SIZES[1];
  const currentTreatmentObj = treatments.find((t) => t.id === selectedTreatment) || treatments[1];

  const handleInquire = () => {
    onSelectEstimate(
      `${currentTreatmentObj.name} for ${currentSizeObj.name} (${currentSizeObj.example})`
    );
  };

  return (
    <div className="mt-16 glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-devil-red/10 border border-devil-red/30 text-devil-red text-xs font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE VEHICLE ESTIMATOR</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
          TAILOR YOUR TREATMENT PROTOCOL
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2">
          Select your vehicle category and target outcome to view estimated studio turnaround and recommended protection tier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Step 1: Vehicle Size Selection */}
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
            <Car className="w-4 h-4 text-devil-red" />
            <span>1. SELECT VEHICLE CHASSIS SIZE:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VEHICLE_SIZES.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                  selectedSize === size.id
                    ? 'bg-devil-red/15 border-devil-red text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                    : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/25 hover:text-white'
                }`}
              >
                <p className="text-xs font-bold uppercase">{size.name}</p>
                <p className="text-[10px] text-neutral-400 truncate mt-1">{size.example}</p>
              </button>
            ))}
          </div>

          {/* Step 2: Treatment Selection */}
          <div className="pt-4 space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-devil-red" />
              <span>2. SELECT TARGET OUTCOME:</span>
            </label>
            <div className="space-y-2.5">
              {treatments.map((treat) => (
                <button
                  key={treat.id}
                  onClick={() => setSelectedTreatment(treat.id)}
                  className={`w-full p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center justify-between ${
                    selectedTreatment === treat.id
                      ? 'bg-devil-red/15 border-devil-red text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                      : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold uppercase">{treat.name}</p>
                    <p className="text-[11px] text-neutral-400">{treat.subtitle}</p>
                  </div>
                  <span className="text-[10px] font-mono text-devil-red bg-devil-red/10 px-2 py-0.5 rounded uppercase hidden sm:inline">
                    {treat.highlight}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estimation Result Card */}
        <div className="flex flex-col justify-between p-6 rounded-xl bg-black/60 border border-white/10 relative">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                CONFIGURED SUMMARY
              </span>
              <span className="text-xs font-mono font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-2.5 py-0.5 rounded">
                STUDIO ESTIMATE
              </span>
            </div>

            <div>
              <p className="text-[11px] text-neutral-400 uppercase font-semibold">TARGET VEHICLE CLASS</p>
              <h4 className="font-display text-lg font-bold text-white uppercase mt-0.5">
                {currentSizeObj.name}
              </h4>
              <p className="text-xs text-neutral-400">{currentSizeObj.example}</p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-neutral-400 uppercase font-semibold">RECOMMENDED TREATMENT</p>
              <h4 className="font-display text-xl font-black text-devil-red uppercase mt-0.5">
                {currentTreatmentObj.name}
              </h4>
              <p className="text-xs text-neutral-300 mt-1">{currentTreatmentObj.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 uppercase font-semibold">
                  <Clock className="w-3.5 h-3.5 text-devil-red" />
                  <span>Turnaround Time</span>
                </div>
                <p className="text-xs font-bold text-white mt-1">{currentTreatmentObj.duration}</p>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 uppercase font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-devil-red" />
                  <span>Durability</span>
                </div>
                <p className="text-xs font-bold text-white mt-1">{currentTreatmentObj.protection}</p>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 italic">
              * Exact quotation is determined by paint condition, defect severity, and clear coat depth upon physical inspection.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleInquire}
              className="w-full py-3.5 px-4 bg-devil-red hover:bg-devil-red-light text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>REQUEST QUOTE FOR THIS SETUP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

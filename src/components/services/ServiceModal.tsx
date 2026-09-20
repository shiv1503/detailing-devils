import { X, Check, Clock, Calendar, Shield, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal = ({ service, onClose, onBookService }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0B0B0F] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/15 text-white hover:bg-devil-red flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-2 py-0.5 rounded">
                SERVICE {service.number}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {service.tagline}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">
              OVERVIEW & METHODOLOGY
            </h4>
            <p className="text-sm leading-relaxed text-neutral-300">
              {service.fullDetails}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/[0.02] border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-devil-red shrink-0" />
              <div>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">ESTIMATED DURATION</p>
                <p className="text-xs font-bold text-white">{service.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-devil-red shrink-0" />
              <div>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">RECOMMENDED FREQUENCY</p>
                <p className="text-xs font-bold text-white">{service.recommendedFor}</p>
              </div>
            </div>

            {service.warranty && (
              <div className="col-span-1 sm:col-span-2 flex items-center gap-3 pt-2 border-t border-white/5">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">WARRANTY PROTECTION</p>
                  <p className="text-xs font-bold text-emerald-400">{service.warranty}</p>
                </div>
              </div>
            )}
          </div>

          {/* Included Treatments Checklist */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
              INCLUDED TREATMENTS & PROCEDURES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-devil-red/20 border border-devil-red/50 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-devil-red" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400 text-center sm:text-left">
              Pricing varies based on vehicle dimensions, surface condition and paint hardness.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-devil-red hover:bg-devil-red-light text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>BOOK THIS SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

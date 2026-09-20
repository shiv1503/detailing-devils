import { useState } from 'react';
import { Sparkles, Shield, Disc, Flame, Layers, Wrench, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../../data/content';
import type { ServiceItem } from '../../data/content';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection = ({ onOpenBooking }: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map service index to custom icons
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-devil-red" />;
      case 1:
        return <Layers className="w-5 h-5 text-devil-red" />;
      case 2:
        return <Flame className="w-5 h-5 text-devil-red" />;
      case 3:
        return <Shield className="w-5 h-5 text-devil-red" />;
      case 4:
        return <Disc className="w-5 h-5 text-devil-red" />;
      case 5:
        return <Wrench className="w-5 h-5 text-devil-red" />;
      default:
        return <Sparkles className="w-5 h-5 text-devil-red" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#060608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-devil-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
            <span>OUR ATELIER SPECIALIZATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            DETAILING WITHOUT COMPROMISE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
            From deep cleaning to advanced paint protection, every service is performed with surgical precision and laboratory-grade chemistry.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between"
            >
              {/* Card Image with Hover Zoom */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                    {service.number}
                  </span>
                </div>

                {/* Service Icon Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:border-devil-red/60 group-hover:bg-devil-red/10 transition-all duration-300">
                  {getServiceIcon(index)}
                </div>

                {/* Tagline over image bottom */}
                <div className="absolute bottom-3 left-5 right-5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-devil-red">
                    {service.tagline}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide group-hover:text-devil-red-light transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-neutral-400">
                        <Check className="w-3 h-3 text-devil-red shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <p className="text-[10px] text-neutral-400 font-medium pl-5">
                        +{service.features.length - 4} more specialized treatments
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-devil-red transition-colors group/btn"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-devil-red group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-3 py-1.5 rounded bg-white/[0.05] hover:bg-devil-red text-neutral-300 hover:text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-200"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceName) => onOpenBooking(serviceName)}
      />
    </section>
  );
};

import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { GalleryItem } from '../../data/content';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onBookFinish: (vehicleInfo: string) => void;
}

export const LightboxModal = ({
  item,
  onClose,
  onNext,
  onPrev,
  onBookFinish,
}: LightboxModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:bg-devil-red flex items-center justify-center transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:border-devil-red hover:bg-devil-red flex items-center justify-center transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Right */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:border-devil-red hover:bg-devil-red flex items-center justify-center transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content */}
      <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200">
        <div className="relative w-full max-h-[68vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[68vh] sm:max-h-[75vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Info Panel Below Image */}
        <div className="w-full mt-4 p-4 sm:p-6 rounded-xl glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-2 py-0.5 rounded uppercase">
                {item.category}
              </span>
              <span className="text-xs text-neutral-400">
                {item.vehicleCategory}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-300">
              <span className="font-semibold text-white">Service Performed:</span> {item.servicePerformed}
            </p>
            <p className="text-xs text-neutral-400 max-w-3xl">
              {item.description}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookFinish(`${item.title} (${item.servicePerformed})`);
              }}
              className="w-full md:w-auto px-6 py-3 bg-devil-red hover:bg-devil-red-light text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>BOOK THIS FINISH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/content';
import type { GalleryItem } from '../../data/content';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  onOpenBooking: (details?: string) => void;
}

export const GallerySection = ({ onOpenBooking }: GallerySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'EXTERIOR', 'INTERIOR', 'PAINT', 'CERAMIC', 'LUXURY'];

  const filteredItems = selectedCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx !== -1 ? idx : 0);
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  };

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="work" className="relative py-24 bg-[#08080C] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE DEVIL'S ATELIER ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
              CINEMATIC MASTERPIECES.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xl">
              Explore our portfolio of exotic supercars, luxury saloons, and track weapons perfected to mirror-finish standards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-devil-red text-white shadow-devil-glow'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => {
            // Give subtle varied aspect ratios for editorial masonry feel
            const isLarge = index === 0 || index === 5;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative rounded-xl overflow-hidden glass-card cursor-pointer border border-white/10 ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2 h-[420px] sm:h-[500px]' : 'h-[280px] sm:h-[340px]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon Button (Visible on hover) */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-devil-red" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] text-devil-red font-mono uppercase tracking-wider font-semibold">
                    {item.vehicleCategory}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide group-hover:text-devil-red-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1 opacity-90">
                    {item.servicePerformed}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onBookFinish={(info) => onOpenBooking(info)}
      />
    </section>
  );
};

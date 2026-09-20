import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}?text=Hello%20Detailing%20Devils,%20I%20would%20like%20to%20inquire%20about%20a%20detailing%20appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with Detailing Devils on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
        Chat on WhatsApp
      </span>
      {/* Pulse wave */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
    </a>
  );
};

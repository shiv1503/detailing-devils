import { Shield, Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp, ExternalLink } from 'lucide-react';
import { BRAND, CONTACT_INFO } from '../../data/content';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.08] text-neutral-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-devil-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black border border-devil-red/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-devil-red" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                DETAILING <span className="text-devil-red">DEVILS</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 font-medium tracking-wide">
              “{BRAND.tertiaryTagline}”
            </p>

            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Engineered automotive perfection. We transform exotic supercars, luxury sedans, and performance SUVs with surgical paint correction, certified 9H ceramic coatings, and concourse-grade interior rejuvenation.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-devil-red/60 hover:bg-devil-red/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Facebook SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-devil-red/60 hover:bg-devil-red/10 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* YouTube SVG */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-devil-red/60 hover:bg-devil-red/10 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-devil-red pl-2.5">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">The Process</a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Packages</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Trust The Devils</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Atelier</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Book a Detail</a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-devil-red pl-2.5">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Exterior Detailing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interior Detailing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Paint Correction</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Ceramic Coating (9H)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Protection Treatments</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Specialized Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Studio Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-devil-red pl-2.5">
              STUDIO CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-devil-red shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-devil-red shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{CONTACT_INFO.openingHours}</span>
              </div>
              <div className="pt-1">
                <a
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-devil-red hover:text-white transition-colors font-semibold"
                >
                  <span>Locate on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Detailing Devils. All Rights Reserved.</p>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors pl-4 border-l border-white/10"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-devil-red" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

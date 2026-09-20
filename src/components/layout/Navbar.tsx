import { useState, useEffect } from 'react';
import { Menu, X, Shield, PhoneCall, ArrowRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

interface NavbarProps {
  onOpenBooking: (serviceOrPackage?: string) => void;
}

export const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Our Work', href: '#work' },
    { label: 'Packages', href: '#packages' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-devil-red rounded"
              aria-label="Detailing Devils Home"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center justify-center group-hover:border-devil-red/60 transition-all duration-300 shadow-md">
                <div className="relative">
                  <Shield className="w-5 h-5 text-devil-red group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-white">
                    DETAILING
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-devil-red">
                    DEVILS
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-medium">
                  STUDIO ATELIER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-300 hover:text-white transition-colors duration-200 relative group rounded-md hover:bg-white/[0.04]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-devil-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 overflow-hidden rounded-lg bg-devil-red hover:bg-devil-red-light shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-devil-red text-white rounded-md"
              >
                BOOK
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-300 hover:text-white focus:outline-none rounded-lg bg-white/[0.05] border border-white/10"
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#060608]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-devil-red" />
            <span className="font-display text-xl font-bold tracking-wider text-white">
              DETAILING <span className="text-devil-red">DEVILS</span>
            </span>
          </div>

          <nav className="flex flex-col space-y-3 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-lg font-semibold tracking-wide text-neutral-200 hover:text-white hover:bg-white/[0.05] border-b border-white/[0.05]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-devil-red" />
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 px-4 bg-devil-red text-white text-sm font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2"
            >
              <span>BOOK A DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.02]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-neutral-300" />
                <span>Call Studio</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

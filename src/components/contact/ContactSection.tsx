import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, SERVICES, PACKAGES } from '../../data/content';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection = ({ onOpenBooking }: ContactSectionProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#E50914', '#FFFFFF', '#181822'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Detailing Devils! I am interested in booking an automotive detailing treatment for my vehicle.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050507] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-devil-red/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-devil-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dramatic Final Headline Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-devil-red text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>DIRECT ATELIER ACCESS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
            READY TO UNLEASH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-devil-red text-red-glow">
              THE DEVIL?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal">
            Give your vehicle the finish it deserves.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-devil-red hover:bg-devil-red-light text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-3 transition-all"
            >
              <span>BOOK YOUR DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Placeholders from Central Config */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-2">
                STUDIO INFORMATION
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Consultations by appointment to ensure dedicated cleanroom bay access for your vehicle.
              </p>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Phone className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">TELEPHONE</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-medium hover:text-devil-red">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/[0.03] border border-emerald-500/20">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-emerald-400 uppercase font-semibold block">WHATSAPP DIRECT</span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-emerald-300"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Mail className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">ELECTRONIC MAIL</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-medium hover:text-devil-red">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <MapPin className="w-4 h-4 text-devil-red shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">PHYSICAL ATELIER</span>
                    <span className="text-white font-medium block">{CONTACT_INFO.address}</span>
                    <a
                      href={CONTACT_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-devil-red hover:underline text-[11px] font-semibold mt-1 inline-block"
                    >
                      Open Google Maps Location →
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">OPERATING HOURS</span>
                    <span className="text-white font-medium">{CONTACT_INFO.openingHours}</span>
                  </div>
                </div>

                {/* Instagram (Custom SVG) */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="w-4 h-4 text-devil-red shrink-0 mt-0.5 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">INSTAGRAM</span>
                    <a
                      href={CONTACT_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-devil-red"
                    >
                      {CONTACT_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking / Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-1">
                REQUEST A BESPOKE QUOTE
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Tell us about your machine. Every proposal is individualized according to paint depth and vehicle class.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hello@yourdomain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Vehicle Make *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Porsche / Ferrari / BMW"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Vehicle Model *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 911 GT3 / M5 / G 63"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-devil-red transition-colors"
                      >
                        <option value="">Select Treatment</option>
                        <optgroup label="Packages">
                          {PACKAGES.map((pkg) => (
                            <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Services">
                          {SERVICES.map((srv) => (
                            <option key={srv.id} value={srv.title}>{srv.number} — {srv.title}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-devil-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your current paint condition or specific concerns..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-devil-red hover:bg-devil-red-light text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2 transition-all mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>REQUEST A QUOTE</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase text-white">
                    Quote Request Received
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, <span className="text-white font-bold">{name}</span>. Our studio concierge will review your {make} {model} and reply within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg mt-2"
                  >
                    Send Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

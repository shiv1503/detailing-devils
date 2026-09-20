import { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MessageSquare, Calendar, Car, Phone, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, SERVICES, PACKAGES } from '../../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceOrPackage?: string;
}

export const BookingModal = ({
  isOpen,
  onClose,
  initialServiceOrPackage,
}: BookingModalProps) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [service, setService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (initialServiceOrPackage) {
      setService(initialServiceOrPackage);
    }
  }, [initialServiceOrPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'DD-' + Math.floor(100000 + Math.random() * 900000);
    setRefNumber(randomRef);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FFFFFF', '#111117'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Detailing Devils! I would like to request a quote.\n\n*Reference:* ${refNumber}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Vehicle:* ${make} ${model}\n*Service Requested:* ${service || 'General Detailing'}\n*Preferred Date:* ${preferredDate || 'Earliest Available'}\n*Notes:* ${message || 'None'}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumberDigits}?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0C0C12] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-devil-red text-white flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-devil-red animate-ping" />
                <span className="text-[11px] font-mono font-bold text-devil-red uppercase tracking-widest">
                  ATELIER RESERVATION & QUOTE
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                BOOK YOUR DETAIL.
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill in your vehicle details below to receive a personalized consultation and quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="hello@yourdomain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                  />
                </div>
              </div>

              {/* Vehicle Make & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Vehicle Make *
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Porsche / Mercedes / BMW"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Vehicle Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 GT3 RS / G 63 AMG"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                  />
                </div>
              </div>

              {/* Service Required & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Service / Package *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-devil-red transition-colors"
                  >
                    <option value="" disabled>Select Desired Treatment</option>
                    <optgroup label="Featured Packages">
                      {PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name} ({pkg.tagline})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Individual Services">
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.number} — {srv.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Preferred Drop-Off Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-devil-red transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Concerns */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Specific Paint / Interior Concerns
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Swirl marks visible under street lights, dull hood oxidation, leather conditioning needed..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-black/60 border border-white/10 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-devil-red transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-devil-red hover:bg-devil-red-light text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-devil-glow flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-400 text-center">
                Strict vehicle confidentiality. We do not share client contact information.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-devil-red bg-devil-red/10 border border-devil-red/30 px-3 py-1 rounded">
                RESERVATION RECEIVED
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-3">
                THANK YOU, {fullName || 'VALUED CLIENT'}
              </h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto mt-2 leading-relaxed">
                Your consultation request has been registered under reference code{' '}
                <span className="font-mono font-bold text-white">{refNumber}</span>. Our master detailer will reach out shortly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <p className="text-neutral-400">
                <strong className="text-white">Vehicle:</strong> {make} {model}
              </p>
              <p className="text-neutral-400">
                <strong className="text-white">Requested Service:</strong> {service || 'Atelier Inspection'}
              </p>
              <p className="text-neutral-400">
                <strong className="text-white">Preferred Date:</strong> {preferredDate || 'Earliest Appointment'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Forward to Studio WhatsApp</span>
              </button>
              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

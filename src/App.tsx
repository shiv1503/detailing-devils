import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CursorFollower } from './components/layout/CursorFollower';
import { Hero } from './components/hero/Hero';
import { ServicesSection } from './components/services/ServicesSection';
import { ProcessTimeline } from './components/process/ProcessTimeline';
import { BeforeAfterSection } from './components/beforeAfter/BeforeAfterSection';
import { GallerySection } from './components/gallery/GallerySection';
import { PackagesSection } from './components/packages/PackagesSection';
import { WhyUsSection } from './components/whyUs/WhyUsSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { BookingModal } from './components/contact/BookingModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceOrPackageName?: string) => {
    setPreselectedService(serviceOrPackageName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#060608] text-devil-silver selection:bg-devil-red selection:text-white relative">
      {/* Desktop Light Spotlight */}
      <CursorFollower />

      {/* Sticky Premium Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Fullscreen Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 01-06 Services Section */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Detailing Process Timeline */}
        <ProcessTimeline />

        {/* Interactive Before / After Dual Image Slider */}
        <BeforeAfterSection />

        {/* Cinematic Masonry Gallery & Fullscreen Lightbox */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* Curated Packages & Interactive Vehicle Estimator */}
        <PackagesSection onOpenBooking={handleOpenBooking} />

        {/* Why Trust The Devils (4 Pillars & Studio Stats) */}
        <WhyUsSection />

        {/* Verified Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* About Atelier & Brand Manifesto */}
        <AboutSection />

        {/* Dramatic Final Contact & Booking CTA */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Premium Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Global Booking & Quote Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialServiceOrPackage={preselectedService}
      />
    </div>
  );
}

export default App;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThreeNeuralCanvas } from './components/ThreeNeuralCanvas.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { TransformationPipeline } from './components/TransformationPipeline.tsx';
import { OnlineHubSection } from './components/OnlineHubSection.tsx';
import { WorkshopsSection } from './components/WorkshopsSection.tsx';
import { ReviewsIndiaSection } from './components/ReviewsIndiaSection.tsx';
import { MentalHealthBlogsIndiaSection } from './components/MentalHealthBlogsIndiaSection.tsx';
import { YouTubeContentSection } from './components/YouTubeContentSection.tsx';
import { WMHDAssociationSection } from './components/WMHDAssociationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { WorkshopProgram } from './types.ts';
import { DOCTOR_INFO } from './data/brandData.ts';
import { useBrowserLanguage } from './hooks/useBrowserLanguage.ts';

export default function App() {
  const [currentLang, setCurrentLang] = useBrowserLanguage();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedBookingServiceId(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleEnrollWorkshop = (workshop: WorkshopProgram) => {
    const text = `*कार्यशाळा नावनोंदणी (Workshop Enrollment)*\n\nकार्यशाळा: ${workshop.titleMr}\nतपशील: ${workshop.taglineMr}\nकालावधी: ${workshop.duration}\n\nनमस्कार विनायक सर, मला या बॅचसाठी नाव नोंदवायचे आहे.`;
    window.open(`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#0B0D10] text-[#F3F4F6] selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">
      {/* 3D WebGL / Three.js Interactive Glowing Neural Mesh Canvas */}
      <ThreeNeuralCanvas interactive={true} />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. About Vinayak Bhise */}
        <AboutSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Mental Health Services (10 Services Grid) */}
        <ServicesSection
          currentLang={currentLang}
          onSelectServiceForBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 4. My 5-Step Mind Transformation Model */}
        <TransformationPipeline
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Online Counselling Hub (Global Reach) */}
        <OnlineHubSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Psychology Programs & Workshops */}
        <WorkshopsSection
          currentLang={currentLang}
          onEnrollWorkshop={handleEnrollWorkshop}
        />

        {/* 80K+ Customer Reviews India & 5-Star Ratings Wall */}
        <ReviewsIndiaSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. YouTube & Psychology Marathi Content */}
        <YouTubeContentSection
          currentLang={currentLang}
        />

        {/* Mental Health Blogs India (Scientific Articles) */}
        <MentalHealthBlogsIndiaSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. WMHD Association Integration */}
        <WMHDAssociationSection
          currentLang={currentLang}
        />

        {/* 9. Contact & Appointment Section */}
        <ContactSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp and Booking Action Buttons */}
      <FloatingActions
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Confidential Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentLang={currentLang}
        preSelectedServiceId={selectedBookingServiceId}
      />
    </div>
  );
}

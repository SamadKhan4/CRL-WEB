import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/Contact/ContactHero';
import { ContactInfoCards } from '../components/Contact/ContactInfoCards';
import { ContactSection } from '../components/Contact/ContactSection';

export function ContactPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header />

        <main id="main">
          <ContactHero />
          <ContactInfoCards />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

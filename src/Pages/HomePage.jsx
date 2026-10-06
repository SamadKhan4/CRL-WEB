import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from '../components/header/Header';
import { Hero } from '../components/HomePage/hero/Hero';
import { TrackingPanel } from '../components/HomePage/hero/TrackingPanel';
import { TrustStrip } from '../components/HomePage/sections/TrustStrip';
import { PtlSection } from '../components/HomePage/sections/PtlSection';
import { ServicesSection } from '../components/HomePage/sections/ServicesSection';
import { NetworkSection } from '../components/HomePage/network/NetworkSection';
import { TechnologySection } from '../components/HomePage/sections/TechnologySection';
import { WhyChooseSection } from '../components/HomePage/sections/WhyChooseSection';
import { IndustriesSection } from '../components/HomePage/sections/IndustriesSection';
import { AboutSection } from '../components/HomePage/sections/AboutSection';
import { StatsSection } from '../components/HomePage/sections/StatsSection';
import { FinalCta } from '../components/HomePage/sections/FinalCta';
import { Footer } from '../components/Footer';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
export function HomePage({ showPlaceholders = true }) {
    useDocumentMeta('CRL Transport | PTL & FTL Logistics Services in Nagpur', 'CRL provides reliable PTL, FTL and goods transportation services with shipment tracking, door pickup and delivery, and connectivity across Vidarbha and Maharashtra.');
    return (<MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-white">
        <a href="#main" className="sr-only z-[70] rounded-md bg-crl px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <TrackingPanel />
          <TrustStrip />
          <PtlSection />
          <ServicesSection />
          <NetworkSection />
          <TechnologySection />
          
          <WhyChooseSection />
          <IndustriesSection />
          <AboutSection />
          <StatsSection showPlaceholders={showPlaceholders}/>
          
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>);
}

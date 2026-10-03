import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { TrackingPanel } from './components/hero/TrackingPanel';
import { TrustStrip } from './components/sections/TrustStrip';
import { PtlSection } from './components/sections/PtlSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { NetworkSection } from './components/network/NetworkSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { AdditionalServices } from './components/sections/AdditionalServices';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { AboutSection } from './components/sections/AboutSection';
import { StatsSection } from './components/sections/StatsSection';
import { ClientTrust } from './components/sections/ClientTrust';
import { FinalCta } from './components/sections/FinalCta';
import { Footer } from './components/Footer';
import { useDocumentMeta } from './hooks/useDocumentMeta';
export function App({ showPlaceholders = true }) {
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

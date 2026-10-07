import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/HomePage/hero/Hero';
import { NetworkSection } from '../components/NetWork/network/NetworkSection';
import { networkHero } from '../data/network';
import { TechnologySection } from "../components/HomePage/sections/TechnologySection";

export function NetworkPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-white">
        <Header />

        <main id="main">
          <Hero
            title={
              <>
                <span>Strong Regional</span>
                <span>Connectivity.</span>
                <span><em>Reliable</em> Transit.</span>
              </>
            }
            description={networkHero.description}
            ctaText={networkHero.ctaText}
            ctaHref={networkHero.ctaHref}
          />

          <NetworkSection />
          <TechnologySection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
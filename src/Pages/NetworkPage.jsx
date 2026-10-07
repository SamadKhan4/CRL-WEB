import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { NetworkSection } from '../components/HomePage/network/NetworkSection';

export function NetworkPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-white">
        <Header />

        <main id="main">
          <NetworkSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
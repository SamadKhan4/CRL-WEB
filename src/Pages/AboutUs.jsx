import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../components/header/Header';
import { AboutUsHero } from '../components/AboutUs/AboutUsHero';
import { WhoWeAre } from '../components/AboutUs/WhoWeAre';
import { CommitmentSection } from '../components/AboutUs/CommitmentSection';

import { StepOne } from '../components/AboutUs/Steps/StepOne';
import { StepTwo } from '../components/AboutUs/Steps/StepTwo';
import { StepThree } from '../components/AboutUs/Steps/StepThree';
import { WhatDrivesCRL } from '../components/AboutUs/WhatDrivesCRL';
import { CTASection } from '../components/AboutUs/CTASection';
import { Footer } from '../components/Footer';


export function AboutUs() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-white">
        <Header />

        <main id="main">
          <AboutUsHero />
          <WhoWeAre />
          <CommitmentSection />
          <StepOne />
          <StepTwo />
          <StepThree />
          <WhatDrivesCRL />
          <CTASection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
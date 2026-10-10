
import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { FullTruckLoadOverview } from '../../components/services/FullTruckLoadOverview';
import { FullTruckLoadBenefits } from '../../components/services/FullTruckLoadBenefits';
// import { AdditionalFtlSupport } from '../../components/services/AdditionalFtlSupport';
import { ServiceCta } from '../../components/services/ServiceCTA';

export function FullTruckLoadPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header />

        <main id="main">
          <ServiceHero serviceName="Full Truck Load" />

          <section className="w-full bg-[#F6F7F9] py-[2.8571vw] max-lg:py-10">
            <div
              className="
                mx-auto
                grid
                w-[91.2857vw]
                grid-cols-[18.8571vw_minmax(0,1fr)]
                items-start
                gap-[4vw]
                max-lg:w-[92vw]
                max-lg:grid-cols-1
                max-lg:gap-10
                max-md:w-[calc(100%-40px)]
              "
            >
              {/* Left: Services navigation */}
              <ServiceSidebar />

              {/* Right: Full Truck Load content */}
              <div className="min-w-0 space-y-10">
                <FullTruckLoadOverview />
                <FullTruckLoadBenefits />
                {/* <AdditionalFtlSupport /> */}
                <ServiceCta />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

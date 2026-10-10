
import React from 'react';
import { MotionConfig } from 'framer-motion';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { ServiceOverview } from '../../components/services/ServiceOverview';
import { ServiceBenefits } from '../../components/services/ServiceBenefits';
import { AdditionalPtlSupport } from '../../components/services/AdditionalPtlSupport';
import { ServiceCta } from '../../components/services/ServiceCTA';

import { ftlData } from '../../data/services/fullTruckLoad';

export function FullTruckLoadPage() {
  const { serviceName, overview, benefits, additionalSupport, cta } = ftlData;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header />

        <main id="main">
          <ServiceHero serviceName="Full Truck Load" />
          <ServiceHero serviceName={serviceName} />

          <section className="w-full bg-[#F6F7F9] py-[2.8571vw] max-lg:py-10">
            <div
              className="
                mx-auto grid w-[91.2857vw]
                grid-cols-[18.8571vw_minmax(0,1fr)]
                items-start gap-[4vw]
                max-lg:w-[92vw] max-lg:grid-cols-1 max-lg:gap-10
                max-md:w-[calc(100%-40px)]
              "
            >
              <ServiceSidebar />

              <div className="min-w-0">
                <ServiceOverview
                  id="ftl"
                  image={overview.image ?? undefined}
                  imageAlt="Full Truck Load shipment"
                  kicker={overview.category}
                  heading={overview.heading}
                  description={overview.paragraphs.join(' ')}
                  supportingText="Suitable for a wide range of shipment categories:"
                  features={overview.features}
                />

                <ServiceBenefits
                  images={benefits.images
                    .filter(Boolean)
                    .map((src, index) => ({
                      src,
                      alt: `FTL transportation image ${index + 1}`,
                    }))}
                  kicker={benefits.eyebrow}
                  heading={benefits.heading}
                  description={benefits.description}
                  benefits={benefits.cards.map((card) => ({
                    ...card,
                    Icon: undefined,
                  }))}
                />

                <AdditionalPtlSupport
                  kicker={additionalSupport.eyebrow}
                  heading={additionalSupport.heading}
                  description={additionalSupport.description}
                  supportServices={additionalSupport.items}
                />

                <ServiceCta
                  image={cta.image ?? undefined}
                  heading="Need an Entire Truck for"
                  highlight="Your Shipment?"
                  description={cta.description}
                  primaryLabel={cta.actions[0]?.label}
                  primaryHref={cta.actions[0]?.href}
                  secondaryLabel={cta.actions[1]?.label}
                  secondaryHref={cta.actions[1]?.href}
                  phoneLabel={cta.phone.label}
                  phoneNumber={cta.phone.display}
                  phoneHref="+917499358403"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

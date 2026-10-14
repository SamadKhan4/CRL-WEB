
import React from 'react';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceCta } from '../../components/services/ServiceCTA';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { PackersMoversOverview } from '../../components/services/PackersMoversOverview';
import { AdditionalPtlSupport } from '../../components/services/AdditionalPtlSupport';

import { packersMoversData } from '../../data/services/packersMovers';

export function PackersMoversPage() {
  const { serviceName, overview, whyChoose, cta } = packersMoversData;

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9]">
      <Header />

      <main id="main">
        <ServiceHero serviceName={serviceName} />

        <section className="w-full py-[2.5vw] max-lg:py-8">
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
      <PackersMoversOverview data={overview} />

      <AdditionalPtlSupport
        variant="checklist"
        images={whyChoose.images}
        kicker={whyChoose.kicker}
        heading={whyChoose.heading}
        description=""
        supportServices={whyChoose.points}
      />

      <ServiceCta
        heading="Planning a Home or"
        highlight="Office Move?"
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={cta.primaryHref}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
        phoneLabel={cta.phoneLabel}
        phoneNumber={cta.phoneNumber}
        phoneHref={cta.phoneHref}
      />
    </div>
  </div>
</section>
      </main>
 
      <Footer />
    </div>
  );
}

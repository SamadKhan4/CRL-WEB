
import React from 'react';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { ServiceOverview } from '../../components/services/ServiceOverview';
import { ServiceBenefits } from '../../components/services/ServiceBenefits';
import { ServiceCta } from '../../components/services/ServiceCTA';
import { DoorPickupHowItWorks } from '../../components/services/DoorPickupHowItWorks';

import { doorPickupDeliveryData } from '../../data/services/doorPickupDelivery';

export function DoorPickupDeliveryPage() {
  const { serviceName, overview, howItWorks, benefits, cta } =
    doorPickupDeliveryData;

  return (
    <div className="min-h-screen w-full bg-[#F6F7F9]">
      <Header />

      <main id="main">
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
                id="door-pickup-delivery"
                image={overview.image}
                imageAlt="CRL transportation truck at the warehouse"
                kicker={overview.category}
                heading={overview.heading}
                description={overview.paragraphs.join(' ')}
                supportingText=""
                features={overview.features}
              />
              <div className="mt-[2.5vw] grid grid-cols-2 gap-[1.2857vw] max-md:grid-cols-1 max-md:gap-5">
  {benefits.images.map((image, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-[1.1vw] max-md:rounded-2xl"
    >
      <img
        src={image}
        alt={index === 0 ? 'CRL delivery service' : 'CRL packing service'}
        loading="lazy"
        className="block aspect-[326/235] w-full object-cover"
      />
    </div>
  ))}
</div>
         

              <DoorPickupHowItWorks steps={howItWorks} />
     <ServiceBenefits
                 showImages={false}
                kicker={benefits.eyebrow}
                heading={benefits.heading}
                description={benefits.description}
                benefits={benefits.cards}
              />

              <ServiceCta
                heading="Need Reliable Door Pickup &"
                highlight="Delivery?"
                description={cta.description}
                primaryLabel={cta.actions[0]?.label}
                primaryHref={cta.actions[0]?.href}
                secondaryLabel={cta.actions[1]?.label}
                secondaryHref={cta.actions[1]?.href}
                phoneLabel={cta.phone.label}
                phoneNumber={cta.phone.display}
                phoneHref={cta.phone.href}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

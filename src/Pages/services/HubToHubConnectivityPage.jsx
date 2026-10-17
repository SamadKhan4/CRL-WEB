
import React from 'react';
import { MotionConfig } from 'framer-motion';
import {
  Warehouse,
  Route,
  MapPin,
  ClipboardList,
  Truck,
} from 'lucide-react';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { ServiceOverview } from '../../components/services/ServiceOverview';
import { ServiceBenefits } from '../../components/services/ServiceBenefits';
import { ServiceCta } from '../../components/services/ServiceCTA';

import { hubToHubData } from '../../data/services/hubToHubConnectivity';

import overviewImage from '../../assets/Services/WhatFLT.png';
import deliveryImage from '../../assets/Services/service-delivery.png';
import packingImage from '../../assets/Services/service-packing.png';

// Icons and colors matched to Hub-to-Hub benefit text
const hubBenefitIconMap = {
  'Origin Handling': {
    Icon: Warehouse,
    color: 'bg-blue-50 text-blue-500',
  },
  'Inter-Hub Movement': {
    Icon: Route,
    color: 'bg-emerald-50 text-emerald-500',
  },
  'Destination Processing': {
    Icon: MapPin,
    color: 'bg-purple-50 text-purple-500',
  },
  'Processing & Coordination': {
    Icon: ClipboardList,
    color: 'bg-amber-50 text-amber-500',
  },
  'Delivery / Collection': {
    Icon: Truck,
    color: 'bg-sky-50 text-sky-500',
  },
};

export function HubToHubConnectivityPage() {
  const { serviceName, overview, benefits, cta } = hubToHubData;

  const benefitCards = benefits.cards.map((card) => {
    const matchedIcon = hubBenefitIconMap[card.title];

    return {
      ...card,
      ...(matchedIcon || {}),
    };
  });

  return (
    <MotionConfig reducedMotion="user">
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
                  id="hub-to-hub"
                  image={overviewImage}
                  imageAlt="CRL trucks loading at a logistics hub"
                  kicker={overview.category}
                  heading={overview.heading}
                  description={overview.paragraphs[0]}
                  supportingText={overview.paragraphs[1]}
                  features={overview.features}
                  featureColumns={3}
                  featureMarker="dot"
                />

                <ServiceBenefits
                  images={[
                    {
                      src: deliveryImage,
                      alt: 'CRL team handling a shipment',
                    },
                    {
                      src: packingImage,
                      alt: 'Careful packing and sealing of a shipment',
                    },
                  ]}
                  kicker=""
                  heading={benefits.heading}
                  description={benefits.description}
                  benefits={benefitCards}
                />

                <ServiceCta
                  heading="Need an Entire Truck for"
                  highlight="Your Shipment?"
                  description={cta.description}
                  primaryLabel={cta.actions[0]?.label}
                  primaryHref={cta.actions[0]?.href}
                  secondaryLabel={cta.actions[1]?.label}
                  secondaryHref={cta.actions[1]?.href}
                  phoneLabel={cta.phone.label}
                  phoneNumber={cta.phone.display}
                  phoneHref={cta.phone.href.replace('tel:', '')}
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

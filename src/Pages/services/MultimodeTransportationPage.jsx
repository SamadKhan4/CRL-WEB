
import React from 'react';
import { MotionConfig } from 'framer-motion';
import {
  Route,
  Handshake,
  PackageCheck,
  ClipboardCheck,
  Headset,
} from 'lucide-react';

import { Header } from '../../components/header/Header';
import { Footer } from '../../components/Footer';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceSidebar } from '../../components/services/ServiceSidebar';
import { ServiceOverview } from '../../components/services/ServiceOverview';
import { ServiceBenefits } from '../../components/services/ServiceBenefits';
import { AdditionalPtlSupport } from '../../components/services/AdditionalPtlSupport';
import { ServiceCta } from '../../components/services/ServiceCTA';

import { multimodeTransportationData } from '../../data/services/multimodeTransportation';

import overviewImage from '../../assets/service.jpg';
import deliveryImage from '../../assets/Services/service-delivery.png';
import packingImage from '../../assets/Services/service-packing.png';

// Icons selected according to each benefit's meaning
const iconMap = {
  route: {
    Icon: Route,
    color: 'bg-blue-50 text-blue-500',
  },
  'shield-check': {
    Icon: Handshake,
    color: 'bg-emerald-50 text-emerald-500',
  },
  'message-circle': {
    Icon: PackageCheck,
    color: 'bg-purple-50 text-purple-500',
  },
  eye: {
    Icon: ClipboardCheck,
    color: 'bg-amber-50 text-amber-500',
  },
  house: {
    Icon: Headset,
    color: 'bg-sky-50 text-sky-500',
  },
};

export function MultimodeTransportationPage() {
  const { name, overview, benefits, additionalSupport, cta } =
    multimodeTransportationData;

  const benefitCards = benefits.cards.map((card, index, all) => ({
    ...card,
    ...(iconMap[card.icon] ?? {}),
    wide: index === all.length - 1,
  }));

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header />

        <main id="main">
          <ServiceHero serviceName={name} />

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
                  id="multimode"
                  image={overviewImage}
                  imageAlt="CRL team loading shipments into a truck"
                  kicker={overview.eyebrow}
                  heading={overview.title}
                  description={overview.description[0]}
                  supportingText={overview.description[1]}
                  features={overview.points}
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
                  kicker={benefits.eyebrow}
                  heading={benefits.title}
                  description=""
                  benefits={benefitCards}
                />

                <AdditionalPtlSupport
                  columns={3}
                  kicker={additionalSupport.eyebrow}
                  heading={additionalSupport.title}
                  description={additionalSupport.description}
                  supportServices={additionalSupport.points}
                />

                <ServiceCta
                  heading="Have a Smaller"
                  highlight="Shipment to Move?"
                  description={cta.description}
                  primaryLabel={cta.primaryButton}
                  secondaryLabel={cta.secondaryButton}
                  phoneLabel={cta.phoneLabel}
                  phoneNumber={cta.phone}
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


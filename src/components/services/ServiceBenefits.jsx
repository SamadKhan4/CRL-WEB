
import React from 'react';
import {
  CircleDollarSign,
  ShieldCheck,
  MessageCircle,
  Eye,
  House,
  Truck,
  Clock3,
} from 'lucide-react';
import { motion } from 'framer-motion';

import deliveryImage from '../../assets/Services/service-delivery.png';
import packingImage from '../../assets/Services/service-packing.png';

const defaultBenefits = [
  {
    title: 'Cost-Conscious',
    description:
      'A suitable option when your shipment does not require an entire vehicle. Pay only for the space you use.',
    Icon: CircleDollarSign,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    title: 'Professional Handling',
    description:
      'Shipments are handled with standardized care and modern gear throughout the transportation journey.',
    Icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    title: 'Transparent Comms',
    description:
      'Customers receive clear, automated, and proactive shipment status alerts from dispatch to drop-off.',
    Icon: MessageCircle,
    color: 'bg-purple-50 text-purple-500',
  },
  {
    title: 'Shipment Visibility',
    description:
      'CRL provides real-time online tracking and instant electronic Proof of Delivery (e-POD) verification.',
    Icon: Eye,
    color: 'bg-amber-50 text-amber-500',
  },
  {
    title: 'Door Service Support',
    description:
      'Comprehensive door-to-door convenience: hassle-free door pickup and final-mile door delivery are seamlessly available at your warehouse or retail outlet.',
    Icon: House,
    color: 'bg-sky-50 text-sky-500',
    wide: true,
  },
];

const benefitIconMap = {
  'Dedicated Vehicle': {
    Icon: Truck,
    color: 'bg-blue-50 text-blue-500',
  },
  'Professional Transportation': {
    Icon: Truck,
    color: 'bg-emerald-50 text-emerald-500',
  },
  'Safety First': {
    Icon: ShieldCheck,
    color: 'bg-purple-50 text-purple-500',
  },
  'Timely Delivery Focus': {
    Icon: Clock3,
    color: 'bg-amber-50 text-amber-500',
  },
  'Transparent Operations': {
    Icon: MessageCircle,
    color: 'bg-sky-50 text-sky-500',
  },
  'Cost-Conscious': {
    Icon: CircleDollarSign,
    color: 'bg-blue-50 text-blue-500',
  },
  'Professional Handling': {
    Icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-500',
  },
  'Transparent Comms': {
    Icon: MessageCircle,
    color: 'bg-purple-50 text-purple-500',
  },
  'Shipment Visibility': {
    Icon: Eye,
    color: 'bg-amber-50 text-amber-500',
  },
  'Door Service Support': {
    Icon: House,
    color: 'bg-sky-50 text-sky-500',
  },
};

export function ServiceBenefits({
  images = [
    {
      src: deliveryImage,
      alt: 'CRL delivery team handling a shipment',
    },
    {
      src: packingImage,
      alt: 'Careful packing and sealing of a shipment',
    },
  ],
  showImages = true,
  kicker = 'Why Choose CRL PTL?',
  heading = 'Transportation Built Around Efficiency',
  description =
    'CRL focuses on reliable movement, timely delivery, safe handling, transparent operations, and professional service throughout the transportation process.',
  benefits = defaultBenefits,

  // Default preserves the existing icon-card design everywhere.
  // Use "red-dots" only on pages that need red-dot benefit cards.
  displayStyle = 'icons',
}) {
  const showRedDots = displayStyle === 'red-dots';

  return (
    <section className="mt-[3.5vw] w-full max-lg:mt-12">
      {/* Optional Images */}
      {showImages && images.length > 0 && (
        <div className="grid grid-cols-2 gap-[1.2857vw] max-md:grid-cols-1 max-md:gap-5">
          {images.map((item, index) => {
            const src = typeof item === 'string' ? item : item.src;

            const alt =
              typeof item === 'string'
                ? `CRL service image ${index + 1}`
                : item.alt || `CRL service image ${index + 1}`;

            return (
              <div
                key={`${alt}-${index}`}
                className="overflow-hidden rounded-[1.1vw] max-md:rounded-2xl"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="block aspect-[326/235] h-auto w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Heading and Description */}
      <div className={showImages ? 'mt-[3vw] max-md:mt-8' : ''}>
        {kicker && (
          <p className="mb-[1.1vw] text-[0.8vw] font-medium text-crl max-lg:text-sm">
            {kicker}
          </p>
        )}

        <h2 className="text-[2.6vw] font-semibold leading-[1.15] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
          {heading}
        </h2>

        {description && (
          <p className="mt-[1vw] max-w-[95%] text-[1vw] leading-relaxed text-slate-600 max-lg:mt-3 max-lg:text-base max-md:text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Benefit Cards */}
      {benefits.length > 0 && (
        <div className="mt-[1.1vw] grid grid-cols-3 gap-[0.9vw] border-t border-slate-300 pt-[1.1vw] max-lg:mt-5 max-lg:grid-cols-2 max-lg:gap-4 max-lg:pt-4 max-md:grid-cols-1">
          {benefits.map((benefit, index) => {
            const {
              title,
              description: benefitDescription,
              wide,
            } = benefit;

            const mapped = benefitIconMap[title];
            const Icon = benefit.Icon || mapped?.Icon;

            const color =
              benefit.color ||
              mapped?.color ||
              'bg-slate-100 text-slate-600';

            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className={`rounded-[0.9vw] border border-slate-200 bg-white p-[1.1vw] max-lg:rounded-xl max-lg:p-4 ${
                  wide ? 'col-span-2 max-md:col-span-1' : ''
                } ${
                  showRedDots
                    ? 'flex items-center gap-2.5'
                    : ''
                }`}
              >
                {showRedDots ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#E31824]"
                    />

                    <div className="min-w-0">
                      <h3 className="text-[0.95vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
                        {title}
                      </h3>

                      {benefitDescription && (
                        <p className="mt-1.5 text-[0.78vw] leading-[1.5] text-slate-600 max-lg:text-xs max-md:text-sm">
                          {benefitDescription}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {Icon && (
                      <div
                        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${color}`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    <h3 className="text-[0.95vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
                      {title}
                    </h3>

                    {benefitDescription && (
                      <p className="mt-1.5 text-[0.78vw] leading-[1.5] text-slate-600 max-lg:text-xs max-md:text-sm">
                        {benefitDescription}
                      </p>
                    )}
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      )}
    </section>
  );
}

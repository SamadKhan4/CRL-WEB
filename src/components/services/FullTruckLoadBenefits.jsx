
import React from 'react';
import { motion } from 'framer-motion';
import deliveryImage from '../../assets/Services/service-delivery.png';
import packingImage from '../../assets/Services/service-packing.png';
import {
  CircleDollarSign,
  ShieldCheck,
  MessageCircle,
  Eye,
  House,
} from 'lucide-react';

const benefits = [
  {
    title: 'Dedicated Vehicle',
    description: 'The complete truck is allocated for the shipment.',
    Icon: CircleDollarSign,
    color: 'blue',
  },
  {
    title: 'Professional Transportation',
    description:
      'CRL focuses on dependable movement and professional service.',
    Icon: ShieldCheck,
    color: 'green',
  },
  {
    title: 'Safety First',
    description:
      'Careful handling and transportation of goods remain a core operational commitment.',
    Icon: MessageCircle,
    color: 'purple',
  },
  {
    title: 'Timely Delivery Focus',
    description:
      'CRL emphasizes meeting committed delivery schedules.',
    Icon: Eye,
    color: 'amber',
  },
  {
    title: 'Transparent Operations',
    description:
      'Clear communication is maintained throughout the transportation process.',
    Icon: House,
    color: 'sky',
  },
];

const iconColors = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
  amber: 'bg-amber-50 text-amber-600',
  sky: 'bg-sky-50 text-sky-600',
};

export function FullTruckLoadBenefits() {
  return (
    <section className="w-full bg-[#F6F7F9]">
      {/* Images */}
      <div className="mb-[2.8571vw] grid grid-cols-2 gap-[2.5714vw] max-md:mb-8 max-md:gap-3">
        <div className="overflow-hidden rounded-[1.2vw] max-md:rounded-xl">
          <img
            src={deliveryImage}
            alt="Professional handling of shipment"
            loading="lazy"
            className="block aspect-[1.65/1] h-auto w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[1.2vw] max-md:rounded-xl">
          <img
            src={packingImage}
            alt="Careful packing and shipment preparation"
            loading="lazy"
            className="block aspect-[1.65/1] h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Heading and benefits */}
      <div className="mb-4">
        <p className="mb-3 text-[clamp(11px,0.85vw,14px)] font-medium text-[#E31824]">
          Why Choose CRL FTL?
        </p>

        <h2 className="mb-4 text-[clamp(28px,2.65vw,42px)] font-semibold leading-[1.15] tracking-[-0.035em] text-[#0B1726]">
          Reliable Transportation for High-Volume Requirements
        </h2>

        <p className="max-w-[850px] text-[clamp(13px,1vw,16px)] leading-relaxed text-slate-600">
          CRL focuses on reliable movement, timely delivery, safe handling,
          transparent operations, and professional service throughout the
          transportation process.
        </p>
      </div>

      <div className="mb-4 h-px w-full bg-[#D1D5DB]" />

      <div className="grid grid-cols-6 gap-3 max-sm:grid-cols-1">
        {benefits.map(({ title, description, Icon, color }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className={`
              group rounded-[14px] border border-[#E4E9F0]
              bg-white p-[1.15vw]
              transition-colors duration-200
              hover:border-[#E31824]/20 hover:bg-[#FFF5F5]
              max-lg:p-4
              ${index < 3 ? 'col-span-2' : ''}
              ${index === 3 ? 'col-span-2' : ''}
              ${index === 4 ? 'col-span-4' : ''}
              max-sm:col-span-1
            `}
          >
            <div
              className={`
                mb-3 flex h-9 w-9 items-center justify-center
                rounded-[10px] ${iconColors[color]}
              `}
            >
              <Icon size={17} strokeWidth={1.8} />
            </div>

            <h3 className="mb-1 text-[clamp(13px,0.95vw,15px)] font-semibold text-[#0B1726]">
              {title}
            </h3>

            <p className="text-[clamp(11px,0.82vw,13px)] leading-[1.5] text-slate-600">
              {description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

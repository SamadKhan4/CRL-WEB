
import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import serviceFLT from '../../assets/Services/WhatFLT.png';

const benefits = [
  'Industrial goods',
  'Machinery',
  'FMCG',
  'Automotive components',
  'Commercial goods',
  'Bulk consignments',
];

export function FullTruckLoadOverview() {
  return (
    <section className="w-full bg-[#f5f7fa]">
      <div className="mx-auto w-full">
        {/* FTL image — temporary image, replace later */}
        <Reveal>
          <div className="overflow-hidden rounded-[14px]">
            <img
              src={serviceFLT}
              alt="Full Truck Load transportation"
              loading="lazy"
              className="block aspect-[2.2/1] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Overview content */}
        <div className="pt-8">
          <Reveal>
            <p className="mb-3 text-[12px] font-medium text-crl">
              What is FTL?
            </p>

            <h2 className="text-[clamp(28px,3vw,38px)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#0c1727]">
              A Dedicated Truck for Your Shipment
            </h2>

            <div className="my-4 border-t border-[#d1d5db]" />

            <p className="text-[14px] leading-[1.7] text-[#536176]">
              Full Truck Load transportation is suitable when your
              shipment requires the complete vehicle capacity.
            </p>

            <p className="mt-3 text-[13px] leading-[1.7] text-[#536176]">
              With CRL FTL, the truck is dedicated to the customer’s
              shipment requirement.
            </p>
          </Reveal>

          {/* FTL shipment categories */}
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="flex min-h-[40px] items-center gap-3 rounded-[10px]
                           border border-[#e2e8f0] bg-white px-3 py-2.5
                           transition-colors duration-200 hover:bg-[#fff0f0]"
              >
                <span className="flex h-[18px] w-[18px] shrink-0 items-center
                                 justify-center rounded-[5px] bg-[#fde8e8]
                                 text-[12px] font-bold text-crl">
                  ✓
                </span>

                <span className="text-[11px] font-medium text-[#182337]">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

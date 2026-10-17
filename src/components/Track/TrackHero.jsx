import React from 'react';
import { motion } from 'framer-motion';
import { RadioIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

export function TrackHero() {
  return (
    <div className="mx-auto max-w-[56vw] text-center max-lg:max-w-2xl">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="
          inline-flex items-center gap-[0.5vw] rounded-full bg-[#E8EBFA] px-[1.12vw] py-[0.44vw]
          text-[length:max(11px,0.75vw)] font-bold uppercase tracking-wide text-[#3A4560]
          max-lg:gap-1.5 max-lg:px-3 max-lg:py-1.5 max-lg:text-[10px]
        "
      >
        <RadioIcon className="h-[1vw] w-[1vw] text-crl max-lg:h-3 max-lg:w-3" aria-hidden="true" />
        CRL Digital Fleet Network • Docket Telematics
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        className="mt-[1.1vw] font-display text-[length:max(35px,3.38vw)] font-extrabold leading-tight tracking-[-0.02em] text-navy-900 max-lg:mt-4 max-lg:text-4xl max-md:text-3xl"
      >
        Track Your Shipment
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        className="mt-[0.28vw] font-display text-[length:max(16px,1.56vw)] font-bold text-[#8A5A0B] max-lg:text-lg"
      >
        Stay Updated at Every Movement
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
        className="mx-auto mt-[0.9vw] max-w-[59vw] text-[length:max(12px,1.1vw)] leading-[1.60] text-[#454E5C] max-lg:mt-3 max-lg:max-w-none max-lg:text-sm"
      >
        Track your CRL shipment quickly using your LR / Docket Number. CRL provides online
        shipment tracking with movement updates so customers can stay informed throughout the
        transportation journey.
      </motion.p>
    </div>
  );
}

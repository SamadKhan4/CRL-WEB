import React from 'react';
import { motion } from 'framer-motion';

import { easeOut } from '../../utils/motion';

export function RouteMapCard({ route }) {
  const src = `https://www.google.com/maps?q=${route.lat},${route.lng}&z=8&output=embed`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
      className="rounded-[1vw] border border-[#E9EDF2] bg-white p-[1.5vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <h2 className="text-[0.69vw] font-bold uppercase tracking-wide text-[#3A4560] max-lg:text-[11px]">
        Transit Corridor Route Map
      </h2>

      <div className="relative mt-[0.75vw] aspect-[16/9] overflow-hidden rounded-[0.5vw] max-lg:mt-3 max-lg:rounded-lg">
        <iframe
          title={`Current location: ${route.currentPoint}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
        <p className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 rounded bg-white/95 px-[0.75vw] py-[0.44vw] text-[length:max(11px,0.69vw)] font-bold text-navy-900 shadow max-lg:px-2.5 max-lg:py-1.5 max-lg:text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="h-[0.56vw] w-[0.56vw] rounded-full bg-crl max-lg:h-1.5 max-lg:w-1.5" />
            {route.currentPoint}
          </span>
          <span className="font-semibold text-[#4B5563]">
            {route.totalKm} km Total • {route.remainingKm} km Left
          </span>
        </p>
      </div>
    </motion.section>
  );
}

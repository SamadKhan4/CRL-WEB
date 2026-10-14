import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { easeOut } from '../../utils/motion';
import { mapLocation } from '../../data/contact';

export function ContactMap() {
  const query = encodeURIComponent(mapLocation.address);
  const embedSrc = `https://www.google.com/maps?q=${query}&z=16&output=embed`;
  const openHref = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
      className="
        relative mt-[1.6vw] aspect-[16/9] w-full overflow-hidden rounded-[1.2vw]
        shadow-[0_18px_40px_rgba(7,17,31,0.18)]
        max-lg:mt-6 max-lg:rounded-2xl
      "
    >
      <iframe
        title={mapLocation.title}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />

      <a
        href={openHref}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full
          bg-white px-3 py-1.5 text-[12px] font-medium text-crl shadow-md
          transition-transform duration-200 hover:scale-105
        "
      >
        Open in Google Maps
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </motion.div>
  );
}

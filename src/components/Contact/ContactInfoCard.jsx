import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

import { easeOut } from '../../utils/motion';

const iconMap = { MapPin, Phone, Mail, Clock };

export function ContactInfoCard({ card, index = 0 }) {
  const Icon = iconMap[card.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: easeOut }}
      whileHover={{ y: -8 }}
      className="
        group h-full rounded-[1.1vw] border border-[#E9EDF2] bg-white
        px-[1.4286vw] pb-[2.2vw] pt-[1.6vw]
        shadow-[0_4px_20px_rgba(7,17,31,0.03)]
        transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(215,25,32,0.12)]
        max-lg:rounded-2xl max-lg:p-6
      "
    >
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
        transition={{ duration: 0.5 }}
        className="
          mb-[1.4286vw] flex h-[2.5714vw] w-[2.5714vw] items-center justify-center
          rounded-full bg-[#F9D9DB] text-crl
          transition-colors duration-300 group-hover:bg-crl group-hover:text-white
          max-lg:mb-5 max-lg:h-11 max-lg:w-11
        "
      >
        <Icon
          aria-hidden="true"
          className="h-[1.0714vw] w-[1.0714vw] max-lg:h-[18px] max-lg:w-[18px]"
        />
      </motion.span>

      <h3 className="font-['Instrument_Sans',sans-serif] text-[1vw] font-semibold leading-snug text-navy-900 max-lg:text-base">
        {card.title}
      </h3>

      <div className="mt-[0.9vw] space-y-[0.9vw] text-[0.7857vw] leading-[1.5] text-[#2B3647] max-lg:mt-3 max-lg:space-y-3 max-lg:text-[13px]">
        {card.text && <p>{card.text}</p>}

        {card.lines && (
          <p>
            {card.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        )}

        {card.link && (
          <a
            href={card.link.href}
            className="block break-words font-medium text-navy-900 transition-colors duration-200 hover:text-crl"
          >
            {card.link.label}
          </a>
        )}

        {card.highlight && <p className="font-medium text-crl">{card.highlight}</p>}
      </div>
    </motion.article>
  );
}

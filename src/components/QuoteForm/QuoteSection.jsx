import React from 'react';
import { motion } from 'framer-motion';

import { easeOut } from '../../utils/motion';

export function QuoteSection({ number, title, required = false, description, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className="rounded-2xl border border-[#E9EDF2] bg-white p-5 shadow-[0_4px_20px_rgba(7,17,31,0.03)] sm:p-7"
    >
      <header className="mb-5">
        <h2 className="flex items-center gap-2.5 font-display text-lg font-bold text-navy-900">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F9D9DB] text-xs font-bold text-navy-900"
          >
            {number}
          </span>
          <span>
            {title}
            {required && <span className="ml-1 text-crl">*</span>}
          </span>
        </h2>
        {description && (
          <p className="mt-1 pl-[38px] text-[13px] text-[#5D6672]">{description}</p>
        )}
      </header>

      {children}
    </motion.section>
  );
}

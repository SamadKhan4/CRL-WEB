import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const controlClass = (hasError, extra = '') =>
  `h-11 w-full rounded-lg bg-[#FDF0F1] text-sm text-navy-900 outline-none
   placeholder:text-[#8B93A1] ring-1 transition focus:ring-2 focus:ring-crl/40
   ${hasError ? 'ring-crl' : 'ring-transparent'} ${extra}`;

/** Label + control slot + animated error message */
export function Field({ id, label, required = false, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-crl">*</span>}
      </label>

      {children}

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1 overflow-hidden text-xs font-medium text-crl"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

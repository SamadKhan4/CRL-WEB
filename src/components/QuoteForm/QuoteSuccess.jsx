import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

export function QuoteSuccess({ quoteRef, email, onReset }) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className="rounded-2xl border border-[#E9EDF2] bg-white p-8 text-center shadow-[0_4px_20px_rgba(7,17,31,0.03)] sm:p-12"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 16 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500"
      >
        <CheckCircle2Icon className="h-9 w-9" aria-hidden="true" />
      </motion.span>

      <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
        Quote request received
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#5D6672]">
        Thank you! Our team will review your requirement and share a tailored quotation
        with you shortly{email ? <> on <strong className="text-navy-900">{email}</strong></> : ''}.
      </p>

      <p className="mx-auto mt-5 inline-block rounded-lg bg-[#FDF0F1] px-4 py-2 text-sm font-semibold text-navy-900">
        Reference: <span className="text-crl">{quoteRef}</span>
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
        >
          Submit another request
        </button>
        <a
          href="/"
          className="rounded-lg bg-[#DA1C22] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B3141A]"
        >
          Back to Home
        </a>
      </div>
    </motion.div>
  );
}

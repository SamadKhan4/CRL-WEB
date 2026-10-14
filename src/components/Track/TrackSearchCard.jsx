import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, InfoIcon, Loader2Icon, TruckIcon, XIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';
import { sampleDockets } from '../../data/trackShipmentMock';

export function TrackSearchCard({ value, onChange, onSubmit, onClear, onSample, loading, error, badge }) {
  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
      className="
        mx-auto mt-[2.6vw] max-w-[37.5vw] rounded-[0.8vw] bg-white p-[1.3vw]
        shadow-[0_14px_40px_rgba(7,17,31,0.12)]
        max-lg:mt-8 max-lg:max-w-2xl max-lg:rounded-xl max-lg:p-5
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-[0.95vw] font-bold text-navy-900 max-lg:text-base">
            Shipment Tracking — Enter Your Tracking Details
          </h2>
          <p className="mt-[0.2vw] text-[0.65vw] text-[#5D6672] max-lg:text-xs">
            Instant telematics lookup across Full Truckload &amp; Part Truckload operations.
          </p>
        </div>

        <motion.span
          key={badge}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
            shrink-0 whitespace-nowrap rounded border border-red-200 bg-red-50 px-[0.6vw] py-[0.25vw]
            text-[0.55vw] font-bold uppercase tracking-wide text-crl
            max-lg:px-2 max-lg:py-1 max-lg:text-[10px]
          "
        >
          {badge}
        </motion.span>
      </div>

      <div className="mt-[1vw] flex items-stretch gap-[1vw] max-lg:mt-4 max-lg:gap-3 max-sm:flex-col">
        <div className="relative flex-1">
          <label htmlFor="docket-number" className="sr-only">
            LR / Docket Number
          </label>
          <TruckIcon
            aria-hidden="true"
            className="pointer-events-none absolute left-[0.8vw] top-1/2 h-[1vw] w-[1vw] -translate-y-1/2 text-[#5D6672] max-lg:left-3 max-lg:h-4 max-lg:w-4"
          />
          <input
            id="docket-number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter LR / Docket Number"
            autoComplete="off"
            aria-invalid={Boolean(error)}
            aria-describedby="docket-feedback"
            className={`
              h-full w-full rounded-[0.4vw] bg-[#F2F4F7] py-[0.8vw] pl-[2.6vw] pr-[2.4vw]
              text-[0.85vw] font-medium text-navy-900 outline-none placeholder:text-[#8A93A1]
              ring-1 transition focus:ring-2 focus:ring-crl/40
              max-lg:rounded-lg max-lg:py-3 max-lg:pl-10 max-lg:pr-10 max-lg:text-sm
              ${error ? 'ring-crl' : 'ring-transparent'}
            `}
          />
          {value && (
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear docket number"
              className="absolute right-[0.7vw] top-1/2 -translate-y-1/2 text-[#5D6672] transition hover:text-crl max-lg:right-3"
            >
              <XIcon className="h-[0.9vw] w-[0.9vw] max-lg:h-4 max-lg:w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            flex min-w-[9.2vw] items-center justify-center gap-2 rounded-[0.4vw] bg-[#DA1C22]
            px-[1.2vw] py-[0.8vw] text-[0.8vw] font-semibold text-white shadow-md
            transition-colors hover:bg-[#B3141A] disabled:cursor-not-allowed disabled:opacity-70
            max-lg:rounded-lg max-lg:px-5 max-lg:py-3 max-lg:text-sm
          "
        >
          {loading ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
              Tracking…
            </>
          ) : (
            'Track Shipment'
          )}
        </motion.button>
      </div>

      <div id="docket-feedback" aria-live="polite" className="mt-[0.7vw] max-lg:mt-3">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-[0.4vw] text-[0.65vw] font-medium text-crl max-lg:gap-1.5 max-lg:text-xs"
            >
              <AlertCircleIcon className="h-[0.8vw] w-[0.8vw] shrink-0 max-lg:h-3.5 max-lg:w-3.5" aria-hidden="true" />
              {error}
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-[0.4vw] text-[0.65vw] text-[#5D6672] max-lg:gap-1.5 max-lg:text-xs"
            >
              <InfoIcon className="h-[0.8vw] w-[0.8vw] shrink-0 text-crl max-lg:h-3.5 max-lg:w-3.5" aria-hidden="true" />
              Enter the LR or Docket Number provided at the time of booking to view your latest
              shipment status.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-[1vw] flex flex-wrap items-center gap-[0.5vw] max-lg:mt-4 max-lg:gap-2">
        <span className="text-[0.55vw] font-bold uppercase tracking-wide text-[#3A4560] max-lg:text-[10px]">
          Sample Dockets:
        </span>
        {sampleDockets.map((s) => (
          <motion.button
            key={s.docketNo}
            type="button"
            onClick={() => onSample(s.docketNo)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#E6E9FB] px-[0.6vw] py-[0.25vw] text-[0.55vw] font-semibold text-navy-900 transition-colors hover:bg-[#D5DAF7] max-lg:px-2.5 max-lg:py-1 max-lg:text-[11px]"
          >
            {s.docketNo} ({s.route})
          </motion.button>
        ))}
      </div>
    </motion.form>
  );
}

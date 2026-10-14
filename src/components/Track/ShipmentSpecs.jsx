import React from 'react';
import { motion } from 'framer-motion';
import { ArchiveIcon, CircleDashedIcon, ShieldCheckIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

function Row({ label, children, highlight = false }) {
  return (
    <div
      className={`flex items-start justify-between gap-3 py-[0.55vw] text-[0.65vw] max-lg:py-2 max-lg:text-xs ${
        highlight ? 'rounded bg-[#EEF0FD] px-[0.5vw] max-lg:px-2' : ''
      }`}
    >
      <dt className={highlight ? 'font-semibold text-navy-900' : 'text-[#4B5563]'}>{label}</dt>
      <dd className="text-right font-semibold text-navy-900">{children}</dd>
    </div>
  );
}

export function ShipmentSpecs({ specs }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      className="rounded-[0.8vw] border border-[#E9EDF2] bg-white p-[1.2vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display text-[0.9vw] font-bold text-navy-900 max-lg:text-base">
          Shipment Specifications
        </h2>
        <ArchiveIcon className="h-[1vw] w-[1vw] text-crl max-lg:h-4 max-lg:w-4" aria-hidden="true" />
      </div>

      <dl className="mt-[0.6vw] max-lg:mt-3">
        <Row label="LR / Docket No."><span className="text-[0.8vw] font-extrabold max-lg:text-sm">{specs.lrNumber}</span></Row>
        <Row label="Booking Date">{specs.bookingDate}</Row>
        <Row label="Origin Hub">
          {specs.origin.city}
          <span className="block text-[0.55vw] font-normal text-[#5D6672] max-lg:text-[11px]">({specs.origin.terminal})</span>
        </Row>
        <Row label="Destination">
          {specs.destination.city}
          <span className="block text-[0.55vw] font-normal text-[#5D6672] max-lg:text-[11px]">({specs.destination.terminal})</span>
        </Row>
        <Row label="Transport Mode">{specs.transportMode}</Row>
        <Row label="Package Count">{specs.packageCount}</Row>
        <Row label="Gross Chargeable Wt.">{specs.grossWeight}</Row>
        <Row label="Current Highway Tag">
          <span className="text-[#8A5A0B]">{specs.currentHighwayTag}</span>
        </Row>
        <Row label="Estimated Delivery (EDD)" highlight>
          <span className="text-[#1E3A8A]">{specs.estimatedDelivery}</span>
        </Row>
        <Row label="POD Document">
          <span className="inline-flex items-center gap-1 text-orange-600">
            <CircleDashedIcon className="h-[0.8vw] w-[0.8vw] max-lg:h-3.5 max-lg:w-3.5" aria-hidden="true" />
            {specs.podStatus}
          </span>
        </Row>
      </dl>

      {specs.note && (
        <p className="mt-[0.8vw] flex items-start gap-[0.4vw] rounded bg-[#EEF0FD] p-[0.6vw] text-[0.55vw] font-semibold leading-snug text-[#3A4560] max-lg:mt-3 max-lg:gap-1.5 max-lg:p-2.5 max-lg:text-[11px]">
          <ShieldCheckIcon className="mt-0.5 h-[0.8vw] w-[0.8vw] shrink-0 text-crl max-lg:h-3.5 max-lg:w-3.5" aria-hidden="true" />
          {specs.note}
        </p>
      )}
    </motion.section>
  );
}

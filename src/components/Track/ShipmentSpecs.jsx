
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArchiveIcon,
  CircleDashedIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { easeOut } from '../../utils/motion';

const displayValue = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'Not provided';
  }

  return value;
};

function Row({ label, children, highlight = false }) {
  return (
    <div
      className={`flex items-start justify-between gap-3 py-[0.69vw] text-[length:max(11px,0.81vw)] max-lg:py-2 max-lg:text-xs ${
        highlight
          ? 'rounded bg-[#EEF0FD] px-[0.62vw] max-lg:px-2'
          : ''
      }`}
    >
      <dt
        className={
          highlight
            ? 'font-semibold text-navy-900'
            : 'text-[#4B5563]'
        }
      >
        {label}
      </dt>

      <dd className="max-w-[60%] break-words text-right font-semibold text-navy-900">
        {children}
      </dd>
    </div>
  );
}

export function ShipmentSpecs({ specs }) {
  const data = specs || {};
  const origin = data.origin || {};
  const destination = data.destination || {};

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      className="rounded-[1vw] border border-[#E9EDF2] bg-white p-[1.5vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-[length:max(12px,1.12vw)] font-bold text-navy-900 max-lg:text-base">
          Shipment Specifications
        </h2>

        <ArchiveIcon
          className="h-[1.25vw] w-[1.25vw] shrink-0 text-crl max-lg:h-4 max-lg:w-4"
          aria-hidden="true"
        />
      </div>

      <dl className="mt-[0.75vw] max-lg:mt-3">
        <Row label="LR / Docket No.">
          <span className="text-[1vw] font-extrabold max-lg:text-sm">
            {displayValue(data.lrNumber)}
          </span>
        </Row>

        <Row label="Booking Date">
          {displayValue(data.bookingDate)}
        </Row>

        <Row label="Origin Hub">
          {displayValue(origin.city)}
          {origin.terminal && (
            <span className="block text-[length:max(11px,0.69vw)] font-normal text-[#5D6672] max-lg:text-[11px]">
              ({origin.terminal})
            </span>
          )}
        </Row>

        <Row label="Destination">
          {displayValue(destination.city)}
          {destination.terminal && (
            <span className="block text-[length:max(11px,0.69vw)] font-normal text-[#5D6672] max-lg:text-[11px]">
              ({destination.terminal})
            </span>
          )}
        </Row>

        <Row label="Transport Mode">
          {displayValue(data.transportMode)}
        </Row>

        <Row label="Package Count">
          {displayValue(data.packageCount)}
        </Row>

        <Row label="Gross Weight">
          {displayValue(data.grossWeight)}
        </Row>

        <Row label="Chargeable Weight">{displayValue(data.chargeableWeight)}</Row>

        <Row label="POD Document">
          <span className="inline-flex items-center gap-1 text-[#5D6672]">
            <CircleDashedIcon
              className="h-[1vw] w-[1vw] shrink-0 max-lg:h-3.5 max-lg:w-3.5"
              aria-hidden="true"
            />
            {displayValue(data.podStatus)}
          </span>
        </Row>
      </dl>

      {data.note && (
        <p className="mt-[1vw] flex items-start gap-[0.5vw] rounded bg-[#EEF0FD] p-[0.75vw] text-[length:max(11px,0.69vw)] font-semibold leading-snug text-[#3A4560] max-lg:mt-3 max-lg:gap-1.5 max-lg:p-2.5 max-lg:text-[11px]">
          <ShieldCheckIcon
            className="mt-0.5 h-[1vw] w-[1vw] shrink-0 text-crl max-lg:h-3.5 max-lg:w-3.5"
            aria-hidden="true"
          />

          <span>{data.note}</span>
        </p>
      )}
    </motion.section>
  );
}

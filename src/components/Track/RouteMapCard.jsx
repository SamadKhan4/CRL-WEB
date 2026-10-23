
import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, MapIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

export function RouteMapCard({ route }) {
  const lat = Number(route?.lat);
  const lng = Number(route?.lng);

  const hasCoordinates =
    route?.lat !== null &&
    route?.lat !== undefined &&
    route?.lng !== null &&
    route?.lng !== undefined &&
    route?.lat !== '' &&
    route?.lng !== '' &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180;

  const currentPoint =
    route?.currentPoint || 'Location unavailable';

  const src = hasCoordinates
    ? `https://www.google.com/maps?q=${lat},${lng}&z=8&output=embed`
    : null;

  const hasTotalKm =
    route?.totalKm !== null &&
    route?.totalKm !== undefined &&
    route?.totalKm !== '' &&
    Number.isFinite(Number(route.totalKm));

  const hasRemainingKm =
    route?.remainingKm !== null &&
    route?.remainingKm !== undefined &&
    route?.remainingKm !== '' &&
    Number.isFinite(Number(route.remainingKm));

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
      className="rounded-[1vw] border border-[#E9EDF2] bg-white p-[1.5vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[length:max(11px,0.69vw)] font-bold uppercase tracking-wide text-[#3A4560]">
          Transit Corridor Route Map
        </h2>

        <MapIcon
          className="h-4 w-4 shrink-0 text-crl"
          aria-hidden="true"
        />
      </div>

      <div className="relative mt-[0.75vw] aspect-[16/9] overflow-hidden rounded-[0.5vw] bg-[#F5F7FB] max-lg:mt-3 max-lg:rounded-lg">
        {hasCoordinates ? (
          <iframe
            title={`Map showing shipment location: ${currentPoint}`}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-5 text-center">
            <MapPinIcon
              className="h-8 w-8 text-crl max-lg:h-7 max-lg:w-7"
              aria-hidden="true"
            />

            <p className="mt-3 text-sm font-bold text-navy-900">
              {currentPoint}
            </p>

            <p className="mt-1 max-w-sm text-xs leading-relaxed text-[#5D6672]">
              Exact map location is unavailable because GPS coordinates
              have not been provided by the tracking service.
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute bottom-2 left-2 right-2 flex flex-wrap items-center justify-between gap-2 rounded bg-white/95 px-[0.75vw] py-[0.44vw] text-[length:max(11px,0.69vw)] font-bold text-navy-900 shadow max-lg:px-2.5 max-lg:py-1.5 max-lg:text-[10px]">
          <span className="flex min-w-0 items-center gap-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-crl" />
            <span className="truncate">{currentPoint}</span>
          </span>

          <span className="font-semibold text-[#4B5563]">
            {hasTotalKm
              ? `${route.totalKm} km Total`
              : 'Total distance unavailable'}

            {' • '}

            {hasRemainingKm
              ? `${route.remainingKm} km Left`
              : 'Remaining distance unavailable'}
          </span>
        </div>
      </div>
    </motion.section>
  );
}

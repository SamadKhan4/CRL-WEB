import React from 'react';
import { motion } from 'framer-motion';
import { PackageIcon, PhoneCallIcon, SatelliteDishIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

export function FleetTelematics({ telematics }) {
  const tel = telematics.controllerPhone.replace(/[^\d+]/g, '');

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
      className="rounded-[0.8vw] border border-[#E9EDF2] bg-white p-[1.2vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display text-[0.9vw] font-bold text-navy-900 max-lg:text-base">
          Fleet Telematics &amp; Driver
        </h2>
        <SatelliteDishIcon className="h-[1vw] w-[1vw] text-crl max-lg:h-4 max-lg:w-4" aria-hidden="true" />
      </div>

      <div className="mt-[0.8vw] flex items-center gap-[0.7vw] max-lg:mt-3 max-lg:gap-3">
        <span className="flex h-[2.4vw] w-[2.4vw] shrink-0 items-center justify-center rounded-[0.5vw] bg-navy-900 text-white max-lg:h-10 max-lg:w-10 max-lg:rounded-lg">
          <PackageIcon className="h-[1vw] w-[1vw] max-lg:h-4 max-lg:w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[0.75vw] font-bold text-navy-900 max-lg:text-sm">Vehicle: {telematics.vehicleNo}</p>
          <p className="text-[0.58vw] text-[#5D6672] max-lg:text-xs">{telematics.vehicleNote}</p>
        </div>
      </div>

      <dl className="mt-[0.8vw] space-y-[0.5vw] text-[0.62vw] max-lg:mt-3 max-lg:space-y-2 max-lg:text-xs">
        <div className="flex justify-between gap-3">
          <dt className="text-[#4B5563]">Battery / Engine Health</dt>
          <dd className="font-bold text-emerald-700">{telematics.engineHealth}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-[#4B5563]">GPS Sensor Status</dt>
          <dd className="font-bold text-emerald-700">{telematics.gpsStatus}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-[#4B5563]">Security Seal Number</dt>
          <dd className="font-bold text-navy-900">{telematics.sealNumber}</dd>
        </div>
      </dl>

      <motion.a
        href={`tel:${tel}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="mt-[0.9vw] flex items-center justify-center gap-[0.4vw] rounded-[0.4vw] bg-[#EEF0FD] py-[0.6vw] text-[0.65vw] font-bold text-navy-900 transition-colors hover:bg-[#E0E4FB] max-lg:mt-4 max-lg:gap-2 max-lg:rounded-lg max-lg:py-2.5 max-lg:text-xs"
      >
        <PhoneCallIcon className="h-[0.8vw] w-[0.8vw] text-crl max-lg:h-3.5 max-lg:w-3.5" aria-hidden="true" />
        Call Route Controller ({telematics.controllerPhone})
      </motion.a>
    </motion.section>
  );
}

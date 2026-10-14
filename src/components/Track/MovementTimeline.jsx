import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ClockIcon, CrosshairIcon, FlagIcon, MapPinIcon, RouteIcon, TruckIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

// supports **bold** inside description text coming from the API
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold text-navy-900">{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

function Marker({ item }) {
  const base = 'relative z-10 flex h-[1.88vw] w-[1.88vw] shrink-0 items-center justify-center rounded-full max-lg:h-6 max-lg:w-6';
  const icon = 'h-[1vw] w-[1vw] max-lg:h-3.5 max-lg:w-3.5';

  if (item.state === 'active') {
    return (
      <span className={`${base} bg-orange-500 text-white ring-4 ring-orange-200`}>
        <CrosshairIcon className={icon} aria-hidden="true" />
      </span>
    );
  }
  if (item.state === 'completed') {
    return (
      <span className={`${base} bg-emerald-500 text-white`}>
        <CheckIcon className={icon} aria-hidden="true" />
      </span>
    );
  }
  const Icon = item.icon === 'flag' ? FlagIcon : ClockIcon;
  return (
    <span className={`${base} bg-[#E8EBFA] text-[#8A93B0]`}>
      <Icon className={icon} aria-hidden="true" />
    </span>
  );
}

export function MovementTimeline({ timeline }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
      className="rounded-[1vw] border border-[#E9EDF2] bg-white p-[1.75vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-[length:max(14px,1.31vw)] font-bold text-navy-900 max-lg:text-lg">
            Live Movement Timeline — Follow Every Stage
          </h2>
          <p className="mt-[0.25vw] text-[length:max(11px,0.81vw)] text-[#5D6672] max-lg:text-xs">
            GPS telemetry pings and scanned gate passes authenticated by hub dispatchers.
          </p>
        </div>
        <RouteIcon className="h-[1.38vw] w-[1.38vw] shrink-0 text-crl max-lg:h-5 max-lg:w-5" aria-hidden="true" />
      </div>

      <ol className="relative mt-[1.5vw] max-lg:mt-5">
        {/* vertical line */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[0.94vw] top-4 w-px bg-[#E1E5EC] max-lg:left-3"
        />

        {timeline.map((item, index) => {
          const scheduled = item.state === 'scheduled';
          const active = item.state === 'active';

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.1, ease: easeOut }}
              className={`relative flex gap-[1.12vw] rounded-[0.5vw] p-[0.88vw] max-lg:gap-3 max-lg:rounded-lg max-lg:p-2.5 ${
                active ? 'bg-[#EEF0FD]' : ''
              }`}
            >
              <Marker item={item} />

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3 max-md:flex-col max-md:gap-1">
                  <h3
                    className={`text-[1.06vw] font-semibold leading-snug max-lg:text-sm ${
                      scheduled ? 'text-[#8A93A1]' : 'text-navy-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`shrink-0 text-[length:max(11px,0.69vw)] font-bold uppercase tracking-wide max-lg:text-[10px] ${
                      active ? 'text-orange-700' : scheduled ? 'text-[#9AA3B2]' : 'text-[#3A4560]'
                    }`}
                  >
                    {item.time}
                  </span>
                </div>

                <p
                  className={`mt-[0.31vw] text-[length:max(11px,0.85vw)] leading-[1.5] max-lg:mt-1 max-lg:text-xs ${
                    scheduled ? 'text-[#9AA3B2]' : 'text-[#5D6672]'
                  }`}
                >
                  {rich(item.description)}
                </p>

                {item.meta && (
                  <p className="mt-[0.5vw] flex flex-wrap items-center gap-x-[1.25vw] gap-y-1 text-[length:max(11px,0.72vw)] text-[#4B5563] max-lg:mt-2 max-lg:text-[11px]">
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="h-[0.88vw] w-[0.88vw] max-lg:h-3 max-lg:w-3" aria-hidden="true" />
                      Lat: {item.meta.lat}, Long: {item.meta.lng}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <TruckIcon className="h-[0.88vw] w-[0.88vw] max-lg:h-3 max-lg:w-3" aria-hidden="true" />
                      Driver: {item.meta.driver}
                    </span>
                  </p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </motion.section>
  );
}

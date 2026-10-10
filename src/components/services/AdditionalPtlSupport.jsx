import React from 'react';

const defaultSupportServices = [
  'Online Tracking',
  'Movement Updates',
  '24h Support',
  'Door Pickup',
  'Door Delivery',
  'COD / To-Pay',
  'POD Tracking',
  'Hub Connectivity',
  '24×7 Operations',
  'Appointment Delivery',
];

export function AdditionalPtlSupport({
  kicker = 'Comprehensive Value',
  heading = 'Additional PTL Support Capabilities',
  description = 'Every PTL consignment comes backed with our full suite of enterprise support services:',
  supportServices = defaultSupportServices,
}) {
  return (
    <section className="mt-[3vw] w-full max-lg:mt-10">
      {kicker && (
        <p className="mb-2 text-sm font-medium text-crl">
          {kicker}
        </p>
      )}

      <h2 className="text-[2.4vw] font-semibold leading-[1.15] tracking-[-0.03em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
        {heading}
      </h2>

      {description && (
        <p className="mt-3 text-[1vw] leading-relaxed text-slate-600 max-lg:text-base max-md:text-sm">
          {description}
        </p>
      )}

      {supportServices.length > 0 && (
        <div className="mt-5 grid grid-cols-5 gap-3 border-t border-slate-300 pt-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2.5">
          {supportServices.map((service) => (
            <div
              key={service}
              className="
                group flex min-h-[58px] cursor-default items-center gap-2.5
                rounded-xl border border-slate-200 bg-white px-4 py-4
                transition-all duration-200 ease-out
                hover:border-red-200 hover:bg-[#FFF1F2]
                max-lg:min-h-[54px] max-lg:px-3 max-lg:py-3
              "
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-[#E31824]"
              />

              <span
                className="
                  text-sm font-medium leading-snug text-slate-800
                  transition-colors duration-200
                  group-hover:text-[#C91520]
                  max-lg:text-[13px]
                "
              >
                {service}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

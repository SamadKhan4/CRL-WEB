
import React from 'react';
import { Check } from 'lucide-react';

const defaultSupportServices = [
  'Online Tracking',
  'Movement Updates',
  '24hr Support',
  'Door Pickup',
  'Door Delivery',
  'COD / To-Pay',
  'POD Tracking',
  'Hub Connectivity',
  '24×7 Operations',
  'Appointment Delivery',
];

export function AdditionalPtlSupport({
  variant = 'default',
  columns = 5,
  images = [],
  kicker = 'Comprehensive Value',
  heading = 'Additional PTL Support Capabilities',
  description = 'Every PTL consignment comes backed with our full suite of enterprise support services:',
  supportServices = defaultSupportServices,
}) {
  const gridClasses =
    variant === 'checklist'
      ? 'mt-2 grid grid-cols-2 gap-3 border-t border-slate-300 pt-5 max-sm:grid-cols-1'
      : columns === 3
        ? 'mt-5 grid grid-cols-3 gap-3 border-t border-slate-300 pt-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-2.5'
        : 'mt-5 grid grid-cols-5 gap-3 border-t border-slate-300 pt-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-md:gap-2.5';

  return (
    <section className="mt-[3vw] w-full max-lg:mt-10">
      {variant === 'checklist' && images.length > 0 && (
        <div className="mb-[3vw] grid grid-cols-2 gap-[1.3vw] max-md:grid-cols-1 max-md:gap-4">
          {images.map((image, index) => (
            <div
              key={`${image.alt || 'service-image'}-${index}`}
              className="w-full overflow-hidden rounded-[14px]"
            >
              <img
                src={image.src}
                alt={image.alt || ''}
                loading="lazy"
                className="h-[25vw] min-h-[220px] max-h-[360px] w-full rounded-[14px] object-cover object-top max-md:h-[250px]"
              />
            </div>
          ))}
        </div>
      )}

      {kicker && (
        <p className="mb-2 text-sm font-medium text-crl">
          {kicker}
        </p>
      )}

      <h2 className="text-[2.4vw] font-semibold leading-[1.15] tracking-[-0.03em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
        {heading}
      </h2>

      {description && (
        <p className="mt-2 text-[1vw] leading-relaxed text-slate-600 max-lg:text-base max-md:text-sm">
          {description}
        </p>
      )}

      {supportServices.length > 0 && (
        <div className={gridClasses}>
          {supportServices.map((service, index) => (
            <div
              key={`${service}-${index}`}
              className={
                variant === 'checklist'
                  ? 'flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4'
                  : 'group flex min-h-[52px] min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 transition-colors duration-200 hover:border-red-200 hover:bg-[#FFF1F2] max-lg:min-h-[48px] max-lg:px-2.5 max-lg:py-2'
              }
            >
              {variant === 'checklist' ? (
                <Check
                  size={18}
                  className="shrink-0 text-[#E31824]"
                  aria-hidden="true"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#E31824]"
                />
              )}

              <span
                className={
                  variant === 'checklist'
                    ? 'min-w-0 text-sm font-medium text-slate-800'
                    : 'whitespace-nowrap text-[15px] font-medium leading-snug text-slate-800 transition-colors duration-200 group-hover:text-[#C91520] max-lg:text-sm'
                }
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

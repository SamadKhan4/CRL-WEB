
import React from 'react';

export function DoorPickupHowItWorks({ steps = [] }) {
  return (
    <section className="mt-[2.5vw] w-full max-lg:mt-8">
      <h2 className="border-b border-[#D4D7DC] pb-4 text-[2.5vw] font-semibold leading-tight tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
        How it Works
      </h2>

      <div className="relative grid grid-cols-3 items-start pt-[1.2vw] max-md:pt-5">
        {/* Curved dotted connectors */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-[18%] top-[4.5vw] z-0 h-[3vw] w-[64%] overflow-visible max-md:hidden"
        >
          <path
            d="M0 2 Q12 24 25 12 T50 2"
            fill="none"
            stroke="#252525"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.5"
          />

          <path
            d="M50 2 Q63 -10 75 12 T100 2"
            fill="none"
            stroke="#252525"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.5"
          />
        </svg>

        {steps.map((step) => {
          const isSquare = step.variant === 'square';

          return (
            <article
              key={step.title}
              className="relative z-10 flex min-w-0 flex-col items-center text-center"
            >
              {/* Image container */}
              <div
                className={
                  isSquare
                    ? 'flex h-[6.2vw] w-[6.2vw] min-h-[76px] min-w-[76px] max-h-[84px] max-w-[84px] items-center justify-center border border-dashed border-[#A7A7A7] bg-transparent p-2'
                    : 'flex h-[6.2vw] w-[6.2vw] min-h-[76px] min-w-[76px] max-h-[92px] max-w-[92px] items-center justify-center rounded-full border border-[#E5E7EB] bg-white p-2 shadow-[0_1px_4px_rgba(0,0,0,0.12)]'
                }
              >
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.imageAlt || step.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <h3 className="mt-[1.6vw] text-[1.15vw] font-semibold leading-snug text-navy-900 max-lg:mt-4 max-lg:text-base max-md:text-sm">
                {step.title}
              </h3>

              <p className="mt-2 max-w-[95%] text-[1vw] leading-[1.4] text-[#596579] max-lg:text-sm max-md:text-xs">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import React from 'react';
import { industries } from '../../../data/company';
import { Reveal } from '../../ui/Reveal';

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="
        w-full
        bg-white
        py-[5vw]

        max-lg:py-20
        sm:max-lg:py-28
      "
    >
      <div
        className="
          container-crl
          mx-auto
          w-[91.2857vw]
          max-w-none

          max-lg:w-auto
          max-lg:max-w-none
        "
      >
        {/* Heading */}
        <div
          className="
            grid
            gap-[2.5714vw]
            lg:grid-cols-12
            lg:items-end

            max-lg:gap-6
          "
        >
          <Reveal className="lg:col-span-7">
            <h2
              id="industries-heading"
              className="
                font-display
                text-[3.2143vw]
                font-extrabold
                leading-[1.06]
                tracking-[-0.03em]
                text-ink

                max-lg:text-[clamp(2.125rem,4.6vw,3.5rem)]
              "
            >
              Built for Businesses That Keep Moving.
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p
              className="
                font-['Instrument_Sans',sans-serif]
                text-[1.2857vw]
                leading-[1.45]
                text-body

                max-lg:text-lg
                max-lg:leading-relaxed
              "
            >
              Shipment types CRL regularly moves through dedicated Full Truck
              Load service.
            </p>
          </Reveal>
        </div>

        {/* Industries */}
        <ul
          className="
            mt-[4vw]
            grid
            grid-cols-1
            gap-[1.1429vw]
            sm:grid-cols-2
            lg:grid-cols-12
            lg:gap-[1.4286vw]

            max-lg:mt-14
            max-lg:gap-4
            lg:max-lg:gap-5
          "
        >
          {industries.map((ind, i) => (
            <Reveal
              as="li"
              key={ind.title}
              delay={i % 3 * 0.06}
              className={ind.span}
            >
              <figure
                className="
                  group
                  relative
                  h-[22.8571vw]
                  overflow-hidden
                  rounded-xl
                  bg-navy-900

                  max-lg:h-72
                  lg:max-lg:h-80
                "
              >
                <img
                  src={ind.image}
                  alt=""
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-navy-900/90
                    via-navy-900/20
                    to-transparent
                  "
                  aria-hidden="true"
                />

                <figcaption
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-[1.7143vw]

                    max-lg:p-6
                  "
                >
                  <h3
                    className="
                      font-display
                      text-[1.4286vw]
                      font-bold
                      text-white

                      max-lg:text-xl
                      sm:max-lg:text-2xl
                    "
                  >
                    {ind.title}
                  </h3>

                  <p
                    className="
                      mt-[0.2857vw]
                      text-[1vw]
                      text-white/80
                      transition-[opacity,transform]
                      duration-300
                      ease-out
                      lg:translate-y-2
                      lg:opacity-0
                      lg:group-hover:translate-y-0
                      lg:group-hover:opacity-100

                      max-lg:mt-1
                      max-lg:text-sm
                    "
                  >
                    {ind.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
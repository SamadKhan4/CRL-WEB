import React, { useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

import { services } from '../../../data/services';
import { Reveal } from '../../ui/Reveal';

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="
        w-full
        bg-off
        py-[5vw]

        max-lg:py-20
        max-sm:py-16
      "
    >
      <div
        className="
          mx-auto
          w-[91.2857vw]

          max-lg:w-[92vw]
        "
      >
        {/* Heading */}
        <div
          className="
            grid
            gap-[2.5714vw]
            lg:grid-cols-12
            lg:items-end

            max-lg:gap-[40px]
          "
        >
          <Reveal className="lg:col-span-7">
            <h2
              id="services-heading"
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
              Logistics Solutions Built Around Your Shipment
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
              From a few cartons to a full vehicle or a complete relocation —
              choose the movement that fits your goods.
            </p>
          </Reveal>
        </div>

        {/* Services */}
        <ul
          className="
            mt-[4vw]
            grid
            gap-[1.7143vw]
            md:grid-cols-2
            lg:grid-cols-3

            max-lg:mt-14
            max-lg:gap-6
          "
          onMouseLeave={() => setActive(0)}
        >
          {services.map((s, i) => {
            const isActive = active === i;

            return (
              <Reveal
                as="li"
                key={s.title}
                delay={i % 3 * 0.06}
                className="h-full"
              >
                <a
                  href={s.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{
                    transitionDelay: `${i * 50}ms`,
                  }}
                  className={`
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-xl
                    transition-colors
                    duration-300
                    ease-out

                    ${
                      isActive
                        ? 'bg-navy-900 text-white'
                        : 'bg-white text-ink'
                    }
                  `}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className={`
                        aspect-[16/10]
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        ease-out

                        ${
                          isActive
                            ? 'scale-105'
                            : 'scale-100'
                        }
                      `}
                    />

                    {i === 0 && (
                      <span
                        className="
                          absolute
                          left-4
                          top-4
                          rounded
                          bg-crl
                          px-2.5
                          py-1
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        Flagship service
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-[2vw] max-lg:p-7">
                    <span
                      className={`
                        font-display
                        text-[1vw]
                        font-bold
                        transition-[color,transform]
                        duration-300

                        max-lg:text-sm

                        ${
                          isActive
                            ? 'translate-x-1 text-crl-light'
                            : 'text-crl'
                        }
                      `}
                    >
                      {s.number}
                    </span>

                    <h3
                      className="
                        mt-[0.8571vw]
                        font-display
                        text-[1.7143vw]
                        font-bold
                        tracking-tight

                        max-lg:mt-3
                        max-lg:text-2xl
                      "
                    >
                      {s.title}
                    </h3>

                    <p
                      className={`
                        mt-[0.8571vw]
                        font-['Instrument_Sans',sans-serif]
                        text-[1.0714vw]
                        leading-[1.5]

                        max-lg:mt-3
                        max-lg:text-[15px]
                        max-lg:leading-relaxed

                        ${
                          isActive
                            ? 'text-white/70'
                            : 'text-body'
                        }
                      `}
                    >
                      {s.description}
                    </p>

                    <span
                      className="
                        mt-auto
                        flex
                        items-center
                        gap-2
                        pt-[2vw]
                        text-[1.0714vw]
                        font-semibold

                        max-lg:pt-8
                        max-lg:text-[15px]
                      "
                    >
                      Learn more

                      <ArrowUpRightIcon
                        className={`
                          h-4
                          w-4
                          transition-transform
                          duration-200
                          ease-out

                          ${
                            isActive
                              ? 'translate-x-1 -translate-y-0.5 text-crl-light'
                              : 'text-crl'
                          }
                        `}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
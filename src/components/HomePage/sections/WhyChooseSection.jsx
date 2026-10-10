import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';

import { commitments } from '../../../data/company';
import { images } from '../../../data/images';
import { easeOut } from '../../../utils/motion';
import { Reveal } from '../../ui/Reveal';

export function WhyChooseSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section
      aria-labelledby="why-heading"
      className="
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
          grid
          w-[91.2857vw]
          max-w-none
          gap-[4vw]
          lg:grid-cols-12
          lg:gap-[4.5714vw]

          max-lg:w-auto
          max-lg:max-w-none
          max-lg:gap-14
        "
      >
        {/* Left Content */}
        <div className="lg:col-span-5">
          <Reveal>
            <h2
              id="why-heading"
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
              Built Around Reliability.
            </h2>

            <p
              className="
                mt-[1.4286vw]
                max-w-[28vw]
                font-['Instrument_Sans',sans-serif]
                text-[1.2857vw]
                leading-[1.45]
                text-body

                max-lg:mt-5
                max-lg:max-w-md
                max-lg:text-lg
                max-lg:leading-relaxed
              "
            >
              Five commitments shape how CRL handles every consignment — from
              the first call to final delivery.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="
              mt-[2.8571vw]
              overflow-hidden
              rounded-xl

              max-lg:mt-10
            "
          >
            <img
              src={images.sorting}
              alt="CRL warehouse team scanning and sorting cartons on pallets"
              loading="lazy"
              className="
                aspect-[4/3]
                w-full
                object-cover
                transition-transform
                duration-300
                ease-out
                hover:scale-[1.03]
              "
            />
          </Reveal>
        </div>

        {/* Commitments */}
        <div
          className="
            lg:col-span-7
            lg:pt-[0.2857vw]
          "
        >
          <ul className="border-t border-ink">
            {commitments.map((c, i) => {
              const isOpen = open === i;
              const panelId = `commitment-${i}`;

              return (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 0.05}
                  y={20}
                  className="border-b border-line"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpen(isOpen ? -1 : i)
                      }
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-[1.7143vw]
                        py-[2vw]
                        text-left

                        max-lg:gap-6
                        max-lg:py-7
                      "
                    >
                      {/* Number */}
                      <span
                        className={`
                          font-display
                          text-[1vw]
                          font-bold
                          transition-colors
                          duration-200

                          max-lg:text-sm

                          ${
                            isOpen
                              ? 'text-crl'
                              : 'text-body'
                          }
                        `}
                      >
                        0{i + 1}
                      </span>

                      {/* Title */}
                      <span
                        className={`
                          flex-1
                          font-display
                          text-[2vw]
                          font-bold
                          tracking-tight
                          transition-colors
                          duration-200

                          max-lg:text-2xl
                          sm:max-lg:text-[28px]

                          ${
                            isOpen
                              ? 'text-ink'
                              : 'text-ink/70 group-hover:text-ink'
                          }
                        `}
                      >
                        {c.title}
                      </span>

                      {/* Plus */}
                      <span
                        className={`
                          flex
                          h-[2.8571vw]
                          w-[2.8571vw]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-[background-color,border-color,transform]
                          duration-200

                          max-lg:h-10
                          max-lg:w-10

                          ${
                            isOpen
                              ? 'rotate-45 border-crl bg-crl text-white'
                              : 'border-line text-ink'
                          }
                        `}
                      >
                        <PlusIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: easeOut,
                        }}
                        className="overflow-hidden"
                      >
                        <p
                          className="
                            pb-[2.2857vw]
                            pl-[3.7143vw]
                            pr-[4.5714vw]
                            font-['Instrument_Sans',sans-serif]
                            text-[1.2857vw]
                            leading-[1.5]
                            text-body

                            max-lg:pb-8
                            max-lg:pl-[52px]
                            max-lg:pr-16
                            max-lg:text-lg
                            max-lg:leading-relaxed
                          "
                        >
                          {c.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
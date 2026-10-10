import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const driveItems = [
  {
    title: 'Reliability',
    description:
      'Dependable movement of goods, shipment after shipment.',
  },
  {
    title: 'Accountability',
    description:
      'Ownership of every consignment from pickup to final delivery.',
  },
  {
    title: 'Transparency',
    description:
      'Clear, honest communication at every stage of the journey.',
  },
  {
    title: 'Safety',
    description:
      'Careful handling that protects customer goods in transit.',
  },
  {
    title: 'Efficiency',
    description:
      'Streamlined operations that keep freight moving on schedule.',
  },
  {
    title: 'Customer Focus',
    description:
      'Transportation shaped around each customer’s requirement.',
  },
];

export function WhatDrivesCRL() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-[#F5F6F8]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1480px]
          px-[70px]
          py-[70px]

          max-[1100px]:px-[50px]
          max-[1100px]:py-[60px]

          max-md:px-[24px]
          max-md:py-[50px]
        "
      >
        {/* HEADING */}
        <motion.h2
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-['Instrument_Sans',sans-serif]
            text-[42px]
            font-semibold
            leading-[1.1]
            tracking-[-1.2px]
            text-[#07111F]

            max-[1100px]:text-[38px]

            max-md:text-[32px]
            max-md:tracking-[-0.8px]
          "
        >
          What Drives CRL
        </motion.h2>

        {/* TOP LINE */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scaleX: 0,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scaleX: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-[34px]
            h-px
            w-full
            origin-left
            bg-[#8D949D]

            max-md:mt-[25px]
          "
        />

        {/* GRID */}
        <div
          className="
            mt-[0px]
            grid
            w-full
            grid-cols-3

            max-[900px]:grid-cols-2

            max-md:grid-cols-1
          "
        >
          {driveItems.map((item, index) => {
            const isLastColumn = index % 3 === 2;
            const isBottomRow = index >= 3;

            return (
              <motion.div
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  min-w-0

                  px-[0px]
                  pt-[40px]
                  pb-[35px]
                  pr-[45px]

                  border-b
                  border-[#E3E6EA]

                  ${
                    !isLastColumn
                      ? 'border-r border-[#E3E6EA]'
                      : ''
                  }

                  ${
                    isBottomRow
                      ? 'pt-[40px]'
                      : ''
                  }

                  max-[900px]:border-r-0
                  max-[900px]:pr-[30px]

                  max-md:px-0
                  max-md:pt-[32px]
                  max-md:pb-[30px]

                  transition-transform
                  duration-300
                  ease-out
                  hover:-translate-y-[4px]
                `}
              >
                {/* CONTENT */}
                <div className="relative">
                  {/* TITLE */}
                  <h3
                    className="
                      flex
                      items-baseline
                      gap-[7px]

                      font-['Instrument_Sans',sans-serif]
                      text-[32px]
                      font-semibold
                      leading-[1.15]
                      tracking-[-0.8px]
                      text-[#07111F]

                      max-[1100px]:text-[29px]

                      max-md:text-[27px]
                      max-md:tracking-[-0.5px]
                    "
                  >
                    {item.title}

                    {/* RED DOT */}
                    <span
                      className="
                        inline-block
                        h-[5px]
                        w-[5px]
                        shrink-0
                        translate-y-[-1px]
                        bg-[#D71920]

                        transition-transform
                        duration-300
                        group-hover:scale-[1.5]
                      "
                    />
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-[18px]
                      max-w-[330px]

                      font-['Instrument_Sans',sans-serif]
                      text-[16px]
                      font-normal
                      leading-[1.45]
                      text-[#667085]

                      max-[1100px]:text-[15px]

                      max-md:mt-[14px]
                      max-md:max-w-full
                      max-md:text-[16px]
                      max-md:leading-[1.5]
                    "
                  >
                    {item.description}
                  </p>

                  {/* HOVER LINE */}
                  <span
                    className="
                      absolute
                      bottom-[-36px]
                      left-0
                      h-[2px]
                      w-0
                      bg-[#D71920]

                      transition-all
                      duration-300
                      ease-out
                      group-hover:w-[45px]

                      max-md:bottom-[-31px]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

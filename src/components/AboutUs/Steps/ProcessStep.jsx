
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProcessStep({
  id,
  title,
  description,
  label,
  tags,
  image,
  imageAlt,
  imagePosition = 'left',
}) {
  const reduceMotion = useReducedMotion();

  const isImageLeft = imagePosition === 'left';

  const imageAnimation = isImageLeft
    ? {
        initial: { opacity: 0, x: -80 },
        whileInView: { opacity: 1, x: 0 },
      }
    : {
        initial: { opacity: 0, x: 80 },
        whileInView: { opacity: 1, x: 0 },
      };

  const contentAnimation = isImageLeft
    ? {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
      }
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
      };

  // Step 1 par hi main heading show hogi
  const isFirstStep = String(id) === '01';

  return (
    <section className="w-full bg-[#F5F6F8]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-[60px]
          py-[20px]
         
          max-md:px-[16px]
          max-md:py-[40px]
        "
      >
        {/* STEP 1 HEADING */}
        {isFirstStep && (
          <motion.h1
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-[38px]
              max-w-[650px]
              font-['Instrument_Sans',sans-serif]
              text-[44px]
              font-semibold
              leading-[1.08]
              tracking-[-1.4px]
              text-[#07111F]

              min-[1200px]:text-[46px]

              max-md:mb-[28px]
              max-md:text-[34px]
              max-md:leading-[1.1]
              max-md:tracking-[-0.8px]
            "
          >
            Transportation Solutions for
            <br />
            Different Business Needs.
          </motion.h1>
        )}

        <div
          className="
            grid
            w-full
            items-center
            gap-[52px]

            lg:grid-cols-2
            lg:gap-[55px]

            max-md:grid-cols-1
            max-md:gap-[32px]
          "
        >
          {/* IMAGE */}
          <motion.div
            initial={reduceMotion ? false : imageAnimation.initial}
            whileInView={
              reduceMotion ? undefined : imageAnimation.whileInView
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              w-full
              overflow-hidden
              rounded-[10px]

              ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}
              max-md:order-1
            `}
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="
                block
                aspect-[1.42/1]
                h-auto
                w-full
                object-cover
              "
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={reduceMotion ? false : contentAnimation.initial}
            whileInView={
              reduceMotion ? undefined : contentAnimation.whileInView
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              flex
              w-full
              flex-col

              ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}
              max-md:order-2
            `}
          >
            {/* NUMBER */}
            <span
              className="
                mb-[10px]
                font-['Instrument_Sans',sans-serif]
                text-[13px]
                font-medium
                leading-none
                text-[#D71920]
              "
            >
              {id}
            </span>

            {/* TITLE */}
            <h2
              className="
                max-w-[600px]
                font-['Instrument_Sans',sans-serif]
                text-[32px]
                font-semibold
                leading-[1.15]
                tracking-[-0.7px]
                text-[#07111F]

                min-[1200px]:text-[34px]

                max-md:text-[28px]
                max-md:leading-[1.15]
              "
            >
              {title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[20px]
                max-w-[570px]
                font-['Instrument_Sans',sans-serif]
                text-[18px]
                font-normal
                leading-[1.5]
                text-[#667085]

                max-md:mt-[16px]
                max-md:text-[17px]
                max-md:leading-[1.5]
              "
            >
              {description}
            </p>

            {/* LABEL */}
            <span
              className="
                mt-[28px]
                font-['Instrument_Sans',sans-serif]
                text-[14px]
                font-semibold
                leading-none
                text-[#07111F]

                max-md:mt-[24px]
              "
            >
              {label}
            </span>

            {/* TAGS */}
            <div
              className="
                mt-[14px]
                flex
                max-w-[600px]
                flex-wrap
                gap-[9px]
              "
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[#E1E5EA]
                    bg-[#F8F9FB]
                    px-[13px]
                    py-[7px]

                    font-['Instrument_Sans',sans-serif]
                    text-[13px]
                    font-normal
                    leading-none
                    text-[#1F2937]

                    max-md:px-[11px]
                    max-md:py-[7px]
                    max-md:text-[12px]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* VIEW SERVICE */}
            <Link
              to="/services"
              className="
                mt-[28px]
                flex
                w-fit
                items-center
                gap-[9px]
                border-0
                bg-transparent
                p-0

                font-['Instrument_Sans',sans-serif]
                text-[14px]
                font-semibold
                leading-none
                text-[#07111F]
                no-underline

                transition-opacity
                hover:opacity-70

                max-md:mt-[24px]
              "
            >
              View service

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="text-[#D71920]"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

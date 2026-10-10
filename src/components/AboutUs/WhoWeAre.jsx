
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Megaphone } from 'lucide-react';

import AboutImage from '../../assets/AboutUs/WhoWe.png';
import { aboutData } from '../../data/about';

export function WhoWeAre() {
  const { whoWeAre } = aboutData;

  return (
    <section className="w-full bg-white py-[5vw]">
      <div
        className="
          mx-auto
          flex
          w-[91.2857vw]
          items-start
          gap-[2.5714vw]

          max-lg:w-[92vw]
          max-lg:flex-col
          max-lg:items-center
          max-lg:gap-[40px]
        "
      >
       
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="
            mt-[2.6429vw]
            h-[37.1429vw]
            w-[46.3286vw]
            shrink-0
            overflow-hidden
            rounded-[1.4286vw]

            max-lg:mt-0
            max-lg:h-auto
            max-lg:w-full
            max-lg:rounded-[20px]
          "
        >
          <img
            src={AboutImage}
            alt="CRL Transport truck"
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            delay: 0.1,
          }}
          className="
            flex
           min-h-[44.1872vw]
            w-[42.2857vw]
            shrink-0
            flex-col
            gap-[2.6429vw]

            max-lg:min-h-0
            max-lg:w-full
            max-lg:max-w-[650px]
            max-lg:gap-[40px]
          "
        >
          
          <div className="flex flex-col">
            {/* Eyebrow */}
            <span
              className="
                mb-[1vw]
                font-['Instrument_Sans',sans-serif]
                text-[0.8143vw]
                font-normal
                leading-none
                text-[#D71920]

                max-lg:text-[20px]
              "
            >
              {whoWeAre.eyebrow}
            </span>

            {/* Heading */}
            <h2
              className="
                max-w-[30vw]
                whitespace-pre-line
                font-Instrument Sans
                text-[2.8571vw]
                font-semibold
                leading-[1.08]
                tracking-[-0.0714vw]
                text-[#07111F]
 mb-[0.1815vw]
                max-lg:max-w-[500px]
                max-lg:text-[40px]
                max-md:text-[34px]
              "
            >
              {whoWeAre.title}
            </h2>

            {/* Description */}
            <div
              className="
                mt-[0.8571vw]
                max-w-[40vw]
                font-['Instrument_Sans',sans-serif]
                text-[1.2857vw]
                font-normal
                leading-[1.45]
                tracking-[0]
                text-[#30343B]

                max-lg:max-w-[560px]
                max-lg:text-[18px]
              "
            >
              {whoWeAre.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index !== 0
                      ? 'mt-[1.2857vw]'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          
          <div
            className="
              grid
              w-full
              grid-cols-2
              gap-[1.4286vw]

              max-lg:gap-[20px]
              max-sm:grid-cols-1
            "
          >
            {whoWeAre.cards.map((card) => {
              const isDark = card.variant === 'dark';

              return (
                <motion.div
                  key={card.number}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative
                    min-h-[13.045vw]
                    w-full
                    overflow-hidden
                    rounded-[0.4686vw]
                    border-t-[2px]
                    border-[#D71920]
                    p-[1.1429vw]
                    shadow-[0px_0px_4.37px_0px_#00000040]

                    max-lg:min-h-[182px]
                    max-lg:rounded-[6.56px]
                    max-lg:p-[16px]

                    ${
                      isDark
                        ? 'bg-[#07111F]'
                        : 'bg-white'
                    }
                  `}
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`
                        font-manrope
                        text-[2.8571vw]
                        font-semibold
                        leading-none

                        max-lg:text-[40px]

                        ${
                          isDark
                            ? 'text-white/15'
                            : 'text-[#E8EBEF]'
                        }
                      `}
                    >
                      {card.number}
                    </span>

                    {isDark ? (
                      <Megaphone
                        size={18}
                        strokeWidth={1.5}
                        className="
                          mt-[0.3571vw]
                          shrink-0
                          text-[#D71920]

                          max-lg:mt-[5px]
                        "
                        aria-hidden="true"
                      />
                    ) : (
                      <Target
                        size={18}
                        strokeWidth={1.5}
                        className="
                          mt-[0.3571vw]
                          shrink-0
                          text-[#D71920]

                          max-lg:mt-[5px]
                        "
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`
                      mt-[0.5714vw]
                      font-['Instrument_Sans',sans-serif]
                      text-[1.2857vw]
                      font-normal
                      leading-[100%]
                      tracking-[0]

                      max-lg:mt-[8px]
                      max-lg:text-[18px]

                      ${
                        isDark
                          ? 'text-white'
                          : 'text-[#07111F]'
                      }
                    `}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`
                      mt-[0.8571vw]
                      font-['Instrument_Sans',sans-serif]
                      text-[1.1857vw]
                      font-normal
                      
                      leading-[100%]
                      tracking-[0]

                      max-lg:mt-[12px]
                      max-lg:text-[18px]

                      ${
                        isDark
                          ? 'text-white/65'
                          : 'text-[#5A6068]'
                      }
                    `}
                  >
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

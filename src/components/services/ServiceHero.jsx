import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import servicesHero from '../../assets/Services/serviceshero.png';
import { easeOut } from '../../utils/motion';

export function ServiceHero({
  serviceName = 'Part Truck Load',
}) {
  return (
    <section className="w-full bg-white pt-[1.4286vw] max-lg:pt-[20px]">
      <div
        className="
          relative
          mx-[1.4286vw]
          h-[37.7778vw]
          min-h-[520px]
          overflow-hidden
          rounded-[1.4286vw]
          max-lg:mx-[20px]
          max-lg:h-[500px]
          max-lg:min-h-0
          max-lg:rounded-[20px]
          max-md:h-[420px]
          max-md:rounded-[18px]
        "
      >
        <img
          src={servicesHero}
          alt="CRL Cargo Carriers services"
          width="1920"
          height="900"
          fetchpriority="high"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-full
            items-end
            px-[4.2857vw]
            pb-[10.7143vw]
            max-lg:px-[50px]
            max-lg:pb-[110px]
            max-md:px-[30px]
            max-md:pb-[80px]
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: easeOut,
            }}
          >
            <h1
              className="
                font-['Instrument_Sans',sans-serif]
                text-[4vw]
                font-medium
                leading-[1]
                tracking-[-0.035em]
                text-white
                max-lg:text-[52px]
                max-md:text-[42px]
              "
            >
              Services
            </h1>

            <div
              className="
                mt-[1.2857vw]
                flex
                items-center
                gap-[0.45vw]
                text-[1.1429vw]
                font-medium
                leading-none
                text-white
                max-lg:mt-[16px]
                max-lg:gap-[6px]
                max-lg:text-[16px]
                max-md:text-[14px]
              "
            >
              <span>CRL</span>

              <ChevronRightIcon
                aria-hidden="true"
                className="
                  h-[1.1429vw]
                  w-[1.1429vw]
                  shrink-0
                  max-lg:h-[16px]
                  max-lg:w-[16px]
                  max-md:h-[14px]
                  max-md:w-[14px]
                "
              />

              <span>Services</span>

              <ChevronRightIcon
                aria-hidden="true"
                className="
                  h-[1.1429vw]
                  w-[1.1429vw]
                  shrink-0
                  max-lg:h-[16px]
                  max-lg:w-[16px]
                  max-md:h-[14px]
                  max-md:w-[14px]
                "
              />

              <span>{serviceName}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
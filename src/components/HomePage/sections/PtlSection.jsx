// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

// import serviceImage from "../../../assets/service.jpg";
// import { ptlBenefits } from "../../../data/company";
// import { ptlFlow } from "../../../data/process";
// import { easeOut } from "../../../utils/motion";
// import { Reveal } from "../../ui/Reveal";

// export function PtlSection() {
//   return (
//     <section
//       id="ptl"
//       aria-labelledby="ptl-heading"
//       className="w-full bg-white py-[5vw]"
//     >
//       <div
//   className="
//     mx-auto
//     w-[91.2857vw]

//     max-lg:w-[92vw]
//     max-md:w-[calc(100%-40px)]
//   "
// >
//         {/* Main PTL Content */}
//         <div
//           className="
//             flex
//             w-full
//             items-start
//             gap-[2.5714vw]

//             max-lg:flex-col
//             max-lg:items-center
//             max-lg:gap-[40px]
//           "
//         >
         
//          {/* Image */}
// <div
//   className="
//     relative
//     w-[46.3286vw]
//     shrink-0

//     max-lg:w-full
//     max-lg:max-w-[650px]
//   "
// >
//   <div
//     className="
//       overflow-hidden
//       rounded-[1.4286vw]

//       max-lg:rounded-[20px]
//     "
//   >
//     <img
//       src={serviceImage}
//       alt="CRL team loading multiple cartons and parcels into a goods truck for Part Truck Load movement"
//       loading="lazy"
//       width="928"
//       height="1452"
//       className="
//         block
//         h-[45.1429vw]
//         w-full
//         object-cover

//         max-lg:h-auto
//         max-lg:aspect-[928/1452]
//       "
//     />
//   </div>

//   {/* Overlay note */}
//   <Reveal
//     delay={0.3}
//     className="
//       absolute
//       bottom-[-1.4286vw]
//       right-[-1.4286vw]
//       z-10

//       max-lg:bottom-[-20px]
//       max-lg:right-[-10px]
//     "
//   >
//     <div
//       className="
//         rounded-[0.5714vw]
//         bg-[#07111F]
//         px-[1.4286vw]
//         py-[1.1429vw]
//         shadow-[0_4px_12px_rgba(0,0,0,0.15)]

//         max-lg:rounded-[8px]
//         max-lg:px-[20px]
//         max-lg:py-[16px]
//       "
//     >
//       <p
//         className="
//           max-w-[13vw]
//           py-[0.6429vw]
//           font-['Instrument_Sans',sans-serif]
//           text-[1.1429vw]
        
//           leading-[1.35]
//           text-white

//           max-lg:max-w-[210px]
//           max-lg:text-[15px]
//         "
//       >
//         Pay only for the space your shipment uses.
//       </p>
//     </div>
//   </Reveal>
// </div>

//           {/* Content */}
//           <div
//             className="
//               flex
//               min-h-[37.1429vw]
//               w-[42.2857vw]
//               shrink-0
//               flex-col
//             py-[7.5714vw]
//               max-lg:min-h-0
//               max-lg:w-full
//               max-lg:max-w-[650px]
//             "
//           >
//             <Reveal>
//               {/* Eyebrow */}
//               <p
//                 className="
//                   mb-[1vw]
//                   font-['Instrument_Sans',sans-serif]
//                   text-[0.9143vw]
//                   font-normal
//                   leading-none
//                   text-[#D71920]

//                   max-lg:mb-[14px]
//                   max-lg:text-[23px]
//                 "
//               >
//                 Part truck load
//               </p>

//               {/* Heading */}
//               <h2
//                 id="ptl-heading"
//                 className="
//                   max-w-[35vw]
//                   font-['Instrument_Sans',sans-serif]
//                   text-[2.8571vw]
//                   font-semibold
//                   leading-[1.08]
//                   tracking-[-0.0714vw]
//                   text-[#07111F]

//                   max-lg:max-w-[500px]
//                   max-lg:text-[40px]
//                   max-md:text-[34px]
//                 "
//               >
//                 Smaller Loads.
//                 <br />
//                 Smarter Movement.
//               </h2>

//               {/* Description */}
//               <p
//                 className="
//                   mt-[1vw]
//                   max-w-[40vw]
//                   font-['Instrument_Sans',sans-serif]
//                   text-[1.2857vw]
//                   font-normal
//                   leading-[1.45]
//                   text-[#30343B]

//                   max-lg:mt-[16px]
//                   max-lg:max-w-[560px]
//                   max-lg:text-[18px]
//                 "
//               >
//                 Move small and medium consignments without paying for an entire
//                 vehicle. CRL’s Part Truck Load service provides a cost-effective
//                 transportation solution for multiple packages and business
//                 shipments.
//               </p>
//             </Reveal>

//             {/* Benefits */}
//             <ul
//               className="
//                 mt-[2vw]
//                 grid
//                 grid-cols-2
//                 gap-x-[2vw]
//                 gap-y-[1vw]

//                 max-lg:mt-[28px]
//                 max-lg:grid-cols-2
//                 max-lg:gap-x-[24px]
//                 max-lg:gap-y-[16px]

//                 max-sm:grid-cols-1
//               "
//             >
//               {[0, 1, 3, 2, 5, 4]
//                 .map((index) => ptlBenefits[index])
//                 .map((b, i) => (
//                   <Reveal
//                     as="li"
//                     key={b}
//                     delay={0.05 * i}
//                     y={16}
//                     className="
//                       flex
//                       items-start
//                       gap-[0.5714vw]
//                       font-['Instrument_Sans',sans-serif]
//                       text-[1.0714vw]
//                       font-normal
//                       leading-[1.35]
//                       text-[#30343B]

//                       max-lg:gap-[8px]
//                       max-lg:text-[17px]
//                     "
//                   >
//                     <span
//                       className="
//                         mt-0.5
//                         flex
//                         h-5
//                         w-5
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-crl/10
//                       "
//                     >
//                       <CheckIcon
//                         className="h-3 w-3 text-crl"
//                         strokeWidth={3}
//                         aria-hidden="true"
//                       />
//                     </span>

//                     {b}
//                   </Reveal>
//                 ))}
//             </ul>

//             {/* CTA */}
//             <Reveal
//   delay={0.2}
//   className="mt-[2vw] max-lg:mt-[28px]"
// >
//   <a
//   href="#services"
//   className="
//     inline-flex
//     items-center
//     gap-[10px]
//     rounded-full
//     bg-[#07111F]
//     px-[6px]
//     py-[6px]
//     pl-[18px]
//     font-['Instrument_Sans',sans-serif]
//     text-[1.0714vw]
//     font-semibold
//     text-white
//     shadow-[0_2px_5px_rgba(0,0,0,0.25)]

//     max-lg:text-[17px]

//     max-md:gap-[7px]
//     max-md:pl-[15px]
//     max-md:py-[5px]
//     max-md:text-[15px]
//   "
// >
//   Explore Our Services

//   <span
//     className="
//       flex
//       h-[30px]
//       w-[30px]
//       shrink-0
//       items-center
//       justify-center
//       rounded-full
//       bg-[#D71920]
//       text-white

//       max-md:h-[27px]
//       max-md:w-[27px]
//     "
//   >
//     <ArrowUpRightIcon
//       className="h-[16px] w-[16px] max-md:h-[14px] max-md:w-[14px]"
//       strokeWidth={2}
//       aria-hidden="true"
//     />
//   </span>
// </a>
// </Reveal>
//           </div>
//         </div>

//         {/* PTL Process */}
//         <div
//           className="
//             mt-[6vw]

//             max-lg:mt-[60px]
//           "
//         >
//           <p
//             className="
//               mb-[2vw]
//               font-display
//               text-[1vw]
//               font-bold
//               text-ink

//               max-lg:mb-[28px]
//               max-lg:text-[16px]
//             "
//           >
//             How a PTL shipment moves
//           </p>

//           {/* Desktop horizontal flow */}
//           <ol
//             className="
//               relative
//               hidden
//               grid-cols-6
//               md:grid
              
//             "
//             aria-label="PTL process"
//           >
//             <span
//               className="
//                 absolute
//                 left-[8.33%]
//                 right-[8.33%]
//                 top-[7px]
//                 h-px
//                 bg-line
//               "
//               aria-hidden="true"
//             />

//             <motion.span
//               className="
//                 absolute
//                 left-[8.33%]
//                 right-[8.33%]
//                 top-[7px]
//                 h-px
//                 origin-left
//                 bg-crl
//               "
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true, amount: 0.6 }}
//               transition={{
//                 duration: 1.4,
//                 ease: [0.65, 0, 0.35, 1],
//               }}
//               aria-hidden="true"
//             />

//             {ptlFlow.map((step, i) => (
//               <motion.li
//                 key={step}
//                 initial={{ opacity: 0, y: 12 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.6 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: 0.2 + i * 0.2,
//                   ease: easeOut,
//                 }}
//                 className="
//                   relative
//                   flex
//                   flex-col
//                   items-center
//                   text-center
//                 "
//               >
//                 <span
//                   className="
//                     relative
//                     z-10
//                     h-[15px]
//                     w-[15px]
//                     rounded-full
//                     border-[3px]
//                     border-white
//                     bg-crl
//                     ring-1
//                     ring-crl
//                   "
//                 />

//                 <span
//                   className="
//                     mt-[1vw]
//                     font-display
//                     text-[1.0714vw]
//                     font-bold
//                     text-ink
//                   "
//                 >
//                   {step}
//                 </span>
//               </motion.li>
//             ))}
//           </ol>

//           {/* Mobile vertical flow */}
//           <ol
//             className="
//               relative
//               grid
//               gap-[20px]
//               border-l
//               border-crl/40
//               pl-[24px]

//               md:hidden
//             "
//             aria-label="PTL process"
//           >
//             {ptlFlow.map((step) => (
//               <li
//                 key={step}
//                 className="
//                   relative
//                   font-display
//                   text-[15px]
//                   font-bold
//                   text-ink
//                 "
//               >
//                 <span
//                   className="
//                     absolute
//                     -left-[31px]
//                     top-1
//                     h-[11px]
//                     w-[11px]
//                     rounded-full
//                     bg-crl
//                     ring-4
//                     ring-white
//                   "
//                 />

//                 {step}
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

import serviceImage from "../../../assets/service.jpg";
import { ptlBenefits } from "../../../data/company";
import { ptlFlow } from "../../../data/process";
import { easeOut } from "../../../utils/motion";
import { Reveal } from "../../ui/Reveal";

export function PtlSection() {
  return (
    <section
      id="ptl"
      aria-labelledby="ptl-heading"
      className="w-full bg-white py-[5vw]"
    >
      <div
        className="
          mx-auto
          w-[91.2857vw]

          max-lg:w-[92vw]
          max-md:w-[calc(100%-40px)]
        "
      >
        {/* Main PTL Content */}
        <div
          className="
            flex
            w-full
            items-start
            gap-[2.5714vw]

            max-lg:flex-col
            max-lg:items-center
            max-lg:gap-[40px]
          "
        >
          {/* Image */}
          <div
            className="
              relative
              w-[46.3286vw]
              shrink-0

              max-lg:w-full
              max-lg:max-w-[650px]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[1.4286vw]

                max-lg:rounded-[20px]
              "
            >
              <img
                src={serviceImage}
                alt="CRL team loading multiple cartons and parcels into a goods truck for Part Truck Load movement"
                loading="lazy"
                width="928"
                height="1452"
                className="
                  block
                  h-[45.1429vw]
                  w-full
                  object-cover

                  max-lg:h-auto
                  max-lg:aspect-[928/1452]
                "
              />
            </div>

            {/* Overlay note */}
            <Reveal
              delay={0.3}
              className="
                absolute
                bottom-[-1.4286vw]
                right-[-1.4286vw]
                z-10

                max-lg:bottom-[-20px]
                max-lg:right-[-10px]

                max-md:bottom-[-16px]
                max-md:right-0
              "
            >
              <div
                className="
                  rounded-[0.5714vw]
                  bg-[#07111F]
                  px-[1.4286vw]
                  py-[1.1429vw]
                  shadow-[0_4px_12px_rgba(0,0,0,0.15)]

                  max-lg:rounded-[8px]
                  max-lg:px-[20px]
                  max-lg:py-[16px]
                "
              >
                <p
                  className="
                    max-w-[13vw]
                    py-[0.6429vw]
                    font-['Instrument_Sans',sans-serif]
                    text-[1.1429vw]
                    font-semibold
                    leading-[1.35]
                    text-white

                    max-lg:max-w-[210px]
                    max-lg:text-[15px]

                    max-md:max-w-[190px]
                    max-md:py-0
                    max-md:text-[14px]
                  "
                >
                  Pay only for the space your shipment uses.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div
            className="
              flex
              min-h-[37.1429vw]
              w-[42.2857vw]
              shrink-0
              flex-col
              py-[7.5714vw]

              max-lg:min-h-0
              max-lg:w-full
              max-lg:max-w-[650px]

              max-md:px-[4px]
              max-md:py-[40px]
            "
          >
            <Reveal>
              {/* Eyebrow */}
              <p
                className="
                  mb-[1vw]
                  font-['Instrument_Sans',sans-serif]
                  text-[0.9143vw]
                  font-normal
                  leading-none
                  text-[#D71920]

                  max-lg:mb-[14px]
                  max-lg:text-[23px]
                "
              >
                Part truck load
              </p>

              {/* Heading */}
              <h2
                id="ptl-heading"
                className="
                  max-w-[35vw]
                  font-['Instrument_Sans',sans-serif]
                  text-[2.8571vw]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.0714vw]
                  text-[#07111F]

                  max-lg:max-w-[500px]
                  max-lg:text-[40px]
                  max-md:text-[32px]
                "
              >
                Smaller Loads.
                <br />
                Smarter Movement.
              </h2>

              {/* Description */}
              <p
                className="
                  mt-[1vw]
                  max-w-[40vw]
                  font-['Instrument_Sans',sans-serif]
                  text-[1.2857vw]
                  font-normal
                  leading-[1.45]
                  text-[#30343B]

                  max-lg:mt-[16px]
                  max-lg:max-w-[560px]
                  max-lg:text-[18px]

                  max-md:max-w-full
                "
              >
                Move small and medium consignments without paying for an entire
                vehicle. CRL’s Part Truck Load service provides a cost-effective
                transportation solution for multiple packages and business
                shipments.
              </p>
            </Reveal>

            {/* Benefits */}
            <ul
              className="
                mt-[2vw]
                grid
                grid-cols-2
                gap-x-[2vw]
                gap-y-[1vw]

                max-lg:mt-[28px]
                max-lg:grid-cols-2
                max-lg:gap-x-[24px]
                max-lg:gap-y-[16px]

                max-sm:grid-cols-1
              "
            >
              {[0, 1, 3, 2, 5, 4]
                .map((index) => ptlBenefits[index])
                .map((b, i) => (
                  <Reveal
                    as="li"
                    key={b}
                    delay={0.05 * i}
                    y={16}
                    className="
                      flex
                      items-start
                      gap-[0.5714vw]
                      font-['Instrument_Sans',sans-serif]
                      text-[1.0714vw]
                      font-normal
                      leading-[1.35]
                      text-[#30343B]

                      max-lg:gap-[8px]
                      max-lg:text-[17px]
                    "
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-crl/10
                      "
                    >
                      <CheckIcon
                        className="h-3 w-3 text-crl"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>

                    {b}
                  </Reveal>
                ))}
            </ul>

            {/* CTA */}
            <Reveal
              delay={0.2}
              className="mt-[2vw] max-lg:mt-[28px]"
            >
              <a
                href="#services"
                className="
                  inline-flex
                  items-center
                  gap-[10px]
                  rounded-full
                  bg-[#07111F]
                  px-[6px]
                  py-[6px]
                  pl-[18px]
                  font-['Instrument_Sans',sans-serif]
                  text-[1.0714vw]
                  font-semibold
                  text-white
                  shadow-[0_2px_5px_rgba(0,0,0,0.25)]

                  max-lg:text-[17px]

                  max-md:gap-[6px]
                  max-md:pl-[14px]
                  max-md:pr-[5px]
                  max-md:py-[5px]
                  max-md:text-[15px]
                "
              >
                Explore Our Services

                <span
                  className="
                    flex
                    h-[30px]
                    w-[30px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D71920]
                    text-white

                    max-md:h-[26px]
                    max-md:w-[26px]
                  "
                >
                  <ArrowUpRightIcon
                    className="
                      h-[16px]
                      w-[16px]

                      max-md:h-[14px]
                      max-md:w-[14px]
                    "
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* PTL Process */}
      {/* PTL Process */}
<div
  className="
    mt-[6vw]
    w-full

    max-lg:mt-[60px]

    max-md:mt-[50px]
    max-md:px-[4px]
  "
>
  <p
    className="
      mb-[2vw]
      font-display
      text-[1vw]
      font-bold
      text-ink

      max-lg:mb-[28px]
      max-lg:text-[16px]

      max-md:mb-[24px]
      max-md:text-[16px]
    "
  >
    How a PTL shipment moves
  </p>

  {/* Desktop horizontal flow */}
  <ol
    className="
      relative
      hidden
      grid-cols-6
      md:grid
    "
    aria-label="PTL process"
  >
    <span
      className="
        absolute
        left-[8.33%]
        right-[8.33%]
        top-[7px]
        h-px
        bg-line
      "
      aria-hidden="true"
    />

    <motion.span
      className="
        absolute
        left-[8.33%]
        right-[8.33%]
        top-[7px]
        h-px
        origin-left
        bg-crl
      "
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 1.4,
        ease: [0.65, 0, 0.35, 1],
      }}
      aria-hidden="true"
    />

    {ptlFlow.map((step, i) => (
      <motion.li
        key={step}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.4,
          delay: 0.2 + i * 0.2,
          ease: easeOut,
        }}
        className="
          relative
          flex
          flex-col
          items-center
          text-center
        "
      >
        <span
          className="
            relative
            z-10
            h-[15px]
            w-[15px]
            rounded-full
            border-[3px]
            border-white
            bg-crl
            ring-1
            ring-crl
          "
        />

        <span
          className="
            mt-[1vw]
            font-display
            text-[1.0714vw]
            font-bold
            text-ink
          "
        >
          {step}
        </span>
      </motion.li>
    ))}
  </ol>

  {/* Mobile vertical flow */}
  <ol
    className="
      relative
      grid
      w-full
      gap-[20px]
      border-l-2
      border-crl/30
      pl-[24px]

      md:hidden
    "
    aria-label="PTL process"
  >
    {ptlFlow.map((step) => (
      <li
        key={step}
        className="
          relative
          font-display
          text-[15px]
          font-bold
          leading-[1.4]
          text-ink
        "
      >
        <span
          className="
            absolute
            -left-[30px]
            top-[3px]
            h-[11px]
            w-[11px]
            rounded-full
            bg-crl
            ring-4
            ring-white
          "
        />

        {step}
      </li>
    ))}
  </ol>
</div>
      </div>
    </section>
  );
}
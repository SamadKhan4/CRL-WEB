// import React from 'react';
// import { CheckIcon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Reveal } from '../ui/Reveal';

// import serviceImage from '../../assets/service.jpg';

// const features = [
// 'Small consignments',
// 'Medium consignments',
// 'Multiple packages & palletized goods',
// 'Cost-conscious transportation',
// ];

// export function ServiceOverview() {
// return (
// <section
//    id="ptl"
//    className="
//      min-w-0
//      w-full
//      pb-[3vw]
//      font-['Instrument_Sans',sans-serif]
//      text-navy-900
//      max-lg:pb-[40px]
//    "
//  >
// {/* Main image */}
// <Reveal>
// <div
//        className="
//          w-full
//          overflow-hidden
//          rounded-[1.4286vw]
//          max-lg:rounded-[20px]
//        "
//      >
// <img
//          src={serviceImage}
//          alt="Warehouse team handling and loading shipments"
//          loading="lazy"
//          className="
//            block
//            aspect-[928/416]
//            w-full
//            object-cover
//            max-md:aspect-[4/3]
//          "
//        />
// </div>
// </Reveal>

//   {/* Overview content */}
//   <div className="mt-[3.4286vw] max-lg:mt-[32px]">
//     <Reveal>
//       <p
//         className="
//           mb-[1.2857vw]
//           text-[0.8571vw]
//           font-medium
//           leading-none
//           text-crl
//           max-lg:mb-[14px]
//           max-lg:text-[12px]
//         "
//       >
//         Flexible Transportation
//       </p>

//       <h2
//         className="
//           text-[2.8571vw]
//           font-semibold
//           leading-[1.14]
//           tracking-[-0.035em]
//           text-navy-900
//           max-lg:text-[30px]
//           max-md:text-[26px]
//         "
//       >
//         What is PTL? — Flexible Transportation for Smaller Shipments
//       </h2>
//     </Reveal>

//     <div className="mt-[1.2857vw] border-t border-[#D4D7DC] max-lg:mt-[18px]" />

//     <Reveal>
//       <p
//         className="
//           mt-[1.4286vw]
//           text-[1vw]
//           leading-[1.55]
//           text-[#596579]
//           max-lg:mt-[18px]
//           max-lg:text-[14px]
//         "
//       >
//         Part Truck Load transportation allows businesses to move consignments
//         that do not need the full capacity of a truck. Instead of bearing the
//         cost of an underutilized vehicle, CRL consolidates your goods with
//         other shipments moving in the same commercial corridor.
//       </p>

//       <p
//         className="
//           mt-[1.2857vw]
//           text-[0.9286vw]
//           leading-[1.55]
//           text-[#596579]
//           max-lg:mt-[16px]
//           max-lg:text-[13px]
//         "
//       >
//         CRL's PTL service is engineered specifically to help manufacturers,
//         distributors, and retailers scale their shipping demands sustainably:
//       </p>
//     </Reveal>

//     {/* Feature cards */}
//     <div
//       className="
//         mt-[0.8571vw]
//         grid
//         grid-cols-2
//         gap-[0.8571vw]
//         max-lg:mt-[12px]
//         max-lg:gap-[10px]
//         max-md:grid-cols-1
//       "
//     >
//       {features.map((feature, index) => (
//         <motion.div
//           key={feature}
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.35, delay: index * 0.06 }}
//           className="
//             flex
//             min-h-[3.2143vw]
//             items-center
//             gap-[0.7143vw]
//             rounded-[0.7857vw]
//             border
//             border-[#E0E5EC]
//             bg-white
//             px-[0.8571vw]
//             py-[0.5714vw]
//             transition-colors
//             duration-200
//             hover:bg-[#FAFAFB]
//             max-lg:min-h-[44px]
//             max-lg:gap-[10px]
//             max-lg:rounded-[10px]
//             max-lg:px-[12px]
//             max-lg:py-[10px]
//           "
//         >
//           <span
//             className="
//               flex
//               h-[1.4286vw]
//               w-[1.4286vw]
//               shrink-0
//               items-center
//               justify-center
//               rounded-[0.3571vw]
//               bg-[#FCE8E9]
//               text-crl
//               max-lg:h-[20px]
//               max-lg:w-[20px]
//               max-lg:rounded-[5px]
//             "
//           >
//             <CheckIcon
//               aria-hidden="true"
//               className="h-[0.8571vw] w-[0.8571vw] max-lg:h-[12px] max-lg:w-[12px]"
//             />
//           </span>

//           <span
//             className="
//               text-[0.8571vw]
//               font-medium
//               leading-snug
//               text-[#263247]
//               max-lg:text-[12px]
//             "
//           >
//             {feature}
//           </span>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

// );
// }


import React from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';

import serviceImage from '../../assets/service.jpg';

const defaultFeatures = [
  'Small consignments',
  'Medium consignments',
  'Multiple packages & palletized goods',
  'Cost-conscious transportation',
];

export function ServiceOverview({
  id = 'ptl',
  image = serviceImage,
  imageAlt = 'Warehouse team handling and loading shipments',
  kicker = 'Flexible Transportation',
  heading = 'What is PTL? — Flexible Transportation for Smaller Shipments',
  description = 'Part Truck Load transportation allows businesses to move consignments that do not need the full capacity of a truck. Instead of bearing the cost of an underutilized vehicle, CRL consolidates your goods with other shipments moving in the same commercial corridor.',
  supportingText = "CRL's PTL service is engineered specifically to help manufacturers, distributors, and retailers scale their shipping demands sustainably:",
  features = defaultFeatures,
}) {
  return (
    <section
      id={id}
      className="
        min-w-0 w-full pb-[3vw]
        font-['Instrument_Sans',sans-serif]
        text-navy-900
        max-lg:pb-[40px]
      "
    >
      <Reveal>
        <div className="w-full overflow-hidden rounded-[1.4286vw] max-lg:rounded-[20px]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="
              block aspect-[928/416] w-full object-cover
              max-md:aspect-[4/3]
            "
          />
        </div>
      </Reveal>

      <div className="mt-[3.4286vw] max-lg:mt-[32px]">
        <Reveal>
          <p
            className="
              mb-[1.2857vw] text-[0.8571vw] font-medium
              leading-none text-crl
              max-lg:mb-[14px] max-lg:text-[12px]
            "
          >
            {kicker}
          </p>

          <h2
            className="
              text-[2.8571vw] font-semibold leading-[1.14]
              tracking-[-0.035em] text-navy-900
              max-lg:text-[30px] max-md:text-[26px]
            "
          >
            {heading}
          </h2>
        </Reveal>

        <div className="mt-[1.2857vw] border-t border-[#D4D7DC] max-lg:mt-[18px]" />

        <Reveal>
          <p
            className="
              mt-[1.4286vw] text-[1vw] leading-[1.55]
              text-[#596579]
              max-lg:mt-[18px] max-lg:text-[14px]
            "
          >
            {description}
          </p>

          {supportingText && (
            <p
              className="
                mt-[1.2857vw] text-[0.9286vw] leading-[1.55]
                text-[#596579]
                max-lg:mt-[16px] max-lg:text-[13px]
              "
            >
              {supportingText}
            </p>
          )}
        </Reveal>

        {features.length > 0 && (
          <div
            className="
              mt-[0.8571vw] grid grid-cols-2 gap-[0.8571vw]
              max-lg:mt-[12px] max-lg:gap-[10px]
              max-md:grid-cols-1
            "
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="
                  flex min-h-[3.2143vw] items-center
                  gap-[0.7143vw] rounded-[0.7857vw]
                  border border-[#E0E5EC] bg-white
                  px-[0.8571vw] py-[0.5714vw]
                  transition-colors duration-200 hover:bg-[#FAFAFB]
                  max-lg:min-h-[44px] max-lg:gap-[10px]
                  max-lg:rounded-[10px] max-lg:px-[12px]
                  max-lg:py-[10px]
                "
              >
                <span
                  className="
                    flex h-[1.4286vw] w-[1.4286vw] shrink-0
                    items-center justify-center rounded-[0.3571vw]
                    bg-[#FCE8E9] text-crl
                    max-lg:h-[20px] max-lg:w-[20px]
                    max-lg:rounded-[5px]
                  "
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="h-[0.8571vw] w-[0.8571vw] max-lg:h-[12px] max-lg:w-[12px]"
                  />
                </span>

                <span
                  className="
                    text-[0.8571vw] font-medium leading-snug
                    text-[#263247] max-lg:text-[12px]
                  "
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

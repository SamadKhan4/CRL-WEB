// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Plus, X } from 'lucide-react';

// import {
//   commitmentSection,
//   commitmentItems,
// } from '../../data/about';

// export function CommitmentSection() {
//   const [openItem, setOpenItem] = useState(1);

//   const handleToggle = (id) => {
//     setOpenItem((current) => (current === id ? null : id));
//   };

//   return (
//     <section className="w-full bg-[#F5F6F8] px-[20px] py-[70px]">
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-[1500px]
//           overflow-hidden
//           rounded-[20px]
//           bg-white
//           px-[48px]
//           py-[70px]
//         "
//       >
//         <div
//           className="
//             grid
//             grid-cols-[486px_minmax(0,1fr)]
//             gap-[76px]
//             items-start

//             max-[1100px]:grid-cols-[1fr]
//             max-[1100px]:gap-[50px]

//             max-md:px-[20px]
//             max-md:py-[45px]
//           "
//         >
//           {/* LEFT SIDE */}
//           <div className="flex w-full flex-col">
//             <h2
//               className="
//                 max-w-[450px]
//                 font-['Instrument_Sans',sans-serif]
//                 text-[40px]
//                 font-semibold
//                 leading-[1.08]
//                 tracking-[-1.2px]
//                 text-[#07111F]

//                 max-md:text-[34px]
//               "
//             >
//               {commitmentSection.title}
//             </h2>

//             <p
//               className="
//                 mt-[20px]
//                 max-w-[430px]
//                 font-['Instrument_Sans',sans-serif]
//                 text-[16px]
//                 font-normal
//                 leading-[1.35]
//                 text-[#07111F]
//               "
//             >
//               {commitmentSection.description}
//             </p>

//             <div
//               className="
//                 mt-[28px]
//                 h-[364.5px]
//                 w-[486px]
//                 overflow-hidden
//                 rounded-[10px]

//                 max-w-full
//                 max-md:h-auto
//                 max-md:aspect-[486/364.5]
//               "
//             >
//               <img
//                 src={commitmentSection.image}
//                 alt="CRL transportation operations"
//                 loading="lazy"
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                 "
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="w-full">
//             <div className="border-t border-[#D9DDE3]">
//               {commitmentItems.map((item) => {
//                 const isOpen = openItem === item.id;

//                 return (
//                   <div
//                     key={item.id}
//                     className="border-b border-[#E5E7EB]"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => handleToggle(item.id)}
//                       aria-expanded={isOpen}
//                       className="
//                         flex
//                         w-full
//                         items-center
//                         gap-[20px]
//                         py-[30px]
//                         text-left
//                         outline-none
//                       "
//                     >
//                       {/* NUMBER */}
//                       <span
//                         className={`
//                           w-[14px]
//                           shrink-0
//                           font-['Instrument_Sans',sans-serif]
//                           text-[12px]
//                           font-semibold
//                           ${
//                             isOpen
//                               ? 'text-[#D71920]'
//                               : 'text-[#667085]'
//                           }
//                         `}
//                       >
//                         {String(item.id).padStart(2, '0')}
//                       </span>

//                       {/* TITLE */}
//                       <span
//                         className={`
//                           flex-1
//                           font-['Instrument_Sans',sans-serif]
//                           text-[24px]
//                           font-semibold
//                           leading-[1.2]
//                           ${
//                             isOpen
//                               ? 'text-[#07111F]'
//                               : 'text-[#5E6572]'
//                           }

//                           max-md:text-[20px]
//                         `}
//                       >
//                         {item.title}
//                       </span>

//                       {/* ICON */}
//                       <span
//                         className={`
//                           flex
//                           h-[40px]
//                           w-[40px]
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           ${
//                             isOpen
//                               ? 'border-[#D71920] bg-[#D71920] text-white'
//                               : 'border-[#E1E5EA] bg-white text-[#07111F]'
//                           }
//                         `}
//                       >
//                         {isOpen ? (
//                           <X
//                             size={18}
//                             strokeWidth={2}
//                             aria-hidden="true"
//                           />
//                         ) : (
//                           <Plus
//                             size={18}
//                             strokeWidth={2}
//                             aria-hidden="true"
//                           />
//                         )}
//                       </span>
//                     </button>

//                     {/* CONTENT */}
//                     <AnimatePresence initial={false}>
//                       {isOpen && (
//                         <motion.div
//                           initial={{
//                             height: 0,
//                             opacity: 0,
//                           }}
//                           animate={{
//                             height: 'auto',
//                             opacity: 1,
//                           }}
//                           exit={{
//                             height: 0,
//                             opacity: 0,
//                           }}
//                           transition={{
//                             duration: 0.3,
//                             ease: [0.22, 1, 0.36, 1],
//                           }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pb-[25px] pl-[44px] pr-[60px]">
//                             <p
//                               className="
//                                 font-['Instrument_Sans',sans-serif]
//                                 text-[16px]
//                                 font-normal
//                                 leading-[1.4]
//                                 text-[#667085]
//                               "
//                             >
//                               {item.description}
//                             </p>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

import {
  commitmentSection,
  commitmentItems,
} from '../../data/about';

export function CommitmentSection() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F5F6F8] px-[20px] py-[70px]">
      {/* MAIN CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          overflow-hidden
          rounded-[20px]
          bg-white

          px-[5vw]
          py-[70px]

          max-[900px]:px-[35px]
          max-[900px]:py-[55px]

          max-[600px]:rounded-[16px]
          max-[600px]:px-[20px]
          max-[600px]:py-[40px]
        "
      >
        {/* MAIN GRID */}
        <div
          className="
            grid
            w-full
            grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            items-start
            gap-[5vw]

            max-[1100px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            max-[900px]:grid-cols-1
            max-[900px]:gap-[55px]
          "
        >
       
          <div className="flex w-full flex-col pt-[8px]">
            {/* TITLE */}
            <h2
              className="
                max-w-[500px]
                font-['Instrument_Sans',sans-serif]
                text-[clamp(34px,3vw,46px)]
                font-semibold
                leading-[1.05]
                tracking-[-1.4px]
                text-[#000000]
              "
            >
              {commitmentSection.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[22px]
                max-w-[500px]
                font-['Instrument_Sans',sans-serif]
                text-[clamp(16px,1.25vw,18px)]
                font-normal
                leading-[1.45]
                text-[#07111F]
              "
            >
              {commitmentSection.description}
            </p>

            {/* IMAGE */}
            <div
              className="
                mt-[32px]
                aspect-[486/364.5]
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[10px]

                max-[900px]:max-w-none

                max-[600px]:mt-[28px]
                max-[600px]:rounded-[8px]
              "
            >
              <img
                src={commitmentSection.image}
                alt="CRL transportation operations"
                loading="lazy"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

         
          <div className="w-full min-w-0">
            <div className="border-t border-[#D9DDE3]">
              {commitmentItems.map((item) => {
                const isOpen = openItem === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-[#E5E7EB]"
                  >
                 
                    <button
                      type="button"
                      onClick={() => handleToggle(item.id)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-center
                        gap-[clamp(14px,1.5vw,22px)]
                        py-[clamp(22px,2.2vw,30px)]
                        text-left
                        outline-none
                      "
                    >
                      {/* NUMBER */}
                      <span
                        className={`
                          w-[20px]
                          shrink-0
                          font-['Instrument_Sans',sans-serif]
                          text-[clamp(12px,0.9vw,14px)]
                          font-semibold
                          leading-none

                          ${
                            isOpen
                              ? 'text-[#D71920]'
                              : 'text-[#667085]'
                          }
                        `}
                      >
                        {String(item.id).padStart(2, '0')}
                      </span>

                      {/* TITLE */}
                      <span
                        className={`
                          flex-1
                          font-['Instrument_Sans',sans-serif]
                          text-[clamp(22px,1.8vw,26px)]
                          font-semibold
                          leading-[1.15]

                          ${
                            isOpen
                              ? 'text-[#07111F]'
                              : 'text-[#5E6572]'
                          }
                        `}
                      >
                        {item.title}
                      </span>

                      {/* PLUS / CROSS */}
                      <span
                        className={`
                          flex
                          h-[clamp(38px,3vw,44px)]
                          w-[clamp(38px,3vw,44px)]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border

                          ${
                            isOpen
                              ? 'border-[#D71920] bg-[#D71920] text-white'
                              : 'border-[#E1E5EA] bg-white text-[#07111F]'
                          }
                        `}
                      >
                        {isOpen ? (
                          <X
                            size={20}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        ) : (
                          <Plus
                            size={20}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </button>

                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
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
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className="
                              pb-[30px]
                              pl-[42px]
                              pr-[60px]

                              max-[600px]:pb-[24px]
                              max-[600px]:pl-[34px]
                              max-[600px]:pr-[10px]
                            "
                          >
                            <p
                              className="
                                font-['Instrument_Sans',sans-serif]
                                text-[clamp(15px,1.15vw,17px)]
                                font-normal
                                leading-[1.5]
                                text-[#667085]
                              "
                            >
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

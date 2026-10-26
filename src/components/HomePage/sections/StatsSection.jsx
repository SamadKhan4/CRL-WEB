// // import React from 'react';
// // import { placeholderStats } from '../../../data/company';
// // import { CountUp } from '../../ui/CountUp';


// // export function StatsSection({ showPlaceholders }) {
// //   return (
// //     <section aria-label="CRL in numbers" className="stats-section">
// //       <div
// //         className={
// //           'stats-section__card md:!max-w-none md:!py-[2.3vw] md:!rounded-[1.3vw]' +
// //           (showPlaceholders ? '' : ' stats-section__card--compact')
// //         }
// //       >
// //         <dl className="stats-section__highlights md:!gap-[1.75vw]">
// //           <div className="stats-section__stat md:!gap-[1vw]">
// //             <dt className="stats-section__label md:!text-[length:0.9vw]">
// //               Next-Day Service Locations
// //             </dt>

// //             <dd className="stats-section__value md:!text-[length:4.4vw]">
// //               <CountUp value={24} />
// //               <span
// //                 className=""
// //                 aria-hidden="true"
// //               >
// //                 hr
// //               </span>
// //             </dd>
// //           </div>

// //           <div className="stats-section__stat stats-section__stat--operations md:!gap-[1vw] md:!pl-[1.75vw]">
// //             <dt className="stats-section__label md:!text-[length:0.9vw]">
// //               Operations
// //             </dt>

// //             <dd
// //               className="stats-section__value md:!text-[length:4.4vw]"
// //               aria-label="24 hours a day, 7 days a week"
// //             >
// //               24{' '}
// //               <span
// //                 className="stats-section__multiply"
// //                 aria-hidden="true"
// //               >
// //                 x
// //               </span>{' '}
// //               7
// //             </dd>
// //           </div>
// //         </dl>

// //         {showPlaceholders && (
// //           <div className="stats-section__placeholders md:!px-[1.45vw] md:!py-[1.6vw] md:!rounded-[0.5vw]">
// //             <dl className="stats-section__placeholder-grid md:!gap-[1vw]">
// //               {placeholderStats.map((stat) => (
// //                 <div key={stat.label}>
// //                   <dt className="stats-section__placeholder-label md:!text-[length:0.8vw]">
// //                     {stat.label}
// //                   </dt>

// //                   <dd className="stats-section__placeholder-value md:!text-[length:1.9vw]">
// //                     {stat.display}
// //                   </dd>
// //                 </div>
// //               ))}
// //             </dl>

          
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }



// import React from 'react';
// import { placeholderStats } from '../../../data/company';
// import { CountUp } from '../../ui/CountUp';

// export function StatsSection({ showPlaceholders }) {
//   return (
//     <section
//       aria-label="CRL in numbers"
//       className="w-full bg-[#F5F6F8] px-3 py-5"
//     >
//       <div
//         className={`stats-section__card ${
//           showPlaceholders ? '' : 'stats-section__card--compact'
//         }`}
//       >
//         <dl className="stats-section__highlights">
//           <div className="stats-section__stat">
//             <dt className="stats-section__label">
//               Next-Day Service Locations
//             </dt>

//             <dd className="stats-section__value">
//               <CountUp value={24} />
//               <span aria-hidden="true">hr</span>
//             </dd>
//           </div>

//           <div className="stats-section__stat stats-section__stat--operations">
//             <dt className="stats-section__label">
//               Operations
//             </dt>

//             <dd
//               className="stats-section__value"
//               aria-label="24 hours a day, 7 days a week"
//             >
//               24{' '}
//               <span
//                 className="stats-section__multiply"
//                 aria-hidden="true"
//               >
//                 x
//               </span>{' '}
//               7
//             </dd>
//           </div>
//         </dl>

//         {showPlaceholders && (
//           <div className="stats-section__placeholders">
//             <dl className="stats-section__placeholder-grid">
//               {placeholderStats.map((stat) => (
//                 <div key={stat.label}>
//                   <dt className="stats-section__placeholder-label">
//                     {stat.label}
//                   </dt>

//                   <dd className="stats-section__placeholder-value">
//                     {stat.display}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { placeholderStats } from '../../../data/company';
import { CountUp } from '../../ui/CountUp';

export function StatsSection({ showPlaceholders }) {
  return (
    <section
      aria-label="CRL in numbers"
      className="w-full bg-[#F5F6F8] px-3 py-2"
    >
      <div
        className="
          relative mx-auto w-full max-w-[1500px]
          overflow-hidden rounded-[20px] bg-[#050B16]
          max-md:rounded-[16px]
        "
      >
        <div
          className="
            flex w-full items-center justify-between gap-10
            px-[90px] py-[70px]
            max-[1100px]:px-[60px]
            max-lg:flex-col max-lg:items-start max-lg:gap-7
            max-md:px-7 max-md:py-8
          "
        >
          {/* MAIN STATS */}
          <dl
            className="
              flex items-center gap-8
              max-md:w-full max-md:gap-5
            "
          >
            <div className="flex flex-col gap-1.5">
              <dt className="order-2 font-['Instrument_Sans',sans-serif] text-[13px] font-normal text-[#AEB4BE] max-md:text-xs">
                Next-Day Service Locations
              </dt>
              <dd className="order-1 flex items-baseline font-['Instrument_Sans',sans-serif] text-[60px] font-semibold leading-none tracking-[-1.5px] text-white max-[1100px]:text-[42px] max-md:text-[34px]">
                <CountUp value={24} />
                
              </dd>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/10 pl-8 max-md:pl-5">
              <dt className="order-2 font-['Instrument_Sans',sans-serif] text-[13px] font-normal text-[#AEB4BE] max-md:text-xs">
                Operations
              </dt>
              <dd
                className="order-1 font-['Instrument_Sans',sans-serif] text-[60px] font-semibold leading-none tracking-[-1.5px] text-white max-[1100px]:text-[42px] max-md:text-[34px]"
                aria-label="24 hours a day, 7 days a week"
              >
                24{' '}
                <span className="text-[#E51B23]" aria-hidden="true">
                  x
                </span>{' '}
                7
              </dd>
            </div>
          </dl>

          {/* PLACEHOLDER STATS */}
          {showPlaceholders && (
            <div
              className="
                shrink-0 rounded-[10px] border border-white/10
                px-6 py-4
                max-lg:w-full max-md:px-5
              "
            >
              <dl className="grid grid-cols-3 gap-10 max-md:gap-4">
                {placeholderStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <dd className="order-1 font-['Instrument_Sans',sans-serif] text-[48px] font-semibold leading-tight text-[#6B7280] max-md:text-lg">
                      {stat.display}
                    </dd>
                    <dt className="order-2 font-['Instrument_Sans',sans-serif] text-xs font-normal text-[#6B7280] max-md:text-[11px]">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
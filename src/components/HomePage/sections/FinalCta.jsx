// import React from 'react';
// import { PhoneIcon } from 'lucide-react';
// import { images } from '../../../data/images';
// import { contactDetails } from '../../../data/company';
// import { ButtonLink } from '../../ui/ButtonLink';
// import { Reveal } from '../../ui/Reveal';
// export function FinalCta() {
//     return (<section id="quote" aria-labelledby="cta-heading" className="final-cta text-white">
//       <div className="final-cta__card relative overflow-hidden bg-navy-900 py-24 sm:py-32">
//       <img src={images.hero} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
//       <div className="absolute inset-0 bg-navy-900/80" aria-hidden="true"/>
//       <div className="container-crl relative grid gap-10 lg:grid-cols-12 lg:items-end">
//         <Reveal className="lg:col-span-8">
//           <p className="font-display text-base font-semibold text-crl-light">Your Goods. Our Responsibility.</p>
//           <h2 id="cta-heading" className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            
//             Have Freight to Move?
//           </h2>
//           <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
//             Tell us where your shipment needs to go. CRL will help plan the movement.
//           </p>
//           <div className="mt-10 flex flex-col gap-3 sm:flex-row">
//             <ButtonLink href={`mailto:${contactDetails.email}?subject=${encodeURIComponent('Quote request — CRL Transport')}`} size="lg">
              
//               Request a Quote
//             </ButtonLink>
//             <ButtonLink href="#contact" size="lg" variant="outline-light">
//               Contact CRL
//             </ButtonLink>
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="lg:col-span-4">
//           <a href={contactDetails.phoneHref} className="group flex items-center gap-4 border-t border-white/15 pt-6 lg:justify-end lg:border-t-0 lg:pt-0">
            
//             <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crl transition-colors duration-200 group-hover:bg-crl-dark">
//               <PhoneIcon className="h-5 w-5" aria-hidden="true"/>
//             </span>
//             <span>
//               <span className="block text-sm text-white/60">Call CRL</span>
//               <span className="block font-display text-xl font-bold">{contactDetails.phone}</span>
//             </span>
//           </a>
//         </Reveal>
//       </div>
//       </div>
//     </section>);
// }
import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { images } from '../../../data/images';
import { contactDetails } from '../../../data/company';
import { ButtonLink } from '../../ui/ButtonLink';
import { Reveal } from '../../ui/Reveal';

export function FinalCta() {
  return (
    <section
      id="quote"
      aria-labelledby="cta-heading"
      className="final-cta text-white"
    >
      <div
        className="
          final-cta__card
          relative
          overflow-hidden
          bg-navy-900
          py-[6.8571vw]

          max-lg:py-24
          sm:max-lg:py-32
        "
      >
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 bg-navy-900/80"
          aria-hidden="true"
        />

        <div
          className="
            container-crl
            relative
            grid
            gap-[2.8571vw]
            lg:grid-cols-12
            lg:items-end

            max-lg:gap-10
          "
        >
          <Reveal className="lg:col-span-8">
            <p
              className="
                font-display
                text-[1.1429vw]
                font-semibold
                text-crl-light

                max-lg:text-base
              "
            >
              Your Goods. Our Responsibility.
            </p>

            <h2
              id="cta-heading"
              className="
                mt-[1.4286vw]
                font-display
                text-[5vw]
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]

                max-lg:mt-5
                max-lg:text-[clamp(2.5rem,7vw,5.5rem)]
              "
            >
              Have Freight to Move?
            </h2>

            <p
              className="
                mt-[1.7143vw]
                max-w-[42.8571vw]
                text-[1.2857vw]
                leading-relaxed
                text-white/75

                max-lg:mt-6
                max-lg:max-w-xl
                max-lg:text-lg
              "
            >
              Tell us where your shipment needs to go. CRL will help plan the
              movement.
            </p>

            <div
              className="
                mt-[2.8571vw]
                flex
                flex-col
                gap-[0.8571vw]
                sm:flex-row

                max-lg:mt-10
                max-lg:gap-3
              "
            >
              <ButtonLink
                href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(
                  'Quote request — CRL Transport'
                )}`}
                size="lg"
              >
                Request a Quote
              </ButtonLink>

              <ButtonLink
                href="#contact"
                size="lg"
                variant="outline-light"
              >
                Contact CRL
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <a
              href={contactDetails.phoneHref}
              className="
                group
                flex
                items-center
                gap-[1.1429vw]
                border-t
                border-white/15
                pt-[1.7143vw]
                lg:justify-end
                lg:border-t-0
                lg:pt-0

                max-lg:gap-4
                max-lg:pt-6
              "
            >
              <span
                className="
                  flex
                  h-[3.4286vw]
                  w-[3.4286vw]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-crl
                  transition-colors
                  duration-200
                  group-hover:bg-crl-dark

                  max-lg:h-12
                  max-lg:w-12
                "
              >
                <PhoneIcon
                  className="
                    h-[1.4286vw]
                    w-[1.4286vw]

                    max-lg:h-5
                    max-lg:w-5
                  "
                  aria-hidden="true"
                />
              </span>

              <span>
                <span
                  className="
                    block
                    text-[1vw]
                    text-white/60

                    max-lg:text-sm
                  "
                >
                  Call CRL
                </span>

                <span
                  className="
                    block
                    font-display
                    text-[1.4286vw]
                    font-bold

                    max-lg:text-xl
                  "
                >
                  {contactDetails.phone}
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
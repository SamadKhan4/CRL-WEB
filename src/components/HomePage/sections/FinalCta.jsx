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
          py-12
          pl-[20px]
          md:!w-[calc(100%-9vw)]
          md:!max-w-[1800px]
          sm:py-14
          lg:py-[clamp(36px,6.4vw,59px)]
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
            lg:max-w-[1560px]
            gap-8
            lg:grid-cols-12
            lg:items-end
            lg:gap-[clamp(24px,2.4vw,40px)]
          "
        >
          <Reveal className="lg:col-span-8">
            <p
              className="
                font-display
                text-base
                font-semibold
                text-crl-light
                lg:text-[length:clamp(14px,1.1vw,17px)]
              "
            >
              Your Goods. Our Responsibility.
            </p>

            <h2
              id="cta-heading"
              className="
                mt-3
                font-display
                text-[clamp(2rem,7vw,3.25rem)]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                lg:mt-[clamp(10px,1vw,16px)]
                lg:text-[length:clamp(40px,3.8vw,58px)]
              "
            >
              Have Freight to Move?
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-base
                leading-relaxed
                text-white/75
                lg:mt-[clamp(12px,1.1vw,18px)]
                lg:max-w-[clamp(420px,38vw,600px)]
                lg:text-[length:clamp(15px,1.15vw,18px)]
              "
            >
              Tell us where your shipment needs to go. CRL will help plan the
              movement.
            </p>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
                sm:flex-row
                lg:mt-[clamp(20px,1.9vw,30px)]
                lg:gap-[clamp(10px,.8vw,14px)]
              "
            >
             <ButtonLink href="/request-quote" size="lg">
  Request a Quote
</ButtonLink>

              <ButtonLink
                href="/contact"
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
                gap-4
                border-t
                border-white/15
                pt-5
                lg:justify-end
                lg:gap-[clamp(12px,1.1vw,18px)]
                lg:border-t-0
                lg:pt-0
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-crl
                  transition-colors
                  duration-200
                  group-hover:bg-crl-dark
                  lg:h-[clamp(40px,3.1vw,50px)]
                  lg:w-[clamp(40px,3.1vw,50px)]
                "
              >
                <PhoneIcon
                  className="
                    h-5
                    w-5
                    lg:h-[clamp(16px,1.3vw,20px)]
                    lg:w-[clamp(16px,1.3vw,20px)]
                  "
                  aria-hidden="true"
                />
              </span>

              <span>
                <span
                  className="
                    block
                    text-sm
                    text-white/60
                    lg:text-[length:clamp(12px,.9vw,14px)]
                  "
                >
                  Call CRL
                </span>

                <span
                  className="
                    block
                    font-display
                    text-xl
                    font-bold
                    lg:text-[length:clamp(18px,1.4vw,22px)]
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

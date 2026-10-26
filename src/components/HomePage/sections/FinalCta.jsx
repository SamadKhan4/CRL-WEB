
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
      className="w-full bg-[#F5F6F8] px-3 py-5"
    >
      <div
        className="
          relative mx-auto w-full max-w-[1500px]
          min-h-[475px] overflow-hidden rounded-[20px]
          max-md:min-h-[560px] max-md:rounded-[16px]
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          className="absolute inset-0 bg-[#03080F]/[0.72]"
          aria-hidden="true"
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10 flex min-h-[455px] w-full
            items-center justify-between gap-10
            px-[90px] py-[50px]
            max-[1100px]:px-[60px]
            max-md:min-h-[560px]
            max-md:flex-col max-md:items-start
            max-md:justify-center max-md:gap-8
            max-md:px-7 max-md:py-10
          "
        >
          {/* LEFT CONTENT */}
          <Reveal className="flex max-w-[680px] flex-col">
            <p
              className="
                font-['Instrument_Sans',sans-serif]
                text-base font-semibold text-[#FF535A]
              "
            >
              Your Goods. Our Responsibility.
            </p>

            <h2
              id="cta-heading"
              className="
                mt-3 font-['Instrument_Sans',sans-serif]
                text-[56px] font-semibold
                leading-[1.08] tracking-[-1.8px]
                text-white
                max-[1100px]:text-[48px]
                max-md:text-[38px]
                max-md:leading-[1.08]
                max-md:tracking-[-1px]
              "
            >
              Have Freight
              <br />
              to Move?
              <br />
              <span className="text-[#FF535A]">
                We’re Here to Help.
              </span>
            </h2>

            <p
              className="
                mt-[22px] max-w-[470px]
                font-['Instrument_Sans',sans-serif]
                text-[15px] font-normal
                leading-[1.55] text-[#D1D5DB]
                max-md:mt-[18px]
              "
            >
              Tell us where your shipment needs to go. CRL will help plan the
              movement.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-[30px] flex flex-wrap
                items-center gap-[14px]
                max-md:mt-[25px]
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

          {/* RIGHT PHONE */}
          <Reveal
            delay={0.1}
            className="
              shrink-0 translate-y-[105px] self-center
              max-md:translate-y-0
              max-md:self-start
            "
          >
            <a
              href={contactDetails.phoneHref}
              className="
                group flex items-center gap-[14px]
                no-underline
              "
            >
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-full bg-[#E51B23] text-white
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <PhoneIcon
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    font-['Instrument_Sans',sans-serif]
                    text-xs font-normal leading-[1.2]
                    text-[#AEB4BE]
                  "
                >
                  Call CRL
                </span>

                <span
                  className="
                    mt-[3px]
                    font-['Instrument_Sans',sans-serif]
                    text-[15px] font-semibold
                    leading-[1.2] text-white
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

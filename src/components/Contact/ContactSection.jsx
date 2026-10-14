import React from 'react';

import { Reveal } from '../ui/Reveal';
import { ContactMap } from './ContactMap';
import { ContactForm } from './ContactForm';
import { contactIntro } from '../../data/contact';

export function ContactSection() {
  return (
    <section className="w-full bg-[#F6F7F9] py-[5vw] max-lg:py-12">
      <div
        className="
          mx-auto grid w-[80vw] grid-cols-[1fr_30vw] items-start gap-[7vw]
          max-lg:w-[92vw] max-lg:grid-cols-1 max-lg:gap-10
          max-md:w-[calc(100%-40px)]
        "
      >
        <div className="min-w-0 font-['Instrument_Sans',sans-serif]">
          <Reveal>
            <p className="mb-[1.1vw] text-[0.75vw] font-medium text-crl max-lg:mb-3 max-lg:text-xs">
              {contactIntro.kicker}
            </p>

            <h2 className="text-[2.7vw] font-semibold leading-[1.18] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-[26px]">
              {contactIntro.heading}
            </h2>

            <div className="mt-[1.3vw] border-t border-[#D4D7DC] max-lg:mt-5" />

            <p className="mt-[1.2vw] max-w-[28vw] text-[0.9vw] leading-[1.55] text-[#596579] max-lg:mt-4 max-lg:max-w-none max-lg:text-sm">
              {contactIntro.description}
            </p>
          </Reveal>

          <ContactMap />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

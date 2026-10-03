import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { images } from '../../data/images';
import { contactDetails } from '../../data/company';
import { ButtonLink } from '../ui/ButtonLink';
import { Reveal } from '../ui/Reveal';
export function FinalCta() {
    return (<section id="quote" aria-labelledby="cta-heading" className="final-cta text-white">
      <div className="final-cta__card relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <img src={images.hero} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-navy-900/80" aria-hidden="true"/>
      <div className="container-crl relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="font-display text-base font-semibold text-crl-light">Your Goods. Our Responsibility.</p>
          <h2 id="cta-heading" className="mt-5 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            
            Have Freight to Move?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Tell us where your shipment needs to go. CRL will help plan the movement.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`mailto:${contactDetails.email}?subject=${encodeURIComponent('Quote request — CRL Transport')}`} size="lg">
              
              Request a Quote
            </ButtonLink>
            <ButtonLink href="#contact" size="lg" variant="outline-light">
              Contact CRL
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4">
          <a href={contactDetails.phoneHref} className="group flex items-center gap-4 border-t border-white/15 pt-6 lg:justify-end lg:border-t-0 lg:pt-0">
            
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crl transition-colors duration-200 group-hover:bg-crl-dark">
              <PhoneIcon className="h-5 w-5" aria-hidden="true"/>
            </span>
            <span>
              <span className="block text-sm text-white/60">Call CRL</span>
              <span className="block font-display text-xl font-bold">{contactDetails.phone}</span>
            </span>
          </a>
        </Reveal>
      </div>
      </div>
    </section>);
}

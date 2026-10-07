import React from 'react';
import aboutImage from '../../../assets/About.png';
import { Eyebrow } from '../../ui/Eyebrow';
import { ButtonLink } from '../../ui/ButtonLink';
import { Reveal } from '../../ui/Reveal';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-off py-[5vw] max-lg:py-20 sm:max-lg:py-28"
    >
      <div className="container-crl mx-auto grid w-[91.2857vw] max-w-none items-center gap-[4vw] lg:grid-cols-12 lg:gap-[4.5714vw] max-lg:w-auto max-lg:max-w-none max-lg:gap-12">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[0.8571vw] max-lg:rounded-xl">
            <img
              src={aboutImage}
              alt="CRL logistics hub at night with goods trucks at loading bays"
              loading="lazy"
              className="aspect-[16/11] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>About CRL</Eyebrow>

            <h2
              id="about-heading"
              className="mt-[1.4286vw] font-display text-[3vw] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink max-lg:mt-5 max-lg:text-[clamp(2.125rem,4.2vw,3.25rem)]"
            >
              Transportation With Responsibility.
            </h2>

            <p className="mt-[1.7143vw] font-['Instrument_Sans',sans-serif] text-[1.2857vw] leading-[1.55] text-body max-lg:mt-6 max-lg:text-lg max-lg:leading-relaxed">
              CRL is a growing goods transportation and logistics service provider committed to safe, reliable,
              efficient and hassle-free movement of goods. From pickup to final delivery, every shipment is handled with
              accountability and professional care.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-[2.8571vw] grid gap-[2.2857vw] border-t border-line pt-[2.2857vw] sm:grid-cols-2 max-lg:mt-10 max-lg:gap-8 max-lg:pt-8">
              <div>
                <dt className="font-display text-[1vw] font-bold text-crl max-lg:text-sm">
                  Mission
                </dt>
                <dd className="mt-[0.5714vw] font-display text-[1.2857vw] font-bold leading-snug text-ink max-lg:mt-2 max-lg:text-lg">
                  Reliable, efficient and transparent transportation.
                </dd>
              </div>

              <div>
                <dt className="font-display text-[1vw] font-bold text-crl max-lg:text-sm">
                  Vision
                </dt>
                <dd className="mt-[0.5714vw] font-display text-[1.2857vw] font-bold leading-snug text-ink max-lg:mt-2 max-lg:text-lg">
                  A trusted, technology-driven transportation partner.
                </dd>
              </div>
            </dl>

            <div className="mt-[2.8571vw] max-lg:mt-10">
              <ButtonLink href="#contact" variant="dark" size="lg">
                Discover CRL
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
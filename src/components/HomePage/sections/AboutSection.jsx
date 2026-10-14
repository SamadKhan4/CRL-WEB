import React from 'react';
import aboutImage from '../../../assets/About.png';
import { Eyebrow } from '../../ui/Eyebrow';
import { ButtonLink } from '../../ui/ButtonLink';
import { Reveal } from '../../ui/Reveal';
import { Target, Megaphone } from 'lucide-react';

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
            <div className="mt-[2.8571vw] grid grid-cols-2 gap-[1.4286vw] max-lg:mt-10 max-lg:gap-5 max-sm:grid-cols-1">
  {[
    {
      number: '01',
      title: 'Mission',
      description:
        'Reliable, efficient and transparent transportation.',
      variant: 'light',
    },
    {
      number: '02',
      title: 'Vision',
      description:
        'A trusted, technology-driven transportation partner.',
      variant: 'dark',
    },
  ].map((card) => {
    const isDark = card.variant === 'dark';
    const Icon = isDark ? Megaphone : Target;

    return (
      <div
        key={card.number}
        className={`
          relative min-h-[13.045vw] w-full overflow-hidden
          rounded-[0.4686vw] border-t-2 border-[#D71920]
          p-[1.1429vw]
          shadow-[0px_0px_4.37px_0px_#00000040]
          max-lg:min-h-[182px] max-lg:rounded-[6.56px]
          max-lg:p-4
          ${isDark ? 'bg-[#07111F]' : 'bg-white'}
        `}
      >
        <div className="flex items-start justify-between">
          <span
            className={`
              font-manrope text-[2.8571vw] font-semibold leading-none
              max-lg:text-[40px]
              ${isDark ? 'text-white/15' : 'text-[#E8EBEF]'}
            `}
          >
            {card.number}
          </span>

          <Icon
            size={18}
            strokeWidth={1.5}
            className="mt-[0.3571vw] shrink-0 text-[#D71920] max-lg:mt-[5px]"
            aria-hidden="true"
          />
        </div>

        <h3
          className={`
            mt-[0.5714vw] font-['Instrument_Sans',sans-serif]
            text-[1.2857vw] font-normal leading-[100%]
            max-lg:mt-2 max-lg:text-lg
            ${isDark ? 'text-white' : 'text-[#07111F]'}
          `}
        >
          {card.title}
        </h3>

        <p
          className={`
            mt-[0.8571vw] font-['Instrument_Sans',sans-serif]
            text-[1.1857vw] font-normal leading-[100%]
            max-lg:mt-3 max-lg:text-base
            ${isDark ? 'text-white/65' : 'text-[#5A6068]'}
          `}
        >
          {card.description}
        </p>
      </div>
    );
  })}
</div>

            <div className="mt-[2.8571vw] max-lg:mt-10">
              <ButtonLink href="/contact" variant="dark" size="lg">
                Discover CRL
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
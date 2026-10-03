import React from 'react';
import aboutImage from '../../assets/About.png';
import { Eyebrow } from '../ui/Eyebrow';
import { ButtonLink } from '../ui/ButtonLink';
import { Reveal } from '../ui/Reveal';
export function AboutSection() {
    return (<section id="about" aria-labelledby="about-heading" className="bg-off py-20 sm:py-28">
      <div className="container-crl grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl">
            
            <img src={aboutImage} alt="CRL logistics hub at night with goods trucks at loading bays" loading="lazy" className="aspect-[16/11] w-full object-cover"/>
            
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>About CRL</Eyebrow>
            <h2 id="about-heading" className="mt-5 font-display text-[clamp(2.125rem,4.2vw,3.25rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              Transportation With Responsibility.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              CRL is a growing goods transportation and logistics service provider committed to safe, reliable,
              efficient and hassle-free movement of goods. From pickup to final delivery, every shipment is handled with
              accountability and professional care.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="font-display text-sm font-bold text-crl">Mission</dt>
                <dd className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                  Reliable, efficient and transparent transportation.
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold text-crl">Vision</dt>
                <dd className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                  A trusted, technology-driven transportation partner.
                </dd>
              </div>
            </dl>
            <div className="mt-10">
              <ButtonLink href="#contact" variant="dark" size="lg">
                Discover CRL
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);
}

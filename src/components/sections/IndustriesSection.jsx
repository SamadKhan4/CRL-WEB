import React from 'react';
import { industries } from '../../data/company';
import { Reveal } from '../ui/Reveal';
export function IndustriesSection() {
    return (<section id="industries" aria-labelledby="industries-heading" className="bg-white py-20 sm:py-28">
      <div className="container-crl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="industries-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              Built for Businesses That Keep Moving.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-body">
              Shipment types CRL regularly moves through dedicated Full Truck Load service.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {industries.map((ind, i) => <Reveal as="li" key={ind.title} delay={i % 3 * 0.06} className={ind.span}>
              <figure className="group relative h-72 overflow-hidden rounded-xl bg-navy-900 lg:h-80">
                <img src={ind.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"/>
              
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" aria-hidden="true"/>
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{ind.title}</h3>
                  <p className="mt-1 text-sm text-white/80 transition-[opacity,transform] duration-300 ease-out lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {ind.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>)}
        </ul>
      </div>
    </section>);
}

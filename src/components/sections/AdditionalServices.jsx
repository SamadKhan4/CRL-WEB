import React from 'react';
import { additionalServices } from '../../data/company';
import { Reveal } from '../ui/Reveal';
export function AdditionalServices() {
    return (<section aria-labelledby="extras-heading" className="bg-off py-20 sm:py-24">
      <div className="container-crl grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <h2 id="extras-heading" className="font-display text-[clamp(1.875rem,3.4vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
            
            More Convenience. Better Control.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">
            Value-added services that make shipping with CRL simpler to plan, pay for and follow.
          </p>
        </Reveal>
        <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {additionalServices.map((s, i) => {
            const Icon = s.icon;
            return (<Reveal as="li" key={s.label} delay={i % 3 * 0.04} y={14} className="flex items-start gap-3.5 border-b border-line py-5 sm:pr-6">
                
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-crl" strokeWidth={1.8} aria-hidden="true"/>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{s.label}</span>
                  {s.note && <span className="mt-0.5 block text-xs text-body">{s.note}</span>}
                </span>
              </Reveal>);
        })}
        </ul>
      </div>
    </section>);
}

import React from 'react';
import { trustValues } from '../../../data/company';
import { Reveal } from '../../ui/Reveal';
export function TrustStrip() {
    return (<section aria-label="Our commitments" className="bg-white pb-6 pt-14 sm:pt-16">
      <div className="container-crl">
        <ul className="grid grid-cols-2 gap-y-8 border-b border-line pb-12 lg:grid-cols-4">
          {trustValues.map((item, i) => {
            const Icon = item.icon;
            return (<Reveal as="li" key={item.title} delay={i * 0.05} y={20} className={`flex items-center gap-3.5 px-2 sm:px-6 ${i > 0 ? 'lg:border-l lg:border-line' : ''} ${i % 2 === 1 ? 'border-l border-line lg:border-l' : ''}`}>
                
                <Icon className="h-6 w-6 shrink-0 text-crl" strokeWidth={1.6} aria-hidden="true"/>
                <span className="font-display text-[15px] font-bold leading-tight text-ink sm:text-base">{item.title}</span>
              </Reveal>);
        })}
        </ul>
      </div>
    </section>);
}

import React, { useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { services } from '../../data/services';
import { Reveal } from '../ui/Reveal';
export function ServicesSection() {
    const [active, setActive] = useState(0);
    return (<section id="services" aria-labelledby="services-heading" className="bg-off py-20 sm:py-28">
      <div className="container-crl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="services-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              Logistics Solutions Built Around Your Shipment
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-body">
              From a few cartons to a full vehicle or a complete relocation — choose the movement that fits your goods.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" onMouseLeave={() => setActive(0)}>
          {services.map((s, i) => {
            const isActive = active === i;
            return (<Reveal as="li" key={s.title} delay={i % 3 * 0.06} className="h-full">
                <a href={s.href} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className={`group flex h-full flex-col overflow-hidden rounded-xl transition-colors duration-300 ease-out ${isActive ? 'bg-navy-900 text-white' : 'bg-white text-ink'}`}>
                  
                  <div className="relative overflow-hidden">
                    <img src={s.image} alt={s.alt} loading="lazy" className={`aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out ${isActive ? 'scale-105' : 'scale-100'}`}/>
                    
                    {i === 0 &&
                    <span className="absolute left-4 top-4 rounded bg-crl px-2.5 py-1 text-xs font-semibold text-white">
                        Flagship service
                      </span>}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className={`font-display text-sm font-bold transition-[color,transform] duration-300 ${isActive ? 'translate-x-1 text-crl-light' : 'text-crl'}`}>
                      
                      {s.number}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${isActive ? 'text-white/70' : 'text-body'}`}>
                      {s.description}
                    </p>
                    <span className="mt-auto flex items-center gap-2 pt-8 text-[15px] font-semibold">
                      Learn more
                      <ArrowUpRightIcon className={`h-4 w-4 transition-transform duration-200 ease-out ${isActive ? 'translate-x-1 -translate-y-0.5 text-crl-light' : 'text-crl'}`} aria-hidden="true"/>
                      
                    </span>
                  </div>
                </a>
              </Reveal>);
        })}
        </ul>
      </div>
    </section>);
}

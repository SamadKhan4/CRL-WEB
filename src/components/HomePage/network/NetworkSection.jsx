import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { networkCities, transitTiers } from '../../../data/network';
import { Reveal } from '../../ui/Reveal';
import { ButtonLink } from '../../ui/ButtonLink';
import { NetworkMap } from './NetworkMap';
export function NetworkSection() {
    const [tier, setTier] = useState('next');
    const [hovered, setHovered] = useState(null);
    const activeTier = transitTiers.find((t) => t.id === tier) ?? transitTiers[0];
    const cities = networkCities.filter((c) => c.tier === tier);
    return (<section id="network" aria-labelledby="network-heading" className="bg-navy-900 py-20 text-white sm:py-28">
      <div className="container-crl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="network-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              
              Strong Regional Network.
              <br />
              <span className="text-white/60">Dependable Transit.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-white/70">
              CRL connects Nagpur with major destinations across Vidarbha and Maharashtra.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="hidden rounded-xl border border-white/10 bg-navy-800 p-4 md:block lg:col-span-7 lg:p-6">
            <NetworkMap activeTier={tier} hoveredCity={hovered} onHoverCity={setHovered} tierLabel={activeTier.label}/>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col lg:col-span-5">
            <div role="tablist" aria-label="Transit time from Nagpur" className="grid grid-cols-2 gap-1 rounded-lg bg-navy-800 p-1 sm:grid-cols-4">
              {transitTiers.map((t) => {
            const selected = t.id === tier;
            const count = networkCities.filter((c) => c.tier === t.id).length;
            return (<button key={t.id} role="tab" id={`tab-${t.id}`} aria-selected={selected} aria-controls="network-panel" onClick={() => setTier(t.id)} className={`rounded-md px-2 py-3 text-center transition-colors duration-200 ${selected ? 'bg-crl text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
                    
                    <span className="block whitespace-nowrap font-display text-sm font-bold sm:text-[15px]">{t.label}</span>
                    <span className={`block text-xs ${selected ? 'text-white/85' : 'text-white/50'}`}>{count} locations</span>
                  </button>);
        })}
            </div>

            <div id="network-panel" role="tabpanel" aria-labelledby={`tab-${tier}`} className="mt-8 flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-5xl font-extrabold tracking-tight">
                  {cities.length}
                  <span className="ml-3 align-middle text-base font-semibold text-white/60">
                    {tier === 'next' ? 'next-day locations' : `locations · ${activeTier.label.toLowerCase()}`}
                  </span>
                </p>
              </div>
              <AnimatePresence mode="wait">
                <motion.ul key={tier} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} className="mt-6 flex flex-wrap gap-2">
                  
                  {cities.map((c) => <li key={c.name}>
                      <button type="button" onMouseEnter={() => setHovered(c.name)} onMouseLeave={() => setHovered(null)} onFocus={() => setHovered(c.name)} onBlur={() => setHovered(null)} className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150 ${hovered === c.name ?
                'border-crl bg-crl text-white' :
                'border-white/15 text-white/85 hover:border-white/40'}`}>
                      
                        <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true"/>
                        {c.name}
                      </button>
                    </li>)}
                </motion.ul>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-sm text-white/55">
                Transit times are indicative from Nagpur and may vary with shipment and route conditions.
              </p>
              <ButtonLink href="#quote" variant="outline-light">
                Check your route
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);
}

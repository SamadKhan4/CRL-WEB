import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, FileCheck2Icon, HeadsetIcon } from 'lucide-react';
import { techFeatures, sampleShipment } from '../../../data/technology';
import { easeOut } from '../../../utils/motion';
import { Reveal } from '../../ui/Reveal';
export function TechnologySection() {
    return (<section id="technology" aria-labelledby="tech-heading" className="bg-white py-20 sm:py-28">
      <div className="container-crl grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 id="tech-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              Visibility at Every Movement.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Technology-backed logistics that keeps customers informed throughout the shipment journey.
            </p>
          </Reveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {techFeatures.map((f, i) => {
            const Icon = f.icon;
            return (<Reveal as="li" key={f.title} delay={i * 0.05} y={16} className="flex gap-4 py-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-crl" strokeWidth={1.8} aria-hidden="true"/>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-body">{f.description}</p>
                  </div>
                </Reveal>);
        })}
          </ul>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-2xl bg-navy-900 p-5 text-white sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-crl" aria-hidden="true"/>
                <p className="font-display text-[15px] font-bold">CRL Shipment View</p>
              </div>
              <span className="rounded border border-white/20 px-2 py-0.5 text-xs font-medium text-white/70">
                Sample data · illustrative
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="text-xs text-white/55">Shipment ID</p>
                <p className="mt-1 font-display text-xl font-bold tracking-tight">{sampleShipment.id}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-crl/15 px-3 py-1 text-sm font-semibold text-crl-light">
                <span className="h-1.5 w-1.5 rounded-full bg-crl-light" aria-hidden="true"/>
                {sampleShipment.status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-navy-800 p-5">
              <div>
                <p className="text-xs text-white/55">Origin</p>
                <p className="mt-1 font-display text-lg font-bold">{sampleShipment.origin}</p>
              </div>
              <div className="relative h-px bg-white/15">
                <motion.span className="absolute inset-y-0 left-0 bg-crl" initial={{ width: 0 }} whileInView={{ width: '58%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: easeOut }}/>
                
                <ArrowRightIcon className="absolute -right-1 -top-[7px] h-3.5 w-3.5 text-white/40" aria-hidden="true"/>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/55">Destination</p>
                <p className="mt-1 font-display text-lg font-bold">{sampleShipment.destination}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-5">
              <ol className="sm:col-span-3" aria-label="Movement updates">
                {sampleShipment.updates.map((u, i) => <li key={u.label} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < sampleShipment.updates.length - 1 &&
                <span className={`absolute left-[5px] top-4 h-full w-px ${u.done ? 'bg-crl/60' : 'bg-white/15'}`} aria-hidden="true"/>}
                    <span className={`relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full ${u.current ? 'bg-crl ring-4 ring-crl/25' : u.done ? 'bg-crl' : 'border border-white/30 bg-navy-900'}`}/>
                  
                    <div>
                      <p className={`text-[15px] font-medium ${u.done ? 'text-white' : 'text-white/50'}`}>{u.label}</p>
                      <p className="text-xs text-white/45">{u.place}</p>
                    </div>
                  </li>)}
              </ol>
              <div className="grid gap-3 sm:col-span-2">
                <div className="rounded-lg border border-white/10 p-4">
                  <p className="text-xs text-white/55">Expected delivery</p>
                  <p className="mt-1 font-display text-lg font-bold">{sampleShipment.expected}</p>
                </div>
                <div className="rounded-lg border border-white/10 p-4">
                  <p className="flex items-center gap-1.5 text-xs text-white/55">
                    <FileCheck2Icon className="h-3.5 w-3.5" aria-hidden="true"/> POD status
                  </p>
                  <p className="mt-1 font-display text-[15px] font-bold">{sampleShipment.pod}</p>
                </div>
                <div className="rounded-lg border border-white/10 p-4">
                  <p className="flex items-center gap-1.5 text-xs text-white/55">
                    <HeadsetIcon className="h-3.5 w-3.5" aria-hidden="true"/> Support
                  </p>
                  <p className="mt-1 font-display text-[15px] font-bold">24-hour helpline</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);
}

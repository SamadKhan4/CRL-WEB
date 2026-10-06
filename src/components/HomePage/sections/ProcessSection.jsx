import React from 'react';
import { motion } from 'framer-motion';
import { journeySteps } from '../../../data/process';
import { easeOut } from '../../../utils/motion';
import { Reveal } from '../../ui/Reveal';
export function ProcessSection() {
    return (<section id="process" aria-labelledby="process-heading" className="bg-off py-20 sm:py-28">
      <div className="container-crl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <h2 id="process-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              From Pickup to Delivery.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-body">
              A structured, accountable journey for every consignment — six stages, one point of responsibility.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-6">
          <span className="absolute left-5 right-0 top-[19px] hidden h-px bg-line lg:block" aria-hidden="true"/>
          <span className="absolute bottom-6 left-[19px] top-5 w-px bg-line lg:hidden" aria-hidden="true"/>
          <motion.span className="absolute left-5 right-0 top-[19px] hidden h-px origin-left bg-crl lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }} aria-hidden="true"/>
          
          <motion.span className="absolute bottom-6 left-[19px] top-5 w-px origin-top bg-crl lg:hidden" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }} aria-hidden="true"/>
          
          {journeySteps.map((step, i) => {
            const Icon = step.icon;
            return (<motion.li key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: easeOut }} className="relative flex gap-5 lg:flex-col lg:gap-0">
                
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-crl bg-white text-crl">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden="true"/>
                </span>
                <div className="lg:mt-7 lg:pr-2">
                  <span className="font-display text-sm font-bold text-crl">{step.number}</span>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{step.description}</p>
                </div>
              </motion.li>);
        })}
        </ol>
      </div>
    </section>);
}

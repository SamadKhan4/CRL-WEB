import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { commitments } from '../../data/company';
import { images } from '../../data/images';
import { easeOut } from '../../utils/motion';
import { Reveal } from '../ui/Reveal';
export function WhyChooseSection() {
    const [open, setOpen] = useState(0);
    return (<section aria-labelledby="why-heading" className="bg-white py-20 sm:py-28">
      <div className="container-crl grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 id="why-heading" className="font-display text-[clamp(2.125rem,4.6vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              
              Built Around Reliability.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
              Five commitments shape how CRL handles every consignment — from the first call to final delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-xl">
            <img src={images.sorting} alt="CRL warehouse team scanning and sorting cartons on pallets" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"/>
            
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <ul className="border-t border-ink">
            {commitments.map((c, i) => {
            const isOpen = open === i;
            const panelId = `commitment-${i}`;
            return (<Reveal as="li" key={c.title} delay={i * 0.05} y={20} className="border-b border-line">
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-6 py-7 text-left">
                      
                      <span className={`font-display text-sm font-bold transition-colors duration-200 ${isOpen ? 'text-crl' : 'text-body'}`}>
                        
                        0{i + 1}
                      </span>
                      <span className={`flex-1 font-display text-2xl font-bold tracking-tight transition-colors duration-200 sm:text-[28px] ${isOpen ? 'text-ink' : 'text-ink/70 group-hover:text-ink'}`}>
                        
                        {c.title}
                      </span>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-200 ${isOpen ? 'rotate-45 border-crl bg-crl text-white' : 'border-line text-ink'}`}>
                        
                        <PlusIcon className="h-4 w-4" aria-hidden="true"/>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: easeOut }} className="overflow-hidden">
                      
                        <p className="pb-8 pl-[52px] pr-16 text-lg leading-relaxed text-body">{c.description}</p>
                      </motion.div>}
                  </AnimatePresence>
                </Reveal>);
        })}
          </ul>
        </div>
      </div>
    </section>);
}

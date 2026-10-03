import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, PhoneIcon } from 'lucide-react';
import { navLinks, serviceMenu } from '../../data/navigation';
import { contactDetails } from '../../data/company';
import { ButtonLink } from '../ui/ButtonLink';
export function MobileMenu({ open, onClose }) {
    useEffect(() => {
        if (!open)
            return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prev;
            document.removeEventListener('keydown', onKey);
        };
    }, [open, onClose]);
    return (<AnimatePresence>
      {open &&
            <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        
          <button type="button" aria-label="Close menu" className="absolute inset-0 bg-navy-950/60" onClick={onClose}/>
          <motion.div role="dialog" aria-modal="true" aria-label="Main menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-navy-900 text-white">
          
            <div className="flex min-h-[76px] shrink-0 items-center justify-between px-5 sm:px-8">
              <a href="#top" onClick={onClose} aria-label="CRL Transport home">
                <img src="/logo.png" alt="CRL" className="h-auto w-[72px]" />
              </a>
              <button type="button" onClick={onClose} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15" aria-label="Close menu">
              
                <XIcon className="h-5 w-5" aria-hidden="true"/>
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 px-5 pb-8 sm:px-8">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {navLinks.map((link) => <li key={link.label}>
                    <a href={link.href} onClick={onClose} className="block py-4 font-display text-xl font-bold">
                      {link.label}
                    </a>
                    {link.hasDropdown &&
                        <ul className="-mt-1 grid grid-cols-1 gap-1 pb-4 sm:grid-cols-2">
                        {serviceMenu.map((s) => <li key={s.label}>
                            <a href={s.href} onClick={onClose} className="block py-1.5 text-[15px] text-white/70 hover:text-white">
                              {s.label}
                            </a>
                          </li>)}
                      </ul>}
                  </li>)}
              </ul>
              <div className="mt-8 grid gap-3">
                <ButtonLink href="#quote" size="lg" onClick={onClose}>
                  Request a Quote
                </ButtonLink>
                <ButtonLink href="#track" size="lg" variant="outline-light" onClick={onClose} showArrow={false}>
                  Track Shipment
                </ButtonLink>
              </div>
              <a href={contactDetails.phoneHref} className="mt-8 flex items-center gap-3 text-white/80">
                <PhoneIcon className="h-4 w-4 text-crl-light" aria-hidden="true"/>
                {contactDetails.phone}
              </a>
            </nav>
          </motion.div>
        </motion.div>}
    </AnimatePresence>);
}

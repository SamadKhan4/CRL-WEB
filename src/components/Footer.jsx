import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
import { contactDetails } from '../data/company';
import { Logo } from './Logo';
const columns = [
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#about' },
            { label: 'Mission & Vision', href: '#about' },
            { label: 'Contact', href: '#contact' }
        ]
    },
    {
        title: 'Services',
        links: [
            { label: 'PTL', href: '#ptl' },
            { label: 'FTL', href: '#services' },
            { label: 'Packers & Movers', href: '#services' },
            { label: 'Door Pickup & Delivery', href: '#services' }
        ]
    },
    {
        title: 'Support',
        links: [
            { label: 'Track Shipment', href: '#track' },
            { label: 'Request Quote', href: '#quote' },
            { label: 'POD Tracking', href: '#track' }
        ]
    }
];
export function Footer() {
    return (<footer id="contact" className="bg-navy-950 text-white">
      <div className="container-crl pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light"/>
            <p className="mt-6 max-w-xs font-display text-2xl font-bold leading-snug">
              Reliable Transportation. Seamless Delivery.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-4">
            {columns.map((col) => <div key={col.title}>
                <h2 className="font-display text-sm font-bold text-white">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => <li key={l.label}>
                      <a href={l.href} className="text-[15px] text-white/60 transition-colors duration-200 hover:text-white">
                        {l.label}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </nav>
          <address className="not-italic lg:col-span-4">
            <h2 className="font-display text-sm font-bold">{contactDetails.company}</h2>
            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-crl-light" aria-hidden="true"/>
                <span>
                  {contactDetails.addressLines.map((l) => <span key={l} className="block">
                      {l}
                    </span>)}
                </span>
              </li>
              <li>
                <a href={contactDetails.phoneHref} className="flex items-center gap-3 hover:text-white">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-crl-light" aria-hidden="true"/>
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 hover:text-white">
                  <MailIcon className="h-4 w-4 shrink-0 text-crl-light" aria-hidden="true"/>
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <GlobeIcon className="h-4 w-4 shrink-0 text-crl-light" aria-hidden="true"/>
                {contactDetails.website}
              </li>
            </ul>
          </address>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Chaple Roadlines Pvt. Ltd. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>);
}

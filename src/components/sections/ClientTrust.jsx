import React from 'react';
import { Reveal } from '../ui/Reveal';
const logoSlots = Array.from({ length: 6 }, (_, i) => i);
export function ClientTrust() {
    return (<section aria-labelledby="clients-heading" className="bg-white py-20 sm:py-24">
      <div className="container-crl grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-4">
          <h2 id="clients-heading" className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Trusted Transportation Partner
          </h2>
          <p className="mt-3 text-[15px] text-body">Verified client logos will be added here.</p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:col-span-8">
          {logoSlots.map((i) => <li key={i} className="flex h-24 items-center justify-center bg-white">
              <span className="rounded border border-dashed border-body/40 px-4 py-2 text-sm font-medium text-body">
                Client Logo
              </span>
            </li>)}
        </ul>
      </div>
    </section>);
}

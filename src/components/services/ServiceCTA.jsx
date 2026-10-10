import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import truckYardImage from '../../assets/Services/ServiceBottom.jpg';

export function ServiceCta() {
return (
<section className="mt-[3vw] w-full max-lg:mt-10">
<motion.div
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5 }}
className="
relative isolate overflow-hidden
min-h-[22vw] rounded-[1.1vw]
bg-slate-950 text-white
max-lg max-lg
"
>
{/* Background image */}
<img
       src={truckYardImage}
       alt=""
       aria-hidden="true"
       loading="lazy"
       className="absolute inset-0 -z-20 h-full w-full object-cover"
     />

    {/* Dark overlay */}
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-black/75"
    />

    {/* Content */}
    <div
      className="
        flex min-h-[22vw] flex-col justify-between
        px-[2.6vw] py-[3vw]
        max-lg:min-h-0 max-lg:gap-8 max-lg:px-7 max-lg:py-8
        max-md:px-5 max-md:py-7
      "
    >
      <div className="max-w-[58vw] max-lg:max-w-2xl">
        <h2 className="text-[2.7vw] font-semibold leading-[1.12] tracking-[-0.035em] text-white max-lg:text-4xl max-md:text-[30px]">
          Have a Smaller{' '}
          <span className="text-[#FF535B]">Shipment to Move?</span>
        </h2>

        <p className="mt-[1.8vw] max-w-[34vw] text-[0.95vw] leading-[1.7] text-white/75 max-lg:mt-4 max-lg:max-w-lg max-lg:text-sm">
          Choose CRL PTL for practical and dependable transportation
          of small and medium consignments.
        </p>
      </div>

      {/* Actions and phone contact */}
      <div className="mt-6 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#quote"
            className="
              inline-flex items-center gap-2 rounded-full
              bg-white py-1.5 pl-3.5 pr-1.5
              text-sm font-medium text-[#E31824]
              transition-transform duration-200 hover:scale-[1.03]
            "
          >
            Request a Quote
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E31824] text-white">
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </a>

          <a
            href="/contact"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-white/30 py-1.5 pl-3.5 pr-1.5
              text-sm font-medium text-white
              transition-colors duration-200 hover:bg-white/10
            "
          >
            Contact CRL
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E31824] text-white">
              <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </a>
        </div>

        <a
          href="tel:+917499358403"
          className="flex shrink-0 items-center gap-3 text-white"
          aria-label="Call CRL at +91 7499358403"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E31824]">
            <Phone size={18} aria-hidden="true" />
          </span>

          <span className="flex flex-col">
            <span className="text-xs text-white/65">Call CRL</span>
            <span className="text-sm font-semibold">
              +91 7499358403
            </span>
          </span>
        </a>
      </div>
    </div>
  </motion.div>
</section>

);
}
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import serviceImage from "../../../assets/service.jpg";
import { ptlBenefits } from "../../../data/company";
import { ptlFlow } from "../../../data/process";
import { easeOut } from "../../../utils/motion";
import { Reveal } from "../../ui/Reveal";
export function PtlSection() {
  return (
    <section
      id="ptl"
      aria-labelledby="ptl-heading"
      className="ptl-section"
    >
      <div className="container-crl">
        <div className="ptl-section__layout">
          <div className="ptl-section__visual">
            <div className="ptl-section__image-wrap">
              <img
                src={serviceImage}
                alt="CRL team loading multiple cartons and parcels into a goods truck for Part Truck Load movement"
                loading="lazy"
                className="ptl-section__image"
                width="928"
                height="1152"
              />
            </div>
            <Reveal
              delay={0.3}
              className="ptl-section__note"
            >
              <p className="ptl-section__note-text">
                Pay only for the space your shipment uses.
              </p>
            </Reveal>
          </div>

          <div className="ptl-section__content">
            <Reveal>
              <p className="ptl-section__eyebrow">Part truck load</p>
              <h2
                id="ptl-heading"
                className="ptl-section__heading"
              >
                Smaller Loads.
                <br />
                Smarter Movement.
              </h2>
              <p className="ptl-section__description">
                Move small and medium consignments without paying for an entire
                vehicle. CRL’s Part Truck Load service provides a cost-effective
                transportation solution for multiple packages and business
                shipments.
              </p>
            </Reveal>
            <ul className="ptl-section__benefits">
              {[0, 1, 3, 2, 5, 4].map((index) => ptlBenefits[index]).map((b, i) => (
                <Reveal
                  as="li"
                  key={b}
                  delay={0.05 * i}
                  y={16}
                  className="ptl-section__benefit"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-crl/10">
                    <CheckIcon
                      className="h-3 w-3 text-crl"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  {b}
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2} className="ptl-section__action">
              <a href="#services" className="ptl-section__button">
                Explore Our Services
                <span className="hero-pill-button__arrow"><ArrowUpRightIcon aria-hidden="true" /></span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 sm:mt-28">
          <p className="mb-8 font-display text-sm font-bold text-ink">
            How a PTL shipment moves
          </p>
          {/* Desktop horizontal flow */}
          <ol
            className="relative hidden grid-cols-6 md:grid"
            aria-label="PTL process"
          >
            <span
              className="absolute left-[8.33%] right-[8.33%] top-[7px] h-px bg-line"
              aria-hidden="true"
            />
            <motion.span
              className="absolute left-[8.33%] right-[8.33%] top-[7px] h-px origin-left bg-crl"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
              aria-hidden="true"
            />

            {ptlFlow.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.2,
                  ease: easeOut,
                }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 h-[15px] w-[15px] rounded-full border-[3px] border-white bg-crl ring-1 ring-crl" />
                <span className="mt-4 font-display text-[15px] font-bold text-ink">
                  {step}
                </span>
              </motion.li>
            ))}
          </ol>
          {/* Mobile vertical flow */}
          <ol
            className="relative grid gap-5 border-l border-crl/40 pl-6 md:hidden"
            aria-label="PTL process"
          >
            {ptlFlow.map((step) => (
              <li
                key={step}
                className="relative font-display text-[15px] font-bold text-ink"
              >
                <span className="absolute -left-[31px] top-1 h-[11px] w-[11px] rounded-full bg-crl ring-4 ring-white" />
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

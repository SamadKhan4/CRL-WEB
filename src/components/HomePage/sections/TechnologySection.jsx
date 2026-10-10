import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  FileCheck2Icon,
  HeadsetIcon,
} from 'lucide-react';

import { techFeatures, sampleShipment } from '../../../data/technology';
import { easeOut } from '../../../utils/motion';
import { Reveal } from '../../ui/Reveal';

export function TechnologySection() {
  return (
    <section
      id="technology"
      aria-labelledby="tech-heading"
      className="
        bg-white
        py-[5vw]

        max-lg:py-20
        sm:max-lg:py-28
      "
    >
      <div
        className="
          container-crl
          mx-auto
          grid
          w-[91.2857vw]
          max-w-none
          gap-[4vw]
          lg:grid-cols-12
          lg:gap-[4.5714vw]

          max-lg:w-auto
          max-lg:max-w-none
          max-lg:gap-14
          lg:max-w-none
        "
      >
        {/* Left Content */}
        <div className="lg:col-span-5">
          <Reveal>
            <h2
              id="tech-heading"
              className="
                font-display
                text-[3.2143vw]
                font-extrabold
                leading-[1.06]
                tracking-[-0.03em]
                text-ink

                max-lg:text-[clamp(2.125rem,4.6vw,3.5rem)]
              "
            >
              Visibility at Every Movement.
            </h2>

            <p
              className="
                mt-[1.4286vw]
                font-['Instrument_Sans',sans-serif]
                text-[1.2857vw]
                leading-[1.45]
                text-body

                max-lg:mt-5
                max-lg:text-lg
                max-lg:leading-relaxed
              "
            >
              Technology-backed logistics that keeps customers informed
              throughout the shipment journey.
            </p>
          </Reveal>

          <ul
            className="
              mt-[2.8571vw]
              divide-y
              divide-line
              border-y
              border-line

              max-lg:mt-10
            "
          >
            {techFeatures.map((f, i) => {
              const Icon = f.icon;

              return (
                <Reveal
                  as="li"
                  key={f.title}
                  delay={i * 0.05}
                  y={16}
                  className="
                    flex
                    gap-[1.1429vw]
                    py-[1.4286vw]

                    max-lg:gap-4
                    max-lg:py-5
                  "
                >
                  <Icon
                    className="
                      mt-0.5
                      h-[1.4286vw]
                      w-[1.4286vw]
                      shrink-0
                      text-crl

                      max-lg:h-5
                      max-lg:w-5
                    "
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <h3
                      className="
                        font-display
                        text-[1.1429vw]
                        font-bold
                        text-ink

                        max-lg:text-base
                      "
                    >
                      {f.title}
                    </h3>

                    <p
                      className="
                        mt-[0.2857vw]
                        font-['Instrument_Sans',sans-serif]
                        text-[1.0714vw]
                        leading-[1.5]
                        text-body

                        max-lg:mt-1
                        max-lg:text-[15px]
                        max-lg:leading-relaxed
                      "
                    >
                      {f.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* Shipment View */}
        <Reveal
          delay={0.1}
          className="lg:col-span-7"
        >
          <div
            className="
              rounded-2xl
              bg-navy-900
              p-[1.4286vw]
              text-white

              max-lg:p-5
              sm:max-lg:p-8
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-[1.1429vw]
                border-b
                border-white/10
                pb-[1.4286vw]

                max-lg:gap-4
                max-lg:pb-5
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-crl"
                  aria-hidden="true"
                />

                <p
                  className="
                    font-display
                    text-[1.0714vw]
                    font-bold

                    max-lg:text-[15px]
                  "
                >
                  CRL Shipment View
                </p>
              </div>

              <span className="rounded border border-white/20 px-2 py-0.5 text-xs font-medium text-white/70">
                Sample data · illustrative
              </span>
            </div>

            {/* Shipment ID */}
            <div
              className="
                mt-[1.7143vw]
                grid
                gap-[1.7143vw]
                sm:grid-cols-[1fr_auto]
                sm:items-start

                max-lg:mt-6
                max-lg:gap-6
              "
            >
              <div>
                <p className="text-xs text-white/55">
                  Shipment ID
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[1.4286vw]
                    font-bold
                    tracking-tight

                    max-lg:text-xl
                  "
                >
                  {sampleShipment.id}
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-crl/15 px-3 py-1 text-sm font-semibold text-crl-light">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-crl-light"
                  aria-hidden="true"
                />

                {sampleShipment.status}
              </span>
            </div>

            {/* Origin / Destination */}
            <div
              className="
                mt-[1.7143vw]
                grid
                grid-cols-[auto_1fr_auto]
                items-center
                gap-[1.1429vw]
                rounded-lg
                bg-navy-800
                p-[1.4286vw]

                max-lg:mt-6
                max-lg:gap-4
                max-lg:p-5
              "
            >
              <div>
                <p className="text-xs text-white/55">
                  Origin
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[1.2857vw]
                    font-bold

                    max-lg:text-lg
                  "
                >
                  {sampleShipment.origin}
                </p>
              </div>

              <div className="relative h-px bg-white/15">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-crl"
                  initial={{ width: 0 }}
                  whileInView={{ width: '58%' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: easeOut,
                  }}
                />

                <ArrowRightIcon
                  className="
                    absolute
                    -right-1
                    -top-[7px]
                    h-3.5
                    w-3.5
                    text-white/40
                  "
                  aria-hidden="true"
                />
              </div>

              <div className="text-right">
                <p className="text-xs text-white/55">
                  Destination
                </p>

                <p
                  className="
                    mt-1
                    font-display
                    text-[1.2857vw]
                    font-bold

                    max-lg:text-lg
                  "
                >
                  {sampleShipment.destination}
                </p>
              </div>
            </div>

            {/* Movement Updates */}
            <div
              className="
                mt-[1.7143vw]
                grid
                gap-[1.7143vw]
                sm:grid-cols-5

                max-lg:mt-6
                max-lg:gap-6
              "
            >
              <ol
                className="sm:col-span-3"
                aria-label="Movement updates"
              >
                {sampleShipment.updates.map((u, i) => (
                  <li
                    key={u.label}
                    className="
                      relative
                      flex
                      gap-[1.1429vw]
                      pb-[1.4286vw]
                      last:pb-0

                      max-lg:gap-4
                      max-lg:pb-5
                    "
                  >
                    {i < sampleShipment.updates.length - 1 && (
                      <span
                        className={`absolute left-[5px] top-4 h-full w-px ${
                          u.done
                            ? 'bg-crl/60'
                            : 'bg-white/15'
                        }`}
                        aria-hidden="true"
                      />
                    )}

                    <span
                      className={`
                        relative
                        mt-1.5
                        h-[11px]
                        w-[11px]
                        shrink-0
                        rounded-full

                        ${
                          u.current
                            ? 'bg-crl ring-4 ring-crl/25'
                            : u.done
                            ? 'bg-crl'
                            : 'border border-white/30 bg-navy-900'
                        }
                      `}
                    />

                    <div>
                      <p
                        className={`
                          text-[1.0714vw]
                          font-medium

                          max-lg:text-[15px]

                          ${
                            u.done
                              ? 'text-white'
                              : 'text-white/50'
                          }
                        `}
                      >
                        {u.label}
                      </p>

                      <p className="text-xs text-white/45">
                        {u.place}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Shipment Details */}
              <div className="grid gap-[0.8571vw] sm:col-span-2 max-lg:gap-3">
                <div className="rounded-lg border border-white/10 p-[1.1429vw] max-lg:p-4">
                  <p className="text-xs text-white/55">
                    Expected delivery
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-[1.2857vw]
                      font-bold

                      max-lg:text-lg
                    "
                  >
                    {sampleShipment.expected}
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 p-[1.1429vw] max-lg:p-4">
                  <p className="flex items-center gap-1.5 text-xs text-white/55">
                    <FileCheck2Icon
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />

                    POD status
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-[1.0714vw]
                      font-bold

                      max-lg:text-[15px]
                    "
                  >
                    {sampleShipment.pod}
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 p-[1.1429vw] max-lg:p-4">
                  <p className="flex items-center gap-1.5 text-xs text-white/55">
                    <HeadsetIcon
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />

                    Support
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-[1.0714vw]
                      font-bold

                      max-lg:text-[15px]
                    "
                  >
                    24-hour helpline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
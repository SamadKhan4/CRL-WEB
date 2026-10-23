
import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, TruckIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

const pad = (n) => String(n ?? 0).padStart(2, '0');

const boxStyle = {
  completed: 'bg-emerald-500 text-white',
  active: 'bg-orange-500 text-white ring-4 ring-orange-200',
  pending: 'bg-[#E8EBFA] text-[#6B7490]',
};

const timeStyle = {
  completed: 'text-emerald-700',
  active: 'text-orange-500',
  pending: 'text-[#5D6672]',
};

export function JourneyStepper({ journey }) {
  const stages = Array.isArray(journey?.stages) ? journey.stages : [];
  const currentStage = journey?.currentStage ?? 0;
  const totalStages = journey?.totalStages ?? stages.length;

  if (stages.length === 0) {
    return (
      <section className="rounded-xl border border-[#E9EDF2] bg-white p-5 shadow-sm">
        <h2 className="font-display text-lg font-bold text-navy-900">
          Your Shipment Journey
        </h2>
        <p className="mt-2 text-sm text-[#5D6672]">
          Journey information is not available yet.
        </p>
      </section>
    );
  }

  const isDelivered = stages.some(
    (stage) =>
      stage.state === 'active' &&
      String(stage.title).toLowerCase() === 'delivered'
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="rounded-[1vw] border border-[#E9EDF2] bg-white p-[1.75vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-[length:max(14px,1.31vw)] font-bold text-navy-900 max-lg:text-lg">
            Your Shipment Journey — From Pickup to Delivery
          </h2>

          <p className="mt-[0.25vw] text-[length:max(11px,0.81vw)] text-[#5D6672] max-lg:text-xs">
            Track shipment progress using the latest available tracking updates.
          </p>
        </div>

        <span className="flex items-center gap-[0.5vw] text-[length:max(11px,0.75vw)] font-bold uppercase text-[#3A4560] max-lg:gap-1.5 max-lg:text-[11px]">
          <span
            className={`h-[0.69vw] w-[0.69vw] rounded-full max-lg:h-2 max-lg:w-2 ${
              isDelivered
                ? 'bg-emerald-500'
                : 'animate-pulse bg-orange-500'
            }`}
          />

          {isDelivered
            ? 'Delivered'
            : `Stage ${pad(currentStage)} of ${pad(totalStages)}`}
        </span>
      </div>

      <div className="mt-[1.75vw] overflow-x-auto max-lg:mt-5">
        <ol
          className="grid min-w-[760px] gap-[0.62vw] max-lg:gap-2"
          style={{
            gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`,
          }}
        >
          {stages.map((stage, index) => {
            const state = boxStyle[stage.state]
              ? stage.state
              : 'pending';

            return (
              <motion.li
                key={stage.id ?? `${stage.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                  ease: easeOut,
                }}
                className="flex flex-col items-center text-center"
                aria-current={state === 'active' ? 'step' : undefined}
              >
                <span
                  className={`flex h-[3vw] w-[3vw] items-center justify-center rounded-[0.62vw] text-[length:max(11px,0.88vw)] font-semibold max-lg:h-10 max-lg:w-10 max-lg:rounded-lg max-lg:text-sm ${boxStyle[state]}`}
                >
                  {state === 'completed' && (
                    <CheckIcon
                      className="h-[1.25vw] w-[1.25vw] max-lg:h-4 max-lg:w-4"
                      aria-hidden="true"
                    />
                  )}

                  {state === 'active' && (
                    <TruckIcon
                      className="h-[1.25vw] w-[1.25vw] max-lg:h-4 max-lg:w-4"
                      aria-hidden="true"
                    />
                  )}

                  {state === 'pending' && pad(stage.id ?? index + 1)}
                </span>

                <p
                  className={`mt-[0.75vw] text-[length:max(11px,0.81vw)] font-bold max-lg:mt-2 max-lg:text-xs ${
                    state === 'active'
                      ? 'text-orange-600'
                      : 'text-navy-900'
                  }`}
                >
                  {pad(stage.id ?? index + 1)}. {stage.title}
                </p>

                <p className="mt-[0.19vw] text-[length:max(11px,0.72vw)] text-[#4B5563] max-lg:text-[11px]">
                  {stage.subtitle || 'Awaiting update'}
                </p>

                <p
                  className={`mt-[0.38vw] text-[length:max(11px,0.69vw)] font-bold max-lg:text-[10px] ${timeStyle[state]}`}
                >
                  {stage.time || '—'}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </motion.section>
  );
}

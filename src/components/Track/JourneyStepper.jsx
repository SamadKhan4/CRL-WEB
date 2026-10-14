import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, TruckIcon } from 'lucide-react';

import { easeOut } from '../../utils/motion';

const pad = (n) => String(n).padStart(2, '0');

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
  const { stages, currentStage, totalStages } = journey;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="rounded-[0.8vw] border border-[#E9EDF2] bg-white p-[1.4vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)] max-lg:rounded-xl max-lg:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-[1.05vw] font-bold text-navy-900 max-lg:text-lg">
            Your Shipment Journey — From Pickup to Delivery
          </h2>
          <p className="mt-[0.2vw] text-[0.65vw] text-[#5D6672] max-lg:text-xs">
            Full {totalStages}-stage custody tracking verified with physical scans and automated checkpoints.
          </p>
        </div>
        <span className="flex items-center gap-[0.4vw] text-[0.6vw] font-bold uppercase text-[#3A4560] max-lg:gap-1.5 max-lg:text-[11px]">
          <span className="h-[0.55vw] w-[0.55vw] animate-pulse rounded-full bg-orange-500 max-lg:h-2 max-lg:w-2" />
          Stage {pad(currentStage)} of {pad(totalStages)} (Active)
        </span>
      </div>

      <div className="mt-[1.4vw] overflow-x-auto max-lg:mt-5">
        <ol className="grid min-w-[760px] grid-cols-7 gap-[0.5vw] max-lg:gap-2">
          {stages.map((stage, index) => (
            <motion.li
              key={stage.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: easeOut }}
              className="flex flex-col items-center text-center"
              aria-current={stage.state === 'active' ? 'step' : undefined}
            >
              <span
                className={`flex h-[2.4vw] w-[2.4vw] items-center justify-center rounded-[0.5vw] text-[0.7vw] font-semibold max-lg:h-10 max-lg:w-10 max-lg:rounded-lg max-lg:text-sm ${boxStyle[stage.state]}`}
              >
                {stage.state === 'completed' && <CheckIcon className="h-[1vw] w-[1vw] max-lg:h-4 max-lg:w-4" aria-hidden="true" />}
                {stage.state === 'active' && <TruckIcon className="h-[1vw] w-[1vw] max-lg:h-4 max-lg:w-4" aria-hidden="true" />}
                {stage.state === 'pending' && pad(stage.id)}
              </span>

              <p className={`mt-[0.6vw] text-[0.65vw] font-bold max-lg:mt-2 max-lg:text-xs ${stage.state === 'active' ? 'text-orange-600' : 'text-navy-900'}`}>
                {pad(stage.id)}. {stage.title}
              </p>
              <p className="mt-[0.15vw] text-[0.58vw] text-[#4B5563] max-lg:text-[11px]">{stage.subtitle}</p>
              <p className={`mt-[0.3vw] text-[0.55vw] font-bold max-lg:text-[10px] ${timeStyle[stage.state]}`}>
                {stage.time}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}

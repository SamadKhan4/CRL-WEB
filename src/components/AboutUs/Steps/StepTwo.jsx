import React from 'react';
import { ProcessStep } from './ProcessStep';
import { processSteps } from '../../../data/about';

export function StepTwo() {
  const step = processSteps[1];

  return <ProcessStep {...step} />;
}
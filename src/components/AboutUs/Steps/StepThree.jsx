import React from 'react';
import { ProcessStep } from './ProcessStep';
import { processSteps } from '../../../data/about';

export function StepThree() {
  const step = processSteps[2];

  return <ProcessStep {...step} />;
}
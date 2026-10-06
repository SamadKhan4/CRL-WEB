import React from 'react';
import { ProcessStep } from './ProcessStep';
import { processSteps } from '../../../data/about';

export function StepOne() {
  const step = processSteps[0];

  return <ProcessStep {...step} />;
}
import React from 'react';

import { QuoteSection } from '../QuoteSection';
import { CheckboxGroup } from '../fields/CheckboxGroup';
import { additionalServiceOptions } from '../../../data/quoteForm';

export function AdditionalServicesSection({ values, onToggle }) {
  return (
    <QuoteSection
      number="5"
      title="Additional Services"
      description="CRL’s quotation format includes these as applicable value-added or accessorial charges. Select all that apply:"
    >
      <CheckboxGroup
        legend="Additional services"
        options={additionalServiceOptions}
        selected={values.additionalServices}
        onToggle={onToggle}
      />
    </QuoteSection>
  );
}

import React from 'react';

import { QuoteSection } from '../QuoteSection';
import { RadioGroup } from '../fields/RadioGroup';
import { serviceOptions } from '../../../data/quoteForm';

export function ServiceRequiredSection({ values, errors, onChange }) {
  return (
    <QuoteSection
      number="2"
      title="Service Required"
      required
      description="These are CRL’s primary quoted service types."
    >
      <RadioGroup
        name="service"
        value={values.service}
        onChange={onChange}
        options={serviceOptions}
        error={errors.service}
      />
    </QuoteSection>
  );
}

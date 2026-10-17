import React from 'react';
import { InfoIcon } from 'lucide-react';

import { QuoteSection } from '../QuoteSection';
import { RadioGroup } from '../fields/RadioGroup';
import { SelectField } from '../fields/SelectField';
import { paymentTermsOptions, rateBasisOptions, taxNote } from '../../../data/quoteForm';

export function CommercialDetailsSection({ values, errors, onChange }) {
  return (
    <QuoteSection number="6" title="Commercial Details">
      <div className="space-y-6">
        <RadioGroup
          name="rateBasis"
          legend="Preferred Rate Basis"
          layout="inline"
          value={values.rateBasis}
          onChange={onChange}
          options={rateBasisOptions}
          error={errors.rateBasis}
        />

        <SelectField
          name="paymentTerms"
          label="Payment Terms"
          value={values.paymentTerms}
          onChange={onChange}
          error={errors.paymentTerms}
          options={paymentTermsOptions}
          className="sm:max-w-sm"
        />

        <div className="flex items-start gap-3 rounded-lg bg-[#FDF0F1] p-4">
          <InfoIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-crl" />
          <div>
            <p className="text-[13px] font-bold text-navy-900">{taxNote.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-[#4B5563]">{taxNote.text}</p>
          </div>
        </div>
      </div>
    </QuoteSection>
  );
}

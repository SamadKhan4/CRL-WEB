import React from 'react';

import { QuoteSection } from '../QuoteSection';
import { TextField } from '../fields/TextField';

export function BasicDetailsSection({ values, errors, onChange }) {
  const common = { onChange, required: true };

  return (
    <QuoteSection
      number="1"
      title="Basic Details"
      description="Tell us who you are so we can send your tailored quotation."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField {...common} name="fullName" label="Full Name" placeholder="Your answer"
          value={values.fullName} error={errors.fullName} autoComplete="name" />
        <TextField {...common} name="companyName" label="Company Name" placeholder="Your answer"
          value={values.companyName} error={errors.companyName} autoComplete="organization" />
        <TextField {...common} name="mobile" label="Mobile Number" prefix="+91"
          placeholder="Your 10-digit mobile number" type="tel" inputMode="numeric" maxLength={10}
          value={values.mobile} error={errors.mobile} autoComplete="tel-national"
          onChange={(name, v) => onChange(name, v.replace(/\D/g, ''))} />
        <TextField {...common} name="email" label="Email Address" placeholder="Your email address"
          type="email" value={values.email} error={errors.email} autoComplete="email" />
      </div>
    </QuoteSection>
  );
}

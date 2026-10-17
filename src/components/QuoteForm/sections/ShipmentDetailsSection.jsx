import React from 'react';
import { ScaleIcon } from 'lucide-react';

import { QuoteSection } from '../QuoteSection';
import { TextField } from '../fields/TextField';
import { SelectField } from '../fields/SelectField';
import { TextAreaField } from '../fields/TextAreaField';
import { goodsTypeOptions } from '../../../data/quoteForm';

export function ShipmentDetailsSection({ values, errors, onChange }) {
  return (
    <QuoteSection number="4" title="Shipment Details">
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField name="goodsType" label="Goods Type" required value={values.goodsType}
          onChange={onChange} error={errors.goodsType} options={goodsTypeOptions}
          placeholder="Choose goods category" />
        <TextField name="packages" label="Number of Packages" required value={values.packages}
          onChange={onChange} error={errors.packages} placeholder="e.g., 25 Boxes / 4 Pallets" />
        <TextField name="weight" label="Approximate Weight" required icon={ScaleIcon}
          value={values.weight} onChange={onChange} error={errors.weight}
          placeholder="e.g., 850 kg / 2.5 Tons" />
        <TextField name="declaredValue" label="Declared Value (INR)" prefix="₹"
          value={values.declaredValue} error={errors.declaredValue} inputMode="decimal"
          placeholder="Estimated commercial value of goods"
          onChange={(name, v) => onChange(name, v.replace(/[^\d.,]/g, ''))} />
        <TextAreaField name="specialHandling" label="Special Handling Requirement, if any"
          value={values.specialHandling} onChange={onChange} error={errors.specialHandling}
          placeholder="Temperature control, fragile cargo, moisture protection, forklift required, etc."
          className="sm:col-span-2" />
      </div>
    </QuoteSection>
  );
}

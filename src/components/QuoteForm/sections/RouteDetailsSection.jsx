import React from 'react';
import { CalendarIcon, CircleIcon, MapPinIcon } from 'lucide-react';

import { QuoteSection } from '../QuoteSection';
import { TextField } from '../fields/TextField';
import { minPickupDate } from '../../../utils/quoteValidation';

export function RouteDetailsSection({ values, errors, onChange }) {
  const common = { onChange, required: true };

  return (
    <QuoteSection number="3" title="Route Details">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField {...common} name="pickupLocation" label="Pickup Location" icon={CircleIcon}
          placeholder="Origin City, State / Pincode" value={values.pickupLocation}
          error={errors.pickupLocation} autoComplete="address-level2" />
        <TextField {...common} name="destination" label="Destination" icon={MapPinIcon}
          placeholder="Delivery City, State / Pincode" value={values.destination}
          error={errors.destination} />
        <TextField {...common} name="pickupDate" label="Preferred Pickup Date" icon={CalendarIcon}
          type="date" min={minPickupDate()} placeholder="dd-mm-yyyy" value={values.pickupDate}
          error={errors.pickupDate} />
      </div>
    </QuoteSection>
  );
}

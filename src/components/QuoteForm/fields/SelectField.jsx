import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { Field, controlClass } from './Field';

export function SelectField({
  name, label, value, onChange, error, required, options, placeholder, className,
}) {
  const id = `quote-${name}`;

  return (
    <Field id={id} label={label} required={required} error={error} className={className}>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={controlClass(
            error,
            `appearance-none pl-3.5 pr-10 ${value ? '' : 'text-[#8B93A1]'}`,
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((o) => (
            <option key={o} value={o} className="text-navy-900">
              {o}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5563]"
        />
      </div>
    </Field>
  );
}

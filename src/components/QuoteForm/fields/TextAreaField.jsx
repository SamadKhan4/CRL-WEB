import React from 'react';

import { Field, controlClass } from './Field';

export function TextAreaField({ name, label, value, onChange, error, placeholder, className, rows = 4 }) {
  const id = `quote-${name}`;

  return (
    <Field id={id} label={label} error={error} className={className}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={controlClass(error, 'h-auto resize-none px-3.5 py-3')}
      />
    </Field>
  );
}

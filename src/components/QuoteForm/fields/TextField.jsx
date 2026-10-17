import React from 'react';

import { Field, controlClass } from './Field';

export function TextField({
  name, label, value, onChange, error, required, placeholder, icon: Icon,
  prefix, type = 'text', inputMode, maxLength, autoComplete, min, className,
}) {
  const id = `quote-${name}`;
  const padLeft = prefix ? (prefix.length > 1 ? 'pl-[3.6rem]' : 'pl-9') : Icon ? 'pl-10' : 'pl-3.5';

  return (
    <Field id={id} label={label} required={required} error={error} className={className}>
      <div className="relative">
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4B5563]"
          />
        )}
        {prefix && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#4B5563]">
            {prefix}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          min={min}
          inputMode={inputMode}
          maxLength={maxLength}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={controlClass(error, `${padLeft} pr-3.5`)}
        />
      </div>
    </Field>
  );
}

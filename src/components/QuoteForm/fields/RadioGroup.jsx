import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';


export function RadioGroup({ name, legend, value, onChange, options, error, layout = 'list', required }) {
  const items = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const groupId = `quote-${name}`;

  return (
    <fieldset
      id={groupId}
      tabIndex={-1}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${groupId}-error` : undefined}
      className="outline-none"
    >
      {legend && (
        <legend className="mb-2 text-sm font-semibold text-navy-900">
          {legend}
          {required && <span className="ml-1 text-crl">*</span>}
        </legend>
      )}

      <div
        className={
          layout === 'list'
            ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3'
            : 'flex flex-wrap gap-x-6 gap-y-2'
        }
      >
        {items.map((item) => (
          <label
            key={item.value}
            className={`group flex cursor-pointer items-start gap-3 ${
              layout === 'list'
                ? `rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-crl/40 hover:shadow-md ${
                    value === item.value
                      ? 'border-crl bg-[#FDF0F1] shadow-sm'
                      : 'border-[#E9EDF2] bg-white'
                  }`
                : ''
            }`}
          >
            <input
              type="radio"
              name={name}
              value={item.value}
              checked={value === item.value}
              onChange={() => onChange(name, item.value)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FDF0F1] ring-1 ring-[#F3D3D5] transition peer-checked:bg-crl peer-checked:ring-crl peer-focus-visible:ring-2 peer-focus-visible:ring-crl/50 group-hover:ring-crl/40"
            >
              <span className="h-2 w-2 scale-0 rounded-full bg-white transition-transform peer-checked:scale-100" />
            </span>
            <span>
              <span className="block text-[15px] font-medium text-navy-900">{item.label}</span>
              {item.description && (
                <span className="mt-0.5 line-clamp-2 block text-xs text-[#5D6672]">{item.description}</span>
              )}
            </span>
          </label>
        ))}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${groupId}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden text-xs font-medium text-crl"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </fieldset>
  );
}

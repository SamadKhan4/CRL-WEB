import React from 'react';
import { CheckIcon } from 'lucide-react';

export function CheckboxGroup({ legend, options, selected, onToggle }) {
  return (
    <fieldset>
      <legend className="sr-only">{legend}</legend>
      <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
        {options.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#FDF0F1]"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(option)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-[#FDF0F1] text-white ring-1 ring-[#F3D3D5] transition peer-checked:bg-crl peer-checked:ring-crl peer-focus-visible:ring-2 peer-focus-visible:ring-crl/50 group-hover:ring-crl/40"
              >
                <CheckIcon
                  className={`h-3.5 w-3.5 transition-transform ${checked ? 'scale-100' : 'scale-0'}`}
                  strokeWidth={3}
                />
              </span>
              <span className="text-[15px] font-medium text-navy-900">{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

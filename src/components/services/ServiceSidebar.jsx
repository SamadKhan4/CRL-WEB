import React from 'react';
import { BoxIcon, ArrowUpRightIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { serviceMenu } from '../../data/navigation';

export function ServiceSidebar() {
  const location = useLocation();

  const isActive = (href) => location.pathname === href;

  return (
    <aside
      className="
        sticky
        top-[7vw]
        h-fit
        self-start
        pl-[1.4286vw]
        max-lg:static
        max-lg:pl-0
      "
    >
      <div
        className="
          w-[18.8571vw]
          rounded-[1.4286vw]
          bg-white
          px-[1.2857vw]
          py-[1.4286vw]
          shadow-[0_4px_20px_rgba(7,17,31,0.025)]
          max-lg:w-full
          max-lg:max-w-[650px]
          max-lg:rounded-[20px]
          max-lg:px-[20px]
          max-lg:py-[22px]
        "
      >
        {/* Heading */}
        <div
          className="
            mb-[1.7143vw]
            flex
            items-center
            gap-[0.5714vw]
            max-lg:mb-[22px]
            max-lg:gap-[8px]
          "
        >
          <BoxIcon
            aria-hidden="true"
            className="
              h-[1.1429vw]
              w-[1.1429vw]
              text-crl
              max-lg:h-[16px]
              max-lg:w-[16px]
            "
          />

          <h2
            className="
              font-['Instrument_Sans',sans-serif]
              text-[1.4286vw]
              font-semibold
              leading-none
              tracking-[-0.02em]
              text-navy-900
              max-lg:text-[20px]
            "
          >
            Services
          </h2>
        </div>

        {/* Service list */}
        <nav aria-label="Services">
          <ul className="space-y-[0.3571vw] max-lg:space-y-[5px]">
            {serviceMenu.map((item, index) => {
              const active = isActive(item.href);

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`
                      group
                      flex
                      min-h-[2.8571vw]
                      w-full
                      items-center
                      justify-between
                      rounded-[0.7143vw]
                      px-[0.5714vw]
                      py-[0.5714vw]
                      font-['Instrument_Sans',sans-serif]
                      text-[1vw]
                      font-medium
                      leading-none
                      transition-all
                      duration-200
                      max-lg:min-h-[42px]
                      max-lg:rounded-[10px]
                      max-lg:px-[10px]
                      max-lg:py-[10px]
                      max-lg:text-[14px]
                      ${
                        active
                          ? 'bg-crl text-white'
                          : 'text-navy-900 hover:bg-[#F4F5F7]'
                      }
                    `}
                  >
                    <span>
                      <span
                        className={
                          active
                            ? 'text-white/80'
                            : 'text-navy-900/65'
                        }
                      >
                        {String(index + 1).padStart(2, '0')}.
                      </span>{' '}
                      {item.label}
                    </span>

                    {active && (
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="
                          h-[1vw]
                          w-[1vw]
                          shrink-0
                          text-white
                          max-lg:h-[14px]
                          max-lg:w-[14px]
                        "
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, ArrowRightIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { serviceMenu } from '../../data/navigation';

export function ServicesDropdown({ solid = false, isActive = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const currentPath = location.pathname.replace(/\/+$/, '') || '/';

const servicesActive =
  isActive ||
  currentPath === '/services' ||
  currentPath.startsWith('/services/') ||
  currentPath === '/service' ||
  currentPath.startsWith('/service/');

  const isServiceActive = (href) => {
    const targetPath = href.replace(/\/+$/, '') || '/';

    return (
      currentPath === targetPath ||
      currentPath.startsWith(`${targetPath}/`)
    );
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
      className={`
  group
  relative
  flex
  items-center
  gap-1
  px-3
  py-2
  text-[15px]
  font-medium
  transition-colors
  duration-200
  ${
    servicesActive
      ? '!text-red-600'
      : solid
        ? 'text-ink hover:!text-red-600'
        : 'text-white/90 hover:text-white'
  }
`}
      >
        Services

        <ChevronDownIcon
          className={`
            h-4
            w-4
            transition-transform
            duration-200
            ${open ? 'rotate-180' : ''}
          `}
          aria-hidden="true"
        />

        <span
          className={`
            absolute
            inset-x-3
            -bottom-0.5
            h-0.5
            origin-left
            bg-crl
            transition-transform
            duration-200
            ease-out
            ${
              servicesActive
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
            }
          `}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{
              duration: 0.18,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="
              absolute
              left-1/2
              top-full
              w-[560px]
              -translate-x-1/2
              pt-3
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-1
                rounded-xl
                border
                border-line
                bg-white
                p-3
                shadow-[0_24px_60px_-20px_rgba(7,17,31,0.35)]
              "
            >
              {serviceMenu.map((item, index) => {
                const itemActive = isServiceActive(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-current={itemActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`
                      group/item
                      flex
                      items-start
                      gap-3
                      rounded-lg
                      p-3
                      transition-colors
                      duration-150
                      hover:bg-off
                      ${itemActive ? 'bg-off' : ''}
                    `}
                  >
                    <span
                      className="
                        mt-0.5
                        font-display
                        text-xs
                        font-bold
                        text-crl
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1">
                      <span
                        className={`
                          flex
                          items-center
                          gap-1.5
                          font-display
                          text-[15px]
                          font-bold
                          ${itemActive ? 'text-crl' : 'text-ink'}
                        `}
                      >
                        {item.label}

                        <ArrowRightIcon
                          className="
                            h-3.5
                            w-3.5
                            -translate-x-1
                            text-crl
                            opacity-0
                            transition-[opacity,transform]
                            duration-150
                            group-hover/item:translate-x-0
                            group-hover/item:opacity-100
                          "
                          aria-hidden="true"
                        />
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[13px]
                          leading-snug
                          text-body
                        "
                      >
                        {item.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}


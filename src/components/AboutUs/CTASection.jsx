import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';

import { ctaSection } from '../../data/about';

export function CTASection() {
  const {
    title,
    description,
    buttons,
    contact,
    backgroundImage,
  } = ctaSection;

  return (
    <section className="w-full bg-[#F5F6F8] px-3 py-5">
      <div
        className="
          relative mx-auto w-full max-w-[1500px]
          overflow-hidden rounded-[20px]
          min-h-[475px]
          max-md:min-h-[560px]
          max-md:rounded-[16px]
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#03080F]/[0.72]" />

        {/* CONTENT */}
        <div
          className="
            relative z-10 flex min-h-[455px] w-full
            items-center justify-between gap-10
            px-[90px] py-[50px]
            max-[1100px]:px-[60px]
            max-md:min-h-[560px]
            max-md:flex-col max-md:items-start
            max-md:justify-center
            max-md:gap-8
            max-md:px-7 max-md:py-10
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex max-w-[680px] flex-col">
            <h2
              className="
                font-['Instrument_Sans',sans-serif]
                text-[56px] font-semibold
                leading-[1.08] tracking-[-1.8px]
                text-white
                max-[1100px]:text-[48px]
                max-md:text-[38px]
                max-md:leading-[1.08]
                max-md:tracking-[-1px]
              "
            >
              {title.normal}
              <br />
              {title.secondLine}
              <br />
              <span className="text-[#FF535A]">
                {title.highlight}
              </span>
            </h2>

            <p
              className="
                mt-[22px] max-w-[470px]
                font-['Instrument_Sans',sans-serif]
                text-[15px] font-normal
                leading-[1.55] text-[#D1D5DB]
                max-md:mt-[18px]
              "
            >
              {description}
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-[30px] flex flex-wrap
                items-center gap-[14px]
                max-md:mt-[25px]
              "
            >
              {buttons.map((button) => (
                <Link
                  key={button.label}
                  to={button.to}
                  className={`
                    group flex w-fit items-center
                    gap-2 rounded-full
                    py-2 pl-3 pr-[10px]
                    font-['Instrument_Sans',sans-serif]
                    text-sm font-medium no-underline
                    transition-all duration-300
                    ${
                      button.variant === 'primary'
                        ? `
                          bg-white text-[#D71920]
                          hover:bg-[#D71920]
                          hover:text-white
                        `
                        : `
                          border border-white/40
                          bg-white/5 text-white
                          hover:border-white
                          hover:bg-white
                          hover:text-[#07111F]
                        `
                    }
                  `}
                >
                  {button.label}

                  <span
                    className="
                      flex h-7 w-7 items-center
                      justify-center rounded-full
                      bg-[#D71920] text-white
                      transition-transform duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT PHONE — ALIGNED WITH BUTTONS */}
          <a
            href={contact.href}
            className="
              group flex shrink-0
              translate-y-[105px]
              items-center gap-[14px]
              self-center no-underline
              max-md:translate-y-0
              max-md:self-start
            "
          >
            <span
              className="
                flex h-[42px] w-[42px] shrink-0
                items-center justify-center
                rounded-full bg-[#E51B23] text-white
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              <Phone size={18} strokeWidth={2} />
            </span>

            <span className="flex flex-col">
              <span
                className="
                  font-['Instrument_Sans',sans-serif]
                  text-xs font-normal leading-[1.2]
                  text-[#AEB4BE]
                "
              >
                {contact.label}
              </span>

              <span
                className="
                  mt-[3px]
                  font-['Instrument_Sans',sans-serif]
                  text-[15px] font-semibold
                  leading-[1.2] text-white
                "
              >
                {contact.phone}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

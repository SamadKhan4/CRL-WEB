
import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  GlobeIcon,
} from 'lucide-react';

import {
  contactDetails,
  quoteRequestHref,
} from '../data/company';

// Replace these with CRL's official social profile URLs.
const socialLinks = [
  {
  name: 'Facebook',
  href: 'https://www.facebook.com/people/CRLpackersmoversnagpur/61587466176300/',
  color: 'bg-[#1877F2]',
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.8v8h3.4Z" />
    </svg>
  ),
},
 {
  name: 'Instagram',
  href: 'https://www.instagram.com/crl_packers_and_movers_nagpur_/',
  color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  ),
},
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/YOUR_PAGE/',
    color: 'bg-[#0A66C2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.5 0h3.3v1.6h.1A3.6 3.6 0 0 1 15.7 8c3.5 0 4.2 2.3 4.2 5.3v7.2h-3.4v-6.4c0-1.5 0-3.3-2-3.3s-2.2 1.6-2.2 3.2v6.5H9V9Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/YOUR_PAGE',
    color: 'bg-black',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.9L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
      </svg>
    ),
  },
];

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Network', href: '/network' },
      { label: 'Services', href: '/services/part-truck-load' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'PTL', href: '/services/part-truck-load' },
      { label: 'FTL', href: '/services/full-truck-load' },
      { label: 'Packers & Movers', href: '/services/packers-movers' },
      {
        label: 'Door Pickup & Delivery',
        href: '/services/door-pickup-delivery',
      },
      {
        label: 'Hub-to-Hub Connectivity',
        href: '/services/hub-to-hub-connectivity',
      },
      {
        label: 'Multimode Transportation',
        href: '/services/multimode-transportation',
      },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container-crl pb-5 pt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company and Social Links */}
          <div className="lg:col-span-4">
            <a href="/" aria-label="CRL Transport home">
              <img
                src="/logo.png"
                alt="CRL Transport"
                className="h-auto w-[150px] object-contain"
                loading="lazy"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              Reliable Transportation. Seamless Delivery.
            </p>

            {/* Social Media Icons */}
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit CRL on ${social.name}`}
                  title={social.name}
                  className={`
                    flex h-7 w-7 items-center justify-center
                    rounded-md text-white
                    transition-transform duration-200
                    hover:-translate-y-0.5 hover:opacity-80
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-crl-light
                    ${social.color}
                  `}
                >
                  <span className="h-4 w-4">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

   
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:col-span-1 lg:col-span-4"
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-display text-sm font-semibold">
                  {column.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-white/65 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

         
          <address className="not-italic lg:col-span-4">
            <h2 className="font-display text-sm font-semibold">
              Contact
            </h2>

            <p className="mt-4 text-xs text-white/85">
              Operational Address:
            </p>

            <div className="mt-3 flex gap-2 text-xs leading-relaxed text-white/65">
              <MapPinIcon
                className="hidden h-4 w-4 shrink-0 text-crl-light"
                aria-hidden="true"
              />

              <span>
                {contactDetails.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>

            <ul className="mt-3 space-y-3 text-xs text-white/70">
              <li>
                <a
                  href={contactDetails.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <PhoneIcon
                    className="h-3.5 w-3.5 shrink-0 text-crl-light"
                    aria-hidden="true"
                  />
                  {contactDetails.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MailIcon
                    className="h-3.5 w-3.5 shrink-0 text-crl-light"
                    aria-hidden="true"
                  />
                  {contactDetails.email}
                </a>
              </li>

              <li>
                <a
                  href={`https://${contactDetails.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <GlobeIcon
                    className="h-3.5 w-3.5 shrink-0 text-crl-light"
                    aria-hidden="true"
                  />
                  {contactDetails.website}
                </a>
              </li>

             
            </ul>
          </address>
        </div>

       
        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms-and-conditions" className="hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>

          <p>
            © {new Date().getFullYear()} CRL. All Rights Reserved.
            Site Design and Maintained by AdBorn Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}


// import React, { useCallback, useEffect, useState } from 'react';
// import {
//   ArrowUpRightIcon,
//   MenuIcon,
//   PackageSearchIcon,
// } from 'lucide-react';
// import { useLocation } from 'react-router-dom';

// import { quoteRequestHref } from '../../data/company';
// import { navLinks } from '../../data/navigation';
// import { ServicesDropdown } from './ServicesDropdown';
// import { MobileMenu } from './MobileMenu';

// export function Header() {
//   const location = useLocation();

//   const [solid, setSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = useCallback(() => {
//     setMenuOpen(false);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       setSolid(window.scrollY > 24);
//     };

//     onScroll();

//     window.addEventListener('scroll', onScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, []);

//   const isActiveLink = (href) => {
//     if (href === '/') {
//       return location.pathname === '/';
//     }

//     if (href.startsWith('#')) {
//       return false;
//     }

//     return location.pathname === href;
//   };

//   const isServicesActive =
//     location.pathname.startsWith('/services') ||
//     location.pathname.startsWith('/service');

//   return (
//     <>
//       <header
//         className={
//           'hero-header' + (solid ? ' hero-header--scrolled' : '')
//         }
//       >
//         <div className="hero-header__inner">
//           {/* Logo */}
//           <a
//             href="/"
//             aria-label="CRL Transport home"
//             className="hero-header__logo"
//           >
//             <img
//               src="/logo.png"
//               alt="CRL"
//               width="1769"
//               height="887"
//             />
//           </a>

//           {/* Desktop Navigation */}
//           <nav aria-label="Primary" className="hero-nav">
//             <ul>
//               {navLinks.map((link) =>
//                 link.hasDropdown ? (
//                  <ServicesDropdown
//   key={link.label}
//   solid={solid}
//   isActive={isServicesActive}
// />
//                 ) : (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       className={
//                         isActiveLink(link.href)
//                           ? 'is-active'
//                           : undefined
//                       }
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </nav>

//           {/* Header Actions */}
//           <div className="hero-header__actions">
//             {/* Track Shipment */}
//             <a
//               href="/track-shipment"
//               aria-label="Track shipment"
//               className="hero-header__track"
//             >
//               <PackageSearchIcon aria-hidden="true" />
//               <span>Track Shipment</span>
//             </a>

//             {/* Request a Quote */}
//             <a
//               href={quoteRequestHref}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hero-pill-button"
//             >
//               <span>Request a Quote</span>

//               <span className="hero-pill-button__arrow">
//                 <ArrowUpRightIcon aria-hidden="true" />
//               </span>
//             </a>

//             {/* Mobile Menu Button */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open menu"
//               aria-expanded={menuOpen}
//               className="hero-header__menu"
//             >
//               <MenuIcon aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation */}
//       <MobileMenu
//         open={menuOpen}
//         onClose={closeMenu}
//       />
//     </>
//   );
// }
import React, { useCallback, useEffect, useState } from 'react';
import {
  ArrowUpRightIcon,
  MenuIcon,
  PackageSearchIcon,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { quoteRequestHref } from '../../data/company';
import { navLinks } from '../../data/navigation';
import { ServicesDropdown } from './ServicesDropdown';
import { MobileMenu } from './MobileMenu';

export function Header({ forceSolid = false }) {
  const location = useLocation();

  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }

    if (href.startsWith('#')) {
      return false;
    }

    return location.pathname === href;
  };

  const isServicesActive =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/service');

  const isSolid = solid || forceSolid;

  return (
    <>
      <header
        className={
          'hero-header' + (isSolid ? ' hero-header--scrolled' : '')
        }
      >
        <div className="hero-header__inner">
          {/* Logo */}
          <a
            href="/"
            aria-label="CRL Transport home"
            className="hero-header__logo"
          >
            <img
              src="/logo.png"
              alt="CRL"
              width="1769"
              height="887"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hero-nav">
            <ul>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                 <ServicesDropdown
  key={link.label}
  solid={isSolid}
  isActive={isServicesActive}
/>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={
                        isActiveLink(link.href)
                          ? 'is-active'
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="hero-header__actions">
            {/* Track Shipment */}
            <a
              href="/track-shipment"
              aria-label="Track shipment"
              className="hero-header__track"
            >
              <PackageSearchIcon aria-hidden="true" />
              <span>Track Shipment</span>
            </a>

            {/* Request a Quote */}
            <a
              href={quoteRequestHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-button"
            >
              <span>Request a Quote</span>

              <span className="hero-pill-button__arrow">
                <ArrowUpRightIcon aria-hidden="true" />
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="hero-header__menu"
            >
              <MenuIcon aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
      />
    </>
  );
}

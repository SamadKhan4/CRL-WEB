import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUpRightIcon, MenuIcon, PackageSearchIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { navLinks } from '../../data/navigation';
import { ServicesDropdown } from './ServicesDropdown';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const location = useLocation();

  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

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

  return (
    <>
      <header
        className={
          'hero-header' + (solid ? ' hero-header--scrolled' : '')
        }
      >
        <div className="hero-header__inner">
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

          <nav aria-label="Primary" className="hero-nav">
            <ul>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <ServicesDropdown
                    key={link.label}
                    solid={false}
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

          <div className="hero-header__actions">
            <a
              href="#track"
              aria-label="Track shipment"
              className="hero-header__track"
            >
              <PackageSearchIcon aria-hidden="true" />
              <span>Track Shipment</span>
            </a>

            <a
              href="#quote"
              className="hero-pill-button hero-header__quote"
            >
              Request a Quote

              <span className="hero-pill-button__arrow">
                <ArrowUpRightIcon aria-hidden="true" />
              </span>
            </a>

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

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
      />
    </>
  );
}
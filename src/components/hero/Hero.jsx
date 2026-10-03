import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, MapPinIcon, TruckIcon } from 'lucide-react';
import { easeOut } from '../../utils/motion';
import { HeroRoute } from './HeroRoute';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="hero-section">
      <img src="/heroBG.png" alt="" aria-hidden="true" className="hero-section__background" fetchpriority="high" width="1730" height="909" />
      <div className="hero-section__shade" aria-hidden="true" />
      <div className="hero-section__content">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }}>
          <h1 id="hero-heading" className="hero-section__heading">
            <span>Reliable</span>
            <span>Transportation.</span>
            <span><em>Seamless</em> Delivery.</span>
          </h1>
          <p className="hero-section__description">
            Technology-driven PTL and FTL transportation with dependable delivery, transparent tracking and complete shipment accountability.
          </p>
          <a href="#services" className="hero-pill-button hero-section__cta">
            Explore Our Services
            <span className="hero-pill-button__arrow"><ArrowUpRightIcon aria-hidden="true" /></span>
          </a>
          <ul className="hero-section__details">
            <li><MapPinIcon aria-hidden="true" />Nagpur &middot; Vidarbha &middot; Maharashtra</li>
            <li><TruckIcon aria-hidden="true" />Door pickup &amp; delivery</li>
          </ul>
        </motion.div>
      </div>
      <div className="hero-section__route"><HeroRoute /></div>
      <nav className="hero-section__section-nav" aria-label="Explore page sections">
        <a href="#top" className="is-active" aria-label="Hero section" />
        <a href="#services" aria-label="Our services" />
        <a href="#network" aria-label="Our network" />
      </nav>
    </section>
  );
}

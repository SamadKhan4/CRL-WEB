import React from 'react';
import { MotionConfig, motion } from 'framer-motion';

import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { QuoteForm } from '../components/QuoteForm/QuoteForm';
import { easeOut } from '../utils/motion';

export function RequestQuotePage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header forceSolid />

        <main id="main" className="px-4 pb-20 pt-32 sm:pt-36 lg:pt-40">
          <div className="mx-auto max-w-[860px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-8 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-crl">
                Get a Quote
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Request a Quote
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5D6672] sm:text-base">
                Share your shipment details and the CRL team will get back to you with a
                tailored quotation.
              </p>
            </motion.div>

            <QuoteForm />
          </div>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

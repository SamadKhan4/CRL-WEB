import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, Loader2Icon } from 'lucide-react';

import { useQuoteForm } from '../../hooks/useQuoteForm';
import { BasicDetailsSection } from './sections/BasicDetailsSection';
import { ServiceRequiredSection } from './sections/ServiceRequiredSection';
import { RouteDetailsSection } from './sections/RouteDetailsSection';
import { ShipmentDetailsSection } from './sections/ShipmentDetailsSection';
import { AdditionalServicesSection } from './sections/AdditionalServicesSection';
import { CommercialDetailsSection } from './sections/CommercialDetailsSection';
import { QuoteSuccess } from './QuoteSuccess';

export function QuoteForm() {
  const form = useQuoteForm();
  const [honeypot, setHoneypot] = useState('');
  const { values, errors, status, quoteRef, setField, toggleAdditional, submit, reset } = form;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (honeypot) return; 
    submit();
  };

  if (status === 'success') {
    return <QuoteSuccess quoteRef={quoteRef} email={values.email} onReset={reset} />;
  }

  const sectionProps = { values, errors, onChange: setField };
  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <BasicDetailsSection {...sectionProps} />
      <ServiceRequiredSection {...sectionProps} />
      <RouteDetailsSection {...sectionProps} />
      <ShipmentDetailsSection {...sectionProps} />
      <AdditionalServicesSection values={values} onToggle={toggleAdditional} />
      <CommercialDetailsSection {...sectionProps} />

      <p className="text-xs leading-6 text-[#5D6672]">We use the details you submit to respond to this request. Our forms send these details through EmailJS. Read our <Link to="/privacy-policy" className="font-semibold text-crl underline underline-offset-4">Privacy Policy</Link>.</p>

      <div className="pt-1">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-lg bg-[#DA1C22] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#B3141A] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Request a Quote'
          )}
        </motion.button>

        <div aria-live="polite">
          <AnimatePresence mode="wait">
            {hasErrors && status !== 'error' && (
              <motion.p
                key="validation"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center gap-2 text-sm font-medium text-crl"
              >
                <AlertCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                Please fill the highlighted fields to continue.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700"
              >
                <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                We couldn’t send your request right now. Please try again, or call us directly.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

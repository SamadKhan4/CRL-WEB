import { useCallback, useState } from 'react';

import { initialQuoteValues } from '../data/quoteForm';
import { validateQuote } from '../utils/quoteValidation';
import { createQuoteRef, sendQuoteEmail } from '../services/sendQuoteEmail';

// status: idle | sending | success | error
export function useQuoteForm() {
  const [values, setValues] = useState(initialQuoteValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [quoteRef, setQuoteRef] = useState('');

  const clearError = (name) =>
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));

  const setField = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    clearError(name);
    setStatus((s) => (s === 'error' ? 'idle' : s));
  }, []);

  const toggleAdditional = useCallback((option) => {
    setValues((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(option)
        ? prev.additionalServices.filter((o) => o !== option)
        : [...prev.additionalServices, option],
    }));
  }, []);

  const submit = useCallback(async () => {
    const nextErrors = validateQuote(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      // jump to the first invalid field
      requestAnimationFrame(() => {
        const el = document.querySelector('[aria-invalid="true"]');
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el?.focus?.({ preventScroll: true });
      });
      return false;
    }

    const ref = createQuoteRef();
    setStatus('sending');
    try {
      await sendQuoteEmail(values, ref);
      setQuoteRef(ref);
      setStatus('success');
      return true;
    } catch (err) {
      console.error('[quote] send failed:', err);
      setStatus('error');
      return false;
    }
  }, [values]);

  const reset = useCallback(() => {
    setValues(initialQuoteValues);
    setErrors({});
    setStatus('idle');
    setQuoteRef('');
  }, []);

  return { values, errors, status, quoteRef, setField, toggleAdditional, submit, reset };
}

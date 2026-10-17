import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

import { easeOut } from '../../utils/motion';
import { contactFormFields } from '../../data/contact';
import { sendContactEmail } from '../../services/sendContactEmail';

const initialValues = { name: '', email: '', phone: '', comment: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email';
  }
  if (values.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (values.comment.trim().length < 5) errors.comment = 'Please write a short message';
  return errors;
}

const inputClass = (hasError) => `
  w-full rounded-[0.5vw] border bg-white
  px-[1vw] py-[0.9vw]
  text-[0.9vw] text-navy-900
  outline-none placeholder:text-[#7B8594]
  transition-all duration-200
  focus:border-crl focus:ring-2 focus:ring-crl/15
  max-lg:rounded-lg max-lg:px-3 max-lg:py-3 max-lg:text-sm
  ${hasError ? 'border-crl' : 'border-[#D9DEE5]'}
`;

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (honeypot) return; // bots fill hidden fields

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      await sendContactEmail(values);
      setValues(initialValues);
      setStatus('success');
    } catch (error) {
      console.error('Contact form failed:', error);
      setStatus('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="
        rounded-[1vw] border border-[#E3E7ED] bg-white
       p-[2vw] max-lg:p-6  shadow-[0_4px_20px_rgba(7,17,31,0.03)]
        max-lg:rounded-2xl max-lg:p-5
      "
    >
      {/* honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {contactFormFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 + index * 0.1, ease: easeOut }}
          className="mb-[0.9vw] max-lg:mb-4"
        >
          <label
            htmlFor={`contact-${field.name}`}
            className="mb-[0.35vw] block text-[0.9vw] font-medium text-navy-900 max-lg:mb-1.5 max-lg:text-sm"
          >
            {field.label}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={`contact-${field.name}`}
              name={field.name}
              rows={5}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              className={`${inputClass(errors[field.name])} h-[7vw] resize-none max-lg:h-32`}
            />
          ) : (
            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              className={inputClass(errors[field.name])}
            />
          )}

          <AnimatePresence>
            {errors[field.name] && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-1 text-[0.7vw] text-crl max-lg:text-xs"
              >
                {errors[field.name]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="
          mt-[1.6vw] flex w-full items-center justify-center gap-2 rounded-[0.5vw]
          bg-[#DA1C22] py-[0.8vw] text-[0.8vw] font-medium text-white
          transition-colors duration-200 hover:bg-[#B3141A]
          disabled:cursor-not-allowed disabled:opacity-70
          max-lg:mt-6 max-lg:rounded-lg max-lg:py-3 max-lg:text-sm
        "
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Contact Us'
        )}
      </motion.button>

      <div aria-live="polite">
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-50 px-3 py-2.5 text-[0.8vw] text-emerald-700 max-lg:text-sm"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              Thank you! Your message has been sent. Our team will contact you soon.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-[0.8vw] text-red-700 max-lg:text-sm"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              Something went wrong while sending. Please try again or call us directly.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}

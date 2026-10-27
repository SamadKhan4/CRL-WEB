import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

import { easeOut } from '../../utils/motion';
import { contactFormFields } from '../../data/contact';
import { sendContactEmail } from '../../services/sendContactEmail';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

function validate(values) {
  const errors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const phoneDigits = values.phone.replace(/\D/g, '');
  const comment = values.comment.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length < 2) {
    errors.name = 'Name must contain at least 2 characters.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!phoneDigits) {
    errors.phone = 'Please enter your phone number.';
  } else if (phoneDigits.length !== 10) {
    errors.phone = `Please enter exactly 10 digits. You entered ${phoneDigits.length} digits.`;
  }

  if (!comment) {
    errors.comment = 'Please enter your message.';
  } else if (comment.length < 5) {
    errors.comment = 'Your message must contain at least 5 characters.';
  }

  return errors;
}

const inputClass = (hasError) => `
  w-full rounded-[0.5vw] border bg-white
  px-[1vw] py-[1vw]
  text-[1vw] text-navy-900
  outline-none placeholder:text-[#7B8594]
  transition-all duration-200
  focus:border-crl focus:ring-2 focus:ring-crl/15
  max-lg:rounded-lg max-lg:px-3 max-lg:py-3 max-lg:text-sm
  ${hasError ? 'border-red-500' : 'border-[#D9DEE5]'}
`;

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setStatus((prev) =>
      prev === 'success' || prev === 'error' ? 'idle' : prev
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0];

      requestAnimationFrame(() => {
        const field = document.getElementById(`contact-${firstError}`);

        field?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        field?.focus({ preventScroll: true });
      });

      return;
    }

    setStatus('sending');

    try {
      const result = await sendContactEmail(values);

      console.log('Contact email sent successfully:', result);

      setValues(initialValues);
      setErrors({});
      setStatus('success');
    } catch (error) {
      console.error('Contact form failed:', error);
      setStatus('error');
    }
  };

  const handleSendAnother = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  };

  // Show only the compact confirmation box after successful submission.
  if (status === 'success') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: easeOut }}
          role="status"
          aria-live="polite"
          className="
            rounded-xl border border-emerald-200 bg-white
            p-5 shadow-[0_4px_20px_rgba(7,17,31,0.04)]
            max-lg:p-4
          "
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2
                size={22}
                className="text-emerald-600"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-navy-900">
                Message Submitted!
              </h3>

              <p className="mt-1 text-sm leading-5 text-gray-600">
                Thank you for contacting CRL Transport. Our team will contact
                you soon.
              </p>

              <button
                type="button"
                onClick={handleSendAnother}
                className="
                  mt-4 inline-flex items-center justify-center
                  rounded-lg bg-[#DA1C22] px-4 py-2.5
                  text-sm font-medium text-white
                  transition-colors hover:bg-[#B3141A]
                  focus:outline-none focus:ring-2
                  focus:ring-[#DA1C22]/30 focus:ring-offset-2
                "
              >
                Send Another Message
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

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
        p-[2vw] shadow-[0_4px_20px_rgba(7,17,31,0.03)]
        max-lg:rounded-2xl max-lg:p-5
      "
    >
      {contactFormFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: 0.15 + index * 0.1,
            ease: easeOut,
          }}
          className="mb-[0.9vw] max-lg:mb-4"
        >
          <label
            htmlFor={`contact-${field.name}`}
            className="
              mb-[0.35vw] block text-[0.9vw] font-medium text-navy-900
              max-lg:mb-1.5 max-lg:text-sm
            "
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
              aria-describedby={
                errors[field.name]
                  ? `error-${field.name}`
                  : undefined
              }
              className={`
                ${inputClass(errors[field.name])}
                h-[7vw] resize-none max-lg:h-32
              `}
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
              aria-describedby={
                errors[field.name]
                  ? `error-${field.name}`
                  : undefined
              }
              className={inputClass(errors[field.name])}
            />
          )}

          <AnimatePresence>
            {errors[field.name] && (
              <motion.p
                id={`error-${field.name}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
                className="mt-1 text-sm text-red-600"
              >
                {errors[field.name]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      <p className="text-xs leading-6 text-[#5D6672]">We use the details you submit to respond to this request. Our forms send these details through EmailJS. Read our <Link to="/privacy-policy" className="font-semibold text-crl underline underline-offset-4">Privacy Policy</Link>.</p>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={status === 'sending' ? undefined : { scale: 1.02 }}
        whileTap={status === 'sending' ? undefined : { scale: 0.97 }}
        className="
          mt-[1.6vw] flex w-full items-center justify-center gap-2
          rounded-[0.5vw] bg-[#DA1C22] py-[0.8vw]
          text-[0.8vw] font-medium text-white
          transition-colors duration-200 hover:bg-[#B3141A]
          disabled:cursor-not-allowed disabled:opacity-70
          max-lg:mt-6 max-lg:rounded-lg max-lg:py-3 max-lg:text-sm
        "
      >
        {status === 'sending' ? (
          <>
            <Loader2
              size={16}
              className="animate-spin"
              aria-hidden="true"
            />
            Sending...
          </>
        ) : (
          'Contact Us'
        )}
      </motion.button>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="
              mt-4 flex items-start gap-2 rounded-lg
              bg-red-50 px-3 py-3 text-sm text-red-700
            "
          >
            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />

            <div>
              <p className="font-semibold">
                Unable to submit your message.
              </p>
              <p className="mt-1">
                Please try again. If the problem continues, contact us directly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

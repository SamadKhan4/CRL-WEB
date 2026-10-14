import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailConfigured = Boolean(serviceId && templateId && publicKey);

/**
 * Sends the contact form through EmailJS.
 * Template variables used: {{from_name}}, {{from_email}}, {{phone}}, {{message}}, {{reply_to}}
 */
export function sendContactEmail({ name, email, phone, comment }) {
  if (!isEmailConfigured) {
    return Promise.reject(new Error('EmailJS is not configured'));
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: name,
      from_email: email,
      phone,
      message: comment,
      reply_to: email,
    },
    { publicKey },
  );
}

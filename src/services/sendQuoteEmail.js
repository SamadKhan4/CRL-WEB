import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const quoteTemplateId = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID;
// optional: confirmation mail to the customer
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_QUOTE_AUTOREPLY_TEMPLATE_ID;

export const isQuoteEmailConfigured = Boolean(serviceId && publicKey && quoteTemplateId);

const formatDate = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}-${m}-${y}`;
};

export function createQuoteRef() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const stamp = `${String(now.getFullYear()).slice(2)}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  return `CRLQ-${stamp}-${Math.floor(1000 + Math.random() * 9000)}`;
}


export async function sendQuoteEmail(values, quoteRef) {
  if (!isQuoteEmailConfigured) {
    throw new Error('EmailJS quote template is not configured');
  }

  const params = {
    quote_ref: quoteRef,
    subject: `New Quote Request ${quoteRef} — ${values.service}`,
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    full_name: values.fullName.trim(),
    company_name: values.companyName.trim(),
    mobile: `+91 ${values.mobile}`,
    email: values.email.trim(),
    reply_to: values.email.trim(),
    service: values.service,
    pickup_location: values.pickupLocation.trim(),
    destination: values.destination.trim(),
    pickup_date: formatDate(values.pickupDate),
    goods_type: values.goodsType,
    packages: values.packages.trim(),
    weight: values.weight.trim(),
    declared_value: values.declaredValue ? `₹ ${values.declaredValue.trim()}` : 'Not specified',
    special_handling: values.specialHandling.trim() || 'None',
    additional_services: values.additionalServices.length
      ? values.additionalServices.join(', ')
      : 'None',
    rate_basis: values.rateBasis,
    payment_terms: values.paymentTerms,
  };

  await emailjs.send(serviceId, quoteTemplateId, params, { publicKey });

  // customer confirmation is best-effort — never fail the quote because of it
  if (autoReplyTemplateId) {
    try {
      await emailjs.send(serviceId, autoReplyTemplateId, params, { publicKey });
    } catch (err) {
      console.warn('[quote] auto-reply failed:', err);
    }
  }
}

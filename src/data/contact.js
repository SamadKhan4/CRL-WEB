// All Contact page content lives here so it can be edited without touching components.

export const contactHero = {
  title: 'Contact Us',
  breadcrumb: ['CRL', 'Contact Us'],
};

export const contactCards = [
  {
    id: 'address',
    icon: 'MapPin',
    title: 'Office Address',
    lines: [
      'C/O Babarao Chaple Miniwada (Kondhali)',
      'Tahsil – Katol District – Nagpur – 441103',
      'Maharashtra (MH)',
    ],
  },
  {
    id: 'phone',
    icon: 'Phone',
    title: 'Phone Number',
    text: 'Call us for quick assistance and consultation.',
    link: { label: '+91 74993 58403', href: 'tel:+917499358403' },
  },
  {
    id: 'email',
    icon: 'Mail',
    title: 'Email Address',
    text: 'Send us your queries and our team will respond as soon as possible.',
    link: {
      label: 'chapleroadlines26@crl-transport.com',
      href: 'mailto:chapleroadlines26@crl-transport.com',
    },
  },
  {
    id: 'hours',
    icon: 'Clock',
    title: 'Working Hours',
    lines: ['Monday – Saturday: 10:00 AM – 6:00 PM'],
    highlight: 'Sunday: Closed',
  },
];

export const contactIntro = {
  kicker: 'Get in Touch',
  heading: 'We are Always ready to help you and answer your questions',
  description:
    'Our dedicated support team is available to guide you, provide solutions, and ensure a smooth experience.',
};

// Address pinned on the Google Map
export const mapLocation = {
  address:
    'Shop No. 3, Opp. Joshi Clinic, Beside Pushpa Mobile, Khargaon Road, Wadi, Nagpur – 440023, Maharashtra',
  title: 'CRL office location on Google Maps',
};

export const contactFormFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter your phone number', autoComplete: 'tel' },
  { name: 'comment', label: 'Comment', type: 'textarea', placeholder: 'comment' },
];

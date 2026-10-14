
import ftlDeliveryImage from '../../assets/Services/service-delivery.png';
import ftlPackingImage from '../../assets/Services/service-packing.png';
import overviewImage from '../../assets/Services/WhatFLT.png';
import { quoteRequestHref } from '../../data/company';

export const packersMoversData = {
  slug: 'packers-movers',
  serviceName: 'Packers & Movers',

  overview: {
    image: overviewImage ,
    category: 'PACKERS & MOVERS',
    heading: 'A Smoother Way to Relocate.',
    description:
      'CRL provides end-to-end relocation services for homes, offices, and businesses, covering the key stages of the moving process.',

    features: [
      {
        title: 'Household Shifting',
        description:
          'Transportation support for moving household goods from one location to another.',
        icon: 'CircleDollarSign',
        color: 'bg-blue-50 text-blue-500',
      },
      {
        title: 'Office Relocation',
        description:
          'Relocation support for offices and business premises.',
        icon: 'ShieldCheck',
        color: 'bg-emerald-50 text-emerald-500',
      },
      {
        title: 'Packing',
        description:
          'Goods can be prepared for transportation as part of the relocation process.',
        icon: 'MessageCircle',
        color: 'bg-purple-50 text-purple-500',
      },
      {
        title: 'Loading',
        description:
          'Packed items are loaded for transportation.',
        icon: 'PackageCheck',
        color: 'bg-amber-50 text-amber-500',
      },
      {
        title: 'Transportation',
        description:
          'Goods are moved from the origin to the destination.',
        icon: 'Truck',
        color: 'bg-sky-50 text-sky-500',
      },
      {
        title: 'Unloading & Unpacking',
        description:
          'Relocation support can include unloading and unpacking at the destination.',
        icon: 'PackageOpen',
        color: 'bg-purple-50 text-purple-500',
      },
    ],
  },

  whyChoose: {
  images: [
    {
      src: ftlDeliveryImage,
      alt: 'Delivery and transportation service',
    },
    {
      src: ftlPackingImage,
      alt: 'Packing and handling service',
    },
  ],
  kicker: 'Why Choose CRL?',
  heading: 'CRL’s broader transportation approach is built around:',
  points: [
    'Reliable transportation',
    'Transparent operations',
    'Timely delivery',
    'Professional service',
    'Safe handling',
  ],
},

  cta: {
    heading: 'Planning a Home or Office Move?',
    highlight: '',
    description:
      'Let CRL help manage the transportation and relocation process.',
    primaryLabel: 'Request a Quote',
    primaryHref: quoteRequestHref,
    secondaryLabel: 'Contact CRL',
    secondaryHref: '/contact',
    phoneLabel: 'Call CRL',
    phoneNumber: '+91 7499358403',
    phoneHref: 'tel:+917499358403',
  },
};

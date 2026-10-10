export const aboutData = {
  whoWeAre: {
    eyebrow: 'Who We Are',

    title: 'More Than Moving Goods.',

    description: [
      'At Chaple Roadlines Pvt. Ltd. (CRL), we are committed to making the movement of goods safe, reliable, efficient, and hassle-free. We understand that transportation is not simply about moving cargo from one place to another. It is about delivering every shipment on time, safely, and with complete accountability.',

      'That is why CRL focuses on professional service, operational efficiency, transparent communication, and customer-centric transportation solutions. From pickup to final delivery, our team works to ensure every shipment is handled with care and delivered as committed.',
    ],

    cards: [
      {
        number: '01',
        title: 'Mission',
        description:
          'To provide reliable, efficient and professional transportation services that help businesses move their products with confidence.',
        variant: 'light',
      },
      {
        number: '02',
        title: 'Vision',
        description:
          'To become a trusted and technology-driven transportation partner, known for service excellence, reliability, and long-term customer relationships.',
        variant: 'dark',
      },
    ],
  },
};

import commitmentImage from '../assets/AboutUs/Commitment.jpg';

export const commitmentSection = {
  title: 'Every Shipment Is a Commitment.',
  description:
    'At CRL, every shipment represents a responsibility. We continuously work to improve our processes, expand our capabilities and use technology to make transportation more efficient.',
  image: commitmentImage,
};

export const commitmentItems = [
  {
    id: 1,
    title: 'Reliable Transportation',
    description: 'Dependable movement of goods across locations.',
  },
  {
    id: 2,
    title: 'Timely Delivery',
    description: 'On-time delivery with dependable service and efficient operations.',
  },
  {
    id: 3,
    title: 'Safety First',
    description: 'Safe handling and transportation of every shipment.',
  },
  {
    id: 4,
    title: 'Transparent Operations',
    description: 'Clear communication and transparent processes throughout the journey.',
  },
  {
    id: 5,
    title: 'Professional Approach',
    description: 'Professional service focused on reliability, care and customer satisfaction.',
  },
];
import StepOne from '../assets/AboutUs/StepOne.jpg';
import StepTwo from '../assets/AboutUs/StepTwo.jpg';
import StepThree from '../assets/AboutUs/StepThree.jpg';

export const processSteps = [
  {
    id: '01',
    title: 'Part Truck Load – PTL',
    description:
      'Cost-effective transportation for small and medium consignments that do not require an entire truck.',
    label: 'Suitable for',
    tags: [
      'Small consignments',
      'Medium consignments',
      'Multiple packages',
      'Cost-conscious transportation',
    ],
    image: StepOne,
    imageAlt: 'Part truck load transportation',
    imagePosition: 'left',
  },
  {
    id: '02',
    title: 'Full Truck Load – FTL',
    description:
      'Dedicated full-vehicle transportation for larger and high-volume shipments.',
    label: 'Suitable for',
    tags: [
      'Industrial goods',
      'Machinery',
      'FMCG',
      'Automotive components',
      'Commercial goods',
      'Bulk consignments',
    ],
    image: StepTwo,
    imageAlt: 'Full truck load transportation',
    imagePosition: 'right',
  },
  {
    id: '03',
    title: 'Packers & Movers',
    description:
      'End-to-end relocation solutions for homes, offices and businesses.',
    label: 'Includes',
    tags: [
      'Packing',
      'Loading',
      'Transportation',
      'Unloading',
      'Unpacking',
    ],
    image: StepThree,
    imageAlt: 'Packers and movers service',
    imagePosition: 'left',
  },
];
import imageCta from '../assets/AboutUs/image.jpg';
export const ctaSection = {
  title: {
    normal: 'Looking for a Reliable',
    secondLine: 'Transportation',
    highlight: 'Partner?',
  },

  description:
    'Talk to CRL about your shipment requirements and let our team help plan the right transportation solution.',

  buttons: [
    {
      label: 'Request a Quote',
      to: '/contact-us',
      variant: 'primary',
    },
    {
      label: 'Contact CRL',
      to: '/contact-us',
      variant: 'secondary',
    },
  ],

  contact: {
    label: 'Call CRL',
    phone: '+917499358403',
    href: 'tel:+917499358403',
  },

  backgroundImage: imageCta,
};
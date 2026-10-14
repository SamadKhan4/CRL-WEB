
import ftlDeliveryImage from '../../assets/Services/service-delivery.png';
import ftlPackingImage from '../../assets/Services/service-packing.png';
import overviewImage from '../../assets/Services/WhatFLT.png';

import Truck from '../../assets/Services/truck.png';
import Delivery from '../../assets/Services/Delivery-man.png';
import Box from '../../assets/Services/box.png';
import { quoteRequestHref } from '../../data/company';
export const doorPickupDeliveryData = {
  serviceName: 'Door Pickup & Delivery',

  overview: {
    image: overviewImage,
    category: 'DOOR PICKUP & DOOR DELIVERY',
    heading: 'Transportation From Your Door to the Destination.',
    paragraphs: [
      'CRL provides door pickup and door delivery services to make goods transportation more convenient for customers.',
    ],
    features: [],
  },

  howItWorks: [
    {
      title: 'Pickup',
      description:
        'Goods are collected from the specified pickup location.',
      image: Delivery,
      imageAlt: 'Pickup and packing',
      variant: 'circle',
    },
    {
      title: 'Transportation',
      description:
        'The shipment moves through the appropriate transportation process.',
      image: Truck,
      imageAlt: 'Transportation truck',
      variant: 'square',
    },
    {
      title: 'Delivery',
      description:
        'Goods are delivered to the required destination.',
      image: Box,
      imageAlt: 'Delivery package',
      variant: 'circle',
    },
  ],

  benefits: {
    eyebrow: 'Benefits',
    heading: 'Benefits',
    description: '',
    cards: [
      { title: 'Convenient pickup arrangement' },
      { title: 'Reduced coordination effort' },
      { title: 'POD tracking' },
      { title: 'Door-to-destination movement' },
      { title: 'Shipment tracking support' },
      { title: 'Customer support' },
    ],
    images: [ftlDeliveryImage, ftlPackingImage],
  },

  cta: {
    description:
      'Talk to CRL about your door pickup and delivery requirements.',
    actions: [
      { label: 'Request a Quote', href: quoteRequestHref },
      { label: 'Contact CRL', href: '/contact' },
    ],
    phone: {
      label: 'Call CRL',
      display: '+91 74993 58403',
      href: 'tel:+917499358403',
    },
  },
};

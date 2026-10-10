// import React from 'react';
// import deliveryImage from '../../assets/Services/service-delivery.png';
// import packingImage from '../../assets/Services/service-packing.png';
// import {
// CircleDollarSign,
// ShieldCheck,
// MessageCircle,
// Eye,
// House,
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// const benefits = [
// {
// title: 'Cost-Conscious',
// description:
// 'A suitable option when your shipment does not require an entire vehicle. Pay only for the space you use.',
// Icon: CircleDollarSign,
// color: 'bg-blue-50 text-blue-500',
// },
// {
// title: 'Professional Handling',
// description:
// 'Shipments are handled with standardized care and modern gear throughout the transportation journey.',
// Icon: ShieldCheck,
// color: 'bg-emerald-50 text-emerald-500',
// },
// {
// title: 'Transparent Comms',
// description:
// 'Customers receive clear, automated, and proactive shipment status alerts from dispatch to drop-off.',
// Icon: MessageCircle,
// color: 'bg-purple-50 text-purple-500',
// },
// {
// title: 'Shipment Visibility',
// description:
// 'CRL provides real-time online tracking and instant electronic Proof of Delivery (e-POD) verification.',
// Icon: Eye,
// color: 'bg-amber-50 text-amber-500',
// },
// {
// title: 'Door Service Support',
// description:
// 'Comprehensive door-to-door convenience: hassle-free door pickup and final-mile door delivery are seamlessly available at your warehouse or retail outlet.',
// Icon: House,
// color: 'bg-sky-50 text-sky-500',
// wide: true,
// },
// ];

// export function ServiceBenefits() {
// return (
// <section className="mt-[3.5vw] w-full max-lg:mt-12">
// <div className="grid grid-cols-2 gap-[1.2857vw] max-md:grid-cols-1 max-md:gap-5">
// <div className="overflow-hidden rounded-[1.1vw] max-md:rounded-2xl">
// <img
//   src={deliveryImage}
//   alt="CRL delivery team handling a shipment"
//   loading="lazy"
//   className="block aspect-[326/235] h-auto w-full object-cover"
// />
// </div>

//     <div className="overflow-hidden rounded-[1.1vw] max-md:rounded-2xl">
//       <img
//   src={packingImage}
//   alt="Careful packing and sealing of a shipment"
//   loading="lazy"
//   className="block aspect-[326/235] h-auto w-full object-cover"
// />
//     </div>
//   </div>

//   <div className="mt-[3vw] max-md:mt-8">
//     <p className="mb-[1.1vw] text-[0.8vw] font-medium text-crl max-lg:text-sm">
//       Why Choose CRL PTL?
//     </p>

//     <h2 className="text-[2.6vw] font-semibold leading-[1.15] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
//       Transportation Built Around Efficiency
//     </h2>

//     <p className="mt-[1vw] max-w-[95%] text-[1vw] leading-relaxed text-slate-600 max-lg:mt-3 max-lg:text-base max-md:text-sm">
//       CRL focuses on reliable movement, timely delivery, safe handling,
//       transparent operations, and professional service throughout the
//       transportation process.
//     </p>
//   </div>

//   <div className="mt-[1.1vw] grid grid-cols-3 gap-[0.9vw] border-t border-slate-300 pt-[1.1vw] max-lg:mt-5 max-lg:grid-cols-2 max-lg:gap-4 max-lg:pt-4 max-md:grid-cols-1">
//     {benefits.map(({ title, description, Icon, color, wide }, index) => (
//       <motion.article
//         key={title}
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.15 }}
//         transition={{ duration: 0.4, delay: index * 0.06 }}
//         className={`rounded-[0.9vw] border border-slate-200 bg-white p-[1.1vw] max-lg:rounded-xl max-lg:p-4 ${
//           wide ? 'col-span-2 max-md:col-span-1' : ''
//         }`}
//       >
//         <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-xl ${color}`}>
//           <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
//         </div>

//         <h3 className="text-[0.95vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
//           {title}
//         </h3>

//         <p className="mt-1.5 text-[0.78vw] leading-[1.5] text-slate-600 max-lg:text-xs max-md:text-sm">
//           {description}
//         </p>
//       </motion.article>
//     ))}
//   </div>
// </section>

// );
// }

import React from 'react';
import {
  CircleDollarSign,
  ShieldCheck,
  MessageCircle,
  Eye,
  House,
} from 'lucide-react';
import { motion } from 'framer-motion';

import deliveryImage from '../../assets/Services/service-delivery.png';
import packingImage from '../../assets/Services/service-packing.png';

const defaultBenefits = [
  {
    title: 'Cost-Conscious',
    description:
      'A suitable option when your shipment does not require an entire vehicle. Pay only for the space you use.',
    Icon: CircleDollarSign,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    title: 'Professional Handling',
    description:
      'Shipments are handled with standardized care and modern gear throughout the transportation journey.',
    Icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    title: 'Transparent Comms',
    description:
      'Customers receive clear, automated, and proactive shipment status alerts from dispatch to drop-off.',
    Icon: MessageCircle,
    color: 'bg-purple-50 text-purple-500',
  },
  {
    title: 'Shipment Visibility',
    description:
      'CRL provides real-time online tracking and instant electronic Proof of Delivery (e-POD) verification.',
    Icon: Eye,
    color: 'bg-amber-50 text-amber-500',
  },
  {
    title: 'Door Service Support',
    description:
      'Comprehensive door-to-door convenience: hassle-free door pickup and final-mile door delivery are seamlessly available at your warehouse or retail outlet.',
    Icon: House,
    color: 'bg-sky-50 text-sky-500',
    wide: true,
  },
];

export function ServiceBenefits({
  images = [
    {
      src: deliveryImage,
      alt: 'CRL delivery team handling a shipment',
    },
    {
      src: packingImage,
      alt: 'Careful packing and sealing of a shipment',
    },
  ],
  kicker = 'Why Choose CRL PTL?',
  heading = 'Transportation Built Around Efficiency',
  description = 'CRL focuses on reliable movement, timely delivery, safe handling, transparent operations, and professional service throughout the transportation process.',
  benefits = defaultBenefits,
}) {
  return (
    <section className="mt-[3.5vw] w-full max-lg:mt-12">
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-[1.2857vw] max-md:grid-cols-1 max-md:gap-5">
          {images.map(({ src, alt }, index) => (
            <div
              key={`${alt}-${index}`}
              className="overflow-hidden rounded-[1.1vw] max-md:rounded-2xl"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="block aspect-[326/235] h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-[3vw] max-md:mt-8">
        {kicker && (
          <p className="mb-[1.1vw] text-[0.8vw] font-medium text-crl max-lg:text-sm">
            {kicker}
          </p>
        )}

        <h2 className="text-[2.6vw] font-semibold leading-[1.15] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
          {heading}
        </h2>

        {description && (
          <p className="mt-[1vw] max-w-[95%] text-[1vw] leading-relaxed text-slate-600 max-lg:mt-3 max-lg:text-base max-md:text-sm">
            {description}
          </p>
        )}
      </div>

      {benefits.length > 0 && (
        <div className="mt-[1.1vw] grid grid-cols-3 gap-[0.9vw] border-t border-slate-300 pt-[1.1vw] max-lg:mt-5 max-lg:grid-cols-2 max-lg:gap-4 max-lg:pt-4 max-md:grid-cols-1">
          {benefits.map(
            ({ title, description: benefitDescription, Icon, color = 'bg-slate-100 text-slate-600', wide }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-[0.9vw] border border-slate-200 bg-white p-[1.1vw] max-lg:rounded-xl max-lg:p-4 ${
                  wide ? 'col-span-2 max-md:col-span-1' : ''
                }`}
              >
                {Icon && (
                  <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-xl ${color}`}>
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                )}

                <h3 className="text-[0.95vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
                  {title}
                </h3>

                {benefitDescription && (
                  <p className="mt-1.5 text-[0.78vw] leading-[1.5] text-slate-600 max-lg:text-xs max-md:text-sm">
                    {benefitDescription}
                  </p>
                )}
              </motion.article>
            ),
          )}
        </div>
      )}
    </section>
  );
}

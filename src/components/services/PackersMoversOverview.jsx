
// import React from 'react';

// import {
//   CircleDollarSign,
//   ShieldCheck,
//   MessageCircle,
//   Clock,
//   House,
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// const iconMap = {
//   CircleDollarSign,
//   ShieldCheck,
//   MessageCircle,
//   Clock,
//   House,
// };

// export function PackersMoversOverview({ data }) {
//   const { image, category, heading, description, features } = data;

//   return (
//     <section className="w-full">
      
  
  
// {image && (
//   <div className="mb-[3.4286vw] w-full overflow-hidden rounded-[1.4286vw] max-lg:mb-8 max-lg:rounded-[20px]">
//     <img
//       src={image}
//       alt="CRL Packers and Movers truck"
//       className="block aspect-[928/416] w-full object-cover max-md:aspect-[4/3]"
//     />
//   </div>
// )}



//       <div className="mb-[1.1vw] text-[0.8vw] font-medium text-crl max-lg:mb-3 max-lg:text-sm">
//         {category}
//       </div>

//       <h2 className="text-[2.6vw] font-semibold leading-[1.15] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
//         {heading}
//       </h2>

//       <p className="mt-[1.5vw] max-w-[95%] text-[1vw] leading-relaxed text-slate-600 max-lg:mt-3 max-lg:text-base max-md:text-sm">
//         {description}
//       </p>

//       <div className="mt-[1.1vw] grid grid-cols-3 gap-[0.9vw] max-lg:mt-4 max-lg:grid-cols-2 max-lg:gap-3 max-md:grid-cols-1">
//         {features.map((feature, index) => {
//           const Icon = iconMap[feature.icon];

//           return (
//             <motion.article
//               key={feature.title}
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{ duration: 0.35, delay: index * 0.05 }}
//               className="rounded-[0.9vw] border border-slate-200 bg-white p-[0.9vw] max-lg:rounded-xl max-lg:p-3"
//             >
//               <div
//                 className={`mb-2 flex h-6 w-6 items-center justify-center rounded-lg ${feature.color}`}
//               >
//                 {Icon && (
//                   <Icon
//                     size={13}
//                     strokeWidth={1.8}
//                     aria-hidden="true"
//                   />
//                 )}
//               </div>

//               <h3 className="text-[0.85vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
//                 {feature.title}
//               </h3>

//               <p className="mt-1 text-[0.72vw] leading-[1.45] text-slate-500 max-lg:text-xs">
//                 {feature.description}
//               </p>
//             </motion.article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import React from 'react';

import {
  CircleDollarSign,
  ShieldCheck,
  MessageCircle,
  Clock,
  House,
  Building2,
  Package,
  PackageCheck,
  Truck,
  PackageOpen,
} from 'lucide-react';

import { motion } from 'framer-motion';

const iconMap = {
  CircleDollarSign,
  ShieldCheck,
  MessageCircle,
  Clock,
  House,
  Building2,
  Package,
  PackageCheck,
  Truck,
  PackageOpen,
};

const featureIconStyles = {
  'Household Shifting': 'bg-blue-50 text-blue-500',
  'Office Relocation': 'bg-emerald-50 text-emerald-500',
  Packing: 'bg-purple-50 text-purple-500',
  Loading: 'bg-amber-50 text-amber-500',
  Transportation: 'bg-sky-50 text-sky-500',
  'Unloading & Unpacking': 'bg-purple-50 text-purple-500',
};

const featureIconFallbacks = {
  'Household Shifting': House,
  'Office Relocation': Building2,
  Packing: Package,
  Loading: PackageCheck,
  Transportation: Truck,
  'Unloading & Unpacking': PackageOpen,
};

export function PackersMoversOverview({ data }) {
  const { image, category, heading, description, features } = data;

  return (
    <section className="w-full">
      {/* Service Image */}
      {image && (
        <div className="mb-[3.4286vw] w-full overflow-hidden rounded-[1.4286vw] max-lg:mb-8 max-lg:rounded-[20px]">
          <img
            src={image}
            alt="CRL Packers and Movers truck"
            className="block aspect-[928/416] w-full object-cover max-md:aspect-[4/3]"
          />
        </div>
      )}

      {/* Category */}
      <div className="mb-[1.1vw] text-[0.8vw] font-medium text-crl max-lg:mb-3 max-lg:text-sm">
        {category}
      </div>

      {/* Heading */}
      <h2 className="text-[2.6vw] font-semibold leading-[1.15] tracking-[-0.035em] text-navy-900 max-lg:text-3xl max-md:text-2xl">
        {heading}
      </h2>

      {/* Description */}
      <p className="mt-[1.5vw] max-w-[95%] text-[1vw] leading-relaxed text-slate-600 max-lg:mt-3 max-lg:text-base max-md:text-sm">
        {description}
      </p>

      {/* Feature Cards */}
      <div className="mt-[1.1vw] grid grid-cols-3 gap-[0.9vw] max-lg:mt-4 max-lg:grid-cols-2 max-lg:gap-3 max-md:grid-cols-1">
        {features.map((feature, index) => {
          // Use the existing data icon when available.
          // Otherwise, select an icon according to the feature title.
          const Icon =
            iconMap[feature.icon] ||
            featureIconFallbacks[feature.title];

          const color =
            featureIconStyles[feature.title] ||
            feature.color ||
            'bg-slate-100 text-slate-500';

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="rounded-[0.9vw] border border-slate-200 bg-white p-[0.9vw] max-lg:rounded-xl max-lg:p-3"
            >
              {/* Icon */}
              <div
                className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl ${color}`}
              >
                {Icon && (
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Feature Title */}
              <h3 className="text-[0.85vw] font-semibold leading-snug text-navy-900 max-lg:text-sm">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-1 text-[0.72vw] leading-[1.45] text-slate-500 max-lg:text-xs">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

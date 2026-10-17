
export const initialQuoteValues = {
  fullName: '',
  companyName: '',
  mobile: '',
  email: '',
  service: '',
  pickupLocation: '',
  destination: '',
  pickupDate: '',
  goodsType: '',
  packages: '',
  weight: '',
  declaredValue: '',
  specialHandling: '',
  additionalServices: [],
  rateBasis: 'Per Trip',
  paymentTerms: 'Payment on Delivery (POD)',
};

export const serviceOptions = [
  {
    value: 'PTL (Part Truck Load)',
    label: 'PTL (Part Truck Load)',
    description: 'Economical consolidated hub-to-hub movements',
  },
  {
    value: 'FTL (Full Truck Load)',
    label: 'FTL (Full Truck Load)',
    description: 'Dedicated point-to-point vehicles (14ft, 22ft, 32ft MXL/SXL)',
  },
  {
    value: 'Packers & Movers',
    label: 'Packers & Movers',
    description: 'Complete end-to-end relocation with packing crew',
  },
    {
    value: 'Door Pickup & Delivery',
    label: 'Door Pickup & Delivery',
    description: 'Transportation from your door to the destination',
  },
  {
    value: 'Hub-to-Hub Connectivity',
    label: 'Hub-to-Hub Connectivity',
    description: 'Reliable movement between logistics hubs',
  },
  {
    value: 'Multimode Transportation',
    label: 'Multimode Transportation',
    description: 'Flexible planning across more than one transport stage',
  },
];

export const goodsTypeOptions = [
  'General Cargo',
  'FMCG / Consumer Goods',
  'Electronics & Appliances',
  'Auto Parts & Machinery',
  'Industrial / Engineering Goods',
  'Textiles & Garments',
  'Pharma & Healthcare',
  'Furniture & Household Items',
  'Food & Perishables',
  'Construction Material',
  'E-commerce / Parcels',
  'Other',
];

export const additionalServiceOptions = [
  'Pickup / Delivery',
  'COD / FOD (Cash/Freight on Delivery)',
  'Loading / Unloading Support',
  'Appointment Delivery / Slot Booking',
  'ODA / Remote Area Delivery',
  'Special / Fragile Handling',
];

export const rateBasisOptions = ['Per Trip', 'Per Kg', 'Per Job / Contract'];

export const paymentTermsOptions = [
  'Payment on Delivery (POD)',
  'Advance Payment',
  'To-Pay (Consignee Pays)',
  'Credit / Monthly Billing (TBB)',
];

export const taxNote = {
  title: 'Statutory Tax Information',
  text: 'GST: As Applicable (18% for Freight / Transport services as per statutory Central Road Logistics guidelines). E-Way Bill compliance must accompany consignment.',
};

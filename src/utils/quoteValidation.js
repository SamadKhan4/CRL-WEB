const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export const minPickupDate = todayISO;

export function validateQuote(v) {
  const e = {};

  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name';
  if (v.companyName.trim().length < 2) e.companyName = 'Please enter your company name';
  if (!/^[6-9]\d{9}$/.test(v.mobile)) e.mobile = 'Enter a valid 10-digit mobile number';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address';

  if (!v.service) e.service = 'Please select a service';

  if (v.pickupLocation.trim().length < 3) e.pickupLocation = 'Enter pickup city, state or pincode';
  if (v.destination.trim().length < 3) e.destination = 'Enter destination city, state or pincode';
  if (!v.pickupDate) e.pickupDate = 'Select a preferred pickup date';
  else if (v.pickupDate < todayISO()) e.pickupDate = 'Pickup date cannot be in the past';

  if (!v.goodsType) e.goodsType = 'Choose a goods category';
  if (!v.packages.trim()) e.packages = 'Enter number of packages';
  if (!v.weight.trim()) e.weight = 'Enter approximate weight';
  if (v.declaredValue && !/^[\d,]+(\.\d+)?$/.test(v.declaredValue.trim())) {
    e.declaredValue = 'Enter numbers only';
  }

  return e;
}

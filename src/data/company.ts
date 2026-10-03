import {
  ShieldCheckIcon,
  ClockIcon,
  EyeIcon,
  BadgeCheckIcon,
  SearchIcon,
  HeadphonesIcon,
  PackageOpenIcon,
  HomeIcon,
  WalletIcon,
  FileCheckIcon,
  NetworkIcon,
  TimerIcon,
  CalendarClockIcon,
  ShuffleIcon,
  CreditCardIcon } from
'lucide-react';
import { images } from './images';

export const trustValues = [
{ title: 'Reliable Transportation', icon: ShieldCheckIcon },
{ title: 'Timely Delivery', icon: ClockIcon },
{ title: 'Transparent Operations', icon: EyeIcon },
{ title: 'Professional Service', icon: BadgeCheckIcon }];


export const ptlBenefits = [
'Cost-efficient movement',
'Suitable for small & medium consignments',
'Multiple-package transportation',
'Professional handling',
'Door pickup & delivery support',
'Shipment visibility'];


export const commitments = [
{ title: 'Reliable Transportation', description: 'Dependable movement of goods across locations.' },
{ title: 'Timely Delivery', description: 'Focused on meeting committed delivery schedules.' },
{ title: 'Safety First', description: 'Careful handling and transportation of customer goods.' },
{ title: 'Transparent Operations', description: 'Clear communication throughout the transportation process.' },
{ title: 'Professional Approach', description: 'A dedicated team focused on quality and service excellence.' }];


export const additionalServices = [
{ label: 'Online Tracking', icon: SearchIcon },
{ label: '24-Hour Customer Support', icon: HeadphonesIcon },
{ label: 'Door Pickup', icon: PackageOpenIcon },
{ label: 'Door Delivery', icon: HomeIcon },
{ label: 'COD / To-Pay', icon: WalletIcon },
{ label: 'POD Tracking', icon: FileCheckIcon },
{ label: 'Hub-to-Hub Connectivity', icon: NetworkIcon },
{ label: '24×7 Operations', icon: TimerIcon },
{ label: 'Appointment Delivery', icon: CalendarClockIcon },
{ label: 'Multimode Transportation', icon: ShuffleIcon },
{ label: 'Credit Facility', note: 'Terms & conditions apply', icon: CreditCardIcon }];


export const industries = [
{ title: 'Industrial Goods', detail: 'Steel, fabricated and plant materials', image: images.industrial, span: 'lg:col-span-5' },
{ title: 'Machinery', detail: 'Secured, dedicated vehicle movement', image: images.ftl, span: 'lg:col-span-4' },
{ title: 'FMCG', detail: 'Palletised and cartonised stock', image: images.fmcg, span: 'lg:col-span-3' },
{ title: 'Automotive Components', detail: 'Crated parts for plants and dealers', image: images.auto, span: 'lg:col-span-3' },
{ title: 'Commercial Goods', detail: 'Business stock between locations', image: images.pickup, span: 'lg:col-span-4' },
{ title: 'Bulk Consignments', detail: 'High-volume loads in one movement', image: images.hub, span: 'lg:col-span-5' }];


export const placeholderStats = [
{ display: 'XX+', label: 'Customers' },
{ display: 'XX+', label: 'Shipments' },
{ display: 'XX+', label: 'Vehicles' }];


export const contactDetails = {
  company: 'Chaple Roadlines Pvt. Ltd.',
  addressLines: ['Shop No. 3, Opp. Joshi Clinic,', 'Beside Pushpa Mobile, Khargaon Road,', 'Wadi, Nagpur – 440023, Maharashtra'],
  phone: '+91 7499358403',
  phoneHref: 'tel:+917499358403',
  email: 'info@crl-transport.com',
  website: 'www.crl-transport.com'
};
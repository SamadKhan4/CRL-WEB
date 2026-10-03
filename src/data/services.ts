import { images } from './images';
import serviceImage from '../assets/service.jpg';

export const services = [
{
  number: '01',
  title: 'Part Truck Load',
  description: 'Cost-effective transportation for shipments that do not need a complete vehicle.',
  image: serviceImage,
  alt: 'Workers loading cartons into a goods truck at a loading dock',
  href: '#ptl'
},
{
  number: '02',
  title: 'Full Truck Load',
  description: 'Dedicated vehicle transportation for industrial, commercial and bulk consignments.',
  image: images.ftl,
  alt: 'Truck loaded with industrial machinery secured with straps',
  href: '#quote'
},
{
  number: '03',
  title: 'Packers & Movers',
  description: 'End-to-end home, office and business relocation support.',
  image: images.movers,
  alt: 'Movers carrying wrapped furniture and boxes into a truck',
  href: '#quote'
},
{
  number: '04',
  title: 'Door Pickup & Delivery',
  description: 'Convenient pickup from origin and delivery to the required destination.',
  image: images.pickup,
  alt: 'Driver collecting cartons from a shop front',
  href: '#quote'
},
{
  number: '05',
  title: 'Hub-to-Hub Connectivity',
  description: 'Flexible movement between hubs based on customer requirements.',
  image: images.sorting,
  alt: 'Warehouse team sorting cartons on pallets',
  href: '#network'
},
{
  number: '06',
  title: 'Multimode Transportation',
  description: 'Transportation solutions using suitable modes based on shipment requirements.',
  image: images.hero,
  alt: 'Goods truck travelling on a highway at dusk',
  href: '#quote'
}];

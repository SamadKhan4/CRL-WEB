import { TruckIcon, ClipboardCheckIcon, LayersIcon, ArrowLeftRightIcon, PackageSearchIcon, PackageCheckIcon } from 'lucide-react';

export const ptlFlow = ['Pickup', 'Sorting', 'Consolidation', 'Line Haul', 'Destination', 'Delivery'];

export const journeySteps = [
{
  number: '01',
  title: 'Shipment Pickup',
  description: 'Goods are collected from your doorstep or handed over at the origin point.',
  icon: TruckIcon
},
{
  number: '02',
  title: 'Origin Processing',
  description: 'The consignment is booked, documented and assigned an LR / docket number.',
  icon: ClipboardCheckIcon
},
{
  number: '03',
  title: 'Sorting & Consolidation',
  description: 'Packages are sorted by destination and consolidated for onward movement.',
  icon: LayersIcon
},
{
  number: '04',
  title: 'Inter-Hub Movement',
  description: 'The shipment moves between hubs, with movement updates along the way.',
  icon: ArrowLeftRightIcon
},
{
  number: '05',
  title: 'Destination Processing',
  description: 'Received, checked and prepared for delivery at the destination end.',
  icon: PackageSearchIcon
},
{
  number: '06',
  title: 'Final Delivery',
  description: 'Delivered to the consignee, with proof of delivery recorded for tracking.',
  icon: PackageCheckIcon
}];
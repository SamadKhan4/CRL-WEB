import { RadarIcon, FileCheck2Icon, MoveRightIcon, HeadsetIcon, EyeIcon } from 'lucide-react';
export const techFeatures = [
    { title: 'Live Shipment Visibility', description: 'Track your consignment online with your LR / docket number.', icon: RadarIcon },
    { title: 'POD Tracking', description: 'Check proof-of-delivery status once the shipment is delivered.', icon: FileCheck2Icon },
    { title: 'Movement Updates', description: 'Know when your shipment is booked, in transit and out for delivery.', icon: MoveRightIcon },
    { title: 'Customer Support', description: '24-hour support for shipment queries, backed by 24×7 operations.', icon: HeadsetIcon },
    { title: 'Operational Transparency', description: 'Clear status at every stage, from pickup to final delivery.', icon: EyeIcon }
];
export const sampleShipment = {
    id: 'CRL-SAMPLE-0001',
    origin: 'Nagpur',
    destination: 'Amravati',
    status: 'In transit',
    expected: 'Next day',
    pod: 'Awaiting delivery',
    updates: [
        { label: 'Picked up from consignor', place: 'Nagpur', done: true },
        { label: 'Booked & processed at origin', place: 'Nagpur', done: true },
        { label: 'In transit to destination hub', place: 'En route', done: true, current: true },
        { label: 'Out for delivery', place: 'Amravati', done: false },
        { label: 'Delivered · POD recorded', place: 'Amravati', done: false }
    ]
};

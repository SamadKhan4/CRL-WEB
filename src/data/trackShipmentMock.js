/**
 * TEMPORARY MOCK DATA — used only while VITE_TRACKING_API_URL is not set.
 * The shape returned by buildShipment() is the contract the backend should follow.
 */

const dockets = {
  CRL8492019: {
    originCity: 'Nagpur, Maharashtra', originTerminal: 'Wadi Terminal', originHub: 'Nagpur Hub',
    destCity: 'Pune, Maharashtra', destTerminal: 'Chakan Ind. Hub', destHub: 'Pune Hub', destArea: 'Chakan Industrial Area',
    checkpoint: 'Jalna Toll Gate', highway: 'Ahmednagar Bypass Point', corridor: 'Ahmednagar Bypass Transit Corridor',
    lat: 19.0948, lng: 74.748, totalKm: 610, leftKm: 214, vehicleNo: 'MH-31-AP-4819', seal: 'CRL-SEAL-77291',
    driver: 'D. Rathod', packages: '48 Units (Spares)', weight: '1,850 kg',
  },
  CRL7281044: {
    originCity: 'Nagpur, Maharashtra', originTerminal: 'Wadi Terminal', originHub: 'Nagpur Hub',
    destCity: 'Mumbai, Maharashtra', destTerminal: 'Bhiwandi Hub', destHub: 'Mumbai Hub', destArea: 'Bhiwandi Warehouse Zone',
    checkpoint: 'Nashik Toll Plaza', highway: 'Nashik Highway Point', corridor: 'Nashik Highway Corridor',
    lat: 19.9975, lng: 73.7898, totalKm: 840, leftKm: 170, vehicleNo: 'MH-40-BG-5512', seal: 'CRL-SEAL-81224',
    driver: 'S. Meshram', packages: '32 Units (Machinery Parts)', weight: '2,400 kg',
  },
  CRL9912000: {
    originCity: 'Nagpur, Maharashtra', originTerminal: 'Wadi Terminal', originHub: 'Nagpur Hub',
    destCity: 'Raipur, Chhattisgarh', destTerminal: 'Urla Hub', destHub: 'Raipur Hub', destArea: 'Urla Industrial Area',
    checkpoint: 'Durg Toll Gate', highway: 'Durg Bypass Point', corridor: 'Durg Bypass Corridor',
    lat: 21.1904, lng: 81.2849, totalKm: 290, leftKm: 38, vehicleNo: 'MH-31-CQ-2087', seal: 'CRL-SEAL-90117',
    driver: 'R. Yadav', packages: '20 Units (FMCG)', weight: '980 kg',
  },
};

export const sampleDockets = [
  { docketNo: 'CRL8492019', route: 'Nagpur → Pune' },
  { docketNo: 'CRL7281044', route: 'Wadi → Mumbai' },
  { docketNo: 'CRL9912000', route: 'Nagpur → Raipur' },
];

export function buildShipment(docketNo) {
  const d = dockets[docketNo];
  if (!d) return null;

  return {
    docketNo,
    status: 'in_transit',
    statusLabel: 'LIVE: IN TRANSIT',

    journey: {
      currentStage: 4,
      totalStages: 7,
      stages: [
        { id: 1, title: 'Booked', subtitle: 'Registered with CRL', time: '08 Oct 09:30 AM', state: 'completed' },
        { id: 2, title: 'Picked Up', subtitle: 'Consignor Dock', time: '08 Oct 11:15 AM', state: 'completed' },
        { id: 3, title: 'Origin Process', subtitle: `${d.originHub} Scaled`, time: '08 Oct 02:30 PM', state: 'completed' },
        { id: 4, title: 'In Transit', subtitle: d.highway.replace(' Point', ''), time: 'Moving Now', state: 'active' },
        { id: 5, title: 'Dest Process', subtitle: `${d.destHub} Arrival`, time: 'Expected 10 Oct', state: 'pending' },
        { id: 6, title: 'Out for Delivery', subtitle: 'Final Mile Vehicle', time: 'Scheduled', state: 'pending' },
        { id: 7, title: 'Delivered', subtitle: d.destArea.split(' ')[0] + ' Consignee', time: 'ETA: 10 Oct 04:00 PM', state: 'pending' },
      ],
    },

    timeline: [
      {
        id: 1, state: 'active', icon: 'target',
        title: `In Transit • ${d.corridor}`,
        time: '09 Oct 2026 • 01:10 PM',
        description: `Consignment rolling steadily on ${d.highway.replace(' Point', '')} toward ${d.destCity.split(',')[0]} logistics cluster. Speed: 52 km/h. Sensor telemetry nominal.`,
        meta: { lat: d.lat, lng: d.lng, driver: d.driver },
      },
      {
        id: 2, state: 'completed',
        title: `Checkpoint Clearance • ${d.checkpoint}`,
        time: '09 Oct 2026 • 05:20 AM',
        description: 'E-Way Bill validated against GST gateway. Transit clearance green-flagged with intact tamper seals.',
      },
      {
        id: 3, state: 'completed',
        title: `Line-Haul Outward Dispatch • ${d.originHub}`,
        time: '08 Oct 2026 • 07:45 PM',
        description: `Dispatched in 32ft Multi-Axle Container **Vehicle No: ${d.vehicleNo}**. Container locked with CRL security seal #${d.seal.replace('CRL-SEAL-', 'CRL-')}.`,
      },
      {
        id: 4, state: 'completed',
        title: `Origin Hub Inward • Wadi Processing Yard, ${d.originCity.split(',')[0]}`,
        time: '08 Oct 2026 • 02:30 PM',
        description: `Weighed on digital weighbridge: ${d.weight}. ${d.packages.split(' ')[0]} units verified and palletized for western transit route.`,
      },
      {
        id: 5, state: 'completed',
        title: 'Picked Up from Consignor • Wadi Industrial Area',
        time: '08 Oct 2026 • 11:15 AM',
        description: 'First-mile pickup feeder truck loaded at consignor factory loading dock. Consignment challan signed.',
      },
      {
        id: 6, state: 'completed',
        title: `Consignment Booked • CRL ${d.originCity.split(',')[0]} Central Booking Office`,
        time: '08 Oct 2026 • 09:30 AM',
        description: `Consignment registered and official docket ${docketNo} generated with system rate contract.`,
      },
      {
        id: 7, state: 'scheduled', icon: 'clock',
        title: `Scheduled: Destination Hub Inward (${d.destHub})`,
        time: 'Exp: 10 Oct 2026 • 06:00 AM',
        description: 'Line-haul deconsolidation and bay staging for industrial delivery fleet.',
      },
      {
        id: 8, state: 'scheduled', icon: 'flag',
        title: `Scheduled: Final Delivery (${d.destArea})`,
        time: 'Exp: 10 Oct 2026 • By 04:00 PM',
        description: 'Direct gate entry delivery and receiver physical stamp verification.',
      },
    ],

    specifications: {
      lrNumber: docketNo,
      bookingDate: '08 Oct 2026',
      origin: { city: d.originCity, terminal: d.originTerminal },
      destination: { city: d.destCity, terminal: d.destTerminal },
      transportMode: 'PTL / FTL Industrial Cargo',
      packageCount: d.packages,
      grossWeight: d.weight,
      currentHighwayTag: d.highway,
      estimatedDelivery: '10 Oct 2026 • 04:00 PM',
      podStatus: 'Pending Delivery',
      note: 'All fields connected directly to CRL Transportation Management System (TMS) live feeds.',
    },

    telematics: {
      vehicleNo: d.vehicleNo,
      vehicleNote: 'CRL Verified Container • Dual Driver',
      engineHealth: 'Optimal (98%)',
      gpsStatus: 'Active Locked',
      sealNumber: d.seal,
      controllerPhone: '+91 7499358403',
    },

    route: {
      currentPoint: d.highway,
      totalKm: d.totalKm,
      remainingKm: d.leftKm,
      lat: d.lat,
      lng: d.lng,
    },
  };
}

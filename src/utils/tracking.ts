import type { ShipmentStatus } from '../types/tracking';

/**
 * Set this to CRL's tracking endpoint to enable live tracking.
 * Expected response shape: ShipmentStatus (see types/tracking.ts).
 */
export const TRACKING_API_URL = '';

export const trackingStages = ['Booked', 'In transit', 'Out for delivery', 'Delivered'];

export async function fetchShipmentStatus(lrNumber: string): Promise<ShipmentStatus> {
  if (TRACKING_API_URL) {
    const res = await fetch(`${TRACKING_API_URL}?lr=${encodeURIComponent(lrNumber)}`);
    if (!res.ok) {
      throw new Error('We couldn’t find that shipment. Check the number and try again.');
    }
    return (await res.json()) as ShipmentStatus;
  }

  await new Promise((resolve) => setTimeout(resolve, 900));
  return {
    lrNumber,
    origin: 'Nagpur',
    destination: 'Amravati',
    currentStatus: 'In transit',
    stage: 1,
    expectedDelivery: 'Next day',
    podStatus: 'Pending',
    isDemo: true
  };
}
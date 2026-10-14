import { buildShipment } from '../data/trackShipmentMock';

/**
 * Set VITE_TRACKING_API_URL in .env to switch from mock data to the real backend.
 *
 *   GET {VITE_TRACKING_API_URL}?docket=CRL8492019
 *   200 -> JSON in the shape produced by buildShipment() (data/trackShipmentMock.js)
 *   404 -> shipment not found
 */
const API_URL = import.meta.env.VITE_TRACKING_API_URL;

export class ShipmentNotFoundError extends Error {}

export async function fetchShipment(docketNo) {
  if (API_URL) {
    const res = await fetch(`${API_URL}?docket=${encodeURIComponent(docketNo)}`);
    if (res.status === 404) throw new ShipmentNotFoundError();
    if (!res.ok) throw new Error('Tracking service error');
    return res.json();
  }

  // ---- mock fallback (frontend development only) ----
  await new Promise((resolve) => setTimeout(resolve, 900));
  const data = buildShipment(docketNo);
  if (!data) throw new ShipmentNotFoundError();
  return data;
}

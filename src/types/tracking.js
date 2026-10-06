/**
 * @typedef {Object} ShipmentStatus
 * @property {string} lrNumber
 * @property {string} origin
 * @property {string} destination
 * @property {string} currentStatus
 * @property {number} stage
 * @property {string} expectedDelivery
 * @property {string} podStatus
 * @property {boolean} isDemo
 *
 * @typedef {{status: 'idle'} | {status: 'loading'} | {status: 'error', error: string} | {status: 'success', data: ShipmentStatus}} TrackingState
 */
export {};

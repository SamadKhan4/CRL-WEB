
const DEFAULT_API_BASE_URL = '/api';

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL
).replace(/\/+$/, '');

const text = (value) =>
  typeof value === 'string' ? value.trim() : '';

export function validateLR(value) {
  const normalized = String(value ?? '').trim().toUpperCase();

  if (normalized.length < 5 || normalized.length > 50) {
    return 'Please enter an LR number between 5 and 50 characters.';
  }

  if (!/^[A-Z0-9][A-Z0-9/._-]*$/.test(normalized)) {
    return 'Use only letters, numbers, /, ., _ or - in the LR number.';
  }

  return '';
}

export class TrackingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TrackingError';
  }
}

export function normalizeTracking(payload) {
  const data = payload?.data;

  if (
    payload?.success !== true ||
    !data ||
    !text(data.lrNumber) ||
    !text(data.status)
  ) {
    throw new TrackingError(
      'Tracking service returned an unexpected response. Please try again.'
    );
  }

  return {
    lrNumber: text(data.lrNumber),
    podAvailable: data.podAvailable === true,
    status: text(data.status),
    statusLabel: text(data.statusLabel) || text(data.status),
    lrUploadEligible: data.lrUploadEligible === true,
    origin: text(data.origin),
    destination: text(data.destination),
    currentLocation: text(data.currentLocation),
    bookingDate: text(data.bookingDate),

    transportMode: text(data.transportMode),
    packageCount: Number.isFinite(data.packageCount) ? data.packageCount : null,
    grossWeightKg: Number.isFinite(data.grossWeightKg) ? data.grossWeightKg : null,
    chargeableWeightKg: Number.isFinite(data.chargeableWeightKg) ? data.chargeableWeightKg : null,
    vehicleNumber: text(data.vehicleNumber),
    vehicleType: text(data.vehicleType),
    vehicleCapacityKg: Number.isFinite(data.vehicleCapacityKg) ? data.vehicleCapacityKg : null,
    driverName: text(data.driverName),
    sealNumber: text(data.sealNumber),
    trackingHistory: Array.isArray(data.trackingHistory)
      ? data.trackingHistory
          .filter((event) => event && text(event.status))
          .map((event) => ({
            id: text(event.id),
            status: text(event.status),
            location: text(event.location),
            timestamp: text(event.timestamp),
          }))
      : [],
  };
}

export async function trackShipment(lrNumber, { signal } = {}) {
  const validation = validateLR(lrNumber);

  if (validation) {
    throw new TrackingError(validation);
  }

  const normalized = String(lrNumber).trim().toUpperCase();
  const controller = new AbortController();

  let timedOut = false;
  let abortHandler;

  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, 12000);

  if (signal) {
    abortHandler = () => controller.abort();

    if (signal.aborted) {
      clearTimeout(timer);
      throw new DOMException('Request aborted.', 'AbortError');
    }

    signal.addEventListener('abort', abortHandler, { once: true });
  }

  try {
   

const normalized = lrNumber.trim().toUpperCase();

const response = await fetch(
  `${API_BASE_URL}/public/track/${encodeURIComponent(normalized)}`,
  {
    method: 'GET',
    signal: controller.signal,
    credentials: 'omit',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  }
);



    if (!response.ok) {
      const messages = {
        400: 'Please check the LR number and try again.',
        401: 'You are not authorized to access tracking information.',
        403: 'Access to tracking information is forbidden.',
        404: "We couldn't find tracking information for this LR number. Please check it and try again.",
        429: 'Too many tracking requests. Please wait a moment and try again.',
        500: 'Tracking service encountered an error. Please try again later.',
        502: 'Tracking service is temporarily unavailable. Please try again later.',
        503: 'Tracking service is temporarily unavailable. Please try again later.',
        504: 'Tracking request timed out. Please try again.',
      };

      let serverMessage = '';

      try {
        const body = await response.json();

        if (typeof body?.message === 'string') {
          serverMessage = body.message.trim();
        }
      } catch {
        // Use the fallback message when the response isn't JSON.
      }

      throw new TrackingError(
        messages[response.status] ||
          serverMessage ||
          'Unable to retrieve tracking information. Please try again.'
      );
    }

    let payload;

    try {
      payload = await response.json();
    } catch {
      throw new TrackingError(
        'Tracking service returned an unexpected response. Please try again.'
      );
    }

    return normalizeTracking(payload);
  } catch (error) {
    if (timedOut) {
      throw new TrackingError(
        'Tracking request timed out. Please try again.'
      );
    }

    if (signal?.aborted) {
      throw error;
    }

    if (error instanceof TrackingError) {
      throw error;
    }

    if (error?.name === 'AbortError') {
      throw error;
    }

    throw new TrackingError(
      'Unable to connect to the tracking service. Please try again.'
    );
  } finally {
    clearTimeout(timer);

    if (signal && abortHandler) {
      signal.removeEventListener('abort', abortHandler);
    }
  }
}

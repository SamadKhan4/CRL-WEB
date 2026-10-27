
import { useCallback, useRef, useState } from 'react';

import {
  trackShipment as fetchShipment,
  TrackingError,
} from '../services/trackShipment';

const initialState = {
  status: 'idle',
  data: null,
  error: '',
};

const STATUS_LABELS = {
  BOOKED: 'Booked',
  SORTED: 'Sorted at Hub',
  LOADING_TALLY_COMPLETED: 'Loading Tally Completed',
  MANIFEST_LOCKED: 'Manifest Locked',
  IN_TRANSIT: 'In Transit',
  ARRIVED_AT_DESTINATION: 'Arrived at Destination',
  OUT_FOR_DELIVERY: 'Out for Delivery',
  DELIVERED: 'Delivered',
};

const STAGES = [
  { id: 1, title: 'Booked', statuses: ['BOOKED'] },
  { id: 2, title: 'Sorted', statuses: ['SORTED'] },
  {
    id: 3,
    title: 'Loading Tally',
    statuses: ['LOADING_TALLY_COMPLETED'],
  },
  {
    id: 4,
    title: 'Manifest Locked',
    statuses: ['MANIFEST_LOCKED'],
  },
  { id: 5, title: 'In Transit', statuses: ['IN_TRANSIT'] },
  {
    id: 6,
    title: 'At Destination',
    statuses: ['ARRIVED_AT_DESTINATION', 'OUT_FOR_DELIVERY'],
  },
  { id: 7, title: 'Delivered', statuses: ['DELIVERED'] },
];

const text = (value, fallback = 'Unavailable') => {
  if (typeof value !== 'string' || !value.trim()) {
    return fallback;
  }

  return value.trim();
};

const formatDate = (value) => {
  if (!value) return 'Unavailable';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const statusLabel = (status) => {
  if (!status) return 'Unknown Status';

  return (
    STATUS_LABELS[status] ||
    String(status)
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
};

const getStageNumber = (status) => {
  return STAGES.find((stage) => stage.statuses.includes(status))?.id ?? 0;
};

const getJourney = (result, history) => {
  const latestEvent = history.reduce((latest, event) => {
    const currentTime = Date.parse(event.timestamp || '');
    const latestTime = Date.parse(latest?.timestamp || '');

    if (!latest) return event;

    if (
      Number.isFinite(currentTime) &&
      (!Number.isFinite(latestTime) || currentTime > latestTime)
    ) {
      return event;
    }

    return latest;
  }, null);

  const apiStage = getStageNumber(result.status);
  const historyStage = getStageNumber(latestEvent?.status);

  // Prefer the furthest known stage so an older API status
  // doesn't move the journey backwards.
  const currentStage = Math.max(apiStage, historyStage, 1);

  return {
    totalStages: STAGES.length,
    currentStage,
    stages: STAGES.map((stage) => {
      const event = [...history]
        .reverse()
        .find((item) => stage.statuses.includes(item.status));

      let state = 'pending';

      if (stage.id < currentStage) {
        state = 'completed';
      } else if (stage.id === currentStage) {
        state = 'active';
      }

      return {
        id: stage.id,
        title: stage.title,
        subtitle:
          text(event?.location, '') ||
          (stage.id === 1
            ? text(result.origin)
            : state === 'pending'
              ? 'Awaiting update'
              : 'Location not provided'),
        time: event ? formatDate(event.timestamp) : '—',
        state,
      };
    }),
  };
};

const getTimeline = (history) => {
  const sortedHistory = [...history].sort((a, b) => {
    const timeA = Date.parse(a.timestamp || '');
    const timeB = Date.parse(b.timestamp || '');

    if (!Number.isFinite(timeA)) return 1;
    if (!Number.isFinite(timeB)) return -1;

    return timeB - timeA;
  });

  return sortedHistory.map((event, index) => ({
    id:
      event.id ||
      `${event.status}-${event.timestamp || 'no-time'}-${index}`,
    title: statusLabel(event.status),
    time: formatDate(event.timestamp),
    description: event.location
      ? `Shipment update recorded at ${event.location}.`
      : 'Shipment status update recorded.',
    state: index === 0 ? 'active' : 'completed',
    meta: null,
  }));
};

const getSpecifications = (result) => ({
  lrNumber: result.lrNumber,
  bookingDate: formatDate(result.bookingDate),
  origin: {
    city: text(result.origin),
    terminal: 'Not provided by tracking service',
  },
  destination: {
    city: text(result.destination),
    terminal: 'Not provided by tracking service',
  },
  transportMode: result.transportMode || 'Not provided',
  packageCount: result.packageCount ?? 'Not provided',
  grossWeight: result.grossWeightKg != null ? `${result.grossWeightKg} kg` : 'Not provided',
  chargeableWeight: result.chargeableWeightKg != null ? `${result.chargeableWeightKg} kg` : 'Not provided',
  estimatedDelivery: result.expectedDeliveryDate
    ? formatDate(result.expectedDeliveryDate)
    : 'Not provided by tracking service',
  podStatus:
    result.status === 'DELIVERED'
      ? 'Delivery status recorded; POD document not provided'
      : 'Not confirmed',
  note: '',
});

const getTelematics = (result) => ({
  vehicleNo: result.vehicleNumber || 'Not provided',
  vehicleType: result.vehicleType,
  driverName: result.driverName,
  driverMobile: result.driverMobile,
  vehicleNote: text(result.currentLocation),
  engineHealth: 'Not provided by tracking service',
  gpsStatus: 'GPS coordinates not provided',
  sealNumber: result.sealNumber || 'Not provided',
  controllerPhone: '',
});

const getRoute = (result) => ({
  lat: null,
  lng: null,
  currentPoint: text(result.currentLocation),
  totalKm: '—',
  remainingKm: '—',
});

export function useTrackShipment() {
  const [state, setState] = useState(initialState);
  const controllerRef = useRef(null);

  const track = useCallback(async (input) => {
    const docketNo = String(input ?? '').trim().toUpperCase();

    if (!docketNo) {
      setState({
        status: 'error',
        data: null,
        error: 'Please enter your LR / Docket number.',
      });
      return;
    }

    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    setState({
      status: 'loading',
      data: null,
      error: '',
    });

    try {
      const result = await fetchShipment(docketNo, {
        signal: controller.signal,
      });

      if (controller.signal.aborted) return;

      const history = Array.isArray(result.trackingHistory)
        ? result.trackingHistory
        : [];

      const latestEvent = history.reduce((latest, event) => {
        if (!latest) return event;

        const currentTime = Date.parse(event.timestamp || '');
        const latestTime = Date.parse(latest.timestamp || '');

        if (
          Number.isFinite(currentTime) &&
          (!Number.isFinite(latestTime) || currentTime > latestTime)
        ) {
          return event;
        }

        return latest;
      }, null);

      const data = {
        ...result,
        docketNo: result.lrNumber,
        statusLabel: statusLabel(result.status),
        journey: getJourney(result, history),
        timeline: getTimeline(history),
        specifications: getSpecifications(result),
        telematics: getTelematics(result),
        route: getRoute(result),
        latestEvent,
      };

      setState({
        status: 'success',
        data,
        error: '',
      });
    } catch (error) {
      if (controller.signal.aborted) return;

      console.error('[tracking] request failed:', error);

      setState({
        status: 'error',
        data: null,
        error:
          error instanceof TrackingError
            ? error.message
            : 'Tracking is unavailable right now. Please try again in a moment.',
      });
    } finally {
      if (controllerRef.current === controller) {
        controllerRef.current = null;
      }
    }
  }, []);

  const reset = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setState(initialState);
  }, []);

  return {
    state,
    track,
    reset,
  };
}

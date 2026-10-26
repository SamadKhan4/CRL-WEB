
import { useCallback } from 'react';
import { useTrackShipment } from './useTrackShipment';

export function useShipmentTracking() {
  const {
    state: originalState,
    track: originalTrack,
    reset: originalReset,
  } = useTrackShipment();

  const track = useCallback(
    (lrNumber) => originalTrack(lrNumber),
    [originalTrack],
  );

  const reset = useCallback(() => {
    originalReset();
  }, [originalReset]);

  const data = originalState.data;

  const state = {
    status: originalState.status,
    error: originalState.error || '',
    data: data
      ? {
          ...data,
          expectedDelivery:
            data.expectedDeliveryDate || 'Unavailable',
          podStatus:
            data.specifications?.podStatus || 'Not confirmed',
          stage: Math.max(
            0,
            (data.journey?.currentStage || 1) - 1,
          ),
          isDemo: false,
        }
      : null,
  };

  return { state, track, reset };
}

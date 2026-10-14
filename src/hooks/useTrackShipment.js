import { useCallback, useState } from 'react';
import { fetchShipment, ShipmentNotFoundError } from '../services/trackShipment';

// status: idle | loading | success | error
export function useTrackShipment() {
  const [state, setState] = useState({ status: 'idle', data: null, error: '' });

  const track = useCallback(async (input) => {
    const docketNo = input.trim().toUpperCase();

    if (!docketNo) {
      setState({ status: 'error', data: null, error: 'Please enter your LR / Docket number.' });
      return;
    }
    if (!/^[A-Z0-9-]{4,20}$/.test(docketNo)) {
      setState({ status: 'error', data: null, error: 'LR / Docket numbers contain 4–20 letters or digits.' });
      return;
    }

    setState({ status: 'loading', data: null, error: '' });
    try {
      const data = await fetchShipment(docketNo);
      setState({ status: 'success', data, error: '' });
    } catch (err) {
      setState({
        status: 'error',
        data: null,
        error:
          err instanceof ShipmentNotFoundError
            ? 'We couldn’t find a shipment with that number. Please check and try again.'
            : 'Tracking is unavailable right now. Please try again in a moment.',
      });
    }
  }, []);

  const reset = useCallback(() => setState({ status: 'idle', data: null, error: '' }), []);

  return { state, track, reset };
}

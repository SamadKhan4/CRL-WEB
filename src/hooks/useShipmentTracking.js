import { useCallback, useState } from 'react';
import { fetchShipmentStatus } from '../utils/tracking';
export function useShipmentTracking() {
    const [state, setState] = useState({ status: 'idle' });
    const track = useCallback(async (input) => {
        const value = input.trim().toUpperCase();
        if (!value) {
            setState({ status: 'error', error: 'Enter your LR / Docket number to track your shipment.' });
            return;
        }
        if (!/^[A-Z0-9-]{4,20}$/.test(value)) {
            setState({ status: 'error', error: 'LR / Docket numbers contain 4–20 letters or digits.' });
            return;
        }
        setState({ status: 'loading' });
        try {
            const data = await fetchShipmentStatus(value);
            setState({ status: 'success', data });
        }
        catch (err) {
            setState({
                status: 'error',
                error: err instanceof Error ? err.message : 'Tracking is unavailable right now. Please try again.'
            });
        }
    }, []);
    const reset = useCallback(() => setState({ status: 'idle' }), []);
    return { state, track, reset };
}

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2Icon, AlertCircleIcon, InfoIcon, XIcon } from 'lucide-react';
import { useShipmentTracking } from '../../../hooks/useShipmentTracking';
import { trackingStages } from '../../../utils/tracking';
import { easeOut } from '../../../utils/motion';
export function TrackingPanel() {
    const [lr, setLr] = useState('');
    const { state, track, reset } = useShipmentTracking();
    const onSubmit = (e) => {
        e.preventDefault();
        track(lr);
    };
    return (<div id="track" className="hero-tracking">
      <div className="hero-tracking__container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7, ease: easeOut }} className="hero-tracking__card">
          
          <div className="hero-tracking__row">
            <div className="hero-tracking__intro">
              <h2 className="hero-tracking__title">
                Track Your Shipment
              </h2>
              <p className="hero-tracking__subtitle">Stay updated at every movement.</p>
            </div>
            <form onSubmit={onSubmit} className="hero-tracking__form" noValidate>
              <label htmlFor="lr-number" className="sr-only">
                LR / Docket Number
              </label>
              <div className="relative flex-1">
                <input id="lr-number" value={lr} onChange={(e) => setLr(e.target.value)} placeholder="Enter LR Number" autoComplete="off" aria-invalid={state.status === 'error'} aria-describedby="tracking-feedback" className="hero-tracking__input"/>
                
              </div>
              <button type="submit" disabled={state.status === 'loading'} className="hero-tracking__submit">
                
                {state.status === 'loading' ?
            <>
                    <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true"/>
                    Tracking…
                  </> :
            'Track Shipment'}
              </button>
            </form>
          </div>

          <div id="tracking-feedback" aria-live="polite">
            <AnimatePresence mode="wait">
              {state.status === 'error' &&
            <motion.p key="error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="mt-5 flex items-center gap-2 text-sm font-medium text-crl">
                
                  <AlertCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true"/>
                  {state.error}
                </motion.p>}
              {state.status === 'success' &&
            <motion.div key="result" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: easeOut }} className="mt-7 border-t border-line pt-7">
                
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <dl className="grid flex-1 grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-5">
                      {[
                    ['LR / Docket', state.data.lrNumber],
                    ['Origin', state.data.origin],
                    ['Destination', state.data.destination],
                    ['Expected', state.data.expectedDelivery],
                    ['POD', state.data.podStatus]
                ].
                    map(([k, v]) => <div key={k}>
                          <dt className="text-xs font-medium text-body">{k}</dt>
                          <dd className="mt-1 truncate font-display text-[15px] font-bold text-ink">{v}</dd>
                        </div>)}
                    </dl>
                    <button type="button" onClick={() => {
                    reset();
                    setLr('');
                }} className="flex h-9 w-9 items-center justify-center rounded-md text-body hover:bg-off hover:text-ink" aria-label="Clear tracking result">
                    
                      <XIcon className="h-4 w-4" aria-hidden="true"/>
                    </button>
                  </div>
                  <ol className="mt-6 grid grid-cols-4 gap-2" aria-label="Shipment progress">
                    {trackingStages.map((stage, i) => {
                    const done = i <= state.data.stage;
                    return (<li key={stage}>
                          <span className={`block h-1 rounded-full ${done ? 'bg-crl' : 'bg-line'}`}/>
                          <span className={`mt-2 block text-xs font-medium sm:text-sm ${done ? 'text-ink' : 'text-body'}`}>
                            {stage}
                          </span>
                        </li>);
                })}
                  </ol>
                  {state.data.isDemo &&
                    <p className="mt-5 flex items-center gap-2 text-xs text-body">
                      <InfoIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true"/>
                      Sample result for preview — live status appears once CRL’s tracking system is connected.
                    </p>}
                </motion.div>}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>);
}

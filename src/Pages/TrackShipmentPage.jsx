import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { TrackHero } from '../components/Track/TrackHero';
import { TrackSearchCard } from '../components/Track/TrackSearchCard';
import { TrackResults } from '../components/Track/TrackResults';
import { useTrackShipment } from '../hooks/useTrackShipment';

export function TrackShipmentPage() {
  const [docket, setDocket] = useState('');
  const { state, track, reset } = useTrackShipment();
  const resultsRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    track(docket);
  };

  const handleClear = () => {
    setDocket('');
    reset();
  };

  // bring the results into view once the data has arrived
  useEffect(() => {
    if (state.status === 'success') {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [state.status]);

  const badge =
    state.status === 'success' ? state.data.statusLabel : 'LIVE TRACKING';

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-[#F6F7F9]">
        <Header forceSolid />

        <main id="main" className="pb-[5vw] pt-[8.5vw] max-lg:pb-14 max-lg:pt-28">
          <section className="mx-auto w-[88vw] rounded-[0.6vw] bg-white px-[2vw] pb-[3.5vw] pt-[3vw] max-lg:w-[94vw] max-lg:rounded-xl max-lg:px-4 max-lg:pb-10 max-lg:pt-10">
            <TrackHero />
            <TrackSearchCard
              value={docket}
              onChange={setDocket}
              onSubmit={handleSubmit}
              onClear={handleClear}
              onSample={setDocket}
              loading={state.status === 'loading'}
              error={state.status === 'error' ? state.error : ''}
              badge={badge}
            />
          </section>

          <AnimatePresence>
            {state.status === 'success' && (
              <motion.div
                key={state.data.docketNo}
                ref={resultsRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-[2vw] scroll-mt-[7vw] max-lg:mt-6 max-lg:scroll-mt-24"
              >
                <TrackResults shipment={state.data} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

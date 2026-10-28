
import React from 'react';
import { API_BASE_URL } from '../../services/trackShipment';

import { JourneyStepper } from './JourneyStepper';
import { MovementTimeline } from './MovementTimeline';
import { ShipmentSpecs } from './ShipmentSpecs';
import { FleetTelematics } from './FleetTelematics';
import { RouteMapCard } from './RouteMapCard';

export function TrackResults({ shipment }) {
  if (!shipment) {
    return null;
  }

  return (
    <div
      className="
        mx-auto w-[83vw] space-y-[1.75vw]
        max-lg:w-[92vw] max-lg:space-y-5
        max-md:w-[calc(100%-32px)]
      "
    >
      {shipment.podAvailable && <div className="rounded-xl bg-white p-5 shadow-sm"><p className="mb-3 text-sm text-slate-600">Proof of delivery is available for your shipment.</p><a className="inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white" href={`${API_BASE_URL}/public/track/${encodeURIComponent(shipment.lrNumber)}/pod`} download>Download POD</a></div>}
      <JourneyStepper
        journey={shipment.journey}
      />

      <div className="grid grid-cols-[minmax(0,2.15fr)_minmax(0,1fr)] items-start gap-[1.75vw] max-lg:grid-cols-1 max-lg:gap-5">
        <MovementTimeline
          timeline={shipment.timeline}
        />

        <div className="space-y-[1.75vw] max-lg:space-y-5">
          <ShipmentSpecs
            specs={shipment.specifications}
          />

          <FleetTelematics
            telematics={shipment.telematics}
          />

          <RouteMapCard
            route={shipment.route}
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { AboutUs } from './Pages/AboutUs';
import { NetworkPage } from './Pages/NetworkPage';
import { PartTruckLoadPage } from './Pages/services/PartTruckLoadPage';
import { FullTruckLoadPage } from './Pages/services/FullTruckLoadPage';
import { PackersMoversPage } from './Pages/services/PackersMoversPage';
import { DoorPickupDeliveryPage } from './Pages/services/DoorPickupDeliveryPage';
import { HubToHubConnectivityPage } from './Pages/services/HubToHubConnectivityPage';
import { MultimodeTransportationPage } from './Pages/services/MultimodeTransportationPage';
import { ContactPage } from './Pages/ContactPage';
import { TrackShipmentPage } from './Pages/TrackShipmentPage';
import { RequestQuotePage } from './Pages/RequestQuotePage';
export function App({ showPlaceholders = true }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage showPlaceholders={showPlaceholders} />}
        />

        <Route
          path="/about-us"
          element={<AboutUs />}
        />

        <Route
          path="/network"
          element={<NetworkPage />}
        />

        <Route
          path="/services/part-truck-load"
          element={<PartTruckLoadPage />}
        />
        <Route
          path="/services/full-truck-load"
          element={<FullTruckLoadPage />}
          />
           <Route
          path="/services/packers-movers"
          element={<PackersMoversPage />}
          />
           <Route
          path="/services/door-pickup-delivery"
          element={<DoorPickupDeliveryPage />}
          />

        <Route
          path="/services/hub-to-hub-connectivity"
          element={<HubToHubConnectivityPage />}
        />

        <Route
          path="/services/multimode-transportation"
          element={<MultimodeTransportationPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/track-shipment"
          element={<TrackShipmentPage />}
        />
         <Route 
         path="/request-quote" 
         element={<RequestQuotePage />} />

      </Routes>
    </BrowserRouter>
  );
}
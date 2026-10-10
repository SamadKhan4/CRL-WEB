import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { AboutUs } from './Pages/AboutUs';
import { NetworkPage } from './Pages/NetworkPage';

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
      </Routes>
    </BrowserRouter>
  );
}
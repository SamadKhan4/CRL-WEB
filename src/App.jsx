import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { AboutUs } from './Pages/AboutUs';

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
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react';
import { HomePage } from './Pages/HomePage';

export function App({ showPlaceholders = true }) {
    return <HomePage showPlaceholders={showPlaceholders} />;
}

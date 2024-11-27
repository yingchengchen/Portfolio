import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));  // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
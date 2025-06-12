import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './font/TechnoTech-K7VzX.ttf'
import './font/Godshomedemo-K794e.ttf'

const root = createRoot(document.getElementById('root'));  // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
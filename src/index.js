import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './font/AnkhSanctuary-PVK0B.ttf'
import './font/CoffeeHealing-1GrKe.ttf'
import './font//HollowCartoonlings-45Jp.ttf'
import './font/NightPumpkind-1GpGv.ttf'
import './font/EngineerHand-l780.ttf'
import './font/Seasideresortnf-popd.ttf'
import './font/TechnoTech-K7VzX.ttf'
import './font/Godshomedemo-K794e.ttf'

const root = createRoot(document.getElementById('root'));  // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
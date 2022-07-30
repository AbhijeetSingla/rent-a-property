import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PropertyProvider } from './Context/PropertiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropertyProvider>
      <App />
    </PropertyProvider>
    
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ToggleContextProvider from './components/context/toggleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </React.StrictMode>
)

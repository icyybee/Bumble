import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contexts/userContext';
import { DarkModeProvider } from './contexts/darkModeContext';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'boxicons';
import WrapContexts from './context/WrapperContext.jsx';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <WrapContexts>
        <App />
      </WrapContexts>
    </CookiesProvider>
  </React.StrictMode>
);

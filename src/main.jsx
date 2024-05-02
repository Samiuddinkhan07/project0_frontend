import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'boxicons';
import WrapContexts from './context/WrapperContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrapContexts>
    <App />
    </WrapContexts>
  </React.StrictMode>,
)

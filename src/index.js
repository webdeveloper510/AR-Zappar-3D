import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ContextProvider from './components/ContextStore/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <ContextProvider>
  <HashRouter hashType="noslash">
    <App />
  </HashRouter>
  </ContextProvider>
  </React.StrictMode>
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ContextProvider from './components/ContextStore/ContextApi';
import store from './components/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
     <Provider store={store}>
  <ContextProvider>
  <HashRouter hashType="noslash">
    <App />
  </HashRouter>
  </ContextProvider>
  </Provider>
  </React.StrictMode>
);
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' */
import { /* createBrowserRouter,*/ RouterProvider,  BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store , persistor } from './store/index.js'
import Router from './components/Router.js';
/* import Router from '../components/Router.tsx'; */


/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
) */

  ReactDOM.createRoot(document.getElementById('root') ?? document.body).render(
    <React.StrictMode>
       <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={Router} />
      </PersistGate>
    </Provider>
    </React.StrictMode>
  )

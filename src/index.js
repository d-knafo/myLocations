import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './redux/store'
import App from './containers/app'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';

import 'sanitize.css/sanitize.css'
import './index.css'
let { store, persistor } = configureStore()

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <App />
          <ToastContainer />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  target
)

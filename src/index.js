import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router}  from 'react-router-dom';
import store from './redux/store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  target
)

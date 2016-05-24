import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from '../modules/routes'
import { Provider } from 'react-redux'
import store, { history } from './store'

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)


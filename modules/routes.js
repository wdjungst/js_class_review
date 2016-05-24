import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import About from './components/About'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

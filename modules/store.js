import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'

const defaultState = {
  tweets: [
    {
      id: 1,
      tweet: 'Hello World',
      author: 'Dave'
    },
    {
      id: 2,
      tweet: 'Try Redux',
      author: 'Dan'
    },
    {
      id: 3,
      tweet: 'Polymer or bust',
      author: 'Google Devs'
    }
  ]
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store


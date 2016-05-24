import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tweets from './tweets'

const rootReducer = combineReducers({
  tweets,
  routing: routerReducer
})

export default rootReducer


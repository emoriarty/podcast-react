import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { provider } from './provider.reducer'
import { translations } from './translations.reducer'
import { notification } from './notification.reducer'

const AppReducers = combineReducers({
  provider,
  translations,
  notification,
  routing: routerReducer
})

export default AppReducers

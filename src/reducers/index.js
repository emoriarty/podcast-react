import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { provider } from './provider.reducer'
import { translations } from './translations.reducer'
import { notification } from './notification.reducer'
import { country } from './storage.reducer'
import { topPodcasts } from './podcasts.reducer'

const AppReducers = combineReducers({
  provider,
  translations,
  notification,
  country,
  topPodcasts, 
  routing: routerReducer
})

export default AppReducers

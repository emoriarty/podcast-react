import { combineReducers } from 'redux'
import { provider } from './provider.reducer'
import { translations } from './translations.reducer'
import { notification } from './notification.reducer'

const AppReducers = combineReducers({
  provider,
  translations,
  notification
})

export default AppReducers

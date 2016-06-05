import { combineReducers } from 'redux'
import { InitApp } from './InitApp'
import notificationReducer from '../notifications/reducers/notification.reducer'

const AppReducers = combineReducers({
  coreData: InitApp,
  notification: notificationReducer
})

export default AppReducers

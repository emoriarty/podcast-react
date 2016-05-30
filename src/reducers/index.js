import { combineReducers } from 'redux'
import { InitApp } from './InitApp'

const AppReducers = combineReducers({
  coreData: InitApp
})

export default AppReducers

import { combineReducers } from 'redux'
import { InitApp } from './InitApp'
import { ShowError } from './Errors'

const AppReducers = combineReducers({
  coreData: InitApp,
  errors: ShowError
})

export default AppReducers

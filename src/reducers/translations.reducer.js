import {
  REQUEST_TRANSLATIONS,
  RECEIVE_TRANSLATIONS,
  ERROR_TRANSLATIONS
} from '../actions/types/translation.types'

const initialState = {
  ready: false,
  loading: false,
  fail: false
}

function checkFetchActions(state, action) {
  switch(action.type) {
    case REQUEST_TRANSLATIONS:
      return {
        ...state,
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_TRANSLATIONS:
      return {
        ...state,
        ready: true,
        loading: false,
        fail: false,
        ...action.data
      }
    case ERROR_TRANSLATIONS:
      return {
        ...state,
        ready: false,
        loading: false,
        fail: true
      }
  }
}

export const translations = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_TRANSLATIONS:
    case RECEIVE_TRANSLATIONS:
    case ERROR_TRANSLATIONS:
      return checkFetchActions(state, action)
    default:
      return state
  }
}


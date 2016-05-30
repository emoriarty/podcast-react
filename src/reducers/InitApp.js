import {
  REQUEST_INITIAL_DATA,
  RECEIVE_INITIAL_DATA, ERROR_INITIAL_DATA
} from '../actions/InitApp'


const initialState = {
  ready: false,
  loading: false,
  data: {}
}


function initData(state = initialState, action) {
  switch(action.type) {
    case REQUEST_INITIAL_DATA:
      return { ...state, loading: true }
    case RECEIVE_INITIAL_DATA:
      return { ...state, ready: true, loading: false }
    case ERROR_INITIAL_DATA:
      return { ...state, ready: false, loading: false }
  }
}

export const InitApp = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_INITIAL_DATA:
    case RECEIVE_INITIAL_DATA:
    case ERROR_INITIAL_DATA:
      return initData()
    default:
      return state
  }
}


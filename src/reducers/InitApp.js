import {
  REQUEST_INITIAL_DATA,
  RECEIVE_INITIAL_DATA,
  ERROR_INITIAL_DATA
} from '../actions/InitApp'


const initialState = {
  ready: false,
  loading: false,
  data: {}
}


function initData(state = initialState, action) {
  switch(action.type) {
    case REQUEST_INITIAL_DATA:
      return { ...state,
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_INITIAL_DATA:
      return { ...state,
        ready: true,
        loading: false,
        fail: false,
        commons: action.data.commons,
        countries: action.data.countries
      }
    case ERROR_INITIAL_DATA:
      return { ...state,
        ready: false,
        loading: false,
        fail: true
      }
  }
}

export const InitApp = (state = {}, action) => {
  switch(action.type) {
    case REQUEST_INITIAL_DATA:
    case RECEIVE_INITIAL_DATA:
    case ERROR_INITIAL_DATA:
      return initData(state, action)
    default:
      return state
  }
}


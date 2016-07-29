import {REQUEST_PROVIDER,RECEIVE_PROVIDER,ERROR_PROVIDER} from '../actions/const'


const initialState = {
  ready: false,
  loading: false,
  fail: false
}


function initData(state, action) {
  switch(action.type) {
    case REQUEST_PROVIDER:
      return { ...state,
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_PROVIDER:
      return { ...state,
        ready: true,
        loading: false,
        fail: false,
        data: action.data
      }
    case ERROR_PROVIDER:
      return { ...state,
        ready: false,
        loading: false,
        fail: true
      }
  }
}

module.exports = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_PROVIDER:
    case RECEIVE_PROVIDER:
    case ERROR_PROVIDER:
      return initData(state, action)
    default:
      return state
  }
}

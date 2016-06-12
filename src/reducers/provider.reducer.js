import {
  REQUEST_PROVIDER_DATA,
  RECEIVE_PROVIDER_DATA,
  ERROR_PROVIDER_DATA
} from '../actions/types/provider.types'


const initialState = {
  ready: false,
  loading: false
}


function initData(state, action) {
  switch(action.type) {
    case REQUEST_PROVIDER_DATA:
      return { ...state,
        ready: false,
        loading: true,
        fail: false
      }
    case RECEIVE_PROVIDER_DATA:
      return { ...state,
        ready: true,
        loading: false,
        fail: false,
        ...action.data
      }
    case ERROR_PROVIDER_DATA:
      return { ...state,
        ready: false,
        loading: false,
        fail: true
      }
  }
}

export const provider = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_PROVIDER_DATA:
    case RECEIVE_PROVIDER_DATA:
    case ERROR_PROVIDER_DATA:
      return initData(state, action)
    default:
      return state
  }
}


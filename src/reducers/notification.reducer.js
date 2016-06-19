import {
  ALERT__SHOW
} from '../actions/types/notification.types'

const initialState = {}

export const notification = (state = initialState, action) => {
  switch (action.type) {
  case ALERT__SHOW:
    return {
      ...state,
      alert: {
        ...action.alert
      }
    }
  default:
    return state
  }
}

import {
  ALERT__HIDE,
  ALERT__SHOW
} from '../actions/types/notification.types'

const initialState = {}

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
  case ALERT__SHOW:
    return {
      alert: {
        ...state,
        ...action.alert
      }
    }
  default:
    return state
  }
}

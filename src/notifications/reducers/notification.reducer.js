import {ALERT__HIDE, ALERT__HIDED, ALERT__SHOW} from '../actions/types/notification.types';

const initialState = {
  text: '',
  icon: '',
  type: '',
  status: 'hidden',
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
  case ALERT__SHOW:
    return {
      ...state,
      ...action.alert,
      status: 'show',
    };

  case ALERT__HIDE:
    return {
      ...state,
      ...action.alert,
      status: 'hide',
    };

  case ALERT__HIDED:
    return {
      ...state,
      ...action.alert,
      status: 'hidden',
    };

  default:
    return state;
  }
}

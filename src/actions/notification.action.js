import {
  ALERT__SHOW
} from './types/notification.types';

/*
 * action creators
 */
export function showAlert({title, text, action}) {
  return {
    type: ALERT__SHOW,
    alert:{
      title,
      text,
      action
    }
  };
}


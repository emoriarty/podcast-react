import {ALERT__HIDE, ALERT__HIDED, ALERT__SHOW} from './types/notification.types';
let hideTimeOut;
let hiddenTimeOut;
/*
 * action creators
 */
export function hideAlert() {
  return dispatch => {
    dispatch({ type: ALERT__HIDE });
    clearTimeout(hiddenTimeOut);
    clearTimeout(hideTimeOut);
    hiddenTimeOut = window.setTimeout(() =>{
      dispatch({
        type: ALERT__HIDED,
      });
    }, 500);
  };
}

export function hideTimeOutAlert(alert, time) {
  const timeoutTime = time || 3000;
  return dispatch => {
    if (alert && alert.status === 'show') {
      clearTimeout(hideTimeOut);
      hideTimeOut = window.setTimeout(() =>{
        dispatch({
          type: ALERT__HIDE,
        });
      }, timeoutTime);
    }
  };
}

export function showAlert(text, type) {
  return {
    type: ALERT__SHOW,
    alert:{
      text,
      type
    }
  };
}


export function showAlertSuccess(text) {
  return {
    type: ALERT__SHOW,
    alert:{
      text,
      type:'growler--success',
    }
  };
}

export function showAlertError(text) {
  return {
    type: ALERT__SHOW,
    alert:{
      text,
      type:'growler--error',
    }
  };
}
